import React from 'react';
import PainButton from '../components/reusable/PainButton';
import { View } from 'react-native';

function IndexTrial() {
  return (
    <View
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            padding: 20,
          }}
    >
      <View>
        <PainButton href="/" text="Test" />
        <PainButton href="/FrontPageTrial" text="Trial" />
      </View>
    </View>
  );
}

export default IndexTrial;