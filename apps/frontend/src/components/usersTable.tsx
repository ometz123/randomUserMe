import React, { FC, useMemo } from 'react';
import { RandomUserDetails } from '@randomuser/shared/types';
import { setPreviewUser } from '../store/randomUserSlice';
import ROUTES from '../app/routes/routes.enum';
import { useAppDispatch } from '../store/hooks/useAppHooks';
import { useNavigate } from 'react-router-dom';

type UserTableProps = {
  users: RandomUserDetails[];
  title: string;
};

export const UsersTable: FC<UserTableProps> = ({ users, title }) => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const [nameFilter, setNameFilter] = React.useState('');
  const [countryFilter, setCountryFilter] = React.useState('');

  const filteredUsers = useMemo(() => {
    return users.filter((user) => {
      const fullName =
        `${user.name.title} ${user.name.first} ${user.name.last}`.toLowerCase();
      const country = user.location.country.toLowerCase();
      return (
        fullName.includes(nameFilter.toLowerCase()) &&
        country.includes(countryFilter.toLowerCase())
      );
    });
  }, [users, nameFilter, countryFilter]);

  const handleRowClick = (user: RandomUserDetails) => {
    dispatch(setPreviewUser(user));
    navigate(ROUTES.USER_PROFILE);
  };

  const goBack = () => {
    navigate(-1);
  };

  if (users.length === 0)
    return (
      <div>
        <h2>No users found</h2>
        <p>Please try again later.</p>
        <button className="back-button" onClick={goBack}>
          Back
        </button>
      </div>
    );

  return (
    <div className="users-table-container">
      <button className="back-button" onClick={goBack}>
        Back
      </button>
      <h2>{title}</h2>
      <div className="filters">
        <input
          type="text"
          placeholder="Filter by name"
          value={nameFilter}
          onChange={(e) => setNameFilter(e.target.value)}
        />
        <input
          type="text"
          placeholder="Filter by country"
          value={countryFilter}
          onChange={(e) => setCountryFilter(e.target.value)}
        />
      </div>
      <table className="user-table">
        <thead>
          <tr>
            <th>Photo</th>
            <th>Name</th>
            <th>Gender</th>
            <th>Country</th>
            <th>Phone</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {filteredUsers.map((user) => (
            <tr key={user.login.uuid} onClick={() => handleRowClick(user)}>
              <td>
                <img
                  src={(user.picture as any).thumbnail || user.picture.large}
                  alt="thumbnail"
                />
              </td>
              <td>{`${user.name.title} ${user.name.first} ${user.name.last}`}</td>
              <td>{user.gender}</td>
              <td>{user.location.country}</td>
              <td>{user.phone}</td>
              <td>{user.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
