import '../styles/App.css';
import Input from './Input';
import Sensor from './Sensor';
import DetailSensor from './DetailSensor';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useState } from 'react'
import '../styles/Layout.css';


function App() {
	const [inputValue, setInputValue] = useState('')
  const [entree, setEtree] = useState(false);
   const [detailSensor, updateDetailSensor] = useState([]);
  return entree ?(
    <div >
        <Input inputValue={inputValue} setInputValue={setInputValue} entree={setEtree}/>
        <div className='lmj-layout-inner ' >
        <Router>
          <Sensor updateDetailSensor={updateDetailSensor}  inputValue={inputValue} />
          <Routes>
            < Route  path={"/"+detailSensor.map((element)=>element.name.normalize("NFD").replace(/\p{Diacritic}/gu, "").split(" ").join("_"))} element={<DetailSensor detailSensor={detailSensor}/>}/>
          </Routes>
        </Router>
        </div>
    </div>
  ):(
            <Input inputValue={inputValue} setInputValue={setInputValue} entree={setEtree}/>
    );
}
export default App;
