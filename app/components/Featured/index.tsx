"use client";
import Slider from "react-slick";
import React, { Component } from "react";
import Image from "next/image";
import Link from "next/link";

// CAROUSEL DATA
interface DataType {
    heading: string;
    imgSrc: string;
}

const postData: DataType[] = [
    {
        heading: "Bursary Management",
        imgSrc: "/images/featured/bursary1.webp",
    },
    {
        heading: "Ticketing",
        imgSrc: "/images/featured/ticket1.webp",
    },
    {
        heading: "Bursary Management",
        imgSrc: "/images/featured/bursary1.webp",
    },
    {
        heading: "Ticketing",
        imgSrc: "/images/featured/ticket1.webp",
    },
];

// CAROUSEL SETTINGS
function SampleNextArrow(props: { className: any; style: any; onClick: any }) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{
                ...style,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                background: "rgba(255, 255, 255, 0.3)",
                padding: "28px",
                borderRadius: "20px",
            }}
            onClick={onClick}
        />
    );
}

function SamplePrevArrow(props: { className: any; style: any; onClick: any }) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{
                ...style,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                background: "rgba(255, 255, 255, 0.3)",
                padding: "28px",
                borderRadius: "20px",
            }}
            onClick={onClick}
        />
    );
}

export default class MultipleItems extends Component {
    render() {
        const settings = {
            dots: false,
            infinite: true,
            slidesToShow: 2,
            slidesToScroll: 1,
            arrows: true,
            autoplay: false,
            speed: 500,
            nextArrow: <SampleNextArrow className={undefined} style={undefined} onClick={undefined} />,
            prevArrow: <SamplePrevArrow className={undefined} style={undefined} onClick={undefined} />,
            cssEase: "linear",
            responsive: [
                {
                    breakpoint: 420,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        infinite: true,
                        dots: false,
                    },
                },
            ],
        };

        return (
            <div id="featured-section" className="bg-bgblue py-14 marginFeature bg-featured">
                <div className="mx-auto max-w-7xl sm:py-4 lg:px-8">
                    <div className="text-center pt-48 pb-10 md:pt-96">
                        <h3 className="text-4xl sm:text-6xl font-bold text-white my-2">Featured works.</h3>
                    </div>
                    <Slider {...settings} className="flex flex-wrap">
                        {postData.map((items, i) => (
                            <div key={i} className="w-full sm:w-1/2 lg:w-1/3">
                                <div className="bg-transparent m-3 pb-6 my-10 rounded-3xl flex flex-col h-full">
                                    <Image
                                        src={items.imgSrc}
                                        alt="feature"
                                        width={389}
                                        height={262}
                                        className="rounded-t-2xl w-full"
                                    />
                                    <div className="bg-white text-center p-4 rounded-b-2xl flex-grow">
                                    <Link href="/">
                                        <h4 className="text-lg font-bold text-gray-800 hover:border-r-gold">{items.heading}</h4>
                                    </Link>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </Slider>

                </div>
            </div>
        );
    }
}
