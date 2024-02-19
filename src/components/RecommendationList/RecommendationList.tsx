import Slider from 'react-slick';
import RecommendationItem from '../RecommendationItem/RecommendationItem';
import styles from './styles.module.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { useSlider } from '../../hooks/useSlider';
import { IDishes } from '../../interfaces';

interface Props {
    dishes: IDishes[];
}

const RecommendationList = ({ dishes }: Props) => {
    const { sliderSettings, slider, slideToPrev, slideToNext } = useSlider();

    return (
        <div>
            <Slider ref={slider} {...sliderSettings} className={styles.slider}>
                {dishes.map((dish, index) => (
                    <ul key={index} className={styles.list}>
                        <RecommendationItem dish={dish} />
                    </ul>
                ))}
            </Slider>
            <div className={styles.arrowsBtnContainer}>
                <button onClick={slideToPrev} className={styles.arrowsBtn}>
                    <FaArrowLeft />
                </button>
                <button onClick={slideToNext} className={styles.arrowsBtn}>
                    <FaArrowRight />
                </button>
            </div>
        </div>
    );
};

export default RecommendationList;




