import React, { useEffect, useState } from "react";
import TopBar from "./TopBar";
import Form from "react-bootstrap/Form";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import BASE_URL from "../utils/Axios";
import { toast } from "react-toastify";
function Edit() {
  let navigate=useNavigate()
  let { id } = useParams();
  let [costomerName, setCostomerName] = useState("");
  let [costomerNumber, setCostomerNumber] = useState("");
  let [jPCode, setJPCode] = useState("");
  let [bookingDate, setBookingDate] = useState("");
  let [leadStatus, setLeadStatus] = useState("");
  let [status, setStatus] = useState("");

  const handleEdit = async (e) => {
    try {
      e.preventDefault();
      const formData = new FormData(e.target);
      const formProps = Object.fromEntries(formData);
      console.log(formProps);
      let res = await axios.put(`${BASE_URL.BASE_URL}/edit/${id}`, formProps);
      console.log(res);
      if(res.status===200){
        navigate('/dashboard')
        toast.success(res.data.message)
      }
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  const getData = async () => {
    try {
      let res = await axios.get(`${BASE_URL.BASE_URL}/${id}`);
      if (res.status === 200) {
        setCostomerName(res.data.user.CostomerName);
        setCostomerNumber(res.data.user.CostomerNumber);
        setJPCode(res.data.user.JPCode);
        setBookingDate(res.data.user.BookingDate);
        setLeadStatus(res.data.user.LeadStatus);
        setStatus(res.data.user.Status);
      }
    } catch (error) {
      toast.error(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

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
          <h2 className="title">EDIT USER</h2>
          <Form onSubmit={handleEdit}>
            <Form.Group className="mb-3">
              <Form.Label>Costomer Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Name"
                name="CostomerName"
                value={costomerName}
                onChange={(e) => {
                  setCostomerName(e.target.value);
                }}
                required
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Costomer Number</Form.Label>
              <Form.Control
                type="tel"
                placeholder="Mobile"
                name="CostomerNumber"
                value={costomerNumber}
                onChange={(e) => {
                  setCostomerNumber(e.target.value);
                }}
                required
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>JP Code</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter JP code"
                name="JPCode"
                value={jPCode}
                onChange={(e) => {
                  setJPCode(e.target.value);
                }}
                required
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Booking Date</Form.Label>
              <Form.Control
                type="date"
                placeholder="Date"
                name="BookingDate"
                value={bookingDate}
                onChange={(e) => {
                  setBookingDate(e.target.value);
                }}
                required
              />
            </Form.Group>

            <Form.Label>Lead Status Discription</Form.Label>
            <Form.Select
              name="LeadStatus"
              value={leadStatus}
              onChange={(e) => {
                setLeadStatus(e.target.value);
              }}
              required
            >
              <option value="">Choose the option</option>
              <option>Ready for Rescheduleg</option>
              <option value="Hold">Hold</option>
              <option value="Comformed Interseted">Comformed Interseted</option>
              <option value="Cancel not Interseted/Close">
                Cancel not Interseted/Close
              </option>
              <option value="Completed">Completed</option>
            </Form.Select>

            <Form.Label>Status</Form.Label>
            <Form.Select
              name="Status"
              value={status}
              onChange={(e) => {
                setStatus(e.target.value);
              }}
              required
            >
              <option value="">Choose the option</option>
              <option value="Inproess">Inproess</option>
              <option value="Cancel">Cancel</option>
              <option value="Completed">Completed</option>
              <option value="Hold">Hold</option>
            </Form.Select>

            <div className="field mt-5">
              <input type="submit" />
            </div>
          </Form>
        </div>
      </div>
    </>
  );
}

export default Edit;
