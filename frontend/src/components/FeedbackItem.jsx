import React from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';

const FeedbackItem = ({ feedback }) => {
  const handleDelete = async () => {
    if (window.confirm('Delete this feedback?')) {
      try {
        await axios.delete(`https://feedback-app-0eg4.onrender.com/api/feedback/${feedback._id}`);
        toast.success('Feedback deleted');
        window.location.reload(); 
      } catch (err) {
        toast.error('Failed to delete feedback');
      }
    }
  };

  return (
    <div className="feedback-item">
      <p><strong>{feedback.name || 'Anonymous'}</strong></p>
      <p>{feedback.message}</p>
      <small>{new Date(feedback.createdAt).toLocaleString()}</small>
      <br />
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
};

export default FeedbackItem;
