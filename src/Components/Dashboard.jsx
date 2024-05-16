import React, { useEffect, useState } from "react";
import TopBar from "./TopBar";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import BASE_URL from "../utils/Axios";

function Dashboard() {
  let navigate = useNavigate();
  let [data, setData] = useState([]);

  const getData = async () => {
    try {
      let res = await axios.get(`${BASE_URL.BASE_URL}`);
      setData(res.data.user.slice(1, res.data.user.length));
    } catch (error) {
      toast.error(error.response.data.message || error.message);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <TopBar />
      <div>
        <select style={{ placeItems: "center end" }}>
          <option value="">All</option>
          <option>Inprocess</option>
          <option>Completed</option>
          <option>cancel</option>
          <option>Hold </option>
        </select>

        <Table striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>Costomer Name</th>
              <th>Costomer Number</th>
              <th>JP Code</th>
              <th>Booking Date</th>
              <th>Lead Status Discription</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {data.map((e, i) => {
              return (
                <tr key={i}>
                  <td>{i + 1}</td>
                  <td>{e.CostomerName}</td>
                  <td>{e.CostomerNumber}</td>
                  <td>{e.JPCode}</td>
                  <td>{e.BookingDate}</td>
                  <td>{e.LeadStatus}</td>
                  <td>{e.Status}</td>
                  <td>
                    <Button variant="primary" onClick={()=>navigate(`/edit/${e._id}`)}>EDIT</Button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </div>
    </>
  );
}

export default Dashboard;
