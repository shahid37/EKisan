"use client"
import { ListedProduct, RejectedProducts, VerificationPanding } from '@/components/store';
import { AuthContext } from '@/providers/AuthProviser';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import PropTypes from 'prop-types';
import * as React from 'react';
import SearchBar from '@/components/common/SearchBar';

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
        <Box className='tab-panel' sx={{ p: 1 }}>
          {children}
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
  const { user } = React.useContext(AuthContext)
  const isSeller = user?.userType === "farmer" || user?.userType === "corporate"

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const tabs = [
    { name: "Verified", component: <ListedProduct /> },
    { name: "Not Verified", component: <VerificationPanding /> },
    { name: "Rejected", component: <RejectedProducts /> },
  ]
  if (!user) { return null }
  else {
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
            {
              tabs.map((tab, index) => {
                return <Tab type='div' style={{ flex: 1 }} key={index} label={tab.name} />
              })

            }

          </Tabs>

        </Box>
        {
          tabs.map((tab, i) => {
            return (
              <CustomTabPanel key={i} value={value} index={i}>
                {tab.component}
              </CustomTabPanel>
            )
          })

        }
      </Box >
    );
  }
}
