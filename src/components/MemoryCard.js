export default function MemoryCard(props) {
  const emojiArray = [
    "🐶",
    "🐷",
    "🐙",
    "🐛",
    "🐵",
    "🐶",
    "🐷",
    "🐙",
    "🐛",
    "🐵",
  ];
  const emojiEl = emojiArray.map((emoji, index) => (
    <div className="card-item" key={index}>
      <button className="card-btn" onClick={props.turnCard}>
        {emoji}
      </button>
    </div>
  ));
  return <div className="card-container">{emojiEl}</div>;
}
