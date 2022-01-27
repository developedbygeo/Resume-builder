const Counter = ({ currentLength, maxLength }) => {
  return (
    <p className="counter">
      {currentLength}/{maxLength}
    </p>
  );
};

export default Counter;
