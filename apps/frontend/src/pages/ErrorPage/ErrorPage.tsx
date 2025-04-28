import React from 'react';
import { NavigateFunction, useNavigate } from 'react-router-dom';
import ROUTES from '../../app/routes/routes.enum';
import useUser from '../../hooks/useUser';
import './Error-Page.css';
import { fakeRandomUsersResponse } from '../../../fakeDB/randomUsers';
import { useAppDispatch } from '../../store/hooks/useAppHooks';
import { setError } from '../../store/randomUserSlice';

type ErrorPageProps = {
  enableFakeUsers?: boolean;
  goBack?: boolean;
};
const ErrorPage: React.FC<ErrorPageProps> = ({ enableFakeUsers, goBack }) => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { error,setFakeRandomUsers } = useUser();

  const useFakeRandomUsersResponse = () => {
    setFakeRandomUsers(fakeRandomUsersResponse.results);
    dispatch(setError(null));
  };

  const handleNavigate = () => {
    if (goBack) {
      dispatch(setError(null));
    } else {
      navigate(ROUTES.HOME);
    }
  };
  return (
    <section className="error-page">
      <div className="error-message">Error loading users</div>
      {error && <div className="error-details">Error: {error}</div>}
      <div className="error-message">Please try again later.</div>
      <button className="error-button" onClick={handleNavigate}>
        {goBack ? 'Back' : 'Home'}
      </button>
      {enableFakeUsers && (
        <button className="error-button" onClick={useFakeRandomUsersResponse}>
          Load Fake Users
        </button>
      )}
    </section>
  );
};

export default ErrorPage;
