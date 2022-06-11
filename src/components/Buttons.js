import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

import { colors } from '../utils/colors';
import { fontSizes } from '../utils/fontSizes';

export const PrimaryButton = ({ title }) => {
    return (
        <TouchableOpacity style={styles.primaryButton}>
            <Text style={{ fontSize: fontSizes.md, fontWeight: 'bold', color: colors.white }}>
                {title}
            </Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    primaryButton: {
        backgroundColor: colors.primary.base,
        paddingVertical: 16,
        width: '100%',
        alignItems: 'center',
        borderRadius: 6
    }
});