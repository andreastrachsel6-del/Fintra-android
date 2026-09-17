import React from "react";
import { StatusBar, StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <View style={styles.screen}>
      <StatusBar barStyle="light-content" backgroundColor="#10213B" />
      <View style={styles.badge}>
        <Text style={styles.badgeText}>F</Text>
      </View>
      <Text style={styles.title}>Fintra</Text>
      <Text style={styles.success}>Diagnose erfolgreich</Text>
      <Text style={styles.text}>
        Die technische Grund-App läuft stabil auf diesem Gerät.
      </Text>
      <Text style={styles.version}>Diagnoseversion 0.1.1</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 32,
    backgroundColor: "#10213B",
  },
  badge: {
    width: 78,
    height: 78,
    borderRadius: 39,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#D5AD62",
    marginBottom: 22,
  },
  badgeText: {
    color: "#10213B",
    fontSize: 36,
    fontWeight: "800",
  },
  title: {
    color: "#FFFFFF",
    fontSize: 34,
    fontWeight: "800",
  },
  success: {
    color: "#76D7B2",
    fontSize: 18,
    fontWeight: "700",
    marginTop: 14,
  },
  text: {
    color: "#C4CEDA",
    fontSize: 15,
    lineHeight: 22,
    textAlign: "center",
    marginTop: 10,
  },
  version: {
    color: "#8190A3",
    fontSize: 12,
    marginTop: 28,
  },
});
