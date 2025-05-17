import React, { useEffect, useState } from 'react';
import axios from 'axios';
import FeedbackItem from './FeedbackItem';

const FeedbackList = ({ refresh }) => {
  const [feedbacks, setFeedbacks] = useState([]);

  useEffect(() => {
    const fetchFeedback = async () => {
      try {
        const res = await axios.get('http://localhost:5000/api/feedback');
        setFeedbacks(res.data);
      } catch (err) {
        console.error('Error fetching feedback:', err);
      }
    };
    fetchFeedback();
  }, [refresh]);

  return (
    <div className="feedback-list">
      {feedbacks.length === 0 ? (
        <p>No feedback submitted yet.</p>
      ) : (
        feedbacks.map((fb) => (
          <FeedbackItem key={fb._id} feedback={fb} />
        ))
      )}
    </div>
  );
};

export default FeedbackList;
