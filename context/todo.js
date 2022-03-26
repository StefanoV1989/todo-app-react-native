import React, { createContext, useEffect, useState } from 'react';
import { getDatas } from '../utils/db';

export const Context = createContext({
    elementi: [],
    toggleChecked: (elemento) => {},
    addElement: (elemento) => {},
    refreshData: () => {},
});

const TodoContext = (props) => {
    
    const [elementi, setElementi] = useState([]);

    const toggleChecked = (id) => {
        const tutto = elementi.map((val) => {
            if (val.id === id) {
                val.checked = !val.checked;
            }

            return val;
        });

        setElementi(tutto);
    };

    const addElement = (elemento) => {

        const lastID = (elementi.length > 0) ? elementi[elementi.length - 1].id : 1;
        const newID = parseInt(lastID, 10) + 1; 

        elementi.push({
            id: newID,
            title: elemento,
            checked: false
        });
    };

    const refreshData = () => {
        getDatas().then((dati) => setElementi(dati));
    };

    useEffect(() => {
        refreshData();
    }, []);

    return (
        <Context.Provider
            value={{
                elementi: elementi,
                toggleChecked: toggleChecked,
                addElement: addElement,
                refreshData: refreshData
            }}
        >
            {props.children}
        </Context.Provider>
    );
};

export default TodoContext;

