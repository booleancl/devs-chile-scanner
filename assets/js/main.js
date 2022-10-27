import * as params from "@params"
import axios from "axios"

const fetchData = async () => {
    try {
        console.log('Requesting data')
        const response = await axios.get(params.default.API_URL)

        console.log(response.data)
    } catch (error) {
        console.log(error.message)
    }
}
fetchData()
