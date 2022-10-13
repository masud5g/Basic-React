import React, { useState } from 'react';
import AddList from './AddList';
import './App.css';
import Modal from './Modal';

const data = [
    {
        id: 1,
        title: 'Python',
        startDate: '2016',
    },
    {
        id: 2,
        title: 'Node',
        startDate: '2017',
    },
    {
        id: 3,
        title: 'JavaScript',
        startDate: '2018',
    },
];

function App() {
    const [list, setList] = useState(data);
    const [showModal, setShowModal] = useState(false);
    const handleDelete = (id) => {
        const filterList = list.filter((item) => item.id !== id);
        setList(filterList);
    };
    return (
        <div className="App">
            {list.map((item) => (
                <div
                    onClick={() => handleDelete(item.id)}
                    key={item.id}
                    className="card"
                >
                    <h2>{item.title}</h2>
                    <h4>{item.startDate}</h4>
                </div>
            ))}
            <div className="btn_container">
                <button onClick={(e) => setShowModal(true)}>Add List</button>
            </div>

            {showModal && (
                <Modal>
                    <AddList setList={setList} setShowModal={setShowModal} />
                    <button onClick={(e) => setShowModal(false)}>
                        Close Modal
                    </button>
                </Modal>
            )}
        </div>
    );
}

export default App;
