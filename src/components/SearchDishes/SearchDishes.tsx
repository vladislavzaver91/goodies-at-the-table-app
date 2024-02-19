import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaSearch } from "react-icons/fa";
import { useSearch } from '../../contexts/Context.tsx';
import styles from './styles.module.css';

interface Props {
    closeMenu: () => void;
}

const SearchDishes = ({ closeMenu }: Props) => {
    const [keywords, setKeywords] = useState<string>('');
    const { setSearchQuery } = useSearch();
    const navigate = useNavigate();

    const handleKeyDown = (evt: React.KeyboardEvent<HTMLInputElement>) => {
        if (evt.key === 'Enter') {
            evt.preventDefault();
            setSearchQuery(keywords);
            setKeywords('');
            closeMenu();
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


