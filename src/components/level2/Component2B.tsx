import shallow from "zustand/shallow";
import useUsers from "../../stores";
import { User } from "../../types";
import { Component3C, Component3D } from "../level3";
import { Button } from "../shared";

const users: User[] = [
  { name: "User C", age: 20 },
  { name: "User B", age: 30 },
];

const Component2B: React.FC = () => {
  console.log("COMPONENT 2B - rendered");

  const { setSelectedUserName, setUsers } = useUsers((state) => ({
    setSelectedUserName: state.setSelectedUserName,
    setUsers: state.setUsers,
  }), shallow);

  const handleOnClickUserName = () => setSelectedUserName(users[0].name);
  const handleOnClickUsers = () => setUsers(users);

  const buttonTextUserName = "COMPONENT 2B - Update user name";
  const buttonTextUsers = "COMPONENT 2B - Update users";

  return (
    <div>
      <Button text={buttonTextUserName} onClick={handleOnClickUserName} />
      <Button text={buttonTextUsers} onClick={handleOnClickUsers} />
      <Component3C />
      <Component3D />
    </div>
  );
};

export default Component2B;
