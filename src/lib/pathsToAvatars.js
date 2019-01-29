/* eslint-disable import/no-dynamic-require */
/* eslint-disable global-require */
const paths = [];

for (let i = 1; i <= 36; i += 1) {
  const pathToAvatar = require(`../images/avatars/${i}.jpg`);
  paths.push(pathToAvatar);
}

export default paths;
