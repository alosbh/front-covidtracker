import React from 'react';
import {View,Text} from 'react-native'
import 'intl';
import 'intl/locale-data/jsonp/pt-BR';

import Routes from './src/routes';

export default function App() {
  return (
    // <View>
    //   <Text>Helloss HELLO WORLD2</Text>
    // </View>
    <Routes/>
  );
}

