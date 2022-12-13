import type { Config } from "@jest/types";

export default async (): Promise<Config.InitialOptions> => {
    return {
        preset: "ts-jest",
        testTimeout: 20000,
        globalSetup: "./jest.setup.ts",
        testRegex: "/__tests__/.*\\.test\\.ts$",
        transform: {
            "^.+\\.tsx?$": "ts-jest"
        },
        testPathIgnorePatterns: [
            "<rootDir>/gen/"
        ],
        modulePathIgnorePatterns: [
            "<rootDir>/gen/"
        ],
        collectCoverage: true,
        collectCoverageFrom: [
            "{src,lib,srv}/**/!(*.+(s|S)pec|*.+(t|T)est).+(cjs|mjs|js|ts|jsx|tsx|html|vue)",
            "!**/__tests__/*"
        ]
    };
};