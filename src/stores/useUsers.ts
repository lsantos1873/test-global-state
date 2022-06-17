import create, { SetState } from "zustand";
import { User } from "../types";

type UsersStore = {
  selectedUserName: string;
  setSelectedUserName: (selectedUserName: string) => void;

  users: User[];
  setUsers: (users: User[]) => void;
};

const useUsers = create<UsersStore>((set: SetState<UsersStore>) => ({
  selectedUserName: "",
  setSelectedUserName: (selectedUserName) => set({ selectedUserName }),
  
  users: [],
  setUsers: (users) => set({ users }),
}));

export default useUsers;
