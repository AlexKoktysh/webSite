import _ from "lodash";

const repositories = {};
const requireComponent = require.context("./", true, /\.js$/);

requireComponent.keys().forEach((fileName) => {
  const repository = requireComponent(fileName).default;
  const repositoryURL = fileName
    .replace(/^\.\//, "")
    .replace(/\.\w+$/, "")
    .replace("/", ".");

  if (repositoryURL === "index") {
    return;
  }

  _.set(repositories, repositoryURL, repository);
});

export default repositories;
