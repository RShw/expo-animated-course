import { Button, StyleSheet, View } from "react-native";
import Animated, {
  Easing,
  runOnUI,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
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
    width.value = withTiming(
      Math.random() * 50,
      {
        duration: 500,
        easing: Easing.inOut(Easing.ease),
      },
      (isFinished) => {
        console.log("is animation properly terminate ?", isFinished);
      }
    )
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











