import { StyleSheet, Text, View } from "react-native";
import React from "react";

export default function DemoText() {
  return (
    <View>
      <Text style={styles.txtstyle}>This is Demo Package of React-Native</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  txtstyle: { fontSize: 18, fontWeight: "700", color: "black" },
});
