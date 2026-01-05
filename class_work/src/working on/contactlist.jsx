import React, {Component} from "react";

class Contactlist extends Component{
    constructor(props) {
        super(props);
        this.state = {
            contacts: [],
            showContacts: false
        };
    }

    addContact = () => {
        const name = document.getElementById("AddCon").value.trim();
        const phone = document.getElementById("AddPhone").value.trim();
        if (name && phone) {
            this.setState({
                contacts: [...this.state.contacts, { name, phone }],
                showContacts: true
            });
            document.getElementById("AddCon").value = "";
            document.getElementById("AddPhone").value = "";
        }
    }

    toggleShowContacts = () => {
        this.setState({ showContacts: !this.state.showContacts });
    }

    render() {
        return (
             <>
            <h1 align="center">Contact List Book</h1>
            {this.state.showContacts && (
            <table border="2" width="50%" align="center">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Phone</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.contacts.map((contact, index) => (
                            <tr key={index}>
                                <td>{contact.name}</td>
                                <td>{contact.phone}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
            <div align="center">
                <br />
                <input id="AddCon" type="text" placeholder="Enter Name"/>
                <input id="AddPhone" type="number" placeholder="Enter Phone Number"/>
                <button id="btnadd" onClick={this.addContact}>Add Contact</button><br/><br/>
                <button onClick={this.toggleShowContacts}>
                    {this.state.showContacts ? 'Hide Contacts' : 'Show Contacts'}
                </button>
            </div>
             </>
        );
    }
}
export default Contactlist;

//add  contacts,edit conatacts details,delete contacts
// observer array state mangement with object

