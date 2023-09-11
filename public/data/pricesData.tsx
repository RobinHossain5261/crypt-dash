import Bitcoin from "@/../public/images/dashboardTable/bitcoin.png";
import Ethereum from "@/../public/images/dashboardTable/ethereum.png";
import Litecoin from "@/../public/images/dashboardTable/litecoin.png";
import Stellar from "@/../public/images/dashboardTable/stellar.png";
import Dogecoin from "@/../public/images/dashboardTable/dogecoin.png";
import Tether from "@/../public/images/dashboardTable/tether.png";
import achain from "@/../public/images/dashboardTable/achain.png";
import ellaism from "@/../public/images/dashboardTable/ellaism.png";
import tron from "@/../public/images/dashboardTable/tron.png";
import binance from "@/../public/images/dashboardTable/binance.png";

import graph from "@/../public/images/graph/Graph.png";
import graph1 from "@/../public/images/graph/Graph1.png";
import graph2 from "@/../public/images/graph/Graph2.png";
import graph3 from "@/../public/images/graph/Graph3.png";

export const prices = [
  {
    id: 1,
    name: "Ethereum (ETH)",
    price: "$326,600",
    parcent: "+2.33%",
    color: "#3EBF81",
    color1: "#FC774A",
    cap: "$303,800",
    volume: "$880,423",
    img: Ethereum,
    charts: graph,
    isActive: false,
  },
  {
    id: 2,
    name: "Bitcoin (BTC)",
    price: " $657,200 ",
    parcent: "-1.03%",
    color: "#FC774A",
    cap: "$535,600",
    volume: "$880,423",
    img: Bitcoin,
    charts: graph1,
    isActive: false,
  },
  {
    id: 3,
    name: "Loopring (LRC)",
    price: "$349,400",
    parcent: "-0.03%",
    color: "#FC774A",
    cap: " $611,600 ",
    volume: "$880,423",
    img: Stellar,
    charts: graph3,
    isActive: false,
  },
  {
    id: 4,
    name: "Litecoin (LTC)",
    price: " $653,400 ",
    parcent: "+5.93%",
    color: "#3EBF81",
    cap: " $444,400 ",
    volume: "$880,423",
    img: Litecoin,
    charts: graph2,
    isActive: false,
  },
  {
    id: 5,
    name: "Dogecoin (Doge)",
    price: "$311,400",
    parcent: "+1.23%",
    color: "#3EBF81",
    cap: "$490,000",
    volume: "$880,423",
    img: Dogecoin,
    charts: graph,
    isActive: true,
  },
  {
    id: 6,
    name: "Tether (USDT)",
    price: "$581,200",
    parcent: "+3.33%",
    color: "#3EBF81",
    cap: " $372,200 ",
    volume: "$880,423",
    img: Tether,
    charts: graph2,
  },
  {
    id: 7,
    name: "Achain (ACT)",
    price: "$471,000",
    parcent: "-0.33%",
    color: "#FC774A",
    cap: " $471,000 ",
    volume: "$880,423",
    img: Litecoin,
    charts: graph3,
  },
  {
    id: 8,
    name: "Ellaism (ELLA)",
    price: " $676,200 ",
    parcent: "+3.99%",
    color: "#3EBF81",
    cap: "$440,600 ",
    volume: "$880,423",
    img: ellaism,
    charts: graph2,
  },
  {
    id: 9,
    name: "TRON (TRX)",
    price: " $524,200",
    parcent: "+2.88%",
    color: "#3EBF81",
    cap: "$562,200 ",
    volume: "$880,423",
    img: tron,
    charts: graph,
  },
  {
    id: 10,
    name: "Binance (BNB)",
    price: "$10791.43",
    parcent: "+5.93%",
    color: "#3EBF81",
    cap: "$596,400",
    volume: "$880,423",
    img: binance,
    charts: graph2,
  },
];
