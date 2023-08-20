import React, {useState} from 'react'

// // Without state the value is updated but component is not rendered
// export default function Btn(props){
//     let DarkModeOn = false
//     const DarkMode = "Dark Mode Turned on"
//     const LightMode = "Light Mode Turned on"
//     const onClickHandler = ()=> {
//         DarkModeOn = !DarkModeOn
//         if (DarkModeOn){
//             console.log(DarkMode)
//         }
//         else{
//             console.log(LightMode) 
//         }
//     }

//     return (
//         <div>
//         <h1>{DarkModeOn ? DarkMode: LightMode}</h1>
//         <button onClick = {onClickHandler}>ClickMe !</button>
//         </div>
        
//     )
// }


// Using state for updating updating value and rerender component v2
export default function Btn(props){
    const [DarkModeOn, setDarkModeOn] = React.useState(true)
    const DarkMode = "Dark Mode Turned on"
    const LightMode = "Light Mode Turned on"
    const onClickHandler = ()=> {
        setDarkModeOn(!DarkModeOn)
        if (DarkModeOn){
            console.log(DarkMode)
        }
        else{
            console.log(LightMode) 
        }
    }

    return (
        <div>
        <h1>{DarkModeOn ? DarkMode: LightMode}</h1>
        <button onClick = {onClickHandler}>ClickMe !</button>
        </div>
        
    )
}