const names = ["abbas", "ali", "mhmd", "hussein"];

exports.randomNames = () => {
  randomName = names[Math.floor(Math.random() * names.length)];
  return randomName;
};
