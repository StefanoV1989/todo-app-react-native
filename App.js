/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useEffect } from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Main from './pages/main/main.component';
import TodoContext from './context/todo';
import Aggiungi from './pages/aggiungi/aggiungi.component';
import { openDb, createDB } from './utils/db';

const Stack = createNativeStackNavigator();

const App = () => {

  useEffect(() => {
    openDb().then((db) => {
      createDB(db);
    });
  }, []);
  
  return (
    <SafeAreaProvider>
      <TodoContext>
        <NavigationContainer>

          <Stack.Navigator>
            <Stack.Screen
              name="Home"
              component={Main}
              options={{
                title: 'ToDo App',
                headerTintColor: '#FFFFFF',
                headerStyle: {
                  backgroundColor: '#00aaff',
                },
                headerTitleAlign: 'center',
                headerTitleStyle: {
                  fontWeight: 'bold',
                },
              }}
            />
            <Stack.Screen
              name="Aggiungi"
              component={Aggiungi}
              options={{
                title: 'ToDo App - Aggiungi',
                headerTintColor: '#FFFFFF',
                headerStyle: {
                  backgroundColor: '#00aaff',
                },
                headerTitleAlign: 'center',
                headerTitleStyle: {
                  fontWeight: 'bold',
                },
              }}
            />
          </Stack.Navigator>

        </NavigationContainer>
      </TodoContext>
    </SafeAreaProvider>
  );
};


export default App;

