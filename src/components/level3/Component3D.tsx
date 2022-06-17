import shallow from "zustand/shallow";
import useUsers from "../../stores";

const Component3D: React.FC = () => {
  console.log("COMPONENT 3D - rendered");

  const { users } = useUsers((state) => ({
    users: state.users,
  }), shallow);

  return (
    <div>
      {users &&
        users.map(({ name, age }) => <li key={name}>{`${name} * ${age}`}</li>)}
    </div>
  );
};

export default Component3D;
