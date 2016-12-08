var React = require("react");

var Register = React.createClass({
    getInitialState : function(){
        return {
            username: '',
            name:'',
            password: '',
            ifRegistered: true
        }
    },

    handleUsernameChange(){
        this.setState({
            username: this.refs.usernameInput.value
        })
    },

    handleNameChange(){
        this.setState({
            name: this.refs.nameInput.value
        })
    },

    handlePasswordChange(){
        this.setState({
            password: this.refs.passwordInput.value
        })
    },

    submitRegister : function () {
      this.props.submitRegister(this.state.username, this.state.name, this.state.password)  
    },

    componentDidMount : function(){
        // this.listMessage(1);
    },
    render : function(){

        return(
            <div>
                <a  className="btn btn-primary" onClick={this.props.changeIsRegistered.bind(null, true)}>Login</a>
                <input
                    type="text"
                    placeholder="username"
                    value={this.state.username}
                    ref="usernameInput"
                    onChange={this.handleUsernameChange}
                />
                <input
                    type="text"
                    placeholder="name"
                    value={this.state.name}
                    ref="nameInput"
                    onChange={this.handleNameChange}
                />
                <input
                    type="text"
                    placeholder="password"
                    value={this.state.password}
                    ref="passwordInput"
                    onChange={this.handlePasswordChange}
                />
                <a  className="btn btn-primary" onClick={this.submitRegister}>Submit</a>
            </div>
        )
    }
});

module.exports = Register;