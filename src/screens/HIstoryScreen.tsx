// import { useState, useEffect } from 'react';
// import { Button, Text, SafeAreaView, ScrollView, StyleSheet, Image, View, Platform } from 'react-native';
// import * as MediaLibrary from 'expo-media-library';

// export default function HistoryScreen() {
//   const [albums, setAlbums] = useState(null);
//   const [permissionResponse, requestPermission] = MediaLibrary.usePermissions();

//   async function getAlbums() {
//     if (permissionResponse.status !== 'granted') {
//       await requestPermission();
//     }
//     const fetchedAlbums = await MediaLibrary.getAlbumsAsync({
//       includeSmartAlbums: true,
//     });
//     setAlbums(fetchedAlbums);
//   }

//   return (
//     <SafeAreaView style={styles.container}>
//       <Button onPress={getAlbums} title="Get albums" />
//       <ScrollView>
//         {albums && albums.map((album) => <AlbumEntry album={album} />)}
//       </ScrollView>
//     </SafeAreaView>
//   );
// }

// function AlbumEntry({ album }) {
//   const [assets, setAssets] = useState([]);

//   useEffect(() => {
//     async function getAlbumAssets() {
//       const albumAssets = await MediaLibrary.getAssetsAsync({ album });
//       setAssets(albumAssets.assets);
//     }
//     getAlbumAssets();
//   }, [album]);

//   return (
//     <View key={album.id} style={styles.albumContainer}>
//       <Text>
//         {album.title} - {album.assetCount ?? 'no'} assets
//       </Text>
//       <View style={styles.albumAssetsContainer}>
//         {assets && assets.map((asset) => (
//           <Image key={asset.uri} source={{ uri: asset.uri }} width={50} height={50} />
//         ))}
//       </View>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     gap: 8,
//     justifyContent: 'center',
//     ...Platform.select({
//       android: {
//         paddingTop: 40
//       }
//     }),
//   },
//   albumContainer: {
//     paddingHorizontal: 20,
//     marginBottom: 12,
//     gap: 4,
//   },
//   albumAssetsContainer: {
//     flexDirection: 'row',
//     flexWrap: 'wrap',
//   },
// });

import {useNavigation} from '@react-navigation/native';
import {SearchNormal} from 'iconsax-react-native';
import React from 'react';
import CardComponent from '../components/CardComponent';
import Container from '../components/Container';
import InputComponent from '../components/InputComponent';
import SectionComponent from '../components/SectionComponent';
import SpaceComponent from '../components/SpaceComponent';
import {colors} from '../constants/colors';
import {StatusBar} from 'react-native';

interface HistoryScreenProps {
  refTabBar: any;
}

const HistoryScreen = (props: HistoryScreenProps) => {
  const navigation = useNavigation();
  const {refTabBar} = props;
  React.useEffect(() => {
    const unsubscribe = navigation.addListener('focus', e => {
      StatusBar.setBackgroundColor('transparent');
      if (refTabBar) {
        refTabBar.current.setVisible(true);
      }
      // ...
    });

    return unsubscribe;
  }, [navigation]);
  return (
    <Container isScroll={false}>
      <SectionComponent>
        <InputComponent
          icon={<SearchNormal size={24} color={colors.decs} />}
          placeholder="Search plant"
          onChange={() => {}}
          styles={{
            paddingVertical: 8,
          }}
        />
      </SectionComponent>

      <Container
        isScroll={true}
        styles={{
          paddingTop: 0,
          paddingHorizontal: 0,
        }}>
        <SectionComponent marginBottom={28}>
          <CardComponent
            type="large"
            title="Monstera"
            desc="This is a description"
            time="2 hours ago"
          />
        </SectionComponent>
        <SectionComponent marginBottom={28}>
          <CardComponent
            type="large"
            title="Monstera"
            desc="This is a description"
            time="2 hours ago"
          />
        </SectionComponent>
        <SectionComponent marginBottom={28}>
          <CardComponent
            type="large"
            title="Monstera"
            desc="This is a description"
            time="2 hours ago"
          />
        </SectionComponent>
        <SectionComponent marginBottom={28}>
          <CardComponent
            type="large"
            title="Monstera"
            desc="This is a description"
            time="2 hours ago"
          />
        </SectionComponent>
        <SectionComponent marginBottom={28}>
          <CardComponent
            type="large"
            title="Monstera"
            desc="This is a description"
            time="2 hours ago"
          />
        </SectionComponent>
        <SectionComponent marginBottom={28}>
          <CardComponent
            type="large"
            title="Monstera"
            desc="This is a description"
            time="2 hours ago"
          />
        </SectionComponent>
        <SpaceComponent height={64} />
      </Container>
    </Container>
  );
};

export default HistoryScreen;
