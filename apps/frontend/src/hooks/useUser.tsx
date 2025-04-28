import { useState } from 'react';
import axios, { AxiosError } from 'axios';
import { RandomUserPreview, RandomUserDetails } from '@randomuser/shared/types';
import { useAppDispatch, useAppSelector } from '../store/hooks/useAppHooks';
import {
  clearUsers,
  setDbUsers,
  setError,
  setPreviewUser,
  setRandomUsers,
  updateRandomUsers,
} from '../store/randomUserSlice';

const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;
const RandomUsersProvider = import.meta.env.VITE_RANDOM_USER_PROVIDER;
const STORAGE_KEY = 'randomUsers';

const useUser = () => {
  const dispatch = useAppDispatch();
  const { randomUsers, previewUser, dbUsers, error } = useAppSelector(
    (state) => state.randomUser
  );

  const [loading, setLoading] = useState<boolean>(true);

  const getDbUsers = async (): Promise<RandomUserDetails[] | null> => {
    setLoading(true);
    try {
      const response = await axios.get<RandomUserDetails[]>(
        `${BACKEND_URL}/users`
      );
      dispatch(setDbUsers(response.data));
      return response.data;
    } catch (err) {
      dispatch(setError('Failed to fetch user, using previous data'));
      return null;
    } finally {
      setLoading(false);
    }
  };

  const getDbUserById = async (
    id: string
  ): Promise<RandomUserDetails | null> => {
    setLoading(true);
    try {
      const response = await axios.get<RandomUserDetails>(
        `${BACKEND_URL}/users/${id}`
      );
      return response.data as RandomUserDetails;
    } catch (err) {
      console.log({ err });
      if (err instanceof AxiosError) {
        if (err.response?.status === 404) {
          return null;
        }
        dispatch(setError(err.message));
      }
      dispatch(setError('Failed to fetch user'));
      return null;
    } finally {
      setLoading(false);
    }
  };

  const getRandomUsers = async () => {
    setLoading(true);
    try {
      const res = await axios.get(`${RandomUsersProvider}?results=10`);
      console.log(res.data.results);
      dispatch(setRandomUsers(res.data.results));
      localStorage.setItem(STORAGE_KEY, JSON.stringify(res.data.results));
    } catch (err) {
      if (err instanceof AxiosError) dispatch(setError(err.message));
    } finally {
      setLoading(false);
    }
  };

  const setFakeRandomUsers = (randomUsers:RandomUserDetails[]) => {
    setLoading(true);
    try {
      dispatch(setRandomUsers(randomUsers));
      localStorage.setItem(STORAGE_KEY, JSON.stringify(randomUsers));
    } catch (err) {
      if (err instanceof AxiosError) dispatch(setError(err.message));
    } finally {
      setLoading(false);
    }
  };

  const loadFromLocalStorage = () => {
    setLoading(true);
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      try {
        const parsed: RandomUserDetails[] = JSON.parse(stored) || [];
        dispatch(setRandomUsers(parsed));
        return parsed;
      } catch {
        console.error('Could not parse stored users');
        return [];
      } finally {
        setLoading(false);
      }
    } else {
      setLoading(false);
      return [];
    }
  };

  const saveUserToDB = async (newUser: RandomUserDetails): Promise<void> => {
    setLoading(true);
    try {
      const res=await axios.post(`${BACKEND_URL}/users`, newUser);
      updateLocalUsers(res.data);
    } catch (err) {
      const msg =
        err instanceof AxiosError
          ? err.message
          : 'Unknown error while saving user';
      dispatch(setError(msg));
    } finally {
      setLoading(false);
    }
  };

  const deleteUserFromDB = async (userId: string) => {
    setLoading(true);
    try {
      await axios.delete(`${BACKEND_URL}/users/${userId}`);
    } catch (err) {
      const msg =
        err instanceof AxiosError
          ? err.message
          : 'Unknown error while deleting user';
      dispatch(setError(msg));
    } finally {
      setLoading(false);
    }
  };

  const updateUserInDB = async (
    userId: string,
    updatedUser: Partial<RandomUserDetails>
  ) => {
    setLoading(true);
    try {
      delete updatedUser.id
      await axios.patch(`${BACKEND_URL}/users/${userId}`, updatedUser);
    } catch (e) {
      const msg =
        e instanceof AxiosError
          ? e.message
          : 'Unknown error while updating user';
      dispatch(setError(msg));
    } finally {
      setLoading(false);
    }
  };

  const updateLocalUsers=(updatedRandomUser:RandomUserDetails)=>{
    dispatch(updateRandomUsers(updatedRandomUser));
    localStorage.setItem(STORAGE_KEY, JSON.stringify(randomUsers));
  }

  const clearLocalUsers = () => {
    localStorage.removeItem(STORAGE_KEY);
    dispatch(clearUsers());
  };

  return {
    dbUsers,
    clearLocalUsers,
    getDbUserById,
    previewUser,
    setPreviewUser,
    loading,
    error,
    getDbUsers,
    getRandomUsers,
    loadFromLocalStorage,
    randomUsers,
    setFakeRandomUsers,
    updateUserInDB,
    updateLocalUsers,
    saveUserToDB,
    deleteUserFromDB,
  };
};

export default useUser;
