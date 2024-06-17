import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, Linking } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { styles } from './styles';

const LoginScreen = () => {
  const [isUserFocused, setIsUserFocused] = useState(false);
  const [isPasswordFocused, setIsPasswordFocused] = useState(false);
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Usuário</Text>
      <TextInput
        style={isUserFocused ? styles.inputFocused : styles.input}
        onFocus={() => setIsUserFocused(true)}
        onBlur={() => setIsUserFocused(false)}
        placeholder="Usuário"
      />

      <Text style={styles.text}>Senha</Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={isPasswordFocused ? styles.inputFocused : styles.input}
          onFocus={() => setIsPasswordFocused(true)}
          onBlur={() => setIsPasswordFocused(false)}
          placeholder="Senha"
          secureTextEntry={!isPasswordVisible}
        />
        <TouchableOpacity
          style={styles.eyeIcon}
          onPress={() => setIsPasswordVisible(!isPasswordVisible)}
        >
          <Ionicons name={isPasswordVisible ? 'eye' : 'eye-off'} size={24} color="gray" />
        </TouchableOpacity>
      </View>

      <TouchableOpacity onPress={() => Linking.openURL('https://help.twitch.tv/s/article/twitch-account-access-login-issues-guide?language=pt_BR')}>
        <Text style={styles.helpText}>Problemas para efetuar login?</Text>
      </TouchableOpacity>
      
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          alert('Ops, não fiz isso ainda')
        }}
      >
        <Text style={styles.buttonText}>Entrar</Text>
      </TouchableOpacity>
    </View>
  );
};


export default LoginScreen;
