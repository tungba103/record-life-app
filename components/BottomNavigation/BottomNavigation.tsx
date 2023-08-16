// 'use client';

import { SyntheticEvent, useState } from 'react';

import { BottomNavigation, BottomNavigationAction, Paper } from '@mui/material';

import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import FavoriteIcon from '@mui/icons-material/Favorite';
import PersonIcon from '@mui/icons-material/Person';

export default function ButtonNavigation() {
  // const [value, setValue] = useState('recents');

  // const handleChange = (event: SyntheticEvent, newValue: string) => {
  //   setValue(newValue);
  // };
  return (
    <Paper
      sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }}
      elevation={3}
    >
      <BottomNavigation
      // value={value}
      // onChange={handleChange}
      >
        <BottomNavigationAction
          label='Home'
          icon={<HomeIcon />}
        />
        <BottomNavigationAction
          label='Search'
          icon={<SearchIcon />}
        />
        <BottomNavigationAction
          label='Add'
          icon={<AddCircleOutlineIcon />}
        />
        <BottomNavigationAction
          label='Favorite'
          icon={<FavoriteIcon />}
        />
        <BottomNavigationAction
          label='Profile'
          icon={<PersonIcon />}
        />
      </BottomNavigation>
    </Paper>
  );
}
