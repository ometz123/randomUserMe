import React, { useEffect } from 'react';
import useUser from '../../hooks/useUser';
import { UsersTable } from '../../components/usersTable';
import './Saved-Users.css';
import Loading from '../../components/loading';

const SavedUsers: React.FC = () => {
  const { getDbUsers, dbUsers, loading } = useUser();

  useEffect(() => {
    getDbUsers().then();
  }, []);

  if (loading) return <Loading />;
  
  return (
    <div>
      <UsersTable users={dbUsers} title={'Saved Users'} />
    </div>
  );
};

export default SavedUsers;
