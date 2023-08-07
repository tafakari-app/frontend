import {API_URL} from "../app/context/AuthContext";

export const getLoginedUser = async () => {
    const user = await axios.get(`${API_URL}users/users/me/`);
    return user.data;
}
