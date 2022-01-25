import "./App.css";
import MainPage from "./Components/Pages/MainPage";

// Over nesting -1
// If the while app starts from MainPage, then why App.js needs to exist at all?

// Folder name -1
// the folder src/Components should be lowercase src/components (i put it here, because i cannot write comments on a folder directly)
// Same with its sub folders
export default function App() {
  return (
    <div className="App flex-column content-container">
      <MainPage />
    </div>
  );
}
