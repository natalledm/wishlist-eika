import WelcomeContent from "./InitialPage/InitialPage";
import ShoppingListPage from "./ShoppingListPage/ShoppingListPage";
import { Routes, Route } from 'react-router'
import './main-page.css';

export default function MainPage() {
  return (
    <main className="main-page flex-column">
      <header className='main-header'>
        <h1 className='main-title'>SHOPPING LIST</h1>
      </header>
      <section className="main-content">
      <Routes>
        <Route path="/" element={<WelcomeContent />} />
        <Route path="/shopping-list" element={<ShoppingListPage />} />
      </Routes>
      </section>
      <div className="footer-container">
        <footer className="footer">Made with 💙 by Natalle</footer>
      </div>
    </main>
  );
}