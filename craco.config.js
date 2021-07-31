const path = require("path"),
  alias = require("./src/config/aliases");

const source = "./src",
  aliases = alias(source);

const resolvedAliases = Object.fromEntries(
  Object.entries(aliases).map(([key, value]) => [
    key,
    path.resolve(__dirname, value),
  ])
);

module.exports = {
  webpack: {
    alias: resolvedAliases,
  },
};
