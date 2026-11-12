// ─── Grade XI ICSE (ISC) Mathematics revision notes ───────────────────────────
// screen-notes.js reads REVISION['XI ICSE Mathematics'] for Grade XI ICSE (ISC) students.

REVISION['XI ICSE Mathematics'] = [
  {
    "chapter": "Sets",
    "formulae": [
      "n(A ∪ B) = n(A) + n(B) − n(A ∩ B)",
      "n(A ∪ B ∪ C) = n(A) + n(B) + n(C) − n(A ∩ B) − n(B ∩ C) − n(C ∩ A) + n(A ∩ B ∩ C)",
      "A set with n elements has 2ⁿ subsets and 2ⁿ − 1 proper subsets",
      "A − B = A ∩ B′;  n(A − B) = n(A) − n(A ∩ B)",
      "De Morgan: (A ∪ B)′ = A′ ∩ B′ and (A ∩ B)′ = A′ ∪ B′"
    ],
    "logic": [
      "φ is a subset of every set, and every set is a subset of itself",
      "A = B exactly when A ⊂ B and B ⊂ A",
      "Order and repetition of elements do not change a set",
      "The universal set U contains every set under discussion; A′ = U − A",
      "Union, intersection are commutative, associative and distribute over each other"
    ],
    "tips": [
      "∈ links an element to a set; ⊂ links a set to a set — {2, 3} ∈ A and {2, 3} ⊂ A mean different things",
      "{0} and {φ} are not empty — each has one element",
      "In three-set problems fill the Venn diagram from the centre (all three) outwards",
      "'Only A' is A − (B ∪ C), not just n(A) − n(A ∩ B)"
    ],
    "bestPractices": [
      "Draw and label a Venn diagram before writing any counting formula",
      "Check that the regions you found add up to the total given",
      "To prove a set identity, show each side is a subset of the other"
    ]
  },
  {
    "chapter": "Relations and Functions",
    "formulae": [
      "n(A × B) = n(A) · n(B); number of relations from A to B = 2^(n(A)·n(B))",
      "(a, b) = (c, d) ⇔ a = c and b = d",
      "|x| = x (x ≥ 0), −x (x < 0); range [0, ∞)",
      "sgn x = 1, 0, −1 for x > 0, x = 0, x < 0; range {−1, 0, 1}",
      "[x] = greatest integer ≤ x; [x] = n ⇔ n ≤ x < n + 1",
      "(f ± g)(x) = f(x) ± g(x), (fg)(x) = f(x)g(x), (f/g)(x) = f(x)/g(x) with g(x) ≠ 0"
    ],
    "logic": [
      "A relation from A to B is any subset of A × B",
      "A function gives every element of the domain exactly one image",
      "Range ⊆ codomain; the range is the set of images actually attained",
      "The domain of f ± g, fg is the intersection of the domains; for f/g also remove zeros of g",
      "To find a range, set y = f(x), solve for x, and see which y give a valid x"
    ],
    "tips": [
      "[−2.3] = −3, not −2 — the greatest integer function rounds down",
      "A × B ≠ B × A unless A = B (or one is empty)",
      "Even-root expressions need the radicand ≥ 0; denominators must be ≠ 0",
      "Check end-points carefully: x²/(1 + x²) never reaches 1"
    ],
    "bestPractices": [
      "State domain restrictions before simplifying an expression",
      "Use interval notation correctly with [ ] and ( )",
      "Sketch the graph to confirm a range found algebraically"
    ]
  },
  {
    "chapter": "Trigonometric Functions",
    "formulae": [
      "π radians = 180°; 1 rad ≈ 57°16′; arc length l = rθ (θ in radians)",
      "sin(A ± B) = sin A cos B ± cos A sin B;  cos(A ± B) = cos A cos B ∓ sin A sin B",
      "tan(A ± B) = (tan A ± tan B)/(1 ∓ tan A tan B)",
      "sin 2A = 2 sin A cos A;  cos 2A = cos²A − sin²A = 1 − 2sin²A = 2cos²A − 1",
      "sin 3A = 3 sin A − 4 sin³A;  cos 3A = 4cos³A − 3 cos A",
      "sin C + sin D = 2 sin((C+D)/2) cos((C−D)/2);  cos C + cos D = 2 cos((C+D)/2) cos((C−D)/2)",
      "General solutions: sin x = sin α ⇒ x = nπ + (−1)ⁿα; cos x = cos α ⇒ x = 2nπ ± α; tan x = tan α ⇒ x = nπ + α",
      "Sine rule a/sin A = b/sin B = c/sin C = 2R;  cosine rule a² = b² + c² − 2bc cos A"
    ],
    "logic": [
      "ASTC: All positive in Q1, Sine in Q2, Tan in Q3, Cos in Q4",
      "Angles 90° ± θ, 270° ± θ switch sin ↔ cos; 180° ± θ, 360° ± θ keep the function",
      "Periods: sin, cos, sec, cosec have 2π; tan, cot have π; sin kx has 2π/k",
      "a sin x + b cos x always lies between −√(a² + b²) and √(a² + b²)",
      "Projection formula: a = b cos C + c cos B"
    ],
    "tips": [
      "Never divide both sides of a trig equation by sin x or cos x — you lose the solutions where it is zero",
      "Reject roots like sin x = 2 that lie outside [−1, 1]",
      "For half angles, decide the quadrant of x/2 before choosing the sign of the square root",
      "Check calculator mode (degree vs radian) and convert minutes: 20′ = 1/3°"
    ],
    "bestPractices": [
      "Write the identity you use before substituting values",
      "In proofs, work on one side only and reach the other",
      "Give general solutions with 'n ∈ ℤ' stated"
    ]
  },
  {
    "chapter": "Complex Numbers",
    "formulae": [
      "i = √(−1); i² = −1, i³ = −i, i⁴ = 1; iⁿ depends on n mod 4",
      "(a + ib)⁻¹ = (a − ib)/(a² + b²)",
      "|z| = √(a² + b²);  z z̄ = |z|²;  |z₁z₂| = |z₁||z₂|;  |z₁/z₂| = |z₁|/|z₂|",
      "Polar form z = r(cos θ + i sin θ), r = |z|, θ = arg z (principal value in (−π, π])",
      "√(a + ib): solve x² − y² = a, 2xy = b, x² + y² = √(a² + b²)",
      "Cube roots of unity 1, ω, ω² with ω = (−1 + i√3)/2;  1 + ω + ω² = 0, ω³ = 1"
    ],
    "logic": [
      "Two complex numbers are equal only when real parts and imaginary parts are separately equal",
      "Dividing by a complex number = multiplying by its conjugate over |z|²",
      "Find arg from the quadrant of (a, b), not from tan⁻¹(b/a) alone",
      "Conjugation is reflection in the real axis: arg z̄ = −arg z",
      "|z − z₀| is the distance between z and z₀ in the Argand plane"
    ],
    "tips": [
      "√(−4) × √(−9) = 2i × 3i = −6, not √36 = 6 — the rule √a √b = √(ab) fails for two negatives",
      "Principal argument of 1 − i is −π/4, not 7π/4",
      "Order complex numbers? Impossible — inequalities like z₁ > z₂ have no meaning",
      "Reduce large powers: iⁿ via n mod 4, ωⁿ via n mod 3"
    ],
    "bestPractices": [
      "Always write final answers in a + ib form unless asked otherwise",
      "Plot the point roughly before deciding the argument",
      "For square roots, state the sign condition from 2xy = b"
    ]
  },
  {
    "chapter": "Quadratic Equations",
    "formulae": [
      "x = [−b ± √(b² − 4ac)]/(2a);  D = b² − 4ac",
      "α + β = −b/a,  αβ = c/a",
      "Equation with roots α, β: x² − (α + β)x + αβ = 0",
      "α² + β² = (α + β)² − 2αβ;  α³ + β³ = (α + β)³ − 3αβ(α + β);  (α − β)² = (α + β)² − 4αβ",
      "Real coefficients: D > 0 real distinct, D = 0 real equal, D < 0 conjugate non-real pair"
    ],
    "logic": [
      "With real coefficients, non-real roots occur in conjugate pairs",
      "With rational coefficients and D a perfect square, roots are rational",
      "The formula still works with complex coefficients — just compute √D as a complex square root",
      "Equations like ax⁴ + bx² + c = 0 or in 2ˣ reduce to quadratics by substitution",
      "Symmetric expressions in α, β can always be written using α + β and αβ"
    ],
    "tips": [
      "Squaring to remove a root can create extraneous solutions — always substitute back",
      "−b/a, not b/a, is the sum of roots",
      "For complex coefficients, the conjugate-pair rule does NOT apply",
      "'No real roots' means D < 0; 'real roots' includes D = 0"
    ],
    "bestPractices": [
      "Write a, b, c with their signs before using formulas",
      "Verify roots by checking their sum and product",
      "State the substitution clearly when reducing to a quadratic"
    ]
  },
  {
    "chapter": "Linear Inequalities",
    "formulae": [
      "Adding/subtracting the same number keeps the inequality sign",
      "Multiplying/dividing by a negative number reverses the sign",
      "|x − a| < r ⇔ a − r < x < a + r;  |x − a| > r ⇔ x < a − r or x > a + r",
      "Rational inequality: bring to the form P(x)/Q(x) ≷ 0, then use a sign chart",
      "Half-plane ax + by ≥ c: solid boundary; ax + by > c: dashed boundary"
    ],
    "logic": [
      "A linear inequality in one variable has an interval (or ray) of solutions",
      "In two variables, ax + by + c = 0 splits the plane into two half-planes",
      "Test a point not on the line (usually the origin) to choose the side",
      "A system's solution is the common (overlapping) region of all half-planes",
      "Wavy curve: mark zeros of numerator and denominator; signs alternate across simple factors"
    ],
    "tips": [
      "Never cross-multiply in (x + 3)/(x − 2) ≤ 2 — the denominator's sign is unknown",
      "Values that make the denominator zero are always excluded",
      "Check whether the variable is in ℕ, ℤ or ℝ before writing the solution set",
      "For ≤ or ≥, the end-points are included only where the expression is defined"
    ],
    "bestPractices": [
      "Show the number-line or sign chart, not just the final interval",
      "Label every line on a graph with its equation",
      "Write the final answer in interval or set notation"
    ]
  },
  {
    "chapter": "Permutations and Combinations",
    "formulae": [
      "Fundamental principle: m ways then n ways ⇒ m × n ways",
      "ⁿPᵣ = n!/(n − r)!;  ⁿCᵣ = n!/(r!(n − r)!);  ⁿPᵣ = r! · ⁿCᵣ",
      "Arrangements with repetition allowed: nʳ; with p alike, q alike…: n!/(p! q! …)",
      "Circular: (n − 1)!;  necklace/garland: (n − 1)!/2",
      "ⁿCᵣ = ⁿCₙ₋ᵣ;  ⁿCᵣ + ⁿCᵣ₋₁ = ⁿ⁺¹Cᵣ;  ⁿCᵣ = ⁿCₛ ⇒ r = s or r + s = n"
    ],
    "logic": [
      "Permutation = arrangement (order matters); combination = selection (order doesn't)",
      "'Together' ⇒ treat the group as one block, then arrange inside the block",
      "'Not together' ⇒ arrange the others first, then place items in the gaps",
      "'At least' problems: add cases, or subtract the complementary cases from the total",
      "Restricted positions (e.g. first digit ≠ 0, last digit even) are filled first"
    ],
    "tips": [
      "Identical objects: divide by the factorials of repetitions",
      "Distributing letters to boxes: each letter chooses a box (boxesˡᵉᵗᵗᵉʳˢ)",
      "Collinear points reduce both the number of lines and of triangles",
      "Posts like president/secretary are distinct — use P, not C"
    ],
    "bestPractices": [
      "Decide 'arrangement or selection' in one line before computing",
      "List the cases explicitly for 'at least / at most'",
      "Leave answers as products like ⁶C₃ × ⁵C₂ before multiplying, so working is clear"
    ]
  },
  {
    "chapter": "Mathematical Induction",
    "formulae": [
      "PMI: P(1) true and [P(k) ⇒ P(k + 1)] ⇒ P(n) true for all n ∈ ℕ",
      "Σk = n(n + 1)/2,  Σk² = n(n + 1)(2n + 1)/6,  Σk³ = [n(n + 1)/2]²",
      "Sum of first n odd numbers = n²",
      "aⁿ − bⁿ is divisible by a − b (n ∈ ℕ)",
      "Divisibility step: write the k-case as 'expression = d·m', substitute into the (k + 1)-case"
    ],
    "logic": [
      "Both the base case and the inductive step are essential",
      "The induction hypothesis is an assumption about one k, used to reach k + 1",
      "For sums, the (k + 1)th statement = kth sum + (k + 1)th term",
      "If a statement starts being true at n = m, take P(m) as the base case",
      "Many verified cases never replace a proof"
    ],
    "tips": [
      "Write the (k + 1)th term correctly — e.g. for Σ 1/(n(n + 1)) it is 1/((k + 1)(k + 2))",
      "Know your target: write P(k + 1) explicitly before manipulating",
      "In divisibility proofs, isolate the power (e.g. 3²ᵏ = 8m + 1) and substitute",
      "Do not assume what you are proving (P(k + 1))"
    ],
    "bestPractices": [
      "Structure: Let P(n) …; Base step; Inductive hypothesis; Inductive step; Conclusion",
      "Factor out common terms like (k + 1) early",
      "End with 'Hence, by the principle of mathematical induction, P(n) is true ∀ n ∈ ℕ'"
    ]
  },
  {
    "chapter": "Binomial Theorem",
    "formulae": [
      "(a + b)ⁿ = Σ ⁿCᵣ aⁿ⁻ʳ bʳ (r = 0 to n), with n + 1 terms",
      "General term Tᵣ₊₁ = ⁿCᵣ aⁿ⁻ʳ bʳ",
      "Middle term: n even ⇒ T(n/2 + 1); n odd ⇒ T((n + 1)/2) and T((n + 3)/2)",
      "C₀ + C₁ + … + Cₙ = 2ⁿ;  C₀ + C₂ + … = C₁ + C₃ + … = 2ⁿ⁻¹",
      "Term independent of x: set the power of x in Tᵣ₊₁ equal to 0"
    ],
    "logic": [
      "Coefficients are symmetric: ⁿCᵣ = ⁿCₙ₋ᵣ",
      "Pascal's triangle builds each row from ⁿCᵣ₋₁ + ⁿCᵣ = ⁿ⁺¹Cᵣ",
      "In (a − b)ⁿ the signs alternate, given by (−1)ʳ",
      "Putting x = 1 or x = −1 gives sums of coefficients",
      "Divisibility/remainder: write the base as (multiple + 1) and expand"
    ],
    "tips": [
      "Tᵣ₊₁ is the (r + 1)th term — the 4th term uses r = 3",
      "Include the sign and the full numeric factor of b when b = −3, −y/2, etc.",
      "Binomial coefficient ≠ coefficient of a term: (2x − 3)⁵ has coefficient −1080 for x², though ⁵C₃ = 10",
      "A term independent of x exists only if the power equation gives a whole-number r"
    ],
    "bestPractices": [
      "Write the general term and simplify the power of x before solving for r",
      "Collect constants step by step (ⁿCᵣ × power × power)",
      "State clearly which terms are the middle terms before computing them"
    ]
  },
  {
    "chapter": "Sequences and Series",
    "formulae": [
      "AP: aₙ = a + (n − 1)d;  Sₙ = n/2[2a + (n − 1)d] = n/2(a + l)",
      "GP: aₙ = arⁿ⁻¹;  Sₙ = a(rⁿ − 1)/(r − 1), r ≠ 1;  S∞ = a/(1 − r), |r| < 1",
      "HP: reciprocals form an AP;  HM of a, b = 2ab/(a + b)",
      "AM = (a + b)/2, GM = √(ab);  A ≥ G ≥ H and G² = AH (a, b > 0)",
      "Σk = n(n + 1)/2,  Σk² = n(n + 1)(2n + 1)/6,  Σk³ = [n(n + 1)/2]²",
      "aₙ = Sₙ − Sₙ₋₁ (n ≥ 2)"
    ],
    "logic": [
      "n means between a and b ⇒ the sequence has n + 2 terms",
      "Take three AP terms as a − d, a, a + d; three GP terms as a/r, a, ar",
      "An infinite GP converges only if |r| < 1",
      "Arithmetico-geometric series: multiply by r and subtract",
      "Series like Σ k(k + 1) are split into Σk² + Σk"
    ],
    "tips": [
      "There is no simple sum formula for an HP — work with the reciprocal AP",
      "Recurring decimals are infinite GPs: 0.1212… = 12/99",
      "Check |r| < 1 before writing S∞",
      "Count terms carefully: n = (l − a)/d + 1"
    ],
    "bestPractices": [
      "Write a, d (or r), n explicitly before substituting",
      "Simplify answers to factorised form where possible",
      "Verify a series formula with n = 1 or 2"
    ]
  },
  {
    "chapter": "Straight Lines",
    "formulae": [
      "Slope m = tan θ = (y₂ − y₁)/(x₂ − x₁);  parallel ⇔ m₁ = m₂;  perpendicular ⇔ m₁m₂ = −1",
      "tan θ = |(m₁ − m₂)/(1 + m₁m₂)| (acute angle between lines)",
      "Forms: y − y₁ = m(x − x₁);  y = mx + c;  x/a + y/b = 1;  x cos α + y sin α = p",
      "Distance of (x₁, y₁) from ax + by + c = 0: |ax₁ + by₁ + c|/√(a² + b²)",
      "Distance between ax + by + c₁ = 0 and ax + by + c₂ = 0: |c₁ − c₂|/√(a² + b²)",
      "Lines through the intersection of L₁ = 0 and L₂ = 0: L₁ + λL₂ = 0"
    ],
    "logic": [
      "Slope of ax + by + c = 0 is −a/b; a line parallel to it is ax + by + k = 0",
      "A line perpendicular to ax + by + c = 0 has the form bx − ay + k = 0",
      "Three lines are concurrent if the intersection of two lies on the third",
      "Vertical lines have undefined slope; horizontal lines have slope 0",
      "Collinearity: equal slopes from a common point (or zero triangle area)"
    ],
    "tips": [
      "Before using the parallel-line distance formula, make the x and y coefficients identical",
      "In normal form p must be positive — divide by +√(a² + b²) after moving the constant to the right",
      "The angle formula with |…| gives two lines when a slope is unknown",
      "Do not confuse intercept x/a + y/b = 1 with ax + by = 1"
    ],
    "bestPractices": [
      "Write the final equation in general form ax + by + c = 0 with integer coefficients",
      "Sketch a quick figure to check signs of slopes and intercepts",
      "Verify by substituting a known point into your answer"
    ]
  },
  {
    "chapter": "Circles",
    "formulae": [
      "(x − h)² + (y − k)² = r²: centre (h, k), radius r",
      "x² + y² + 2gx + 2fy + c = 0: centre (−g, −f), radius √(g² + f² − c)",
      "Diameter form: (x − x₁)(x − x₂) + (y − y₁)(y − y₂) = 0",
      "Tangent at (x₁, y₁): xx₁ + yy₁ + g(x + x₁) + f(y + y₁) + c = 0 (for x² + y² = a²: xx₁ + yy₁ = a²)",
      "y = mx + c touches x² + y² = a² ⇔ c² = a²(1 + m²)"
    ],
    "logic": [
      "A general second-degree equation is a circle only if x² and y² have equal coefficients and there is no xy term",
      "A line is a tangent when its distance from the centre equals the radius",
      "The radius to the point of contact is perpendicular to the tangent",
      "Three non-collinear points determine a unique circle",
      "Power S₁ = x₁² + y₁² + 2gx₁ + 2fy₁ + c: > 0 outside, = 0 on, < 0 inside"
    ],
    "tips": [
      "Divide by the coefficient of x² before reading g, f, c",
      "Centre is (−g, −f), not (g, f)",
      "Touching the x-axis ⇒ r = |k|; touching the y-axis ⇒ r = |h|",
      "Check that the given point lies on the circle before writing a tangent 'at' it"
    ],
    "bestPractices": [
      "State centre and radius explicitly in every answer",
      "Number your equations when solving for g, f, c",
      "Verify the final equation with one of the given points"
    ]
  },
  {
    "chapter": "Limits and Derivatives",
    "formulae": [
      "lim (x → a) (xⁿ − aⁿ)/(x − a) = naⁿ⁻¹",
      "lim (x → 0) sin x/x = 1;  lim tan x/x = 1;  lim (1 − cos x)/x = 0",
      "lim (x → 0) (eˣ − 1)/x = 1;  lim (aˣ − 1)/x = ln a;  lim ln(1 + x)/x = 1",
      "f′(x) = lim (h → 0) [f(x + h) − f(x)]/h",
      "(u ± v)′ = u′ ± v′;  (uv)′ = u′v + uv′;  (u/v)′ = (vu′ − uv′)/v²;  chain: dy/dx = (dy/du)(du/dx)",
      "(xⁿ)′ = nxⁿ⁻¹; (sin x)′ = cos x; (cos x)′ = −sin x; (tan x)′ = sec²x; (sec x)′ = sec x tan x; (cot x)′ = −cosec²x; (cosec x)′ = −cosec x cot x"
    ],
    "logic": [
      "A limit exists only if the left-hand and right-hand limits are equal",
      "f is continuous at a if lim (x → a) f(x) = f(a)",
      "Differentiability implies continuity, but not conversely (|x| at 0)",
      "0/0 forms: factorise, rationalise, or use a standard limit",
      "For x → ∞ with rational functions, divide by the highest power of x"
    ],
    "tips": [
      "Trig limits need x in radians",
      "(sin 3x)/x → 3, not 1 — match the angle with the denominator",
      "Quotient rule: the numerator order is vu′ − uv′ (sign matters)",
      "In first-principles proofs, never substitute h = 0 before cancelling h"
    ],
    "bestPractices": [
      "Show the indeterminate form before simplifying",
      "Write the rule (product/quotient/chain) you are using",
      "Simplify the final derivative and factor where possible"
    ]
  },
  {
    "chapter": "Statistics",
    "formulae": [
      "Range = largest − smallest",
      "Mean deviation about a: MD = Σ|xᵢ − a|/n (grouped: Σfᵢ|xᵢ − a|/N)",
      "Variance σ² = Σ(xᵢ − x̄)²/n = Σxᵢ²/n − x̄²;  grouped: Σfᵢ(xᵢ − x̄)²/N",
      "Step-deviation: uᵢ = (xᵢ − A)/h ⇒ σₓ = h · σᵤ",
      "Coefficient of variation CV = (σ/x̄) × 100",
      "Variance of 1, 2, …, n = (n² − 1)/12"
    ],
    "logic": [
      "Dispersion measures spread about a central value",
      "Adding a constant changes the mean but not σ; multiplying by k multiplies σ by |k|",
      "For grouped data use class mid-points as xᵢ",
      "Mean deviation is least when taken about the median",
      "Compare consistency of two series with CV, not σ alone, when means differ"
    ],
    "tips": [
      "Use |deviation| for MD — never let signs cancel",
      "σ is the positive square root — do not leave the answer as the variance",
      "Lower CV ⇒ more consistent / less variable",
      "When an observation was misread, correct Σx and Σx² before recomputing"
    ],
    "bestPractices": [
      "Draw a table with columns x, f, fx, (x − x̄), f(x − x̄)²",
      "Show totals at the bottom of every column",
      "Round only at the final step and state the unit, if any"
    ]
  },
  {
    "chapter": "Probability",
    "formulae": [
      "Classical: P(E) = n(E)/n(S) for equally likely outcomes",
      "0 ≤ P(E) ≤ 1;  P(S) = 1;  P(φ) = 0;  P(E′) = 1 − P(E)",
      "Addition theorem: P(A ∪ B) = P(A) + P(B) − P(A ∩ B)",
      "Mutually exclusive: P(A ∪ B) = P(A) + P(B)",
      "P(A only) = P(A ∩ B′) = P(A) − P(A ∩ B);  P(exactly one) = P(A) + P(B) − 2P(A ∩ B)"
    ],
    "logic": [
      "Sample space = set of all possible outcomes of a random experiment",
      "An event is a subset of the sample space",
      "Mutually exclusive: A ∩ B = φ; exhaustive: A ∪ B = S",
      "Axiomatic approach: probabilities of outcomes are non-negative and sum to 1",
      "'At least one' is usually easiest as 1 − P(none)"
    ],
    "tips": [
      "'Drawn together' means without replacement — use combinations",
      "Mutually exclusive ≠ independent",
      "A probability can never be negative or exceed 1 — check your answer",
      "Count letters/cards carefully (e.g. vowels in ASSASSINATION = 6)"
    ],
    "bestPractices": [
      "Write n(S) first, then n(E)",
      "Use set notation (A ∪ B, A′ ∩ B′) to translate the words",
      "Leave answers as reduced fractions"
    ]
  },
  {
    "chapter": "Conic Sections",
    "formulae": [
      "Parabola y² = 4ax: focus (a, 0), directrix x = −a, latus rectum 4a, e = 1 (x² = 4ay: focus (0, a))",
      "Ellipse x²/a² + y²/b² = 1 (a > b): c² = a² − b², foci (±c, 0), e = c/a < 1",
      "Hyperbola x²/a² − y²/b² = 1: c² = a² + b², foci (±c, 0), e = c/a > 1",
      "Latus rectum of ellipse and hyperbola = 2b²/a",
      "Ellipse: major axis 2a, minor axis 2b; hyperbola: transverse axis 2a, conjugate axis 2b"
    ],
    "logic": [
      "A conic is the locus of points whose distance from a focus is e times the distance from a directrix",
      "In an ellipse, the larger denominator decides the major axis",
      "In a hyperbola, the positive term decides the transverse axis",
      "The sign of the parabola's linear term gives the direction it opens",
      "Sum of focal distances = 2a (ellipse); difference = 2a (hyperbola)"
    ],
    "tips": [
      "Ellipse uses c² = a² − b² but hyperbola uses c² = a² + b² — the most common slip",
      "Bring the equation to standard form (RHS = 1) before reading a, b",
      "In x²/16 + y²/25 = 1, the foci lie on the y-axis",
      "Lengths (latus rectum, axes) are always positive"
    ],
    "bestPractices": [
      "Start every answer by writing the standard form and the values of a, b, c",
      "State whether the major/transverse axis is along x or y",
      "Draw a rough sketch marking vertices and foci"
    ]
  },
  {
    "chapter": "Introduction to Three-Dimensional Geometry",
    "formulae": [
      "Distance PQ = √[(x₂ − x₁)² + (y₂ − y₁)² + (z₂ − z₁)²]; from origin √(x² + y² + z²)",
      "Internal division m : n: ((mx₂ + nx₁)/(m + n), (my₂ + ny₁)/(m + n), (mz₂ + nz₁)/(m + n))",
      "External division m : n: ((mx₂ − nx₁)/(m − n), …)",
      "Mid-point ((x₁ + x₂)/2, (y₁ + y₂)/2, (z₁ + z₂)/2);  centroid (Σx/3, Σy/3, Σz/3)",
      "Distance of (x, y, z) from the x-axis = √(y² + z²); from the xy-plane = |z|"
    ],
    "logic": [
      "Three mutually perpendicular axes form three coordinate planes and eight octants",
      "xy-plane: z = 0; yz-plane: x = 0; zx-plane: y = 0",
      "On the x-axis, y = z = 0 (similarly for the other axes)",
      "Collinearity: the sum of two distances equals the third",
      "A plane divides a segment in k : 1 — use the plane's equation to find k"
    ],
    "tips": [
      "Distance from an axis ≠ distance from a plane — x-axis uses √(y² + z²)",
      "A negative k in section problems means external division",
      "Watch signs when subtracting negative coordinates",
      "Right-angle check: use squared distances (Pythagoras)"
    ],
    "bestPractices": [
      "Name points and compute each distance on a separate line",
      "Simplify surds (√56 = 2√14) to compare distances",
      "State the ratio type (internal/external) in the conclusion"
    ]
  },
  {
    "chapter": "Mathematical Reasoning",
    "formulae": [
      "Statement: a sentence that is either true or false, but not both",
      "∼(p ∧ q) ≡ ∼p ∨ ∼q;  ∼(p ∨ q) ≡ ∼p ∧ ∼q",
      "p ⇒ q is false only when p is T and q is F;  p ⇔ q is true when p, q have the same truth value",
      "Converse q ⇒ p; contrapositive ∼q ⇒ ∼p (equivalent to p ⇒ q); inverse ∼p ⇒ ∼q",
      "∼(∀x, P(x)) ≡ ∃x, ∼P(x);  ∼(∃x, P(x)) ≡ ∀x, ∼P(x)"
    ],
    "logic": [
      "Commands, questions, exclamations and open sentences (x + 2 = 5) are not statements",
      "'And' needs all components true; 'or' (inclusive) needs at least one",
      "A statement and its contrapositive stand or fall together",
      "One counter-example disproves a universal ('for all') statement",
      "Methods of validation: direct, contrapositive, contradiction, counter-example"
    ],
    "tips": [
      "Negation of 'All A are B' is 'Some A is not B', not 'No A is B'",
      "Do not confuse the converse with the contrapositive",
      "Negate an inequality fully: ∼(x > 3) is x ≤ 3",
      "A counter-example must satisfy the hypothesis but violate the conclusion"
    ],
    "bestPractices": [
      "Write components as p, q with their truth values before combining",
      "Use a truth table when equivalence is asked",
      "In proofs, state which method you are using at the start"
    ]
  }
];
