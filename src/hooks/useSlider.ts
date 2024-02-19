import { useRef, RefObject } from "react";
import Slider, { Settings } from "react-slick";

export interface ISliderHooks {
    sliderSettings: Settings;
    slider: RefObject<Slider>;
    slideToPrev: () => void;
    slideToNext: () => void;
}

export const useSlider = (initialSliderToShow = 3): ISliderHooks => {
    const slider = useRef<Slider>(null);

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
        if (slider.current && slider.current.slickPrev) {
            slider.current.slickPrev();
        }
    };

    const slideToNext = () => {
        if (slider.current && slider.current.slickNext) {
            slider.current.slickNext();
        }
    };

    return { sliderSettings, slider, slideToPrev, slideToNext };
};