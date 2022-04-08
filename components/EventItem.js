import Link from 'next/link'
import eventStyles from '../styles/Event.module.css'

const eventItem = ({ event }) => {
  return (
    <div>
      <Link href={`/event/${event.id}`}>
        <a>
          <h3>{event.name}</h3>
          <p>{event.description}</p>
          <p>created:</p>
          <p>{event.created}</p>
        </a>
      </Link>
      <br></br>
    </div>
  )
}

export default eventItem
