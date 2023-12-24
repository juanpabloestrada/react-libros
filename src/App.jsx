import { useEffect, useState } from "react";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import NavBar from "./components/NavBar/NavBar";
import "bootstrap/dist/css/bootstrap.min.css";

import { getPruducts } from "./services";
import { Data } from "./json/productsData";


const App = () => {
  const [productsData, setProductsData] = useState([]);

  useEffect(() => {
    getPruducts()
    .then(res => {
      setProductsData(res.data.products)
    })
    .catch(error => {
      console.log(error);
    });
  }, [])


  return (
    <div style={{width: "100vw", height: "100vh"}} >
      <NavBar />
      <ItemListContainer productsData={Data} />
    </div>
  );
};

export default App;
