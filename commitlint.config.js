module.exports = {
  extends: ["@commitlint/config-conventional"],
  ignores: [(commit) => commit.startsWith("Merge pull request")],
  parserPreset: {
    parserOpts: {
      from: "HEAD",
    },
  },
};
