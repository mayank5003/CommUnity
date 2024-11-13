import React from "react";

const About = () => {
  return (
    <div
      className="font-sans min-h-screen bg-cover bg-center bg-no-repeat p-6 flex flex-col items-center"
      style={{ backgroundColor: "#111827", backgroundImage: "url('/path-to-background-image.jpg')" }} // Replace with your actual background image path
    >
      {/* About Us Section */}
      <div className="text-center mb-12 max-w-3xl">
        <h1 className="text-3xl font-bold text-gray-100 mb-4">About Us</h1>
        <p className="text-lg text-gray-300 leading-relaxed">
          Building a stronger community, one connection at a time where seamless
          interaction meets efficient society management.
          <br />
          Our website is dedicated to providing seamless interaction and
          management within our community. We strive to offer the best services
          to ensure a cohesive and supportive environment for all members.
        </p>
      </div>

      {/* Why Community? Section in a Pop-up Styled Box */}
      <div className="bg-blue-100 bg-opacity-95 p-6 rounded-lg shadow-2xl border border-blue-200 max-w-3xl text-center transform transition-transform hover:scale-105">
        <h2 className="text-2xl font-semibold text-blue-900 mb-4">WHY COMMUNITY?</h2>
        <p className="text-gray-800 leading-relaxed">
          CommUnity makes society management simple and efficient with seamless account
          management, instant access to a digital noticeboard, and easy online maintenance
          payments. Residents can raise and track complaints, join clubs, and share personal
          recommendations. Admins can post commercial updates and conduct polls. Stay informed
          with emergency contact, security personnel details, and real-time WhatsApp notifications,
          ensuring a connected and engaged community experience.
        </p>
      </div>

      {/* 3D Rotating Image */}
      <div className="mt-12 flex justify-center">
        <div className="w-[250px] h-[250px] animate-rotate3d bg-gradient-to-r from-blue-500 to-blue-700 rounded-full shadow-xl flex items-center justify-center">
          <img src="https://static.vecteezy.com/system/resources/previews/006/880/235/non_2x/hands-with-smartphones-people-communicate-in-social-networks-and-messengers-chat-text-online-use-video-calls-mobile-applications-and-internet-technology-vector.jpg" alt="3D rotating graphic" className="w-full h-full rounded-full object-cover" />
        </div>
      </div>
    </div>
  );
};

export default About;
