// ─── Grade IX ICSE Mathematics revision notes ────────────────────────────────
// screen-notes.js reads REVISION['IX ICSE Mathematics'] when grade==='IX'
REVISION['IX ICSE Mathematics'] = [
  {
    "chapter": "Rational and Irrational Numbers",
    "formulae": [
      "Rational number: p/q where p, q ∈ ℤ and q ≠ 0",
      "Between any two rationals a and b lies the rational (a + b)/2",
      "√p is irrational whenever p is a prime; e.g. √2, √3, √5",
      "Rationalising factor of (a + √b) is (a − √b) so their product = a² − b",
      "Decimal expansion: rational ↔ terminating or recurring; irrational ↔ non-terminating non-recurring"
    ],
    "logic": [
      "Every integer is rational (write n = n/1) but not every rational is an integer",
      "Sum or difference of a rational and an irrational is always irrational",
      "Product of a non-zero rational with an irrational is always irrational",
      "π and e are irrational; they cannot be expressed as p/q",
      "The real number line is 'complete' — every point corresponds to either a rational or an irrational"
    ],
    "tips": [
      "To show √2 is irrational, assume √2 = p/q in lowest terms and derive a contradiction (both p and q even)",
      "When rationalising a denominator with two terms, multiply by the conjugate surd",
      "Recurring decimals: 0.ā = a/9; 0.ab̄ = (ab − a)/90 — memorise these shortcuts",
      "Common error: treating √(a² + b²) as a + b — this is WRONG; expand only if a perfect square"
    ],
    "bestPractices": [
      "Always state whether a number is rational or irrational before computing with it",
      "Show all rationalisation steps in one column; never skip the conjugate multiplication",
      "Verify your answer by squaring or substituting back when dealing with surds"
    ]
  },
  {
    "chapter": "Compound Interest",
    "formulae": [
      "A = P(1 + r/100)ⁿ  where P = principal, r = rate % p.a., n = years",
      "CI = A − P = P[(1 + r/100)ⁿ − 1]",
      "Half-yearly: A = P(1 + r/200)^(2n)",
      "Quarterly: A = P(1 + r/400)^(4n)",
      "Growth formula (population/value): Vₙ = V₀(1 + r/100)ⁿ; Depreciation: Vₙ = V₀(1 − r/100)ⁿ"
    ],
    "logic": [
      "In CI, interest of each period is added to principal before the next period begins",
      "For the same P, r, n: CI > SI because CI earns interest on interest",
      "Difference CI − SI for 2 years = P(r/100)²",
      "When compounding is more frequent (half-yearly vs yearly), effective interest is higher",
      "Depreciation uses the same formula with a negative rate — the base decreases each period"
    ],
    "tips": [
      "Read the question for compounding period (yearly/half-yearly/quarterly) before substituting",
      "For half-yearly: halve the rate AND double the number of periods",
      "To find rate or time, take logarithms or trial-and-error with simple values like (1 + r/100) = 1.1",
      "Show at least one intermediate step (value of A before subtracting P) to earn method marks"
    ],
    "bestPractices": [
      "Write the formula first, then substitute values — never skip the formula line",
      "Round only at the final step; keep full precision in intermediate calculations",
      "Label every quantity (P, r, n, A, CI) clearly so the examiner can follow your working"
    ]
  },
  {
    "chapter": "Expansions",
    "formulae": [
      "(a + b)² = a² + 2ab + b²",
      "(a − b)² = a² − 2ab + b²",
      "(a + b)(a − b) = a² − b²",
      "(a + b)³ = a³ + 3a²b + 3ab² + b³ = a³ + b³ + 3ab(a + b)",
      "(a − b)³ = a³ − 3a²b + 3ab² − b³ = a³ − b³ − 3ab(a − b)"
    ],
    "logic": [
      "Expansions are identities — true for all values of the variables",
      "Squaring a binomial always produces three terms: first², 2×cross, second²",
      "The difference of two squares arises only when the signs of the two brackets differ",
      "Knowing (a + b) and ab allows you to find a² + b² = (a + b)² − 2ab and a³ + b³ = (a + b)³ − 3ab(a + b)",
      "Nested expansions: expand inner bracket first, then outer — do not skip steps"
    ],
    "tips": [
      "For (x + 1/x)² = x² + 2 + 1/x² — the middle term is always 2×(x)(1/x) = 2",
      "A common error: (a − b)² ≠ a² − b²; never forget the −2ab middle term",
      "To find a³ + b³ or a³ − b³ from given sums/products, use the cubic identities — do not expand term by term",
      "If asked to 'evaluate without direct multiplication', look for an identity that fits"
    ],
    "bestPractices": [
      "Quote the identity used before expanding — this earns the formula mark",
      "Collect like terms carefully and cross-check by substituting a simple value (e.g. a = 1, b = 1)",
      "Present working in a linear chain; do not write multiple incomplete lines"
    ]
  },
  {
    "chapter": "Factorisation",
    "formulae": [
      "a² − b² = (a + b)(a − b)",
      "a² + 2ab + b² = (a + b)²;  a² − 2ab + b² = (a − b)²",
      "a³ + b³ = (a + b)(a² − ab + b²)",
      "a³ − b³ = (a − b)(a² + ab + b²)",
      "For ax² + bx + c: find two numbers whose product = ac and sum = b, then factor by grouping"
    ],
    "logic": [
      "Factorisation is the reverse of expansion — always check by re-expanding",
      "Take the HCF of all terms as the first step before applying any identity",
      "A quadratic has real rational factors if and only if its discriminant b² − 4ac is a perfect square",
      "Sum/difference of cubes always gives a binomial × a trinomial — the trinomial does NOT factorise further over integers",
      "Factor by grouping (splitting middle term) is the universal method for quadratics when the identity approach fails"
    ],
    "tips": [
      "Always look for a common factor first — missing it leads to incomplete factorisation",
      "For a³ ± b³, do not confuse the sign in the trinomial: a³ + b³ gives − ab inside, a³ − b³ gives + ab inside",
      "Trinomial with leading coefficient > 1: multiply a × c first, then find factor pair",
      "After factorising, verify: expand your answer and check it matches the original expression"
    ],
    "bestPractices": [
      "Write the HCF step separately before proceeding to the identity step",
      "Show the check (re-expansion) in brackets or as a separate line marked 'Verification'",
      "State the final answer as a product of factors on a single line"
    ]
  },
  {
    "chapter": "Simultaneous Linear Equations",
    "formulae": [
      "Elimination method: multiply equations so coefficients of one variable match, then subtract",
      "Substitution method: express one variable in terms of the other and substitute",
      "Cross-multiplication: x/((b₁c₂ − b₂c₁)) = y/((c₁a₂ − c₂a₁)) = 1/((a₁b₂ − a₂b₁))",
      "Graphical: solution is the point of intersection of the two lines",
      "For equations of the form 1/x = u, 1/y = v — substitute to reduce to linear form"
    ],
    "logic": [
      "A unique solution exists when lines are not parallel (different gradients)",
      "No solution (inconsistent) occurs when lines are parallel but distinct",
      "Infinitely many solutions (dependent) occurs when lines coincide",
      "In word problems, define variables clearly before writing equations — marks are awarded for setup",
      "Any method (elimination/substitution/cross-multiplication) gives the same answer; choose the neatest"
    ],
    "tips": [
      "Eliminate the variable with the smaller coefficients to minimise arithmetic errors",
      "If equations have fractions, multiply through to clear denominators before solving",
      "Always substitute the found value back into ONE of the original equations to find the second variable",
      "Verify the solution by substituting into BOTH original equations"
    ],
    "bestPractices": [
      "Number your equations (1) and (2) and label every operation (e.g. '2×(1) − (2)')",
      "Write the final answer as x = … and y = … on separate lines",
      "In word problems, write the conclusion sentence answering exactly what was asked"
    ]
  },
  {
    "chapter": "Indices",
    "formulae": [
      "aᵐ × aⁿ = aᵐ⁺ⁿ;  aᵐ ÷ aⁿ = aᵐ⁻ⁿ;  (aᵐ)ⁿ = aᵐⁿ",
      "a⁰ = 1 (a ≠ 0);  a⁻ⁿ = 1/aⁿ",
      "aᵐ/ⁿ = ⁿ√(aᵐ) = (ⁿ√a)ᵐ",
      "(ab)ⁿ = aⁿbⁿ;  (a/b)ⁿ = aⁿ/bⁿ",
      "If aˣ = aʸ and a ≠ 0, 1, −1 then x = y (equating indices)"
    ],
    "logic": [
      "All index laws require the same base for addition/subtraction of exponents",
      "A fractional index m/n means n-th root of the m-th power",
      "Negative indices denote reciprocals — a⁻² is NOT negative; it equals 1/a²",
      "To solve aˣ = b, express b as a power of a and equate exponents",
      "Zero index: any non-zero base raised to the power 0 equals exactly 1"
    ],
    "tips": [
      "Before applying laws, write all numbers as prime powers with the same base",
      "Common mistake: (a + b)ⁿ ≠ aⁿ + bⁿ — the law applies to products, not sums",
      "When simplifying, convert roots to fractional indices first, then apply laws",
      "If two sides have different bases, factorise or find a common base; never equate different bases directly"
    ],
    "bestPractices": [
      "State which law you are applying at each step (e.g. 'Product law', 'Power of a power')",
      "Simplify step by step — do not collapse more than one law per line in an exam",
      "Leave the final answer with positive exponents unless a negative index is specifically required"
    ]
  },
  {
    "chapter": "Trigonometrical Ratios of Standard Angles",
    "formulae": [
      "sin 0° = 0, sin 30° = 1/2, sin 45° = 1/√2, sin 60° = √3/2, sin 90° = 1",
      "cos 0° = 1, cos 30° = √3/2, cos 45° = 1/√2, cos 60° = 1/2, cos 90° = 0",
      "tan 0° = 0, tan 30° = 1/√3, tan 45° = 1, tan 60° = √3, tan 90° = undefined",
      "sin²θ + cos²θ = 1;  1 + tan²θ = sec²θ;  1 + cot²θ = cosec²θ",
      "sin(90° − θ) = cosθ; cos(90° − θ) = sinθ; tan(90° − θ) = cotθ"
    ],
    "logic": [
      "These ratios arise from right-triangle sides: opposite/hypotenuse, adjacent/hyp, opposite/adjacent",
      "All six ratios are determined by one angle in a right-angled triangle",
      "The co-function identity (90° − θ) swaps sin↔cos, tan↔cot, sec↔cosec",
      "Pythagorean identity sin²θ + cos²θ = 1 is derived from Pythagoras' theorem in a unit circle",
      "Values at 30° and 60° are related by the equilateral triangle bisection; at 45° by the isosceles right triangle"
    ],
    "tips": [
      "Learn the table row by row: sin increases 0→1 as θ goes 0°→90°; cos decreases — they mirror each other",
      "tan 90° is undefined because cos 90° = 0 appears in the denominator",
      "To evaluate expressions like sin²60° + cos²30°, substitute exact values, then simplify",
      "Check: if your final answer is not a simple surd or fraction, re-examine your substitution"
    ],
    "bestPractices": [
      "Write the table of standard values at the top of your rough work for quick reference",
      "Show each substitution step clearly: write the ratio, substitute, then simplify",
      "Rationalise surd denominators in the final answer (e.g. write 1/√2 as √2/2)"
    ]
  },
  {
    "chapter": "Logarithms",
    "formulae": [
      "logₐ(mn) = logₐm + logₐn",
      "logₐ(m/n) = logₐm − logₐn",
      "logₐ(mⁿ) = n logₐm",
      "logₐa = 1;  logₐ1 = 0;  log₁₀10 = 1",
      "Change of base: logₐb = log₁₀b / log₁₀a"
    ],
    "logic": [
      "log is the inverse of exponentiation: logₐb = x ⟺ aˣ = b",
      "The base must be positive and ≠ 1; the argument must be strictly positive",
      "Common log (log₁₀) and natural log (ln = logₑ) are the two practical bases",
      "log of a product is the sum of logs — this converts multiplication to easier addition",
      "The log function is monotonically increasing for base > 1, so logₐx = logₐy ⟹ x = y"
    ],
    "tips": [
      "log(a + b) ≠ log a + log b — the product law applies to multiplication inside the log, not addition",
      "To solve logₐx = k, convert to exponential form aᵏ = x immediately",
      "When using log tables, note that log 2.5 ≠ log 25 / 10 — always identify characteristic and mantissa",
      "Characteristic for a number ≥ 1 with n digits is n − 1; for 0 < x < 1 it is negative"
    ],
    "bestPractices": [
      "State the law used at each step: 'Product law', 'Power law', etc.",
      "Convert the final logarithmic equation back to exponential form to verify",
      "In four-figure table problems, clearly write the characteristic, mantissa and final antilog"
    ]
  },
  {
    "chapter": "Triangles (Congruency)",
    "formulae": [
      "SSS: three sides equal → congruent",
      "SAS: two sides and the included angle equal → congruent",
      "ASA / AAS: two angles and one side equal → congruent",
      "RHS: right angle, hypotenuse, one side equal → congruent",
      "CPCTC: Corresponding Parts of Congruent Triangles are Congruent"
    ],
    "logic": [
      "SSA (two sides and a non-included angle) is NOT a valid congruence test — it may give two triangles",
      "AAA proves similarity, NOT congruence — sides could be different lengths",
      "Congruence is an equivalence relation: reflexive, symmetric, transitive",
      "In RHS, the hypotenuse is the side opposite the right angle — always identify it correctly",
      "After proving congruence, all corresponding sides and angles are automatically equal (CPCTC)"
    ],
    "tips": [
      "In a proof, state the congruence criterion (e.g. 'by SAS') explicitly and then write the full congruence statement",
      "Order matters: △ABC ≅ △DEF means A↔D, B↔E, C↔F — write vertices in correspondence order",
      "Identify the common side or common angle first — it is usually the bridge between the two triangles",
      "Draw and mark diagrams with tick marks and arcs to avoid mixing up corresponding parts"
    ],
    "bestPractices": [
      "Present each proof as numbered statements with reasons in a two-column or formal format",
      "Write the final congruence statement with both triangle names and the criterion used",
      "After proving congruence, extract any additional results (equal sides/angles) asked by the question"
    ]
  },
  {
    "chapter": "Isosceles Triangles",
    "formulae": [
      "In △ABC, AB = AC ⟹ ∠ABC = ∠ACB (base angles are equal)",
      "Converse: ∠ABC = ∠ACB ⟹ AB = AC",
      "The perpendicular from the apex to the base bisects the base and bisects the apex angle",
      "Equilateral triangle: all sides equal ⟹ all angles = 60°",
      "Altitude = Median = Perpendicular bisector = Angle bisector from apex in an isosceles triangle"
    ],
    "logic": [
      "The axis of symmetry of an isosceles triangle passes through the apex and midpoint of the base",
      "The apex angle bisector, altitude from apex, and median to the base are the same line segment",
      "An equilateral triangle is a special case of isosceles with both base angles = 60°",
      "To prove a triangle isosceles, prove any two angles equal or any two sides equal",
      "Congruence of the two halves (SAS or AAS) is the standard proof technique for isosceles properties"
    ],
    "tips": [
      "When equal angles are found in a larger figure, immediately tag the triangle as potentially isosceles",
      "Common error: confusing the apex with a base vertex — always identify which side is the 'base'",
      "In circle geometry, radii create isosceles triangles — a very frequent application",
      "If asked to prove angles equal, try proving two triangles congruent rather than reasoning angle-by-angle"
    ],
    "bestPractices": [
      "Mark equal sides with tick marks and equal angles with arc marks on your diagram before writing proofs",
      "State 'base angles of isosceles △' as the reason when using the equal angle property",
      "Re-read the question after proving the main result to check if a follow-up (e.g. angle value) is required"
    ]
  },
  {
    "chapter": "Rectilinear Figures",
    "formulae": [
      "Sum of interior angles of an n-gon = (n − 2) × 180°",
      "Each interior angle of a regular n-gon = (n − 2) × 180° / n",
      "Each exterior angle of a regular n-gon = 360° / n",
      "Sum of exterior angles of any convex polygon = 360°",
      "Number of diagonals of an n-gon = n(n − 3)/2"
    ],
    "logic": [
      "Any polygon can be divided into (n − 2) triangles, giving the angle sum formula",
      "Interior + exterior angle = 180° at each vertex (they form a straight line)",
      "In a parallelogram: opposite sides equal and parallel, opposite angles equal, diagonals bisect each other",
      "A rectangle is a parallelogram with equal diagonals; a rhombus has perpendicular diagonals",
      "A square has all properties of rectangle and rhombus simultaneously"
    ],
    "tips": [
      "For irregular polygons, divide into triangles from one vertex to find the angle sum",
      "Exterior angle = 360° / n is valid ONLY for regular polygons",
      "In a quadrilateral, angles sum to 360° — use this to find unknown angles quickly",
      "Do not confuse interior and exterior angles: draw an arrow extending the side to visualise the exterior angle"
    ],
    "bestPractices": [
      "Draw a clear, labelled diagram for every polygon question",
      "State the formula used and the value of n explicitly before substituting",
      "List all properties of the named quadrilateral before attempting a proof about it"
    ]
  },
  {
    "chapter": "Trigonometrical Ratios",
    "formulae": [
      "sin θ = opposite/hypotenuse;  cos θ = adjacent/hypotenuse;  tan θ = opposite/adjacent",
      "cosec θ = 1/sin θ;  sec θ = 1/cos θ;  cot θ = 1/tan θ = cos θ/sin θ",
      "tan θ = sin θ/cos θ",
      "sin²θ + cos²θ = 1;  sec²θ − tan²θ = 1;  cosec²θ − cot²θ = 1",
      "For complementary angles A + B = 90°: sin A = cos B, tan A = cot B, sec A = cosec B"
    ],
    "logic": [
      "Trigonometric ratios depend only on the angle, not on the size of the right triangle",
      "For 0° < θ < 90°, all six ratios are positive",
      "sin θ and cos θ are always between −1 and 1; sec θ and cosec θ are ≤ −1 or ≥ 1",
      "Given one ratio, all others can be found using the right triangle and Pythagoras",
      "Identities connect the six ratios — proving an identity means transforming one side to look like the other"
    ],
    "tips": [
      "Memory aid: SOH-CAH-TOA (Sine=Opposite/Hypotenuse, Cosine=Adjacent/Hypotenuse, Tangent=Opposite/Adjacent)",
      "Draw a right triangle and label all three sides before finding unknown ratios",
      "In identity proofs, work on the more complex side; express everything in sin and cos if stuck",
      "Never 'move' a term across the = sign when proving an identity — keep both sides separate"
    ],
    "bestPractices": [
      "Draw and label the reference right triangle for every problem involving a given ratio",
      "In identity proofs, show LHS = ... = ... = RHS in a clear chain",
      "State which Pythagorean identity you are applying at the step you use it"
    ]
  },
  {
    "chapter": "Pythagoras Theorem",
    "formulae": [
      "In a right △ with hypotenuse c: a² + b² = c²",
      "Converse: if a² + b² = c² then the angle opposite c is 90°",
      "Height of equilateral triangle of side a: h = (√3/2)a",
      "Diagonal of a rectangle with sides l, b: d = √(l² + b²)",
      "Distance formula: PQ = √((x₂ − x₁)² + (y₂ − y₁)²) is Pythagoras in coordinate form"
    ],
    "logic": [
      "The right angle is always opposite the hypotenuse — the longest side",
      "Pythagorean triples: (3,4,5), (5,12,13), (8,15,17), (7,24,25) and their multiples",
      "The theorem works in reverse: testing a² + b² = c² identifies a right angle",
      "In 3-D, the space diagonal of a cuboid = √(l² + b² + h²) by applying Pythagoras twice",
      "Proof strategy: draw altitude from right angle to hypotenuse, then use similar triangles"
    ],
    "tips": [
      "Identify the hypotenuse first (the side opposite 90°) before substituting into a² + b² = c²",
      "If given three sides, check whether the LARGEST side satisfies c² = a² + b²",
      "Common error: writing 3² + 4² = 5 instead of 5²; always square the hypotenuse",
      "In a composite figure, decompose into right triangles and apply the theorem separately"
    ],
    "bestPractices": [
      "Clearly label the right angle and the hypotenuse in your diagram",
      "Show the substitution a² + b² = c² as a separate step before solving for the unknown",
      "Give the final length as a surd in simplest form unless a decimal is asked for"
    ]
  },
  {
    "chapter": "Mid-point and Intercept Theorems",
    "formulae": [
      "Mid-point theorem: the line joining midpoints of two sides of a triangle is parallel to the third side and half its length",
      "Converse: a line through the midpoint of one side, parallel to the second side, bisects the third",
      "Intercept theorem: if three parallel lines cut two transversals, the ratios of corresponding intercepts are equal",
      "Mid-point coordinates: M = ((x₁ + x₂)/2 , (y₁ + y₂)/2)",
      "In a trapezium, the median (line joining midpoints of non-parallel sides) = (1/2)(sum of parallel sides)"
    ],
    "logic": [
      "The mid-point theorem is proved using similar triangles (AA criterion)",
      "It applies to ANY triangle, not just special ones",
      "The intercept theorem is a generalisation valid whenever three or more parallel lines intersect transversals",
      "The mid-point of a segment divides it in the ratio 1 : 1",
      "These theorems are powerful tools in proofs — look for midpoints or parallel lines in the given data"
    ],
    "tips": [
      "In a proof, state 'by mid-point theorem' and quote both the parallel and half-length conclusions",
      "If you need to find the length of a side, check if any midpoints are given — the mid-point theorem may halve your work",
      "In coordinate problems, use the formula rather than the theorem for speed",
      "Common error: applying the mid-point theorem to two sides of a quadrilateral — it applies only within a single triangle"
    ],
    "bestPractices": [
      "Mark midpoints with the letter M or use tick marks on the diagram",
      "State both conclusions of the mid-point theorem (parallel AND half) even if only one is asked",
      "Build multi-step proofs by applying the theorem once per triangle in the figure"
    ]
  },
  {
    "chapter": "Circle",
    "formulae": [
      "Circumference = 2πr;  Area = πr²",
      "Arc length = (θ/360°) × 2πr",
      "Area of sector = (θ/360°) × πr²",
      "Equal chords subtend equal angles at the centre",
      "Angle in a semicircle = 90° (angle in a semicircle is always a right angle)"
    ],
    "logic": [
      "The perpendicular from the centre to a chord bisects the chord",
      "Equal chords are equidistant from the centre",
      "The angle subtended by an arc at the centre is twice the angle at any point on the remaining major arc",
      "Angles in the same segment of a circle are equal",
      "Opposite angles of a cyclic quadrilateral are supplementary (sum to 180°)"
    ],
    "tips": [
      "Draw radius to point of contact of tangent — it is perpendicular to the tangent",
      "When two chords are equal, the perpendicular distances from the centre are equal — use this to set up equations",
      "The angle-in-a-semicircle theorem (90°) is very commonly tested — look for a diameter as one side of a triangle",
      "In cyclic quadrilateral problems, write angle sum equations for opposite pairs"
    ],
    "bestPractices": [
      "Label the centre O and all relevant points on every circle diagram",
      "Quote the circle theorem used (e.g. 'angle at centre = 2 × angle at circumference') as the reason",
      "Show all radius lines drawn — they are part of the proof structure"
    ]
  },
  {
    "chapter": "Mean/Median/Mode",
    "formulae": [
      "Mean (ungrouped) = Σx / n",
      "Mean (grouped) = Σ(fᵢxᵢ) / Σfᵢ  where xᵢ is the class midpoint",
      "Median (ungrouped, odd n): middle value; (even n): average of two middle values",
      "Median (grouped) = l + [(n/2 − cf) / f] × h",
      "Mode = most frequently occurring value; Modal class = class with highest frequency"
    ],
    "logic": [
      "Mean uses ALL data values and is affected by extreme values (outliers)",
      "Median is resistant to outliers; it is the preferred measure for skewed distributions",
      "Mode may not be unique; a dataset can be bimodal or multimodal",
      "For grouped data, class midpoints are used as representative values in the mean formula",
      "The relationship Mean ≈ Mode + 3(Mean − Median) holds for moderately skewed distributions"
    ],
    "tips": [
      "Arrange data in ascending order BEFORE finding the median",
      "In grouped frequency tables, calculate the cumulative frequency column before applying the median formula",
      "For the mode in grouped data, identify the modal class (highest frequency) — the exact mode is estimated, not exact",
      "Double-check: Σfᵢ should equal the total number of observations n"
    ],
    "bestPractices": [
      "Construct a table with columns: x, f, fx (and cf for median) — do not skip the table even for simple data",
      "State which formula you are using and define each symbol",
      "Round mean and median to the same number of decimal places as the data, unless instructed otherwise"
    ]
  },
  {
    "chapter": "Area and Perimeter of Plane Figures",
    "formulae": [
      "Rectangle: P = 2(l + b), A = lb",
      "Triangle: A = (1/2)bh; Heron's formula: A = √(s(s−a)(s−b)(s−c)) where s = (a+b+c)/2",
      "Circle: C = 2πr, A = πr²",
      "Parallelogram: A = base × height",
      "Trapezium: A = (1/2)(a + b)h where a, b are parallel sides, h is perpendicular height"
    ],
    "logic": [
      "Area and perimeter are different: area is two-dimensional (units²) and perimeter is one-dimensional (units)",
      "Heron's formula requires all three sides; the base-height formula requires a base and perpendicular height",
      "The perpendicular height must be measured at right angles to the base — slant height is NOT the height",
      "For composite figures, divide into standard shapes, find areas separately, then add or subtract",
      "Semicircle area = πr²/2; semicircle perimeter = πr + 2r (the diameter closes it)"
    ],
    "tips": [
      "Use π = 22/7 when the radius is a multiple of 7; use π = 3.14 (or as instructed) otherwise",
      "In Heron's formula, compute s first, then (s−a), (s−b), (s−c) separately before multiplying",
      "Common error: using the slant side as height in a parallelogram or trapezium — always drop a perpendicular",
      "For combined figures, identify what to add (adjacent regions) and what to subtract (cut-out regions)"
    ],
    "bestPractices": [
      "Write the formula, substitute, then simplify in three distinct lines",
      "State the units clearly (cm, cm², m, m²) in the final answer",
      "For Heron's formula, show the intermediate step √(s(s−a)(s−b)(s−c)) before simplifying"
    ]
  },
  {
    "chapter": "Surface Area and Volume of Solids",
    "formulae": [
      "Cuboid: SA = 2(lb + bh + hl), V = lbh",
      "Cube of side a: SA = 6a², V = a³",
      "Cylinder: CSA = 2πrh, TSA = 2πr(r + h), V = πr²h",
      "Cone: CSA = πrl where l = √(r² + h²), TSA = πr(r + l), V = (1/3)πr²h",
      "Sphere: SA = 4πr², V = (4/3)πr³; Hemisphere: CSA = 2πr², TSA = 3πr², V = (2/3)πr³"
    ],
    "logic": [
      "Total surface area includes ALL faces (base, top, curved surface); curved/lateral SA excludes bases",
      "Slant height l = √(r² + h²) for a cone — always compute l before finding CSA",
      "Volume scales as the cube of linear dimensions; SA scales as the square",
      "When a solid is melted and recast, its volume is conserved but surface area changes",
      "Composite solids: add volumes; for SA, subtract areas of internal (joined) faces"
    ],
    "tips": [
      "Identify whether CSA or TSA is asked — read the question carefully",
      "For a cone, calculate l first, then CSA = πrl; a common error is using h instead of l",
      "When recasting problems, equate volumes: V₁ = n × V₂ gives the number of smaller solids",
      "π = 22/7 for most ICSE problems; note when a decimal answer is expected"
    ],
    "bestPractices": [
      "Draw and label a 3-D sketch showing r, h (and l for a cone) before writing any formula",
      "List the formula, substitute, and simplify — never combine these in one step",
      "Give the final answer with correct units (cm², cm³, m², m³) on a separate labelled line"
    ]
  },
  {
    "chapter": "Coordinate Geometry",
    "formulae": [
      "Distance PQ = √((x₂ − x₁)² + (y₂ − y₁)²)",
      "Mid-point M = ((x₁ + x₂)/2, (y₁ + y₂)/2)",
      "Slope (gradient) m = (y₂ − y₁)/(x₂ − x₁)",
      "Slope-intercept form: y = mx + c;  Point-slope form: y − y₁ = m(x − x₁)",
      "Collinearity: points A, B, C are collinear if slope AB = slope BC"
    ],
    "logic": [
      "Distance formula is Pythagoras applied to the horizontal and vertical components of a segment",
      "Parallel lines have equal slopes; perpendicular lines have slopes whose product = −1",
      "A negative slope means the line falls left to right; zero slope means horizontal; undefined slope means vertical",
      "The x-intercept is found by setting y = 0; the y-intercept by setting x = 0",
      "Coordinate geometry converts geometric problems into algebraic equations — a powerful problem-solving tool"
    ],
    "tips": [
      "Avoid division errors in slope: (y₂ − y₁) goes in the numerator, (x₂ − x₁) in the denominator",
      "To prove a quadrilateral is a parallelogram, show both pairs of opposite sides are equal (or parallel)",
      "For a right angle, verify slope₁ × slope₂ = −1; for parallel, m₁ = m₂",
      "In distance problems with surds, leave answers as surds unless a decimal is requested"
    ],
    "bestPractices": [
      "Label each point with coordinates and show substitution in the formula",
      "For proofs (e.g. show ABCD is a rhombus), verify ALL required conditions, not just one",
      "Draw a rough coordinate diagram to check whether your answer is geometrically reasonable"
    ]
  },
  {
    "chapter": "Graphs",
    "formulae": [
      "y = mx + c is a straight line with slope m and y-intercept c",
      "y = kx (direct variation): straight line through origin",
      "y = k/x (inverse variation): rectangular hyperbola",
      "y = ax² (quadratic): parabola symmetric about the y-axis",
      "To read a graph: simultaneous solution = intersection point; root/zero = x-intercept"
    ],
    "logic": [
      "Every point on a line satisfies its equation — use this to verify or find unknowns",
      "The gradient of a line graph = change in y / change in x (pick two widely-spaced points for accuracy)",
      "A distance-time graph: slope = speed; a speed-time graph: area under curve = distance",
      "An equation has as many solutions as the graph intersects the x-axis (or the line y = k)",
      "Graphs provide approximate solutions to equations; algebraic methods give exact solutions"
    ],
    "tips": [
      "Use at least THREE points to draw a straight line — a third point acts as a check",
      "Choose a scale that fills most of the graph paper; a cramped graph loses accuracy",
      "To solve two simultaneous equations graphically, draw both lines and read off their intersection",
      "Label axes with the variable name and units; label each line with its equation"
    ],
    "bestPractices": [
      "Construct a table of at least 5 (x, y) values before plotting any curve",
      "Connect plotted points with a smooth curve (for quadratics) or a ruler-drawn straight line",
      "Read values from the graph at the exact grid point where possible; mark the reading with a dotted line"
    ]
  },
  {
    "chapter": "Construction of Polygons",
    "formulae": [
      "Each interior angle of a regular n-gon = (n − 2) × 180° / n",
      "Regular hexagon: each angle = 120°; side = radius of circumscribed circle",
      "Regular octagon: each angle = 135°",
      "To construct a perpendicular bisector: open compass > half the segment; arcs from both ends",
      "To bisect an angle: equal arcs from vertex, then arcs from the two points; join vertex to intersection"
    ],
    "logic": [
      "All geometric constructions use only a straight edge (ruler for drawing, NOT measuring) and a compass",
      "A regular hexagon inscribed in a circle has side equal to the radius — no calculation needed",
      "Any regular polygon can be constructed by dividing the full 360° by n and stepping off equal arcs",
      "The accuracy of a construction is judged by how closely the drawn figure matches the theoretical one",
      "Construction differs from drawing: lengths must be set off with a compass, not read from a scale"
    ],
    "tips": [
      "Keep your compass at the set radius throughout the step — do not adjust it accidentally",
      "Use a sharp pencil and thin lines; erase construction arcs only after checking the figure",
      "For a square, construct one right angle (using perpendicular bisector) then step off equal sides",
      "Re-check by measuring all sides and angles of the finished polygon before submitting"
    ],
    "bestPractices": [
      "Leave all construction arcs visible — they carry method marks in an exam",
      "Label every vertex and mark equal sides or angles on the completed figure",
      "Write the steps of construction in numbered sentences alongside the figure"
    ]
  }
];
