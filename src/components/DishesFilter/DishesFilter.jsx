import { useSearch } from '../../contexts/Context.jsx';
import styles from './styles.module.css';

const DishesFilter = ({ dishTypes, selectedDishType, setSelectedDishType, onRefresh }) => {
    const { isFilterApplied, setIsFilterApplied } = useSearch();

    const handleFilterClick = (dishType) => {
        setSelectedDishType(selectedDishType === dishType ? null : dishType);
        console.log("Selected Dish Type:", selectedDishType);
    };

    const handleRefreshClick = () => {
        setIsFilterApplied(false);
        onRefresh();
    };

    return (
        <div>
            {isFilterApplied && (
                <button onClick={handleRefreshClick} className={styles.refreshBtn}>
                Refresh
            </button>
            )}
            
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
        </div>
    )
};

export default DishesFilter;
