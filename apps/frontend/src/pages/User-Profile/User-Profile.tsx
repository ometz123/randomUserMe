import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './User-Profile.css';
import useUser from '../../hooks/useUser';
import { useAppDispatch } from '../../store/hooks/useAppHooks';
import ErrorPage from '../ErrorPage/ErrorPage';

const UserProfile: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const [isSaved, setIsSaved] = useState(false);
  const [editedName, setEditedName] = useState({
    title: '',
    first: '',
    last: '',
  });

  const {
    previewUser,
    updateLocalUsers,
    error,
    getDbUserById,
    saveUserToDB,
    deleteUserFromDB,
    updateUserInDB,
  } = useUser();

  useEffect(() => {
    const getUserFromDb = async () => {
      if (!previewUser) return;

      setEditedName({
        title: previewUser.name.title,
        first: previewUser.name.first,
        last: previewUser.name.last,
      });

      const user = await getDbUserById(previewUser.login.uuid);

      if (user === null) {
        setIsSaved(false);
      } else {
        setIsSaved(true);
      }
    };

    getUserFromDb().then();
  }, [previewUser]);

  if (error) return <ErrorPage goBack={true} />;

  if (!previewUser) return <div className="error">No user data.</div>;

  const birthYear = new Date(previewUser.dob.date).getFullYear();

  const handleSave = async () => {
    await saveUserToDB(previewUser);
    const dbUser = await getDbUserById(previewUser.login.uuid);
    if (dbUser) {
      setIsSaved(true);
    }
  };

  const handleDelete = async () => {
    if (previewUser) await deleteUserFromDB(previewUser.login.uuid);
    const dbUser = await getDbUserById(previewUser.login.uuid);
    if (!dbUser) {
      setIsSaved(false);
    }

  };

  const handleUpdate = async () => {
    const updatedUser = { ...previewUser, name: editedName };
    if (isSaved) {
      await updateUserInDB(previewUser.login.uuid, updatedUser);
    } else {
      updateLocalUsers(updatedUser);
    }
  };

  const goBack = () => navigate(-1);

  return (
    <div className="profile-container">
      <button className="back-button" onClick={goBack}>
        Back
      </button>
      <div className="profile-card">
        <img src={previewUser.picture.large} alt="avatar" className="avatar" />
        <form className="info-form" onSubmit={(e) => e.preventDefault()}>
          <div className="form-group">
            <label>Gender:</label>
            <span>{previewUser.gender}</span>
          </div>
          <div className="form-group">
            <label>Name:</label>
            <input
              type="text"
              value={editedName.title}
              onChange={(e) =>
                setEditedName({ ...editedName, title: e.target.value })
              }
              placeholder="Title"
            />
            <input
              type="text"
              value={editedName.first}
              onChange={(e) =>
                setEditedName({ ...editedName, first: e.target.value })
              }
              placeholder="First"
            />
            <input
              type="text"
              value={editedName.last}
              onChange={(e) =>
                setEditedName({ ...editedName, last: e.target.value })
              }
              placeholder="Last"
            />
          </div>
          <div className="form-group">
            <label>Age / Birth Year:</label>
            <span>
              {previewUser.dob.age} / {birthYear}
            </span>
          </div>
          <div className="form-group">
            <label>Street:</label>
            <input
              type="text"
              value={`${previewUser.location.street.number} ${previewUser.location.street.name}`}
              readOnly
            />
          </div>
          <div className="form-group">
            <label>City:</label>
            <input type="text" value={previewUser.location.city} readOnly />
          </div>
          <div className="form-group">
            <label>State:</label>
            <input type="text" value={previewUser.location.state} readOnly />
          </div>
          <div className="form-group">
            <label>Email:</label>
            <input type="email" value={previewUser.email} readOnly />
          </div>
          <div className="form-group">
            <label>Phone:</label>
            <input type="text" value={previewUser.phone} readOnly />
          </div>
          <div className="buttons">
            {!isSaved && (
              <button type="button" onClick={handleSave}>
                Save
              </button>
            )}
            {isSaved && (
              <button type="button" onClick={handleDelete}>
                Delete
              </button>
            )}
            <button type="button" onClick={handleUpdate}>
              Update
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UserProfile;
