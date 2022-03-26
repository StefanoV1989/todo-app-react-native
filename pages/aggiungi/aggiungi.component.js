import React, { useState, useContext } from 'react';
import { View } from 'react-native';
import { Button, Input } from 'react-native-elements';
import { Context } from '../../context/todo';
import { insertNota } from '../../utils/db';

import { styles } from './aggiungi.styles';

const Aggiungi = ({ navigation }) => {

    const [nota, setNota] = useState('');
    const { addElement } = useContext(Context);

    const addElemento = () => {
        addElement(nota);
        insertNota(nota).then(() => {
            navigation.navigate({
                name: 'Home',
                params: { ricarica: true },
                merge: true,
            });
        });
    };

    return (
        <View style={styles.app}>
            <View>
                <Input
                    placeholder="Inserire una nota qui"
                    onChangeText={testo => setNota(testo)}
                    style={styles.inputStyle}
                    leftIcon={{ type: 'font-awesome', name: 'plus', color: '#FFFFFF', style: styles.leftIcon }}
                />
            </View>
            <View style={styles.buttonContainer}>
                <Button
                    title="Aggiungi Nota"
                    onPress={addElemento}
                />
            </View>
        </View>
    );
};

export default Aggiungi;


