import React from 'react';
import {
  View, Text, Image, TextInput,
  StyleSheet, FlatList, TouchableOpacity
} from 'react-native';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';

const products = [
  { id: '1', name: 'Double A Copy Paper A4 70Gsm', price: 1055, image: require('./assets/a4.png') },
  { id: '2', name: 'Eagle Archfile /ECO Legal 2” Black', price: 139, image: require('./assets/archfile.png') },
  { id: '3', name: 'Kodak Photo Paper 4R 230gsm 20s', price: 97, image: require('./assets/kodak.png') },
  { id: '4', name: 'Sunworld Comb Binding Machine', price: 4150, image: require('./assets/binder.png') },
  { id: '5', name: 'External Hard Drive', price: 2500, image: require('./assets/harddrive.png') },
  { id: '6', name: 'Wi-Fi Router', price: 1850, image: require('./assets/router.png') }
];

const Product = () => {
  const renderProduct = ({ item }) => (
    <View style={styles.card}>
      <Image source={item.image} style={styles.image} />
      <Text style={styles.name}>{item.name}</Text>
      <Text style={styles.price}>₱ {item.price.toLocaleString()}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Image source={require('./assets/logo.png')} style={styles.logo} />
      </View>

      {/* Search and Cart */}
      <View style={styles.searchRow}>
        <TextInput style={styles.searchInput} placeholder="Search products..." />
        <Ionicons name="cart-outline" size={28} color="#000" />
      </View>

      {/* Product Grid */}
      <FlatList
        data={products}
        renderItem={renderProduct}
        keyExtractor={(item) => item.id}
        numColumns={2}
        contentContainerStyle={styles.list}
      />

      {/* Bottom Navigation */}
      <View style={styles.bottomNav}>
        <TouchableOpacity>
          <Ionicons name="home" size={24} color="#fff" />
          <Text style={styles.navLabel}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Ionicons name="chatbubble-ellipses" size={24} color="#fff" />
          <Text style={styles.navLabel}>Chat</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Ionicons name="cart" size={24} color="#fff" />
          <Text style={styles.navLabel}>Cart</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Ionicons name="person" size={24} color="#fff" />
          <Text style={styles.navLabel}>Account</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Product;

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f4f4f4' },
  header: {
    backgroundColor: '#2ba310',
    paddingTop: 40,
    paddingBottom: 10,
    alignItems: 'center',
  },
  logo: {
    width: 160,
    height: 60,
    resizeMode: 'contain',
  },
  searchRow: {
    flexDirection: 'row',
    alignItems: 'center',
    margin: 10,
    gap: 10
  },
  searchInput: {
    flex: 1,
    backgroundColor: '#fff',
    borderRadius: 10,
    paddingHorizontal: 15,
    paddingVertical: 8,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  list: {
    paddingHorizontal: 10,
    paddingBottom: 80
  },
  card: {
    flex: 1,
    backgroundColor: '#fff',
    borderRadius: 12,
    margin: 8,
    padding: 10,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  image: {
    width: 90,
    height: 90,
    resizeMode: 'contain',
    marginBottom: 10,
  },
  name: {
    fontSize: 14,
    textAlign: 'center',
    marginBottom: 5,
  },
  price: {
    fontWeight: 'bold',
    color: '#e53935',
  },
  bottomNav: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    backgroundColor: '#2ba310',
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 8,
  },
  navLabel: {
    color: '#fff',
    fontSize: 12,
    textAlign: 'center',
  },
});
