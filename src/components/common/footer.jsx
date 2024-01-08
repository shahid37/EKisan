import React from 'react'

import Link from 'next/link';
import { FacebookOutlined, Instagram, LinkedIn, Twitter, YouTube } from '@mui/icons-material';

const Footer = () => {
    const quickLinks = [
        {
            label: "Home",
            href: "#"
        },
        {
            label: "Profile",
            href: "#"
        },
        {
            label: "Cart",
            href: "#"
        },
        {
            label: "About Us",
            href: "#"
        }
    ];

    return (
        <div className="md:px-20 md:py-10 py-10 px-10 footer">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                <div>
                    <h5 className="text-xl uppercase">About us</h5> <br />
                    <p className='leading-7 tracking-wider'>eKisan Darshan किसानों को कृषि की दुनिया का नेतृत्व करने में सक्षम बनाता है। यहां निवेशक, बाजार और उपभोक्ता किसी भी क्षेत्र के किसान के साथ संपर्क कर सकते हैं।</p>
                    <p className='mt-3'>Follow us on</p>
                    <div className="flex mt-2 gap-2">
                        <a href="https://m.facebook.com/ekisandarshan.in/" className='text-link-green hover:text-main-green'><FacebookOutlined /></a>
                        <a href="https://www.instagram.com/ekisandarshan/" className='text-link-green hover:text-main-green'><Instagram /></a>
                        <a href="https://www.youtube.com/channel/UCary0JMBgjVxTpwFpPsLcxg" className='text-link-green hover:text-main-green'><YouTube /></a>
                        <a href="https://www.linkedin.com/in/ekisan-darshan-411785243" className='text-link-green hover:text-main-green'><LinkedIn /></a>
                        <a href="https://twitter.com/ekisandarshan" className='text-link-green hover:text-main-green'><Twitter /></a>
                    </div>
                </div>
                <div>
                    <h5 className="text-xl uppercase md:text-center">Quick Links</h5> <br />
                    <ul className="md:text-center">
                        {
                            quickLinks.map((item, i) => {
                                return (
                                    <li key={i}>
                                        <Link className='text-link-green hover:text-main-green' href={item.href}>
                                            {item.label}
                                        </Link>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
                <div>
                    <div>
                        <h5 className="text-xl uppercase">Contact</h5><br />
                        <p>Address: <a className='text-link-green  hover:text-main-green' href="https://goo.gl/maps/VnxLxPuLAGacZ6Lo9">Loknathpur, Dalsinghsarai-848114, Samastipur, Bihar</a></p>

                        <p>Phone: <a className='text-link-green hover:text-main-green' href="tel:+919424824272"> +91 9424824272</a>
                            <br />
                            Email: <a className='text-link-green hover:text-main-green' href="mailto:ekisandarshan@gmail.com">ekisandarshan@gmail.com</a></p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer