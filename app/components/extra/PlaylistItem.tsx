import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import { baseStyle, Colors, activeOpacity } from '../../theme';

const PlaylistItem = ({ bgColor, onPress, title }: any) => (
  <TouchableOpacity
    activeOpacity={activeOpacity}
    onPress={onPress}
    style={[styles.playlistItem, { backgroundColor: bgColor }]}
  >
    <Text style={styles.playlistTitle}>{title}</Text>
  </TouchableOpacity>
);

PlaylistItem.propTypes = {
  // required
  bgColor: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired
};

const styles = StyleSheet.create({
  playlistItem: {
    borderRadius: 6,
    flex: 1,
    height: 98,
    marginBottom: 24,
    marginRight: 24,
    paddingLeft: 12,
    paddingTop: 12
  },
  playlistTitle: {
    color: Colors.white,
    // fontFamily: fonts.spotifyBold,
    fontSize: 22
  }
});

export default PlaylistItem;
