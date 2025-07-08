
// import { createRoot } from 'react-dom/client'
// import './index.css'
// import App from './App.jsx'

// const root=createRoot(document.getElementById("root"))
// const rootEl=<h1>hello from jsx</h1>
// root.render(
//   // <h1>hello from react.</h1>
//   rootEl
// )

//react is composable
//Composable means you can build complex UIs by combining small, reusable components — like building blocks or LEGO bricks.
//it makes use of small components to build large projects/complex
//creating components in react
// function MyAwesomeNavbar() {
//   return (
//     <nav>
//       <h2>My Navbar</h2>
//     </nav>
//   );
// }
// function MainContent() {
//   return <h1>React is great!</h1>;
// }
// //why we wrap-In React, a component must return only one parent element. You can’t return two siblings directly like this: */}
// root.render(
//        <div>
//          <MyAwesomeNavbar />       
//         <MainContent />     {/*self closing component*/}
//        </div>
// )

//react is declarative means library handles the tedious task that we would have to worry about
//it means what should be done that is computer needs to know what has to happen and it will worry about how to do that

/*
 * Challenge – recreate the above line of code in vanilla JS by creating and
 * appending an h1 to our div#root (without using innerHTML).
 *
 * - Create a new h1 element (createElement)
 * - Give it some textContent
 * - Give it a class name of "header"
 * - append it as a child (using `appendChild`) of the div#root
 *
 * Don't use innerHTML to accomplish any of this.
*/

//thus this is the imperative method telling everything toit at each step
// Step 1: Create an h1 element
// const h1 = document.createElement("h1")

// // Step 2: Set its text content
// h1.textContent = "hello bro from jsx" // Match the text from JSX
// h1.className="header"

// // Step 3: Get the root div
// document.getElementById("root").appendChild(h1)
// // Step 4: Append the h1 to root

//using root.render method is a declarative way

/**
 * Challenge: set up a new React app from scratch!
 * Hints:
 * 1. Need to import the method to create a new root
 *    from the "react-dom/client" package
 * 2. Use that root to render some JSX. For now, just render
 *    an h1 element that says anything you want.
 */
// import { createRoot } from 'react-dom/client'
// const root=createRoot(document.getElementById("root"))
// root.render(
//   // <h1>
//   //   thi is react!
//   // </h1>
//   //how to handle static image
//   // /*1.*/<img src="/icons8-react-100.png" /> //this worked when i put the image in public folder
//   //  /*2.*/<img src="/src/assets/icons8-react-100.png"/> //now we have kept it in src folder only but it will be better to make a folder called assests to save these images

//    // how to render multiple images
//    //in react we cant two things back to back this will be same as calling createel fn back to back
//    //we can do this by wrapping it like below 
//    <div>
//         <img src="/src/assets/icons8-react-100.png"/>
//         <h1>hi this is an image</h1>
//    </div>
//    //main or section or article can be used
//    //we can only render a single jsx element at a time and that jsx element can have as many children as u want
// )


/*
Challenge: Starting from scratch, build and render the
HTML for our section project. Check the Google slide for
what you're trying to build.

We'll be adding more styling to it later.

Hints:
* The React logo is a file in the project tree, so you can
  access it by using `src="react-logo.png"` in your image
  element
* You can also set the `width` attribute of the image element
  just like in HTML. In the slide, I have it set to 40px
*/

//small project
// import { createRoot } from 'react-dom/client'
// const root=createRoot(document.getElementById("root"))
// // root.render(
//   // <main>
//   //   <img src="/src/assets/react-logo.png" width="150px" />
//   //   <h1>personal detail of mine</h1>
//   //   <ul>
//   //     <li>name: piyush </li>
//   //     <li>born 2k04</li>
//   //     <li>nit patna</li>
//   //     <li>2348002</li>
//   //     <li>lives at saguna more</li>
//   //   </ul>
//   // </main>
//   //instead using the custom component
//   // tempname() //works just fine
//   <Tempname /> //to use it as a react element we have to write the first case of function capitaland then call it as an html tag as called here

// )

//creating custom components

// function /*tempname()*/ Tempname(){
//   return (
//     <main>
//     <img src="/src/assets/react-logo.png" width="150px" />
//     <h1>personal detail of mine</h1>
//     <ul>
//       <li>name: piyush </li>
//       <li>born 2k04</li>
//       <li>nit patna</li>
//       <li>2348002</li>
//       <li>lives at saguna more</li>
//     </ul>
//   </main>
//   )
// }

/**
 * Challenge (part 1):
 * Create a custom "Page" component
 *
 * It should return an ordered list with the reasons why you're
 * excited to be learning React :)
 *
 * Render the Page component.
 */

