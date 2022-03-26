import React from 'react';

import {
    View,
} from 'react-native';
import { CheckBox, Divider } from 'react-native-elements';
import { styles } from './single-todo.styles';


const SingleTodo = ({ title, checked, toggleChecked }) => {
    return (
        
        <View style={styles.todo}>
            <CheckBox 
              textStyle={(checked) ? styles.textStyleChecked : styles.textStyleUnchecked} 
              checked={checked} 
              title={title} 
              containerStyle={styles.container} 
              uncheckedColor="#FFF" 
              checkedColor="#555555"
              onPress={toggleChecked}
            />
            <Divider  />
        </View>
    );
};

export default SingleTodo;