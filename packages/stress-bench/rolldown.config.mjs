
import { defineConfig } from "rolldown";
import replace from "@rollup/plugin-replace";

const isBuild = true;

export default defineConfig({
	input: "./index.jsx",
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
		".css": "empty"
	}
});
