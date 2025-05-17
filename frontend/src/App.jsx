import React, { useState } from 'react';
import FeedbackForm from './components/FeedbackForm';
import FeedbackList from './components/FeedbackList';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';

const App = () => {
  const [refresh, setRefresh] = useState(false);

  return (
    <div className="App">
      <h1>Anonymous Feedback</h1>
      <FeedbackForm onFeedbackSubmitted={() => setRefresh(!refresh)} />
      <FeedbackList refresh={refresh} />
      <ToastContainer />
    </div>
  );
};

export default App;
