import EmojiButton from "./EmojiButton";
import { decodeEntity } from "html-entities";

export default function MemoryCard(props) {
  
  const cardEl = props.emojiData.map((emoji, index) => { 

    const selectedCardEntry = props.selectedCards.find(emoji => 
      emoji.index === index
    )
    const matchedCardEntry = props.matchedCards.find(emoji => 
      emoji.index === index)
    
    return (
    <div className="card-item" key={index}>
      <EmojiButton 
        emoji = {emoji} 
        handleClick = {()=>props.turnCard(emoji.name, index)}
        content = {decodeEntity(emoji.htmlCode[0])}
        selectedCardEntry = {selectedCardEntry}
        matchedCardEntry = {matchedCardEntry}
      />
    </div>
  )});

  return <div className="card-container">{cardEl}</div>;
}
