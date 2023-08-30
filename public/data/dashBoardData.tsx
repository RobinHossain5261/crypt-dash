import bitcoin from "@/../public/images/bitcoin.png";
import binance from "@/../public/images/binance.png";
import litecoin from "@/../public/images/litecoin.png";
import ethereum from "@/../public/images/ethereum.png";
import BitcoinChart from "@/components/chart/BitcoinChart";
import EthereumChart from "@/components/chart/EthereumChart";
import LitecoinChart from "@/components/chart/LitecoinChart";
import BinanceChart from "@/components/chart/BinanceChart";

export const smallCharts = [
  {
    id: 1,
    name: "Bitcoin",
    price: "$1200.00",
    img: bitcoin,
    chart: <BitcoinChart />,
  },
  {
    id: 2,
    name: "Ethereum",
    price: "$100.00",
    img: ethereum,
    chart: <EthereumChart />,
  },
  {
    id: 3,
    name: "Litecoin",
    price: "$2500.00",
    img: litecoin,
    chart: <LitecoinChart />,
  },
  {
    id: 4,
    name: "Binance",
    price: "$3200.00",
    img: binance,
    chart: <BinanceChart />,
  },
];
