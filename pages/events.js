import EventsList from "../components/EventList"

export default function events({ events }) {
    return (
      <div>
        <EventsList events={events} />
      </div>
    )
}

export var getServerSideProps = async () => {
  const url = new URL (process.env.URL + `/events`);
  const res = await fetch(url.href)
  const eventjson = await res.json()
  const events = eventjson["items"]

  return {
    props: {
      events,
    },
  }
}