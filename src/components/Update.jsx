import React from "react";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
// import { addUser } from "../Reducer/Crud_Reducer";
import { useNavigate, useParams } from "react-router-dom";
import { updateUser } from "../Reducer/Crud_Reducer";

const Update = () => {
  let { id } = useParams();
  const users = useSelector((state) => state.user_crud);
  const existing_User = users.find((f) => f.id === parseInt(id));
  const { name, email, phone, address, organisation, role } = existing_User;
  console.log(name);

  //   const [updatedname, setName] = useState(name);
  //   const [updatedemail, setEmail] = useState(email);
  //   const [updatedphone, setPhone] = useState(phone);
  //   const [updatedaddress, setAddress] = useState(address);
  //   const [updatedorganisation, setOrganisation] = useState(organisation);
  //   const [updatedrole, setRole] = useState(role);

  const [formData, setFormData] = useState({
    uName: name,
    uEmail: email,
    uPhone: phone,
    uAddress: address,
    uOrganisation: organisation,
    uRole: role,
  });

  const onChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const dispatch = useDispatch("");
  const navigate = useNavigate();

  const handleUpdate = (e) => {
    const { uName, uEmail, uPhone, uAddress, uOrganisation, uRole } = formData;
    e.preventDefault();
    dispatch(
      updateUser({
        id: id,
        name: uName,
        email: uEmail,
        phone: uPhone,
        address: uAddress,
        organisation: uOrganisation,
        role: uRole,
      })
    );
    navigate("/");
  };

  return (
    <>
      <div className="w-50 m-auto p-4 bg-info-subtle">
        <h3>Update your information</h3>
        <form className="" onSubmit={handleUpdate}>
          <div>
            <label htmlFor="">Name</label>
            <input
              type="text"
              name="uName"
              value={formData.uName}
              //   value={updatedname}
              onChange={onChange}
              className="form-control"
              placeholder="enter your name"
            />
          </div>
          <div>
            <label htmlFor="">Email</label>
            <input
              type="email"
              name="uEmail"
              value={formData.uEmail}
              //   value={updatedemail}
              onChange={onChange}
              className="form-control"
              placeholder="enter your email"
            />
          </div>
          <div>
            <label htmlFor="">Phone no.</label>
            <input
              type="number"
              name="uPhone"
              value={formData.uPhone}
              //   value={updatedphone}
              onChange={onChange}
              className="form-control"
              placeholder="enter your phone number"
            />
          </div>
          <div>
            <label htmlFor="">Address</label>
            <input
              type="text"
              name="uAddress"
              value={formData.uAddress}
              //   value={updatedaddress}
              onChange={onChange}
              className="form-control"
              placeholder="enter your address"
            />
          </div>
          <div>
            <label htmlFor="">Organisation Name</label>
            <input
              type="text"
              name="uOrganisation"
              value={formData.uOrganisation}
              //   value={updatedorganisation}
              onChange={onChange}
              className="form-control"
              placeholder="enter your organisation name"
            />
          </div>
          <div>
            <label htmlFor="">Your Role</label>
            <input
              type="text"
              name="uRole"
              value={formData.uRole}
              //   value={updatedrole}
              onChange={onChange}
              className="form-control"
              placeholder="enter your position"
            />
          </div>
          <button type="submit" className="btn ">
            Update
          </button>
        </form>
      </div>
    </>
  );
};

export default Update;
