import React, {FC, useEffect, useState} from 'react';
import {View, Text, SafeAreaView, StyleSheet, TextInput} from 'react-native';
import {stringify} from 'query-string';
import {debounce} from 'lodash';
import {CREAM, DARK_BLUE, YELLOW} from '../constants/colors';
import {getResults} from '../api/api';

interface Props {
  navigation: {
    navigate: (path: string, props?: any) => void;
  };
}

const Search: FC<Props> = ({navigation}) => {
  const [text, setText] = useState('Hello');
  const [results, setResults] = useState<any[]>([]);

  const fetchSearchResults = async () => {
    if (text.length > 2) {
      const queryString = stringify({q: text});
      const {data} = await getResults(`/search/anime?${queryString}`);
      // @ts-ignore
      setResults(data.results.slice(0, 13));
    }
  };

  const debouncedFetch = debounce(() => fetchSearchResults(), 300);

  useEffect(() => {
    debouncedFetch();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [text]);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.innerContainer}>
        <View style={styles.inputContainer}>
          <TextInput
            value={text}
            onChangeText={inputText => setText(inputText)}
            onFocus={() => setText('')}
            style={styles.textInput}
          />
        </View>
        {results.length > 0 && (
          <View style={styles.resultsContainer}>
            {results.map(result => (
              <View key={result.mal_id} style={styles.resultCard}>
                <Text
                  onPress={() => {
                    navigation.navigate('Details', {id: result.mal_id});
                    setText('');
                    setResults([]);
                  }}
                  numberOfLines={1}>
                  {result.title}
                </Text>
              </View>
            ))}
          </View>
        )}
        {results.length === 0 && text.length > 2 && (
          <Text>No results yet!</Text>
        )}
      </View>
    </SafeAreaView>
  );
};

export default Search;

const styles = StyleSheet.create({
  container: {
    backgroundColor: YELLOW,
    flex: 1,
  },
  innerContainer: {
    padding: 20,
    flex: 1,
  },
  inputContainer: {
    marginBottom: 20,
  },
  textInput: {
    backgroundColor: CREAM,
    fontSize: 16,
    padding: 10,
    borderRadius: 10,
  },
  resultsContainer: {
    flex: 1,
    backgroundColor: DARK_BLUE,
    borderRadius: 10,
  },
  resultCard: {
    backgroundColor: CREAM,
    margin: 10,
    paddingVertical: 5,
    paddingHorizontal: 3,
    borderRadius: 10,
  },
});
