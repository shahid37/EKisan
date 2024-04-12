"use client"
import Layout from '@/components/common/Layout'
import React from 'react'
import Image from "next/image"
import { FacebookOutlined, Instagram, LinkedIn, Twitter, YouTube } from '@mui/icons-material';
const page = () => {
    return (
        <Layout>
            <div className="about-us">
                <section className='about-ekd'>
                    <h3 className="heading">
                        About <span>eKisan Darshan</span>
                    </h3>
                    <Image loading='lazy' width={100} height={100} alt='eKisan Darshan Logo' src={"/images/logo-transparent.png"} />
                    <p>
                        eKisan Darshan provides a platform for farmers, wholesaler, bulk buyers, and daily consumers to bring all in one agricultural market.
                    </p>
                    <div className="flex mt-2 gap-2">
                        <a href="https://m.facebook.com/ekisandarshan.in/" className='text-link-green hover:text-main-green'><FacebookOutlined /></a>
                        <a href="https://www.instagram.com/ekisandarshan/" className='text-link-green hover:text-main-green'><Instagram /></a>
                        <a href="https://www.youtube.com/@ekisandarshan" className='text-link-green hover:text-main-green'><YouTube /></a>
                        <a href="https://www.linkedin.com/in/ekisan-darshan-411785243" className='text-link-green hover:text-main-green'><LinkedIn /></a>
                        <a href="https://twitter.com/ekisandarshan" className='text-link-green hover:text-main-green'><Twitter /></a>
                    </div>
                </section>
                <div className="break"></div>
                <section className='why-choose-us'>
                    <h3 className="heading">
                        Why Choose <span>us</span>?
                    </h3>
                    <div className="my-3">
                        <h4 className="sub-heading">
                            Get a Virtual Store
                        </h4>
                        <p>
                            eKisan Darshan a platform for farmers, wholesaler, bulk buyers, and daily consumers to bring all in one agricultural market
                        </p>
                    </div>
                    <div className="my-3">
                        <h4 className="sub-heading">
                            Show your Products
                        </h4>
                        <p>
                            eKisan Darshan helps farmer showcase their resources, agricultural activities and sell farm produce to consumers and corporate directly which brings the overall cost within the range for all.
                        </p>
                    </div>
                </section>
                <div className="break"></div>
                <section className="business-with-us">
                    <h3 className="heading">
                        Bussines with us
                    </h3>

                    <h4 className="sub-heading">We can be parter in mutual growth</h4>

                    <ul>
                        <li>
                            We provide localized system that helps the small vendors or sellers of all kinds of agricultural inputs (farm implements, fertilizers, seeds, pesticides etc.) and produce (vegetables, fruits, whole food grains etc.) to reach out to farmers as well as consumers in your own region. eKisan Darshan Get a virtual store.
                        </li>
                        <li>
                            Bulk buyers and sellers can have a real time raw material availability region wise.
                        </li>
                        <li>
                            Food processing organizations can have data like fresh raw materials availability both season and region wise.
                        </li>
                        <li>
                            The system can help in establishing localized big planned cultivation as the farmer&apos;s available resources can be utilized in better ways as can be clubbed also.
                        </li>
                    </ul>
                </section>
                <div className="break"></div>
                <section className="our-team">
                    <h3 className="heading">
                        Our Team
                    </h3>
                    <div className="wrapper">
                        <div className="team-card">
                            <div className="image">
                                <img src="/images/logo-transparent.png" alt="" />
                            </div>
                            <div className="detail">
                                <div className="name">
                                    Praveen Sharma
                                </div>
                                <div className="role">
                                    Founder/CEO
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="wrapper">
                        <div className="team-card">
                            <div className="image">
                                <img src="/images/about/dhiraj.jpg" alt="" />
                            </div>
                            <div className="detail">
                                <div className="name">
                                    Dhiraj Prajapati
                                </div>
                                <div className="role">
                                    Full Stack Developer
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="wrapper">
                        <div className="team-card">
                            <div className="image">
                                <img src="/images/logo-transparent.png" alt="" />
                            </div>
                            <div className="detail">
                                <div className="name">
                                    Himanshu Bari
                                </div>
                                <div className="role">
                                    Front-End and R&D
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </Layout>
    )
}

export default page