import axios from "axios";


export async function getPruducts(limit = 10) {
    return await axios.get(`https://dummyjson.com/products?limit=${limit}`)
}

export async function getPruductById(id = 1) {
    return await axios.get(`https://dummyjson.com/products/${id}`)
}

export async function getCategories() {
    return await axios.get('https://dummyjson.com/products/categories')
}

export async function getPruductsByCategory(id = smarthphones) {
    return await axios.get(`https://dummyjson.com/category/${id}`)
}