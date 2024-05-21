import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import storage from '@react-native-firebase/storage';
import { PlantHistoryType, PlantType } from '../types/plantType';
import { FeedbackType } from '../types/feedback';

export const savePlantImage = async (image_url: string) => {
    const storageRef = storage().ref(
        `photos/${new Date().getTime()}.jpg`,
      );
    const task = storageRef.putFile(image_url);
    task.on('state_changed', snapshot => {
        console.log(
        `${snapshot.bytesTransferred} transferred out of ${snapshot.totalBytes}`,
        );
    });
    await task;
    return await storageRef.getDownloadURL();
}


export const addPlantHistory = async (plant: PlantHistoryType) => {
    const user = auth().currentUser;
    if (!user) {
        throw new Error('User not found');
    }
    const uid = user.uid;
    try {
        const plantRef = firestore().collection('history').doc(uid);
        const plantSnapshot = await plantRef.get(); 
        if (plantSnapshot.exists) { 
            plantRef.update({
                history: firestore.FieldValue.arrayUnion(plant),
            }).then(() => {
                console.log('Plant history updated!');
            });
         } 
        else { 
            plantRef.set({
                history: [plant],
            }).then(() => {
                console.log('Plant history added!');
            });
         }


    } catch (error) {
        throw error;
    }
}

export const removePlantHistory = async (plant: PlantHistoryType) => {
    const user = auth().currentUser;
    if (!user) {
        throw new Error('User not found');
    }
    const uid = user.uid;
    try {
        const plantRef = firestore().collection('history').doc(uid);
        const plantSnapshot = await plantRef.get();
        if (plantSnapshot.exists) {
            plantRef.update({
                history: firestore.FieldValue.arrayRemove(plant),
            }).then(() => {
                console.log('Plant history removed!');
                
                const storageRef = storage().refFromURL(plant.image_url);
                if (storageRef) {
                    storageRef.delete().then(() => {
                        console.log('Plant image deleted!');
                    }).catch((error) => {
                        console.log('Error deleting plant image: ', error);
                    });
                }

            });
        }

    } catch (error) {
        throw error;
    }

}

export const getPlantHistory = async (): Promise<PlantHistoryType[]> => {
    const user = auth().currentUser;
    if (!user) {
        throw new Error('User not found');
    }
    const uid = user.uid;
    try {
        const plantRef = firestore().collection('history').doc(uid);
        const plantSnapshot = await plantRef.get();
        if (plantSnapshot.exists) {
            const history = plantSnapshot.data()?.history;
        
            return history;
        }
        return [];
    } catch (error) {
        throw error;
    }
}

export const realTimePlantHistory = async (callback: (data: PlantHistoryType[]) => void) => {
    const user = auth().currentUser;
    if (!user) {
        throw new Error('User not found');
    }
    const uid = user.uid;
    try {
        const plantRef = firestore().collection('history').doc(uid)
        plantRef.onSnapshot((doc) => {
            if (doc?.exists) {
                const history: PlantHistoryType[] = doc.data()?.history;
                callback(history);
            }
        });
    } catch (error) {
        throw error;
    }
}

export const sendFeedback = async (feedback: FeedbackType) => {
    const user = auth().currentUser;
    if (!user) {
        throw new Error('User not found');
    }
    const uid = user.uid;
    console.log('Feedback:', feedback);
    try {
        const feedbackRef = firestore().collection('feedback').doc(uid);
        const feedbackSnapshot = await feedbackRef.get(); 
        if (feedbackSnapshot.exists) { 
            feedbackRef.update({
                history: firestore.FieldValue.arrayUnion(feedback),
            }).then(() => {
                console.log('feedback history updated!');
            });
         } 
        else { 
            feedbackRef.set({
                history: [feedback],
            }).then(() => {
                console.log('feedback history added!');
            });
         }


    } catch (error) {
        throw error;
    }
}