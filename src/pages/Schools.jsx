import React from 'react';
import Table from '../components/Table';
import { Button } from 'react-bootstrap';
import { FaPlus } from "react-icons/fa6";
import {useNavigate } from 'react-router-dom';

export default function Schools() {

    const navigate = useNavigate();

    const addSchool = () => {
      navigate('/AddSchoolForm');
    }

    const Schoolcolumns = [
        {
            name: "ID",
            selector: (row) => row.personID,
            sortable: true,
        },
        {
            name: "Full Name",
            selector: (row) => row.fullName,
        },


    ];

    const Schoolrows = [

        {
            personID: 14,
            fullName: "Ethan Lee",

        },
        {
            personID: 15,
            fullName: "Isabella Thompson",

        },
    ];


    //3 functions that handle viewing, editing and deleting a row
    const handleView = (row) => {
        console.log('View:', row);
        // Add your view logic here
    };

    const handleEdit = (row) => {
        console.log('Edit:', row);
        // Add your edit logic here
    };

    const handleDelete = (row) => {
        console.log('Delete:', row);
        // Add your delete logic here
    };

    return (
        <div className='container mt-5' >
            <h3 className="bold" style={{ textAlign: 'center' }}>מוסדות לימוד</h3>
            <Table columns={Schoolcolumns} rows={Schoolrows} handleView={handleView} handleEdit={handleEdit} handleDelete={handleDelete} />
            <div className='text-center'
                style={{ padding: '20px' }}>
                <Button onClick={addSchool}>הוסף מוסד לימודים <FaPlus style={{ paddingBottom: '2px' }} /></Button></div>
        </div>
    )
}