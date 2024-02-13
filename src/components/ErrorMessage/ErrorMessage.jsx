import css from './ErrorMessage.module.css';

  const ErrorMessage = ({errorMessage}) => {
    return (
      <div className={css.errorMessage}>
        {errorMessage}
      </div>
    );
  };

  export default ErrorMessage;
  