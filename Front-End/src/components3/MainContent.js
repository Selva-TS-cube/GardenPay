import React, { useEffect, useState } from "react";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import IconButton from "@mui/material/IconButton";
import MoreVertIcon from "@mui/icons-material/MoreVert";
// import Countries from "../icons/countries.png";
import Map from "../icons/map.png";
import Emp1 from "../icons/emp.svg";
import Emp2 from "../icons/emp.svg";
import Emp3 from "../icons/emp.svg";

import settingsIcon from "../icons/settings.svg";
import notificationIcon from "../icons/notification.svg";
import { useNavigate } from "react-router-dom";
import domain from "../domain";
import axios from "axios";
import { logout } from "../utils/sidebarClick";
import GardenPayLogo from "/Users/selvendrans/Documents/GardenPay/Front-End/src/icons/GardenPaywhite.png";

// import getRandomInt from "../utils/randomno";

const MainContent = ({ logo, children }) => {
  const navigate = useNavigate();
  const [employees, setEmployees] = useState([]);

  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedEmployee, setSelectedEmployee] = useState(null);

  const handleClick = (event, employee) => {
    setAnchorEl(event.currentTarget);
    setSelectedEmployee(employee);
  };

  const handleClose = () => {
    setAnchorEl(null);
    setSelectedEmployee(null);
  };

  const addEmployee = () => {
    navigate("/add-employee");
  };

  const getRandomImage = (account) => {
    const lastChar = account.charAt(account.length - 1);
    if (isNaN(lastChar)) return Emp1;

    const num = Number(lastChar);

    return num % 2 == 0 ? Emp2 : Emp3;
  };

  const getAllEmployees = async () => {
    try {
      const url = `${domain}/admin/get-all-employees`;
      const token = localStorage.getItem("token");

      const res = await axios.get(url, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const data = res.data;
      setEmployees(res.data.data);
    } catch (err) {
      console.log("get all emps error");
    }
  };

  const updateEmployee = (employee) => {
    navigate("/update-employee", { state: employee });
  };

  const deleteEmployee = async (employee) => {
    try {
      const url = `${domain}/admin/remove-employee/${employee.account}`;
      const token = localStorage.getItem("token");
      const res = await axios.delete(url, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
    } catch (err) {
      console.log("Delete emp error");
    }

    getAllEmployees();
  };

  useEffect(() => {
    getAllEmployees();
  }, []);
  return (
    <main className="main-content">
      <header className="main-header">
        <div className="logohome" onClick={() => navigate("/")}>
        <img style={{width:'140px', margin:'0px 0px -30px 0px'}} src={GardenPayLogo} />
        </div>
        <div className="user-profile">
          <img
            src={settingsIcon}
            alt="Settings"
            className="icon settings-icon"
          />
          <img
            src={notificationIcon}
            alt="Notifications"
            className="icon notification-icon"
          />
          <button onClick={() => logout(navigate, "/login")}>Logout</button>
          <div className="user-info">
            <span>{localStorage.getItem("username")}</span>
            <span>gardenpay@gmail.com</span>
          </div>
        </div>
      </header>
      <div>
        <section className="dashboard-header" style={{backgroundColor:'#000', border: '1px solid rgba(255, 255, 255, 0.5)'}}>
          <h1>Employees</h1>

          <div className="breadcrumb">Home / Employees</div>
        </section>
      </div>

      <section className="employees-section">
        <div className="employees-header">
          <h2>Employees</h2>
          <div className="employees-buttons">
            <button className="add-employee-btn" onClick={addEmployee}>
              + Add Employee
            </button>
          </div>
        </div>
        <table className="employees-table">
          <thead className="table-header">
            <tr>
              <th>Employee Name</th>
              <th>Account</th>
              <th>Salary</th>
              <th>Designation</th>
              <th>Location</th>
              <th>Department</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {employees.map((employee, index) => (
              <tr key={index}>
                <td>
                  <img style={{borderRadius:'25px'}}
                    src={Emp2}
                    alt="Employee"
                    className="employee-image"
                  />
                  {employee.name}
                </td>
                <td>{employee.account}</td>
                <td>{employee.salary}</td>
                <td>{employee.designation}</td>
                <td>Goa</td>
                <td>AI</td>
                <td style={{ color: "white" }}>
                  <IconButton
                    onClick={(event) => handleClick(event, employee)}
                    sx={{ color: "white" }}
                  >
                    <MoreVertIcon />
                  </IconButton>
                  <Menu
                    anchorEl={anchorEl}
                    open={Boolean(anchorEl)}
                    onClose={handleClose}
                  >
                    <MenuItem
                      onClick={() => {
                        updateEmployee(selectedEmployee);
                        handleClose();
                      }}
                    >
                      Update
                    </MenuItem>
                    <MenuItem
                      onClick={() => {
                        deleteEmployee(selectedEmployee);
                        handleClose();
                      }}
                    >
                      Delete
                    </MenuItem>
                  </Menu>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      
    </main>
  );
};
export default MainContent;
