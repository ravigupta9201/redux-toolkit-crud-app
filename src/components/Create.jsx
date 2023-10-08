import React from "react";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addUser } from "../Reducer/Crud_Reducer";
import { useNavigate } from "react-router-dom";

const Create = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [organisation, setOrganisation] = useState("");
  const [role, setRole] = useState("");
  const dispatch = useDispatch("");
  const users = useSelector((state) => state.user_crud);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      addUser({
        // id: new Date().getTime().toString(),
        id: users[users.length - 1].id + 1,
        name,
        email,
        phone,
        address,
        organisation,
        role,
      })
    );

    setName("");
    setEmail("");
    setAddress("");
    setPhone("");
    setOrganisation("");
    setRole("");

    navigate("/");
  };

  return (
    <>
      <div className="w-50 m-auto p-4 bg-info-subtle">
        <h3>Enter your information</h3>
        <form className="" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="">Name</label>
            <input
              type="text"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="form-control"
              placeholder="enter your name"
            />
          </div>
          <div>
            <label htmlFor="">Email</label>
            <input
              type="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="form-control"
              placeholder="enter your email"
            />
          </div>
          <div>
            <label htmlFor="">Phone no.</label>
            <input
              type="number"
              name="phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="form-control"
              placeholder="enter your phone number"
            />
          </div>
          <div>
            <label htmlFor="">Address</label>
            <input
              type="text"
              name="address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              className="form-control"
              placeholder="enter your address"
            />
          </div>
          <div>
            <label htmlFor="">Organisation Name</label>
            <input
              type="text"
              name="organisation"
              value={organisation}
              onChange={(e) => setOrganisation(e.target.value)}
              className="form-control"
              placeholder="enter your organisation name"
            />
          </div>
          <div>
            <label htmlFor="">Your Role</label>
            <input
              type="text"
              name="role"
              value={role}
              onChange={(e) => setRole(e.target.value)}
              className="form-control"
              placeholder="enter your position"
            />
          </div>
          <button type="submit" className="btn ">
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default Create;
