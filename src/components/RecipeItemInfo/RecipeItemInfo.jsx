import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styles from './styles.module.css';
import { fetchById } from '../../services/apiTheMealDb';

const RecipeItemInfo = () => {
    const [item, setItem] = useState();
    const { recipeId } = useParams();

    useEffect(() => {
        if (recipeId !== '') {
            fetchById(recipeId).then((res) => {
                setItem(res.meals[0]);
                console.log(res.meals[0]);
            })
        }
    }, [recipeId]);

    return (
        <section className={styles.section}>
            {
                (!item) ? '' : (
                    <>
                                                {/* <div className={styles.container}>
                            <div className={styles.contantInfo}>
                                <div style={{
                                    maxWidth: 1440,
                                    height: 300,
    margin: '0 auto',
    paddingTop: 133,
    paddingBottom: 133,
    textAlign: 'center',
    backgroundColor: '#2F303A',
    backgroundImage: `linear-gradient( to right, 
        rgba(47, 48, 58, 0.7),
        rgba(47, 48, 58, 0.7)),
        url(${item.strMealThumb})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center'
}}>
                                    <h2 className={styles.contantTitle}>
                                        {item.strMeal}
                                    </h2>
                                </div>
                            </div> */}

                        <div className={styles.container}>
                            <div className={styles.contantInfo}>
                                <img src={item.strMealThumb} alt={item.strMeal} className={styles.contentImg} />
                                <div className={styles.innerContantInfo}>
                                    <h2 className={styles.contantTitle}>
                                        {item.strMeal}
                                    </h2>
                                </div>
                            </div>
                
                            <div className={styles.contantDetails}>
                                <h3 className={styles.ingridientTitle}>
                                    Ingridients
                                </h3>
                                <p>{item.strIngredient1}</p>
                                <p>{item.strIngredient2}</p>
                                <p>{item.strIngredient3}</p>
                                <p>{item.strIngredient4}</p>
                                <p>{item.strIngredient5}</p>
                                <p>{item.strIngredient6}</p>
                                <p>{item.strIngredient7}</p>
                                <p>{item.strIngredient8}</p>
                            </div>
                        </div>
                    </>
                )
            }
        </section>
    )
};

export default RecipeItemInfo;