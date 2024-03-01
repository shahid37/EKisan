import React from 'react'
import CommentIcon from '@mui/icons-material/Comment';
import { ShoppingBag } from '@mui/icons-material';
const page = () => {
    return (
        <div className='px-2 notifications'>
            <h3 className="heading text-2xl">
                Notification
            </h3>
            <div className="notify-item">
                <div className="left">
                    <h6 className="title">
                        You recived an order for Potatos
                    </h6>
                    <p className="detail">
                        Get details by clicking view more
                    </p>
                    <button className="button">View More</button>
                </div>
                <div className="right">
                    <ShoppingBag color='primary' />

                </div>
            </div>
            <div className="notify-item">
                <div className="left">
                    <h6 className="title">
                        Reply from expert for I need help about....
                    </h6>
                    <p className="detail">
                        Sure We can Help....
                    </p>
                    <button className="button">View More</button>
                </div>
                <div className="right">
                    <CommentIcon color='primary' />
                </div>
            </div>
            <div className="notify-item">
                <div className="left">
                    <h6 className="title">
                        Your order for Wheet has been placed
                    </h6>
                    <p className="detail">
                        Get details by clicking view more
                    </p>
                    <button className="button">View More</button>
                </div>
                <div className="right">
                    <ShoppingBag color='primary' />
                </div>
            </div>
        </div>
    )
}

export default page