import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView, Alert, Linking } from 'react-native';
import { styles } from './styles';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import LoginScreen from './login';

const RegistrationScreen = () => {
  const [isUserFocused, setIsUserFocused] = useState(false);
  const [isPasswordFocused, setIsPasswordFocused] = useState(false);
  const [isSecPasswordFocused, setIsSecPasswordFocused] = useState(false);
  const [isEmailFocused, setIsEmailFocused] = useState(false);
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [isSecPasswordVisible, setIsSecPasswordVisible] = useState(false);
  const navigation = useNavigation();


  const handlePress = () => {
    Alert.alert(
      'Alert Title',
      'Cadastrado',
      [
        {
          text: 'OK',
          onPress: () => navigation.navigate('login'), // por que continua vermelho?
        },
      ],
      { cancelable: false } // impede q o alerta suma ao apertar fora dele
    );
  };

  return (
    <View style={styles.container}>

      <Text style={styles.text}>Usuário</Text>
      <TextInput
        style={isUserFocused ? styles.inputFocused : styles.input}
        onFocus={() => setIsUserFocused(true)}
        onBlur={() => setIsUserFocused(false)}
        placeholder="Usuário"
      />
      <Text style={styles.note}>É por este nome que as pessoas vão conhecer você. Você pode ser muito criativo(a) depois.</Text>
      
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
          onPress={() => setIsPasswordVisible(!isPasswordVisible)}>
          <Ionicons name={isPasswordVisible ? 'eye' : 'eye-off'} size={24} color="gray" />
        </TouchableOpacity>
      </View>

      <Text style={styles.text}>Confirmação de senha</Text>
      <View style={styles.inputContainer}>
      <TextInput
        style={isSecPasswordFocused ? styles.inputFocused : styles.input}
        onFocus={() => setIsSecPasswordFocused(true)}
        onBlur={() => setIsSecPasswordFocused(false)}
        placeholder="Confirmação de senha"
        secureTextEntry={!isSecPasswordVisible}
      />
        <TouchableOpacity
          style={styles.eyeIcon}
          onPress={() => setIsSecPasswordVisible(!isSecPasswordVisible)}>
          <Ionicons name={isSecPasswordVisible ? 'eye' : 'eye-off'} size={24} color="gray" />
        </TouchableOpacity>
      </View>
      
      <Text style={styles.text}>Email</Text>
      <TextInput
        style={isEmailFocused ? styles.inputFocused : styles.input}
        onFocus={() => setIsEmailFocused(true)}
        onBlur={() => setIsEmailFocused(false)}
        placeholder="E-mail"
      />
      <TouchableOpacity
        style={styles.button}
        onPress={handlePress}
      >
        <Text style={styles.buttonText}>Cadastrar-se</Text>
      </TouchableOpacity>
      <Text style={styles.terms}>
        Ao clicar em 'Cadastrar-se', você confirma que leu e reconhece os
        <TouchableOpacity onPress={() => Linking.openURL('https://www.twitch.tv/p/pt-br/legal/privacy-notice/#:~:text=A%20p%C3%A1gina%20Escolhas%20de%20privacidade,determinadas%20informa%C3%A7%C3%B5es%20com%20a%20Twitch.')}>
          <Text style={styles.termText}> Termos de Serviço e a Política de Privacidade.</Text>
        </TouchableOpacity>
       
      </Text>
    </View>
  );
};


export default RegistrationScreen;
