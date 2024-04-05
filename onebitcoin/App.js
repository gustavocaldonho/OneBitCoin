import React from "react";
import { StyleSheet, StatusBar, SafeAreaView, Platform } from "react-native";

import CurrentPrice from "./src/components/CurrentPrice";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      {/* Onde fica as informações de wi-fi, bateria e hora na parte superior da tela */}
      <StatusBar backgroundColor="#f50d41" barStyle="dark-content" />
      <CurrentPrice />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000000",
    alignItems: "center",
    paddingTop: Platform.OS === "android" ? 40 : 0, //somente aplicado para android
  },
});
