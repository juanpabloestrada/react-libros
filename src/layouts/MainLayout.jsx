import NavBar from "../components/NavBar/NavBar";

NavBar

const MainLayout = ({children}) => {
    return (
        <div style={{ width: "100vw", height: "100vh" }}>
                  <NavBar />
            {children}
            </div>
    )
}

export default MainLayout;