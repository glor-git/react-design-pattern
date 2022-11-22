export default function SpinBoxView({ value, onIncrease, onDecrease }) {
  return (
    <div>
      <button onClick={onDecrease}>-</button>
      <span>{value}</span>
      <button onClick={onIncrease}>+</button>
    </div>
  )
}