import { build, BuildOptions } from "esbuild";

const options: BuildOptions = {
  entryPoints: ["./src/content.ts"],
  sourcemap: "inline",
  outdir: "out",
  bundle: true,
  minify: false,
};

build(options).catch(() => {
  console.error("Build failed");
  process.exit(1);
});
