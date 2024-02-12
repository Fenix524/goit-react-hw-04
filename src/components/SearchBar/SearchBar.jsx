import css from "./SearchBar.module.css";
import toast from "react-hot-toast";

const SearchBar = ({ onSubmit }) => {
  const handleSubmit = (evt) => {
    evt.preventDefault();
    const form = evt.target;

    form.searchText.value
      ? onSubmit(form.searchText.value)
      : toast.error("Fill in the search field!");
  };

  return (
    <header className={css.wraper}>
      <form className={css.form} onSubmit={handleSubmit}>
        <input
          className={css.input}
          name="searchText"
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
        <button className={css.submitBtn} type="submit">
          Search
        </button>
      </form>
    </header>
  );
};

export default SearchBar;
