import React from 'react';
import {View, Text} from 'react-native';

// import {CameraView, useCameraPermissions} from 'expo-camera/next';
// import * as MediaLibrary from 'expo-media-library';
// import {useRef, useState} from 'react';
// import {Button, StyleSheet, Text, TouchableOpacity, View} from 'react-native';

// export default function CameraScreen() {
//   const [facing, setFacing] = useState('back');
//   const [permission, requestPermission] = useCameraPermissions();

//   const cameraRef = useRef(null);

//   if (!permission) {
//     return (
//       <View style={styles.container}>
//         <Text>Requesting camera permission...</Text>
//         <Button title="Request Permission" onPress={requestPermission} />
//       </View>
//     );
//   }

//   // if (!permission.granted) {
//   //   return (
//   //     <View style={styles.container}>
//   //       <Text>Camera permission is required to use the camera</Text>
//   //     </View>
//   //   );
//   // }

//   function toggleCameraFacing() {
//     setFacing(current => (current === 'back' ? 'front' : 'back'));
//   }

//   return (
//     <View style={styles.container}>
//       <CameraView ref={cameraRef} style={styles.camera} facing={facing}>
//         <View style={styles.buttonContainer}>
//           <TouchableOpacity style={styles.button} onPress={toggleCameraFacing}>
//             <Text style={styles.text}>Flip Camera</Text>
//           </TouchableOpacity>

//           <TouchableOpacity
//             style={styles.button}
//             onPress={async () => {
//               const pic = await cameraRef.current.takePictureAsync();
//               MediaLibrary.saveToLibraryAsync(pic.uri);
//               console.log(pic);
//             }}>
//             <Text style={styles.text}>Take Picture</Text>
//           </TouchableOpacity>
//         </View>
//       </CameraView>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//   },
//   camera: {
//     flex: 1,
//   },
//   buttonContainer: {
//     flex: 1,
//     flexDirection: 'row',
//     backgroundColor: 'transparent',
//     margin: 64,
//   },
//   button: {
//     flex: 1,
//     alignSelf: 'flex-end',
//     alignItems: 'center',
//   },
//   text: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     color: 'white',
//   },
// });

const CameraScreen = () => {
  return (
    <View>
      <Text>CameraScreen</Text>
    </View>
  );
};

export default CameraScreen;
