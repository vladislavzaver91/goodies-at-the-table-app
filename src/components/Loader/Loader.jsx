import { Hourglass } from 'react-loader-spinner';

import styles from './styles.module.css';

const Loader = () => {
    return (
        <div className={styles.backdrop}>
            <div className={styles.spinner}>
                <Hourglass
                    visible={true}
                    height="80"
                    width="80"
                    ariaLabel="hourglass-loading"
                    wrapperStyle={{}}
                    wrapperClass=""
                    colors={['#884619', '#FFDB63']}
                />
            </div>
        </div>
    );
};



export default Loader;