import React from "react";

const Profile = () => {
  return (
    <div className="flex justify-center items-center min-h-screen w-full h-full bg-gray-100 p-4">
      <div className="bg-white shadow-xl rounded-lg w-full max-w-md lg:max-w-xl xl:max-w-2xl p-6">
        <div className="flex justify-center">
          <img
            className="w-32 h-32 rounded-full border-4 border-white -mt-16"
            src="https://www.codehim.com/wp-content/uploads/2023/11/User-Profile-Page-Template-in-HTML-CSS.png"
            alt="Profile Avatar"
          />
        </div>
        <div className="text-center mt-4">
          <h2 className="text-3xl font-bold text-gray-800">John Doe</h2>
          <p className="text-gray-600">Software Developer</p>
        </div>
        <div className="text-center mt-4 pb-4 border-b">
          <p className="text-gray-700">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
            nisl eros, pulvinar facilisis justo mollis, auctor consequat urna.
          </p>
        </div>
        <div className="flex justify-around text-center mt-6">
          <div>
            <p className="text-gray-700 font-bold">150</p>
            <p className="text-gray-600">Posts</p>
          </div>
          <div>
            <p className="text-gray-700 font-bold">200</p>
            <p className="text-gray-600">Followers</p>
          </div>
          <div>
            <p className="text-gray-700 font-bold">300</p>
            <p className="text-gray-600">Following</p>
          </div>
        </div>
        <div className="flex justify-center mt-6">
          <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition">
            Follow
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
