import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import{useEffect} from 'react'
import Navigationbar from './Navigationbar'






const Viewvolunteer = () => {
    const[data,changeData]=useState([])


    const fetchData = () =>{
     axios.post("http://localhost:3000/view-volunteer").then(
        (res)=>{
            changeData(res.data)

        }
    ).catch()   


    }
    useEffect(()=>{
        fetchData()
    },[])
    
  return (
    <div>
        <Navigationbar/>
        
        
        
        
        <div className="container mt-4">
        <h2 className="text-center mb-4">View All</h2>

        <table className="table table-striped">
          <thead>
            <tr>
              <th>Volunteer ID</th>
<th>Full Name</th>
<th>Email</th>
<th>Phone</th>
<th>Date of Birth</th>
<th>Gender</th>
<th>Blood Group</th>
<th>Department</th>
<th>Year of Study</th>
<th>Camp Name</th>
<th>Hours Completed</th>
<th>Address</th>
<th>Unit Number</th>
            </tr>
          </thead>

          <tbody>
            {data.map(
                (value,index)=>{
                    return(
                         <tr>
                        <td>{value.volunteerId}</td>
<td>{value.fullName}</td>
<td>{value.email}</td>
<td>{value.phone}</td>
<td>{value.dateofBirth}</td>
<td>{value.gender}</td>
<td>{value.bloodGroup}</td>
<td>{value.department}</td>
<td>{value.yearofStudy}</td>
<td>{value.campName}</td>
<td>{value.hoursCompleted}</td>
<td>{value.address}</td>
<td>{value.unitNumber}</td>
                        </tr>
                    )
                }
            )
                
            }
           
             </tbody>
        </table>
      </div>

        


    </div>
  )
}

export default Viewvolunteer