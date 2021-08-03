import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { createStream } from '../../actions';

class StreamCreate extends React.Component {
    
    renderInput({input, label, meta}) {
        console.log(meta);
        return (
           <div className='field'>
               <label>{label}</label> <br/>
               <input {...input} autoComplete='false' /> 
               { meta.touched && !meta.valid? <div className=' header'>
                <div className='ui error '>{meta.error}</div></div> : null }
           </div>
        );
    }

    formSubmit = (form) => {
        console.log(form);
        this.props.createStream(form);
      
    }

    render() {
        const { handleSubmit } = this.props;
        return (
            <form className='ui form' onSubmit={handleSubmit(this.formSubmit)}>
                <Field 
                    name='title' 
                    label='Enter Title' 
                    component={this.renderInput} />
                <Field 
                    name='description' 
                    label='Enter Description'  
                    component={this.renderInput}  />
                <button 
                    type='submit' 
                    className='ui button primary'>Save</button>
            </form>
        )
    }
};

const validate = (formValues) => {
    const errors = {};
    if(!formValues.title) {
        errors.title = 'You must enter a title.'
    }

    if(!formValues.description) {
        errors.description = 'You must enter a description.'
    }

    return errors;
}



export default connect(null, { createStream })(reduxForm({
    form: 'streamCreate',
    validate
})(StreamCreate));