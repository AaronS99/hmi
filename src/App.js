import logo from './logo.svg';
import './App.css';

function App() {

      const messages = document.querySelector('#messages');
        let ws;
        var displaystring = "";

        function showMessage(message) {
            var blobText = ""
            message.text().then(text => {
                blobText = text
                console.log(blobText);
                displaystring = blobText;
                messages.innerHTML += blobText + "\n";
            });
            
        }

        function init() {
            if(ws) {
                ws.onerror = ws.onopen = ws.onclose = null;
                ws.close();
            }

            ws = new WebSocket('ws://localhost:7001');
            ws.onopen = () => {
                console.log('Connection opened!');
            }
            ws.onmessage = ({ data }) => showMessage(data);
            ws.onclose = function() {
                ws = null;
            }
        }


        init();
  return (
    <div className="App">
      <header className="App-header">
        <p id="Anzeige">
          HALLO{ displaystring }
        </p>
      </header>
    </div>
  );

}

export default App;
