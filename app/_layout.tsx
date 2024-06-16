import React, { useEffect, useState } from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import LoginScreen from './login';
import CadastroScreen from './cadastro';
import { Image, Text, StyleSheet, View } from 'react-native';
import image1 from '../src/images/Twitch_icon_2012.svg.png';
import { styles } from './styles';
import { useNavigation } from '@react-navigation/native';

const Tab = createMaterialTopTabNavigator();

export default function RootLayout() {
  const navigation = useNavigation();
  const [title, setTitle] = useState('');

  useEffect(() => {
    const unsubscribe = navigation.addListener('state', (e) => {
      const routeName = e.data.state.routes[e.data.state.index].name;
      if (routeName === 'login') {
        setTitle('Entrar na Twitch');
      } else if (routeName === 'cadastro') {
        setTitle('Junte-se hoje à Twitch');
      }
    });
  
    return unsubscribe;
  }, [navigation]);

  return (
    <View style={{ flex: 1 }}>
        <View style={styles.navbar}>
            <Image style={styles.icon} source={image1}></Image>
            <Text style={styles.titleNav}>{title}</Text>
        </View>
      <Tab.Navigator 
      screenOptions={{
        tabBarActiveTintColor: 'purple',
        tabBarInactiveTintColor: 'gray', 
        tabBarIndicatorStyle: { backgroundColor: 'purple' }, 
        tabBarStyle: { backgroundColor: 'white' }, 
      }}>
        
        <Tab.Screen 
          name="login" 
          component={LoginScreen}
          options={{ tabBarLabel: 'Login' }}
        />
        <Tab.Screen 
          name="cadastro" 
          component={CadastroScreen}
          options={{ tabBarLabel: 'Cadastro' }}
        />
      </Tab.Navigator>
    </View>
  );
}

