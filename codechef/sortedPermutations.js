var finalSets = [];
function permutations(S, i, currentList) {
  if (currentList.join("").length === S.length) {
    finalSets.push(currentList);
    return;
  }
  let new_i = i + 1;
  let temp_currentList = currentList.slice(0);
  let element = S[i];
  currentList.push(element);
  temp_currentList[temp_currentList.length - 1] =
    temp_currentList[temp_currentList.length - 1].toString() +
    element.toString();
  let leftTree = permutations(S, new_i, currentList);
  let rightTree = permutations(S, new_i, temp_currentList);
}

permutations("123456", 1, ["1"]);
console.log(finalSets);
