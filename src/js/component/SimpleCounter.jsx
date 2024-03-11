import React from "react";

export function SimpleCounter (props){

    
	/* const [counter, setCounter] = useState(0);

	useEfect (() => {
		const interval = setInterval(() => {
			setCounter (counter => counter + 1);
		}, 1000);
	}); */
    
    return (
        <div className="container-fluid w-100" id="bigContainer">
            <div className="icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-clock" id="clock-icon" viewBox="0 0 16 16">
                    <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71z"/>
                    <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16m7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0"/>
                </svg>
            </div>
            <div className="seconds-thousands">{props.thousandDigit}</div>
            <div className="seconds-hundreds">{props.hudredsDigit}</div>
            <div className="seconds-tens">{props.tensDigit}</div>
            <div className="seconds.ones">{props.onesDigit}</div>
        </div>
    );
};


