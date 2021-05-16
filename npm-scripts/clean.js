const fs = require('fs');

const PATHS = {
  // lib: './lib',
  dist: './dist'
};

const target = PATHS[process.argv[2]]; // 실행 인자 입력받음

fs.rmdir(target, { recursive: true }, err => {
  if (err) { throw err; }
});