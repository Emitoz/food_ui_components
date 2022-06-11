import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { fontSizes } from '../utils/fontSizes';
import { colors, shadows } from '../utils/colors';

export const Texts = () => {
    return (
        <View style={styles.container}>
            <Text style={{ fontSize: fontSizes.xsm }}>Extra Small text</Text>
            <Text style={{ fontSize: fontSizes.sm }}>Small text</Text>
            <Text style={{ fontSize: fontSizes.md }}>Medium text</Text>
            <Text style={{ fontSize: fontSizes.lg }}>Large text</Text>
            <Text style={{ fontSize: fontSizes.xl }}>X Large text</Text>
            <Text style={{ fontSize: fontSizes.xxl }}>XX Large text</Text>
            <Text style={{ fontSize: fontSizes.xxxl }}>XXX Large text</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.white,
        padding: 10,
        // boxShadow: shadows.regular,
        borderRadius: 6,
        marginBottom: 20,

    }
});