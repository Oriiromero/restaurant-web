import React from 'react';
import './Slider.css';
import {useInView} from "react-intersection-observer";

const Slider = ({ imageSrc, title, subtitle, flipped }) => {

    const {ref, inView} = useInView({
        threshold: 0.4,
    });

    const renderContent = () => {

        if (!flipped) {
            return <>
                <img src={imageSrc} alt='resto' className='slider_image' />
                <div className='slider__content'>
                    <h1 className='slider__title'>{title}</h1>
                    <p className='slider__subtitle'>{subtitle}</p>
                </div>
            </>;
        } else {
            return <>
                <div className='slider__content'>
                    <h1 className='slider__title'>{title}</h1>
                    <p className='slider__subtitle'>{subtitle}</p>
                </div>
                <img src={imageSrc} alt='resto' className='slider_image' />
            </>;
        }
    }

    return (
        <div className={inView ? 'slider slider--zoom' : 'slider'} ref={ref}>
            {renderContent()}
        </div>
    )
}

export default Slider;
