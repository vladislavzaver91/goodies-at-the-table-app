import { useSearch } from '../../contexts/Context.tsx';
import styles from './styles.module.css';

interface Props {
    dishTypes: string[];
    selectedDishType: string | null;
    setSelectedDishType: (dishType: string | null) => void;
    onRefresh: () => void;
}

const DishesFilter = ({ dishTypes, selectedDishType, setSelectedDishType, onRefresh }: Props) => {
    const { isFilterApplied } = useSearch();

    const handleFilterClick = (dishType: string) => {
        setSelectedDishType(selectedDishType === dishType ? null : dishType);
        console.log("Selected Dish Type:", selectedDishType);
    };

    return (
        <div>
            {isFilterApplied && (
                <button onClick={() => onRefresh()} className={styles.refreshBtn}>
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
