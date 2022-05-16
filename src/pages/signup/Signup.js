import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { useCreateUserMutation } from "../../store/services/authServices";

const Signup = () => {
  const [userInfo, { data, isLoading, isSuccess }] = useCreateUserMutation();
  const signUpData = [
    {
      label: "Enter your username (Must be Uniq)",
      type: "text",
      placeholder: "Username",
      name: "username",
      errorMsg: data?.error?.username ? data?.error?.username : null,
      value: data?.value?.username ? data?.value?.username : "",
    },
    {
      label: "Enter your valid email",
      type: "Email",
      placeholder: "Email",
      name: "email",
      errorMsg: data?.error?.email ? data?.error?.email : null,
      value: data?.value.email ? data?.value.email : "",
    },
    {
      label: "Enter strong password",
      type: "password",
      placeholder: "Password",
      name: "password",
      errorMsg: data?.error?.password ? data?.error?.password : null,
      value: data?.value?.password ? data?.value?.password : "",
    },
    {
      label: "Enter confirm password",
      type: "password",
      placeholder: "Confirm password",
      name: "confirmpassword",
      errorMsg: data?.error?.confirmpassword
        ? data?.error?.confirmpassword
        : null,
      value: data?.value?.confirmpassword ? data?.value?.confirmpassword : "",
    },
  ];
  const [userData, setUserData] = useState({});
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    userInfo(userData);
  };
  console.log(data);
  return (
    <div className="container my_container my-5">
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <div className="card card-body">
            <h4>Create New Account</h4>
            <Form onSubmit={handleSubmit}>
              {signUpData.map((item, index) => (
                <>
                  <Form.Group
                    className="mb-3"
                    controlId="formGroupEmail"
                    key={index}
                  >
                    <>
                      <Form.Label>{item.label}</Form.Label>
                      <Form.Control
                        className={item.errorMsg ? "is-invalid" : ""}
                        type={item.type}
                        placeholder={item.placeholder}
                        name={item.name}
                        onChange={handleChange}
                        defaultValue={item.value}
                      />
                      <div className="invalid-feedback">{item.errorMsg}</div>
                    </>
                  </Form.Group>
                </>
              ))}
              <Button type="submit">Signup</Button>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
