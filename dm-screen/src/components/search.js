import axios from "axios";
import { useEffect, useState, useContext } from "react";
import BaseURLContext from "../context/URLContext";

const Search = (props) => {
    //Queries D&D API for monster list
    //Populates search bar

    const baseURL = useContext(BaseURLContext);

    const [monsterList, setMonsterList] = useState();
    const [monster, setMonster] = useState();

    const {handler} = props;

    useEffect(()=>{
        axios.get(baseURL)
        .then((res)=>{
            // console.log(res.data.results);
            setMonsterList([...res.data.results])
            setMonster(res.data.results[0].index)
        })
        .catch((err)=>{
            console.log("API error:", err);
        })
    },[]);

    const submitHandler = (e) => {
        e.preventDefault();
        handler(monster);
    }

    return (
        <form onSubmit ={submitHandler} className="search-bar">
            <select onChange={(e)=>setMonster(e.target.value)}>
                {monsterList == null ? <option>Loading...</option>:
                monsterList.map((item, key)=>{
                    return <option key={key} value={item.index}>{item.name}</option>
                })
                }
            </select>
            <button>Get Info</button>
        </form>
    
        )
}

export default Search;