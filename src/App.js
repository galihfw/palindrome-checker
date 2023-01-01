import React, { useMemo, useState } from "react";
export default function App() {
  const [word, setWord] = useState("");
  const isPalindrome = useMemo(() => {
    return word === word.split("").reverse().join("");
  }, [word]);
  return (
    <div className="App">
      <form>
        <div>
          <h1>Palindrome Checker</h1>
          <p>
            "992299’", "12291", 982289, 22022022, 2301, 2013, 1001, 756564,
            1011, 766567, 756546, 2002, 91019, 765567,
          </p>
          <label>word to check</label>
          <input value={word} onChange={(e) => setWord(e.target.value)} />
        </div>
      </form>
      <div>Is Palindrome:{isPalindrome ? "Yes" : "No"}</div>
      <div>
        <p>Palindrome : 992299,982289,22022022,1001,2002,91019,765567</p>
      </div>
    </div>
  );
}
