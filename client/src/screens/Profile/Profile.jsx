import React, { useEffect } from 'react';
import Profile from '../../components/Profile/Profile.jsx';

function ScreensProfile(props) {
  useEffect(() => {
    document.title = 'Profile';
  }, []);

  return (
    <section className="min-h-screen mt-12 mx-4 lg:mx-8 py-5">
      <div className="w-1/2 bg-white mx-auto shadow-lg rounded-lg px-4 py-6">
        {/*  Title */}
        <h2 className="font-bold text-lg capitalize text-dark px-2">Profile</h2>

        {/*  Profile Details  */}
        <Profile />

        {/*  List Orders  */}
        <div className="px-2 py-4 ">
          <h1 className="text-success capitalize font-bold text-sm">
            your orders
          </h1>

          {/* 1 */}
          <div className="mt-4 shadow-md rounded-md h-14 bg-gray-100">
            order 1
          </div>
        </div>
      </div>
    </section>
  );
}

export default ScreensProfile;
