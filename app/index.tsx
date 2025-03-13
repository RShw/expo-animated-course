import { Button, StyleSheet, View } from "react-native";
import Animated, {
  cancelAnimation,
  runOnUI,
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withSpring,
} from "react-native-reanimated";

export default function Index() {

  //width est une shared value
  const width = useSharedValue(100);

  const animatedStyles = useAnimatedStyle(() => {
    return {
      width: width.value + 100,
    };
  });

  const changeWidth = () => {
    width.value = withRepeat(
      withSpring(Math.random() * 300),
      -1,
      true,
      (isFinisehd) => {
        console.log("Animation terminée", isFinisehd);
      }
    )
  }

  const stopAnimation = () => {
    cancelAnimation(width);
  }

  return (
    <View
      style={styles.container}
    >
      <Animated.View style={[styles.square, animatedStyles]} />
      <Button
        title="Press me"
        onPress={() => runOnUI(changeWidth)()}
      />
      <Button
        title="Stop Animation"
        onPress={stopAnimation}
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











