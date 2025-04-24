import React from "react";
import { useState } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	const [color, setColor] = useState("");
	const [viewPurple, setViewPurple] = useState(false);


	const changeColor = () => {
		setColor('red');
		if (color === 'red') setColor('yellow');
		if (color === 'yellow') setColor('green')
		if (color === 'green') setColor('purple')
		if	(color === 'purple') setColor('red')
	}
	const addColor = () => {
			setViewPurple(true);
				
			
	}


	return (
		<>
			<div id="father"  className="d-flex row  justify-content-center square my-5">
				<div onClick={() => setColor('red')}
					className={"color-first red mx-2" + (color === 'red' ? ' shadow-ch' : "")}>

				</div>

				<div onClick={() => setColor('yellow')}
					className={"color-first yellow mx-2" + (color === 'yellow' ? ' shadow-ch' : "")}>

				</div>

				<div onClick={() => setColor('green')}
					className={"color-first green mx-2" + (color === 'green' ? ' shadow-ch' : "")}>

				</div>
				
				{viewPurple &&(
				<div onClick={() => setColor('purple')}
					className={"color-first purple mx-2" + (color === 'purple' ? ' shadow-ch' : "")}>

				</div>
				)};


			</div>
			<div className="d-flex justify-content-center mx-2">
				<button onClick={changeColor}
					type="button"
					className="btn btn-primary mx-2">
					Switch Color

				</button>
				<button onClick={addColor}
					type="button"
					className="btn btn-success mx-2">
					Add Color

				</button>
			</div>
		</>
	);
};

export default Home;