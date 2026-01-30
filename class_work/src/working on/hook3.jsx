// create a react functional component that will accept first name  and last name and mobile
// number and add a button to submit record
// display first name in list with 2 buttons view and delete, when user click on view it will toggle
// display of last name and mobile number
// when user click on delete it will delete that record from list

import React, { useState } from "react";

function Hookexample3() {
    const [records, setRecords] = useState([]);
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [mobile, setMobile] = useState("");
    const [view, setView] = useState(false);
    const [index, setIndex] = useState(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (index === null) {
            setRecords([...records, { firstName, lastName, mobile }]);
        } else {
            const updatedRecords = [...records];
            updatedRecords[index] = { firstName, lastName, mobile };
            setRecords(updatedRecords);
            setIndex(null);
        }
        setFirstName("");
        setLastName("");
        setMobile("");
    };

    const handleView = (index) => {
        setView(true);
        setIndex(index);
    };

    const handleDelete = (index) => {
        const updatedRecords = [...records];
        updatedRecords.splice(index, 1);
        setRecords(updatedRecords);
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} placeholder="First Name" />
                <input type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} placeholder="Last Name" />
                <input type="text" value={mobile} onChange={(e) => setMobile(e.target.value)} placeholder="Mobile" />
                <button type="submit">Submit</button>
            </form>
            <ul>
                {records.map((record, index) => (
                    <li key={index}>
                        {record.firstName}
                        <button onClick={() => handleView(index)}>View</button>
                        <button onClick={() => handleDelete(index)}>Delete</button>
                        {view && index === index && (
                            <>
                                <p>Last Name: {record.lastName}</p>
                                <p>Mobile: {record.mobile}</p>
                            </>
                        )}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Hookexample3;
