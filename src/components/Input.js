import '../styles/Input.css';

 function Input({ inputValue,setInputValue,entree}) {
	function handleInput(e) {
		setInputValue(e.target.value);
	}

	function setEtree(){
		entree(true);
	}

	return (
		<div   className="input_comp">
			<div className="input_url">URL :</div>
			<input className="input"
				placeholder='Source'
				onChange={handleInput}
				value={inputValue}
				onBlur={setEtree}
			/>
		</div>
	);
}

export default Input;
