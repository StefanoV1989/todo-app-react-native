import React, { useContext } from 'react';
import {
    ScrollView,
    View,
    Button
} from 'react-native';

import SingleTodo from '../../components/single-todo/single-todo.component';
import { Context } from '../../context/todo';
import { toggleCheck } from '../../utils/db';
import { styles } from './main.styles';


const Main = ({ navigation }) => {

    const { elementi, toggleChecked } = useContext(Context);

    const handleCheck = (val, check) => {
        toggleChecked(val);

        toggleCheck(val, check);
    };

    return (
        <View style={styles.app}>
            <ScrollView>
                {
                    elementi.map((valore) => (
                        <SingleTodo key={valore.id} {...valore} toggleChecked={() => handleCheck(valore.id, !valore.checked)} />
                    ))
                }
            </ScrollView>
            <View style={styles.aggiungi}>
                <Button title="AGGIUNGI" onPress={() => navigation.navigate('Aggiungi')} />
            </View>
        </View>
    );
};

export default Main;
