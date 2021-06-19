import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../components/UI/Button';

const ScreensNotFound = () => {
  const navigate = useNavigate();

  useEffect(() => {
    document.title = 'Page Not Found';
  }, []);

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="h-[200px] w-[400px]">
        <h1 className="text-dark text-6xl font-bold">404</h1>
        <p className="text-dark-light text-2xl ">Page not found</p>
        <div className="mt-[15px] w-full flex gap-2">
          <Button
            className="bg-info hover:bg-info-dark text-white"
            onClick={(e) => {
              navigate(-1);
              e.preventDefault();
            }}
          >
            Go Back
          </Button>
          <Button
            className="bg-white hover:bg-info-light text-info"
            onClick={(e) => {
              navigate('/');
              e.preventDefault();
            }}
          >
            Go to Home Page
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ScreensNotFound;
