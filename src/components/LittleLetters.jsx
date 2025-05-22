const affirmations = [
  "You’re doing amazing, even when it's hard.",
  "I believe in you — always.",
  "Piplup and I are cheering you on 🐧💙",
  "You’re loved more than words can say.",
  "Your smile makes the world brighter!"
]

export default function Affirmations() {
  const message = affirmations[Math.floor(Math.random() * affirmations.length)]
  return (
    <div className="affirmation">
      <h2>✨ Today’s Love Note</h2>
      <p>{message}</p>
    </div>
  )
}
