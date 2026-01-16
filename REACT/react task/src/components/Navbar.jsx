import React from 'react';
import { AppBar, Toolbar, Typography, Button, Box, Menu, MenuItem } from '@mui/material';
import { Link } from 'react-router-dom';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const Navbar = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  // ٹاسک کی لسٹ بنانے کے لیے ایک ارے
  const tasks = Array.from({ length: 10 }, (_, i) => i + 1);

  return (
    <AppBar position="static" sx={{ backgroundColor: '#1976d2' }}>
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          React Revision
        </Typography>

        <Box sx={{ display: 'flex', gap: 2 }}>
          {/* ہوم بٹن */}
          <Button color="inherit" component={Link} to="/">
            Home
          </Button>

          {/* ٹاسکس کے لیے ڈراپ ڈاؤن بٹن */}
          <Button
            color="inherit"
            id="tasks-button"
            aria-controls={open ? 'tasks-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
            onClick={handleClick}
            endIcon={<KeyboardArrowDownIcon />}
          >
            All Tasks
          </Button>

          <Menu
            id="tasks-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              'aria-labelledby': 'tasks-button',
            }}
          >
            {tasks.map((task) => (
              <MenuItem 
                key={task} 
                onClick={handleClose} 
                component={Link} 
                to={`/task${task}`}
              >
                Task {task}
              </MenuItem>
            ))}
          </Menu>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;