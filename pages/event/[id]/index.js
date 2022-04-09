import Link from 'next/Link'
import { useRouter } from 'next/router'
import EventItem from '../../../components/EventItem.js'

const event = ({ event }) => {
    return (
        <div>
            <EventItem event={event}/>
        </div>
    )
}

export const getStaticProps = async (context) => {
    const url = new URL (process.env.URL + `/events/` + context.params.id);
    const res = await fetch(url.href)
    const event = await res.json()

    return {
        props: {
            event,
        },
    }
}

export const getStaticPaths = async () => {
    const url = new URL (process.env.URL + `/events`);
    const res = await fetch(url.href)
    const eventsjson = await res.json()
    const events = eventsjson["items"]
  
    const ids = events.map((event) => event.id)
    const paths = ids.map((id) => ({ params: { id: id.toString() } }))
  
    return {
        paths,
        fallback: false,
    }
}

export default event