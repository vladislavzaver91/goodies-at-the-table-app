import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaSearch } from "react-icons/fa";
import { useSearch } from '../../contexts/Context.jsx';
import styles from './styles.module.css';

const SearchDishes = () => {
    const [keywords, setKeywords] = useState('');
    const { setSearchQuery } = useSearch();
    const navigate = useNavigate();

    const handleKeyDown = evt => {
        if (evt.key === 'Enter') {
            evt.preventDefault();
            setSearchQuery(keywords);
            setKeywords('');
            navigate('/dishes');
        }
    };

    return (
        <div className={styles.search}>
            <div className={styles.searchIcon}>
                <FaSearch />
            </div>
            <input
                type="text"
                value={keywords}
                onChange={(evt) => { setKeywords(evt.target.value) }}
                onKeyDown={handleKeyDown}
                placeholder="Search for a dish"
                className={styles.input} />
        </div>
    )
};

export default SearchDishes;


