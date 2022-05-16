import React from "react";
import Typography from "@mui/material/Typography";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";

function Header() {
  return (
    <div>
      <AppBar position="static" sx={{ padding: 1 }}>
        <Toolbar variant="dense">
          <Typography variant="h6" color="inherit" component="div">
            Pagination app
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Header;
