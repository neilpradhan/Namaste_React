
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";




const useRestaurantmenu  = (resID) =>{

    const [resinfo, setresinfo] = useState(null);
    // fetchdata
    useEffect((resid) =>{
        fetchData();
    }, []);
    
    const fetchData = async () => {
        const data  = await fetch()
    }


    return resinfo;

}

export default useRestaurantmenu;