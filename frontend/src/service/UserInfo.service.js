import axios from "axios";

export const UserService = () => {
    const api_url = "http://127.0.0.1:8000";
    
    const SignIn = async (userInfo) => {
        let result = ''
        await axios({
            method: "POST",
            url: `${api_url}/sign-in/`,
            // header: { 'Content-Type': 'application/json' },  chỉnh  sửa header khi thêm jwt
            data: {
                ...userInfo
            }
        })
            .then((res) => {
                result = res.data   
            })
            .catch((err) => {
                console.error(err);
            });
            return result
    };

    const SignUp = async (userInfo) => {
        let result
        await axios({
            method: "POST",
            url: `${api_url}/sign-up/`,
            // header: { 'Content-Type': 'application/json' },  chỉnh  sửa header khi thêm jwt
            data: {
                ...userInfo
            }
        })
            .then((res) => {
                result = res.data
            })
            .catch((err) => {
                console.error(err);
            });
            
            return result
    };
    return { SignIn, SignUp }
}
