import React from 'react';
import './FeedbackTable.css';

function FeedbackTable({ feedbacks, markFeedback, deleteFeedback }) {
    return (
        <div className="feedback-table-container">
            <table className="feedback-table">
                <thead>
                    <tr>
                        <th>Feedback</th>
                        <th>Category</th>
                        <th>Rating</th>
                        <th>Date</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {feedbacks.map(feedback => (
                        <tr key={feedback._id}>
                            <td style={{ width: "450px" }}>{feedback.message}</td>
                            <td>{feedback.feedbackCategory}</td>
                            <td>{feedback.emoji}</td>
                            <td style={{ width: "120px" }}>{new Date(feedback.createdAt).toLocaleString()}</td>
                            <td>
                                <button onClick={() => markFeedback(feedback._id)}>
                                    {feedback.marked ? 'Unmark' : 'Mark'}
                                </button>
                                <button onClick={() => deleteFeedback(feedback._id)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default FeedbackTable;
