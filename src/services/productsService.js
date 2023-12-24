import axios from "axios";

export async function getPruducts() {
    return await axios.get('https://dummyjson.com/products')
}