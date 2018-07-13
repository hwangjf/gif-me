import React from 'react';
import Adapter from '../Adapter';
import { withRouter } from 'react-router';

const LogoutButton = ({ history }) => {
  
  return (
    <button
      className="logout-button"
      onClick={() => {
        Adapter.logout();
        history.push("/");
      }}
    >
      Logout
      </button>
  )
}

export default withRouter(LogoutButton);