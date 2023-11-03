import DishItem from '../DishItem/DishItem';

const DishesList = ({ dishes }) => {
    return (
        <ul>
            {dishes.map((recipe, index) => (
                <DishItem dish={recipe} key={index} />
            ))
            }
        </ul>
    )
};

export default DishesList;