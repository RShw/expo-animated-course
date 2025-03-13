import React, { useState } from 'react';
import { View, SafeAreaView, StyleSheet, TouchableOpacity } from 'react-native';
import Animated, { FadeOut, JumpingTransition } from 'react-native-reanimated';

type TItem = {
  id: number;
  emoji: string;
  color: string;
}

const INITIAL_LIST = [
  { id: 1, emoji: '🍌', color: '#b58df1' },
  { id: 2, emoji: '🍎', color: '#ffe780' },
  { id: 3, emoji: '🥛', color: '#fa7f7c' },
  { id: 4, emoji: '🍙', color: '#82cab2' },
  { id: 5, emoji: '🍇', color: '#fa7f7c' },
  { id: 6, emoji: '🍕', color: '#b58df1' },
  { id: 7, emoji: '🍔', color: '#ffe780' },
  { id: 8, emoji: '🍟', color: '#b58df1' },
  { id: 9, emoji: '🍩', color: '#82cab2' },
] as TItem[];

export default function App() {
  const [items, setItems] = useState(INITIAL_LIST);

  const removeItem = (idToRemove: number) => {
    const updatedItems = items.filter((item) => item.id !== idToRemove);
    setItems(updatedItems);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.gridContainer}>
        {items.map((item) => (
          <Animated.View
            //key est nécessaire pour un que layout applique correctemment l'animation
            key={item.id}
            layout={JumpingTransition} //on applique le Layout ici
            exiting={FadeOut}
            style={[styles.tileContainer, { backgroundColor: item.color }]}>
            <TouchableOpacity onPress={() => removeItem(item.id)} style={styles.tile}>
              <Animated.Text style={styles.tileLabel}>{item.emoji}</Animated.Text>
            </TouchableOpacity>
          </Animated.View>
        ))}
      </View>
    </SafeAreaView>
  );
}








const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 32,
    width: 'auto',
    display: 'flex',
    minHeight: 300,
  },
  gridContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'flex-start',
    justifyContent: 'center',
    paddingHorizontal: 32,
  },
  tileContainer: {
    width: '20%',
    margin: '1%',
    borderRadius: 16,
    minHeight: 80,
    justifyContent: 'center',
    alignItems: 'center',
  },
  tile: {
    flex: 1,
    height: '100%',
    width: ' 100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  tileLabel: {
    color: '#f8f9ff',
    fontSize: 24,
  },
});
