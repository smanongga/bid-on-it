import React from 'react'
import {connect} from 'react-redux'
import {LogIn} from '../actions/'

class Login extends React.Component{
    constructor(props){
        super(props)

        this.state={
            username: '',
            password: ''

        }
        this.saveUserToSession = this.saveUserToSession.bind(this)
    }
    handleChange(evt){
        this.setState({
        [evt.target.name]: evt.target.value
        })
    }

    handleSubmit(evt){
        evt.preventDefault()
        props.logIn()
    }



    render(){
        return(
            <div>
                <form onSubmit={this.handleSubmit.bind(this)}>
                    <input type="text" placeholder="username" onChange={this.handleChange.bind(this)}/>
                    <input type="password" placeholder="password" onChange={this.handleChange.bind(this)}/>
                    <button>Login</button>
                </form>
            </div>
        )
    }
}

function mapDispatchToProps(dispatch){
    return {
        logIn: dispatch(LogIn(this.state.username, this.state.password))
    }
}