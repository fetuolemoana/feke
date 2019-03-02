import React from 'react'

class CreateFeke extends React.Component {
  constructor(props) {
    super(props)
    this.state = { type: '', name: '', village: '' };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }



  handleSubmit = () => {
    // this.setState({value: event.target.value});
    alert(this.state.village)
  }


  render() {
    return (
      <div className='createfeke-page'>
        <form onSubmit={this.handleSubmit}>

          <label htmlFor="name">Name </label>
          <input type="text" name='name' value={this.state.name} onChange={this.handleChange} />

          <label htmlFor="village">Village </label>
          <select village={this.state.village} onChange={this.handleChange}>
          <option village="alofi">Alofi</option>
          <option village="avatele">Avatele</option>
          <option village="hakupu">Hakupu</option>
          <option village="hikutavake">Hikutavake</option>
          <option village="lakepa">Lakepa</option>
          <option village="liku">Liku</option>
          <option village="makefu">Makefu</option>
          <option village="mutalau">Mutalau</option>
          <option village="namukulu">Namukulu</option>
          <option village="tamakautoga">Tamakautoga</option>
          <option village="toi">Toi</option>
          <option village="tuapa">Tuapa</option>
          <option village="vaiea">Vaiea</option>
          </select>
          <input type="submit" value="Create feke" />
        </form>
      </div>
    )
  }
}

export default CreateFeke

// handleSubmit will need to be defined.
