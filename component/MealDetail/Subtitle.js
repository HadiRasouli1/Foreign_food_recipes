import { StyleSheet, Text, View } from "react-native";


const Subtitle = ({children}) => {
    return (
        <View style={styles.subtitleContainer}>
        <Text style={styles.subtitle}>{children}</Text>
      </View>
    );
}

export default Subtitle;

const styles = StyleSheet.create({
    subtitle: {
        color: "#e2b497",
        fontSize: 18,
        fontWeight: "bold",
        textAlign: "center",
      },
      subtitleContainer: {
        borderBottomColor: "#e2b497",
        borderBottomWidth: 2,
        padding: 6,
        marginVertical: 4,
        marginHorizontal: 12,
      },
})