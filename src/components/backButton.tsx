import React, {FC} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {CREAM, DARK_BLUE, RED} from '../constants/colors';

interface Props {
  goBack: () => void;
  secondary?: boolean;
}

const BackButton: FC<Props> = ({goBack, secondary}) => {
  return (
    <View
      style={
        secondary
          ? {...styles.container, ...styles.secondaryContainer}
          : styles.container
      }>
      <Text style={styles.backButton} onPress={goBack}>
        ← Go back
      </Text>
    </View>
  );
};

export default BackButton;

const styles = StyleSheet.create({
  container: {
    padding: 10,
    marginBottom: 10,
    backgroundColor: RED,
    width: 90,
    alignItems: 'center',
    borderRadius: 10,
  },
  secondaryContainer: {
    backgroundColor: DARK_BLUE,
  },
  backButton: {
    color: CREAM,
  },
});
