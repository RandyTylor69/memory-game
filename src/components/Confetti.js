import ReactConfetti from "react-confetti"

export default function Confetti(){
return(
	<div>          
		<ReactConfetti        
			width={window.innerWidth}       
			height={window.innerHeight}       
		/>    
	</div>
)}