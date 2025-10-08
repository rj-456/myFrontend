import { StyleSheet } from "react-native";

const COLORS = {
    background: '#657f99ff',      // Light Gray
    surface: '#b2cfd8ff',         // White
    primary: '#007BFF',         // Professional Blue
    accent: '#17A2B8',          // Muted Cyan/Teal
    textPrimary: '#212529',     // Almost Black
    textSecondary: '#6C757D',    // Medium Gray
};

export default StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        padding: 20,
        backgroundColor: COLORS.background,
    },
    header: {
        fontSize: 32, 
        fontWeight: '700',
        color: COLORS.primary, 
        marginBottom: 30,
        textAlign: 'center',

        textShadowColor: COLORS.primary,
        textShadowOffset: { width: 0, height: 0 },
        textShadowRadius: 10,
    },
    input: {
        backgroundColor: COLORS.surface,
        color: COLORS.textPrimary,
        borderWidth: 1,
        borderColor: '#003c77ff', 
        padding: 14,
        marginBottom: 15,
        borderRadius: 8,
        fontSize: 16,
    },
    button: {
        backgroundColor: COLORS.primary,
        paddingVertical: 15,
        paddingHorizontal: 30,
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center',

        shadowColor: COLORS.primary,
        shadowOffset: {
            width: 0,
            height: 0,
        },
        shadowOpacity: 0.8,
        shadowRadius: 10,
        elevation: 10,
    },
    text: {
        fontSize: 16,
        marginBottom: 25,
        color: COLORS.textSecondary,
        textAlign: 'center',
        lineHeight: 24,
    },
    card: {
        backgroundColor: COLORS.surface,
        padding: 20,
        marginBottom: 15,
        borderRadius: 12,
        width: '90%',
        alignSelf: 'center',
        borderWidth: 1,
        borderColor: '#1f558bff', 
    },
    homeCard: {
        backgroundColor: COLORS.surface,
        padding: 20,
        marginBottom: 15,
        borderRadius: 12,
        width: '90%',
        alignSelf: 'center',
        borderWidth: 1.5,
        borderColor: COLORS.accent, 
        shadowColor: COLORS.accent,
        shadowOffset: {
            width: 0,
            height: 0,
        },
        shadowOpacity: 0.7,
        shadowRadius: 8,
        elevation: 8,
    },

    title: {
        fontSize: 24,
        fontWeight: '600',
        marginBottom: 20,
        color: COLORS.textPrimary,
        textAlign: 'center',
    },
});