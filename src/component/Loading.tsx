import React from 'react';
import {View, Text} from 'react-native';
import styles from './styles';

const Loading = ({text}: {text: string}) => {
  return (
    <View style={styles.loadingCard}>
      <Text>{text}</Text>
    </View>
  );
};

export default Loading;
