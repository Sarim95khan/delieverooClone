import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  TextInput,
} from 'react-native';
import React, { useRef } from 'react';
import { BottomSheetModal } from '@gorhom/bottom-sheet';

import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import Colors from '@/constants/Colors';
import { Link } from 'expo-router';
import BottomSheet from './BottomSheet';
// import { Image } from 'expo-image';
// import { TouchableOpacity } from 'react-native-gesture-handler';

const SearchBar = () => (
  <View style={styles.searchContainer}>
    <View style={styles.searchSection}>
      <View style={styles.searchField}>
        <Ionicons
          style={styles.searchIcon}
          name="ios-search"
          size={20}
          color={Colors.medium}
        />
        <TextInput
          style={styles.input}
          placeholder="Restaurant, Clubs, Hookers"
        />
      </View>
      <Link href={'/filter'} asChild>
        <TouchableOpacity>
          <Ionicons
            name="options-outline"
            size={20}
            color={Colors.primary}
            style={styles.menuIcons}
          />
        </TouchableOpacity>
      </Link>
    </View>
  </View>
);
const CustomHeader = () => {
  const bottomSheetRef = useRef<BottomSheetModal>(null);
  const openModal = () => {
    bottomSheetRef.current?.present();
  };
  return (
    <SafeAreaView style={styles.safeArea}>
      <BottomSheet ref={bottomSheetRef} />

      <View style={styles.container}>
        <TouchableOpacity onPress={openModal}>
          <Image
            style={styles.bike}
            source={require('@/assets/images/bike.png')}
          />
        </TouchableOpacity>

        <TouchableOpacity onPress={openModal} style={styles.titleContainer}>
          <Text style={styles.title}>Delivery · Now</Text>
          <View style={styles.locationTab}>
            <Text style={styles.subTitle}>Karachi-Pakistan</Text>
            <Ionicons name="chevron-down" size={20} color={Colors.primary} />
          </View>
        </TouchableOpacity>

        <TouchableOpacity>
          <Ionicons
            style={styles.profileButton}
            name="person-outline"
            size={20}
            color={Colors.primary}
          />
        </TouchableOpacity>
      </View>
      <SearchBar />
    </SafeAreaView>
  );
};

export default CustomHeader;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#fff',
  },
  container: {
    backgroundColor: '#fff',
    height: 60,
    paddingHorizontal: 20,
    flexDirection: 'row',
    gap: 20,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  bike: {
    height: 30,
    width: 30,
  },
  titleContainer: {
    flex: 1,
  },
  title: {
    fontSize: 14,
    color: Colors.medium,
  },
  profileButton: {
    backgroundColor: Colors.lightGrey,
    padding: 10,
    borderRadius: 50,
  },
  locationTab: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  subTitle: {
    fontSize: 18,
    fontWeight: '500',
  },
  searchContainer: {
    height: 60,
    backgroundColor: '#fff',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  searchSection: {
    flexDirection: 'row',
    gap: 10,
    alignItems: 'center',
  },
  searchField: {
    flexDirection: 'row',
    backgroundColor: Colors.lightGrey,
    borderRadius: 8,
    flex: 1,
    alignItems: 'center',
  },
  menuIcons: {
    padding: 10,
    borderRadius: 50,
  },
  input: {
    color: Colors.mediumDark,
    padding: 10,
  },
  searchIcon: {
    paddingLeft: 4,
  },
});
