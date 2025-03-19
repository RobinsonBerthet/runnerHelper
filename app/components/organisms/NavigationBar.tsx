import React, { useEffect, useRef } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Touchable,
  TouchableOpacity,
  Dimensions,
  Animated,
} from 'react-native';

import Chrono from '../../../assets/images/Chrono.svg';
import Speed from '../../../assets/images/Speed.svg';
import Distance from '../../../assets/images/Distance.svg';
import Rythm from '../../../assets/images/Rythm.svg';

interface NavigationBarProps {
  actualPage: number;
  setActualPage: (page: number) => void;
}

const screenWidth = Dimensions.get('window').width;


export default function NavigationBar({
  actualPage,
  setActualPage,
}: NavigationBarProps) {

  const animation = useRef(new Animated.Value(actualPage)).current;

  const tabWidth = (screenWidth * 0.84) / 4;

  // animation qui fait bouger la zone blanche de la barre de navigation dès que l'onglet actuel change
  useEffect(() => {
    Animated.spring(animation, {
      toValue: (actualPage) * tabWidth,
      // duration: 300,
      mass: 2,
      damping: 20,
      useNativeDriver: false,
    }).start();
  }, [actualPage, tabWidth]);


  return (
    <View style={styles.container}>
      <Animated.View
        style={[styles.animatedBubble, { transform: [{ translateX: animation }] }]}
      />
      <TouchableOpacity
        activeOpacity={1}
        style={{ alignItems: 'center' }}
        onPress={() => setActualPage(0)}>
        <Chrono
          width={35}
          height={35}
          fill={actualPage == 0 ? 'rgb(3, 255, 163)' : 'white'}
          stroke={'rgb(246,246,246)'}
          strokeWidth={0}
        />

        <Text style={{ color: actualPage == 0 ? 'rgb(3, 255, 163)' : 'white' }}>
          Temps
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        activeOpacity={1}
        style={{ alignItems: 'center' }}
        onPress={() => setActualPage(1)}>
        <Speed
          width={35}
          height={35}
          fill={actualPage == 1 ? 'rgb(3, 255, 163)' : 'white'}
          stroke={'rgb(246,246,246)'}
          strokeWidth={0}
        />

        <Text style={{ color: actualPage == 1 ? 'rgb(3, 255, 163)' : 'white' }}>
          Vitesse
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        activeOpacity={1}
        style={{ alignItems: 'center' }}
        onPress={() => setActualPage(2)}>
        <Distance
          width={35}
          height={35}
          fill={actualPage == 2 ? 'rgb(3, 255, 163)' : 'white'}
          stroke={'rgb(246,246,246)'}
          strokeWidth={0}
        />

        <Text style={{ color: actualPage == 2 ? 'rgb(3, 255, 163)' : 'white' }}>
          Distance
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        activeOpacity={1}
        style={{ alignItems: 'center' }}
        onPress={() => setActualPage(3)}>
        <Rythm
          width={35}
          height={35}
          fill={actualPage == 3 ? 'rgb(3, 255, 163)' : 'white'}
          stroke={'rgb(246,246,246)'}
          strokeWidth={0}
        />

        <Text style={{ color: actualPage == 3 ? 'rgb(3, 255, 163)' : 'white' }}>
          Rythme
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    paddingLeft: '10%',
    paddingRight: '10%',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    height: '10%',
    backgroundColor: 'rgb(0, 0, 0)',
    marginTop: 'auto',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
  animatedBubble: {
    position: 'absolute',
    width: '12%',
    height: '4%',
    borderRadius: 5,
    top: '0%',
    left: '15%',
    backgroundColor: 'rgb(3, 255, 163)',
  },
});
