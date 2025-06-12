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
        <div className="inner-wrapper">
            <h2>Select the number of cards </h2>
            <select name="number" id="number" onChange={props.handleChange}>
                <option value={10}>10</option>
                <option value={20}>20</option>
                <option value={30}>30</option>
                <option value={40}>40</option>
                <option value={50}>50</option>
            </select>
        </div>
        <button onClick={props.startGame}>Start Game</button>
      </form>
    </div>
  );
}
