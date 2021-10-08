import React, {FC} from 'react';
import {StyleSheet, Dimensions, Image, Pressable} from 'react-native';
import {CREAM} from '../constants/colors';

const {width} = Dimensions.get('screen');

interface Props {
  imageUrl: string;
  onPress: () => void;
}

const Card: FC<Props> = ({imageUrl, onPress}) => {
  return (
    <Pressable onPress={onPress} style={styles.card}>
      <Image source={{uri: imageUrl}} style={styles.image} />
    </Pressable>
  );
};

export default Card;

const styles = StyleSheet.create({
  card: {
    width: width / 2 - 60,
    height: '43%',
    backgroundColor: CREAM,
    borderRadius: 10,
    padding: 10,
    justifyContent: 'space-between',
  },
  image: {
    flex: 1,
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
    borderRadius: 10,
  },
  title: {
    height: 30,
  },
});
