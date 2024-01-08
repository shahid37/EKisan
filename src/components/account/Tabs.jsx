import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}

      {...other}
    >
      {value === index && (
        <Box className='tab-panel' sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};


export default function BasicTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs
          value={value}
          onChange={handleChange}
          variant="scrollable"
          scrollButtons={true}
          aria-label="scrollable auto tabs example"
        >
          <Tab label="Seller" />
          <Tab label="Orders" />
          <Tab label="Personal" />
          <Tab label="Address" />
        </Tabs>

      </Box>
      <CustomTabPanel value={value} index={0}>
        Seller Info
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        Orders
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
        Personal Detail
      </CustomTabPanel>
      <CustomTabPanel value={value} index={3}>
        Address
      </CustomTabPanel>
    </Box>
  );
}
