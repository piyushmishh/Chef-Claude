export default function Ingridientslist(props){
    const ili = props.ingridients.map((ingridient) => (
    <li key={ingridient}>{ingridient}</li>
  ))
     return (
        <section>
          <h2>Ingridients on hand:</h2>
          <ul className="ingridient-list" aria-live="polite">
            {ili}
          </ul>
          {props.ingridients.length > 3 && (
            <div className="get-recipe container">
              <div>
                <h3>Ready for a recipe?</h3>
                <p>Generate a recipe from your list of ingridients.</p>
              </div>
              <button onClick={props.getrecipe}>Get a recipe</button>
            </div>
          )}
        </section>
     )
}