import React from "react";
import Form from "react-bootstrap/Form";
import TopBar from "./TopBar";
import axios from "axios";
import BASE_URL from "../utils/Axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

function Create() {
  const navigate = useNavigate();
  const handlesumbit = async (e) => {
    try {
      e.preventDefault();
      const formData = new FormData(e.target);
      const formProps = Object.fromEntries(formData);
      let res = await axios.post(`${BASE_URL.BASE_URL}/create`, formProps);
      if (res.status === 201) {
        toast.success(res.data.message);
        navigate("/dashboard");
      }
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  return (
    <>
      <TopBar />
      <div className="container">
        <div
          className="wrapper"
          style={{
            width: "700px",
            boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
            marginTop: "100px",
          }}
        >
          <h2 className="title">Add user</h2>
          <Form onSubmit={handlesumbit}>
            <Form.Group className="mb-3">
              <Form.Label>Costomer Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Name"
                name="CostomerName"
                required
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Costomer Number</Form.Label>
              <Form.Control
                type="tel"
                placeholder="Mobile"
                name="CostomerNumber"
                required
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>JP Code</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter JP code"
                name="JPCode"
                required
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Booking Date</Form.Label>
              <Form.Control
                type="date"
                placeholder="Date"
                name="BookingDate"
                required
              />
            </Form.Group>

            <Form.Label>Lead Status Discription</Form.Label>
            <Form.Select name="LeadStatus" required>
              <option value="">Choose the option</option>
              <option>Ready for Rescheduleg</option>
              <option value="Hold">Hold</option>
              <option value="Comformed Interseted">Comformed Interseted</option>
              <option value="Cancel not Interseted/Close">
                Cancel not Interseted/Close
              </option>
              <option value="Completed">Completed</option>
            </Form.Select>

            <Form.Label>Remark</Form.Label>
            <Form.Control
                type="text"
                placeholder="Remark"
                name="Status"
                required
              />
            

            <div className="field mt-5">
              <input type="submit" />
            </div>
          </Form>
        </div>
      </div>
    </>
  );
}

export default Create;
