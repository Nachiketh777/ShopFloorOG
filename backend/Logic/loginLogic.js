const LoginCont = require("../controller(db)/login");

function LoginLogic(props){
        console.log(props.user)
        console.log(LoginCont(props.user));
}

module.exports = LoginLogic;