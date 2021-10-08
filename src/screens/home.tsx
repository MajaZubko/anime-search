import React, {FC, useState, useEffect} from 'react';
import {Dimensions, SafeAreaView, StyleSheet, View, Text} from 'react-native';
import {DARK_BLUE, YELLOW} from '../constants/colors';
import {Card, Hero} from '../components';
import {getResults} from '../api/api';

interface Props {
  navigation: {
    navigate: (path: string, props?: any) => void;
  };
}

const {width} = Dimensions.get('screen');

const Home: FC<Props> = ({navigation}) => {
  const [topResults, setTopResults] = useState<any>([]);

  const fetchTopResults = async () => {
    const {data} = await getResults('/top/anime');
    // @ts-ignore
    setTopResults(data?.top.slice(0, 4));
  };

  useEffect(() => {
    fetchTopResults();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <Hero navigateToSearch={() => navigation.navigate('Search')} />
        {topResults.length ? (
          <View style={styles.cardContainer}>
            <Text style={styles.cardContainerTitle}>Top Animes</Text>
            {topResults.map((result: any) => (
              <Card
                key={result.mal_id}
                imageUrl={result.image_url}
                onPress={() =>
                  navigation.navigate('Details', {id: result.mal_id})
                }
              />
            ))}
          </View>
        ) : (
          <Text>Nothing to see here</Text>
        )}
      </View>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    paddingTop: 20,
    backgroundColor: DARK_BLUE,
    flex: 1,
    alignItems: 'center',
  },
  cardContainer: {
    margin: 20,
    padding: 20,
    flex: 1,
    width: width - 35,
    backgroundColor: YELLOW,
    borderRadius: 10,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    alignContent: 'space-between',
  },
  cardContainerTitle: {
    width: '100%',
    height: 30,
    fontFamily: 'Futura',
    fontSize: 20,
  },
});
