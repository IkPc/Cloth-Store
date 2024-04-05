import React from 'react';
import { View, Text, Button } from 'react-native-web';

const Counter = () => {
    const [state, setState] = useState(0);

    return (
        <View>
            <Button
                onPress={() => setState(state - 1)}
                title="Decrementar"
            />
            <Text>Quantidade: {state}</Text>
            <Button
                onPress={() => setState(state + 1)}
                title="Incrementar"
            />
        </View>
    );
}

export default Counter;