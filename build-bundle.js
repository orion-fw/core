import esbuild from "esbuild";
import fsExtra from "fs-extra";
import path from 'path';

const IS_WATCH_MODE = process.env.IS_WATCH_MODE;

const TARGET_ENTRIES = [
  {
    target: "es2020",
    entryPoints: ["src/index.ts"],
    format: "esm",
    outfile: "./dist/index.js",
  },
];

const buildBundle = async () => {
  try {
    const baseOptions = {
      logLevel: "info",
      bundle: true,
      charset: "utf8",
      minifyWhitespace: true,
      absWorkingDir: process.cwd(),
    };

    for (const targetOpts of TARGET_ENTRIES) {
      const mergedOpts = { ...baseOptions, ...targetOpts };

      if (IS_WATCH_MODE) {
        mergedOpts.watch = {
          onRebuild(error) {
            if (error)
              console.error(
                `[ESBuild Watch] (${targetOpts.entryPoints[0]}) Failed to rebuild bundle`
              );
            else
              console.log(
                `[ESBuild Watch] (${targetOpts.entryPoints[0]}) Sucessfully rebuilt bundle`
              );
          },
        };
      }

      const { errors } = await esbuild.build(mergedOpts);

      if (errors.length) {
        console.error(`[ESBuild] Bundle failed with ${errors.length} errors`);
        process.exit(1);
      }
    }
  } catch (e) {
    console.log("[ESBuild] Build failed with error");
    console.error(e);
    process.exit(1);
  }
};

await buildBundle()

const copyWebBuildFolder = async () => {
  console.log('moin')
 const srcDir = path.join(process.cwd(), 'src/web/build');
  const destDir = path.join(process.cwd(), 'dist/web/build');

  
  try {
    await fsExtra.copy(srcDir, destDir);
    console.log('Public folder copied to dist.');
  } catch (err) {
    console.error('Error copying public folder:', err);
  }
};
copyWebBuildFolder().catch((err) => {console.log(err); process.exit(1)});