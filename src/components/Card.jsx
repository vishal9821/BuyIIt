import React from 'react';

const Card = (props) => {
    return (
        <div className="flex flex-col items-center justify-center gap-8 text-black
         bg-white   px-5  my-4 rounded-xl font-Palanquin font-semibold py-4 ">
            <img src={props.image} alt="Product image"  className="h-50"/>
            <h1 className="font-bold">{props.name}</h1>
            <h5 className="text-center">{props.desc}</h5>
            <p className="font-Caveat text-2xl"> Price:₹{props.price} </p>
            <button className="py-1 px-6 rounded-xl text-white bg-amber-500 border-none  active:scale-90 cursor-pointer"
            onClick={props.update}>Add</button>
        </div>
    );
};

export default Card;
