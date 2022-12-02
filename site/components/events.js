export default function Events() {
    let events = [
      {
        "start": "2022-12-15 19:45",
        "link": "https://www.meetup.com/nl-NL/groningen-rb/events/289886611/",
        "title": "Groningen.rb Reboot"
  
      },
      {
        "start": "2022-12-15 17:00",
        "link": "https://www.meetup.com/dockergrunn/events/290102773/",
        "title": "Community All-Hands #7 | Virtual event | Dec 15th &16th"
  
      }
    ];
    return <>
        <h1>Events</h1>
        {events.map((event) => 
          <div>
            <a href={event.link} target="_blank">
              <h2>{event.title}</h2>
              <i>{event.start}</i>
            </a>
          </div>
        )}
    </>

}