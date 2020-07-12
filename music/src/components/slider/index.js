import React, { useState, useEffect } from 'react'
import { SliderContainer } from './style'
import "swiper/css/swiper.css"
import Swiper from 'swiper'
function Slider(props) {
    const [sliderSwiper, setSliderSwiper ] = useState(null);
    const { bannerList } = props;
    console.log(bannerList)

    useEffect(() => {
        if (bannerList.length && !sliderSwiper) {
            let sliderSwiper = new Swiper('.slider-container', {
                loop: true,
                autoplay: true,
                autoplayDisableOnInteraction: false,
                pagination: { el: '.swiper-pagination' },
            })
            setSliderSwiper(sliderSwiper)
        }
    }, [bannerList, sliderSwiper])

    return (
        <SliderContainer>
            <div className="before"></div>
            <div className="slider-container">
                <div className="swiper-wrapper">
                    {
                        bannerList.map(item => {
                            return (
                                <div className="swiper-slide" key={item.key} onClick={() =>window.open(item.url)}>
                                    <div className="slider-nav">
                                        <img src={item.imageUrl} width="100%" height="100%" alt="推荐" />
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
                <div className="swiper-pagination"></div>
            </div>
        </SliderContainer>
    )
}

export default React.memo(Slider);