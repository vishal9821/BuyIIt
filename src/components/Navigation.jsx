import React, {useState} from 'react';
import {Link} from 'react-router-dom';

const Navigation = ({product}) => {
    const [Text,SetText]=useState("")

    const handleinput = (e) =>{
        const value = e.target.value;
        SetText(value);
    }
    return (
        <div className="bg-amber-500 text-white flex items-center justify-between  px-5 py-5 cursor-pointer">
            <h1 className="lg:text-5xl md:text-3xl text-2xl font-bold font-Montserrat capitalize">BuyIt</h1>
            <div className="flex flex-row justify-center items-center relative lg:visible md:visible invisible">
                <input type="text" placeholder="Search..." className="px-7 py-3 text-xl bg-slate-700 border-none rounded-2xl placeholder:text-slate-400 active:outline-none w-full" onChange={handleinput} value={Text}/>
                <button onClick={()=>{SetText("")}} className="absolute right-0.5 top-0.5 active:scale-90"><img className="h-12 object-cover cursor-pointer rounded-2xl bg-amber-500" src="https://img.icons8.com/?size=100&id=111487&format=png&color=000000" alt="search icon"/></button>
            </div>
            <Link to='/' className="lg:text-3xl md:text-2xl text-xl  font-semibold font-Palanquin lg:visible md:visible invisible">Home</Link>
            <Link to='/about' className="lg:text-3xl md:text-2xl text-xl font-semibold font-Palanquin lg:visible md:visible invisible">About Us</Link>
            <Link to='/cart' className="lg:text-3xl md:text-2xl text-xl font-semibold font-Palanquin flex items-center justify-center flex-row gap-2 relative lg:visible md:visible invisible">Cart
                <img width={30} height={30} src="https://img.icons8.com/?size=100&id=8Na1VyvcBemC&format=png&color=000000"  alt="Shopping cart"/>
                {<p className="absolute text-xl bottom-6 lg:left-22  md:left-18  left-15">{product}</p>}</Link>
        </div>
    );
};

export default Navigation;
