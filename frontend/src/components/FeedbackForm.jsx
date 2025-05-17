import React, { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';

const FeedbackForm = ({ onFeedbackSubmitted }) => {
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!message.trim()) {
      toast.error('Message is required');
      return;
    }

    try {
      await axios.post('http://localhost:5000/api/feedback', { name, message });
      toast.success('Feedback submitted!');
      setName('');
      setMessage('');
      onFeedbackSubmitted();
    } catch (err) {
      toast.error('Something went wrong!');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="feedback-form">
      <input
        type="text"
        placeholder="Your name (optional)"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <textarea
        placeholder="Your feedback..."
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        maxLength={200}
        required
      />

      <div style={{ textAlign: 'right', fontSize: '0.8rem' }}>
        {message.length}/200 characters
      </div>

      <button type="submit">Submit</button>
    </form>
  );
};

export default FeedbackForm;
