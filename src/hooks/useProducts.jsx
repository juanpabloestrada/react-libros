import { useState, useEffect } from "react";
import { getCategories, getPruducts, getPruductsByCategory } from "../services";


export const useGetProducts = () => {
  const [productsData, setProductsData] = useState([]);

  useEffect(() => {
    getPruducts(8)
    .then(res => {
      setProductsData(res.data.products)
    })
    .catch(error => {
      console.log(error);
    });
  }, [])

  return { productsData }
}


export const useGetProductById = (id) => {
  const [productData, setProductData] = useState([]);

  useEffect(() => {
   getProductById(id)
    .then(res => {
      console.log(res.data)
      setProductData(res.data)
    })
    .catch(error => {
      console.log(error);
    });
  }, [id])

  return { productData }
}


export const useGetCategories = (limit) => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getCategories(limit)
    .then(res => {
      console.log(res)
      setCategories(res.data)
    })
    .catch(error => {
      console.log(error);
    });
  }, [])

  return { categories }
}


export const useGetProductsByCategory = (id) => {
  const [productsData, setProductsData] = useState([]);

  useEffect(() => {
    getPruductsByCategory(id)
    .then(res => {
      setProductsData(res.data.products)
    })
    .catch(error => {
      console.log(error);
    });
  }, [id])

  return { productsData }
}
