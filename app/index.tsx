import { useEffect } from "react";
import { StyleSheet, View } from "react-native";
import Animated, {
  Extrapolation,
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withSequence,
  withTiming,
} from "react-native-reanimated";

export default function Index() {

  const scale = useSharedValue(0.5);

  const animatedScaleStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          scale: interpolate(
            scale.value,
            [0, 1],
            [0.5, 1.5],
            Extrapolation.CLAMP
          )
        },
      ],
    };
  });

  useEffect(() => {
    scale.value = withRepeat(
      withSequence(
        withTiming(1, { duration: 1500 }),
        withTiming(0, { duration: 1500 }),
      ),
      -1,
      true
    );
  }, [])


  return (
    <View
      style={styles.container}
    >
      <Animated.View
        style={[styles.square, animatedScaleStyle]}
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
    width: 100,
    height: 100,
    backgroundColor: "lightblue",
    borderRadius: 12,
  }
});











