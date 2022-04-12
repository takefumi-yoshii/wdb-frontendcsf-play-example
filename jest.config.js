module.exports = {
  testEnvironment: "jsdom",
  testRunner: "jest-circus/runner",
  transform: {
    "^.+\\.(ts|tsx)$": "esbuild-jest",
    ".+\\.(css|styl|less|sass|scss|png|jpg|ttf|woff|woff2)$":
      "jest-transform-stub",
  },
  globals: { "esbuild-jest": { tsconfig: "<rootDir>/tsconfig.jest.json" } },
  globalSetup: "./jest.setup.js",
  moduleFileExtensions: ["js", "jsx", "ts", "tsx"],
  moduleNameMapper: {
    "^@/(.+)": "<rootDir>/src/$1",

  },
  testPathIgnorePatterns: ["<rootDir>/node_modules/"],
};
