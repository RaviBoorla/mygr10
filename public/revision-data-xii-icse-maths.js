// ─── Grade XII ICSE (ISC) Mathematics revision notes ──────────────────────────
// screen-notes.js reads REVISION['XII ICSE Mathematics'] when state.grade==='XII' && state.stream==='ICSE'
REVISION['XII ICSE Mathematics'] = [
  {
    "chapter": "Relations and Functions",
    "formulae": [
      "A relation R on A is reflexive if (a,a) ∈ R ∀ a; symmetric if (a,b) ∈ R ⇒ (b,a) ∈ R; transitive if (a,b) ∈ R and (b,c) ∈ R ⇒ (a,c) ∈ R",
      "Equivalence relation: reflexive + symmetric + transitive simultaneously",
      "f: A → B is one-one (injective) if f(a₁) = f(a₂) ⇒ a₁ = a₂; onto (surjective) if range = codomain",
      "Composite (gof)(x) = g(f(x)); domain of gof ⊆ domain of f; (gof)⁻¹ = f⁻¹og⁻¹",
      "f is invertible ⟺ f is bijective; (f⁻¹)⁻¹ = f and fof⁻¹ = I_B, f⁻¹of = I_A",
      "Number of functions from A (m elements) to B (n elements) = nᵐ; bijections exist only if m = n (then n! bijections)"
    ],
    "logic": [
      "An equivalence relation partitions the set into disjoint equivalence classes; every element belongs to exactly one class",
      "To verify one-one: use contrapositive — assume f(a₁) = f(a₂) and deduce a₁ = a₂; for onto: show every y in codomain has a pre-image",
      "Composition is associative: ho(gof) = (hog)of, but generally not commutative: fog ≠ gof",
      "A function has an inverse iff it is bijective; if f maps a to b then f⁻¹ maps b to a — swap coordinates",
      "For functions defined on finite sets, injective + same-size domain and codomain implies bijective"
    ],
    "tips": [
      "In ISC questions, state the type of relation (reflexive/symmetric/transitive) with a specific counter-example when a property fails",
      "To find f⁻¹: write y = f(x), solve for x in terms of y, then replace y with x to give the rule of f⁻¹",
      "Do not assume gof = fog — always compute both when checking commutativity",
      "Equivalence class of an element a is {x ∈ A : x R a} — always find this by applying the relation definition directly"
    ],
    "bestPractices": [
      "State the domain and codomain explicitly before proving any property of a relation or function",
      "Support each claim (reflexive/symmetric/transitive) with a brief algebraic proof, not just a statement",
      "When proving a function is bijective, prove one-one and onto in separate, clearly labelled steps"
    ]
  },
  {
    "chapter": "Inverse Trigonometric Functions",
    "formulae": [
      "Principal value ranges: sin⁻¹ ∈ [−π/2, π/2]; cos⁻¹ ∈ [0, π]; tan⁻¹ ∈ (−π/2, π/2); cosec⁻¹, sec⁻¹ ∈ [−π/2, π/2]∖{0} and [0, π]∖{π/2}",
      "sin⁻¹(−x) = −sin⁻¹x; cos⁻¹(−x) = π − cos⁻¹x; tan⁻¹(−x) = −tan⁻¹x",
      "sin⁻¹x + cos⁻¹x = π/2; tan⁻¹x + cot⁻¹x = π/2; sec⁻¹x + cosec⁻¹x = π/2",
      "tan⁻¹x + tan⁻¹y = tan⁻¹((x+y)/(1−xy)) when xy < 1; = π + tan⁻¹((x+y)/(1−xy)) when x > 0, xy > 1",
      "2tan⁻¹x = sin⁻¹(2x/(1+x²)) = cos⁻¹((1−x²)/(1+x²)) = tan⁻¹(2x/(1−x²)) for |x| ≤ 1",
      "sin(sin⁻¹x) = x for x ∈ [−1,1]; sin⁻¹(sin x) = x only for x ∈ [−π/2, π/2]"
    ],
    "logic": [
      "Inverse trig functions are defined only by restricting the domain to make the original function bijective; always check the principal value range",
      "sin⁻¹(sin x) = x only when x is already in [−π/2, π/2]; otherwise reduce x to that interval first",
      "The addition formulas for tan⁻¹ need a sign-check on xy; write the condition clearly when answering",
      "Conversion between inverse trig forms uses right-triangle substitution: if θ = sin⁻¹(a/b), draw a triangle with opposite a and hypotenuse b",
      "Many simplification problems rely on tan⁻¹x + tan⁻¹(1/x) = π/2 (x > 0) or −π/2 (x < 0)"
    ],
    "tips": [
      "Always state the principal value range when asked to find an inverse trig value — do not give multiple answers",
      "For tan⁻¹ addition, check the sign of xy before writing the formula — a wrong-formula error is very common",
      "Simplify 2tan⁻¹(1/2) + 2tan⁻¹(1/3) type expressions using the double-angle formula after checking the range",
      "Differentiation of inverse trig (d/dx sin⁻¹x = 1/√(1−x²)) is a core formula — also memorise the derivatives of tan⁻¹ and sec⁻¹"
    ],
    "bestPractices": [
      "Write the principal value range at the start of every inverse trig solution",
      "When a substitution like x = tan θ is used, state the range of θ explicitly",
      "Show intermediate simplification steps when converting between inverse trig forms — do not skip directly to the answer"
    ]
  },
  {
    "chapter": "Matrices",
    "formulae": [
      "A matrix of order m × n has mn elements; (AB)ᵢⱼ = Σₖ Aᵢₖ Bₖⱼ (multiplication defined when inner dimensions match)",
      "Transpose: (Aᵀ)ᵢⱼ = Aⱼᵢ; (AB)ᵀ = BᵀAᵀ; (Aᵀ)ᵀ = A",
      "Symmetric matrix: Aᵀ = A; Skew-symmetric: Aᵀ = −A (diagonal elements are 0)",
      "Every square matrix: A = ½(A + Aᵀ) + ½(A − Aᵀ) = (symmetric part) + (skew-symmetric part)",
      "Identity: AI = IA = A; Null matrix: A + O = A; A·O = O·A = O",
      "If AB = BA = I then B = A⁻¹; for a 2×2 matrix [[a,b],[c,d]]: A⁻¹ = (1/det A)·[[d,−b],[−c,a]]"
    ],
    "logic": [
      "Matrix multiplication is not commutative in general: AB ≠ BA; always check whether AB and BA are both even defined",
      "The product AB is defined only when the number of columns in A equals the number of rows in B; order of AB is (rows of A) × (cols of B)",
      "A matrix equation AX = B can be solved as X = A⁻¹B, provided A⁻¹ exists (det A ≠ 0)",
      "Symmetric and skew-symmetric decomposition always works for any square matrix; it is unique",
      "For square matrices of the same order: (A+B)² = A² + AB + BA + B² ≠ A² + 2AB + B² unless AB = BA"
    ],
    "tips": [
      "In ISC, solve 3-variable systems using matrix method (A⁻¹B); state det A first — if 0, state the system is inconsistent or dependent",
      "When asked to prove a matrix identity, work on one side only or show LHS = RHS through known results, not by assuming the result",
      "The formula for the inverse of a 3×3 matrix via cofactors is A⁻¹ = (1/|A|) adj A — compute the cofactor matrix carefully and transpose it",
      "Common error: forgetting to transpose the cofactor matrix when forming adj A — verify with A·(adj A) = |A|·I"
    ],
    "bestPractices": [
      "Label the order (m × n) of every matrix introduced to avoid dimension errors in multiplication",
      "Check det A ≠ 0 before attempting to find the inverse; write this check as a step",
      "Verify the inverse by computing AA⁻¹ = I as the final step in any matrix-inverse problem"
    ]
  },
  {
    "chapter": "Determinants",
    "formulae": [
      "2×2: |A| = ad − bc for [[a,b],[c,d]]; 3×3 by expansion along any row or column using cofactors Cᵢⱼ = (−1)^(i+j) Mᵢⱼ",
      "Properties: det(Aᵀ) = det A; det(kA) = kⁿ det A (n×n matrix); det(AB) = det A · det B",
      "If two rows (or columns) are identical, det = 0; interchanging two rows changes sign of det",
      "adj A = (cofactor matrix)ᵀ; A⁻¹ = (adj A)/|A| (for |A| ≠ 0)",
      "Area of triangle with vertices (x₁,y₁),(x₂,y₂),(x₃,y₃) = ½|det [[x₁,y₁,1],[x₂,y₂,1],[x₃,y₃,1]]|",
      "Cramer's rule: xᵢ = Dᵢ/D where D = det(coefficient matrix), Dᵢ = det with ith column replaced by constants"
    ],
    "logic": [
      "Expanding along the row or column with the most zeros minimises arithmetic; always identify that row/column first",
      "Adding a multiple of one row to another does not change the determinant — use this to create zeros strategically",
      "A square matrix is singular (no inverse) exactly when its determinant is zero",
      "For a consistent, unique solution of Ax = b, the determinant of A must be non-zero; zero determinant signals either no solution or infinitely many",
      "The cofactor expansion can be done along any row or column — the value is the same; use this to verify a calculation"
    ],
    "tips": [
      "Simplify determinants by applying row or column operations to create zeros before expanding — this is expected in ISC long answers",
      "State each row/column operation using correct notation (R₁ → R₁ − R₂) before applying it",
      "In Cramer's rule, label D, D_x, D_y, D_z clearly and evaluate each separately",
      "Watch the sign pattern of cofactors: (+−+) / (−+−) / (+−+) for a 3×3 starting from (1,1)"
    ],
    "bestPractices": [
      "Carry out row/column reductions step-by-step, writing the transformed matrix at each stage",
      "After finding the inverse via adjoint, verify by multiplying A·A⁻¹ and checking you get I",
      "State whether the system has a unique solution, no solution, or infinitely many, based on the determinant value"
    ]
  },
  {
    "chapter": "Continuity and Differentiability",
    "formulae": [
      "f is continuous at x = a if: lim(x→a) f(x) = f(a); i.e., LHL = RHL = f(a)",
      "Chain rule: d/dx[f(g(x))] = f′(g(x))·g′(x); for y = f(u), u = g(x): dy/dx = (dy/du)·(du/dx)",
      "Implicit differentiation: differentiate both sides w.r.t. x, treating y as y(x), then isolate dy/dx",
      "Parametric: if x = f(t), y = g(t) then dy/dx = (dy/dt)/(dx/dt); d²y/dx² = (d/dt(dy/dx))/(dx/dt)",
      "d/dx(sin⁻¹x) = 1/√(1−x²); d/dx(cos⁻¹x) = −1/√(1−x²); d/dx(tan⁻¹x) = 1/(1+x²)",
      "Rolle's theorem: f continuous on [a,b], differentiable on (a,b), f(a)=f(b) ⇒ ∃ c ∈ (a,b) with f′(c)=0; LMVT: f′(c) = (f(b)−f(a))/(b−a)"
    ],
    "logic": [
      "Differentiability ⇒ continuity, but continuity does not imply differentiability; a sharp corner is continuous but not differentiable",
      "To check continuity at a point, always compute LHL, RHL and f(a) separately and show all three are equal",
      "For piecewise functions, check continuity at every breakpoint; differentiability requires LHD = RHD at each breakpoint",
      "Logarithmic differentiation is the standard technique when the exponent itself contains the variable (e.g. y = xˢⁱⁿˣ): take ln both sides, differentiate",
      "The second derivative d²y/dx² measures the rate of change of the slope; it is used to classify stationary points (positive = minimum, negative = maximum)"
    ],
    "tips": [
      "In ISC, questions often ask to verify Rolle's or LMVT — always check all three conditions before finding c; show the check clearly",
      "For y = (f(x))^g(x), use logarithmic differentiation (ln y = g(x)·ln f(x)) — it avoids a complicated chain rule",
      "Computing LHD/RHD at a breakpoint: use the derivative formula for each piece, then substitute the breakpoint value from that side",
      "When differentiating implicitly, every occurrence of y needs the chain-rule factor dy/dx — a common omission"
    ],
    "bestPractices": [
      "Always write the three-part check (LHL, RHL, f(a)) when verifying continuity at a point, even if it looks obvious",
      "Neatly separate the differentiation step from the simplification step — many marks are awarded for method",
      "State the theorem (Rolle's/LMVT) by name, list its conditions, verify each, then find c"
    ]
  },
  {
    "chapter": "Applications of Derivatives",
    "formulae": [
      "Slope of tangent at (x₀,y₀): m = dy/dx|(x₀,y₀); equation of tangent: y − y₀ = m(x − x₀)",
      "Normal is perpendicular to tangent; slope of normal = −1/m; equation: y − y₀ = (−1/m)(x − x₀)",
      "f is strictly increasing on I if f′(x) > 0 on I; strictly decreasing if f′(x) < 0",
      "Critical points: f′(x) = 0 or f′(x) undefined; second-derivative test: f′′(c) > 0 ⇒ local min; f′′(c) < 0 ⇒ local max; f′′(c) = 0 is inconclusive",
      "First-derivative test: sign change of f′ from + to − at c ⇒ local max; − to + ⇒ local min; no change ⇒ no extremum",
      "Maximum/minimum on a closed interval [a,b]: evaluate f at all critical points and at a and b; compare"
    ],
    "logic": [
      "Tangent and normal questions require finding the point on the curve, computing dy/dx at that point, then writing the line equation",
      "Increasing/decreasing intervals are found by solving f′(x) > 0 and f′(x) < 0; include the sign table or factor analysis",
      "Local extrema exist where f′ changes sign; a point where f′ = 0 but does not change sign is an inflection point",
      "For word problems (maximum area, minimum cost), set up the function, reduce to one variable using the constraint, then differentiate",
      "When f′′(c) = 0, resort to the first-derivative test or higher-order derivatives — do not declare the test inconclusive and stop"
    ],
    "tips": [
      "If asked for both tangent and normal at a point, compute dy/dx once and use it for both — negating the slope for the normal",
      "For the increasing/decreasing question, state open or closed intervals correctly — the boundary points depend on whether f′ is 0 there",
      "In optimisation problems, always check that the solution is a maximum (or minimum) using the second-derivative test or the interval-endpoint comparison",
      "Length of sub-tangent = y/(dy/dx); length of sub-normal = y·(dy/dx) — these appear in some ISC problems"
    ],
    "bestPractices": [
      "Draw a rough sign table for f′(x) to determine increasing/decreasing intervals systematically",
      "In word problems, define variables clearly, write the objective function and constraint, then proceed to differentiation",
      "Show that the critical point gives a maximum or minimum explicitly — an unsupported answer loses marks"
    ]
  },
  {
    "chapter": "Integrals",
    "formulae": [
      "∫xⁿ dx = xⁿ⁺¹/(n+1) + C (n ≠ −1); ∫1/x dx = ln|x| + C; ∫eˣ dx = eˣ + C; ∫aˣ dx = aˣ/ln a + C",
      "∫sin x dx = −cos x + C; ∫cos x dx = sin x + C; ∫tan x dx = ln|sec x| + C; ∫sec²x dx = tan x + C",
      "Integration by parts (ILATE): ∫u·v dx = u·∫v dx − ∫(u′·∫v dx) dx; choose u using ILATE order",
      "∫1/√(a²−x²) dx = sin⁻¹(x/a) + C; ∫1/(a²+x²) dx = (1/a)tan⁻¹(x/a) + C; ∫1/√(x²±a²) dx = ln|x + √(x²±a²)| + C",
      "Partial fractions: (px+q)/((x−a)(x−b)) = A/(x−a) + B/(x−b); for repeated factor (x−a)²: A/(x−a) + B/(x−a)²",
      "Definite integral ∫ₐᵇ f(x)dx = F(b) − F(a); King's property: ∫ₐᵇ f(x)dx = ∫ₐᵇ f(a+b−x)dx"
    ],
    "logic": [
      "Integration is the reverse of differentiation; always add the constant C for indefinite integrals",
      "For ∫f(g(x))g′(x)dx, use substitution t = g(x) — the standard pattern for composite integrands",
      "ILATE rule for integration by parts orders the choice of u: Inverse trig > Logarithm > Algebraic > Trigonometric > Exponential",
      "King's property (replace x by a+b−x) simplifies many definite integrals — especially those with sin/cos combinations",
      "Reduction formulas for ∫sinⁿx dx and ∫cosⁿx dx allow systematic evaluation of higher powers by reducing the power by 2"
    ],
    "tips": [
      "For ∫(px+q)/√(ax²+bx+c) dx, write the numerator as a linear combination of the derivative of the denominator plus a constant — split and integrate separately",
      "In definite integrals, substitute limits after anti-differentiating; never forget to subtract the lower limit value",
      "Partial fractions require the denominator to be fully factored — always factorise the denominator first",
      "∫√(a²−x²) dx = (x/2)√(a²−x²) + (a²/2)sin⁻¹(x/a) + C — memorise this result for circle-area calculations"
    ],
    "bestPractices": [
      "Write the substitution explicitly (let t = …, then dt = … dx) before proceeding — do not skip this step",
      "For integration by parts, label u and dv at the start, then apply the formula systematically",
      "In a definite integral, state clearly the limits and evaluate F(b) − F(a) in a separate step"
    ]
  },
  {
    "chapter": "Applications of Integrals",
    "formulae": [
      "Area under curve y = f(x) between x = a and x = b: A = ∫ₐᵇ |f(x)| dx (use modulus if f changes sign)",
      "Area between two curves y = f(x) and y = g(x), f(x) ≥ g(x) on [a,b]: A = ∫ₐᵇ [f(x) − g(x)] dx",
      "Area using horizontal strips (x as function of y): A = ∫_c^d |g(y)| dy or ∫_c^d [g₂(y) − g₁(y)] dy",
      "Area of ellipse x²/a² + y²/b² = 1 is πab; area of circle x² + y² = r² is πr²",
      "For parabola y² = 4ax, area between curve and latus rectum (from vertex) = (8/3)a² by integration",
      "Split the integral at points where f(x) = 0 or the curves intersect to handle sign changes"
    ],
    "logic": [
      "Always sketch the region to identify upper/lower boundaries and to find intersection points before integrating",
      "Find intersection points by solving the equations of the two curves simultaneously — these become the limits of integration",
      "If a curve dips below the x-axis in part of [a,b], split the integral and add the absolute values of each part",
      "Choosing horizontal strips (integrating with respect to y) is more convenient when curves are expressed as x = g(y)",
      "The signed area can be negative if the region is below the x-axis; for geometric area always take absolute values or split"
    ],
    "tips": [
      "In ISC, always draw a rough sketch and label the region — partial marks are awarded for the sketch even if the final integral is wrong",
      "Find intersection points algebraically and verify them by substitution before using them as limits",
      "For the region bounded by two curves, subtract the lower curve from the upper curve at every x — do not guess which is upper without checking",
      "Units: if x and y are in centimetres, the area is in cm² — state units when given in the problem"
    ],
    "bestPractices": [
      "Sketch the graph, shade the required region, and mark the intersection points as the first step in every area problem",
      "Write the integral with correct limits and integrand before evaluating — the set-up carries marks",
      "After evaluating, check the sign of the result; a negative area indicates an error (forgot the sign split or reversed the limits)"
    ]
  },
  {
    "chapter": "Differential Equations",
    "formulae": [
      "Order = highest derivative present; degree = power of the highest derivative (after removing radicals and fractions)",
      "Variable separable: g(y)dy = f(x)dx → ∫g(y)dy = ∫f(x)dx + C",
      "Homogeneous equation: dy/dx = F(y/x); substitute y = vx (so dy/dx = v + x·dv/dx) to separate variables",
      "Linear first-order: dy/dx + P(x)y = Q(x); integrating factor μ = e^(∫P dx); solution: y·μ = ∫Q·μ dx + C",
      "General solution contains arbitrary constants equal to the order; particular solution uses given initial conditions",
      "Equation of family of curves: differentiate the family equation enough times to eliminate all arbitrary constants"
    ],
    "logic": [
      "Variable separable form is recognised when the equation can be written as f(x)dx = g(y)dy after algebraic rearrangement",
      "Homogeneous equations are identified when every term has the same total degree in x and y, or dy/dx = F(y/x); always use the substitution y = vx",
      "Linear equations must be in the standard form dy/dx + Py = Q before computing the integrating factor",
      "The integrating factor e^(∫P dx) must be multiplied to both sides of the equation; the left side then becomes d/dx(y·μ)",
      "Order of the differential equation of a family = number of arbitrary constants in the family equation"
    ],
    "tips": [
      "In ISC, state the type of differential equation (variable separable / homogeneous / linear) before solving — it shows method awareness",
      "For linear equations, simplify P(x) before computing ∫P dx to avoid errors in the integrating factor",
      "With homogeneous equations, back-substitute v = y/x at the end before applying initial conditions",
      "Degree is defined only when the equation is polynomial in derivatives — if a derivative is under a radical, the equation may have no defined degree"
    ],
    "bestPractices": [
      "Identify and state the type of the equation as the first line of your solution",
      "Show all integration steps, especially when partial fractions or substitutions are needed within the solution",
      "Apply initial conditions after finding the general solution, then write the particular solution clearly as a final statement"
    ]
  },
  {
    "chapter": "Vectors",
    "formulae": [
      "Position vector of P(x,y,z): →r = xî + yĵ + zk̂; magnitude |→r| = √(x²+y²+z²); unit vector r̂ = →r/|→r|",
      "→a · →b = |→a||→b|cos θ = a₁b₁ + a₂b₂ + a₃b₃; projection of →a on →b = (→a·→b)/|→b|",
      "→a × →b = |→a||→b|sin θ·n̂; computed as the 3×3 determinant with î,ĵ,k̂ in row 1; |→a × →b| = area of parallelogram",
      "→a · (→b × →c) = scalar triple product = volume of parallelepiped; →a·(→a×→b) = 0 always",
      "Vectors →a, →b, →c are coplanar ⟺ →a·(→b × →c) = 0",
      "Section formula: point dividing P₁P₂ in ratio m:n is (m·→r₂ + n·→r₁)/(m+n) (internally); (m·→r₂ − n·→r₁)/(m−n) (externally)"
    ],
    "logic": [
      "Dot product is commutative and returns a scalar; cross product is anti-commutative (→a×→b = −→b×→a) and returns a vector",
      "î×î = 0, î×ĵ = k̂, ĵ×k̂ = î, k̂×î = ĵ (cyclic); reversing the order changes the sign",
      "Two vectors are parallel iff their cross product is 0; perpendicular iff their dot product is 0",
      "The scalar triple product gives the signed volume; its absolute value is the volume of the parallelepiped formed by the three vectors",
      "A unit vector along →a is obtained by dividing by its magnitude; two vectors can have the same direction but different magnitudes"
    ],
    "tips": [
      "Expand the cross-product determinant by cofactors along the first row — write the 2×2 minors carefully to avoid sign errors",
      "For 'find the vector perpendicular to both', compute →a × →b; for a unit perpendicular, divide by |→a × →b|",
      "When asked whether three points are collinear, show that the vectors between them are parallel (cross product = 0)",
      "Scalar triple product cyclic property: →a·(→b×→c) = →b·(→c×→a) = →c·(→a×→b) — use this to avoid re-computing"
    ],
    "bestPractices": [
      "Always express vectors in component form before computing dot or cross products",
      "Label the result of a cross product as a vector with î, ĵ, k̂ components — do not leave it as a determinant",
      "State the geometric meaning of the result (angle, area, volume) when the question asks for interpretation"
    ]
  },
  {
    "chapter": "Three Dimensional Geometry",
    "formulae": [
      "Direction cosines l, m, n of a line: l = cos α, m = cos β, n = cos γ; l² + m² + n² = 1; direction ratios a,b,c: l:m:n = a:b:c",
      "Line through (x₁,y₁,z₁) with direction ratios a,b,c — symmetric form: (x−x₁)/a = (y−y₁)/b = (z−z₁)/c; vector form: →r = →a + λ→b",
      "Angle θ between lines with direction ratios (a₁,b₁,c₁) and (a₂,b₂,c₂): cos θ = |a₁a₂+b₁b₂+c₁c₂|/√(a₁²+b₁²+c₁²)√(a₂²+b₂²+c₂²)",
      "Equation of plane: (→r − →a)·→n = 0 (vector); ax + by + cz + d = 0 (Cartesian); normal vector is (a,b,c)",
      "Distance from point (x₁,y₁,z₁) to plane ax + by + cz + d = 0: |ax₁+by₁+cz₁+d|/√(a²+b²+c²)",
      "Shortest distance between skew lines →r = →a₁+λ→b₁ and →r = →a₂+μ→b₂: d = |(→a₂−→a₁)·(→b₁×→b₂)| / |→b₁×→b₂|"
    ],
    "logic": [
      "Direction cosines are unique for a given orientation; direction ratios are proportional (not unique) but determine the same line direction",
      "Two lines in 3D can be parallel, intersecting, or skew; test for intersection by equating the parametric forms and checking consistency",
      "A plane is determined by: a point and normal vector, three non-collinear points, or two intersecting/parallel lines",
      "The angle between a line and a plane = 90° − (angle between the line and the normal to the plane)",
      "Foot of perpendicular from a point to a line: express the foot as a point on the line using parameter λ, then use the dot product condition that the connecting vector is perpendicular to the line direction"
    ],
    "tips": [
      "In skew-line problems, first check the lines are neither parallel nor intersecting; verify by computing →b₁×→b₂ ≠ 0",
      "When converting between symmetric and vector form, read off the point and direction directly — do not re-derive",
      "For the equation of a plane through three points, use the condition that the normal is perpendicular to the two vectors in the plane (formed by the three points)",
      "Perpendicular distance formula: apply it directly but ensure the plane is in the form ax+by+cz+d = 0 (move all terms to one side first)"
    ],
    "bestPractices": [
      "Verify that the given points/lines actually satisfy the final equation of the plane — a quick check that earns no marks but prevents errors",
      "Clearly write the vector form and Cartesian form in the answer unless one specific form is requested",
      "When finding the angle between a line and a plane, state the formula using the sine of the angle (not cosine) — the angle is between the line and its projection, not the normal"
    ]
  },
  {
    "chapter": "Linear Programming",
    "formulae": [
      "Linear programming problem (LPP): Maximise or minimise Z = ax + by subject to linear constraints and x ≥ 0, y ≥ 0",
      "Feasible region: set of all points satisfying all constraints simultaneously; it is convex",
      "Corner-point (vertex) theorem: if the optimal value exists, it occurs at a corner (vertex) of the feasible region",
      "Unbounded region: optimal value may or may not exist; check by comparing Z at corners with the objective function line",
      "Iso-profit (or iso-cost) line: ax + by = k for different values of k; the optimal corner is where this line last touches (or first touches) the feasible region",
      "Bounded feasible region always has both a maximum and minimum; unbounded region has a maximum or minimum only if the feasible region is on the right side of the iso-line"
    ],
    "logic": [
      "Every linear constraint divides the plane into two half-planes; the feasible region is the intersection of all required half-planes including the non-negativity constraints",
      "To identify which half-plane a constraint represents, substitute the origin (0,0) — if it satisfies the inequality, the origin side is the feasible half-plane",
      "For an infeasible problem, the intersection of all constraints is empty — no feasible region exists; state this clearly",
      "In an unbounded problem, the objective function can keep increasing (or decreasing) indefinitely unless the feasible region is bounded on the relevant side",
      "The optimal value of Z at a corner is found by substituting the corner coordinates into Z = ax + by — not by estimation"
    ],
    "tips": [
      "Find corner points by solving pairs of boundary lines simultaneously; use all pairs and retain only those in the feasible region",
      "In ISC, draw the feasible region neatly, shade it, label every corner, and show the Z values at each corner",
      "For maximisation with an unbounded region, check that no feasible point exists for which Z > Z_max — this is the standard ISC requirement",
      "If the problem has two or more corners giving the same optimal Z, any point on the line segment between them is also optimal — state this"
    ],
    "bestPractices": [
      "Draw a clear, labelled graph with all constraint lines, the feasible region shaded, and corner points marked",
      "Make a table of corner points and their corresponding Z values; circle the optimal value",
      "State the final answer as 'Maximum/Minimum value of Z is __ at x = __, y = __' as a complete sentence"
    ]
  },
  {
    "chapter": "Probability",
    "formulae": [
      "Conditional probability: P(A|B) = P(A∩B)/P(B), P(B) > 0; multiplication theorem: P(A∩B) = P(A)·P(B|A) = P(B)·P(A|B)",
      "Independent events: P(A∩B) = P(A)·P(B); equivalently P(A|B) = P(A) and P(B|A) = P(B)",
      "Total probability theorem: P(A) = Σᵢ P(Bᵢ)·P(A|Bᵢ) for partition {B₁,B₂,…,Bₙ} of sample space",
      "Bayes' theorem: P(Bᵢ|A) = P(Bᵢ)·P(A|Bᵢ) / Σⱼ P(Bⱼ)·P(A|Bⱼ)",
      "Binomial distribution: P(X=r) = ⁿCᵣ·pʳ·(1−p)ⁿ⁻ʳ; mean = np; variance = np(1−p); σ = √(np(1−p))",
      "P(A∪B) = P(A) + P(B) − P(A∩B); for mutually exclusive: P(A∪B) = P(A) + P(B)"
    ],
    "logic": [
      "Conditional probability reduces the sample space to B — only outcomes in B are considered; P(A|B) is the probability of A within that restricted space",
      "Independence means that the occurrence of one event gives no information about the other — verify algebraically, not by intuition",
      "The total probability theorem requires a partition of the sample space: the Bᵢ must be mutually exclusive and exhaustive",
      "Bayes' theorem reverses the conditioning: given that A occurred, it finds the probability that it came from cause Bᵢ; set up a tree diagram",
      "Binomial distribution models repeated identical independent trials with two outcomes; n, p must be clearly identified from the word problem"
    ],
    "tips": [
      "In Bayes' theorem questions, organise work in a table with columns: Bᵢ, P(Bᵢ), P(A|Bᵢ), P(Bᵢ)·P(A|Bᵢ); find P(A) by summing the last column",
      "Independent events ≠ mutually exclusive events; mutually exclusive events with positive probabilities are always dependent",
      "For repeated-trial problems, check whether binomial applies: fixed n, constant p, independence of trials",
      "Show all conditional probability steps; writing only the final fraction without the formula loses method marks in ISC"
    ],
    "bestPractices": [
      "Draw a probability tree for multi-stage problems; label each branch with its probability and multiply along branches",
      "For Bayes' theorem, write the theorem formula first, then substitute values — do not go straight to numbers",
      "Define events using capital letters (A, B, C) and state what each event represents before computing probabilities"
    ]
  },
  {
    "chapter": "Statistics",
    "formulae": [
      "Mean: x̄ = Σfᵢxᵢ/Σfᵢ; Variance: σ² = Σfᵢ(xᵢ−x̄)²/Σfᵢ = Σfᵢxᵢ²/Σfᵢ − x̄²; SD σ = √(variance)",
      "Karl Pearson's correlation coefficient: r = Σ(xᵢ−x̄)(yᵢ−ȳ) / (n·σₓ·σᵧ); equivalently r = [nΣxᵢyᵢ − (Σxᵢ)(Σyᵢ)] / √([nΣxᵢ²−(Σxᵢ)²][nΣyᵢ²−(Σyᵢ)²])",
      "−1 ≤ r ≤ 1; r = 1 (perfect positive), r = −1 (perfect negative), r = 0 (no linear correlation)",
      "Regression line of y on x: y − ȳ = bᵧₓ(x − x̄) where bᵧₓ = r·(σᵧ/σₓ); regression line of x on y: x − x̄ = bₓᵧ(y − ȳ) where bₓᵧ = r·(σₓ/σᵧ)",
      "bᵧₓ · bₓᵧ = r²; sign of r = sign of bᵧₓ = sign of bₓᵧ; both regression lines pass through (x̄, ȳ)",
      "Index numbers: Laspeyre's P₀₁ = (Σp₁q₀/Σp₀q₀)×100; Paasche's P₀₁ = (Σp₁q₁/Σp₀q₁)×100; Fisher's = √(Laspeyre's × Paasche's)"
    ],
    "logic": [
      "Variance and standard deviation measure the spread of data around the mean; a larger σ indicates more variability",
      "The correlation coefficient r measures the strength and direction of the linear relationship between two variables; it is dimensionless",
      "Two regression lines exist for a dataset; they intersect at the mean point (x̄, ȳ); they coincide only when |r| = 1",
      "The regression coefficient bᵧₓ is not the same as r unless σₓ = σᵧ; always compute them separately",
      "Index numbers measure the relative change in price/quantity over time using a base period; Fisher's index is the geometric mean of Laspeyre's and Paasche's"
    ],
    "tips": [
      "In correlation and regression questions, tabulate Σx, Σy, Σx², Σy², Σxy systematically before substituting into the formula",
      "If r is given and both regression coefficients are required, use bᵧₓ = r·(σᵧ/σₓ) and bₓᵧ = r·(σₓ/σᵧ) — do not confuse the two",
      "Mean and variance of a shifted variable: if u = (x−a)/h then x̄ = a + h·ū and σₓ = h·σᵤ — use step-deviation for large data",
      "Index number problems: carefully identify which quantities are p₀, p₁, q₀, q₁ from the table headers before substituting"
    ],
    "bestPractices": [
      "Create a table with all required columns (x, y, x², y², xy) and calculate column sums before applying any formula",
      "State the formula for r or the regression coefficient before substituting numerical values",
      "Interpret r and the regression equation in context (e.g. 'a 1-unit increase in x is associated with a bᵧₓ increase in y') when the question asks for interpretation"
    ]
  }
];
