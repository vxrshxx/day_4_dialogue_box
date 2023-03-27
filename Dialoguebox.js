import { Button, Dialog, DialogActions, DialogContentText, DialogTitle, Input } from '@mui/material'
import React, { useState } from 'react'

function Dialoguebox() {
  const [open,setOpen]=useState(false);
  const handleOpen=()=>{
    setOpen(true);
  };
  const handleClose=()=>{
    setOpen(false);
  };
  

  return (
    <div style={{marginTop:"250px"}}>
        <Button variant="contained" onClick={handleOpen}>Login</Button>
        <Dialog open={open} onClose={handleClose}>
          <DialogTitle>Login</DialogTitle>
          <DialogContentText  style={{width:"400px",padding:"5vh"}}>
            <Input placeholder="Username" type="text" fullWidth></Input>
            <Input placeholder="Password" type="password" fullWidth></Input>
          </DialogContentText>
          <DialogActions>
            <Button onClick={handleClose}>Cancel</Button>
            <Button onClick={handleClose}>Login</Button>
          </DialogActions>
        </Dialog>
    </div>
  )
}

export default Dialoguebox