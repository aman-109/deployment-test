import "./App.css";
import Folder from "./components/Folder";
import { fileData } from "./dataset/folderDataset/folderData";

function App() {
  return (
    <>
      {/* <div>{fileData?.isFolder && <Folder folderData={fileData} />}</div> */}
      <div>
      <iframe
      id="grafana-iframe"
      src={"https://snapshots.raintank.io/dashboard/snapshot/bnKkoC3wojmFLQxQtq4cQxrSze16HIdQ"}
      width="100%"
      height="600px"
      frameBorder="0"
      scrolling="auto"
    />
      </div>
    </>
  );
}

export default App;
