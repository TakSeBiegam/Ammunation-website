import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

interface CarouselProps {
    images: string[];
}

const Carousel: React.FC<CarouselProps> = ({ images }) => {
    const settings = {
        infinite: true,
        slidesToShow: 3,
        autoplay: true,
        speed: 7000,
        autoplaySpeed: 0,
        cssEase: "linear"
    };

    return (
        <div style={{ margin: '0 auto', textAlign: 'center', maxWidth: '800px', marginTop: "3%" }}>
            <Slider {...settings} >
                {images.map((image) => (
                    <div key={image}>
                        <img src={image} alt="carousel-image" width={125} height={75} />
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default Carousel;