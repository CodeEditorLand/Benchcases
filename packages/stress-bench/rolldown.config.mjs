import path from "node:path";
import replace from "@rollup/plugin-replace";
import { defineConfig } from "rolldown";

const isBuild = true;

export default defineConfig({
	input: path.resolve(import.meta.dirname, "./index.jsx"),
	// NOTE: Rolldown doesn't support CSS yet
	// external: ["./*.css"],
	resolve: {
		conditionNames: ["import", "browser"],
		extensions: [".tsx", ".jsx", ".ts", ".js", ".json"],
		mainFields: ["module", "main"],
	},
	plugins: [
		// replace({
		// 	"process.env.NODE_ENV": JSON.stringify("production"),
		// }),
	],
	// NOTE: Rolldown doesn't support lowering syntaxes yet
	output: {
		dir: "./dist-rolldown",
		sourcemap: isBuild ? false : "inline",
	},
	moduleTypes: {
		".css": "empty",
	},
});
