export default function Vacancies() {
    let vacancies = [
      
    ];
    return <>
        <h1>Vacancies</h1>
        {vacancies.map((event) => 
          <div>
            <a href={event.link} target="_blank">
              <h2>{event.title}</h2>
              <i>{event.start}</i>
            </a>
          </div>
        )}
    </>

}