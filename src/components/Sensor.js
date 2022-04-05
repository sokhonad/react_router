import { useState ,useEffect} from 'react'
import { Link } from 'react-router-dom';
// import '../styles/Sensor.css';

 function Sensor({ updateDetailSensor,inputValue}) {
    const [data, setData] = useState([]);
     useEffect(()=>{
         const fetchDate=async ()=>{
            const response = await fetch(inputValue);
            const json = response.ok ? await response.json(): "";
              setData(json);
         };
         fetchDate();
     },[inputValue]);
    return (
        <ul className='list_sensor'>
            {data.map((element, index) => (
                <li  key={index.toString()} ><Link to={"/"+element.name.normalize("NFD").replace(/\p{Diacritic}/gu, "").split(" ").join("_")} key={index.toString()} onClick={
                    () => {
                        if(element.type==="TEMPERATURE"){
                            updateDetailSensor([data[index]]);
                        }
                        if(element.type==="DOOR"){
                            updateDetailSensor([data[index]]);
                        }
                        if(element.type==="FAN_SPEED"){
                            updateDetailSensor([data[index]]);
                        }
                        }                        
                }
                >{element.name}</Link></li>
            ))}
        </ul>
    )
}

export default Sensor;