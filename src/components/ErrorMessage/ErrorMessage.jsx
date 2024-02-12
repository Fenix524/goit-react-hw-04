import css from './ErrorMessage.module.css';

  const ErrorMessage = () => {
    return (
      <div className={css.errorMessage}>
        There was an error, please try reloading the page!🥴
      </div>
    );
  };

  export default ErrorMessage;
  