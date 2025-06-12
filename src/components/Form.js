export default function Form(props) {
  return (
    <div className="form-container">
      <form className="wrapper">
        <div className="inner-wrapper">
            <h2>Select an emoji category</h2>
            <select name = "category" id="category" onChange={props.handleChange}>
                <option value="animals-and-nature">animals-and-nature</option>
                <option value="food-and-drink">food-and-drink</option>
                <option value="travel-and-places">travel-and-places</option>
                <option value="objects">objects</option>
                <option value="symbols">symbols</option>
            </select>
        </div>
        <button onClick={props.startGame}>Start Game</button>
      </form>
    </div>
  );
}
