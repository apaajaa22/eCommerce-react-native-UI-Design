import React from 'react';
import {StyleSheet, TextInput, TouchableOpacity, View} from 'react-native';
import {IcFilter, IcSearch} from '../../../assets/Illustration';

const SearchBar = ({onSearch, onFilter}) => {
  return (
    <View style={styles.page}>
      <TouchableOpacity
        style={styles.searchBar}
        activeOpacity={0.7}
        onPress={onSearch}>
        <IcSearch />
      </TouchableOpacity>
      <TextInput
        placeholder="Search for fruit salad combos"
        style={styles.textInput}
      />
      <TouchableOpacity style={styles.filter} onFilter={onFilter}>
        <IcFilter />
      </TouchableOpacity>
    </View>
  );
};

export default SearchBar;

const styles = StyleSheet.create({
  page: {flexDirection: 'row'},
  searchBar: {
    backgroundColor: '#F3F4F9',
    width: 50,
    height: 56,
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomLeftRadius: 10,
    borderTopLeftRadius: 10,
  },
  textInput: {
    backgroundColor: '#F3F4F9',
    maxWidth: '100%',
    height: 56,
    alignItems: 'center',
    flex: 1,
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
    fontSize: 16,
    fontFamily: 'Transat-Regular',
  },
  filter: {
    justifyContent: 'center',
    maxHeight: 56,
    marginLeft: 16,
  },
});
