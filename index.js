import React, { useState } from 'react';
import { AppRegistry, StyleSheet, Text, View, TextInput, Image, TouchableOpacity } from 'react-native';
import Checkbox from 'expo-checkbox';
import { StatusBar } from 'expo-status-bar';
import { name as appName } from './app.json'; // Ensure app.json has "name": "main" or appropriate value

function App() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

  return (
    <View style={styles.container}>
      <View style={styles.topSection}>
        <Image source={require('./assets/logo.png')} style={styles.logo}/>
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

        <TouchableOpacity style={styles.loginButton}>
          <Text style={styles.loginText}>LOGIN</Text>
        </TouchableOpacity>
      </View>

      <StatusBar style="auto" />
    </View>
  );
}

AppRegistry.registerComponent(appName, () => App);

// You can optionally export App if needed for Expo Go
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
