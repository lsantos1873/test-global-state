import useUsers from "../../stores";

const Component3B: React.FC = () => {
  console.log("COMPONENT 3B - rendered");

  const users = useUsers((state) => state.users);

  return (
    <div>
      {users &&
        users.map(({ name, age }) => <li key={name}>{`${name} * ${age}`}</li>)}
    </div>
  );
};

export default Component3B;
