import React, { useState } from "react";
import RingLoader from "../RingLoader";

const Button = ({ label, onClick, type, className, isDisabled, isProcessing, icon }) => {
  const [loading, setLoading] = useState(false);

  const handleClick = async () => {
    setLoading(true);
    if (onClick) {
      await onClick();
    }
    setLoading(false);
  };

  const buttonClasses = `${className} ${isDisabled || loading || isProcessing ? "disabled" : ""}`;

  return (
    <div className="button-container">
      <button
        type={type}
        className={buttonClasses}
        disabled={isDisabled || loading || isProcessing}
        onClick={handleClick}
      >
        <div className="button-content">
          {!loading && !isDisabled && !isProcessing && ( // Conditionally render icon and label
            <div className="button-left">
              <span className="button-icon">{icon}</span>
              {label}
            </div>
          )}
          {loading || isProcessing ? (
            <div className="button-loader">
              <RingLoader />
            </div>
          ) : null}
        </div>
      </button>
    </div>
  );
};

export default Button;
