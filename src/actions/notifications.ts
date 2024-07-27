import { collection, addDoc, getDocs, updateDoc, doc } from 'firebase/firestore';
import { db } from '../config';
import { Notification } from '../@types/notification';

const notificationsCollection = collection(db, 'notifications');

export const addNotification = async (message: string) => {
    try {
        const newNotification: Notification = { message, read: false };
        await addDoc(notificationsCollection, newNotification);
    } catch (error) {
        console.error("Error in add notification:", error)
    }
};

export const getNotifications = async (): Promise<Notification[]> => {
    try {
        const snapshot = await getDocs(notificationsCollection);
        const notifications: Notification[] = [];
        snapshot.forEach(doc => {
            notifications.push({ ...doc.data(), id: doc.id } as Notification);
        });
        return notifications;
    } catch (error) {
        console.error("Error in fetching notifications", error)
        return []
    }
};

export const markAsRead = async (id: string) => {
    try {
        const notificationDoc = doc(db, 'notifications', id);
        await updateDoc(notificationDoc, { read: true });
    } catch (error) {
        console.error("Error in mark as read:", error)
    }
};
