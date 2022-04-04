import '../styles/App.css';
import Input from './Input';
import CapteurList from './CapteurList';
import DetailCapteur from './DetailCapteur';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useState } from 'react'

function App() {
	const [inputValue, setInputValue] = useState('')
  const [entree, setEtree] = useState(false);
   const [detailCapteur, updateDetailCapteur] = useState([]);
  return entree ?(
    <>
        <Router>
          <Input inputValue={inputValue} setInputValue={setInputValue} entree={setEtree}/>
          <CapteurList updateDetailCapteur={updateDetailCapteur}  inputValue={inputValue} />
          <Routes>
            < Route  path={"/"+detailCapteur.map((element)=>element.name.normalize("NFD").replace(/\p{Diacritic}/gu, "").split(" ").join("_"))} element={<DetailCapteur detailCapteur={detailCapteur}/>}/>
          </Routes>
        </Router>
    </>
  ):(
          <Router>
            <Input inputValue={inputValue} setInputValue={setInputValue} entree={setEtree}/>
          </Router>
    );
}
export default App;
