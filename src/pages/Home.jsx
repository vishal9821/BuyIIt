import React, {useEffect, useState} from "react";
import axios from "axios";
import Card from "../components/Card.jsx";


const Home = ({update}) => {
    const [Data, updateDate] = useState([]);


    const getdata = async ()=>{
        const response = await axios.get('https://fakestoreapi.com/products');
        updateDate(response.data);
    }
    useEffect(() => {
        getdata();
    }, []);


    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 px-4 ml-2">
            {
                Data.map( (e)=>{
                    return <Card key={e.id} name={e.title} image={e.image} desc={e.description} price={e.price} update={update}  />
                })
            }
        </div>
    );
};

export default Home;
