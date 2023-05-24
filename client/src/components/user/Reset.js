import React from "react";
import styles from "../../styles/username.module.css";
import {Toaster} from "react-hot-toast";
import {useFormik} from "formik";
import {passwordValidate} from "../../helper/validate";

const Reset = () => {

    const formik = useFormik({
        initialValues: {
            password: "",
            confirm_pwd:""
        },
        validate: passwordValidate,
        validateOnBlur: false,
        validateOnChange: false,
        onSubmit: async values => {
            console.log(values);
        }
    });

    return (
        <div className={"container mx-auto"}>
            <Toaster position={"top-center"} reverseOrder={false}></Toaster>
            <div className={"flex justify-center items-center h-screen"}>
                <div className={styles.glass}>
                    <div className={"title flex flex-col items-center"}>
                        <h4 className={"text-5xl font-bold"}>Reset</h4>
                        <span className={"py-4 text-xl w-2/3 text-center text-gray-500"}>
                            Enter new password
                        </span>
                    </div>
                    <form className={"py-20"} onSubmit={formik.handleSubmit}>
                        <div className={"text_box flex flex-col items-center gap-6"}>
                            <input {...formik.getFieldProps('password')} type={"password"} className={styles.text_box}
                                   placeholder={"Password"}/>
                            <input {...formik.getFieldProps('confirm_pwd')} type={"password"} className={styles.text_box}
                                   placeholder={"Confirm Password"}/>
                            <button type={"submit"} className={`${styles.btn} bg-indigo-500`}>Sign up</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Reset;