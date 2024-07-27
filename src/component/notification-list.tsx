import React from 'react'
import { Notification } from '../@types/notification'
import "./style.css"

type Props = {
    notifications: Notification[] | [];
    handleMarkAsRead: (id: string) => void
}

const NotificationList = ({ notifications, handleMarkAsRead }: Props) => {
    return (
        <ul>
            {
                notifications &&
                Array.isArray(notifications) &&
                notifications.length > 0 &&
                notifications.map(notification => (
                    <li key={notification.id}>
                        {notification.message}
                        {!notification.read && (
                            <button
                                className='mark-read-btn'
                                onClick={() => handleMarkAsRead(notification.id as string)}
                            >
                                Mark as read
                            </button>
                        )}
                    </li>
                ))
            }
        </ul>
    )
}

export default NotificationList