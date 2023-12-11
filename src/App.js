import Uledet from './Uledet';
import { today, hebcalUrlforToday, yesterday, hebcalUrlforYesterday, tomorrow, hebcalUrlforTomorrow } from "./dates"

function App() {
  return (
    <div className="App">
      <img alt="Uledet" class="appImage" src="/einstein.gif" />
      <div className="app-container">
        <Uledet title="Hier" day={yesterday} url={hebcalUrlforYesterday} />
        <Uledet title="Aujourd'hui" day={today} url={hebcalUrlforToday} />
        <Uledet title="Demain" day={tomorrow} url={hebcalUrlforTomorrow} />
      </div>

    </div>
  );
}

export default App;
