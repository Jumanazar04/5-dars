import React from 'react';
import Slider from 'react-slick';
import img1 from '../../assets/1.jpeg';
import img2 from '../../assets/4.jpeg';
import img3 from '../../assets/3.jpeg';
import img4 from '../../assets/2.jpeg';

const Sliders = () => {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slideToScroll: 1
    }
    return (
        <Slider {...settings}>
            <div className='slider'>
                <img src={img1} alt="first img" />
            </div>
            <div className='slider'>
                <img src={img2} alt="first img" />
            </div>
            <div className='slider'>
                <img src={img3} alt="first img" />
            </div>
            <div className='slider'>
                <img src={img4} alt="first img" />
            </div>
        </Slider>
    );
}

export default Sliders;
