"use client"
import Image from 'next/image';
import Link from "next/link";
import { useEffect, useState } from 'react';
const Feature = () => {
    const [currentSlide, setCurrentSlide] = useState({
        color: "#8B0202",
        name: "Fruit",
        img: "/images/slider/fruit.png"
    })
    const slides = [
        {
            color: "#8B0202",
            name: "Fruit",
            img: "/images/slider/fruit.png"
        },
        {
            color: "#81B214",
            name: "vegetables",
            img: "/images/slider/vegetable.png"
        },
        {
            color: "#D98E5F",
            name: "seeds",
            img: "/images/slider/seeds.png"
        },
        {
            color: "#E8A221",
            name: "Grains",
            img: "/images/slider/wheet.png"
        },
        {
            color: "#67A037",
            name: "Fertilizers",
            img: "/images/slider/fertilizer.png"
        },
        {
            color: "#e84b16",
            name: "Equipements",
            img: "/images/slider/farm-equipments.png"
        }
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
        <div className="image-slider">
            <div style={{ backgroundColor: currentSlide.color }} className="item">
                <div className="left">
                    <div className="img" style={{ backgroundImage: `url(${currentSlide.img})` }}>
                        <img src='/images/slider/fruit.png' />
                    </div>
                </div>
                <div className="right">
                    <h4 className="title">Buy & Sell</h4>
                    <p>
                        <b>eKisan Darshan</b> allows farmers and seller to sell their <b>{currentSlide.name}</b> direct to consumers and Manufacturers avoiding Middle Man with Zero Commission
                    </p>
                    <Link href={"/"}>
                        <div className="explor">
                            <button style={{ color: currentSlide.color }}>
                                Explore
                            </button>
                        </div>
                    </Link>
                </div>
                <div className="logo">
                    <Image alt='eKisan Darshan Logo' src='/images/ekisan-darshan-logo.jpeg' width={30} height={30} />
                </div>
            </div>
        </div>
    )
}

export default Feature