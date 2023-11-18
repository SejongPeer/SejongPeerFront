import { useEffect, useState } from 'react';
import InputTextBox from './InputTextBox';

import style from './SignUpElement.module.css';
import EmailBox from './EmailBox';
import GenderSignUp from './GenderSignUp';
import MajorSignUp from './MajorSignUp';

const SignUpElement = (props) => {
    const [isEmail, setIsEmail] = useState(false);
    const [isError, setIsError] = useState('');
    const isGender = props.id === "gender";
    const isMajor = props.id === "major";

    const errorHandler = (error) => {
        setIsError(error);
        props.signUpErrorHandler(error);
    };

    useEffect(() => {
        if(props.id === "email"){
            setIsEmail(true);
        } else {
            setIsEmail(false);
        }
    }, [props.id]);
    
    return <div className={style.container}>
        {props.id !== "check" &&<p className={style.title}>{props.title}</p>}

        {isEmail ? (
            <EmailBox
                id={props.id}
                name={props.name}
                emailData={props.emailData}
                errorHandler={errorHandler}
            />
        ) : isGender ? (
            <GenderSignUp 
                id={props.id}
                name={props.name}
                genderData={props.genderData}
            />
        ) : isMajor? (
            <MajorSignUp 
                id={props.id}
                name={props.name}
                collegeData={props.collegeData}
                majorData={props.majorData}
            />
        ) : (
            <InputTextBox 
                id={props.id}
                name={props.name}
                errorHandler={errorHandler}
                
                idData={props.idData}
                pwdData={props.pwdData}
                nameData={props.nameData}
                birthData={props.birthData}
                kakaoData={props.kakaoData}
                phoneNumData={props.phoneNumData}
                studentNumData={props.studentNumData}
            />
        )}

        {isError && (<p className={style.error}>{isError}</p>)}
    </div>;
};

export default SignUpElement;