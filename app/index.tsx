import { useEffect, useState } from "react";
import { Button, StyleSheet, View } from "react-native";
import Animated, {
  runOnJS,
  runOnUI,
  useSharedValue,
  withSpring
} from "react-native-reanimated";

export default function Index() {

  const returningValue = () => {
    'worklet';
    return "World !"
  }

  const someWorklet = () => {
    'worklet';
    console.log("Hello", returningValue());
  }

  return (
    <View
      style={styles.container}
    >
      <Animated.View style={styles.square} />
      <Button
        title="Press me"
        onPress={() => runOnUI(someWorklet)()}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  square: {
    // width: 100,
    height: 100,
    backgroundColor: "lightblue",
    borderRadius: 12,
  }
});











