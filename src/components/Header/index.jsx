import './styles.css'

export function Header({ name, location }) {
  return (
    <header className='header'>
      <div className='box-border'>
        <div className='box-name'>
          <span className='title'>
            {name}
          </span>
          <span className='sub-title'>
            {location}
          </span>
        </div>
      </div>
    </header>
  )
}