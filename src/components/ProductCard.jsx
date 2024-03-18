import React from "react";
import { View, Text } from "react-native";

const productCard = Styled.box`
    border: 1px solid #ccc;
    margin: 10px;
    padding: 10px;
`
const productStyle = Styled.text`
    font-weight: bold;
`;
const priceStyle = Styled.text`
    font-style: italic;
`;

class ProductCard extends Component {
    
    render() {
        const { name, price } = this.props;
        return(
            <View>
                <Text><Product style={productStyle} />{name}</Text>
                <Text><Price style={priceStyle} />{price}</Text>
            </View>
        )
    }
}

export default ProductCard;