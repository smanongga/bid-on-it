import React from 'react'
import {connect} from 'react-redux'
import {LogIn} from '../actions/'
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
            console.log(res.body)
            //name = res.body.name
            id = res.body.userId
        })
        this.props.logIn()
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
        logIn:(name, id) => { dispatch(LogIn(name, id)) }
    }
}

export default connect(mapDispatchToProps)(Login)