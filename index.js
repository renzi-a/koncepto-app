import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Image,
  TouchableOpacity,
  Alert,
  AppRegistry
} from 'react-native';
import Checkbox from 'expo-checkbox';
import { StatusBar } from 'expo-status-bar';
import { name as appName } from './app.json';
import Product from './product-list';

const Stack = createNativeStackNavigator();

function LoginScreen({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

  const handleLogin = () => {
    const dummyEmail = 'admin@example.com';
    const dummyPassword = '123456';

    if (email === dummyEmail && password === dummyPassword) {
      navigation.navigate('Product');
    } else {
      Alert.alert('Login Failed', 'Invalid email or password.');
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.topSection}>
        <Image source={require('./assets/logo.png')} style={styles.logo} />
      </View>

      <View style={styles.loginSection}>
        <Text style={styles.welcomeText}>Welcome Back</Text>

        <TextInput
          style={styles.input}
          placeholder="👤 Email"
          value={email}
          onChangeText={setEmail}
        />

        <TextInput
          style={styles.input}
          placeholder="🔒 Password"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />

        <View style={styles.rememberContainer}>
          <Checkbox
            value={rememberMe}
            onValueChange={setRememberMe}
            color={rememberMe ? '#58B32D' : undefined}
          />
          <Text style={styles.rememberText}>Remember me</Text>
        </View>

        <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
          <Text style={styles.loginText}>LOGIN</Text>
        </TouchableOpacity>
      </View>

      <StatusBar style="auto" />
    </View>
  );
}

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Product" component={Product} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

AppRegistry.registerComponent(appName, () => App);
export default App;

const styles = StyleSheet.create({
  container: { flex: 1 },
  topSection: {
    flex: 1,
    backgroundColor: '#2ba310',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 160,
    height: 100,
    resizeMode: 'contain',
  },
  loginSection: {
    flex: 2,
    backgroundColor: '#fff',
    padding: 30,
    justifyContent: 'center',
  },
  welcomeText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 30,
    textAlign: 'center',
  },
  input: {
    height: 45,
    borderBottomWidth: 1,
    borderBottomColor: '#999',
    marginBottom: 25,
    paddingHorizontal: 10,
  },
  rememberContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 25,
  },
  rememberText: {
    marginLeft: 8,
    fontSize: 14,
  },
  loginButton: {
    backgroundColor: '#58B32D',
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
  },
  loginText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});
