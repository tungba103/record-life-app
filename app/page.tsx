'use client';

import { AppBar, Box, Button, IconButton, Paper, Tab, Tabs, Toolbar, Typography } from '@mui/material';
import { SyntheticEvent, useState } from 'react';
import MenuIcon from '@mui/icons-material/Menu';

import { BottomNavigation } from '@/components';

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function CustomTabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role='tabpanel'
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function Home() {
  const [valueTab, setValueTab] = useState(0);

  const handleChangeTab = (event: React.SyntheticEvent, newValue: number) => {
    setValueTab(newValue);
  };

  const [value, setValue] = useState('recents');

  const handleChange = (event: SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };
  return (
    <div>
      <AppBar position='static'>
        <Toolbar>
          <IconButton
            size='large'
            edge='start'
            color='inherit'
            aria-label='menu'
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant='h6'
            component='div'
            sx={{ flexGrow: 1 }}
          >
            News
          </Typography>
          <Button color='inherit'>Login</Button>
        </Toolbar>
      </AppBar>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs
          value={value}
          onChange={handleChangeTab}
          aria-label='basic tabs example'
        >
          <Tab
            label='Item One'
            {...a11yProps(0)}
          />
          <Tab
            label='Item Two'
            {...a11yProps(1)}
          />
          <Tab
            label='Item Three'
            {...a11yProps(2)}
          />
        </Tabs>
      </Box>
      <CustomTabPanel
        value={valueTab}
        index={0}
      >
        Item One
      </CustomTabPanel>
      <CustomTabPanel
        value={valueTab}
        index={1}
      >
        Item Two
      </CustomTabPanel>
      <CustomTabPanel
        value={valueTab}
        index={2}
      >
        Item Three
      </CustomTabPanel>
      <BottomNavigation />
    </div>
  );
}
