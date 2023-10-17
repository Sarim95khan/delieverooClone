import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import React, { forwardRef, useCallback, useMemo } from 'react';
import {
  BottomSheetBackdrop,
  BottomSheetModal,
  useBottomSheetModal,
} from '@gorhom/bottom-sheet';
import Colors from '@/constants/Colors';
import { Link } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

export type Ref = BottomSheetModal;

const BottomSheet = forwardRef<Ref>((props, ref) => {
  const snapPoints = useMemo(() => ['50%'], []);
  const renderBackDrop = useCallback(
    (props: any) => (
      <BottomSheetBackdrop
        appearsOnIndex={0}
        disappearsOnIndex={-1}
        {...props}
      />
    ),
    []
  );
  const { dismiss } = useBottomSheetModal();
  return (
    <BottomSheetModal
      handleIndicatorStyle={{ display: 'none' }}
      backgroundStyle={{ borderRadius: 0, backgroundColor: Colors.lightGrey }}
      overDragResistanceFactor={0}
      ref={ref}
      snapPoints={snapPoints}
      backdropComponent={renderBackDrop}
    >
      <View style={styles.contianer}>
        <View style={styles.toggle}>
          <TouchableOpacity style={styles.activeToggle}>
            <Text style={styles.activeText}>Delivery</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.inactiveToggle}>
            <Text style={styles.inactiveText}>Pickup</Text>
          </TouchableOpacity>
        </View>
        <Text style={styles.subHeader}>Your Location</Text>
        <Link href={'/'} asChild>
          <TouchableOpacity>
            <View style={styles.item}>
              <Ionicons
                name="location-outline"
                size={20}
                color={Colors.medium}
              />
              <Text style={{ flex: 1 }}>Current Location</Text>
              <Ionicons
                name="chevron-forward"
                size={20}
                color={Colors.primary}
              />
            </View>
            <View></View>
          </TouchableOpacity>
        </Link>
        <Text style={styles.subHeader}>Arrival Time</Text>
        <TouchableOpacity>
          <View style={styles.item}>
            <Ionicons
              name="stopwatch-outline"
              size={20}
              color={Colors.medium}
            />
            <Text style={{ flex: 1 }}>Now</Text>
            <Ionicons name="chevron-forward" size={20} color={Colors.primary} />
          </View>
          <View></View>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.dismissButton}
          onPress={() => dismiss()}
        >
          <Text style={styles.button}>Confirm</Text>
        </TouchableOpacity>
      </View>
    </BottomSheetModal>
  );
});

export default BottomSheet;

const styles = StyleSheet.create({
  contianer: { flex: 1 },
  dismissButton: {
    backgroundColor: Colors.primary,
    padding: 16,
    alignItems: 'center',
    margin: 16,
    borderRadius: 8,
  },
  button: {
    color: 'white',
  },
  toggle: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 20,
    marginBottom: 12,
  },
  activeToggle: {
    backgroundColor: Colors.primary,
    paddingHorizontal: 30,
    padding: 10,
    borderRadius: 20,
  },
  inactiveToggle: {
    paddingHorizontal: 30,
    padding: 10,
    borderRadius: 20,
  },
  activeText: {
    color: '#fff',
    fontWeight: '500',
  },
  inactiveText: { color: Colors.primary, fontWeight: '500' },
  subHeader: {
    margin: 16,
    fontSize: 16,
    fontWeight: '500',
  },
  item: {
    flexDirection: 'row',
    gap: 8,
    // margin: 16,
    alignItems: 'center',
    backgroundColor: '#fff',
    marginHorizontal: 16,
    padding: 10,
    borderColor: Colors.grey,
    borderWidth: 2,
  },
});
