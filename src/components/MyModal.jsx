import React from 'react';
import { Modal, Button, Card } from 'react-bootstrap';
import '../styling/App.css';

export default function MyModal({ show, handleClose, rowData, colData, pageName }) {
    return (
        <Modal show={show} onHide={handleClose} centered className="d-flex justify-content-center" style={{fontFamily:'Fredoka'}}>
            <div className="rounded p-4" >
                <Modal.Header closeButton className='primary'>
                    <Modal.Title className="text-center">צפייה בנתוני {pageName}</Modal.Title>
                </Modal.Header>
                <Modal.Body className="d-flex justify-content-center">
                    {rowData && (
                        <Card className="p-3" style={{backgroundColor:'rgba(226, 250, 212,0.6)'}}>
                            <Card.Body >
                                {Object.entries(rowData).map(([key, value]) => (
                                    <div key={key} className="mb-2">
                                        <strong>{colData[key]}:</strong> {value}
                                    </div>
                                ))}
                            </Card.Body>
                        </Card>
                    )}
                </Modal.Body>
                <Modal.Footer className="d-flex justify-content-center">
                    <Button variant="primary" onClick={handleClose}>סגירה</Button>
                </Modal.Footer>
            </div>
        </Modal>
    );
}