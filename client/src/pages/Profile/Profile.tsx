import { useCallback, useEffect, useRef, useState } from "react";
import { getCurrentUserInfo } from "../../api/login_axios";
import { UserProfile } from "../../types/user";

const Profile = ({ userProfile }: UserProfile) => {
  const isDataFetched = useRef(false);

  const getUserInfo = useCallback(async () => {
    const userProfile = await getCurrentUserInfo();

    if (userProfile === null) return;

    isDataFetched.current = true;
  }, []);

  useEffect(() => {
    if (isDataFetched.current) return;
    getUserInfo();
  }, []);

  return (
    <>
      <h1>Profile</h1>
      <p>
        {userProfile?.username} / {userProfile?.role}
      </p>
    </>
  );
};

export default Profile;