// root.render(
//   <Page />
// )

// function  Page(){   //creating our component
//   return (
//     <main>
//       <ol>
//         <li>i wanted too</li>
//         <li>mera man kiyaa</li>
//         <li>man kiya mera</li>
//         <li>same as same</li>
//       </ol>
//     </main>
//   )
// }

//challenge at 1 19

// function  Page(){   
//   return (  <div>
//       <header>
//         <img src="/src/assets/react-logo.png" width="40px" alt="react logo" />
//       </header>
//       <main>
//       <ol>
//         <h1>Reason i am  excited to learn react</h1>
//         <li>i wanted too</li>
//         <li>mera man kiyaa</li>
//         <li>man kiya mera</li>
//         <li>same as same</li>
//       </ol>
//     </main>
//     <footer>
//       <small>
//         2024mishra dev.All rights reserved.
//       </small>
//     </footer>
//     </div>
//   )
// }

// root.render(
//   <Page />
// )

//FRAGMENTS
import { Fragment } from 'react'
// one way of wrapping the code instead of div but it is troublesome to import and then use it.

// function  Page(){   
//   return ( 
//     <Fragment>
//       <header>
//         <img src="/src/assets/react-logo.png" width="40px" alt="react logo" />
//       </header>
//       <main>
//       <ol>
//         <h1>Reason i am  excited to learn react</h1>
//         <li>i wanted too</li>
//         <li>mera man kiyaa</li>
//         <li>man kiya mera</li>
//         <li>same as same</li>
//       </ol>
//     </main>
//     <footer>
//       <small>
//         2024mishra dev.All rights reserved.
//       </small>
//     </footer>
//     </Fragment>
//   )
// }  

//best way
// empty tag like brackets used for wrapping

// function  Page(){   
//   return ( 
//     <>
//       <header>
//         <img src="/src/assets/react-logo.png" width="40px" alt="react logo" />
//       </header>
//       <main>
//       <ol>
//         <h1>Reason i am  excited to learn react</h1>
//         <li>i wanted too</li>
//         <li>mera man kiyaa</li>
//         <li>man kiya mera</li>
//         <li>same as same</li>
//       </ol>
//     </main>
//     <footer>
//       <small>
//         2024mishra dev.All rights reserved.
//       </small>
//     </footer>
//     </>
//   )
// }  

//custom components parent child components

//challenge at 1 26

// import Header from "./Header"//importing from a function defined outside
// //./ indicates that i am importing this from my own file and not from any third party folder
// import Maincontent from './Maincontent.jsx' 
// import Footer from './Footer.jsx'
// //creating three seperate component and rendering it in a single fn
// function  Page(){   
//   return ( 
//     <>
//       <Header/>
//       <Maincontent/>
//       <Footer/>
//     </>
//   )
// }  


//styling with classes or adding css to our components

//challenge at 1 31 doing the stling in above defined components

//**to add a class to our jsx we use the property className */

//organising components //importing a function

//make mental model of projects

//project 1;

// import {createRoot} from "react-dom/client"
// const root=createRoot(document.getElementById("root"))

//challenge at 1 50

/**
 * Challenge: Project setup
 *
 * - Create an App component in a separate App.jsx file which is a sibling
 *   to this index.jsx file.
 * - Create a `components` folder
 * - Create the following components in separate files inside
 *   the components folder. In each one, just render an `h1`
 *   with the name of the component (e.g. return <h1>Navbar goes here</h1>):
 *     - Navbar
 *     - Main
 * - Have App component import and render the Navbar and Main components
 * - Import and render the App component inside of index.jsx using ReactDOM
 *     - At this point you should have your "Navbar goes here" etc. showing up
 *       in the mini-browser.
 * - Go to Google fonts and get the "Inter" font with weights 400, 600, and 700.
 *   Put the `<link />` to those fonts ABOVE the style.css link in index.html.
 *   You may need to do some extra research to figure out how this
 *   works if you haven't done it before.
 */

// import App from './App'
// import {createRoot} from "react-dom/client"
// const root=createRoot(document.getElementById("root"))

// root.render(<App/>)


//2:21
import './index.css';
import {createRoot} from "react-dom/client"
import App from './App'




const root=createRoot(document.getElementById("root"))
root.render(<App/>)


// learn array and obj from around 4:00
// taking data from external file or api
// import joke form ...
// export default function App(){
//   const jokeleements=jokesdata.map((joke)=>{
//     return <Joke setup{joke.setup} punchline={joke.punchline}
//   })
// }