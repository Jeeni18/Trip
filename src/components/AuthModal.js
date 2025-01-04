// import React, { useState } from 'react';
// import './AuthModal.css';

// const AuthModal = ({ closeModal, setIsSignedUp }) => {
//   const [isSignUp, setIsSignUp] = useState(false);

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     // Dummy form submission for demo
//     setIsSignedUp(true);
//     closeModal();
//   };

//   const handleClose = () => {
//     // Redirecting to the home page after closing the modal
//     window.location.href = "/"; // You can use the appropriate route if you are using React Router
//   };

//   return (
//     <div className="auth-modal">
//       <div className="auth-box">
//         <button className="close-btn" onClick={handleClose}>×</button>
//         <h2>{isSignUp ? 'Sign Up' : 'Login'}</h2>
        
//         <form onSubmit={handleSubmit}>
//           {isSignUp && (
//             <>
//               <input type="text" placeholder="First Name" required />
//               <input type="text" placeholder="Last Name" required />
//             </>
//           )}
//           <input type="email" placeholder="Email" required />
//           <input type="password" placeholder="Password" required />
//           {isSignUp && <input type="password" placeholder="Confirm Password" required />}
          
//           <button type="submit">{isSignUp ? 'Sign Up' : 'Login'}</button>
//         </form>

//         <p onClick={() => setIsSignUp(!isSignUp)}>
//           {isSignUp ? 'Already have an account? Login' : 'Don\'t have an account? Sign Up'}
//         </p>
//       </div>
//     </div>
//   );
// };

// export default AuthModal;

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './AuthModal.css';

const AuthModal = ({ closeModal, setIsSignedUp }) => {
  const [isSignUp, setIsSignUp] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    setIsSignedUp(true);
    closeModal();
    navigate("/userinfo");
  };

  return (
    <div className="auth-modal">
      <div className="auth-box">
        <button className="close-btn" onClick={closeModal}>×</button>
        <h2>{isSignUp ? 'Sign Up' : 'Login'}</h2>
        
        <form onSubmit={handleSubmit}>
          {isSignUp && (
            <>
              <input type="text" placeholder="First Name" required />
              <input type="text" placeholder="Last Name" required />
            </>
          )}
          <input type="email" placeholder="Email" required />
          <input type="password" placeholder="Password" required />
          {isSignUp && <input type="password" placeholder="Confirm Password" required />}
          
          <button type="submit">{isSignUp ? 'Sign Up' : 'Login'}</button>
        </form>

        <p onClick={() => setIsSignUp(!isSignUp)}>
          {isSignUp ? 'Already have an account? Login' : "Don't have an account? Sign Up"}
        </p>
      </div>
    </div>
  );
};

export default AuthModal;
