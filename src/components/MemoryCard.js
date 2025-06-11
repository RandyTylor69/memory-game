import { decodeEntity } from "html-entities";

export default function MemoryCard(props) {
  
  const emojiEl = props.emojiData.map((emoji, index) => (
    <div className="card-item" key={index}>
      <button className="card-btn" onClick={props.turnCard}>
        {decodeEntity(emoji.htmlCode[0])}
      </button>
    </div>
  ));
  return <div className="card-container">{emojiEl}</div>;
}
