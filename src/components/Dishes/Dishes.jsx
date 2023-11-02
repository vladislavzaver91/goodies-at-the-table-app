import { useState } from 'react';
import { useEffect } from 'react';
import { fetchData } from '../../services/apiEdamam';
import DishesList from '../DishesList/DishesList';
import styles from './styles.module.css';


const Dishes = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetchData().then((res) => {
        const dishes = res.hits.map(item => item.recipe);
        setData(dishes);
        console.log(dishes);
        })
    }, []);
    
    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <h2 className={styles.title}>
                    Our dishes
                </h2>
                <DishesList dishes={data} />
            </div>
        </section>
    )
};

export default Dishes;