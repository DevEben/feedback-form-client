import React, { useState } from 'react';
import axios from 'axios';
import './Feedback.css'; 

const FeedbackForm = () => {
    const [emoji, setEmoji] = useState(null);
    const [feedbackCategory, setFeedback] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        const feedbackData = { emoji, feedbackCategory, message };
        try {
            const res = await axios.post('https://insightbuddy.vercel.app/api/feedback', feedbackData);
            alert(res.data.message);
            setEmoji(null); 
            setFeedback(''); 
            setMessage(''); 
        } catch (error) {
            alert(error.response.data.message);
            console.error('Error submitting feedback: ', error.response.data.message);
        }
    };

    return (
        <>
            <section>
                <div className="feedbackForm">
                    <h2>How do you feel?</h2>
                    <div className="emoji">
                        {['😠', '🙁', '😐', '🙂', '😍'].map((emojiIcon, index) => (
                            <button
                                key={index}
                                className={emoji !== null && emoji === index ? 'selected' : ''}
                                onClick={() => setEmoji(index)}
                            >
                                {emojiIcon}
                            </button>
                        ))}
                    </div>
                    <form onSubmit={handleSubmit}>
                        <div>
                            <select
                                value={feedbackCategory}
                                onChange={(e) => setFeedback(e.target.value)}
                            >
                                <option value="" disabled>Please select your feedback category</option>
                                <option value="Feedback">Feedback</option>
                                <option value="Suggestion">Suggestion</option>
                                <option value="Complaint">Complaint</option>
                            </select>
                        </div>
                        <div>
                            <textarea
                                placeholder="Please leave your feedback below"
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                            />
                        </div>
                        <div>
                            <button type="submit">Submit</button>
                        </div>
                    </form>
                </div>
            </section>
        </>
    );
};

export default FeedbackForm;
