import styles from './styles.module.css';

const DishesFilter = ({dishTypes, selectedDishType, setSelectedDishType}) => {
    const handleFilterClick = (dishType) => {
        setSelectedDishType(dishType);
        console.log(dishType);
    };


    return (
        <div className={styles.filterButtons}>
            {dishTypes.map((dishType) => (
                <button
                    key={dishType}
                    onClick={() => handleFilterClick(dishType)}
                    className={selectedDishType === dishType ? styles.active : styles.item}
                >
                    {dishType}
                </button>
            ))}
        </div>
    )
};

export default DishesFilter;
