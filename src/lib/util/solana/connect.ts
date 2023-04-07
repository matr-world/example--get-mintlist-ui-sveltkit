import { Connection } from "@solana/web3.js";

const { HELIUS_KEY } = process.env;

export default () => new Connection(
    `https://rpc.helius.xyz/?api-key=${HELIUS_KEY}`,
    "confirmed"
);
