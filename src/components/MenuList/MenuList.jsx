import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import TabPanel from '@mui/lab/TabPanel';
import Box from '@mui/material/Box';
import TabContext from '@mui/lab/TabContext';
import './MenuList.css';
import { burgers, starters, desserts } from '../../assets/MenuIContent';
import MenuItem from '../MenuItem/MenuItem';

const MenuList = () => {
    const [value, setValue] = React.useState('one');

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Box sx={{ width: '100%', height: '100vh',backgroundColor: '#1a1a1a', display: 'flex', flexDirection: 'column', alignItems: 'center', paddingTop: '35px', paddingBottom: '35px' }}>
            <TabContext value={value}>
                <Box sx={{ width: '100%', backgroundColor: '#1a1a1a', display: 'flex', justifyContent: 'space-around' }}>
                    <Tabs
                        value={value}
                        onChange={handleChange}
                        textColor='secondary'
                        indicatorColor='secondary'
                        aria-label="secondary tabs example"
                    >
                        <Tab value="one" label="Starters" sx={{ color: 'whitesmoke', fontFamily: 'Dosis, sans-serif', fontSize: '1rem' }} />
                        <Tab value="two" label="Burgers & Salads" sx={{ color: 'whitesmoke', fontFamily: 'Dosis, sans-serif', fontSize: '1rem' }} />
                        <Tab value="three" label="Desserts" sx={{ color: 'whitesmoke', fontFamily: 'Dosis, sans-serif', fontSize: '1rem' }} />
                        {/* <Tab value="four" label="Sandwiches" sx={{ color: 'whitesmoke', fontFamily: 'Dosis, sans-serif', fontSize: '1rem' }} />
                        <Tab value="five" label="Drinks" sx={{ color: 'whitesmoke', fontFamily: 'Dosis, sans-serif', fontSize: '1rem' }} /> */}
                    </Tabs>
                </Box>

                <TabPanel value="one" sx={{flex: 1, width: '90%', height: '100%' }}>
                    <MenuItem dishes={starters} />
                </TabPanel>
                <TabPanel value="two" sx={{ flex: 1, width: '90%', height: '100%'}}>
                    <MenuItem dishes={burgers} />
                </TabPanel>
                <TabPanel value="three" sx={{ flex: 1, width: '90%', height: '100%'}}>
                    <MenuItem dishes={desserts} />
                </TabPanel>
                {/* <TabPanel value="four" sx={{ flex: 1, width: '90%', height: '100%'}}>
                    <MenuItem dishes={sandwiches} />
                </TabPanel>
                <TabPanel value="five" sx={{ flex: 1, width: '90%', height: '100%'}}>
                    <MenuItem dishes={drinks} />
                </TabPanel> */}
            </TabContext>

        </Box>
    );
}

export default MenuList;
