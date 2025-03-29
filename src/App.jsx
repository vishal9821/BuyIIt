import React, {useState} from 'react';
import {ToastContainer, toast, Bounce} from 'react-toastify';
import Footer from './components/Footer';
import Navigation from "./components/Navigation.jsx";
import {Route, Routes} from "react-router-dom";
import About from "./pages/About.jsx";
import Home from "./pages/Home.jsx";
import Cart from "./pages/Cart.jsx";


const App = () => {
    const [product, setproduct] = useState(0);
    function addproduct() {
        setproduct(product+1);
        notify()
    }
    const notify = () => toast.success('Product Added Successfully!',{
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        transition : Bounce
    });

    return (
        <div className="flex flex-col w-full gap-10">
            <Navigation product={product}/>
            <ToastContainer position="top-right"
                            autoClose={2000}
                            hideProgressBar={false}
                            newestOnTop={false}
                            closeOnClick={false}
                            rtl={false}
                            pauseOnFocusLoss
                            draggable
                            pauseOnHover
                            theme="dark"
                            transition={Bounce}/>
            <Routes>
                <Route path="/" element={<Home update={addproduct} />}/>
                <Route path="/about" Component={About}/>
                <Route path="/cart" element={<Cart />}/>
            </Routes>
            <Footer />
        </div>
    );
};

export default App;
