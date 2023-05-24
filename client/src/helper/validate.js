import toast from "react-hot-toast";

/**
 * Validate login username
 */
export async function usernameValidate(values) {
    return usernameVerify({}, values);
}

/**
 * Validate login password
 */

export async function passwordValidate(values) {
    return passwordVerify({}, values);
}


/**
 * Validate Password
 */
function passwordVerify(error = {}, values) {
    const specialChars = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
    if (!values.password) {
        error.password = toast.error("Password is required...!!");
    } else if (values.password.includes(" ")) {
        error.password = toast.error("Invalid password");
    } else if (values.password.length < 8) {
        error.password = toast.error("Password is too short,try 8 characters")
    } else if (!specialChars.test(values.password)) {
        error.password = toast.error("Password must contain special characters")
    }
    return error;
}

/**
 * Validate Username
 */
function usernameVerify(error = {}, values) {
    if (!values.username) {
        error.username = toast.error("Username is required");
    } else if (values.username.includes(" ")) {
        error.username = toast.error("Invalid username");
    }
    return error;
}