import React from 'react';
import './App.css';
import LoginTab from "./features/login/LoginTab";

function App() {
  return (
    <div className="App">
  {/*      <AppBar position="static">
            <Toolbar variant="dense">
                <IconButton edge="start" color="inherit" aria-label="menu">
                    <MenuIcon />
                </IconButton>
                <Typography variant="h6" color="inherit">
                    Photos
                </Typography>
            </Toolbar>
        </AppBar>*/}
        <LoginTab/>{/*
        <Funds></Funds>*/}
    </div>
  );
}

export default App;
