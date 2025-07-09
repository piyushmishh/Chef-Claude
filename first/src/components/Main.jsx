import React from "react" //to use {usestate}

export default function Main(){

    const  [ingridients,setingridients]=React.useState([])

    const ili = ingridients.map(ingridient => (
    <li key={ingridient}>{ingridient}</li>
    ))  

    function handlesubmit(formData){
        const newingridient=formData.get("ingridient")
        setingridients(previngridients=> [...previngridients,newingridient])
    }
//function setfav(){
//setmyfav(prevfav=> {...prevfav,new item here})} doesnot modifies the existing array instead creates a new array with prev elemnts and new elements

    return (
        <main>
            <form action={handlesubmit} className="add-ing-form">

                <input 
                    aria-label="Add Ingredient"
                    placeholder="e.g.oregano"
                    text="text"
                    name="ingridient"
                />
                <button>Add Ingredient</button>
            </form>
            <ul>
                {ili}
            </ul>
        </main>
    )
}




//forms in react
//very diff types of input(text,radio)
/* <input type="radio/text" name="email"  placeholder="Email"  />
<button></button>
another input types as submit  */
//how to take data
// funtion handlesubmit(event){
//     event.preventDefault();
//     const formel=event.currentTarget //this and below line getting us access of form data
//     const formdata=new FormData(formel)
//     const email=formdata.get("email")
//     formel.reset()
// }

//another method
{/* <form action={signup}></form>
function signup(formData) {
    const email=FormData.get("email")    better method
    const pass=formdata.get("password")
} */}

//other form input types
{/* <textarea></textarea>used for long textsss in a rectangualr box we 
we can give it an id and then use it in <label htmlFor="_id"></label>
defaultvalue is used ofr initialising it with a defaultvalue which shown there
<input types="radio"
 /> selecting all if multiple used so use the same name for multipleto guarantee one use
 while creating radio button use value in it to use while its being submitted

 similary are the checkboxes use getAll for all the options as Array
 for dropdown use select and insode that use <option value="Red"></option> */}

