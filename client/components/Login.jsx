import React from 'react'

class Login extends React.Component{
    constructor(props){
        super(props)

        this.state={

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
        this.saveUserToSession()
    }

    saveUserToSession(){
        localStorage.clear('userObj')
        localStorage.setItem('userObj', JSON.stringify(this.state))
    }


    render(){
        return(
            <div>
                <form onSubmit={this.handleSubmit.bind(this)}>
                    <input type="text" placeholder="user id" onChange={this.handleChange.bind(this)}/>
                    <button>Login</button>
                </form>
            </div>
        )
    }
}