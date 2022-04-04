import { useState ,useEffect} from 'react'
import { Link } from 'react-router-dom';


 function CapteurList({ updateDetailCapteur,inputValue}) {
    const [data, setData] = useState([]);
     useEffect(()=>{
         const fetchDate=async ()=>{
            const response = await fetch(inputValue);
            const json = response.ok ? await response.json(): "";
              setData(json);
         };
         fetchDate();
     });
    return (
        <ul>
            {data.map((element, index) => (
                <Link to={"/"+element.name.normalize("NFD").replace(/\p{Diacritic}/gu, "").split(" ").join("_")} key={index.toString()} onClick={
                    () => {
                        if(element.type==="TEMPERATURE"){
                            updateDetailCapteur([data[index]]);
                        }
                        if(element.type==="DOOR"){
                            updateDetailCapteur([data[index]]);
                        }
                        if(element.type==="FAN_SPEED"){
                            updateDetailCapteur([data[index]]);
                        }
                        }                        
                }
                >{element.name}</Link>
            ))}
        </ul>
    )
}

export default CapteurList;