import React, { useEffect, useState } from 'react';
import './App.css';
import { addNotification, getNotifications, markAsRead } from './actions/notifications';
import { Notification } from './@types/notification';
import Button from './component/button';
import NotificationList from './component/notification-list';

function App() {
  const [notifications, setNotifications] = useState<Notification[]>([]);

  const handleAddNotification = async (message: string) => {
    await addNotification(message);
    fetchNotifications();
  };

  const fetchNotifications = async () => {
    const fetchedNotifications = await getNotifications();
    setNotifications(fetchedNotifications);
  };

  const handleMarkAsRead = async (id: string) => {
    await markAsRead(id);
    fetchNotifications();
  };

  useEffect(() => {
    fetchNotifications();
  }, []);

  return (
    <div className="App">
      <h1>Firebase Notifications</h1>
      <div className='buttons-container'>
        <Button onClick={() => handleAddNotification('Notification 1')}>
          Notify 1
        </Button>
        <Button onClick={() => handleAddNotification('Notification 2')}>
          Notify 2
        </Button>
        <Button onClick={() => handleAddNotification('Notification 3')}>
          Notify 3
        </Button>
      </div>
      <NotificationList notifications={notifications} handleMarkAsRead={handleMarkAsRead} />
    </div>
  );
}

export default App;
