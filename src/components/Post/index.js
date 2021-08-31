import React from 'react';
import { View, Text, Image } from 'react-native';
import styles from './styles';

const Post = (props) => {
    return (
        <View style={styles.container}>
            {/* Image */}
            <Image
        style={styles.image}
        source={{uri: 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/images/1.jpg'}}
      />

            {/* Bed and bedroom */}
            <Text style={styles.bedrooms}>1 bed 1 bedroom</Text>
            {/* Type and Description */}
            <Text style={styles.description} numberOfLines={2}>
            The apartment is located in the Roman Quarter, 
            just steps from the lovely church of the Consolata 
            and Bicerin, one of the oldest cafes in the city where 
            you can enjoy the favorite drink of the same name 
            by Camillo Benso di Cavour. 
            </Text>
            {/* Old price and new price */}
            <Text style={styles.prices}>
                <Text style={styles.oldPrice}>$36</Text>
                <Text style={styles.newPrice}>  $30</Text>/ Night
            </Text>
            {/* Total price */}
            <Text style={styles.totalPrice}>$230 Total</Text>
        </View>
    );
};

export default Post;