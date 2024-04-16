"use client"

import NoProducts from '@/components/store/NoProducts'
import { database, storage } from '@/firebase'
import { AuthContext } from '@/providers/AuthProviser'
import { imgExtRemover } from '@/util/name/imgExtRemover'
import { Chat, Delete, Image, Send } from '@mui/icons-material'
import { onValue, push, ref } from 'firebase/database'
import { getDownloadURL, ref as storageRef, uploadBytes } from "firebase/storage"
import { useContext, useEffect, useRef, useState } from 'react'
import Backdrop from "@mui/material/Backdrop"
import CircularProgress from "@mui/material/CircularProgress"
const TalkToExpert = () => {
    const { user } = useContext(AuthContext)
    const [image, setImage] = useState(undefined)
    const [message, setMessage] = useState("")
    const [chats, setChats] = useState(undefined)
    const [loading, setLoading] = useState(false)
    const dummyRef = useRef()

    useEffect(() => {
        async function fetchData() {
            const dmRef = ref(database, `users/${user.uid}/direct_messages`)
            onValue(dmRef, async (snapshot) => {
                var data = snapshot.val()
                if (data) {
                    var chatsItemsArry = Object.keys(data)
                    const chats = await Promise.all(
                        Object.values(data).map(async (item, index) => {
                            return { ...item, id: chatsItemsArry[index] }
                        })
                    )
                    setChats(chats)

                }
                if (document.querySelector(".chat-sec")) {
                    const scrollHeight = document.querySelector(".chat-sec").scrollHeight + 10000;
                    document.querySelector(".chat-sec").scrollTo(0, scrollHeight)
                }
            })
        }

        fetchData()
    }, [])

    const handleMessageSend = async (e) => {
        e.preventDefault()
        if (message == "") return
        const dmRef = ref(database, `users/${user.uid}/direct_messages`)
        if (image) {
            setLoading(true)
            const expertChatRef = storageRef(storage, `/expert_chats/${Date.now()}.${imgExtRemover(image.name)}`);
            await uploadBytes(expertChatRef, image)
            const url = await getDownloadURL(expertChatRef)
            push(dmRef, {
                message,
                timestamp: Date.now(),
                image: url,
                sender: user.uid,
                read: false
            })
            setLoading(false)
        }
        else {
            push(dmRef, {
                message,
                timestamp: Date.now(),
                sender: user.uid,
                read: false

            })
        }

        dummyRef.current?.scrollIntoView()
        setMessage("")
        setImage(undefined)
    }
    return (
        <div className="talk-to-expert">
            <Backdrop
                sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
                open={loading}
            >
                <CircularProgress color="inherit" />
            </Backdrop>
            <div className="chatbox">
                <div className="chat-logo-div">
                    <img src="/android-chrome-512x512.png" alt="" />
                    <h5>
                        eKisan Dharshan Expert
                    </h5>
                </div>
                {
                    chats ?

                        <ChatSection chats={chats} dummyRef={dummyRef} />
                        :
                        <NoProducts
                            icon={<Chat />}
                            title='Start a talk with our Expert'
                            description=''
                            btnText=''
                        />
                }

            </div>
            <div className="chat-control">
                {
                    image &&
                    <div className="image-preview">
                        <button onClick={() => setImage(undefined)} className="button button-red">
                            <Delete />
                        </button>
                        <img src={URL.createObjectURL(image) || "/images/placeholders/product_placeholder.png"} />
                    </div>
                }
                <div className="wrap">
                    <input onChange={(e) => { setImage(e.target.files[0]) }} type="file" accept='image/jpg, image/png' id="image-input" name="myfile" />
                    <label htmlFor="image-input">
                        <div className="upload-btn-wrapper">
                            <Image color='primary' />
                        </div>
                    </label>
                    <form className='wrap w-full' onSubmit={handleMessageSend}>
                        <textarea required onChange={(e) => setMessage(e.target.value)} value={message} placeholder='Start Typing....' type="text" className='input-box' />
                        <button className='button'>
                            <Send />
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}

const ChatSection = ({ chats, dummyRef }) => {
    const getTime = (timestamp) => {
        const time = new Date(timestamp);
        const hour = time.getHours();
        const minute = time.getMinutes();
        const calculatedHour = hour - 12;
        const meridian = hour > 12 ? "AM" : "PM";
        const calculatedMinute = minute < 10 ? `0${minute}` : minute;
        const formattedTime = `${calculatedHour}:${calculatedMinute} ${meridian}`;

        return formattedTime;
    }
    const { user } = useContext(AuthContext)
    const chatRef = useRef()
    const scrollToBottom = () => {
        const scrollHeight = chatRef.current.scrollHeight + 10000;
        chatRef.current.scrollTo(0, scrollHeight)
    }
    useEffect(() => {
        scrollToBottom()
    }, [])
    return (
        <div className="chat-sec" ref={chatRef} >
            {
                chats.map((item, index) => {
                    return (
                        <div key={index} className={item.sender === user.uid ? "sender" : "reciver"}>
                            <div className="box">
                                {item.image &&
                                    <div className="image">
                                        <img src={item.image} className='w-full' alt="image" />
                                    </div>
                                }
                                <p>
                                    {item.message}
                                </p>
                                <div className="time">
                                    {getTime(item.timestamp)}
                                </div>
                            </div>
                        </div>
                    )
                })

            }
            <div ref={dummyRef} className="dummy"></div>
        </div>
    )
}

export default TalkToExpert