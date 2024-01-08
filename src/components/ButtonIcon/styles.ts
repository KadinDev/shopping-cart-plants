import { StyleSheet } from "react-native";

export type ButtonIconTypeStyleProps = 'PRIMARY' | 'SECONDARY';

export const styles = StyleSheet.create({
    container: {
        width: 40,
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
    }
})