import { useRef } from "react";

export const useSlider = (initialSliderToShow = 3) => {
    const slider = useRef(null);

    const sliderSettings = {
        arrows: false,
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: initialSliderToShow,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]
    };

    const slideToPrev = () => {
        slider.current.slickPrev();
    };

    const slideToNext = () => {
        slider.current.slickNext();
    };

    return { sliderSettings, slider, slideToPrev, slideToNext };
};