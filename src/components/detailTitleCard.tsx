import React, {FC} from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {CREAM, DARK_BLUE, YELLOW} from '../constants/colors';

interface Props {
  animeData: any;
  animeGenres: any[];
}

const DetailTitleCard: FC<Props> = ({animeData, animeGenres}) => {
  return (
    <View style={styles.titleCardContainer}>
      <Image source={{uri: animeData.image_url}} style={styles.image} />
      <View style={styles.titles}>
        <View>
          <Text style={styles.title}>{animeData.title}</Text>
          <Text style={styles.japaneseTitle}>
            {animeData.title_japanese ? `(${animeData.title_japanese})` : ''}
          </Text>
        </View>
        <View style={styles.genres}>
          {animeGenres.slice(0, 5).map((genre: string) => (
            <View style={styles.genreContainer} key={genre}>
              <Text style={styles.genre}>{genre}</Text>
            </View>
          ))}
        </View>
      </View>
    </View>
  );
};

export default DetailTitleCard;

const styles = StyleSheet.create({
  titleCardContainer: {
    height: 300,
    backgroundColor: YELLOW,
    borderRadius: 10,
    padding: 15,
    flexDirection: 'row',
  },
  image: {
    flex: 1,
    width: '50%',
    height: '100%',
    resizeMode: 'contain',
  },
  titles: {
    width: '50%',
    padding: 10,
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 20,
    fontFamily: 'Futura',
  },
  japaneseTitle: {
    paddingTop: 10,
    fontFamily: 'Futura',
  },
  genres: {
    paddingTop: 20,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  genreContainer: {
    margin: 1,
    backgroundColor: DARK_BLUE,
    color: CREAM,
    borderRadius: 10,
  },
  genre: {
    padding: 3,
    margin: 3,
    backgroundColor: DARK_BLUE,
    color: CREAM,
    borderRadius: 10,
  },
});
