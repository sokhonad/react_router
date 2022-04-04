import { Link } from 'react-router-dom';

    
  function Input({ inputValue,setInputValue,entree}) {
	function handleInput(e) {
		setInputValue(e.target.value);
	}

	function setEtree(){
		entree(true);
	}

	return (
		<div >
			<div>URL :</div>
			<input
				placeholder='Source'
				onChange={handleInput}
				value={inputValue}
			/>
			<button onClick={() => setEtree() }>
				<Link to="/" > OK</Link>
			</button>
		</div>
	);
}

export default Input;
