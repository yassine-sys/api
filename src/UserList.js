import axios from 'axios';
import React, { useEffect, useState } from 'react'
import './App.css'
export const UserList = () => {
    const [user,setUser]=useState([])
    const [loading, setLoading] = useState(true);
    useEffect(()=>{
        const data=async()=>{
            try {
                const res=await axios.get("https://jsonplaceholder.typicode.com/users")
                setUser(res.data)
                setLoading(false)


            }
            catch(error){
                console.log("error")
            }
        }
        data()
    },[])

    return (
        <div >
            
            {loading ? <p>...loading</p>:user.map(el=>
            <div className="profile-container">
            <h4>name : {el.name}</h4>
            <img src='https://images.unsplash.com/photo-1586297098710-0382a496c814?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ' alt=''/>
            <p id="p">username : {el.username}<br></br>
            email : {el.email}<br></br>
            phone : {el.phone}<br></br>
            website : {el.website}<br></br>
            company : {el.company.name}<br></br>



            address : {el.address.city} street {el.address.street}</p>
            </div>
            )}
            
            
            
        </div>
    )
}
