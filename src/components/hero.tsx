import React, {FC} from 'react';
import {Text, StyleSheet, View} from 'react-native';
import {BLACK, CREAM, DARK_BLUE, RED} from '../constants/colors';

interface Props {
  navigateToSearch: () => void;
}

const Hero: FC<Props> = ({navigateToSearch}) => {
  return (
    <View style={styles.hero}>
      <Text style={styles.title}>Generic Anime Search Engine</Text>
      <View style={styles.buttonContainer}>
        <Text style={styles.button} onPress={navigateToSearch}>
          Search Anime →
        </Text>
      </View>
    </View>
  );
};

export default Hero;

const styles = StyleSheet.create({
  hero: {
    padding: 20,
    backgroundColor: RED,
    borderRadius: 10,
    shadowColor: BLACK,
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.39,
    shadowRadius: 8.3,
    elevation: 13,
  },
  title: {
    fontSize: 44,
    fontFamily: 'Futura',
    textAlign: 'center',
    color: CREAM,
    textShadowColor: DARK_BLUE,
    textShadowOffset: {width: -1, height: 1},
    textShadowRadius: 10,
  },
  buttonContainer: {
    backgroundColor: DARK_BLUE,
    width: '100%',
    marginTop: 20,
    padding: 12,
    borderRadius: 10,
  },
  button: {
    fontFamily: 'Futura',
    paddingBottom: 3,
    color: CREAM,
  },
});
