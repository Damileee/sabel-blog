const RingLoader = ({ color, text }) => {
    const ringClasses = `lds-ring${color ? ' lds-ring-alt' : ''}`;
  
    return (
      <div className="ring-loader-container">
        <div className={ringClasses}>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
        {text && <p>{text}</p>}
      </div>
    );
  };
  
  export default RingLoader;