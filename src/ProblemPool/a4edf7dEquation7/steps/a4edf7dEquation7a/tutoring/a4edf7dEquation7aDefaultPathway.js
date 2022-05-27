var hints = [{id: "a4edf7dEquation7a-h1", type: "hint", dependencies: [], title: "Assumption", text: "Assume the travel time for Joni is m and the travel time for Kelly is n", variabilization: {}}, {id: "a4edf7dEquation7a-h2", type: "hint", dependencies: ["a4edf7dEquation7a-h1"], title: "Translation", text: "Kelly left half an hour later, so $$n=m-\\frac{1}{2}$$", variabilization: {}}, {id: "a4edf7dEquation7a-h3", type: "hint", dependencies: ["a4edf7dEquation7a-h1"], title: "Translation", text: "$$Speed Time=Distance$$, so $$65m=78n$$", variabilization: {}}, {id: "a4edf7dEquation7a-h4", type: "hint", dependencies: ["a4edf7dEquation7a-h2", "a4edf7dEquation7a-h3"], title: "Addition", text: "Combining the two equation together", variabilization: {}}, {id: "a4edf7dEquation7a-h5", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["3"], dependencies: ["a4edf7dEquation7a-h4"], title: "Calculation", text: "What is the value of m when $$13m=39$$?", variabilization: {}}, {id: "a4edf7dEquation7a-h6", type: "hint", dependencies: [], title: "Calculation", text: "We want to find n, so find the value of n with the known value of m", variabilization: {}}, ]; export {hints};