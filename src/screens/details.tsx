import React, {FC, useEffect, useState} from 'react';
import {SafeAreaView, StyleSheet, View, Text, ScrollView} from 'react-native';
import {getResults} from '../api/api';
import {CREAM, DARK_BLUE, RED} from '../constants/colors';
import {BackButton, DetailTitleCard} from '../components';

interface Props {
  route: any;
  navigation: {
    goBack: () => void;
  };
}

const Details: FC<Props> = ({route, navigation}) => {
  const [animeData, setAnimeData] = useState<any>({});

  const fetchAnimeData = async () => {
    const {data}: any = await getResults(`/anime/${route.params.id}`);
    // @ts-ignore
    setAnimeData(data);
  };

  const animeGenres = animeData.genres
    ? animeData.genres.map((genre: {name: string}) => genre.name)
    : [];

  useEffect(() => {
    fetchAnimeData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.innerContainer}>
        <BackButton goBack={() => navigation.goBack()} secondary />
        {Object.keys(animeData).length > 0 && (
          <View>
            <DetailTitleCard animeData={animeData} animeGenres={animeGenres} />
            <View style={styles.descriptionContainer}>
              <Text style={styles.description}>{animeData.synopsis}</Text>
            </View>
          </View>
        )}
      </ScrollView>
    </SafeAreaView>
  );
};

export default Details;

const styles = StyleSheet.create({
  container: {
    backgroundColor: RED,
    flex: 1,
  },
  innerContainer: {
    padding: 20,
  },
  descriptionContainer: {
    marginTop: 20,
    padding: 10,
    borderRadius: 10,
    backgroundColor: DARK_BLUE,
  },
  description: {
    color: CREAM,
    lineHeight: 20,
  },
});
