import React, { startTransition } from 'react';
import { useNavigate } from 'react-router-dom';
import ROUTES from "../../app/routes/routes.enum";
import './Home.css';

const Home: React.FC = () => {
  const navigate = useNavigate();

  const fetchNewUsers = () => {
    startTransition(() => {
      navigate(ROUTES.NEW_USERS);
    });
  };

  const goToHistory = () => {
    startTransition(() => {
      navigate(ROUTES.SAVED_USERS);
    });
  };

  return (
      <div className="home-container">
        <div className="home-buttons">
          <button
              className="home-button"
              onClick={fetchNewUsers}
          >
            Fetch
          </button>
          <button
              className="home-button"
              onClick={goToHistory}
          >
            History
          </button>
        </div>
      </div>
  );
};

export default Home;