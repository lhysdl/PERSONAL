var React = require("react");
var ReactDOM = require("react-dom");
var Register = require("./Register");

var Login = React.createClass({
    getInitialState: function () {
        return {
            username: '',
            password: '',
            isRegistered : true,
            isLogin : false
        }      
    },

    login: function () {
        
    },

    submitRegister : function (username, name, password) {
        $.ajax({
            type:'post',
            url:'/register',
            data:{
                username: username,
                name: name,
                password: password
            }
        }).done(function (data) {

        }.bind(this));
    },

    handleUsernameChange(){
        this.setState({
            username: this.refs.usernameInput.value
        })
    },

    handlePasswordChange(){
        this.setState({
            password: this.refs.passwordInput.value
        })
    },

    changeIsRegistered(state){
        this.setState({
            isRegistered : state
        })
    },
    
    componentDidMount : function(){
        //this.listMessage(1);
    },
    
    render : function () {
        
        if (this.state.isRegistered == true){
            return (
            <div>
                <a  className="btn btn-primary" onClick={this.changeIsRegistered.bind(this, false)}>Register</a>
                <input
                    type="text"
                    placeholder="username"
                    value={this.state.username}
                    ref="usernameInput"
                    onChange={this.handleUsernameChange}
                />
                <input
                    type="text"
                    placeholder="password"
                    value={this.state.password}
                    ref="passwordInput"
                    onChange={this.handlePasswordChange}
                />
                <a  className="btn btn-primary" onClick={this.login}>Login</a>
            </div>
            )
        } else {
          return <Register submitRegister={this.submitRegister} changeIsRegistered={this.changeIsRegistered} />
        }
    }
    
});

ReactDOM.render(<Login />, document.getElementById("login-container"));

module.exports = Login;