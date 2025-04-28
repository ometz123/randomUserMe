import { FC, lazy, memo } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import ROUTES from '../routes/routes.enum';
import { Suspense } from 'react';

const LzyHome = lazy(() => import('../../pages/Home/Home'));
const LzyNewUsers = lazy(() => import('../../pages/New-Users/New-Users'));
const LzySavedUsers = lazy(() => import('../../pages/Saved-Users/Saved-Users'));
const LzyUserProfile = lazy(
  () => import('../../pages/User-Profile/User-Profile')
);

const AppRouter: FC = () => {
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route index path={ROUTES.HOME} element={<LzyHome />} />
          <Route path={ROUTES.NEW_USERS} element={<LzyNewUsers />} />
          <Route path={ROUTES.SAVED_USERS} element={<LzySavedUsers />} />
          <Route path={ROUTES.USER_PROFILE} element={<LzyUserProfile />} />
          {/* fallback to home for any unknown URL */}
          <Route path="*" element={<Navigate to={ROUTES.HOME} replace />} />
        </Routes>
      </Suspense>
    </>
  );
};

export default memo(AppRouter);
