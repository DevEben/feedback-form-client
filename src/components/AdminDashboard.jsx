import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './AdminDashboard.css';
import Sidebar from './Sidebar';
import FeedbackTable from './FeedbackTable';

function AdminDashboard() {
    const [view, setView] = useState('dashboard');
    const [feedbacks, setFeedbacks] = useState([]);

    useEffect(() => {
        fetchFeedbacks();
    }, []);

    const fetchFeedbacks = async () => {
        try {
            const response = await axios.get('https://insightbuddy.vercel.app/api/feedback');
            setFeedbacks(response.data.data);
        } catch (error) {
            console.error('Error fetching feedback', error);
        }
    };

    const markFeedback = (id) => {
        setFeedbacks(feedbacks.map(feedback =>
            feedback._id === id ? { ...feedback, marked: !feedback.marked } : feedback
        ));
    };

    const deleteFeedback = async (id) => {
        const confirmDelete = window.confirm("Are you sure you want to delete this feedback?");
        
        if (confirmDelete) {
            try {
                await axios.delete(`https://insightbuddy.vercel.app/api/feedback/${id}`);
                fetchFeedbacks(); // Refresh the feedback list
            } catch (error) {
                console.error('Error deleting feedback', error);
            }
        }
    };

    const displayedFeedbacks = view === 'dashboard' 
        ? feedbacks 
        : feedbacks.filter(feedback => feedback.marked);

    return (
        <div className="App">
            <Sidebar setView={setView} />
            <main className="content">
                <h1>{view === 'dashboard' ? 'Dashboard' : 'Marked Feedback'}</h1>
                <FeedbackTable 
                    feedbacks={displayedFeedbacks} 
                    markFeedback={markFeedback} 
                    deleteFeedback={deleteFeedback} 
                />
            </main>
        </div>
    );
}

export default AdminDashboard;
