export default function EmojiButton(props) {
    const btnContent = props.selectedCardEntry || props.matchedCardEntry?
     props.content : "?"
    return (
      <button 
        className="card-btn"
        onClick={props.handleClick}
       >
        {btnContent}
      </button>
    );
  };

