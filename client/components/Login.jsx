import React from 'react'
import {connect} from 'react-redux'
import {logIn} from '../actions/'
import {apiCheckLogin} from '../api/'

let name
let id
class Login extends React.Component{
    constructor(props){
        super(props)

        this.state={
            userName: '',
            password: '',

        }

    }
    handleChange(evt){
        this.setState({
        [evt.target.name]: evt.target.value
        })
    }

    handleSubmit(evt){
        evt.preventDefault()
        apiCheckLogin(this.state, (err, res) => {
            if (err) return console.log(err)
            console.log(res)
            name = res.name
            id = res.userId
            console.log(id, name, "this one")
            this.props.logIn(name, id)
        })
        
    }

   



    render(){
        return(
            <div>
                <form onSubmit={this.handleSubmit.bind(this)}>
                    <input type="text" placeholder="username" name="userName" onChange={this.handleChange.bind(this)}/>
                    <input type="password" placeholder="password" name="password" onChange={this.handleChange.bind(this)}/>
                    <button>Login</button>
                </form>
            </div>
        )
    }
}

function mapDispatchToProps(dispatch){
    return {
        logIn:(name, id) => { 
            dispatch(logIn(id, name)) }
    }
}

export default connect(null, mapDispatchToProps)(Login)