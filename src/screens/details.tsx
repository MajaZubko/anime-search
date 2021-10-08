import React, {FC, useEffect, useState} from 'react';
import {SafeAreaView, StyleSheet, View} from 'react-native';
import {getResults} from '../api/api';
import {RED} from '../constants/colors';
import {DetailTitleCard} from '../components';

interface Props {
  route: any;
}

const Details: FC<Props> = ({route}) => {
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
      <View style={styles.innerContainer}>
        {Object.keys(animeData).length > 0 && (
          <DetailTitleCard animeData={animeData} animeGenres={animeGenres} />
        )}
      </View>
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
});
