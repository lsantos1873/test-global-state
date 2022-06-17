import { Component2A, Component2B } from "../level2";
import { Label } from "../shared";

const Main: React.FC = () => {
  console.log("MAIN component - rendered");

  const componentName = `MAIN component`;

  return (
    <div>
      <Label text={componentName} />
      <Component2A />
      <Component2B />
    </div>
  );
};

export default Main;
