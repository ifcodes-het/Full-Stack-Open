import React from "react";

const Notification = ({ message, isError }) => {
  if (!message) {
    return null;
  }

  if (message && isError) {
    return <p className="error">{message}</p>;
  }

  return <p className="notification">{message}</p>;
};

export default Notification;
