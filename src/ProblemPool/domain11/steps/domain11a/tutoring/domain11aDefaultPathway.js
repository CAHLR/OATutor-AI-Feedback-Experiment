var hints = [{id: "domain11a-h1", type: "hint", dependencies: [], title: "Number of Formulas Needed", text: "Two different formulas will be needed."}, {id: "domain11a-h2", type: "hint", dependencies: ["domain11a-h1"], title: "$$0<n<10$$ Equation", text: "For n-values under 10, C=5n."}, {id: "domain11a-h3", type: "hint", dependencies: ["domain11a-h2"], title: "$$n \\geq 10$$ Equation", text: "For values of n that are 10 or greater, $$C=50$$"}, {id: "domain11a-h4", type: "hint", dependencies: ["domain11a-h3"], title: "Answer", text: "C(n)={5n if $$0<n<10$$ 50 if n>=10}"}, ]; export {hints};