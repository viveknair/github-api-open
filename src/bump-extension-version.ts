import fs from "fs";
import semver from "semver";
import prettier from "prettier";

async function main() {
  const packageJson = JSON.parse(fs.readFileSync("./package.json").toString());

  const manifestJson = JSON.parse(
    fs.readFileSync("./static/manifest.json").toString()
  );

  const nextVersion = semver.inc(packageJson.version, "patch");

  packageJson.version = nextVersion;
  manifestJson.version = nextVersion;

  const options = await prettier.resolveConfig("./");

  if (!options) {
    throw new Error("Prettier configuration not found");
  }

  options.parser = "json";

  const formattedPackageJson = prettier.format(
    JSON.stringify(packageJson),
    options
  );

  const formattedManifestJson = prettier.format(
    JSON.stringify(manifestJson),
    options
  );

  fs.writeFileSync("./package.json", formattedPackageJson);
  fs.writeFileSync("./static/manifest.json", formattedManifestJson);
}

main();

export {};
