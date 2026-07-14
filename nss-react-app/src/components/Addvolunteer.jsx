import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import Navigationbar from './Navigationbar'





const Addvolunteer = () => {
    const [input, changeInput] = useState(
       {
        
        volunteerId: "",
        fullName: "",
        email: "",
        phone: "",
        dateofBirth: "",
        gender: "",
        bloodGroup: "",
        department: "",
        yearofStudy: "",
        campName: "",
        hoursCompleted: "",
        address: "",
        unitNumber: ""
        
        


    }


    )

    
    const inputHandler = (event) => {
        changeInput({
            ...input,
            [event.target.name]: event.target.value
        });
    };

    const readValue = () => {
        console.log(input);
        axios.post("http://localhost:3000/add-volunteer", input)
            .then((response) => {
                console.log(response.data);
                alert("Volunteer added successfully");
            })
            .catch((error) => {
                console.error("Error adding volunteer", error.res.status);
                console.error("Error adding volunteer", error.res.data);
            });


        
    };
    
  return (
    <div>
        <Navigationbar/>
        
        
        
       <div className="container">
    <div className="row">
        <div className="col-12">
            <h2 className="text-center">Add Volunteer</h2>

            <div className="row g-3">

                <div className="col-12 col-sm-6 col-lg-4">
                    <label className="form-label">Volunteer ID</label>
                    <input
                        type="number"
                        className="form-control"
                        name="volunteerId"
                        value={input.volunteerId}
                        onChange={inputHandler}
                        required
                    />
                </div>

                <div className="col-12 col-sm-6 col-lg-4">
                    <label className="form-label">Full Name</label>
                    <input
                        type="text"
                        className="form-control"
                        name="fullName"
                        value={input.fullName}
                        onChange={inputHandler}
                        required
                    />
                </div>

                <div className="col-12 col-sm-6 col-lg-4">
                    <label className="form-label">Email</label>
                    <input
                        type="email"
                        className="form-control"
                        name="email"
                        value={input.email}
                        onChange={inputHandler}
                        required
                    />
                </div>

                <div className="col-12 col-sm-6 col-lg-4">
                    <label className="form-label">Phone</label>
                    <input
                        type="tel"
                        className="form-control"
                        name="phone"
                        value={input.phone}
                        onChange={inputHandler}
                        required
                    />
                </div>

                <div className="col-12 col-sm-6 col-lg-4">
                    <label className="form-label">Date of Birth</label>
                    <input
                        type="date"
                        className="form-control"
                        name="dateofBirth"
                        value={input.dateofBirth}
                        onChange={inputHandler}
                        required
                    />
                </div>

                <div className="col-12 col-sm-6 col-lg-4">
                    <label className="form-label">Gender</label>
                    <input
                        type="text"
                        className="form-control"
                        name="gender"
                        value={input.gender}
                        onChange={inputHandler}
                        required
                    />
                </div>

                <div className="col-12 col-sm-6 col-lg-4">
                    <label className="form-label">Blood Group</label>
                    <input
                        type="text"
                        className="form-control"
                        name="bloodGroup"
                        value={input.bloodGroup}
                        onChange={inputHandler}
                        required
                    />
                </div>

                <div className="col-12 col-sm-6 col-lg-4">
                    <label className="form-label">Department</label>
                    <input
                        type="text"
                        className="form-control"
                        name="department"
                        value={input.department}
                        onChange={inputHandler}
                        required
                    />
                </div>

                <div className="col-12 col-sm-6 col-lg-4">
                    <label className="form-label">Year of Study</label>
                    <input
                        type="number"
                        className="form-control"
                        name="yearofStudy"
                        value={input.yearofStudy}
                        onChange={inputHandler}
                        required
                    />
                </div>

                <div className="col-12 col-sm-6 col-lg-4">
                    <label className="form-label">Camp Name</label>
                    <input
                        type="text"
                        className="form-control"
                        name="campName"
                        value={input.campName}
                        onChange={inputHandler}
                        required
                    />
                </div>

                <div className="col-12 col-sm-6 col-lg-4">
                    <label className="form-label">Hours Completed</label>
                    <input
                        type="number"
                        className="form-control"
                        name="hoursCompleted"
                        value={input.hoursCompleted}
                        onChange={inputHandler}
                        required
                    />
                </div>

                <div className="col-12 col-sm-6 col-lg-4">
                    <label className="form-label">Address</label>
                    <input
                        type="text"
                        className="form-control"
                        name="address"
                        value={input.address}
                        onChange={inputHandler}
                        required
                    />
                </div>

                <div className="col-12 col-sm-6 col-lg-4">
                    <label className="form-label">Unit Number</label>
                    <input
                        type="number"
                        className="form-control"
                        name="unitNumber"
                        value={input.unitNumber}
                        onChange={inputHandler}
                        required
                    />
                </div>

                

            
                        
                        
                    </div>
                    </div>
                    <div className="col col-12 col-sm-6 col-md-6 col-lg-4 col-xl-4 col-xxl-4">
                            <button className="btn btn-success" onClick={readValue}>Submit</button>
                        </div>
                </div>
            </div>
        </div>

    
  )
}

export default Addvolunteer