import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Alert,
  SafeAreaView,
  TouchableWithoutFeedback,
  Image,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage'; // For secure storage
import styles from './LoginStyles';

// Import images properly
import College from '../../Assests/college_img.png';
import Lock from '../../Assests/lock_img.svg';

const Login = () => {
  const [emailId, setEmailId] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const navigation = useNavigation();

  // Store user data securely
  const storeUserData = async (userData) => {
    try {
      await AsyncStorage.setItem('userData', JSON.stringify(userData));
      await AsyncStorage.setItem('accessToken', userData.accessToken);
      await AsyncStorage.setItem('refreshToken', userData.refreshToken);
      console.log("User data stored successfully");
    } catch (error) {
      console.error("Error storing user data:", error);
    }
  };

  const handleLogin = async () => {
    // Form validation
    if (!emailId || !password) {
      Alert.alert("Input Error", "Email and password are required");
      return;
    }

    try {
      const response = await axios.post("http://localhost:1234/auth/login", {
        emailId,
        password,
      }, {
        headers: {
          "Content-Type": "application/json"
        }
      });

      if (response.status === 200) {
        const { accessToken, refreshToken, role } = response.data;
        
        // Store user data securely
        await storeUserData(response.data);
        
        console.log("Login successful:", response.data);

        // Role-based navigation
        if (role === "admin") {
          navigation.navigate("Admin");
        } else if (role === "teacher") {
          navigation.navigate("Teacher");
        } else if (role === "student") {
          navigation.navigate("Student");
        } else {
          Alert.alert("Error", "Unknown role");
        }
      }
    } catch (err) {
      console.error("Login error", err);
      Alert.alert(
        "Login Failed", 
        err.response?.data?.message || "Invalid credentials. Please try again."
      );
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.loginContainer}> 
        <Image source={College} style={styles.collegeImage} />
        <Text style={styles.welcomeText}>Hi, Welcome back</Text>
        
        <View style={styles.inputContainer}>
          <Text style={styles.symbol}>@</Text>
          <TextInput
            style={styles.input}
            placeholder="E-mail"
            value={emailId}
            onChangeText={setEmailId}
            keyboardType="email-address"
            autoCapitalize="none"
          />
        </View>
        
        <View style={styles.inputContainer}>
          <View style={styles.lockIcon}>
            <Image source={Lock} style={styles.lockImage} />
          </View>
          <TextInput
            style={styles.input}
            placeholder="Password"
            value={password}
            onChangeText={setPassword}
            secureTextEntry={!showPassword}
          />
          <TouchableWithoutFeedback onPress={() => setShowPassword(!showPassword)}>
            <Text style={styles.eyeIcon}>
              {showPassword ? "👁️‍🗨️" : "👁️"}
            </Text>
          </TouchableWithoutFeedback>
        </View>
        
        <TouchableOpacity 
          style={styles.loginButton} 
          onPress={handleLogin}
        >
          <Text style={styles.loginButtonText}>Submit</Text>
        </TouchableOpacity>
        
        <TouchableOpacity
          onPress={() => navigation.navigate("ForgotPassword")}
          style={styles.forgotPasswordLink}
        >
          <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
        </TouchableOpacity>
        
        <View style={styles.signupContainer}>
          <Text style={styles.signupText}>Don't have an account? </Text>
          <TouchableOpacity onPress={() => navigation.navigate("Signup")}>
            <Text style={styles.signupLink}>Sign up</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Login;