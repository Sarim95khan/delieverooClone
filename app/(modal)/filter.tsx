import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  ListRenderItem,
  Button,
} from 'react-native';
import React, { useState } from 'react';
import Colors from '@/constants/Colors';
import categories from '@/assets/data/filter.json';
import { FC } from 'react';
import { Ionicons } from '@expo/vector-icons';
import BouncyCheckbox from 'react-native-bouncy-checkbox';

interface Categories {
  name: string;
  count: number;
  checked?: boolean;
}

const ListHeader = () => (
  <>
    <View style={styles.listHeaderContainer}>
      <TouchableOpacity style={styles.listHeader}>
        <Ionicons name="arrow-down-outline" size={20} color={Colors.medium} />
        <Text style={{ flex: 1 }}>Sort</Text>
        <Ionicons name="chevron-forward" size={20} color={Colors.primary} />
      </TouchableOpacity>

      <TouchableOpacity style={styles.listHeader}>
        <Ionicons name="fast-food-outline" size={20} color={Colors.medium} />
        <Text style={{ flex: 1 }}>Hygiene Rating</Text>
        <Ionicons name="chevron-forward" size={20} color={Colors.primary} />
      </TouchableOpacity>

      <TouchableOpacity style={styles.listHeader}>
        <Ionicons name="pricetag-outline" size={20} color={Colors.medium} />
        <Text style={{ flex: 1 }}>Offers</Text>
        <Ionicons name="chevron-forward" size={20} color={Colors.primary} />
      </TouchableOpacity>

      <TouchableOpacity style={styles.listHeader}>
        <Ionicons name="nutrition-outline" size={20} color={Colors.medium} />
        <Text style={{ flex: 1 }}>Offers Dietery</Text>
        <Ionicons name="chevron-forward" size={20} color={Colors.primary} />
      </TouchableOpacity>
    </View>
    <Text style={styles.header}>Categories</Text>
  </>
);

const Filter = () => {
  const [items, setItems] = useState<Categories[]>(categories);

  const resetAll = () => {
    const updatedItem = items.map((item) => {
      item.checked = false;

      return item;
    });
    setItems(updatedItem);
  };

  const renderItem: ListRenderItem<Categories> = ({ item, index }) => (
    <View style={styles.row}>
      <Text style={{ flex: 1 }}>
        {item.name} ({item.count})
      </Text>
      <BouncyCheckbox
        fillColor={Colors.primary}
        iconStyle={{ borderColor: Colors.primary, borderRadius: 4 }}
        innerIconStyle={{ borderRadius: 4, borderWidth: 2 }}
        disableBuiltInState
        onPress={() => {
          const isChecked = items[index].checked;

          const updateItems = items.map((item) => {
            if (item.name === items[index].name) {
              item.checked = !isChecked;
            }
            return item;
          });
          setItems(updateItems);
        }}
        isChecked={items[index].checked}
      />
    </View>
  );
  return (
    <View style={styles.container}>
      <Button title="Reset All" onPress={() => resetAll()} />
      <FlatList
        data={items}
        renderItem={renderItem}
        ListHeaderComponent={() => <ListHeader />}
      />
      <View style={{ height: 68 }} />
      <View style={styles.footer}>
        <TouchableOpacity style={styles.footerButton}>
          <Text style={styles.footerText}>Done</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Filter;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.lightGrey,
    padding: 24,
  },
  footer: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    height: 100,
    backgroundColor: '#fff',
    padding: 10,
    elevation: 20,
    shadowColor: 'red',
    shadowOpacity: 0.3,
    shadowRadius: 10,
  },
  footerButton: {
    backgroundColor: Colors.primary,
    padding: 16,
    alignItems: 'center',
    borderRadius: 8,
  },
  footerText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  header: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  listHeaderContainer: {
    backgroundColor: '#fff',
    paddingHorizontal: 8,
    marginBottom: 16,
  },
  listHeader: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    paddingVertical: 10,
    alignItems: 'center',
    borderColor: Colors.grey,
    borderBottomWidth: 1,
    gap: 8,
  },
  listItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  row: {
    flexDirection: 'row',
    padding: 8,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
});
