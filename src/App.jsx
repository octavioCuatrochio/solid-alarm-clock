import "./App.css";
import Display from "./components/display/Display";
import Options from "./components/options/Options";
// import DebugScreen from "./components/debug/DebugScreen";
import ConfigPanel from "./components/config/ConfigPanel";
import AlarmSystem from "./components/alarm/AlarmSystem";
import { createSignal } from "solid-js";

function App() {

  const [showConfigPanel, setShowConfigPanel] = createSignal(false);

  function toggleConfigPanel() {
    setShowConfigPanel(!showConfigPanel());
  }

  return (
    <div className="container">
      <Display />
      {/* <DebugScreen /> */}

      {showConfigPanel() &&
        <ConfigPanel />
      }

      <AlarmSystem />

      <Options onConfigAction={toggleConfigPanel} />
    </div>
  );
}

export default App;
