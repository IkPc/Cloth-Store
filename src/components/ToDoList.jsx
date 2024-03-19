import React from "react";

class ToDoList extends Component {
    render() {
        return(
            <View>
                <Text>{this.props.list}</Text>
            </View>
        )
    }
};

export default ToDoList;