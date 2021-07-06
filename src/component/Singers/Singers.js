import React from 'react'
import SimpleCard from '../Card/SimpleCard';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css"
import { useEffect } from 'react';

const Singers = ({ ...props }) => {

    useEffect(() => {
        for (let i = 0; i < props.targetSinger.length; i++) {
            if (document.getElementById(props.targetSinger[i])) {
                document.getElementById(props.targetSinger[i]).classList.add("active");
            }
        }
    }, []);


    const renderlist = () => {
        return props.list.map((item, i) => {
            return <SwiperSlide key={item.id}>
                <SimpleCard id={item.id} name={item.name} img={item.img} gender={item.gender} onClick={props.onClick} />
            </SwiperSlide>
        })
    }


    return (
        <div>
            <Swiper
                spaceBetween={25}
                breakpoints={{
                    540: {
                        width: 540,
                        slidesPerView: 2,
                    }
                }}
                freeMode={true} pagination={{
                    "clickable": true
                }} className="mySwiper">
                {renderlist()}

            </Swiper>
        </div >
    )
}

export default Singers
