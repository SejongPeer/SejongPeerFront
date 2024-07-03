import style from './SignInBox.module.css';

const SignInBox = (props) => {
    const loginID = (event) => {
        let id = event.target.value;
        props.inputID(id);
    }
    const loginPWD = (event) => {
        let pwd = event.target.value;
        props.inputPwd(pwd);
    }

    const isPWD = props.id === "pwd";

    return isPWD ? (
        <input className={style.box}
            placeholder={props.name}
            onChange={loginPWD}
            type='password'></input>)
        :
        (<input className={style.box}
            placeholder={props.name}
            onChange={loginID}
            type='text'></input>);
};

export default SignInBox;