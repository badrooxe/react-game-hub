import axios from "axios";
import { CanceledError } from "axios";


export default axios.create({
    baseURL: "https://api.rawg.io/api",
    params: {
        key: 'f7bcc3cda8f3406e9d15b9172869e2a6'
    }
})
export {CanceledError};