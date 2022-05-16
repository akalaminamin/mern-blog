import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { useLoginUserMutation } from "../../store/services/authServices";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const [loginInfo, { data, isLoading, isSuccess }] = useLoginUserMutation();
  const loginData = [
    {
      label: "Enter your valid email",
      type: "Email",
      placeholder: "Email",
      name: "email",
      errorMsg: data?.error.email ? data?.error.email : "",
      value: data?.value.email ? data?.value.email : "",
    },
    {
      label: "Enter password",
      type: "password",
      placeholder: "Password",
      name: "password",
      errorMsg: data?.error.password ? data?.error.password : "",
      value: data?.value.password ? data?.value.password : "",
    },
  ];
  const [userData, setUserData] = useState({});
  const navigate = useNavigate();
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    loginInfo(userData);
  };
  // if (isSuccess === true) {
  //   navigate("/");
  // }
  console.log(data);
  return (
    <div className="container my_container my-5">
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <div className="card card-body">
            <h4>Create New Account</h4>
            <Form onSubmit={handleSubmit}>
              {loginData.map((item, index) => (
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
                      defaultValue={item.value}
                      onChange={handleChange}
                    />
                    <div className="invalid-feedback">{item.errorMsg}</div>
                  </>
                </Form.Group>
              ))}
              <Button type="submit">Login</Button>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
