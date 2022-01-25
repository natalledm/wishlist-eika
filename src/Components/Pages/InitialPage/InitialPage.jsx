import "./initial-page.css";
import logo from "../../../assets/images/logo.png";
import { Link } from "react-router-dom";

export default function WelcomeContent() {
  return (
    // Good CSS naming conventions, during the course i will explain how to make them even better!
    // (but super happy to see we are starting on a nice level 😀)
    <section className="welcome-container flex-column">
      <img src={logo} alt="Logo" className="logo-img" />
      <h1 className="welcome-title">Welcome to the shopping app for Eika!</h1>
      <div className="welcome-text-button-container flex-column">
        <p className="welcome-text">
          Click the button to go to your shopping list. Just add the Eika item
          you want to purchase and the price. You can also see your bought
          items.
        </p>
        <p className="welcome-text">Have a great shopping day!</p>
        <button className="list-page-button">
          <Link to="/shopping-list">Go to the list!</Link>
        </button>
      </div>
    </section>
  );
}
