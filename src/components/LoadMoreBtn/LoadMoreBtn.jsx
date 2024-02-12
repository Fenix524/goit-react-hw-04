import css from './LoadMoreBtn.module.css';

  const LoadMoreBtn = ({setNextPage}) => {
    return (
      <div className={css.wraper}>
        <button className={css.btn} onClick={setNextPage}>Load more</button>
      </div>
    );
  };

  export default LoadMoreBtn;
  