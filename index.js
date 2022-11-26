// Problem #1: Multiple Pointers Pattern

const subsequence = (str1, str2) => {
  let string1Index = 0;
  let string2Index = 0;

  while (string1Index < str1.length && string2Index < str2.length) {
    if (str1[string1Index] === str2[string2Index]) {
      string1Index++;
      string2Index++;
    } else {
      string2Index++;
    }
  }

  return str1.length === string1Index;
};

subsequence("abc", "acb");

// Problem #2: Sliding Window Pattern
const longestSubstringInString = (str) => {
  let letters = {};
  let res = "";
  if (str === "") {
    return 0;
  } else {
    str.split("").every((letter) => {
      if (letters[letter]) {
        return;
      }
      res = res + letter;
      letters[letter] = true;
      return true;
    });
    return res;
  }
};

longestSubstringInString("rithmschool");
