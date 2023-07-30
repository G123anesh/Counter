import styles from "./Buttons.module.css"

// eslint-disable-next-line react/prop-types
const Button = ({incrementButtonClick, decrementButtonClick})=>{

const first = ()=>{
incrementButtonClick()
}

const second = ()=>{
    decrementButtonClick()  
}
    return(
<div className={styles.compo}>

<button onClick={first}>Increment</button>
<button onClick={second}>Decrement</button>
</div>
    )
}
export default Button;