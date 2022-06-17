type Props = {
  text: string;
};

const Label: React.FC<Props> = ({ text }) => {
  return <div style={{ marginTop: 10, marginBottom: 10 }}>{text}</div>;
};

export default Label;
