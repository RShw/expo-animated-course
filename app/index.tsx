import { useState } from "react";
import { Button, StyleSheet, View } from "react-native";
import Animated, {
  Easing,
  Keyframe,
  PinwheelIn,
} from "react-native-reanimated";

export default function Index() {

  const [isVisible, setIsVisible] = useState(false)

  const keyframeExiting = new Keyframe({
    0: {
      transform: [{ rotate: '0deg' }, { scale: 1 }],
      opacity: 1,
    },
    45: {
      transform: [{ rotate: '100deg' }, { scale: 1.2 }],
      opacity: 1,
      easing: Easing.exp,
    },
    100: {
      transform: [{ rotate: '45deg' }, { scale: 0.1 }],
      opacity: 0,
    },
  })
    .delay(500)
    .duration(2000)

  return (
    <View
      style={styles.container}
    >
      {isVisible &&
        <Animated.View
          entering={PinwheelIn.duration(1000)}
          exiting={keyframeExiting}
          style={styles.square}
        />
      }
      <Button
        title="Press me"
        onPress={() => setIsVisible(!isVisible)}
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











