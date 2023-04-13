import { Box, Typography } from "@mui/material";
import React from "react";
import { AdvancedChart, TickerTape } from "react-tradingview-embed";

const TradingViews = () => {
  // symbols to display in the Ticker Tap
  const symbol = [
    {
      proName: "FOREXCOM:SPXUSD",
      title: "S&P 500",
    },
    {
      proName: "FOREXCOM:NSXUSD",
      title: "US 100",
    },
    {
      proName: "FX_IDC:EURUSD",
      title: "EUR/USD",
    },
    {
      proName: "BITSTAMP:BTCUSD",
      title: "Bitcoin",
    },
    {
      proName: "BITSTAMP:ETHUSD",
      title: "Ethereum",
    },
    {
      description: "Tron",
      proName: "BINANCE:TRXUSDT",
    },
    {
      description: "Cardano",
      proName: "BINANCE:ADAUSDT",
    },
    {
      description: "Shiba",
      proName: "KUCOIN:SHIBUSDT",
    },
    {
      description: "Tether",
      proName: "CRYPTOCAP:USDT",
    },
  ];

  return (
    <div>
      <Box>
        <TickerTape
          widgetProps={{
            symbols: symbol,
            theme: "light",
          }}
        />
      </Box>

      <Box sx={{ mt: 4 }}>
        <AdvancedChart
          widgetProps={{
            theme: "light",
            height: "500px",
            allow_symbol_change: "true",
            symbol: "BINANCE:BTCUSDT",
          }}
        />
      </Box>
      <Box sx={{ mt: 4 }}>
        <Typography variant="caption" textAlign="center">
          AstrofxFast © 2023
        </Typography>
      </Box>
    </div>
  );
};

export default TradingViews;