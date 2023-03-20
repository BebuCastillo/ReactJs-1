const Button = ({text, clickEnBoton}) => {
  return (
  <button onClick={() => clickEnBoton(text)}>
    {text}</button>
  );
};

export default Button;