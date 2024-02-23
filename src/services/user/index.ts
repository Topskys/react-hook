import server from "../../utils/request";
import { LoginType } from "./types";

class UserService {

    login(data: LoginType) {
        return server.post("/login", data)
    }
}

export default new UserService();