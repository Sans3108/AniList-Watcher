import { exec } from 'child_process';
import CleanCSS from 'clean-css';
import { existsSync, rmSync } from 'fs';
import { copy, remove } from 'fs-extra';
import { readFile, writeFile } from 'fs/promises';
import { glob } from 'glob';
import { minify as HtmlMinify } from 'html-minifier-terser';
import { join, normalize, relative } from 'path';
import { minify } from 'terser';
import { promisify } from 'util';
import manifest from './src/manifest.json' assert { type: 'json' };

const execAsync = promisify(exec);

async function build() {
  console.time(`- ${manifest.name} v${manifest.version} was built and minified in`);

  // Removing "out" if exists
  if (existsSync('out')) {
    rmSync('out', { recursive: true, force: true });
    console.log(`- Removed "out" folder`);
  }

  // Copying everything from "src" to "out/extension" and compiling TS
  await Promise.all([
    copy('src', 'out/extension').then(() => console.log(`- Copied contents of "src" to "out/extension"`)),
    execAsync('tsc -p config/tsconfig.json').then(() => console.log(`- Compiled TypeScript`))
  ]);

  // Replacing TS files from "out/extension" with files from "out/js"
  // Also minifying everying
  const tsFiles = glob.sync('out/extension/**/*.ts');
  const cssFiles = glob.sync('out/extension/**/*.css');
  const htmlFiles = glob.sync('out/extension/**/*.html');

  await Promise.all([
    ...tsFiles.map(async tsFile => {
      if (tsFile.endsWith('global.d.ts')) return;

      const jsFile = normalize(join('out', 'js', relative('out/extension', tsFile))).replace(/\.ts$/, '.js');

      // Read the JS file
      const data = await readFile(jsFile, { encoding: 'utf8' });

      // Minimize
      const result = await minify(data);
      if (!result.code) throw new Error(`Failed to minify ${jsFile}`);

      // Write the minified code to the new file
      await writeFile(tsFile.replace(/\.ts$/, '.js'), result.code);
      console.log(`- Written (minified) ${tsFile.replace(/\.ts$/, '.js')}`);
    }),
    ...cssFiles.map(async cssFile => {
      // Read the CSS file
      const data = await readFile(cssFile, { encoding: 'utf8' });

      // Minimize
      const result = new CleanCSS().minify(data).styles;

      // Write the minified CSS to the same file
      await writeFile(cssFile, result);
      console.log(`- Written (minified) ${cssFile}`);
    }),
    ...htmlFiles.map(async htmlFile => {
      // Read the HTML file
      const data = await readFile(htmlFile, { encoding: 'utf8' });

      // Minimize
      const result = await HtmlMinify(data, { collapseWhitespace: true, minifyCSS: true, minifyJS: true });

      // Write the minified HTML to the same file
      await writeFile(htmlFile, result);
      console.log(`- Written (minified) ${htmlFile}`);
    }),
    // Removing "out/extension/**/*.ts"
    ...tsFiles.map(tsFile => remove(tsFile).then(() => console.log(`- Removed ${tsFile}`)))
  ]);

  // Removing "out/js"
  await remove('out/js').then(() => console.log(`- Removed "out/js" folder`));

  // Copy all files from "out/extension" to "out"
  await copy('out/extension', 'out', { overwrite: true }).then(() => console.log(`- Moved everything from "out/extension" to "out"`));

  // Remove the "out/extension" folder
  await remove('out/extension').then(() => console.log(`- Removed "out/extenson"`));

  console.log();
  console.timeEnd(`- ${manifest.name} v${manifest.version} was built and minified in`);
}

build().catch(e => {
  if (e.stdout) {
    console.log(e.stdout);
  } else {
    console.log(e);
  }
});
