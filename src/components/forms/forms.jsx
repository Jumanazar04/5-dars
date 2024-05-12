import React from 'react';
import { ToastContainer, toast } from 'react-toastify';

class Forms extends React.Component{
    constructor(){
        super();
        this.state = { name: '', email: ''};
        this.handleChange = this.handleChange.bind(this);
        this.handleChange1 = this.handleChange1.bind(this)
        this.handleClick = this.handleClick.bind(this);
    }

    handleChange(event){
        this.setState({name: event.target.value})
    }

    handleChange1(event){
        this.setState({email: event.target.value})
    }

    handleClick(e){
        toast(this.state.name);
        toast(this.state.email)
        console.log(this.state);
        this.setState({
            name: '',
            email: ''
        })
    }
    render(){
    return (
        <div>
            <form action="#" className='p-2.5 w-1/3 h-1/3 border-r-10px m-auto mt-20 bg-gray-300 rounded-lg flex flex-col items-center gap-y-2.5'>
                <h1 className='text-3xl text-green-600 font-bold text-center'>Register</h1>
                <div className='flex items-center gap-x-2.5 w-1/2'>
                    <label htmlFor="name" className='font-bold'>Name:</label>
                    <input 
                        type="text" 
                        id='name' 
                        value={this.state.name}
                        onChange={this.handleChange}
                        className='w-full bg-gray-200 rounded-lg h-12' />
                </div>
                <div className='flex items-center gap-x-2.5 w-1/2'>
                    <label htmlFor="email" className='font-bold'>Email:</label>
                    <input 
                        type="text" 
                        id='email' 
                        value={this.state.email}
                        onChange={this.handleChange1}
                        className='w-full bg-gray-200 rounded-lg h-12' />
                </div>
                <button 
                    onClick={this.handleClick}
                    className='w-1/3 h-10 bg-green-600 rounded-2xl text-white font-bold'>
                        Submit
                </button>
                <ToastContainer />
            </form>
        </div>
    );
}}

export default Forms;
