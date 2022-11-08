import { useState, useEffect } from "react"
import { UserService } from "../../service/UserInfo.service";

const User = () => {
    const [users, setUsers] = useState([])
    const {SignIn} = UserService()
    
    const fetchData = async () => {
        const temp = await SignIn()
        console.log(temp)
        setUsers(temp)
    }

    useEffect(() => {
        fetchData();
      });

    return (
        <div>
        {/* {users.map((item) => (
        <div key={item.id}>{item.username}</div>
        ))} */}
        </div>
    )  
}

export default User
