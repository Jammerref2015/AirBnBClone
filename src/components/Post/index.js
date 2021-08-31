import React from 'react';
import {View, Text, Image} from 'react-native';
import styles from './styles';

const Post = props => {
  const post = props.post;

  return (
    <View style={styles.container}>
      {/* Image */}
      <Image style={styles.image} source={{uri: post.image}} />
      {/* Bed & Bedroom  */}
      <Text style={styles.bedrooms}>
        {post.bed} bed {post.bedroom} bedroom
      </Text>

      {/* Type and Description */}
      <Text style={styles.description} numberOfLines={2}>
        {post.type}. {post.title}
      </Text>

      {/*  Old price & new price */}
      <Text style={styles.prices}>
        <Text style={styles.oldPrice}>${post.oldPrice}</Text>
        <Text style={styles.price}>  ${post.newPrice} </Text>
        / night
      </Text>

      {/* Total price */}
      <Text style={styles.totalPrice}>{post.totalPrice} Total</Text>
    </View>
  );
};

export default Post;
