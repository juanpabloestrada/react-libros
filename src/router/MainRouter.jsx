import { BrowserRouter as Router, Routes, Route, BrowserRouter } from "react-router-dom";
import {Home} from "../pages/Home";
import { Category } from "../pages/Category";
import { ItemDetailContainer } from "../pages/itemDetailContainer";
import NavBar from "../components/NavBar/NavBar";


const MainRouter = () => {
    return (
        <BrowserRouter>
            <NavBar />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/category/:id' element={<Category />} />
                <Route path='/item/:id' element={<ItemDetailContainer />} />
            </Routes>
        </BrowserRouter>
    )
}

export default MainRouter;