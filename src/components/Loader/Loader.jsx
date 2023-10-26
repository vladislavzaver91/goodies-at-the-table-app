import { MutatingDots } from 'react-loader-spinner';
import styles from './styles.module.css';

const Loader = () => {
    return (
    <div className={styles.spinner}>
        <MutatingDots 
            height="100"
            width="100"
            color="#884619"
            secondaryColor="#884619"
            radius='12.5'
            ariaLabel="mutating-dots-loading"
            wrapperStyle={{}}
            wrapperClass=""
            visible={true}
        />
    </div>
    );
};

export default Loader;