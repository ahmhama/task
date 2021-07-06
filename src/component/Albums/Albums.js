import React, { useEffect } from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import SimpleCard from '../Card/SimpleCard';

const Albums = ({ ...props }) => {
    useEffect(() => {
        for (let i = 0; i < props.dataAlbums.length; i++) {
            if (document.getElementById(props.dataAlbums[i])) {
                document.getElementById(props.dataAlbums[i]).classList.add("active");
            }
        }
    }, []);


    const renderlist = () => {
        return props.dataTargrt.map((item, i) => {
            return item.albums.map(album => {
                return <SwiperSlide key={album.album}>
                    <SimpleCard
                        data_singer={item.data_singer}
                        id={album.album}
                        img={album.img}
                        name={album.name}
                        year={album.year}
                        onClick={props.getDataalbums} />
                </SwiperSlide>
            })

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
        </div>
    )
}

export default Albums
