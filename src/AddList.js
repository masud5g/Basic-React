import React, { useState } from 'react';

export default function AddList({ setList, setShowModal }) {
    const [title, setTitle] = useState('');
    const [date, setDate] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const submittedList = {
            title,
            startDate: date,
            id: Date.now(),
        };
        setList((prevState) => [...prevState, submittedList]);
        setShowModal(false);
    };
    return (
        <form onSubmit={handleSubmit}>
            <label>
                <span>Which programming language do you love?</span>
                <input
                    onChange={(e) => setTitle(e.target.value)}
                    type="text"
                    placeholder="Your favorite programming language"
                />
            </label>
            <label>
                <span>When you started to learn?</span>
                <input type="date" onChange={(e) => setDate(e.target.value)} />
            </label>
            <button>Submit</button>
        </form>
    );
}
