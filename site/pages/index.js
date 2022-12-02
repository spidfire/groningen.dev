
import Head from 'next/head'
import Companies from '../components/companies';
import Events from '../components/events';
import Vacancies from '../components/vacancies';
import styles from '../styles/Home.module.css';

export default function Home() {


  return (
    <div className={styles.container}>
      <Head>
        <title>Groningen.dev</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className={styles.title}>
          Welcome to <a href="https://groningen.dev">Groningen.dev</a>
        </h1>

        <p className={styles.description}>
          This page is build and dedicated to all developers in groningen
        </p>

<Events />

<Companies />

<Vacancies />


      </main>

      <footer>
        <a
          href="https://github.com/spidfire/groningen.dev"
          target="_blank"
          rel="noopener noreferrer"
        >
          Contribute on Github
        </a>
      </footer>

      <style jsx>{`
        main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
        footer {
          width: 100%;
          height: 100px;
          border-top: 1px solid #eaeaea;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        footer img {
          margin-left: 0.5rem;
        }
        footer a {
          display: flex;
          justify-content: center;
          align-items: center;
          text-decoration: none;
          color: inherit;
        }
        code {
          background: #fafafa;
          border-radius: 5px;
          padding: 0.75rem;
          font-size: 1.1rem;
          font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
            DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }
        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  )
}