import { View, StyleSheet, Text } from 'react-native';

const PostScreen = () => {
    return (
        <View style={styles.container}>
            <Text> PostS creen </Text>
        </View>
    );
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
});

export default PostScreen;