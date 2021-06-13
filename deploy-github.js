const ghpages = require('gh-pages');

ghpages.publish(
  'public',
  {
    branch: 'main',
    repo: 'https://github.com/justin3737/justin3737.github.io.git',
  },
  () => {
    console.log('Deploy Complete!');
  }
);