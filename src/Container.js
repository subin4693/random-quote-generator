import React,{useState,useEffect} from 'react';
const Container = () => {
	const [quote,setQuote] = useState("");


	const handleClick = () =>{
		fetch("https://api.adviceslip.com/advice")
		.then(res=>res.json())
		.then(val=> setQuote(val.slip.advice));
	}
	useEffect(()=>{
		handleClick();
	})
	// console.log(quote);

	return(
		<div className="container">
			<div className="quote__and__btn">
				<div className="quote">
					{quote}
				</div>
				<button type="button" className="btn" onClick={handleClick}>
					Generate
				</button>
			</div>
		</div>
	);
	
}

export default Container;