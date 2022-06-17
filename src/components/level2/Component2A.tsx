import useUsers from "../../stores";
import { User } from "../../types";
import { Component3A, Component3B } from "../level3";
import { Button } from "../shared";
import shallow from 'zustand/shallow'

const users: User[] = [
  { name: "User A", age: 20 },
  { name: "User B", age: 30 },
];

const Component2A: React.FC = () => {
  console.log("COMPONENT 2A - rendered");

  const { setSelectedUserName, setUsers } = useUsers((state) => ({
    setSelectedUserName: state.setSelectedUserName,
    setUsers: state.setUsers,
  }), shallow);

  const handleOnClickUserName = () => setSelectedUserName(users[0].name);
  const handleOnClickUsers = () => setUsers(users);

  const buttonTextUserName = "COMPONENT 2A - Update user name";
  const buttonTextUsers = "COMPONENT 2A - Update users";

  return (
    <div>
      <Button text={buttonTextUserName} onClick={handleOnClickUserName} />
      <Button text={buttonTextUsers} onClick={handleOnClickUsers} />
      <Component3A />
      <Component3B />
    </div>
  );
};

export default Component2A;
