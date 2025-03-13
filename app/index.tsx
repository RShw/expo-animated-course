import { useState } from "react";
import { Button, StyleSheet, View } from "react-native";
import Animated, {
  FadeIn,
  FadeOut,
  LinearTransition
} from "react-native-reanimated";

export default function Index() {

  const [expanded, setExpanded] = useState(false)
  const [visible, setVisible] = useState(false)

  return (
    <View
      style={styles.container}
    >
      {visible &&
        <Animated.View
          layout={LinearTransition.springify()}
          exiting={FadeOut.duration(500)}
          entering={FadeIn.duration(500)}
          style={[
            styles.square,
            { height: expanded ? 200 : 100 }
          ]}
        />
      }
      <Button
        title="Press me"
        onPress={() => setExpanded(!expanded)}
      />
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











