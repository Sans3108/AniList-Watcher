console.time('build');

const { exec } = require('child_process');
const { existsSync, rmSync } = require('fs');
const { copy } = require('fs-extra');
const glob = require('glob');
const path = require('path');
const util = require('util');

const execAsync = util.promisify(exec);
if (existsSync('out')) rmSync('out', { recursive: true, force: true });

copy('src', 'out/extension').then(() => {
  execAsync('tsc -p config/tsconfig.json').then(() => {
    let tsFiles = glob.sync('out/extension/**/*.ts');
    tsFiles.forEach(tsFile => {
      let jsFile = path.normalize(path.join('out', 'js', path.relative('out/extension', tsFile))).replace(/\.ts$/, '.js');
      if (existsSync(jsFile)) {
        rmSync(tsFile, { force: true });
        copy(jsFile, tsFile.replace(/\.ts$/, '.js'));
      }
    });

    console.timeEnd('build');
  });
});
