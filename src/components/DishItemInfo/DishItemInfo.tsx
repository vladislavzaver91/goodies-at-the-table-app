import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchById } from '../../services/apiEdamam';
import styles from './styles.module.css';
import { IDishes } from '../../interfaces';

const DishItemInfo = () => {
    const [item, setItem] = useState<IDishes>();
    const { dishId } = useParams();
    
    useEffect(() => {
        if (dishId !== '') {
            fetchById(dishId).then((res) => {
                console.log(res);
                setItem(res.recipe);
                console.log(res.recipe);
            })
        }
    }, [dishId]);

    return (
        <section>
            {
                (!item) ? '' : (
                    <>
                        <div className={styles.container}>
                            <div className={styles.contantInfo}>
                                <div style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    maxWidth: 1440,
                                    height: 250,
                                    margin: '0 auto',
                                    paddingTop: 133,
                                    paddingBottom: 133,
                                    textAlign: 'center',
                                    backgroundColor: '#2F303A',
                                    backgroundImage: `linear-gradient( to right, 
                                        rgba(47, 48, 58, 0.7),
                                        rgba(47, 48, 58, 0.7)),
                                        url(${item.image})`,
                                    backgroundSize: 'cover',
                                    backgroundRepeat: 'no-repeat',
                                    backgroundPosition: 'center'
                                }}>
                                    <h2 className={styles.contantTitle}>
                                        {item.label}
                                    </h2>
                                </div>
                            </div>
                            <div className={styles.contantDetails}>
                                <div className={styles.gridWrapper}>
                                    <div>
                                        <h3 className={styles.contantDetailsTitle}>
                                            Ingredients
                                        </h3>
                                        <ul className={styles.ingredientsList}>
                                            {item.ingredients.map(({ food, foodId, image }) => (
                                                <li key={foodId} className={styles.ingredientsListItem}>
                                                    <img src={image} alt={food} width={100} height={100} />
                                                    <p className={styles.text}>{food.charAt(0).toUpperCase() + food.slice(1)}</p>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                    <div className={styles.mealDetails}>
                                        <p className={styles.text}>
                                            <span className={styles.contantDetailsTitle}>Price:</span>
                                            150 UAH
                                        </p>
                                        <p className={styles.text}>
                                            <span className={styles.contantDetailsTitle}>Cuisine:</span>
                                            {String(item.cuisineType).charAt(0).toUpperCase() + String(item.cuisineType).slice(1)} food
                                        </p>
                                        <p className={styles.text}>
                                            <span className={styles.contantDetailsTitle}>Mealtime:</span>
                                            {item.mealType[0].charAt(0).toUpperCase() + item.mealType[0].slice(1)}
                                        </p>
                                        <p className={styles.text}>
                                            <span className={styles.contantDetailsTitle}>Dish:</span>
                                            {String(item.dishType).charAt(0).toUpperCase() + String(item.dishType).slice(1)}
                                        </p>
                                    </div>
                                </div>
                                <div className={styles.additionalInfoWrapper}>
                                    <h3 className={styles.contantDetailsTitle}>Additional Information</h3>
                                    <p className={styles.text}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit, aperiam laudantium. Consectetur, quis voluptate laudantium cum esse voluptas. Quasi quas ipsum, adipisci in nostrum maiores iste debitis quam dolore blanditiis?</p>
                                </div>
                            </div>
                        </div>
                    </>
                )
            }
        </section>
    )
};

export default DishItemInfo;