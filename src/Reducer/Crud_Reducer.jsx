import { createSlice } from "@reduxjs/toolkit";
import { userList } from "../Initial_Data";

// const initialState = {
//   value: userList,
// };

const crudSlice = createSlice({
  name: "user_crud",
  initialState: userList,
  reducers: {
    // reducer function and action creators
    addUser: (state, action) => {
      console.log(action);
      state.push(action.payload);
    },
    updateUser: (state, action) => {
      const { id, name, email, phone, address, organisation, role } =
        action.payload;
      const updated_user = state.find((f) => f.id === id);
      if (updated_user) {
        updated_user.name = name;
        updated_user.email = email;
        updated_user.phone = phone;
        updated_user.address = address;
        updated_user.organisation = organisation;
        updated_user.role = role;
      }
    },
    deleteUser: (state, action) => {
      const { id } = action.payload;
      const deleteUser = state.find((f) => f.id === id);
      if (deleteUser) {
        return state.filter((f) => f.id !== id);
      }
    },
  },
});

// action creator
export const { addUser, updateUser, deleteUser } = crudSlice.actions;
export default crudSlice.reducer;

// const Crud_Reducer = () => {
//   return <div></div>;
// };

// export default Crud_Reducer;
