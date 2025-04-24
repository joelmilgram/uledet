import { useEffect } from 'react';
import Uledet from './Uledet';
import { today, hebcalUrlforToday, yesterday, hebcalUrlforYesterday, tomorrow, hebcalUrlforTomorrow } from "./dates"
import { useLocation, BrowserRouter } from 'react-router-dom';

function App() {
  const query = new URLSearchParams(useLocation().search);
  const who = query.get('who') || '';

  const currentDateTime = new Date().toLocaleString();

  useEffect(() => {
    const interval = setInterval(() => {
      window.location.reload();
    }, 60000 * 60 * 12); // 60000ms = 1 minute
    return () => clearInterval(interval); // Cleanup on component unmount
  }, []);

  return (
    <div className="App">
      <img alt="Uledet" className="appImage" src={`${process.env.PUBLIC_URL}/einstein.gif`} />
      <div className="app-container">
        <h1>Bonjour {who} ({currentDateTime}), </h1>
        <Uledet title="Hier" day={yesterday} url={hebcalUrlforYesterday} target={who} />
        <Uledet title="Aujourd'hui" day={today} url={hebcalUrlforToday} target={who} />
        <Uledet title="Demain" day={tomorrow} url={hebcalUrlforTomorrow} target={who} />
      </div>
    </div>
  );
}

export default function WrappedApp() {
  return (
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
}
