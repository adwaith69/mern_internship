import { AppBar, Button, Toolbar } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
        <AppBar>
            <Toolbar>
                <h4>BlOGAPP</h4> &nbsp;

                <Link to='/home'>
                      <Button variant="contained" color="inherit">Home</Button>
                  </Link>
                  &nbsp; &nbsp;
                  <Link to='/add'>
                      <Button variant="contained" color="inherit">Add Blog</Button>
                  </Link>

            </Toolbar>
        </AppBar>
    </div>
  )
}

export default Navbar