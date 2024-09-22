import { useDispatch, useSelector } from "react-redux";

import { selectNameFilter } from "../../redux/filters/selectors";
import { changeFilter } from "../../redux/filters/slice";

import styles from "./SearchBox.module.css";

const SearchBox = () => {
  const dispatch = useDispatch();
  const filterValue = useSelector(selectNameFilter);

  const handleFilterChange = (event) => {
    dispatch(changeFilter(event.target.value));
  };

  return (
    <label className={styles.searchBox}>
      <span className={styles.label}>Find contacts by name</span>
      <input
        className={styles.input}
        type="text"
        name="searchBar"
        placeholder="Type..."
        value={filterValue}
        onChange={handleFilterChange}
      />
    </label>
  );
};

export default SearchBox;
