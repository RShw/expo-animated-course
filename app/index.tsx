import { useState } from "react";
import { Button, StyleSheet, View } from "react-native";
import Animated, {
  FadeIn,
  FadeOut,
  LayoutAnimationConfig
} from "react-native-reanimated";

export default function Index() {

  const [visible, setVisible] = useState(true)

  return (
    <View
      style={styles.container}
    >
      <LayoutAnimationConfig skipEntering skipExiting>
        {visible &&
          <Animated.View
            style={styles.square}
            exiting={FadeOut.duration(500)}
            entering={FadeIn.duration(500)}
          />
        }
      </LayoutAnimationConfig>
      <Button
        title="Change Visilbility"
        onPress={() => setVisible(!visible)}
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











