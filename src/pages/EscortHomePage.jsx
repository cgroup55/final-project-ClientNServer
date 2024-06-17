import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import '../styling/User.css';

export default function EscortHomePage() {
  const location = useLocation();
  const escortData = location.state;
  console.log('escortData-', escortData);
  const [escortInfo, setEscortInfo] = useState([]);

  useEffect(() => {
    if (escortData.userFromDB && Array.isArray(escortData.userFromDB)) {
      setEscortInfo(escortData.userFromDB);
    }
  }, [escortData])

  const handleRowClick = (info) => {
    console.log('escort info-', info);
    //navigate('/', { state: info });
  };

  return (
    <div className='container'>
      <div className='col-12'>
        <h3 className='header mt-3'>המסלולים שלי</h3>
      </div>
      <div className='col-12 mt-4'>
        {escortInfo.map((info, index) => (
          <div key={index} className='user-info' onClick={() => handleRowClick(info)}>
            <span className='col-5' style={{ marginRight: '10px' }}><strong>מספר קו </strong>{info.line_code}</span>
            <span className='col-7' style={{ marginRight: '10px' }}><strong>שם מוסד לימודי </strong>{info.nameschool}</span>
          </div>
        ))}
      </div>
      <div className='col-12'>
        <h6 style={{ marginTop: '200px' }}>לצפייה במסלול ופרטי הקו לחץ על הקו המבוקש</h6>
      </div>

    </div>
  );
}