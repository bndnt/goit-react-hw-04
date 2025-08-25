import css from "./SearchBar.module.css";
import { FaSearch } from "react-icons/fa";
import toast, { Toaster } from "react-hot-toast";
import { useState } from "react";
export default function SearchBar({ onSubmit }) {
  const [notification, setNotification] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const inputValue = form.elements.word.value;
    if (form.elements.word.value.trim() === "") {
      setNotification(true);
    } else {
      setNotification(false);
      onSubmit(form.elements.word.value);
    }

    form.reset();
    // console.log(inputValue);
  };
  const notify = () => {
    // toast.dismiss();
    toast.remove();
    toast.error("Type at least 1 symbol");
  };

  return (
    <header className={css.header}>
      <form className={css.form} onSubmit={handleSubmit}>
        <input
          name="word"
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          className={css.input}
        />
        <button onClick={notify} className={css.btn} type="submit">
          <span>
            <FaSearch />
          </span>
          <span className={css.searchSpanText}>Search</span>
        </button>
      </form>
      {notification && <Toaster position="top-left" reverseOrder={false} />}
    </header>
  );
}
