import React, { useState, useEffect } from 'react';
import { View, Image, StyleSheet, ActivityIndicator } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 30,
  },
  tinyLogo: {
    width: 100,
    height: 100,
  },
  loadingIndicator: {
    marginTop: 20,
  },
});

const DisplayAnImage = () => {
  const [isLoading, setIsLoading] = useState(true); // Start with loading state true

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false); // Set loading state to false after 10 seconds
    }, 10000); // 10000 milliseconds = 10 seconds
  }, []);

  return (
    <View style={styles.container}>
      <Image
        style={styles.tinyLogo}
        source={{
          uri: 'https://as1.ftcdn.net/v2/jpg/00/82/70/52/1000_F_82705216_78ALrY4U8jtqv64ymNftW5MEVjztRpUP.jpg',
        }}
      />
      {isLoading && <ActivityIndicator style={styles.loadingIndicator} size="large" color="black" />}
    </View>
  );
};

export default DisplayAnImage;

