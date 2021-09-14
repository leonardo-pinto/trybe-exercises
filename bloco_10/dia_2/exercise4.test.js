const { it, expect } = require('@jest/globals');
const { describe } = require('yargs');
const { getRepos } = require('./exercise4.js');

it('contains repository', async () => {
  expect.assertions(2);
  const url = ('https://api.github.com/orgs/tryber/repos');
  return getRepos(url).then(repository => {
    expect(repository).toContain('sd-01-week4-5-project-todo-list');
    expect(repository).toContain('sd-01-week4-5-project-meme-generator')
  });
});