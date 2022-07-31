import React, { useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import AdminPage from '../../components/Admin/AdminPage';
import avatar from '../../assets/Essien.png'

const roles = ['Profile', 'security', 'Notifications', 'Groups'];
const settings = () => {
  const [tabIndex, setTabIndex] = useState(0);
  
  return <AdminPage>
    <div>
      <Tabs></Tabs>
    </div>
  </AdminPage>;
};

export default settings;
