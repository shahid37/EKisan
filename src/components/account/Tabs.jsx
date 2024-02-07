import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { AuthContext } from '@/providers/AuthProviser';
import SellerInfo from './tabs/SellerInfo';
import PersonalInfoEdit from './tabs/PersonalInfoEdit';

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
  const isSeller = user.userType === "farmer" || user.userType === "corporate"

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const tabs = [
    { name: "Orders", component: <> Orders</> },
    { name: "Personal", component: <PersonalInfoEdit /> },
    { name: "Address", component: <>Address</> },
  ]
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
          {isSeller && <Tab label={"Seller"} />}
          {
            tabs.map((tab, index) => {
              return <Tab type='div' key={index} label={tab.name} />
            })

          }

        </Tabs>

      </Box>
      {isSeller &&
        <CustomTabPanel value={value} index={0}>
          <SellerInfo />
        </CustomTabPanel>}
      {
        tabs.map((tab, i) => {
          var index = isSeller ? i + 1 : i
          return (
            <CustomTabPanel key={index} value={value} index={index}>
              {tab.component}
            </CustomTabPanel>
          )
        })

      }
    </Box >
  );
}
