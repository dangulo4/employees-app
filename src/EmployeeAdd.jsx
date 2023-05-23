import React from 'react';

export default class EmployeeAdd extends React.Component {
  constructor() {
    super();
    // BIND TO HAVE ACCESS TO OBJECT VARIABLES
    this.handleSubmit = this.handleSubmit.bind(this);
    // setTimeout(() => {
    //   this.props.createEmployee(sampleEmployee);
    // }, 2000);
  }

  handleSubmit(e) {
    e.preventDefault();
    // GET DOM ELEMENT FOR FORM
    const form = document.forms.employeeAdd;
    const employee = {
      name: form.name.value,
      extension: form.ext.value,
      email: form.email.value,
      title: form.title.value,
    };
    // PASS THE NEW CREATED EMPLOYEE
    this.props.createEmployee(employee);
    // CLEAR FORM
    form.name.value = '';
    form.ext.value = '';
    form.email.value = '';
    form.title.value = '';
  }

  render() {
    return (
      <form name='employeeAdd' onSubmit={this.handleSubmit}>
        Name: <input type='text' name='name' />
        Extension: <input type='text' name='ext' maxLength={4} />
        Email: <input type='text' name='email' />
        Title: <input type='text' name='title' />
        <button>Add</button>
      </form>
    );
  }
}
