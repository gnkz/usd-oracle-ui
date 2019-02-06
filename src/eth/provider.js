import { providers } from "ethers";

const provider = new providers.JsonRpcProvider(process.env.REACT_APP_RPC_ENDPOINT);

export default provider;
