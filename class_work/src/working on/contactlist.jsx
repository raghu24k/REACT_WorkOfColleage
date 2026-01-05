import React, { Component } from "react";
class ContactList extends Component {
  constructor(props) {
    super(props);
    this.state = { contacts: [], firstname: "", lastname: "", contactno: "", editingId: null };
  }
  addtocontact = () => {
    if (
      this.state.firstname.trim() == "" ||
      this.state.lastname.trim() == "" ||
      this.state.contactno.trim() == ""
    )
      return;
    if (this.state.editingId) {
      // Update existing contact
      this.setState((prevState) => ({
        contacts: prevState.contacts.map((contact) =>
          contact.id === prevState.editingId
            ? {
                ...contact,
                fname: prevState.firstname,
                lname: prevState.lastname,
                contact: prevState.contactno,
              }
            : contact
        ),
        firstname: "",
        lastname: "",
        contactno: "",
        editingId: null,
      }));
    } else {
      // Add new contact
      const newentry = {
        id: Date.now(),
        fname: this.state.firstname,
        lname: this.state.lastname,
        contact: this.state.contactno,
        visible: false,
      };
      this.setState((prevState) => ({
        contacts: [newentry, ...prevState.contacts],
        firstname: "",
        lastname: "",
        contactno: "",
      }));
    }
  };
  onfirstnamechange = (e) => {
    this.setState({ firstname: e.target.value });
  };
  onlastnamechange = (e) => {
    this.setState({ lastname: e.target.value });
  };
  oncontactnochange = (e) => {
    this.setState({ contactno: e.target.value });
  };

  deletecontact = (id) => {
    this.setState((prevState) => ({
      contacts: prevState.contacts.filter((y) => y.id !== id),
    }));
  };
  updatecontact = (id) => {
    const contact = this.state.contacts.find((c) => c.id === id);
    if (contact) {
      this.setState({
        editingId: id,
        firstname: contact.fname,
        lastname: contact.lname,
        contactno: contact.contact,
      });
    }
  };
  viewcontact = (id) => {
    this.setState((prevState) => ({
      contacts: prevState.contacts.map((x) =>
        x.id === id ? { ...x, visible: !x.visible } : x
      ),
    }));
  };
  render() {
    const { contacts, firstname, lastname, contactno } = this.state;
    return (
      <>
        <input
          type="text"
        //   text="First Name"
          value={firstname}
          onChange={this.onfirstnamechange}
        />
        <input type="text" value={lastname} onChange={this.onlastnamechange} />
        <input
          type="text"
          value={contactno}
          onChange={this.oncontactnochange}
        />
        <br />
        <button onClick={this.addtocontact}>
          {this.state.editingId ? "Update" : "Add"}
        </button>
        {this.state.editingId && (
          <button
            onClick={() =>
              this.setState({
                editingId: null,
                firstname: "",
                lastname: "",
                contactno: "",
              })
            }
          >
            Cancel
          </button>
        )}
        <br />
        <ul>
          {contacts.map((x) => (
            <li key={x.id}>
              {x.fname}{" "}
              <button
                onClick={() => {
                  this.viewcontact(x.id);
                }}
              >
                View
              </button>{" "}
              <button
                onClick={() => {
                  this.updatecontact(x.id);
                }}
              >
                Update
              </button>{" "}
              <button onClick={() => this.deletecontact(x.id)}>Delete</button>
              {/* <button onClick={() => this.onfirstnamechange(x.id)}></button> */}
              <div style={{ display: x.visible ? "" : "none" }}>
                {x.lname} - {x.contact}
              </div>
            </li>
          ))}
        </ul>
      </>
    );
  }
}
export default ContactList;

// 1. Create `src/ContactList.js`
// 2. Import and use in `App.js`
// 3. Add contacts, edit contact details, delete contacts
// 4. Observe array state management with object updates
