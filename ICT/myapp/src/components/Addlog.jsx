import { Box, Button, TextField } from '@mui/material'
import React from 'react'

const Addlog = () => {
  return (
    
        <Box>
       <h2>Add New Blog</h2>
       <TextField id="outlined-basic" label="Blog Name" variant="outlined"  name="blogName"
        fullWidth/> <br /> &nbsp;
        <TextField id="outlined-basic" label="Description" variant="outlined"  name="description"
        fullWidth
        multiline
        rows={4} /> &nbsp;
        <TextField id="outlined-basic" label="Author Name" variant="outlined"   name="authorName"
        fullWidth /> <br /> &nbsp; 
        <Button variant="contained" color="primary"> 
        Submit
      </Button> &nbsp;
        </Box>
        
       


    
  )
}

export default Addlog