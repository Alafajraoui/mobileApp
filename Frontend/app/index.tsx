import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { ScrollView, Text, TextInput, TouchableOpacity, View, ImageBackground, StyleSheet, Dimensions } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { FontAwesome } from '@expo/vector-icons';

export default function App() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <ImageBackground
        source={{ uri: '' }}
        style={styles.backgroundImage}
      >
        <ScrollView contentContainerStyle={styles.scrollView}>
          <View style={styles.container}>
            <Text style={styles.title}>Register</Text>
            <View style={styles.form}>
              <Text style={styles.label}>Full name :</Text>
              <TextInput
                style={styles.customInput}
                placeholder="Your Name ..."
                placeholderTextColor="#FFFFFF"
              />
              <Text style={styles.label}>Email :</Text>
              <TextInput
                style={styles.customInput}
                placeholder="Your Email ..."
                placeholderTextColor="#FFFFFF"
                keyboardType="email-address"
              />
              <Text style={styles.label}>Password :</Text>
              <TextInput
                style={styles.customInput}
                placeholder="Your Password ..."
                placeholderTextColor="#FFFFFF"
                secureTextEntry
              />
              <Text style={styles.label}>Confirm password :</Text>
              <TextInput
                style={styles.customInput}
                placeholder="Your Password ..."
                placeholderTextColor="#FFFFFF"
                secureTextEntry
              />
              <TouchableOpacity style={styles.registerButton}>
                <Text style={styles.registerButtonText}>Register</Text>
              </TouchableOpacity>
              <Text style={styles.orText}>OR</Text>
              <TouchableOpacity style={styles.googleButton}>
                <FontAwesome name="google" size={24} color="#333" style={styles.googleIcon} />
                <Text style={styles.googleButtonText}>Join us with Google</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </ImageBackground>
      <StatusBar style="light" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  backgroundImage: {
    flex: 1,
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
    justifyContent: 'center',
  },
  scrollView: {
    flexGrow: 1,
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 40,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 20,
  },
  form: {
    width: '100%',
    maxWidth: 400,
    padding: 20,
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    borderRadius: 10,
  },
  label: {
    color: '#fff',
    marginBottom: 5,
  },
  customInput: {
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    borderRadius: 25,
    color: '#fff',
    paddingHorizontal: 15,
    paddingVertical: 10,
    marginBottom: 15,
  },
  registerButton: {
    backgroundColor: '#E26645',
    borderRadius: 25,
    paddingVertical: 10,
    alignItems: 'center',
    marginBottom: 20,
  },
  registerButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  orText: {
    color: '#fff',
    textAlign: 'center',
    marginBottom: 20,
  },
  googleButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 25,
    paddingVertical: 10,
    paddingHorizontal: 15,
  },
  googleIcon: {
    marginRight: 10,
  },
  googleButtonText: {
    color: '#333',
    fontWeight: 'bold',
  },
});
