type Props = {
  text: string;
  onClick: () => void;
};

const Button: React.FC<Props> = ({ text, onClick }) => {
  return <button onClick={onClick}>{text}</button>;
};

export default Button;
