import './App.css';
import { Routes, Route } from 'react-router'
import ShoppingListPage from './Components/ShoppingListPage/ShoppingListPage';
import WelcomeContent from './Components/InitialPage/InitialPage';

export default function App() {
  return (
    <div className="App flex-column content-container">
      <Routes>
        <Route path="/" element={<WelcomeContent />} />
        <Route path="/shopping-list" element={<ShoppingListPage />} />
      </Routes>
    </div>
  );
}
