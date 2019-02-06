import { Contract } from "ethers";
import provider from "./provider";
import metadata from "./metadata.json";

const contract = new Contract(process.env.REACT_APP_CONTRACT_ADDRESS, metadata.abi, provider);

export default contract;
