import './styles.css'

export function Information({ num, name }){
  return (
    <div className="info">
      <p>
        {name}
      </p>
      <span>
        {num}
      </span>
    </div>
  )
}
