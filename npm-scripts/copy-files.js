const fse = require('fs-extra');

const srcPath = './src/assets/';
const destPath = './dist/assets/';

const filterFunc = (src) => {
  return /\.svg$|.\/$/.test(src); // 폴더와, 확장자가 svg인 파일만 복사
};

fse.copy(srcPath, destPath, { filter: filterFunc }, err => {
  if (err) { throw err; }
});