import React from "react";
import { StyleSheet, StatusBar, SafeAreaView, Platform } from "react-native";

import CurrentPrice from "./src/components/CurrentPrice";
import HistoryGraphic from "./src/components/HistoryGraphic";
import QuotationsList from "./src/components/QuotationsList";
import QuotationsItems from "./src/components/QuotationsList/QuotationsItems";

function addZero(number) {
  if (number <= 9) {
    return "0" + number;
  }
  return number;
}

function url(qtdDays) {
  const date = new Date();
  const listLastDays = qtdDays;
  const end_date = `${date.getFullYear()}-${addZero(
    date.getMonth() + 1
  )}-${addZero(date.getDate())}`;
  date.setDate(data.getDate() - listLastDays); //voltando alguns dias (passados como parâmetro)
  const start_date = `${date.getFullYear()}-${addZero(
    date.getMonth() + 1
  )}-${addZero(date.getDate())}`;
  return `https://api.coindesk.com/v1/bpi/historical/close.json?start=${start_date}&${(end =
    end_date)}`;
}

async function getListCoins(url) {
  let response = await fetch(url);
  let returnApi = await response.json();
  let selectListQuotations = returnApi.bpi;
  const queryCoinsList = Object.keys(selectListQuotations).map((key) => {
    return {
      data: key.split("-").reverse().join("/"),
      valor: selectListQuotations[key],
    };
  });
  let data = queryCoinsList.reverse();
  return data;
}

async function getPriceCoinsGraphic(url) {
  let responseG = await fetch(url);
  let returnApiG = await responseG.json();
  let selectListQuotationsG = returnApiG.bpi;
  const queryCoinsList = Object.keys(selectListQuotationsG).map(
    (key) => selectListQuotationsG[key]
  );
  let dataG = queryCoinsList.reverse();
  return dataG;
}

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      {/* Onde fica as informações de wi-fi, bateria e hora na parte superior da tela */}
      <StatusBar backgroundColor="#f50d41" barStyle="dark-content" />
      <CurrentPrice />
      <HistoryGraphic />
      <QuotationsList />
      <QuotationsItems />
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
