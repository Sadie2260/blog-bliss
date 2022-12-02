import React, { useEffect, useState } from "react";
import Topbar from "../../components/topbar/Topbar";
import Header from "../../components/header/Header";
import { SliderData } from "../../components/header/SliderData";
import InfoSection from "../../components/infoSection/InfoSection";
import axios from "axios"
import { useLocation } from "react-router-dom";
const Home =()=>{
        const [post, setPost]=useState([]);
        const { search } = useLocation();
        useEffect(()=>{
               
                const fetchData= async()=>{
                        try{
                    const res= await axios.get( "http://localhost:3002/api/post/" + search)
                        setPost(res.data)
                    }
                    catch (err){
                        console.log(err);
                    }};
                fetchData();
        },[search]);
        return(
                <>
            <div>
           <Topbar/>
                <Header slides={SliderData}/>
                <InfoSection posts={post}/>
                </div>
                </>
        )
}
export default Home;