import { Component } from "react";
import { FormStyle } from "./Form.styled";

export class Form extends Component {
    state = {
        name: '',
        number: ''
    };

    handleChange = event => {
        const {name, value} = event.currentTarget
        this.setState({[name]: value});
    };

    handleSubmit = event => {
        event.preventDefault();
        this.props.onChange(this.state);
        this.formReset();
    };

    formReset = () => {
        this.setState({name: '', number: ''})
    };

    render(){
        const {name, number} = this.state;
        return(
            <FormStyle onSubmit={this.handleSubmit}>
                <label className='label' htmlFor='name'>
                    <span className="input-title">Name</span>
                    <input className="input"
                    type="text"
                    name="name"
                    required
                    value={name}
                    onChange={this.handleChange}
                    pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                    />
                </label>
                <label htmlFor='number'>
                    <span className="input-title">Number</span>
                    <input className="input"
                        type="tel"
                        name="number"
                        required
                        value={number}
                        onChange={this.handleChange}
                        pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
                        />
                </label>
                <button 
                    className="btn btn-primary btn-block btn-large" 
                    type='submit'
                    disabled={name === '' && number === ''}
                    >Add Contact
                </button>
            </FormStyle> 
        )
    }
};