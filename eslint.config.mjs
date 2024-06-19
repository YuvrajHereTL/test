// @ts-check
import withNuxt from "./.nuxt/eslint.config.mjs";

export default withNuxt({
  rules: {
    "no-undef": "error",
  },
  ignores: ["*.config.ts", "*.config.js"],
});
// Your custom configs here
