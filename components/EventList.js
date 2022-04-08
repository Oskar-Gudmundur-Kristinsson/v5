import EventItem from './EventItem.js'
import eventStyles from '../styles/Event.module.css'

const eventList = ({ events }) => {
  return (
    <div>
        {events.map((event) => (
            <EventItem event={event} />
      ))}
    </div>
  )
}

export default eventList
