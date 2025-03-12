import { useEffect, useState } from "react";
import { Button, StyleSheet, View } from "react-native";
import Animated, {
  runOnJS,
  runOnUI,
  useSharedValue,
  withSpring
} from "react-native-reanimated";

export default function Index() {

  const width = useSharedValue(100);

  const [boolean, setBoolean] = useState(false)

  const updateWidthWorklet = (maxWidth: number) => {
    'worklet';
    width.value = withSpring(Math.random() * maxWidth);
    runOnJS(setBoolean)(!boolean) //Fonctionne
  };

  const updateWidthNotWorklet = (maxWidth: number) => {
    width.value = withSpring(Math.random() * maxWidth);
    runOnJS(setBoolean)(!boolean) //Fonctionne
  };

  useEffect(() => {
    runOnUI(updateWidthNotWorklet)(300);
  }, [])

  return (
    <View
      style={styles.container}
    >
      <Animated.View style={{ ...styles.square, width }} />
      <Button
        title="Press me"
        onPress={() => runOnUI(updateWidthWorklet)(300)}
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











