import httpRequests from "./httpRequest";
import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';
import storage from '@react-native-firebase/storage';

export const savePlantImage = async (image: string) => {
    const storageRef = storage().ref(
        `photos/${new Date().getTime()}.jpg`,
      );
    const task = storageRef.putFile(image);
    task.on('state_changed', snapshot => {
        console.log(
        `${snapshot.bytesTransferred} transferred out of ${snapshot.totalBytes}`,
        );
    });
    await task;
    return await storageRef.getDownloadURL();
}



export const addPlantHistory = async (plant: PlantDetectType) => {
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

export const removePlantHistory = async (plant: PlantDetectType) => {
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
            });
        }
    } catch (error) {
        throw error;
    }

}

export const getPlantHistory = async () => {
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
        return null;
    } catch (error) {
        throw error;
    }
}

export const realTimePlantHistory = async (callback: (data: PlantDetectType[]) => void) => {
    const user = auth().currentUser;
    if (!user) {
        throw new Error('User not found');
    }
    const uid = user.uid;
    try {
        const plantRef = firestore().collection('history').doc(uid)
        plantRef.onSnapshot((doc) => {
            if (doc?.exists) {
                const history: PlantDetectType[] = doc.data()?.history;
                callback(history);
            }
        });
    } catch (error) {
        throw error;
    }
}
