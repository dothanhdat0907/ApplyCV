import axios from "axios";

export const UserService = () => {
    const api_url = "http://127.0.0.1:8000";
    
    const SignIn = async () => {
        await axios({
            method: "GET",
            url: `${api_url}/accounts`,
        })
            .then((res) => {
                const data = res.data
                return data
            })
            .catch((err) => {
                console.error(err);
            });
    };
    return { SignIn }
}
