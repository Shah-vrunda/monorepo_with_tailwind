import { config } from "@repo/jest-config";
import nextJest from "next/jest.js";

const createJestConfig = nextJest({
  dir: "./",
});

export default createJestConfig(config);
