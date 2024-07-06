import React, { useState } from "react";
import { Toast } from "react-bootstrap";
import { OrderStatus } from "./OrderStatus";

const Home = () => {
  const [showToast, setShowToast] = useState(true);

  const toggleShowToast = () => setShowToast(!showToast);

  return (
    <div className="mx-4 mt-3">
      <Toast
        show={showToast}
        onClose={toggleShowToast}
        style={{
          position: "fixed",
          top: 20,
          right: 20,
          zIndex: 1000,
        }}
      >
        <Toast.Header closeButton>
          <strong className="mr-auto">Notice</strong>
        </Toast.Header>
        <Toast.Body>
          Order data may take 1-2 minutes to load as it's hosted on Render's
          free tier.
        </Toast.Body>
      </Toast>
      <h1>Orders</h1>
      <OrderStatus />
    </div>
  );
};

export default Home;
