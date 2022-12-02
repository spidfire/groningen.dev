export default function Companies() {
    let events = [
      {
        "link": "https://letsgetdigital.com/",
        "title": "Let's Get Digital"
  
      }
    ];
    return <>
        <h1>Companies</h1>
        {events.map((event) => 
          <div>
            <a href={event.link} target="_blank">
              <h2>{event.title}</h2>
            </a>
          </div>
        )}
    </>

}