import React from 'react'
// import "~slick-carousel/slick/slick.css"; 
// import "~slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import { TopMeals } from './TopMeals';


const MultipleItemCarousal = () => {

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 8,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: false
    };

    return (
        <div>
            <Slider {...settings}>
                {TopMeals.map((item) => <CarouselItem
                    image={item.image}
                    title={image.title} />
                )}
            </Slider>
        </div>
    )
}

export default MultipleItemCarousal