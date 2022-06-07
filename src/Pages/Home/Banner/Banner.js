import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';
//image input---
import banner1 from '../../../image/banner/banner1.jpg'
import banner2 from '../../../image/banner/banner2.jpg'
import banner3 from '../../../image/banner/banner3.jpg'


const Banner = () => {

    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };


    return (

        <Carousel activeIndex={index} onSelect={handleSelect}>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={banner1}
                    alt="A flying shoot"
                />
                <Carousel.Caption className=' bg-dark bg-opacity-25 rounded-pill'>
                    <h3>A Flying shoot</h3>
                    <p>Catch any motion photo with a lovey nature.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={banner2}
                    alt="The Oldest"
                />

                <Carousel.Caption className=' bg-dark bg-opacity-50 rounded-pill'>
                    <h3>The Oldest</h3>
                    <p>Old is Gold. I Capture for You.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={banner3}
                    alt="Third slide"
                />

                <Carousel.Caption className=' bg-dark bg-opacity-25 rounded-pill'>
                    <h3>A Sunset</h3>
                    <p>
                        A Sunset must be enjoyable.
                    </p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>



    );
};

export default Banner;