import React from "react";
import Form from "react-bootstrap/Form";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import BASE_URL from "../utils/Axios";
function Signin() {
  const navigate = useNavigate();
  const handleSumbit = async (e) => {
    try {
      e.preventDefault();
      const formData = new FormData(e.target);
      const formProps = Object.fromEntries(formData);
      console.log(BASE_URL.BASE_URL);
      let res = await axios.post(`${BASE_URL.BASE_URL}/user/login`, formProps);
      console.log(res);
      if (res.status === 200) {
        toast.success(res.data.message);
        sessionStorage.setItem("token", res.data.token);
        sessionStorage.setItem("role", res.data.role);
        if (res.data.role === "Admin") navigate("/dashboard");
      }
    } catch (error) {
      toast.error(error.response.data.message || error.message);
    }
  };

  return (
    <div className="container">
      <div
        className="wrapper"
        style={{
          width: "500px",
          boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
          marginTop: "100px",
          placeItems: "center !important",
        }}
      >
        <h2 className="title">LOGIN</h2>
        <Form onSubmit={handleSumbit}>
          <Form.Group className="mb-3">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              name="email"
              required
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              name="password"
              required
            />
          </Form.Group>
          <div className="content">
            <div className="checkbox">
              <input type="checkbox" id="remember-me" name="check" required />
              <label>Remember me</label>
            </div>
            <div className="pass-link">
              <a href="#">Forgot password?</a>
            </div>
          </div>
          <div className="field mt-5">
            <input type="submit" value="Login" />
          </div>
          {/* <Button type="submit">Login</Button> */}
        </Form>
      </div>
    </div>
  );
}

export default Signin;
