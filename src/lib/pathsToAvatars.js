/* eslint-disable import/no-dynamic-require */
/* eslint-disable global-require */
const paths = [];


for (let i = 1; i <= 36; i += 1) {
  paths.push(require(`../images/avatars/${i}.jpg`));
}

export default paths;
