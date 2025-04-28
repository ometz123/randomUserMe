import React, { useEffect } from 'react';
import useUser from '../../hooks/useUser';
import { UsersTable } from '../../components/usersTable';
import ErrorPage from '../ErrorPage/ErrorPage';
import Loading from '../../components/loading';
import './New-Users.css';

const NewUsers: React.FC = () => {
  const {
    getRandomUsers,
    loadFromLocalStorage,
    error,
    randomUsers,
    loading,
    clearLocalUsers,
  } = useUser();

  useEffect(() => {
    console.log('loading users from local storage');

    const users = loadFromLocalStorage();

    if (users?.length < 1) {
      console.log('no users in local storage, loading.tsx from Provider');
      getRandomUsers().then();
    }
  }, []);

  if (loading) return <Loading />;

  if (error) return <ErrorPage enableFakeUsers={true} />;

  const handleDeleteLocalUsers = () => {
    clearLocalUsers();
  };

  return (
    <div>
      <button
        className="button"
        onClick={handleDeleteLocalUsers}>Delete local users</button>
      <UsersTable users={randomUsers} title={'Random Users'} />
    </div>
  );
};

export default NewUsers;
