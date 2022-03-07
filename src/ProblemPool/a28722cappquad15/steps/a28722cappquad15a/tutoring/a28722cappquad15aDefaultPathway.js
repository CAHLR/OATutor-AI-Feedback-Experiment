var hints = [{id: "a28722cappquad15a-h1", type: "hint", dependencies: [], title: "Identify what we are looking for.", text: "We are looking for the height and width", variabilization: {}}, {id: "a28722cappquad15a-h2", type: "hint", dependencies: ["a28722cappquad15a-h1"], title: "Name what we are looking for.", text: "Let h $$=$$ the height of the triangle, $$6+2h$$ $$=$$ the width of the triangle", variabilization: {}}, {id: "a28722cappquad15a-h3", type: "hint", dependencies: ["a28722cappquad15a-h2"], title: "Translate", text: "We know the area. Write the formula for the area of a triangle $$A=\\frac{1}{2} b h$$.", variabilization: {}}, {id: "a28722cappquad15a-h4", type: "hint", dependencies: ["a28722cappquad15a-h3"], title: "Solve the equation. Substitue in the values", text: "$$\\frac{1}{2} \\left(6+2h\\right) h=88$$", variabilization: {}}, {id: "a28722cappquad15a-h5", type: "hint", dependencies: ["a28722cappquad15a-h4"], title: "Distribute", text: "$$3h+h^2$$ $$=$$ 88", variabilization: {}}, {id: "a28722cappquad15a-h6", type: "hint", dependencies: ["a28722cappquad15a-h5"], title: "Rewrite in standard form.", text: "$$h^2+3h-88=0$$", variabilization: {}}, {id: "a28722cappquad15a-h7", type: "hint", dependencies: ["a28722cappquad15a-h6"], title: "Solve the equation using the Quadratic Formula.", text: "Idenfity the a, b, c value: $$a=1$$, $$b=3$$, $$c=-88$$.", variabilization: {}}, {id: "a28722cappquad15a-h8", type: "hint", dependencies: ["a28722cappquad15a-h7"], title: "Solve the equation using the Quadratic Formula, $$h=\\frac{\\left(-b\\pm\\sqrt{b^2-4a c}\\right)}{2a}$$.", text: "$$h=\\frac{\\left(-3\\pm19\\right)}{2}$$", variabilization: {}}, {id: "a28722cappquad15a-h9", type: "hint", dependencies: ["a28722cappquad15a-h8"], title: "Rewrite to show two solutions.", text: "$$h=-11$$, $$h=8$$", variabilization: {}}, {id: "a28722cappquad15a-h10", type: "hint", dependencies: ["a28722cappquad15a-h9"], title: "Since h is the height of a triangle, it must be positive", text: "$$h=8$$", variabilization: {}}, {id: "a28722cappquad15a-h11", type: "hint", dependencies: ["a28722cappquad15a-h10"], title: "Solve for width.", text: "width $$=$$ $$6+2h$$ $$=$$ 22", variabilization: {}}, ]; export {hints};