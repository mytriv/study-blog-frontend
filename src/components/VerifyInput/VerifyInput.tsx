import styles from "./index.module.css";
import React, { useRef, useState} from "react";

type Props = {
    updateCode: (str: string) => void;
}

export const VerifyInput = ({updateCode}: Props) => {

    const [verificationCode, setVerification] = useState(["","","",""]);

    const input1Ref = useRef<any>();
    const input2Ref = useRef<any>();
    const input3Ref = useRef<any>();
    const input4Ref = useRef<any>();


    const onChangeHandler = (ref: any, index: number) => {
        return (event: React.ChangeEvent<HTMLInputElement>) => {
            let updatedVerificationCode = [...verificationCode];

            updatedVerificationCode[index] = event.target.value;
            setVerification(updatedVerificationCode);
/*            console.log(updatedVerificationCode, setVerification);*/
            updateCode(updatedVerificationCode.join(""))

            if (event.target.value === "" || !ref) {
                return
            }
            ref.current.focus();
        }
    }

    return (
        <div className={styles.inputs}>
            <div className={styles.inputWrap}>

                <input ref={input1Ref}
                       value={verificationCode[0]}
                       onChange={  onChangeHandler(input2Ref, 0) }
                       type="text" maxLength={1} size={50}  autoFocus={true}/>

                <input ref={input2Ref} value={verificationCode[1]}
                       onChange={ onChangeHandler(input3Ref, 1) }
                       type="text" maxLength={1} size={50}/>

                <input ref={input3Ref} value={verificationCode[2]}
                       onChange={ onChangeHandler(input4Ref, 2) }
                       type="text" maxLength={1} size={50}/>

                <input ref={input4Ref} value={verificationCode[3]}
                       onChange={ onChangeHandler(null, 3)}
                       type="text" maxLength={1} size={50}/>
            </div>
        </div>
    );
}