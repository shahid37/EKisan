"use client"

import React, { useContext, useEffect, useState } from 'react'
import CommentIcon from '@mui/icons-material/Comment';
import { NotificationAdd, ShoppingBag } from '@mui/icons-material';
import NoProducts from '@/components/store/NoProducts';
import fetchNotifications from '@/util/account/fetchNotifiation';
import { AuthContext } from '@/providers/AuthProviser';
import Image from "next/image"
import Link from "next/link"
const Notifications = () => {
    const [notification, setNotification] = useState(null);
    const { user } = useContext(AuthContext)
    useEffect(() => {
        const fetchData = async () => {

            setNotification(await fetchNotifications({ user }))
        }
        fetchData();
    }, [])
    function timeAgo(timestamp) {
        var seconds = Math.floor((new Date() - timestamp) / 1000);
        var interval = Math.floor(seconds / 60);

        if (interval < 1) {
            return 1 + "s";
        }
        if (interval < 60) {
            return interval + "m";
        }

        interval = Math.floor(interval / 60);
        if (interval < 24) {
            return interval + "h";
        }

        interval = Math.floor(interval / 24);
        if (interval < 30) {
            return interval + "d";
        }

        interval = Math.floor(interval / 30);
        if (interval < 12) {
            return interval + "mo";
        }

        interval = Math.floor(interval / 12);
        return interval + "y";
    }

    const Icons = {
        "order": <ShoppingBag color='primary' />,
        "experts-reply": <CommentIcon color='primary' />,
    }
    if (!notification?.length) {
        return (
            <div className="px-2">
                <NoProducts
                    btnText='Continue Shopping'
                    href='/'
                    title="Looks like you don't have any notifications yet."
                    description=''
                    icon={<NotificationAdd />}
                />
            </div>
        )
    }
    else {
        return (
            <div className='px-2 notifications'>
                <h3 className="heading text-2xl">
                    Notification
                </h3>
                {
                    notification.map((item, index) => {
                        return (
                            <div key={index} className="notify-item">
                                <div className="left">
                                    <h6 className="title">
                                        {item.title || "eKisan Darshan"}
                                    </h6>
                                    <p className="detail">
                                        {item.description || item.reply}
                                    </p>
                                    {
                                        item.buttonUrl && <Link href={item.buttonUrl}>
                                            <button className="button">{item.buttonText}</button>
                                        </Link>
                                    }
                                </div>
                                <div className="right">
                                    <div className="time">
                                        {timeAgo(item.timestamp)}
                                    </div>
                                    {Icons[item.type] || <Image width={40} height={40} src="/images/ekisan-darshan-logo.jpeg" />}
                                </div>
                            </div>)
                    })
                }

            </div>
        )
    }
}

export default Notifications