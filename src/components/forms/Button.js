import { useState } from "react";
import RingLoader from "../RingLoader";

const Button = ({ label, onClick, type, className, isDisabled, isProcessing }) => {
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
        {loading || isProcessing ? <RingLoader /> : label}
      </button>
    </div>
  );
};

export default Button;
