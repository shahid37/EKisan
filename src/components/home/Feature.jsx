"use client"
import Image from 'next/image';
import Link from "next/link";
import { useEffect, useState } from 'react';
const Feature = () => {
    const [currentSlide, setCurrentSlide] = useState({
        color: "#8B0202",
        description: "Fruit",
        img: "/images/slider/fruit.png"
    })
    const slides = [
        {
            color: "#8B0202",
            description: "Buy or Sale all agricultural input & output material",
            img: "/images/slider/fruit.png"
        },
        {
            color: "#81B214",
            description: "Farmers & Agriculture Businesses open your online store",
            img: "/images/slider/vegetable.png"
        },
        {
            color: "#D98E5F",
            description: "Connect with farmers directly",
            img: "/images/slider/seeds.png"
        },
        {
            color: "#E8A221",
            description: "Agriculture commodities procurements made easy for food processors & bulk buyers",
            img: "/images/slider/wheet.png"
        },
        {
            color: "#67A037",
            description: "Brand building farmers & Business houses",
            img: "/images/slider/fertilizer.png"
        },
        {
            color: "#e84b16",
            description: "Localised market - Now search farmers and all agriculture material in your own region",
            img: "/images/slider/farm-equipments.png"
        },
        {
            color: "#E8A221",
            description: "Assisting farmers - Self marketing of their farm produce and machineries",
            img: "/images/slider/wheet.png"
        },
        {
            color: "#67A037",
            description: "farmers display farming skills - farmers profile online available for open market",
            img: "/images/slider/fertilizer.png"
        },
        {
            color: "#e84b16",
            description: "Agriculture market data analysis available for farmers & all - Predicts farm and market future seasonally"
        },
        {
            color: "#D98E5F",
            description: "Now farmers connect with agriculture experts through mobile for training and advisory services - on farm solutions",
            img: "/images/slider/seeds.png"
        },
    ]
    useEffect(() => {
        var current = 0
        setInterval(() => {
            if (current < slides.length - 1) {
                current++
            }
            else {
                current = 0
            }
            setCurrentSlide(slides[current])
        }, 5000)
    }, [])
    return (
        <>
            <div className="image-slider">
                <div style={{ backgroundColor: currentSlide.color }} className="item">
                    <div className="left">
                        <div className="img" style={{ backgroundImage: `url(${currentSlide.img})` }}>
                            <img loading='lazy' src='/images/slider/fruit.png' />
                        </div>
                    </div>
                    <div className="right">
                        <h4 className="title">Buy & Sell</h4>
                        <p>
                            {currentSlide.description}
                        </p>
                        <Link href={"/contact"}>
                            <div className="explor">
                                <button style={{ color: currentSlide.color }}>
                                    Contact
                                </button>
                            </div>
                        </Link>
                    </div>
                    <div className="logo">
                        <Image loading='lazy' alt='eKisan Darshan Logo' src='/images/ekisan-darshan-logo.jpeg' width={30} height={30} />
                    </div>
                </div>
            </div>
            <div className="bulk-query">
                <div className="item">
                    <h4 className="title">Want to buy in bulk?</h4>
                    <Link href={"/bulk-query"}>
                        <div className="explor flex justify-center w-full mt-2">
                            <button style={{ color: '#8B0202' }}>
                                Bulk Query
                            </button>
                        </div>
                    </Link>
                    <div className="logo">
                        <Image loading='lazy' alt='eKisan Darshan Logo' src='/images/ekisan-darshan-logo.jpeg' width={30} height={30} />
                    </div>
                </div >
            </div >
        </>
    )
}

export default Feature