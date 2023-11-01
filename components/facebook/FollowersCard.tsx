import React, { useState } from 'react';
import FacebookLogin from 'react-facebook-login';

const App = () => {
  const [user, setUser] = useState(null);

  const responseFacebook = (response) => {
    if (response.status !== 'unknown') {
      setUser(response);
    }
  };

  return (
    <div>
      {user ? (
        <div>
          <p>Welcome, {user.name}!</p>
          <p>Email: {user.email}</p>
          <p>Facebook ID: {user.id}</p>
          <img src={user.picture.data.url} alt="Profile" />
        </div>
      ) : (
        <FacebookLogin
          appId="YOUR_APP_ID"
          autoLoad={false}
          fields="name,email,picture"
          callback={responseFacebook}
        />
      )}
    </div>
  );
};

export default App;
