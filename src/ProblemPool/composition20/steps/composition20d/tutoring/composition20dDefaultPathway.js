var hints = [{id: "composition20d-h1", type: "hint", dependencies: [], title: "Division", text: "Remember that $$\\frac{f}{g}$$ is the same as (f/g)(x). All we have to do is divide the two functions."}, {id: "composition20d-h2", type: "hint", dependencies: ["composition20d-h1"], title: "Division", text: "Let's write the quotient of these functions as a fraction: (3x**2)/(sqrt(x-5). Because the bottom of the function is a square root, we need to rationalize the function by getting rid of the square root in the denominator."}, {id: "composition20d-h3", type: "hint", dependencies: ["composition20d-h2"], title: "Rationalization", text: "To do this, we need to square $$\\sqrt{x-5}$$ so that the denominator doesn't have a square root. So, we have to multiply (3x**2)/(sqrt(x-5) by (sqrt(x-5))/(sqrt(x-5))."}, {id: "composition20d-h4", type: "hint", dependencies: ["composition20d-h3"], title: "Multiplication", text: "Since there is no way to simplify the product of $$3x^2 \\sqrt{x-5}$$ this leaves us with ((3x**2)(sqrt(x-5))/(x-5)"}, ]; export {hints};