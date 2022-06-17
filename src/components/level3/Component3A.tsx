import useUsers from "../../stores";
import { Label } from "../shared";

const Component3A: React.FC = () => {
  console.log("COMPONENT 3A - rendered");

  const selectedUserName = useUsers((state) => state.selectedUserName);

  return (
    <div>
      <Label text={selectedUserName} />
    </div>
  );
};

export default Component3A;
