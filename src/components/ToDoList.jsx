import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";

class ToDoList extends Component {
    render() {
        return(
            <View style={styles.container}>
                <Text style={styles.list}>{this.props.list}</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        marginVertical: 10,
    },
    list: {
        fontSize: 16,
        fontWeight: "bold",
        color: "black",
    },
});

export default ToDoList;
