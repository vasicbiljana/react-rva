import React, {Component} from 'react';

class Contact extends Component{
    render(){
        return(
            <>
                
                <Forme/>
            </>
        );
    }
}
export default Contact;

const initialState = {
    fname: "",
    lname: "",
    phone: "",
    email: "",
    fnameError: "",
    lnameError: "",
    phoneError: "",
    emailError: "",
  };

class Forme extends React.Component {
   
    state = initialState;

    handleChange = event => {
      const isCheckbox = event.target.type === "checkbox";
      this.setState({
        [event.target.name]: isCheckbox
          ? event.target.checked
          : event.target.value
      });
    };

        validate = () => {
            let fnameError = "";
            let lnameError = "";
            let phoneError = "";
            let emailError = "";
            // let passwordError = "";
        
            if (!this.state.fname) {
              fnameError = "Polje za ime ne sme biti prazno!";
            }
            if (!this.state.lname) {
                lnameError = "Polje za prezime ne sme biti prazno!";
              }
              if (!this.state.phone) {
                phoneError = "Polje za telefon ne sme biti prazno!";
              }
        
            if (!this.state.email.includes("@")) {
              emailError = "Pogresno unet email";
            }
        
            if (emailError || fnameError || lnameError || phoneError) {
              this.setState({ emailError, fnameError, lnameError, phoneError});
              return false;
            }
        
            return true;
          };

        handleSubmit = event => {
            event.preventDefault();
            const isValid = this.validate();
            if (isValid) {
              console.log(this.state);
              // clear form
              this.setState(initialState);
            }
          };
        

        render() {
            
        return (
            <>
            <h2 className='titleForm'> Forma za upis na pripremnu nastavu</h2>
            <form onSubmit={this.handleSubmit} className='form'>
                <input name="fname" placeholder="Ime" className='input' value={this.state.fname} onChange={this.handleChange}/>

                <div className='errors'>
                    {this.state.fnameError}
                </div>
        
                <input name="lname" placeholder="Prezime" className='input' value={this.state.lname} onChange={this.handleChange}/>

                <div className='errors'>
                    {this.state.lnameError}
                </div>
                <input name="phone" placeholder="Telefon" className='input' value={this.state.phone} onChange={this.handleChange}/>

                <div className='errors'>
                    {this.state.phoneError}
                </div>
                <input name="email" placeholder="Email" className='input'
            value={this.state.email} onChange={this.handleChange} />

                <div className='errors'>
                    {this.state.emailError}
                </div>
  
        <button type="submit" className='btnSubmit'>Posalji </button>
      </form>
      </>
     );
   }
}
    