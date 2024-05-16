import "./App.css";
import { useState } from "react";
import Editor from "./layouts/Editor";
import Preview from "./layouts/Preview";

function App() {
    const [page, setPage] = useState(0);

    const viewHandler = () => {
        switch (page) {
            case 0:
                return <Editor setPage={setPage} />;
            case 1:
                return <Preview setPage={setPage} print={true} />;
            default:
                return null;
        }
    };

    return <div className="App">{viewHandler()}</div>;
}

export default App;
