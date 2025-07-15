import React from "react"; //to use {usestate}
import Ingridientslist from "./Ingridientslist";
import Claudrecipe from "./Clauderecipe";

export default function Main() {
  const [ingridients, setingridients] = React.useState([
    "all the main spices",
    "pasta",
    "ground beef",
    "tomato paste",
  ]);

  const [recipeShown, setrecipeShown] = React.useState(false);
  function togglerecipeshown(){
    setrecipeShown(prevshoen => !prevshoen)
  }
  
  function handlesubmit(formData) {
    const newingridient = formData.get("ingridient");
    setingridients((previngridients) => [...previngridients, newingridient]);
  }

  return (
    <main>
      <form action={handlesubmit} className="add-ing-form">
        <input
          aria-label="Add Ingredient"
          placeholder="e.g.oregano"
          type="text"
          name="ingridient"
        />
        <button>Add Ingredient</button>
      </form>
      {ingridients.length > 0 && 
      (<Ingridientslist ingridients={ingridients} togglerecipeshown={togglerecipeshown}/>
      )}
      {recipeShown && <Claudrecipe/>}
    </main>
  );
}

//function setfav(){
//setmyfav(prevfav=> {...prevfav,new item here})} doesnot modifies the existing array instead creates a new array with prev elemnts and new elements

// Forms in React
// Very diff types of input (text, radio)

/*
<input type="radio" name="email" placeholder="Email" />
<input type="text" name="email" placeholder="Email" />
<button></button>

Another input type is "submit"
*/

// How to take data
// function handleSubmit(event) {
//     event.preventDefault();
//     const formEl = event.currentTarget; // gets access to form element
//     const formData = new FormData(formEl); // gets form data
//     const email = formData.get("email"); // to get specific input value
//     formEl.reset(); // reset form after submit
// }

// Another method:
/*
<form action={signup}></form>

function signup(formData) {
    const email = formData.get("email"); // better method
    const pass = formData.get("password");

    // another way to get all entries in one go
    const data = Object.fromEntries(formData);

    // to combine with existing object
    const allData = {
        ...data,
        dd: formData.get("dd")
    };

    // or access one specifically
    const dd = formData.getAll("dd"); // returns array for checkboxes etc.
}
*/

// Other form input types:

/*
<textarea id="bio" defaultValue="Write your bio here"></textarea>

<label htmlFor="bio">Bio</label>

<input type="radio" name="color" value="Red" />
<input type="radio" name="color" value="Blue" />

// For radio buttons: use same `name` to ensure one can be selected

<input type="checkbox" name="hobbies" value="Reading" />
<input type="checkbox" name="hobbies" value="Gaming" />

// For checkboxes: use formData.getAll("hobbies") to get array

<select name="country">
    <option value="India">India</option>
    <option value="USA">USA</option>
</select>
*/

//7 17 conditional rendering

// {
//     unreadmsg.len>0 && <h1>you have {unreadmsg.len} unreadmsgsss</h1>
// }
//ternary cond rendeing
{
  /* <buttono onclick={toggleshown}>{isishown? "hide":"show"}punchline</buttono>></button> just changes the word on the button */
}

//instead of using && just use the tenary and the other option be null like
// <isshown ? <P>{PaymentResponse.punchline}</P> : null

// for multiple Cases
// let text

// if(MessageChannel.length===0){
//     text="0 msg"
// }else if(message.length===1){
//     text="1msg"
// }else{
//     text="${message.length} unread messages"
// }

// can make a funtion determinetext(){
//     and then return the text and then caal it like {determinetext()}
// }
