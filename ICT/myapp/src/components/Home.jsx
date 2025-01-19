import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import axios from 'axios';
import React, { useEffect, useState } from 'react'

const Home = () => {
    const [homeData,setHomeData]= useState([])

    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then((res) => setHomeData(res.data))
    }, []);

   

  return (
    <div>
        <br />
        <br />
        <br />
        <h1>Dashboard</h1>
        <h4>Welcome to the Dashboard of BlogAPP</h4>

        <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>Title</TableCell>
              
            </TableRow>
          </TableHead>
          <TableBody>
            
            {homeData.map((val) => (
              <TableRow >
                <TableCell>{val.id}</TableCell>
                <TableCell>{val.title}</TableCell>
                
              </TableRow>
            ))}
            
          </TableBody>
        </Table>
      </TableContainer>
    </div>
    
  )
}

export default Home