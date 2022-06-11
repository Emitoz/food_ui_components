import React, { useState } from 'react';
import { View, StyleSheet, TextInput } from 'react-native';
// import { TextInput } from 'react-native-paper';

import { colors } from '../utils/colors';

export const InputField = ({ placeholder }) => {

    const [ isFocused, setIsFocused ] = useState(false);

    return (
        <View style={{ ...styles.inputContainer, borderWidth: isFocused ? 2 : 0, borderColor: colors.primary.extraLight, borderRadius: 6, backgroundColor: colors.white }}>
            <TextInput style={styles.inputField}
                placeholder={placeholder}
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
            />
        </View>
    )
};

const styles = StyleSheet.create({
    inputContainer: {
        width: '100%'
    },
    inputField: {
        borderRadius: 6,
        borderWidth: 0,
        backgroundColor: colors.grey.semiLight,
        paddingVertical: 14,
        paddingHorizontal: 16,
    }
});