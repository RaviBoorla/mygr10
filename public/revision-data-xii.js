
// ─── Grade XII Revision Notes ─────────────────────────────────────────────────
// Separate keys per subject so Grade X content is untouched.
// screen-notes.js reads REVISION['XII Mathematics'] etc. when state.grade==='XII'.

REVISION['XII Mathematics'] = [
  {
    chapter: 'Ch 1 — Relations and Functions',
    formulae: [
      'Empty relation: R = φ ⊂ A × A (no element is related to any element)',
      'Universal relation: R = A × A (every element is related to every element)',
      'Reflexive: (a, a) ∈ R for all a ∈ A',
      'Symmetric: (a, b) ∈ R ⟹ (b, a) ∈ R for all a, b ∈ A',
      'Transitive: (a, b) ∈ R and (b, c) ∈ R ⟹ (a, c) ∈ R for all a, b, c ∈ A',
      'Equivalence relation: reflexive + symmetric + transitive',
      'Equivalence class [a] = {b ∈ A : (a, b) ∈ R} — all elements equivalent to a',
      'One-one (injective): f(x₁) = f(x₂) ⟹ x₁ = x₂',
      'Onto (surjective): for every y ∈ Y, ∃ x ∈ X such that f(x) = y  (Range = Codomain)',
      'Bijective: both one-one and onto',
      'Composition: (g∘f)(x) = g(f(x)); domain of g∘f is A when f: A→B, g: B→C',
      'Inverse function: f⁻¹ exists iff f is bijective; f⁻¹∘f = Iₐ, f∘f⁻¹ = I_B',
      'Binary operation * on A: * : A × A → A (closure required)',
      'Commutative: a * b = b * a for all a, b ∈ A',
      'Associative: (a * b) * c = a * (b * c) for all a, b, c ∈ A',
      'Identity element e: a * e = e * a = a for all a ∈ A',
      'Inverse of a: element b such that a * b = b * a = e'
    ],
    logic: [
      'A relation R on finite set A can be checked by its matrix: reflexive ↔ all diagonal entries 1; symmetric ↔ matrix = its transpose',
      'Equivalence classes partition the set A — they are disjoint and their union is A',
      'For f: X→X where X is finite: one-one ↔ onto (not true for infinite sets)',
      'f: R→R, f(x) = x² is neither one-one (f(−1)=f(1)) nor onto (negative reals have no preimage)',
      'Composition is NOT commutative in general: g∘f ≠ f∘g',
      'Composition IS associative: (h∘g)∘f = h∘(g∘f)',
      'f is invertible ⟺ f is bijective',
      'If f and g are both one-one (or both onto), then g∘f is also one-one (or onto)',
      'Identity function Iₐ: A→A, Iₐ(a) = a — always bijective',
      'Addition on ℕ is commutative and associative; has no identity in ℕ (0 ∉ ℕ)',
      'Subtraction on ℤ: not commutative, not associative, has identity 0 but inverses exist only in ℤ'
    ],
    tips: [
      'To prove one-one: assume f(x₁) = f(x₂) and show x₁ = x₂ — do NOT assume x₁ ≠ x₂',
      'To prove onto: start with arbitrary y ∈ codomain, find x in domain with f(x) = y',
      'To disprove one-one: give a counterexample — two different inputs giving same output',
      'Equivalence class question: find all elements related to the given element under R',
      'Binary operation table (Cayley table): check closure (all entries ∈ A), commutativity (table symmetric about diagonal)',
      'Board exam: "Verify equivalence" — check all three properties explicitly with proofs'
    ],
    bestPractices: [
      'Clearly state domain and codomain when defining a function',
      'For equivalence relation proofs, address reflexive, symmetric, transitive in order — three separate paragraphs',
      'When finding f⁻¹: let f(x) = y, solve for x in terms of y, then replace y with x',
      'Check that an operation is "well-defined" on the set (result stays in the set) before verifying other properties'
    ]
  }
];

REVISION['XII Mathematics'].push(
  {
    chapter: 'Ch 2 — Inverse Trigonometric Functions',
    formulae: [
      'sin⁻¹: domain [−1,1], range [−π/2, π/2]  (principal value branch)',
      'cos⁻¹: domain [−1,1], range [0, π]',
      'tan⁻¹: domain ℝ, range (−π/2, π/2)',
      'cosec⁻¹: domain ℝ−(−1,1), range [−π/2, π/2]−{0}',
      'sec⁻¹: domain ℝ−(−1,1), range [0, π]−{π/2}',
      'cot⁻¹: domain ℝ, range (0, π)',
      'sin⁻¹(sin x) = x  for x ∈ [−π/2, π/2];  sin(sin⁻¹ x) = x  for x ∈ [−1,1]',
      'sin⁻¹(−x) = −sin⁻¹(x);  cos⁻¹(−x) = π − cos⁻¹(x);  tan⁻¹(−x) = −tan⁻¹(x)',
      'sin⁻¹ x + cos⁻¹ x = π/2  for x ∈ [−1,1]',
      'tan⁻¹ x + cot⁻¹ x = π/2  for x ∈ ℝ',
      'sec⁻¹ x + cosec⁻¹ x = π/2  for |x| ≥ 1',
      'tan⁻¹x + tan⁻¹y = tan⁻¹((x+y)/(1−xy))  when xy < 1',
      'tan⁻¹x − tan⁻¹y = tan⁻¹((x−y)/(1+xy))  when xy > −1',
      '2tan⁻¹x = sin⁻¹(2x/(1+x²)) = cos⁻¹((1−x²)/(1+x²)) = tan⁻¹(2x/(1−x²))'
    ],
    logic: [
      'Principal value = the unique value in the principal value branch satisfying the equation',
      'sin⁻¹ x ≠ 1/sin x — they are completely different; ⁻¹ here means inverse function, not reciprocal',
      'Always check whether the argument lies in the domain before evaluating',
      'For sin⁻¹(sin θ): if θ ∉ [−π/2,π/2], reduce θ to equivalent angle in range first',
      'Identity sin⁻¹x + cos⁻¹x = π/2 is very frequently used in board problems',
      'tan⁻¹x + tan⁻¹y formula changes sign depending on whether xy < 1, = 1, or > 1'
    ],
    tips: [
      'Memorise the range table — principal value range is tested directly in MCQs',
      'To find principal value: let f⁻¹(k) = y → f(y) = k, find y in the principal branch',
      'Complement identity: sin⁻¹x = π/2 − cos⁻¹x is useful to convert between forms',
      '2026 Board: simplification of expressions using properties is common in 3-mark questions'
    ],
    bestPractices: [
      'State the principal branch clearly when answering "find principal value" questions',
      'Write intermediate steps when applying addition formulae — sign errors are common',
      'Verify the xy < 1 condition before applying the tan⁻¹ addition formula'
    ]
  },
  {
    chapter: 'Ch 3 — Matrices',
    formulae: [
      'Matrix order: m × n means m rows, n columns; element aᵢⱼ is in row i, column j',
      'Types: Row (1×n), Column (m×1), Square (m=n), Diagonal (aᵢⱼ=0 for i≠j), Scalar, Identity (I)',
      'Zero matrix: all elements 0; denoted O',
      'Equality: A = B iff same order and aᵢⱼ = bᵢⱼ for all i, j',
      'Addition/Scalar: (A+B)ᵢⱼ = aᵢⱼ+bᵢⱼ;  (kA)ᵢⱼ = k·aᵢⱼ  (same order required)',
      'Multiplication AB: defined when cols(A) = rows(B); (AB)ᵢₖ = Σⱼ aᵢⱼbⱼₖ; order m×p if A is m×n, B is n×p',
      'Transpose: A′ or Aᵀ — rows become columns; (AB)′ = B′A′',
      'Symmetric: A′ = A;  Skew-symmetric: A′ = −A',
      'Every square matrix A = ½(A+A′) + ½(A−A′) — symmetric + skew-symmetric',
      'Inverse: A⁻¹ exists iff AB = BA = I; A⁻¹ is unique if it exists'
    ],
    logic: [
      'Matrix multiplication is NOT commutative: AB ≠ BA in general',
      'AB = O does NOT imply A = O or B = O (unlike numbers)',
      'AC = BC does NOT imply A = B (no cancellation law)',
      'Associativity holds: (AB)C = A(BC)',
      'Distributivity holds: A(B+C) = AB + AC',
      'For symmetric A: aᵢⱼ = aⱼᵢ; for skew-symmetric: aᵢⱼ = −aⱼᵢ, so diagonal elements = 0',
      'If A is symmetric, kA, A+B, A², ABA are also symmetric (where B symmetric)'
    ],
    tips: [
      'Order of AB: (m×n)(n×p) = m×p — "inner dimensions cancel"',
      'Board exam: finding x,y,z from matrix equation — equate corresponding elements',
      'Transpose shortcut: (A+B)′ = A′+B′;  (kA)′ = kA′',
      'Skew-symmetric diagonal = 0 always — useful check'
    ],
    bestPractices: [
      'Always state matrix order when defining a matrix in answers',
      'Show each element calculation when multiplying 2×2 or 3×3 matrices',
      'To find inverse using elementary row operations: write [A|I] and reduce to [I|A⁻¹]'
    ]
  },
  {
    chapter: 'Ch 4 — Determinants',
    formulae: [
      '|A| for 1×1: |[a]| = a',
      '|A| for 2×2: |[a b; c d]| = ad − bc',
      '|A| for 3×3 (expansion along R₁): a₁(b₂c₃−b₃c₂) − b₁(a₂c₃−a₃c₂) + c₁(a₂b₃−a₃b₂)',
      'Minors Mᵢⱼ: determinant after deleting row i and column j',
      'Cofactors Aᵢⱼ = (−1)^(i+j) Mᵢⱼ',
      '|A| = a₁₁A₁₁ + a₁₂A₁₂ + a₁₃A₁₃  (expansion along any row or column)',
      'Area of triangle: ½|[x₁ y₁ 1; x₂ y₂ 1; x₃ y₃ 1]| — take ± so area is positive',
      'adj(A): transpose of cofactor matrix; A·adj(A) = adj(A)·A = |A|·I',
      'A⁻¹ = (1/|A|)·adj(A)  (only when |A| ≠ 0)',
      'Singular matrix: |A| = 0 (no inverse);  Non-singular: |A| ≠ 0',
      'Cramer\'s Rule: x = D₁/D, y = D₂/D, z = D₃/D  where D = |A|, D₁,D₂,D₃ replace columns with constants'
    ],
    logic: [
      'If any row (or column) is all zeros, determinant = 0',
      'If two rows (or columns) are identical, determinant = 0',
      'Swapping two rows changes sign of determinant; multiplying a row by k multiplies |A| by k',
      'For n×n matrix: |kA| = kⁿ|A|  (not k|A|)',
      '|AB| = |A||B|;  |A′| = |A|;  |A⁻¹| = 1/|A|',
      'Consistent system: D ≠ 0 → unique solution; D = 0 → check D₁,D₂,D₃ for no/infinite solutions'
    ],
    tips: [
      'Expand along the row/column with most zeros to minimise calculation',
      'For 3×3: use row operations to create zeros before expanding — saves time',
      '|A| = 0 check: used to find k in problems like "find k such that matrix is singular"',
      'Cofactor sign pattern: + − +  / − + −  / + − +  (checkerboard)'
    ],
    bestPractices: [
      'Clearly write out the cofactor expansion step-by-step in 5-mark questions',
      'For area of triangle: always write ½|...|; mention "taking positive value" if needed',
      'State "Since |A| ≠ 0, A is non-singular and A⁻¹ exists" before computing inverse'
    ]
  },
  {
    chapter: 'Ch 5 — Continuity and Differentiability',
    formulae: [
      'Continuity at x = c: lim(x→c) f(x) = f(c)  [LHL = RHL = f(c)]',
      'Differentiability at x = c: f′(c) = lim(h→0) [f(c+h)−f(c)]/h exists',
      'Differentiable ⟹ Continuous; Continuous ⟹ NOT necessarily differentiable',
      'Chain rule: d/dx[f(g(x))] = f′(g(x))·g′(x)',
      'd/dx[sin⁻¹x] = 1/√(1−x²);  d/dx[cos⁻¹x] = −1/√(1−x²)',
      'd/dx[tan⁻¹x] = 1/(1+x²);  d/dx[cot⁻¹x] = −1/(1+x²)',
      'd/dx[sec⁻¹x] = 1/(x√(x²−1));  d/dx[cosec⁻¹x] = −1/(x√(x²−1))',
      'd/dx[eˣ] = eˣ;  d/dx[aˣ] = aˣ·ln a;  d/dx[ln x] = 1/x',
      'Logarithmic differentiation: for y = [u(x)]^v(x), take ln both sides then differentiate',
      'Parametric differentiation: dy/dx = (dy/dt)/(dx/dt) when x=f(t), y=g(t)',
      'Second derivative: d²y/dx² = d/dx(dy/dx);  notation y″ or f″(x)',
      'Rolle\'s Theorem: f continuous on [a,b], differentiable on (a,b), f(a)=f(b) ⟹ ∃ c∈(a,b): f′(c)=0',
      'Mean Value Theorem (Lagrange): f continuous on [a,b], differentiable on (a,b) ⟹ ∃ c: f′(c)=[f(b)−f(a)]/(b−a)'
    ],
    logic: [
      '|x| is continuous everywhere but not differentiable at x = 0',
      'For piecewise functions: check LHL = RHL = f(c) at break points for continuity',
      'For differentiability at break point: check LHD = RHD',
      'Product rule: (fg)′ = f′g + fg′;  Quotient rule: (f/g)′ = (f′g−fg′)/g²',
      'Implicit differentiation: differentiate both sides w.r.t. x, treating y as function of x; collect dy/dx terms'
    ],
    tips: [
      'Logarithmic differentiation is the only clean method for xˣ, x^(sin x), etc.',
      'For parametric: dy/dx = (dy/dt)÷(dx/dt) — do NOT differentiate y directly w.r.t. x',
      'Second-order: for questions "find d²y/dx² if y = sin x + cos x" — just differentiate twice',
      'MVT board question: verify conditions, find c, state conclusion clearly'
    ],
    bestPractices: [
      'For continuity questions: explicitly evaluate LHL, RHL, f(c) as three separate steps',
      'State chain rule step explicitly: "let u = inner function, then d/dx = (d/du)(du/dx)"',
      'For implicit: after differentiating, isolate dy/dx algebraically before substituting values'
    ]
  },
  {
    chapter: 'Ch 6 — Application of Derivatives',
    formulae: [
      'Rate of change: dy/dx = rate of change of y w.r.t. x; dy/dx|ₓ₌ₓ₀ = rate at x₀',
      'Increasing on (a,b): f′(x) > 0 for all x ∈ (a,b)',
      'Decreasing on (a,b): f′(x) < 0 for all x ∈ (a,b)',
      'Critical point: f′(c) = 0 or f′(c) does not exist',
      'First Derivative Test: f′ changes +→− at c ⟹ local max; −→+ ⟹ local min; no change ⟹ inflexion',
      'Second Derivative Test: f′(c)=0 and f″(c)<0 ⟹ local max; f″(c)>0 ⟹ local min; f″(c)=0 ⟹ test fails',
      'Absolute max/min on [a,b]: evaluate f at critical points AND endpoints; largest/smallest is abs max/min',
      'Tangent slope at (x₀,y₀): m = f′(x₀);  equation: y−y₀ = m(x−x₀)',
      'Normal slope: −1/f′(x₀) (perpendicular to tangent)',
      'Approximation: Δy ≈ f′(x)·Δx;  f(x+Δx) ≈ f(x) + f′(x)·Δx'
    ],
    logic: [
      'For related rates: express both quantities in terms of a common variable (usually time), then differentiate',
      'For max/min word problems: set up objective function, find domain, find critical points, test',
      'At point of inflexion: f″(c) = 0 but function does NOT have a local max or min there',
      'If f″(c) = 0, First Derivative Test is more reliable than Second Derivative Test',
      'Absolute max ≠ local max; must also check endpoints of closed interval'
    ],
    tips: [
      'Draw a sign chart for f′(x) to determine intervals of increase/decrease',
      'Related rates: differentiate with respect to time, not x',
      '"Find the dimensions of a rectangle of maximum area with given perimeter" — classic 5-mark board type',
      'Tangent parallel to x-axis ⟹ slope = 0 ⟹ f′(x) = 0'
    ],
    bestPractices: [
      'Clearly define variables and constraints in optimization problems',
      'Write the conclusion: "Since f″(c) < 0, x = c gives a local maximum"',
      'For approximation problems: compute f(x) exact value + f′(x)·Δx — do not skip intermediate steps'
    ]
  },
  {
    chapter: 'Integrals',
    formulae: [
      '∫xⁿ dx = xⁿ⁺¹/(n+1) + C  (n ≠ −1)',
      '∫1/x dx = ln|x| + C',
      '∫eˣ dx = eˣ + C;  ∫aˣ dx = aˣ/ln a + C',
      '∫sin x dx = −cos x + C;  ∫cos x dx = sin x + C',
      '∫sec²x dx = tan x + C;  ∫cosec²x dx = −cot x + C',
      '∫sec x tan x dx = sec x + C;  ∫cosec x cot x dx = −cosec x + C',
      '∫tan x dx = ln|sec x| + C;  ∫cot x dx = ln|sin x| + C',
      '∫sec x dx = ln|sec x + tan x| + C;  ∫cosec x dx = ln|cosec x − cot x| + C',
      '∫1/√(1−x²) dx = sin⁻¹x + C;  ∫1/(1+x²) dx = tan⁻¹x + C;  ∫1/(x√(x²−1)) dx = sec⁻¹x + C',
      '∫1/(x²−a²) dx = (1/2a) ln|(x−a)/(x+a)| + C;  ∫1/(a²−x²) dx = (1/2a) ln|(a+x)/(a−x)| + C',
      '∫1/√(x²±a²) dx = ln|x + √(x²±a²)| + C;  ∫1/√(a²−x²) dx = sin⁻¹(x/a) + C',
      '∫√(a²−x²) dx = (x/2)√(a²−x²) + (a²/2)sin⁻¹(x/a) + C',
      'Integration by parts: ∫u·v dx = u·∫v dx − ∫(du/dx · ∫v dx) dx  (ILATE order)',
      '∫eˣ[f(x)+f′(x)] dx = eˣf(x) + C',
      'Definite integral: ∫ₐᵇ f(x) dx = F(b) − F(a)  (Newton–Leibniz)',
      'Property: ∫ₐᵇ f(x) dx = ∫ₐᵇ f(a+b−x) dx',
      'Property: ∫₀ᵃ f(x) dx = ∫₀ᵃ f(a−x) dx',
      '∫₋ₐᵃ f(x) dx = 2∫₀ᵃ f(x) dx if f even; = 0 if f odd'
    ],
    logic: [
      'Substitution: let u = g(x), du = g′(x) dx — choose u so the integrand simplifies',
      'For ∫(px+q)/(ax²+bx+c) dx: express px+q = A·d/dx(ax²+bx+c) + B, then split',
      'Partial fractions: use for rational functions where degree(numerator) < degree(denominator)',
      'ILATE for integration by parts: Inverse trig, Logarithm, Algebraic, Trigonometric, Exponential',
      'Definite integral gives NET signed area; absolute area requires splitting at x-intercepts'
    ],
    tips: [
      'Add +C for every indefinite integral — even in multi-step solutions',
      '∫₀^(π/2) sinⁿx dx = ∫₀^(π/2) cosⁿx dx — useful shortcut',
      'Check answer by differentiating: d/dx[F(x)] should equal the integrand',
      'For definite integrals use symmetry properties before computing — saves time in board exams'
    ],
    bestPractices: [
      'Write limits clearly; substitute upper then lower limit with a minus sign',
      'Check degree before partial fractions — if degree(num) ≥ degree(den), do long division first',
      'State the method (substitution / parts / partial fractions) before starting'
    ]
  },
  {
    chapter: 'Application of Integrals',
    formulae: [
      'Area under y=f(x) from x=a to x=b: A = ∫ₐᵇ f(x) dx  (f ≥ 0)',
      'Area between two curves: A = ∫ₐᵇ [f(x) − g(x)] dx  where f(x) ≥ g(x)',
      'Area w.r.t. y-axis: A = ∫_c^d x dy = ∫_c^d g(y) dy',
      'Area of circle x²+y²=r²: πr²  (verify using ∫₋ᵣʳ √(r²−x²) dx)',
      'Area of ellipse x²/a²+y²/b²=1: πab'
    ],
    logic: [
      'Always sketch the region first — identify which curve is on top/right',
      'Find intersection points of curves to determine limits of integration',
      'If region is symmetric, compute one half and double it',
      'Use horizontal strips (integrate w.r.t. y) when the region is bounded by curves expressed as x = f(y)'
    ],
    tips: [
      'For a region bounded by a parabola and a line: find intersections, set up ∫[upper−lower] dx',
      'Standard board question: area enclosed by y²=4ax and x²=4ay is 16a²/3',
      'Sketch first — wrong sketch leads to wrong sign and wrong answer',
      'Area is always positive; use absolute value if the integral comes out negative'
    ],
    bestPractices: [
      'Show the sketch of the bounded region for full marks',
      'Label intersection points on the sketch',
      'Write the integral setup explicitly before evaluating'
    ]
  },
  {
    chapter: 'Differential Equations',
    formulae: [
      'Order: highest derivative present;  Degree: power of highest derivative (after clearing fractions)',
      'Variable separable: dy/dx = f(x)g(y) ⟹ dy/g(y) = f(x) dx, then integrate both sides',
      'Homogeneous equation: dy/dx = F(y/x) — substitute y = vx, dy/dx = v + x·dv/dx',
      'Linear first-order: dy/dx + P(x)y = Q(x);  IF = e^(∫P dx);  solution: y·IF = ∫Q·IF dx + C',
      'Linear first-order in x: dx/dy + P(y)x = Q(y);  IF = e^(∫P dy)',
      'General solution contains arbitrary constants equal to order of the DE'
    ],
    logic: [
      'Identify type before solving: separable → separate; homogeneous → substitute y=vx; linear → find IF',
      'After back-substitution (v = y/x), express answer in terms of x and y',
      'A particular solution satisfies an initial condition — substitute to find C',
      'Degree is defined only when DE is a polynomial in derivatives; otherwise, say "not defined"'
    ],
    tips: [
      'For linear DE: write in standard form dy/dx + Py = Q first, then compute IF = e^(∫P dx)',
      'IF is always e^(something) — never simplify it incorrectly',
      'Common board question: show that a given function is a solution by substituting and verifying',
      '"Family of curves" problems: differentiate given equation, eliminate the arbitrary constant'
    ],
    bestPractices: [
      'State the type of DE before applying the method',
      'Show ∫P dx step explicitly when computing the integrating factor',
      'Write the general solution before applying initial conditions'
    ]
  },
  {
    chapter: 'Vector Algebra',
    formulae: [
      'Position vector of P(x,y,z): r⃗ = xî + yĵ + zk̂',
      '|a⃗| = √(a₁²+a₂²+a₃²);  unit vector: â = a⃗/|a⃗|',
      'Section formula (internal): r⃗ = (m·b⃗ + n·a⃗)/(m+n);  mid-point: (a⃗+b⃗)/2',
      'Scalar (dot) product: a⃗·b⃗ = |a⃗||b⃗|cos θ = a₁b₁+a₂b₂+a₃b₃',
      'cos θ = (a⃗·b⃗)/(|a⃗||b⃗|);  a⃗⊥b⃗ ⟺ a⃗·b⃗ = 0',
      'Projection of a⃗ on b⃗: (a⃗·b⃗)/|b⃗|;  vector projection: [(a⃗·b⃗)/|b⃗|²]b⃗',
      'Cross product: a⃗×b⃗ = |a⃗||b⃗|sin θ n̂;  |a⃗×b⃗| = area of parallelogram',
      'a⃗×b⃗ = det[î ĵ k̂; a₁ a₂ a₃; b₁ b₂ b₃]',
      'a⃗∥b⃗ ⟺ a⃗×b⃗ = 0⃗;  î×ĵ = k̂, ĵ×k̂ = î, k̂×î = ĵ',
      'Scalar triple product: [a⃗ b⃗ c⃗] = a⃗·(b⃗×c⃗) = det[a₁ a₂ a₃; b₁ b₂ b₃; c₁ c₂ c₃]',
      'Volume of parallelepiped = |[a⃗ b⃗ c⃗]|;  coplanar ⟺ [a⃗ b⃗ c⃗] = 0'
    ],
    logic: [
      'Dot product is commutative: a⃗·b⃗ = b⃗·a⃗;  cross product is anti-commutative: a⃗×b⃗ = −b⃗×a⃗',
      'Cross product is NOT commutative — order matters',
      'To find angle between two vectors: use dot product formula and solve for θ',
      'Area of triangle with sides a⃗ and b⃗: ½|a⃗×b⃗|'
    ],
    tips: [
      'î·î = ĵ·ĵ = k̂·k̂ = 1;  î·ĵ = ĵ·k̂ = k̂·î = 0',
      'î×î = ĵ×ĵ = k̂×k̂ = 0⃗',
      'For "show vectors are coplanar": compute scalar triple product — must be zero',
      'Board often asks: find a unit vector perpendicular to both a⃗ and b⃗ → compute a⃗×b⃗, then divide by its magnitude'
    ],
    bestPractices: [
      'Always write vectors with arrow notation (a⃗) to distinguish from scalars',
      'Check sign of angle: θ ∈ [0°, 180°] for vectors',
      'For area problems: state the formula (½|a⃗×b⃗|) before substituting'
    ]
  },
  {
    chapter: 'Three Dimensional Geometry',
    formulae: [
      'Direction cosines (l,m,n): cos α, cos β, cos γ with x,y,z axes;  l²+m²+n² = 1',
      'Direction ratios (a,b,c): proportional to l,m,n;  l = a/√(a²+b²+c²) etc.',
      'Line through (x₁,y₁,z₁) with DR (a,b,c): (x−x₁)/a = (y−y₁)/b = (z−z₁)/c',
      'Vector form of line: r⃗ = a⃗ + λb⃗',
      'Angle between two lines: cos θ = |l₁l₂+m₁m₂+n₁n₂|',
      'Lines parallel ⟺ a₁/a₂ = b₁/b₂ = c₁/c₂;  perpendicular ⟺ a₁a₂+b₁b₂+c₁c₂ = 0',
      'Shortest distance between skew lines r⃗=a⃗₁+λb⃗₁ and r⃗=a⃗₂+μb⃗₂: d = |(a⃗₂−a⃗₁)·(b⃗₁×b⃗₂)| / |b⃗₁×b⃗₂|',
      'Distance between parallel lines r⃗=a⃗₁+λb⃗ and r⃗=a⃗₂+μb⃗: d = |(a⃗₂−a⃗₁)×b⃗| / |b⃗|',
      'Plane: ax+by+cz = d;  normal vector is (a,b,c)',
      'Angle between planes: cos θ = |a₁a₂+b₁b₂+c₁c₂| / (√(a₁²+b₁²+c₁²)·√(a₂²+b₂²+c₂²))',
      'Distance from point (x₁,y₁,z₁) to plane ax+by+cz+d=0: |ax₁+by₁+cz₁+d| / √(a²+b²+c²)',
      'Intercept form of plane: x/a + y/b + z/c = 1'
    ],
    logic: [
      'Direction ratios are not unique; direction cosines are unique (up to sign)',
      'Skew lines: neither intersecting nor parallel — exist only in 3D',
      'To find foot of perpendicular from point to line: parametrize point on line, use perpendicularity condition',
      'Equation of plane through three points: use the fact that the normal is perpendicular to two vectors in the plane'
    ],
    tips: [
      'Always verify l²+m²+n² = 1 after computing direction cosines',
      'For SD between skew lines, b⃗₁×b⃗₂ = 0⃗ means the lines are parallel, not skew',
      'Board commonly asks for equation of plane passing through a point and perpendicular to a given line',
      'Angle between line and plane: sin θ = |a·l+b·m+c·n| / (√(a²+b²+c²)·√(l²+m²+n²))'
    ],
    bestPractices: [
      'Label all vectors and points clearly in 3D geometry problems',
      'Write the Cartesian and vector forms of the line/plane explicitly',
      'Check units: distance formula always gives a non-negative scalar'
    ]
  },
  {
    chapter: 'Linear Programming',
    formulae: [
      'Objective function Z = ax + by (to be maximised or minimised)',
      'Constraints: linear inequalities in x and y; non-negativity: x ≥ 0, y ≥ 0',
      'Feasible region: set of all points satisfying ALL constraints simultaneously',
      'Corner Point Theorem: optimal value of Z occurs at a corner (vertex) of the feasible region',
      'If feasible region is unbounded, check if optimal value exists by comparing with open half-plane'
    ],
    logic: [
      'Graph each constraint as a line; shade the feasible side (check with a test point)',
      'Feasible region is the intersection of all shaded half-planes',
      'Evaluate Z at every corner point; the largest/smallest is the optimal value',
      'If feasible region is empty, the LPP has no solution (infeasible)',
      'If feasible region is unbounded and Z has no maximum, state "no maximum exists"'
    ],
    tips: [
      'For bounded feasible region: optimal solution always exists',
      'For unbounded region with a maximisation: draw Z = optimal value line; if the open half-plane Z > optimal value has NO point in common with feasible region, then it IS the maximum',
      'Label corner points clearly on the graph',
      'Standard board question: manufacturing/diet/transport problem — set up constraints from word problem'
    ],
    bestPractices: [
      'Draw the feasible region with a clean graph; shade it clearly',
      'List all corner points and compute Z at each',
      'State the conclusion: "Maximum value of Z is ___ at (___, ___)"'
    ]
  },
  {
    chapter: 'Probability',
    formulae: [
      'Conditional probability: P(A|B) = P(A∩B)/P(B),  P(B) > 0',
      'Multiplication theorem: P(A∩B) = P(A)·P(B|A) = P(B)·P(A|B)',
      'Independent events: P(A∩B) = P(A)·P(B);  P(A|B) = P(A)',
      'Total Probability Theorem: P(A) = Σ P(Bᵢ)·P(A|Bᵢ)  (B₁,…,Bₙ partition)',
      'Bayes\' Theorem: P(Bᵢ|A) = P(Bᵢ)·P(A|Bᵢ) / Σ P(Bⱼ)·P(A|Bⱼ)',
      'Binomial distribution: P(X=r) = C(n,r)·pʳ·qⁿ⁻ʳ,  q=1−p',
      'Mean of binomial: μ = np;  Variance: σ² = npq',
      'Random variable X: E(X) = Σ xᵢ·P(xᵢ);  Var(X) = E(X²) − [E(X)]²'
    ],
    logic: [
      'Mutually exclusive ≠ independent: ME means P(A∩B)=0; independent means P(A∩B)=P(A)P(B)',
      'Bayes\' theorem: denominator = total probability of event A (law of total probability)',
      'For Bayes\': define partition B₁,B₂,… (hypotheses) first, then apply',
      'Binomial conditions: fixed n trials, two outcomes, constant p, independent trials'
    ],
    tips: [
      'P(A∪B) = P(A)+P(B)−P(A∩B);  for ME events: P(A∪B) = P(A)+P(B)',
      'P(Aᶜ) = 1−P(A);  complement rule is often the fastest path',
      'For "at least one" problems: P(at least one) = 1 − P(none)',
      'Bayes\' theorem: draw a tree diagram — it keeps the conditional probabilities organised'
    ],
    bestPractices: [
      'State which theorem or formula you are using before applying it',
      'In binomial problems: identify n, p, q, r clearly before substituting',
      'For Bayes\': show the partition, the prior probabilities, and the likelihoods in a table or tree'
    ]
  }
);

// screen-notes.js reads REVISION['XII Physics'] when state.grade==='XII'.
REVISION['XII Physics'] = [
  {
    chapter: 'Electric Charges and Fields',
    formulae: [
      'Coulomb\'s law: F = kq₁q₂/r²,  k = 1/4πε₀ = 9×10⁹ N m² C⁻²,  ε₀ = 8.854×10⁻¹² C² N⁻¹ m⁻²',
      'Electric field: E = F/q₀ = kq/r²  (point charge);  direction radially outward for +q',
      'Electric dipole moment: p = q×2a  (direction: −q to +q)',
      'Field on dipole axis (r >> a): E = 2p / (4πε₀r³);  on equatorial plane: E = −p / (4πε₀r³)',
      'Torque on dipole in uniform field: τ = p × E;  potential energy U = −p·E',
      'Gauss\'s law: ΦE = q_enc / ε₀  (flux through any closed surface)',
      'Field due to infinite line charge: E = λ / (2πε₀r)',
      'Field due to infinite plane sheet: E = σ / (2ε₀)',
      'Field inside/outside spherical shell: E = 0 (r<R);  E = q/(4πε₀r²) (r≥R)',
      'Charge quantisation: q = ne,  e = 1.6×10⁻¹⁹ C'
    ],
    logic: [
      'Superposition principle: net force/field is the vector sum of individual contributions',
      'Field lines start on +q, end on −q; never cross; density ∝ field strength',
      'Gauss\'s law is most useful for symmetric charge distributions (spherical, cylindrical, planar)',
      'Electric force vs gravity: k e²/(G mₑ mₚ) ≈ 2.4×10³⁹ — electrostatic force dominates at atomic scale'
    ],
    tips: [
      'Continuous field lines → no breaks; closed loops are NOT possible for electrostatic fields',
      'For dipole in non-uniform field: both force AND torque act',
      'Common board question: find E at a point using Gauss\'s law for a uniformly charged sphere'
    ],
    bestPractices: [
      'State Coulomb\'s law in vector form when direction matters',
      'For Gauss\'s law problems: choose a Gaussian surface that matches the symmetry',
      'Always verify units: force in N, charge in C, field in N/C or V/m'
    ]
  },
  {
    chapter: 'Electrostatic Potential and Capacitance',
    formulae: [
      'Electric potential: V = W/q₀ = kq/r  (point charge, V→0 at ∞)',
      'Potential due to dipole: V = p·r̂/(4πε₀r²)',
      'Work done: W = q(V_P − V_R)',
      'Potential energy of two charges: U = kq₁q₂/r₁₂',
      'Potential energy of dipole: U = −p·E',
      'E and V relation: E = −dV/dr  (E in direction of decreasing V)',
      'Capacitance: C = Q/V;  parallel plate: C = ε₀A/d',
      'With dielectric: C = KC₀,  K = dielectric constant',
      'Series combination: 1/C = 1/C₁ + 1/C₂ + …',
      'Parallel combination: C = C₁ + C₂ + …',
      'Energy stored: U = ½QV = ½CV² = Q²/(2C)',
      'Energy density: u = ½ε₀E²'
    ],
    logic: [
      'Equipotential surface: E is always perpendicular to it; no work done moving charge along it',
      'Inside a conductor: E = 0, V = constant, charge resides only on surface',
      'Dielectric reduces E inside capacitor → increases C',
      'If capacitor is isolated (disconnected), Q is fixed; if connected to battery, V is fixed'
    ],
    tips: [
      'Conductor surface: E = σ/ε₀ (just outside), directed outward',
      'Board question: derive C for parallel plate capacitor with dielectric slab',
      'Energy stored in a combination: sum U = ½C₁V² + ½C₂V² etc. for parallel; same Q for series'
    ],
    bestPractices: [
      'Specify reference (V=0 at ∞) when computing potential',
      'For combination problems: draw equivalent circuit before applying formulae',
      'State whether capacitor is connected/disconnected from battery — it changes which quantity is fixed'
    ]
  },
  {
    chapter: 'Current Electricity',
    formulae: [
      'Ohm\'s law: V = IR;  resistance R = ρl/A',
      'Resistivity: ρ = m/(ne²τ);  temperature coefficient α = Δρ/(ρ₀ΔT)',
      'Drift velocity: v_d = eEτ/m;  current density j = nev_d',
      'EMF and terminal voltage: V_ext = ε − Ir  (r = internal resistance)',
      'Kirchhoff\'s Junction Rule: ΣI_in = ΣI_out',
      'Kirchhoff\'s Loop Rule: Σ(ΔV) = 0 around any closed loop',
      'Series resistors: R = R₁+R₂+…;  Parallel: 1/R = 1/R₁+1/R₂+…',
      'Wheatstone bridge balance: R₁/R₂ = R₃/R₄',
      'Power: P = VI = I²R = V²/R;  energy = Pt'
    ],
    logic: [
      'Resistivity of metals increases with temperature; semiconductors decrease',
      'Internal resistance causes terminal voltage to drop under load',
      'Kirchhoff\'s laws are based on charge conservation (junction) and energy conservation (loop)',
      'Metre bridge and potentiometer are practical implementations of Wheatstone bridge principle'
    ],
    tips: [
      'For complex circuits: assign unknown currents, apply KCL at junctions, KVL to loops',
      'Cells in series: ε_total = Σεᵢ, r_total = Σrᵢ;  in parallel (identical): ε same, r/n',
      'Potentiometer: no current drawn from unknown EMF — measures EMF accurately'
    ],
    bestPractices: [
      'Draw circuit diagram and label all known/unknown quantities before applying Kirchhoff\'s laws',
      'Sign convention in KVL: gain in potential (+); drop (−)',
      'Check balance condition for Wheatstone bridge before computing unknown resistance'
    ]
  },
  {
    chapter: 'Moving Charges and Magnetism',
    formulae: [
      'Lorentz force: F = q(v × B + E)',
      'Magnetic force on current: F = Il × B',
      'Cyclotron frequency: ν_c = qB/(2πm)  (independent of speed)',
      'Biot–Savart law: dB = (μ₀/4π)(I dl × r̂)/r²',
      'Field at centre of circular loop: B = μ₀I/(2R)',
      'Ampere\'s law: ∮B·dl = μ₀I_enc',
      'Field of long straight wire: B = μ₀I/(2πR)',
      'Field inside solenoid: B = μ₀nI  (n = turns per unit length)',
      'Magnetic moment of loop: m = NIA;  torque τ = m × B',
      'Galvanometer to ammeter: shunt rₛ in parallel;  to voltmeter: large R in series',
      'μ₀ = 4π×10⁻⁷ T m A⁻¹'
    ],
    logic: [
      'Magnetic force is always perpendicular to velocity → does no work → changes direction not speed',
      'Parallel currents attract; anti-parallel currents repel',
      'Right-hand thumb rule: thumb in current direction, curled fingers give B direction',
      'Cyclotron principle: frequency independent of radius allows repeated acceleration'
    ],
    tips: [
      'For a charged particle in magnetic field: speed constant, kinetic energy constant, radius r = mv/(qB)',
      'Solenoid vs toroid: solenoid has field only inside; toroid has circular field, zero outside',
      'Board question: derive expression for B at centre of circular coil using Biot–Savart'
    ],
    bestPractices: [
      'Use vector cross product form of Lorentz force; state direction using right-hand rule',
      'For Ampere\'s law: choose Amperian loop that matches the symmetry of B',
      'State formula, substitute, and simplify — do not skip intermediate steps in board answers'
    ]
  },
  {
    chapter: 'Magnetism and Matter',
    formulae: [
      'Bar magnet (far field): B = μ₀m/(2πr³) along axis;  B = −μ₀m/(4πr³) along equator',
      'Torque on bar magnet in field: τ = m × B;  U = −m·B',
      'Gauss\'s law for magnetism: ∮B·dA = 0  (no magnetic monopoles)',
      'Magnetic intensity: H = B₀/μ₀;  magnetisation M = dipole moment/volume',
      'B = μ₀(H + M);  for linear material M = χH  →  B = μ₀μᵣH,  μᵣ = 1 + χ',
      'Curie\'s law (paramagnetics): χ = C/T'
    ],
    logic: [
      'Diamagnetic: χ < 0, weakly repelled by field (e.g., Bi, Cu)',
      'Paramagnetic: χ > 0 (small), weakly attracted (e.g., Al, O₂)',
      'Ferromagnetic: χ >> 1, strongly attracted, retains magnetism (e.g., Fe, Ni, Co)',
      'Magnetic monopoles do not exist — unlike electric charges'
    ],
    tips: [
      'Permanent magnets are ferromagnetic materials with high retentivity and coercivity',
      'Compass needle aligns with Earth\'s magnetic field — geographic north ≠ magnetic north',
      'Hysteresis loop: area = energy lost per cycle as heat'
    ],
    bestPractices: [
      'Distinguish between B (magnetic field), H (magnetic intensity), and M (magnetisation)',
      'For classification questions: state χ value, direction of force in external field',
      'Quote Curie temperature when discussing ferromagnetics losing their property'
    ]
  },
  {
    chapter: 'Electromagnetic Induction',
    formulae: [
      'Magnetic flux: Φ_B = B·A = BA cosθ',
      'Faraday\'s law: ε = −N dΦ_B/dt',
      'Motional EMF: ε = Blv  (rod of length l moving at velocity v in field B)',
      'Self-inductance: ε = −L dI/dt;  L = NΦ/I',
      'Self-inductance of solenoid: L = μᵣμ₀n²Al',
      'Mutual inductance: ε₁ = −M₁₂ dI₂/dt;  M₁₂ = M₂₁ = M',
      'AC generator: ε = NBAω sin(ωt)  (ω = 2πn, n = rev/s)',
      'Energy stored in inductor: U = ½LI²'
    ],
    logic: [
      'Lenz\'s law: induced current opposes the change in flux — embodies energy conservation',
      'The negative sign in Faraday\'s law indicates Lenz\'s law',
      'Eddy currents: induced in bulk conductors — cause energy loss (used in brakes, induction heating)',
      'Self-inductance is analogous to inertia — opposes change in current'
    ],
    tips: [
      'For motional EMF: F = qvB on charges in rod → EMF = work per unit charge = Blv',
      'Board question: a coil rotates in a uniform field — derive expression for induced EMF',
      'Transformer works on mutual induction; requires AC (DC gives no changing flux)'
    ],
    bestPractices: [
      'State Faraday\'s law first, then substitute; include the negative sign',
      'For Lenz\'s law questions: determine direction of induced current by opposing the change',
      'Show the geometry clearly when computing flux (angle between B and area normal)'
    ]
  },
  {
    chapter: 'Alternating Current',
    formulae: [
      'AC voltage/current: v = v_m sin(ωt);  i = i_m sin(ωt + φ)',
      'RMS values: V = v_m/√2 ≈ 0.707v_m;  I = i_m/√2',
      'Inductive reactance: X_L = ωL;  current lags voltage by π/2',
      'Capacitive reactance: X_C = 1/(ωC);  current leads voltage by π/2',
      'RLC series impedance: Z = √(R² + (X_C − X_L)²)',
      'Phase angle: φ = tan⁻¹((X_C − X_L)/R)',
      'Resonance: ω₀ = 1/√(LC);  at resonance Z = R (minimum)',
      'Average power: P = VI cosφ  (cosφ = power factor)',
      'Quality factor: Q = ω₀L/R = 1/(ω₀CR)',
      'Transformer: V_s/V_p = N_s/N_p;  I_s/I_p = N_p/N_s  (ideal)'
    ],
    logic: [
      'Pure inductor/capacitor: cosφ = 0 → no power dissipated (wattless current)',
      'Resonance: X_L = X_C, impedance minimum, current maximum',
      'Step-up transformer: V_s > V_p → N_s > N_p → I_s < I_p  (energy conservation)',
      'Power is dissipated only in resistance, not in L or C'
    ],
    tips: [
      'Phasor diagram: resistor voltage in phase with I; inductor leads I by π/2; capacitor lags I by π/2',
      'Board question: derive resonant frequency expression for series LCR circuit',
      'Power factor = 1 for pure resistor; = 0 for pure L or C'
    ],
    bestPractices: [
      'Draw phasor diagram for RLC circuits — it clarifies phase relationships',
      'State whether circuit is inductive or capacitive from the sign of (X_L − X_C)',
      'For transformer problems: verify power input ≈ power output for ideal transformer'
    ]
  },
  {
    chapter: 'Electromagnetic Waves',
    formulae: [
      'Displacement current: i_d = ε₀ dΦ_E/dt',
      'Speed of EM waves in vacuum: c = 1/√(μ₀ε₀) = 3×10⁸ m/s',
      'Speed in medium: v = 1/√(με)',
      'E and B relation: E₀/B₀ = c',
      'EM wave: E = E₀ sin(kz − ωt);  B = B₀ sin(kz − ωt)',
      'Energy density: u = ½ε₀E² + B²/(2μ₀) = ε₀E²  (averaged)'
    ],
    logic: [
      'E and B are perpendicular to each other AND to the direction of propagation',
      'Displacement current resolves the inconsistency in Ampere\'s law for charging capacitors',
      'EM spectrum (increasing wavelength): γ-rays, X-rays, UV, visible, IR, microwave, radio',
      'All EM waves travel at c in vacuum regardless of frequency'
    ],
    tips: [
      'Visible light: 400–700 nm;  γ-rays: 10⁻¹² m;  radio waves: up to 10⁶ m',
      'Board question: state Maxwell\'s equations in words and explain displacement current',
      'Microwave: used in radar and cooking;  X-rays: medical imaging;  UV: sterilisation'
    ],
    bestPractices: [
      'Quote both E₀/B₀ = c and c = 1/√(μ₀ε₀) when discussing EM wave properties',
      'List EM spectrum in order — board often asks for applications of different regions',
      'Mention the discoverer (Hertz verified Maxwell\'s prediction) for 3-mark history questions'
    ]
  },
  {
    chapter: 'Ray Optics and Optical Instruments',
    formulae: [
      'Mirror equation: 1/v + 1/u = 1/f = 2/R  (sign convention: distances from pole)',
      'Magnification: m = −v/u  (mirror)',
      'Snell\'s law: n₁ sin i = n₂ sin r;  n = c/v',
      'Critical angle: sin i_c = n₂/n₁  (denser to rarer)',
      'Lens formula: 1/v − 1/u = 1/f',
      'Lens maker\'s equation: 1/f = (n₂/n₁ − 1)(1/R₁ − 1/R₂)',
      'Power of lens: P = 1/f  (in dioptres, f in metres)',
      'Thin lenses in contact: 1/f = 1/f₁ + 1/f₂;  P = P₁ + P₂',
      'Prism: n₂₁ = sin((A+D_m)/2) / sin(A/2)',
      'Simple microscope: m = 1 + D/f  (image at near point);  m = D/f  (image at ∞)',
      'Compound microscope: m ≈ (L/f_o)(D/f_e)',
      'Astronomical telescope: m = f_o/f_e  (normal adjustment)'
    ],
    logic: [
      'Total internal reflection: requires denser-to-rarer medium AND i > i_c; used in optical fibres',
      'Concave mirror/convex lens: converging;  convex mirror/concave lens: diverging',
      'Real image: formed by actual intersection of rays (can be projected); virtual: apparent intersection',
      'Dispersion: different wavelengths refract differently → violet bends most, red least'
    ],
    tips: [
      'Cartesian convention: all distances from pole/optical centre; incident light travels left-to-right',
      'For concave mirror: f < 0;  for convex mirror: f > 0 (in standard convention)',
      'Board question: draw ray diagrams for image formation by concave mirror (all positions)'
    ],
    bestPractices: [
      'State sign convention before solving numericals',
      'Draw accurate ray diagrams with labels for full marks on 3/5-mark questions',
      'For optical instruments: quote final magnification formula and identify each symbol'
    ]
  },
  {
    chapter: 'Wave Optics',
    formulae: [
      'Young\'s double slit: fringe width β = λD/d  (D = screen distance, d = slit separation)',
      'Condition for bright fringe: path difference = nλ;  dark fringe: (2n−1)λ/2',
      'Single slit diffraction: first dark fringe at θ where a sinθ = λ  (a = slit width)',
      'Malus\'s law: I = I₀ cos²θ  (polarised light through analyser)',
      'Brewster\'s law: tan i_B = n  (reflected light is completely polarised)'
    ],
    logic: [
      'Coherent sources required for sustained interference; same frequency and constant phase difference',
      'Constructive interference: path difference = nλ;  destructive: (n+½)λ',
      'Diffraction: bending of waves around obstacles — single slit gives central max flanked by weaker maxima',
      'Polarisation proves transverse nature of light; longitudinal waves cannot be polarised'
    ],
    tips: [
      'Increasing d (slit separation): fringe width β decreases — fringes become closer',
      'Increasing λ: β increases — fringes spread out',
      'Board question: derive fringe width expression for Young\'s double slit experiment',
      'Natural light is unpolarised; polaroid transmits one component only'
    ],
    bestPractices: [
      'Clearly identify D, d, λ in YDSE diagrams',
      'For Malus\'s law: ensure angle θ is between transmission axis of polaroid and plane of polarisation',
      'Quote Huygens\' principle before deriving laws of reflection/refraction from it'
    ]
  },
  {
    chapter: 'Dual Nature of Radiation and Matter',
    formulae: [
      'Photon energy: E = hν = hc/λ;  h = 6.626×10⁻³⁴ J s',
      'Photon momentum: p = h/λ = E/c',
      'Einstein\'s photoelectric equation: ½mv²_max = hν − φ₀ = h(ν − ν₀)',
      'Stopping potential: eV₀ = K_max = hν − φ₀',
      'Threshold frequency: ν₀ = φ₀/h',
      'de Broglie wavelength: λ = h/p = h/(mv)',
      'de Broglie wavelength of electron accelerated through V volts: λ = h/√(2meV)'
    ],
    logic: [
      'Wave nature cannot explain photoelectric effect: intensity should determine K_max — it does not',
      'Photon picture explains: K_max depends on ν not intensity; instantaneous emission; existence of ν₀',
      'de Broglie: matter and radiation both have wave-particle duality',
      'Larger momentum → shorter wavelength; macroscopic objects have immeasurably small λ'
    ],
    tips: [
      'Below threshold frequency: no emission regardless of intensity',
      'Increasing intensity: more photons → more electrons emitted (higher current), K_max unchanged',
      'Board question: plot stopping potential vs frequency — slope = h/e'
    ],
    bestPractices: [
      'Quote Einstein\'s photoelectric equation with all symbols defined',
      'For de Broglie problems: state p = mv if non-relativistic; use p = √(2mK) if KE is given',
      'Work function often given in eV — convert to joules (1 eV = 1.6×10⁻¹⁹ J) before using SI formulae'
    ]
  },
  {
    chapter: 'Atoms',
    formulae: [
      'Bohr radius: r_n = n²a₀,  a₀ = 0.529 Å  (ground state n=1)',
      'Energy levels (hydrogen): E_n = −13.6/n² eV',
      'Angular momentum quantisation: L = nh/(2π) = nħ',
      'Photon frequency: hν = E_i − E_f',
      'Rydberg formula: 1/λ = R_H(1/n₁² − 1/n₂²),  R_H = 1.097×10⁷ m⁻¹',
      'Lyman series: n₁=1;  Balmer: n₁=2;  Paschen: n₁=3'
    ],
    logic: [
      'Thomson model failed: could not explain line spectra',
      'Rutherford model: concentrated nucleus — but accelerating electron should spiral and emit — contradicts stability',
      'Bohr\'s postulates resolve both: stationary orbits + quantum jumps + angular momentum quantisation',
      'Bohr\'s model applicable only to hydrogenic (single-electron) species: H, He⁺, Li²⁺'
    ],
    tips: [
      'Ground state of H: n=1, E = −13.6 eV, r = 0.529 Å',
      'Ionisation energy = 13.6 eV (energy to remove electron from n=1 to n=∞)',
      'Board question: calculate wavelength of photon emitted for given transition using Rydberg formula',
      'Lyman series: UV;  Balmer: visible;  Paschen/Brackett/Pfund: IR'
    ],
    bestPractices: [
      'State Bohr\'s three postulates explicitly when asked to "explain Bohr\'s model"',
      'Show the energy level diagram for hydrogen when solving spectral series questions',
      'Quote limitations of Bohr\'s model: fails for multi-electron atoms, no explanation of fine structure'
    ]
  },
  {
    chapter: 'Nuclei',
    formulae: [
      'Nuclear radius: R = R₀A^(1/3),  R₀ = 1.2 fm  →  nuclear density ≈ 2.3×10¹⁷ kg/m³ (constant)',
      'Mass defect: ΔM = (Zmₚ + Nmₙ) − M_nucleus',
      'Binding energy: BE = ΔM·c²  (in MeV: ΔM in u × 931.5 MeV/u)',
      'Radioactive decay law: N = N₀e^(−λt)',
      'Half-life: T₁/₂ = 0.693/λ;  mean life: τ = 1/λ',
      'Activity: A = λN = A₀e^(−λt)  (unit: Bq = 1 decay/s; 1 Ci = 3.7×10¹⁰ Bq)',
      'Q-value: Q = (Σm_initial − Σm_final)c²',
      'Nuclear fission: ²³⁵U + n → ¹³³Sb + ⁹⁹Nb + 4n  (example)',
      '1 u = 931.5 MeV/c²;  mₚ = 1.00728 u;  mₙ = 1.00867 u'
    ],
    logic: [
      'Binding energy per nucleon peaks near A ≈ 56 (Fe) — most stable; decreases for very heavy and very light nuclei',
      'Fission releases energy because heavy nuclei → medium nuclei (higher BE/nucleon)',
      'Fusion releases energy because light nuclei → slightly heavier (higher BE/nucleon)',
      'Nuclear force: short-range, charge-independent, stronger than electrostatic at < 1 fm'
    ],
    tips: [
      'Isotopes: same Z, different N;  Isobars: same A;  Isotones: same N',
      'Board question: calculate BE/nucleon for a given nucleus and compare stability',
      'Radioactive series: α decay reduces A by 4, Z by 2; β⁻ decay increases Z by 1, A unchanged'
    ],
    bestPractices: [
      'Always convert mass in u to MeV using 1 u = 931.5 MeV/c²',
      'For half-life problems: use N = N₀(½)^(t/T₁/₂) to avoid exponential calculation errors',
      'State whether fission or fusion — and WHY energy is released (binding energy argument)'
    ]
  },
  {
    chapter: 'Semiconductor Electronics',
    formulae: [
      'Intrinsic semiconductors: nₑ = nₕ = nᵢ;  nₑnₕ = nᵢ²  (mass action law)',
      'Forward bias: barrier height decreases → large current (mA range)',
      'Reverse bias: barrier height increases → very small current (μA range)',
      'Half-wave rectifier: output frequency = input frequency',
      'Full-wave rectifier: output frequency = 2 × input frequency',
      'Transistor: I_E = I_B + I_C;  β = I_C/I_B  (current gain, common emitter)',
      'Voltage gain (CE amplifier): A_v = −β(R_C/R_in)',
      'Logic gates: AND, OR, NOT, NAND, NOR;  NAND and NOR are universal gates'
    ],
    logic: [
      'n-type: donor (pentavalent) doping → electrons are majority carriers',
      'p-type: acceptor (trivalent) doping → holes are majority carriers',
      'Depletion layer forms at p-n junction due to diffusion; creates barrier potential (~0.7 V for Si)',
      'Energy gap: insulators E_g > 3 eV; semiconductors 0.2–3 eV; metals ≈ 0'
    ],
    tips: [
      'Diode in forward bias: acts like closed switch;  in reverse bias: open switch',
      'NAND gate = NOT(AND);  NOR = NOT(OR);  both are universal (can construct any gate from them)',
      'Board question: draw I-V characteristics of p-n junction diode; identify forward and reverse bias regions'
    ],
    bestPractices: [
      'Draw energy band diagrams when explaining conductors, semiconductors, insulators',
      'For transistor circuits: state configuration (CE/CB/CC) and identify input/output terminals',
      'Truth tables: fill all 2ⁿ rows for n inputs — no shortcuts in board answers'
    ]
  }
];

REVISION['XII Chemistry'] = [
  {
    chapter: 'Solutions',
    formulae: [
      'Molarity M = moles of solute / volume of solution (L)',
      'Molality m = moles of solute / mass of solvent (kg)',
      'Mole fraction: χ_A = n_A / (n_A + n_B)',
      'Henry\'s law: p = K_H · χ (solubility of gas ∝ partial pressure)',
      'Raoult\'s law (non-volatile solute): p = p° · χ_solvent;  Δp/p° = χ_solute',
      'Raoult\'s law (volatile binary): p_total = p°₁χ₁ + p°₂χ₂',
      'Elevation of boiling point: ΔT_b = K_b · m  (K_b = ebullioscopic constant)',
      'Depression of freezing point: ΔT_f = K_f · m  (K_f = cryoscopic constant)',
      'Osmotic pressure: π = iMRT  (M = molarity, i = van\'t Hoff factor)',
      'van\'t Hoff factor: i = observed colligative property / calculated (if no dissoc./assoc.)',
      'i > 1: solute dissociates;  i < 1: solute associates'
    ],
    logic: [
      'Ideal solution: obeys Raoult\'s law over entire concentration range; ΔH_mix = 0, ΔV_mix = 0',
      'Positive deviation: A–B interactions weaker than A–A or B–B (e.g., alcohol + cyclohexane)',
      'Negative deviation: A–B interactions stronger (e.g., acetone + chloroform)',
      'Reverse osmosis: apply pressure > π to pure water from solution; used in water purification',
      'Colligative properties depend only on number of solute particles, not their identity'
    ],
    tips: [
      'K_f(water) = 1.86 K kg mol⁻¹;  K_b(water) = 0.52 K kg mol⁻¹',
      'For ΔT_b/ΔT_f numericals: use moles, not mass — convert to molality first',
      'Board question: derive expression for osmotic pressure (van\'t Hoff equation)'
    ],
    bestPractices: [
      'State whether the solute dissociates or associates before applying van\'t Hoff factor',
      'Osmosis vs osmotic pressure: osmosis is the process; osmotic pressure is the minimum pressure to stop it',
      'Use M (molarity) for osmotic pressure and m (molality) for ΔT_b, ΔT_f'
    ]
  },
  {
    chapter: 'Electrochemistry',
    formulae: [
      'Cell potential: E°_cell = E°_cathode − E°_anode',
      'Gibbs energy: ΔrG° = −nFE°_cell  (F = 96485 C mol⁻¹ ≈ 96500)',
      'Nernst equation: E_cell = E°_cell − (RT/nF)ln Q = E°_cell − (0.0592/n)log Q  (at 298 K)',
      'Equilibrium: ΔrG° = −RT ln K  →  log K = nE°/0.0592',
      'Conductivity κ = 1/ρ;  molar conductivity Λ_m = κ/c  (c in mol m⁻³)',
      'Kohlrausch\'s law: Λ°_m = Σν₊λ°₊ + Σν₋λ°₋  (infinite dilution)',
      'Degree of dissociation: α = Λ_m / Λ°_m  (for weak electrolytes)',
      'Faraday\'s first law: m = (M/nF)·Q  (mass deposited = ZIt)',
      'Faraday\'s second law: m₁/m₂ = E₁/E₂  (E = equivalent weight)'
    ],
    logic: [
      'Galvanic cell: spontaneous redox → electrical energy;  Electrolytic cell: electrical energy → non-spontaneous redox',
      'Positive E°_cell → spontaneous → ΔrG° < 0 → K > 1',
      'Conductivity decreases with dilution for both strong and weak electrolytes',
      'Molar conductivity increases with dilution; strong electrolytes: limited increase; weak: steep increase',
      'Cathode: reduction (gains electrons);  Anode: oxidation (loses electrons) — in both galvanic and electrolytic cells'
    ],
    tips: [
      'SHE (standard hydrogen electrode): E° = 0 V by convention',
      'Higher E°_red (more positive) → stronger oxidising agent',
      'Corrosion: electrochemical process; iron (anode) is oxidised; water/O₂ is reduced (cathode)',
      'Board question: write cell notation; calculate E°_cell; find ΔrG° and K'
    ],
    bestPractices: [
      'Write electrode reactions separately (oxidation at anode, reduction at cathode) before calculating E°_cell',
      'Use Nernst equation only at non-standard conditions; state temperature if not 298 K',
      'For Faraday\'s law numericals: identify n (electrons per formula unit deposited)'
    ]
  },
  {
    chapter: 'Chemical Kinetics',
    formulae: [
      'Rate = −d[R]/dt = +d[P]/dt  (adjust for stoichiometry)',
      'Rate law: rate = k[A]ᵐ[B]ⁿ  (m, n = order w.r.t. A, B; determined experimentally)',
      'Zero order: [A] = [A]₀ − kt;  t₁/₂ = [A]₀/(2k)',
      'First order: [A] = [A]₀ e⁻ᵏᵗ;  ln([A]₀/[A]) = kt;  t₁/₂ = 0.693/k',
      'Second order: 1/[A] − 1/[A]₀ = kt',
      'Arrhenius equation: k = Ae⁻ᴱᵃ/ᴿᵀ;  ln k = ln A − Eₐ/(RT)',
      'Temperature effect: ln(k₂/k₁) = (Eₐ/R)(1/T₁ − 1/T₂)',
      'Activation energy from plot: Eₐ = −slope × R  (plot ln k vs 1/T)'
    ],
    logic: [
      'Order is experimental; molecularity is theoretical (for elementary steps only)',
      'For zero-order: rate is independent of concentration; for first-order: t₁/₂ is constant',
      'Catalyst lowers Eₐ — provides alternate pathway; does NOT change ΔH of reaction',
      'Molecularity: 1 = unimolecular; 2 = bimolecular; 3 = termolecular (max); cannot be zero or fractional'
    ],
    tips: [
      'First-order reaction: plot ln[A] vs t → straight line with slope = −k',
      'Second-order: plot 1/[A] vs t → straight line with slope = k',
      '"Rule of thumb": rate doubles for every 10°C rise (approximate)',
      'Board question: derive integrated rate equation for first-order reaction'
    ],
    bestPractices: [
      'State the order and rate constant units explicitly: zero order [M s⁻¹]; first order [s⁻¹]; second order [M⁻¹ s⁻¹]',
      'For Arrhenius numericals: convert T to Kelvin and R = 8.314 J mol⁻¹ K⁻¹',
      'Do not confuse rate of reaction with rate constant — they are different quantities'
    ]
  },
  {
    chapter: 'd and f Block Elements',
    formulae: [
      'General electronic config: transition metals: (n−1)d¹⁻¹⁰ ns¹⁻²',
      'Lanthanoids: [Xe] 4f¹⁻¹⁴ 5d⁰⁻¹ 6s²;  Actinoids: [Rn] 5f¹⁻¹⁴ 6d⁰⁻¹ 7s²',
      'Lanthanoid contraction: gradual decrease in atomic/ionic radii from La→Lu due to poor shielding by 4f electrons',
      'Potassium dichromate: K₂Cr₂O₇  (oxidation state of Cr = +6)',
      'Potassium permanganate: KMnO₄  (oxidation state of Mn = +7)'
    ],
    logic: [
      'Variable oxidation states: loss of (n−1)d and ns electrons at comparable energies',
      'Paramagnetic behaviour: unpaired d electrons create magnetic moment',
      'Coloured ions: d-d transitions absorb visible light; white compounds have d⁰ or d¹⁰ config',
      'Catalytic properties: variable oxidation states allow reversible formation of intermediates',
      'f-block placed separately: 4f/5f orbitals are deeply buried — chemical behavior dominated by outer electrons'
    ],
    tips: [
      'Cr and Cu have exceptional configs: Cr = [Ar]3d⁵4s¹; Cu = [Ar]3d¹⁰4s¹ (stability of half-filled/full d)',
      'KMnO₄ reactions: acidic medium → Mn²⁺; neutral/faintly alkaline → MnO₂; strongly alkaline → MnO₄²⁻',
      'K₂Cr₂O₇ is orange in neutral/acidic; changes to yellow CrO₄²⁻ in alkaline (reversible)',
      'Lanthanoid contraction causes Zr and Hf (elements below Y) to have nearly equal atomic radii'
    ],
    bestPractices: [
      'Write electronic configs of ions (remove ns electrons first, then (n−1)d)',
      'For colour questions: relate to number of unpaired d-electrons and d-d transitions',
      'State oxidation state clearly when discussing compounds of transition metals'
    ]
  },
  {
    chapter: 'Coordination Compounds',
    formulae: [
      'Coordination entity: central metal + ligands; e.g. [Co(NH₃)₆]³⁺',
      'Coordination number = number of ligand donor atoms directly bonded to metal',
      'IUPAC: ligands in alphabetical order (ignoring prefixes), then metal name with oxidation state in Roman numerals',
      'Naming cation before anion; complex cation name ends with metal; complex anion ends "-ate"',
      'Crystal Field Splitting: Δ_o (octahedral); strong ligands (large Δ) → low spin; weak ligands → high spin',
      'Spectrochemical series: I⁻ < Br⁻ < Cl⁻ < F⁻ < OH⁻ < H₂O < NH₃ < en < CN⁻ < CO'
    ],
    logic: [
      'Werner\'s theory: primary valence (ionisable) = oxidation state; secondary valence (non-ionisable) = coordination number',
      'Isomerism types: structural (ionisation, linkage, solvate) and stereo (geometrical, optical)',
      'Square planar (d⁸) complexes: Pt²⁺, Pd²⁺, Ni²⁺, Rh⁺;  geometrical isomers possible',
      'Optical isomers (chirality): complexes with no plane of symmetry (e.g., [Co(en)₃]³⁺)',
      'EAN rule: 18-electron rule for stable metal carbonyls (like Ni(CO)₄, Fe(CO)₅)'
    ],
    tips: [
      'en = ethylenediamine = bidentate chelating ligand (forms 5-membered ring)',
      'EDTA⁴⁻ = hexadentate chelating agent; chelate effect: chelate complexes are more stable',
      'Board question: determine type of isomerism for given complexes',
      'Haemoglobin: Fe²⁺ in porphyrin ring; chlorophyll: Mg²⁺ in porphyrin ring'
    ],
    bestPractices: [
      'Write IUPAC name systematically: anionic ligands first (with -o suffix), then neutral, then metal',
      'State hybridisation and geometry: sp³ (tetrahedral); dsp² (square planar); d²sp³ (octahedral)',
      'For magnetic properties: count unpaired electrons using crystal field theory'
    ]
  },
  {
    chapter: 'Haloalkanes and Haloarenes',
    formulae: [
      'C−X bond polarity: δ+ on C, δ− on X → susceptible to nucleophilic attack',
      'SN2: rate = k[RX][Nu];  inversion of configuration (Walden inversion);  favoured by 1° alkyl halides',
      'SN1: rate = k[RX];  racemisation;  favoured by 3° alkyl halides (stable carbocation)',
      'E2 (elimination): anti-periplanar requirement; Zaitsev product (more substituted alkene)',
      'Reactivity order of halides: RI > RBr > RCl > RF  (for SN reactions, polar aprotic solvents)'
    ],
    logic: [
      'SN2 vs SN1: depends on substrate (1°→SN2; 3°→SN1), nucleophile strength, and solvent',
      'Aryl halides: less reactive in nucleophilic substitution (C−X has partial double bond character)',
      'Grignard reagent (RMgX): C is nucleophilic (acts as carbanion) — do NOT use in protic solvents',
      'Polarity order of C−X bond: C−F most polar, but C−I most reactive (weak C−I bond)'
    ],
    tips: [
      'Common polyhalogen: CH₂Cl₂ (DCM, solvent); CHCl₃ (chloroform); CCl₄ (firefighting, now banned); DDT (insecticide, banned)',
      'Freons (CFCs): stable, non-toxic but cause ozone layer depletion',
      'Iodoform test (CHI₃ yellow ppt): identifies CH₃CO− group or CH₃CHOH−',
      'Board question: explain SN1 mechanism with stereochemical outcome'
    ],
    bestPractices: [
      'Show arrow-pushing mechanism for SN1 and SN2 — include transition state',
      'For SN2: show Walden inversion with 3D diagram',
      'Always specify substrate type (primary/secondary/tertiary) when predicting SN1/SN2'
    ]
  },
  {
    chapter: 'Alcohols, Phenols and Ethers',
    formulae: [
      'Lucas test: ZnCl₂/conc. HCl — 3° alcohol: immediate turbidity; 2°: slow; 1°: no reaction (at room temp)',
      'Victor Meyer test: 1° → red; 2° → blue; 3° → colourless',
      'Esterification: RCOOH + R′OH → RCOOR′ + H₂O  (acid catalyst)',
      'Oxidation: 1° alcohol → aldehyde (mild) → carboxylic acid (strong); 2° → ketone; 3° → resistant',
      'Reimer–Tiemann reaction: phenol + CHCl₃ + NaOH → salicylaldehyde',
      'Kolbe\'s reaction: phenol + CO₂/NaOH → sodium salicylate → salicylic acid',
      'Williamson synthesis: R-O-Na + R′X → R-O-R′ (unsymmetric ether)'
    ],
    logic: [
      'Higher boiling point of alcohols: due to intermolecular H-bonding',
      'Phenol is more acidic than alcohol: phenoxide ion stabilised by resonance with ring',
      'EWG on ring increases phenol\'s acidity; EDG decreases it',
      'Ether C−O bond cleaved by HI: stronger nucleophile and better leaving group'
    ],
    tips: [
      'For distinguishing alcohols: use Lucas test (ZnCl₂/HCl) or oxidation products',
      'Phenol gives purple-violet colour with neutral FeCl₃ solution',
      'Glycerol = 1,2,3-propanetriol;  ethylene glycol = 1,2-ethanediol (antifreeze)',
      'Board question: draw mechanism for acid-catalysed dehydration of primary alcohol to alkene'
    ],
    bestPractices: [
      'Draw resonance structures of phenoxide ion to explain its stability',
      'For ether synthesis: choose Williamson synthesis when product is unsymmetrical',
      'State the reagent and condition for each oxidation step (e.g., PCC for 1°→aldehyde, KMnO₄ for acid)'
    ]
  },
  {
    chapter: 'Aldehydes, Ketones and Carboxylic Acids',
    formulae: [
      'Nucleophilic addition to C=O: HCN, NaHSO₃, Grignard (RMgX), alcohols (→acetal), NH₂OH (→oxime)',
      'Aldol condensation: 2CH₃CHO → CH₃CH(OH)CH₂CHO (base-catalysed, requires α-H)',
      'Cannizzaro reaction (no α-H aldehyde): disproportionation — e.g., HCHO → HCOOH + CH₃OH',
      'Clemmensen reduction: C=O → CH₂  (Zn-Hg/HCl)',
      'Wolff–Kishner reduction: C=O → CH₂  (NH₂NH₂, KOH, ethylene glycol)',
      'Tollens\' test (silver mirror): RCHO + [Ag(NH₃)₂]⁺ → RCOO⁻ + Ag↓ (aldehydes only)',
      'Fehling\'s test: RCHO + Cu²⁺ → RCOO⁻ + Cu₂O↓ (brick-red) (aldehydes, not ketones)',
      'Acidity of carboxylic acids: RCOOH pKa ≈ 4–5; inductive effect: electron-withdrawing groups increase acidity',
      'Hell–Volhard–Zelinsky (HVZ): RCOOH + X₂/P → RCH(X)COOH  (α-halogenation)'
    ],
    logic: [
      'Aldehydes are more reactive than ketones in nucleophilic addition: less steric hindrance + more +I effect from H',
      'Carboxylic acids are more acidic than phenols (pKa ~5 vs ~10) due to resonance stabilisation of carboxylate ion',
      'Aldol product: one molecule acts as nucleophile (via enolate α-carbon), other as electrophile (C=O)',
      'Ketones resist Tollens\' and Fehling\'s tests (not easily oxidised); used to distinguish from aldehydes'
    ],
    tips: [
      'Formaldehyde (methanal) undergoes Cannizzaro, not aldol (no α-H)',
      'Benzaldehyde (no α-H) → Cannizzaro reaction with conc. NaOH',
      'Acetone (propanone) is the simplest ketone — undergoes aldol with base',
      'Board question: convert aldehyde to carboxylic acid; explain mechanism of Aldol condensation'
    ],
    bestPractices: [
      'Clearly state reagent and conditions (catalyst, temperature) for each conversion',
      'For tests: write equation showing positive result (precipitate or colour change)',
      'Distinguish Clemmensen vs Wolff–Kishner: former for acid-sensitive substrates is unsuitable; latter for base-sensitive'
    ]
  },
  {
    chapter: 'Amines',
    formulae: [
      'Basicity order: aliphatic amines > NH₃ > aniline  (aromatic amine weakened by delocalisation)',
      'Aliphatic amines in water: R₃N < R₂NH < RNH₂ (due to steric and solvation effects; 2° > 1° > 3° in aqueous)',
      'Carbylamine reaction: 1° amine + CHCl₃ + KOH → isocyanide (RNC) — bad smell; test for 1° amine',
      'Diazotisation: ArNH₂ + NaNO₂ + HCl (0–5°C) → ArN₂⁺Cl⁻',
      'Sandmeyer: ArN₂⁺ + CuX → ArX  (X = Cl, Br, CN)',
      'Balz–Schiemann: ArN₂⁺ + HBF₄ → ArF  (dry heat)',
      'Coupling reaction: ArN₂⁺ + PhOH (alkaline) → azo dye (−N=N−)'
    ],
    logic: [
      'Lone pair on N → Lewis base; proton acceptor; forms H-bonds',
      'Aniline: lone pair on N delocalised into benzene ring → less available for protonation → weaker base',
      'EWG on aniline ring: further reduces basicity; EDG increases it',
      'Hofmann bromamide degradation: RCONH₂ + Br₂ + NaOH → RNH₂  (one-carbon shorter amine)'
    ],
    tips: [
      'Gabriel phthalimide synthesis gives pure 1° amine (no 2° or 3° contamination)',
      'Diazonium salts: stable only in cold (0–5°C); warm → phenol (hydrolysis)',
      'Acylation (R-CO-Cl or (RCO)₂O) reduces basicity and ring-activating effect — used to protect −NH₂ in synthesis',
      'Board question: explain why aniline is weaker base than methylamine using resonance'
    ],
    bestPractices: [
      'When comparing basicity: factor in both electronic (inductive/resonance) AND steric effects AND solvation',
      'For diazonium reactions: state temperature condition (cold = coupling/Sandmeyer; warm = hydrolysis)',
      'Draw resonance structures showing delocalisation of lone pair in aniline'
    ]
  },
  {
    chapter: 'Biomolecules',
    formulae: [
      'Monosaccharides: C_n(H₂O)_n — e.g., glucose C₆H₁₂O₆;  linked by glycosidic bonds → disaccharides/polysaccharides',
      'Sucrose = glucose + fructose (non-reducing); Maltose = glucose + glucose (reducing); Lactose = galactose + glucose (reducing)',
      'Starch: amylose (α-1,4) + amylopectin (α-1,4 and α-1,6);  Cellulose: β-1,4 glycosidic bonds',
      'Amino acids: H₂N−CHR−COOH;  peptide bond: −CO−NH−  (amide bond)',
      'Protein levels: 1° (sequence), 2° (α-helix/β-sheet, H-bonds), 3° (3D shape), 4° (subunit assembly)',
      'DNA: 2-deoxyribose + bases + phosphate;  RNA: ribose + bases + phosphate',
      'Base pairing: A=T (2 H-bonds) in DNA;  A=U in RNA;  G≡C (3 H-bonds)'
    ],
    logic: [
      'Reducing sugars: have free aldehyde/ketone group (or potential); give positive Tollens\'/Fehling\'s test',
      'Sucrose is non-reducing: anomeric carbon of both monosaccharides involved in glycosidic bond',
      'Denaturation: secondary/tertiary structure disrupted by pH or heat — loses function but primary structure intact',
      'DNA double helix stabilised by H-bonds between complementary bases + stacking interactions',
      'Enzymes are protein catalysts: active site has specific shape; lock-and-key / induced-fit model'
    ],
    tips: [
      'Vitamins A, D, E, K: fat-soluble;  Vitamins B-complex and C: water-soluble',
      'Deficiency: Vit A → night blindness; Vit C → scurvy; Vit D → rickets; Vit B₁ → beri-beri',
      'mRNA carries genetic code from DNA to ribosome; tRNA brings amino acids; rRNA forms ribosome',
      'Board question: distinguish between DNA and RNA; draw peptide bond formation'
    ],
    bestPractices: [
      'Use terms "reducing" and "non-reducing" sugars precisely; justify with structure',
      'For protein structure questions: describe each level with the type of bond/interaction',
      'For nucleic acids: specify the sugar (deoxyribose vs ribose) and the unique base (thymine vs uracil)'
    ]
  }
];

REVISION['XII Biology'] = [
  {
    chapter: 'Reproductive Health',
    formulae: [],
    logic: [
      'Contraceptive methods: Natural (calendar, coitus interruptus), Barrier (condoms, diaphragm), IUDs (copper-T), Oral pills (combined hormonal), Injectables, Implants, Surgical (vasectomy, tubectomy)',
      'MTP (Medical Termination of Pregnancy): legal in India; used for unwanted/health-risk pregnancies — NOT recommended as contraceptive',
      'STIs (Sexually Transmitted Infections): gonorrhoea, syphilis, genital herpes, chlamydiasis, hepatitis-B, HIV/AIDS — many preventable with barrier methods',
      'Infertility: inability to conceive after 2 years of unprotected sex; assisted: IVF, GIFT, ZIFT, AI',
      'ART (Assisted Reproductive Technology): IVF (in vitro fertilisation) + ET → "test tube baby"; GIFT (Gamete Intrafallopian Transfer); ICSI (intracytoplasmic sperm injection)'
    ],
    tips: [
      'India: first country to initiate national-level population control programmes',
      'Amniocentesis: pre-natal sex determination is legally banned in India (used for genetic disorder detection only)',
      'Board question: list advantages and disadvantages of different contraceptive methods',
      'RCH (Reproductive and Child Health Care) programmes: key national initiative'
    ],
    bestPractices: [
      'Distinguish between contraception (prevents pregnancy) and MTP (terminates pregnancy)',
      'For IVF: sequence is hormonal stimulation → oocyte retrieval → fertilisation in lab → ET at 8-cell stage',
      'STI prevention: use barrier methods + avoid multiple sexual partners'
    ]
  },
  {
    chapter: 'Principles of Inheritance and Variation',
    formulae: [
      'Monohybrid ratio (F2): 3 : 1  (dominant : recessive)',
      'Dihybrid ratio (F2): 9 : 3 : 3 : 1',
      'Test cross: dominant phenotype × homozygous recessive → reveals genotype',
      'Incomplete dominance: F2 = 1:2:1 (phenotypic ratio same as genotypic)',
      'Co-dominance: both alleles expressed (e.g., AB blood group)',
      'ABO blood groups: IA, IB (codominant), i (recessive);  6 genotypes, 4 phenotypes'
    ],
    logic: [
      'Law of Segregation (Purity of Gametes): alleles separate during gamete formation',
      'Law of Independent Assortment: genes on different chromosomes assort independently',
      'Linked genes: on same chromosome; do NOT follow independent assortment',
      'Crossing over: recombination between linked genes; frequency ∝ distance between genes → basis of genetic maps',
      'Sex-linked inheritance: genes on X chromosome; males (XY) are hemizygous — show recessive traits more often'
    ],
    tips: [
      'Punnett square: rows = one parent\'s gametes; columns = other\'s; fill cells with genotypes',
      'Haemophilia: X-linked recessive; carrier female × normal male → 50% sons haemophilic',
      'Down syndrome: trisomy 21 (2n+1 = 47);  Turner syndrome: XO (45);  Klinefelter: XXY (47)',
      'Sickle-cell anaemia: point mutation in β-globin gene (GAG → GTG); autosomal recessive'
    ],
    bestPractices: [
      'Always write parent genotypes and gametes before drawing Punnett square',
      'State the law being demonstrated when solving genetics problems',
      'For sex-linked problems: show X chromosome notation (e.g., X^H X^h for carrier female)'
    ]
  },
  {
    chapter: 'Molecular Basis of Inheritance',
    formulae: [
      'DNA structure: antiparallel double helix; deoxyribose sugar + phosphate + base',
      'Base pairing: A=T (2 H-bonds); G≡C (3 H-bonds)  (Chargaff\'s rule: [A]=[T], [G]=[C])',
      'Semiconservative replication: each daughter DNA has one parental + one new strand (Meselson & Stahl)',
      'Central dogma: DNA → (transcription) → mRNA → (translation) → Protein',
      'Genetic code: triplet codons; 64 codons (61 coding + 3 stop: UAA, UAG, UGA); AUG = start (Met)',
      'Human genome: ~3×10⁹ bp; ~20,000–25,000 genes; only ~1.5% codes for protein'
    ],
    logic: [
      'Transcription in eukaryotes: hnRNA → splicing (remove introns) → mRNA → exported',
      'Translation: mRNA + ribosomes → polypeptide; tRNA is adaptor molecule (anticodon matches codon)',
      'Lac operon (prokaryote gene regulation): structural genes (lacZ, lacY, lacA) + operator + promoter + regulator gene',
      'Lac operon: repressor protein binds operator → no transcription; allolactose (inducer) removes repressor → transcription',
      'DNA fingerprinting: uses VNTR (variable number tandem repeats) — unique to each individual'
    ],
    tips: [
      'Exons: expressed (coding) sequences;  Introns: intervening (non-coding) sequences — removed by splicing',
      'Codon degeneracy: multiple codons may code for same amino acid — "wobble" at 3rd position',
      'Board question: explain semiconservative replication with Meselson-Stahl experiment',
      'PCR (Polymerase Chain Reaction): amplifies specific DNA segments; uses primers + DNA polymerase + repeated denaturation/annealing/extension cycles'
    ],
    bestPractices: [
      'Distinguish between replication (DNA→DNA), transcription (DNA→RNA), and translation (RNA→protein)',
      'For lac operon: state the regulatory role of repressor, operator, and inducer separately',
      'Quote Watson and Crick for double helix; Meselson and Stahl for semiconservative replication'
    ]
  },
  {
    chapter: 'Evolution',
    formulae: [
      'Hardy–Weinberg principle: allele frequencies constant in a large random-mating population with no selection/mutation/migration',
      'Hardy–Weinberg equilibrium: p² + 2pq + q² = 1  (p = freq of dominant allele; q = recessive)',
      'Hardy–Weinberg factors that disturb equilibrium: gene migration, gene drift, mutation, genetic recombination, natural selection'
    ],
    logic: [
      'Chemical evolution (Miller–Urey): primitive Earth conditions → amino acids from CH₄, NH₃, H₂, H₂O',
      'First forms of life: RNA world → protocells; RNA both genetic material and catalyst (ribozymes)',
      'Natural selection: variations → differential survival → evolution (Darwinism)',
      'Adaptive radiation: divergent evolution from a common ancestor (e.g., Darwin\'s finches)',
      'Genetic drift: random change in allele frequencies in small populations; can lead to speciation'
    ],
    tips: [
      'Homologous organs: same origin, different function (e.g., forelimbs of whale, bat, man) → divergent evolution',
      'Analogous organs: different origin, same function (e.g., wings of bat and butterfly) → convergent evolution',
      'Vestigial organs (e.g., nictitating membrane) → evidence for evolution',
      'Modern evolutionary synthesis combines Darwin\'s natural selection + Mendelian genetics'
    ],
    bestPractices: [
      'Distinguish between Lamarckism (acquired characters inherited — now rejected) and Darwinism (natural selection)',
      'For Hardy–Weinberg: state all five conditions for equilibrium before applying the formula',
      'Quote fossil evidence, comparative anatomy, and molecular biology as three types of evidence for evolution'
    ]
  },
  {
    chapter: 'Human Health and Disease',
    formulae: [],
    logic: [
      'Innate immunity (non-specific): skin, mucus, tears, phagocytes, inflammation, NK cells — first line of defence',
      'Acquired immunity (specific): humoral (B-cells → antibodies) + cell-mediated (T-cells)',
      'Memory cells: rapid secondary immune response → basis of vaccination',
      'Active immunity: body produces antibodies (after infection or vaccine)',
      'Passive immunity: ready-made antibodies given (e.g., anti-snake venom, colostrum)',
      'HIV: retrovirus; attacks T-helper (CD4⁺) cells → reduces T-cell count → AIDS (AIDS defined when count < 200/μL)'
    ],
    tips: [
      'Malaria: Plasmodium falciparum most fatal; transmitted by female Anopheles mosquito; sporozoites → liver → merozoites → RBCs',
      'Cancer: proto-oncogene → oncogene (mutation); tumour suppressor gene loss; metastasis = spread via blood/lymph',
      'Carcinogens: chemical (tobacco), physical (radiation), biological (viruses like HPV)',
      'Drug addiction: opioids (morphine, heroin) → bind brain receptors; affects CNS; naloxone is antidote',
      'Board question: differentiate between active and passive immunity with examples'
    ],
    bestPractices: [
      'For allergy: mast cells release histamine → symptoms; antihistamines counter it',
      'Widal test: detects antibodies against Salmonella typhi (typhoid)',
      'Name the causative organism AND the vector for vector-borne diseases (malaria, dengue, filariasis)'
    ]
  },
  {
    chapter: 'Microbes in Human Welfare',
    formulae: [],
    logic: [
      'Lactic acid bacteria (LAB): Lactobacillus → converts milk to curd; also increases B₁₂',
      'Saccharomyces cerevisiae: baker\'s and brewer\'s yeast; ferments glucose → ethanol + CO₂',
      'Penicillin: first antibiotic discovered by Alexander Fleming from Penicillium notatum',
      'Sewage treatment: primary (physical settling) → secondary (activated sludge, BOD reduction) → tertiary (chemical)',
      'BOD (Biological Oxygen Demand): measure of organic pollution; high BOD = more polluted',
      'Biogas (methane): produced by methanogens (e.g., Methanobacterium) in anaerobic conditions'
    ],
    tips: [
      'Biofertilisers: Rhizobium (legume root nodules, N₂ fixation); Azospirillum (free-living, grass); Anabaena (BGA, paddy fields)',
      'Biocontrol: Bacillus thuringiensis (Bt) produces crystal proteins toxic to insects; Trichoderma (fungal biocontrol)',
      'Industrial products: citric acid (Aspergillus niger); gluconic acid; acetic acid (Acetobacter)',
      'Board question: describe the role of microbes in sewage treatment'
    ],
    bestPractices: [
      'Distinguish between primary and secondary sewage treatment in terms of process and what\'s removed',
      'For biogas: state that it is produced in biogas plants from animal dung by methanogenic bacteria',
      'Name both the organism and product in questions about microbial industrial products'
    ]
  },
  {
    chapter: 'Biotechnology: Principles and Processes',
    formulae: [],
    logic: [
      'Recombinant DNA technology: restriction enzymes cut DNA at palindromic sequences → ligase joins insert + vector → transformation into host',
      'Restriction enzymes (endonucleases): cut at specific palindromic sequences; produce sticky or blunt ends',
      'Cloning vectors: plasmids (ori, selectable marker, MCS); bacteriophages; cosmids',
      'Selectable markers: antibiotic resistance genes (ampR, tetR) → allow selection of transformed cells',
      'PCR: denaturation (94°C) → annealing of primers (50–65°C) → extension by Taq polymerase (72°C) → 2ⁿ copies after n cycles'
    ],
    tips: [
      'EcoRI cuts at G↓AATTC (produces sticky ends);  SmaI cuts at CCC↓GGG (blunt ends)',
      'Agrobacterium tumefaciens: Ti plasmid used as vector to introduce genes into plants',
      'Gel electrophoresis: separates DNA fragments by size; smaller fragments migrate farther',
      'Southern blotting: DNA; Northern blotting: RNA; Western blotting: protein',
      'Board question: explain the steps of recombinant DNA technology'
    ],
    bestPractices: [
      'Use correct terminology: insert DNA (foreign gene), vector (carries insert), host (receives recombinant)',
      'Show the palindromic sequence and cut sites when explaining restriction enzymes',
      'PCR vs cloning: PCR amplifies in vitro; cloning amplifies in vivo (in host organism)'
    ]
  },
  {
    chapter: 'Biotechnology and Its Applications',
    formulae: [],
    logic: [
      'GM (Genetically Modified) crops: Bt cotton (Cry genes from B. thuringiensis → insect resistance); Bt brinjal; Golden Rice (β-carotene)',
      'Gene therapy: correcting a defective gene; SCID (Severe Combined Immune Deficiency) — first gene therapy success (ADA gene)',
      'Recombinant therapeutics: insulin (from E. coli — proinsulin route); hGH; interferon; hepatitis-B vaccine',
      'Molecular diagnosis: PCR-based detection of pathogens; ELISA (antibody-based detection)',
      'Transgenic animals: used as disease models, for protein production (α-1-antitrypsin in sheep milk)'
    ],
    tips: [
      'Cry proteins: produced as protoxin crystals; activated in alkaline insect gut → toxic to larvae',
      'RNAi (RNA interference): double-stranded RNA silences specific gene — used to create pest-resistant plants',
      'Biopiracy: exploitation of biological resources without proper authorisation or benefit-sharing',
      'Board question: explain why Bt cotton is an example of transgenic crop; how it controls pests'
    ],
    bestPractices: [
      'For GM crop questions: name the gene, its source organism, and the trait it confers',
      'Distinguish between transgenic organisms (carry foreign gene) and GM organisms (broadly modified)',
      'State ethical concerns (biopiracy, biosafety, patenting) alongside applications'
    ]
  },
  {
    chapter: 'Organisms and Populations',
    formulae: [
      'Exponential growth: dN/dt = rN;  N_t = N₀e^(rt)  (unlimited resources)',
      'Logistic growth: dN/dt = rN[(K−N)/K];  sigmoid curve;  K = carrying capacity',
      'r = b − d  (intrinsic rate of natural increase; b = birth rate, d = death rate)',
      'Population density: N = number/unit area or biomass or % cover'
    ],
    logic: [
      'Exponential (J-shaped) growth: when resources are unlimited — theoretical',
      'Logistic (S-shaped) growth: when resources limit growth — more realistic; population stabilises at K',
      'Species interactions: mutualism (+/+); commensalism (+/0); parasitism (+/−); predation (+/−); competition (−/−); amensalism (0/−)',
      'Competitive Exclusion Principle (Gause): two species competing for identical resources cannot coexist indefinitely',
      'Niches: Fundamental niche (potential); Realised niche (actual, after competition)'
    ],
    tips: [
      'r-strategists: small body, short life, high r, many offspring (e.g., insects); K-strategists: large, long life, low r (e.g., elephants)',
      'Carrying capacity K: maximum population an environment can sustain indefinitely',
      'Camouflage, mimicry: adaptations against predation; toxin/chemical defence (e.g., monarch butterfly)',
      'Board question: draw and explain J-shaped vs S-shaped population growth curves'
    ],
    bestPractices: [
      'Label both axes (N vs t) and mark K on logistic growth curves',
      'Classify each species interaction with the correct ± notation and give one example',
      'For growth rate questions: state which type of growth model is being applied'
    ]
  },
  {
    chapter: 'Ecosystem',
    formulae: [
      'Gross Primary Productivity (GPP): total rate of photosynthesis',
      'Net Primary Productivity (NPP) = GPP − Respiration',
      'Secondary productivity: rate of energy assimilation by consumers',
      '10% law (Lindemann): ~10% energy transferred from one trophic level to next',
      'Ecological pyramids: numbers, biomass, energy;  energy pyramid always upright'
    ],
    logic: [
      'Energy flow is unidirectional (producers → consumers → decomposers); cannot be recycled',
      'Nutrient cycling IS circular: gaseous (C, N — atmosphere as reservoir) vs sedimentary (P, S — earth\'s crust)',
      'Detritivores: earthworms, millipedes fragment detritus; bacteria/fungi mineralise (catabolism)',
      'Food web: interconnected food chains; more complex = more stable ecosystem',
      'Carbon cycle: photosynthesis (CO₂ fixation) + respiration + decomposition + combustion'
    ],
    tips: [
      'Pyramid of energy is always upright (10% law) — unlike biomass which can be inverted (aquatic)',
      'Producers = autotrophs (plants, algae, cyanobacteria); occupy trophic level 1',
      'Decomposers break down dead matter → release inorganic nutrients → available again for producers (recycling)',
      'Board question: explain carbon cycle with diagram; calculate NPP given GPP and respiration rate'
    ],
    bestPractices: [
      'Clearly distinguish between food chain (linear) and food web (network)',
      'For nutrient cycles: identify the reservoir, the biotic component, and the return pathway',
      'State the 10% law when answering questions about energy pyramids'
    ]
  },
  {
    chapter: 'Biodiversity and Conservation',
    formulae: [
      'Species richness: number of different species in a region',
      'Species-area relationship: log S = log C + Z log A  (Z ≈ 0.1–0.2 islands; 0.6–1.2 continents)',
      'India: 12 mega-diversity countries; ~8% of global biodiversity; ~45,000 plant spp. and ~90,000 animal spp.'
    ],
    logic: [
      'Levels of biodiversity: genetic (within species), species (between species), ecosystem diversity',
      'Threats (HIPPO): Habitat loss, Invasive species, Pollution, Population growth (human), Over-exploitation',
      'Biodiversity hotspots: high endemism + high habitat loss;  34 hotspots worldwide;  India: 3 (Western Ghats, Himalaya, Indo-Burma)',
      'In situ conservation: in natural habitat — national parks, wildlife sanctuaries, biosphere reserves, sacred groves',
      'Ex situ conservation: outside natural habitat — zoos, botanical gardens, seed banks, cryopreservation'
    ],
    tips: [
      'India: 14 biosphere reserves, 90+ national parks, 500+ wildlife sanctuaries',
      'IUCN Red List: Extinct, Critically Endangered, Endangered, Vulnerable, Near Threatened, Least Concern',
      'Co-extinction: extinction of one species drives extinction of obligate symbiont/pollinator',
      'Board question: distinguish between in situ and ex situ conservation with examples'
    ],
    bestPractices: [
      'Give specific examples of hotspots in India (Western Ghats-Sri Lanka, Himalaya, Indo-Burma)',
      'Name both the national park and the keystone/flagship species in conservation examples',
      'Justify biodiversity\'s value: narrowly utilitarian (direct use), broadly utilitarian (ecosystem services), ethical (intrinsic value)'
    ]
  }
];

REVISION['XII Computer Science'] = [
  {
    chapter: 'Exception Handling in Python',
    formulae: [],
    logic: [
      'try-except block: try encloses risky code; except catches specific exception types',
      'except ExceptionType as e: catches named exception and binds it to variable e',
      'else clause runs only if no exception was raised in try block',
      'finally clause always runs regardless of whether an exception occurred',
      'raise ExceptionName("message") manually triggers an exception',
      'Exception hierarchy: BaseException → Exception → ArithmeticError, ValueError, etc.'
    ],
    tips: [
      'Catching broad Exception hides bugs; prefer specific exception types (ValueError, ZeroDivisionError)',
      'finally is used for cleanup: closing files, releasing resources',
      'Custom exceptions: define a class inheriting from Exception',
      'SyntaxError cannot be caught at runtime — it prevents the program from starting'
    ],
    bestPractices: [
      'Always pair file.open() with a finally: file.close() or use with statement',
      'Print or log the exception message (str(e)) to aid debugging',
      'Distinguish between compile-time errors (SyntaxError) and runtime exceptions'
    ]
  },
  {
    chapter: 'File Handling in Python',
    formulae: [],
    logic: [
      'open(filename, mode): modes — r (read), w (write, truncates), a (append), r+ (read-write), b suffix for binary',
      'read() reads entire file; readline() reads one line; readlines() returns list of lines',
      'write(str) writes a string; writelines(list) writes list of strings (no auto newline)',
      'seek(offset, from): moves file pointer; tell() returns current pointer position',
      'Text files store data as characters; binary files store data as bytes (images, audio)',
      'CSV: comma-separated values; use csv.reader() and csv.writer() from csv module'
    ],
    tips: [
      'Always close files after use or use: with open(...) as f — auto-closes on exit',
      'Writing mode "w" deletes existing content; use "a" to preserve and append',
      'readlines() includes newline characters \\n; strip() to remove them',
      'Binary mode required for non-text files (images, .exe) to prevent encoding errors'
    ],
    bestPractices: [
      'Prefer with open(...) as f: over manual open/close',
      'Handle FileNotFoundError when opening files for reading',
      'Specify encoding="utf-8" explicitly for cross-platform text file compatibility'
    ]
  },
  {
    chapter: 'Stack',
    formulae: [
      'LIFO — Last In First Out',
      'Push: append element at TOP; Pop: remove element from TOP',
      'Peek/Top: view top element without removing'
    ],
    logic: [
      'Implementation using list: push → list.append(x); pop → list.pop(); peek → list[-1]',
      'isEmpty(): return len(stack) == 0',
      'Stack overflow: push on full stack (static array); underflow: pop on empty stack',
      'Applications: function call stack, expression evaluation, undo operations, backtracking',
      'Infix → Postfix conversion uses operator precedence (PEMDAS) and a stack'
    ],
    tips: [
      'Python list naturally behaves as stack (append/pop from end)',
      'Always check isEmpty() before pop to avoid IndexError',
      'Balanced parentheses check: push opening, pop and match on closing bracket',
      'Stack is used internally by Python for recursion (call stack)'
    ],
    bestPractices: [
      'Define push(), pop(), peek(), isEmpty(), display() as functions for modularity',
      'Return None or raise exception on underflow — do not crash silently',
      'Trace stack state step-by-step in exam answers for infix-to-postfix questions'
    ]
  },
  {
    chapter: 'Queue',
    formulae: [
      'FIFO — First In First Out',
      'Enqueue: insert at REAR; Dequeue: remove from FRONT',
      'Circular Queue: (rear + 1) % MAX_SIZE'
    ],
    logic: [
      'Linear queue using list: enqueue → append(x); dequeue → pop(0)',
      'Deque (double-ended queue): insert/delete at both ends; Python collections.deque',
      'Circular queue avoids "false overflow" by wrapping rear/front pointers',
      'Priority queue: elements dequeued by priority, not arrival order',
      'Applications: CPU scheduling, print spooling, BFS graph traversal, ticket booking'
    ],
    tips: [
      'list.pop(0) is O(n); collections.deque.popleft() is O(1) — preferred for real queues',
      'Linear queue wastes space after dequeue — use circular queue to reuse vacated slots',
      'Deque supports appendleft() and popleft() in addition to append() and pop()',
      'Queue is empty when front > rear (linear) or front == rear == -1 (circular)'
    ],
    bestPractices: [
      'Always check for overflow/underflow conditions before enqueue/dequeue',
      'Use isempty() and isfull() helper functions',
      'Trace queue state (front, rear, elements) step-by-step in exam answers'
    ]
  },
  {
    chapter: 'Sorting',
    formulae: [
      'Bubble sort passes: n-1 passes for n elements',
      'Selection sort comparisons: n(n-1)/2',
      'Insertion sort: O(n²) worst case, O(n) best case (already sorted)'
    ],
    logic: [
      'Bubble sort: repeatedly swap adjacent elements if out of order; largest bubbles to end each pass',
      'Selection sort: find minimum in unsorted portion, swap with first unsorted element',
      'Insertion sort: take one element at a time, insert it at correct position in sorted portion',
      'All three are O(n²) time complexity in average and worst case',
      'Stable sort: equal elements maintain original relative order (Insertion and Bubble are stable)'
    ],
    tips: [
      'Bubble sort can be optimized: stop early if no swaps in a pass (already sorted)',
      'Selection sort always does exactly n-1 swaps regardless of input order',
      'Insertion sort is efficient for nearly-sorted data',
      'In exam: show each pass/step clearly with array state after each iteration'
    ],
    bestPractices: [
      'Always mention time complexity (O(n²)) and whether stable/unstable',
      'Trace all passes step by step — partial traces lose marks in board exams',
      'Selection sort: identify minimum index, then swap at end of pass (not during)'
    ]
  },
  {
    chapter: 'Searching',
    formulae: [
      'Linear search: O(n) — checks every element',
      'Binary search: O(log n) — requires sorted list',
      'mid = (low + high) // 2'
    ],
    logic: [
      'Linear search: traverse list element by element; return index if match found, -1 otherwise',
      'Binary search: compare target with mid element; search left half if target < mid, right half if target > mid',
      'Binary search precondition: list MUST be sorted',
      'Hash search: compute hash of key, look up bucket — O(1) average',
      'Collision in hash: two keys map to same bucket; resolved by chaining or open addressing'
    ],
    tips: [
      'Binary search on unsorted data gives WRONG results — always sort first',
      'Binary search is much faster for large datasets (log₂(1000) ≈ 10 comparisons vs 1000)',
      'For small or unsorted lists, linear search is simpler and acceptable',
      'In exam: show each iteration of binary search — low, high, mid values'
    ],
    bestPractices: [
      'State precondition (sorted) before applying binary search',
      'Trace all iterations clearly showing low, high, mid and comparison result',
      'Hash functions should distribute keys uniformly to minimise collisions'
    ]
  },
  {
    chapter: 'Understanding Data',
    formulae: [
      'Mean = Σx / n',
      'Median: middle value of sorted data; average of two middle values if n is even',
      'Mode: most frequently occurring value',
      'Range = Max − Min',
      'Standard Deviation (σ) = √(Σ(x − mean)² / n)'
    ],
    logic: [
      'Measures of central tendency: mean, median, mode — describe centre of data',
      'Measures of dispersion: range, variance, standard deviation — describe spread',
      'Outliers: extreme values that distort mean; median is robust to outliers',
      'Python statistics module: mean(), median(), mode(), stdev()',
      'Data visualisation: bar chart (categories), histogram (frequency distribution), pie chart (proportions), line chart (trends)'
    ],
    tips: [
      'Use median instead of mean when data has outliers (e.g., salaries, house prices)',
      'Standard deviation = 0 means all values are identical',
      'Mode can have multiple values (multimodal) or none (all values unique)',
      'matplotlib.pyplot functions: bar(), hist(), pie(), plot()'
    ],
    bestPractices: [
      'Import statistics module for Python-based statistical calculations',
      'Label axes and add title to all matplotlib charts',
      'Choose appropriate chart type: histogram for continuous data, bar for discrete/categorical'
    ]
  },
  {
    chapter: 'Database Concepts',
    formulae: [],
    logic: [
      'DBMS: software to create, manage, and query databases (MySQL, Oracle, SQLite)',
      'Relational model: data stored in tables (relations) with rows (tuples) and columns (attributes)',
      'Primary key: uniquely identifies each row; must be NOT NULL and unique',
      'Foreign key: attribute in one table referencing primary key of another table',
      'Candidate key: minimal set of attributes that can uniquely identify a row',
      'Data integrity: entity integrity (no null PKs), referential integrity (FK must reference existing PK)',
      'DDL (Data Definition Language): CREATE, ALTER, DROP; DML: INSERT, UPDATE, DELETE, SELECT'
    ],
    tips: [
      'Primary key cannot be NULL; foreign key can be NULL (optional relationship)',
      'One table can have only ONE primary key but multiple candidate keys',
      'Referential integrity: cannot insert FK value that does not exist in parent table',
      'RDBMS stores data in normalised form to reduce redundancy'
    ],
    bestPractices: [
      'Always identify primary key, foreign key, and candidate keys when designing a schema',
      'Distinguish between DDL (structure) and DML (data manipulation) commands',
      'Understand that NULL means "unknown/missing" not zero or empty string'
    ]
  },
  {
    chapter: 'Structured Query Language',
    formulae: [],
    logic: [
      'DDL: CREATE TABLE, ALTER TABLE (ADD/MODIFY/DROP column), DROP TABLE, TRUNCATE',
      'DML: INSERT INTO, SELECT ... FROM ... WHERE, UPDATE ... SET ... WHERE, DELETE FROM ... WHERE',
      'Aggregate functions: COUNT(), SUM(), AVG(), MAX(), MIN() — operate on column values',
      'GROUP BY: groups rows with same value in specified column for aggregate calculation',
      'HAVING: filters groups (used with GROUP BY); WHERE filters rows before grouping',
      'ORDER BY col [ASC|DESC]: sorts result set',
      'JOIN: INNER JOIN (matching rows only), LEFT JOIN (all from left + matching from right)',
      'LIKE: pattern matching — % matches any sequence, _ matches single character'
    ],
    tips: [
      'WHERE filters individual rows; HAVING filters aggregated groups',
      'SELECT DISTINCT removes duplicate rows from result',
      'NULL comparisons: use IS NULL / IS NOT NULL, not = NULL',
      'ORDER BY default is ASC; use DESC for descending order'
    ],
    bestPractices: [
      'Always use WHERE in UPDATE/DELETE to avoid affecting all rows',
      'Quote string literals with single quotes in SQL: WHERE name = \'Rahul\'',
      'Aliases (AS): SELECT AVG(marks) AS average FROM student makes output readable'
    ]
  },
  {
    chapter: 'Computer Networks',
    formulae: [],
    logic: [
      'Network types: LAN (same building/campus), MAN (city-wide), WAN (country/global) — classified by geographic area',
      'Topology: Bus (single backbone cable), Star (hub/switch at centre), Ring (circular), Mesh (every node connected)',
      'Devices: Modem (digital↔analog), NIC (network interface, has MAC address), Repeater (signal boost), Switch (connects LAN devices), Router (connects different networks)',
      'MAC address: 48-bit hardware address unique to each NIC',
      'IP address: logical address assigned to device; IPv4 (32-bit), IPv6 (128-bit)',
      'DNS: translates domain names (www.google.com) to IP addresses',
      'Protocol: set of rules governing data communication (TCP/IP, HTTP, FTP, SMTP)'
    ],
    tips: [
      'Switch operates at data link layer; Router operates at network layer',
      'Internet is the largest WAN connecting billions of devices',
      'Ethernet is the standard wired LAN technology (set of rules for LAN connection)',
      'Repeater regenerates signals to extend network distance; does not route/switch'
    ],
    bestPractices: [
      'Match network type (LAN/MAN/WAN) to given scenario and justify',
      'Know device functions clearly: modem converts, NIC connects, switch forwards within LAN, router connects LANs',
      'IPv4: dotted decimal notation (e.g., 192.168.1.1); 4 octets of 8 bits each'
    ]
  },
  {
    chapter: 'Data Communication',
    formulae: [
      'Bandwidth: measured in Hertz (Hz) — capacity of channel',
      'Data transfer rate: bits per second (bps, Kbps, Mbps, Gbps)'
    ],
    logic: [
      'Components: Sender, Receiver, Message, Channel (transmission medium), Protocol',
      'Guided media (wired): Twisted pair cable, Coaxial cable, Fibre optic cable',
      'Unguided media (wireless): Radio waves, Microwaves, Infrared, Visible light',
      'Communication modes: Simplex (one-way), Half-duplex (both ways, not simultaneously), Full-duplex (both ways simultaneously)',
      'Switching: Circuit switching (dedicated path), Packet switching (data in packets, different routes)',
      'TCP/IP: TCP breaks data into packets, ensures delivery; IP addresses and routes packets',
      'Wireless generations: 1G (analog voice), 2G (digital voice+SMS), 3G (mobile internet), 4G (LTE broadband), 5G (ultra-fast low-latency)'
    ],
    tips: [
      'Fibre optic is fastest and most secure guided medium (light pulses, no EM interference)',
      'Packet switching is more efficient than circuit switching for internet data',
      'Bluetooth: short-range wireless (personal area network, ~10m)',
      'Wi-Fi uses radio waves; operates on 2.4 GHz or 5 GHz frequency bands'
    ],
    bestPractices: [
      'Classify transmission media as guided/unguided with example for each',
      'Distinguish simplex/half-duplex/full-duplex with real-world examples (TV remote, walkie-talkie, phone)',
      'Explain TCP/IP: TCP handles reliability and ordering; IP handles addressing and routing'
    ]
  },
  {
    chapter: 'Security Aspects',
    formulae: [],
    logic: [
      'Malware types: Virus (self-replicating, attaches to files), Worm (standalone, spreads via network), Trojan (disguised as legitimate software), Ransomware (encrypts data, demands ransom), Spyware (collects info secretly), Adware (unwanted ads), Keylogger (records keystrokes)',
      'Malware detection methods: Signature-based (known patterns), Heuristic (behavior analysis), Sandbox (run in isolated environment)',
      'Spam: unsolicited bulk messages (email, SMS)',
      'Firewall: blocks unauthorized access; types — Network firewall (hardware/software), Host-based firewall',
      'HTTPS: HTTP + SSL/TLS encryption; padlock icon in browser — encrypts data in transit',
      'Cookie: small file stored by browser containing session/preference data',
      'Eavesdropping: intercepting real-time communication; Snooping: copying stored data/communications'
    ],
    tips: [
      'Antivirus detects/removes malware using signature, heuristic, and sandbox methods',
      'Strong passwords: mix uppercase, lowercase, digits, special characters; no dictionary words',
      'Two-factor authentication (2FA) adds security layer beyond password',
      'Phishing: fraudulent emails/sites that mimic legitimate ones to steal credentials'
    ],
    bestPractices: [
      'Distinguish between different malware types with one defining characteristic each',
      'Firewall is preventive; antivirus is detective and corrective',
      'HTTPS ensures confidentiality (encryption) and integrity; HTTP is unencrypted and insecure',
      'Keep software updated to patch security vulnerabilities (buffer overflow, SQL injection exploits)'
    ]
  }
];

REVISION['XII Economics'] = [
  {
    chapter: 'Introduction',
    formulae: [
      'PPF (Production Possibility Frontier): curve showing all maximum output combinations of two goods given resources',
      'Opportunity cost: value of the next-best alternative forgone'
    ],
    logic: [
      'Central problems of every economy: What to produce, How to produce, For whom to produce',
      'Scarcity: resources are limited relative to unlimited wants — the fundamental economic problem',
      'PPF slopes downward (negative slope): producing more of one good requires giving up some of another',
      'Microeconomics: studies individual consumers and producers, single commodity price and quantity determination',
      'Macroeconomics: studies economy as a whole — total output, employment, aggregate price level',
      'Market economy: prices determined by demand and supply; minimal government role',
      'Centrally planned economy: government decides all resource allocation',
      'Mixed economy: elements of both market and central planning'
    ],
    tips: [
      'Positive economics: describes what IS (factual); Normative economics: prescribes what OUGHT to be (value judgement)',
      'Points inside PPF = inefficient (resources underused); on PPF = efficient; outside PPF = unattainable currently',
      'Opportunity cost increases along PPF — explains why PPF is concave (bowed outward)'
    ],
    bestPractices: [
      'Define scarcity, opportunity cost and PPF precisely — these appear as 1-mark definitions in board exams',
      'Distinguish micro vs. macro with one example each',
      'Board question: "What is a production possibility frontier?" — always mention resources, technology, efficient use'
    ]
  },
  {
    chapter: 'Theory of Consumer Behaviour',
    formulae: [
      'Budget line: P₁x₁ + P₂x₂ = M  (M = income, P₁, P₂ = prices)',
      'MRS (Marginal Rate of Substitution) = ΔX₂/ΔX₁  (along indifference curve)',
      'Consumer equilibrium: MRS = P₁/P₂  (tangency of budget line and indifference curve)',
      'Price elasticity of demand (Ed) = % change in quantity demanded / % change in price',
      'Unitary elastic: |Ed| = 1; Elastic: |Ed| > 1; Inelastic: |Ed| < 1'
    ],
    logic: [
      'Budget set: all bundles affordable at given prices and income; budget line = boundary of budget set',
      'Budget line shifts: income increase → parallel outward shift; price rise of one good → pivot inward on that axis',
      'Indifference curve: locus of bundles giving equal satisfaction; downward sloping; convex to origin',
      'Monotonic preferences: more of any good is preferred → indifference curves cannot slope upward',
      'Consumer optimum: highest affordable indifference curve = tangency point with budget line',
      'Demand curve: derived from consumer optimum — shows quantity chosen at each price (ceteris paribus)',
      'Normal good: demand increases with income; Inferior good: demand decreases with income',
      'Substitute goods: rise in price of one → demand for other rises; Complement goods: opposite'
    ],
    tips: [
      'Indifference curves never intersect — would imply contradiction in preferences',
      'MRS diminishes along an IC (convexity): willing to give up less Y for each extra unit of X',
      'Giffen good: inferior good with such strong income effect that demand rises when price rises (rare exception)',
      'Total expenditure method to determine elasticity: if expenditure falls as price rises → elastic; rises → inelastic'
    ],
    bestPractices: [
      'Always draw and label budget line with intercepts (M/P₁ on X-axis, M/P₂ on Y-axis)',
      'Show consumer equilibrium diagram: IC tangent to budget line with optimum bundle marked',
      'State reason for downward slope of demand curve: substitution effect + income effect'
    ]
  },
  {
    chapter: 'Production and Costs',
    formulae: [
      'TP = f(L, K)  (Total Product as function of Labour and Capital)',
      'MP = ΔTP/ΔL  (Marginal Product)',
      'AP = TP/L  (Average Product)',
      'TC = TFC + TVC',
      'AC = AFC + AVC  (also AC = TC/Q)',
      'MC = ΔTC/ΔQ  (also = ΔTVC/ΔQ since TFC is constant)'
    ],
    logic: [
      'Short run: at least one input fixed (usually capital); Long run: all inputs variable',
      'Law of diminishing marginal product: as more variable input is added (fixed capital), MP eventually falls',
      'TP, MP relationship: MP > 0 → TP rising; MP = 0 → TP maximum; MP < 0 → TP falling',
      'MP curve cuts AP at AP maximum (from above)',
      'AFC = TFC/Q — continuously falls as output increases (fixed cost spread over more units)',
      'AVC, SAC, SMC are all U-shaped in short run',
      'SMC cuts AVC at minimum AVC; SMC cuts SAC at minimum SAC',
      'LRAC and LRMC are also U-shaped; LRMC cuts LRAC at minimum LRAC',
      'Economies of scale: LRAC falls as output rises; Diseconomies of scale: LRAC rises'
    ],
    tips: [
      'TVC = area under MC curve up to that output level',
      'Returns to scale (long run): Increasing, Constant, Decreasing returns to scale',
      'Law of variable proportions = short-run version; Returns to scale = long-run concept',
      'AFC never reaches zero (fixed cost always exists regardless of output level)'
    ],
    bestPractices: [
      'Draw U-shaped AVC, SAC, MC curves with MC passing through minimum points of both',
      'Distinguish clearly between short run and long run; state which inputs are fixed/variable',
      'Numericals: calculate TP from MP (sum), MP from TP (difference), all cost curves from TC table'
    ]
  },
  {
    chapter: 'The Theory of the Firm under Perfect Competition',
    formulae: [
      'TR = P × Q  (Total Revenue)',
      'AR = TR/Q = P  (for price-taker)',
      'MR = ΔTR/ΔQ = P  (for price-taker in perfect competition)',
      'Profit (π) = TR − TC',
      'Profit maximisation: P = SMC AND SMC is non-decreasing AND P ≥ AVC (short run)',
      'Price elasticity of supply (Es) = % change in quantity supplied / % change in price'
    ],
    logic: [
      'Perfect competition features: large buyers/sellers, homogeneous product, free entry/exit, perfect information',
      'Price-taker: individual firm cannot influence market price; faces perfectly elastic (horizontal) demand curve',
      'Profit maximisation rule: produce where MR = MC (P = SMC for PC firm)',
      'Shut-down condition: if P < min AVC, firm produces zero (variable costs not covered)',
      'Short-run supply curve of firm: rising part of SMC at or above minimum AVC',
      'Long-run supply: rising part of LRMC at or above minimum LRAC',
      'Market supply: horizontal summation of all individual firm supply curves',
      'Unit tax shifts supply curve leftward (increases cost)'
    ],
    tips: [
      'AR = MR = P in perfect competition (demand curve is horizontal)',
      'Firm earns normal profit (zero economic profit) in long-run equilibrium (P = min LRAC)',
      'Positive economic profit attracts new entry → price falls → profits eliminated',
      'Supply curve shifts right: technological progress, fall in input prices, decrease in unit tax'
    ],
    bestPractices: [
      'Draw firm demand as horizontal line at market price; show TR, TC and profit/loss clearly',
      'Show profit maximisation at P = SMC with non-decreasing SMC condition',
      'Distinguish between short-run and long-run equilibrium conditions'
    ]
  },
  {
    chapter: 'Market Equilibrium',
    formulae: [
      'Equilibrium: Qd = Qs  (market clears)',
      'Excess demand: Qd > Qs → price rises; Excess supply: Qd < Qs → price falls',
      'Marginal Revenue Product (MRP) of labour = MR × MP',
      'Labour demand: firm hires labour until MRP = wage rate (W)'
    ],
    logic: [
      'Equilibrium price and quantity at intersection of market demand and supply curves',
      'Demand shift right (supply unchanged): equilibrium P and Q both increase',
      'Supply shift right (demand unchanged): equilibrium Q increases, P decreases',
      'Both shift same direction: effect on Q unambiguous; effect on P depends on magnitude',
      'Both shift opposite directions: effect on P unambiguous; effect on Q depends on magnitude',
      'Free entry and exit (long run): equilibrium price always equals minimum AC of firms',
      'With free entry/exit: demand shift increases Q and number of firms, P unchanged (equals min AC)',
      'Price ceiling below equilibrium → excess demand (shortage); government rationing needed',
      'Price floor above equilibrium → excess supply (surplus); e.g., minimum wage, MSP'
    ],
    tips: [
      'MSP (Minimum Support Price) = price floor for agricultural goods in India',
      'Rent control = price ceiling → housing shortage (classic example)',
      'With free entry/exit market is more responsive to demand shifts (larger Q increase)',
      'Board question: explain effect of (a) rise in income on normal good, (b) improvement in technology'
    ],
    bestPractices: [
      'Always draw demand-supply diagram showing shift and new equilibrium',
      'State direction of change in both P and Q after any shift',
      'Distinguish fixed-number-of-firms vs. free-entry-and-exit scenarios — different long-run outcomes'
    ]
  }
];

REVISION['XII Psychology'] = [
  {
    chapter: 'Variations in Psychological Attributes',
    formulae: [
      'IQ = (Mental Age / Chronological Age) × 100',
      'Normal distribution of IQ: mean = 100, SD ≈ 15; 68% fall between 85–115'
    ],
    logic: [
      'Individual differences: distinctiveness and variations among people\'s characteristics and behaviour patterns',
      'Intelligence: ability to understand complex ideas, adapt to environment, learn from experience, reason, overcome obstacles',
      'Binet\'s IQ test: first standardised intelligence test; concept of Mental Age',
      'Gardner\'s Multiple Intelligences (8): Linguistic, Logical-Mathematical, Spatial, Musical, Bodily-Kinaesthetic, Interpersonal, Intrapersonal, Naturalist',
      'Sternberg\'s Triarchic Theory: Componential (analytical), Experiential (creative), Contextual (practical) intelligence',
      'PASS model (Das): Planning, Attention-Arousal, Simultaneous processing, Successive processing — four neurological systems',
      'Emotional Intelligence (EI): perceive/manage own and others\' emotions, motivate oneself, handle relationships',
      'Aptitude: potential to acquire skills with training; different from achievement (actual performance)',
      'Creativity: ability to produce novel, appropriate and useful ideas; requires some intelligence but high IQ ≠ high creativity'
    ],
    tips: [
      'IQ 90–109 = Average; 110–119 = High average; 120–129 = Superior; 130+ = Very Superior; below 70 = Intellectual disability',
      'Individual intelligence tests: Binet-Simon, WAIS; Group tests: Army Alpha (verbal), Army Beta (non-verbal)',
      'Fluid intelligence (Gf): solving novel problems; Crystallised intelligence (Gc): accumulated knowledge',
      'Cultural differences: Indian notion of intelligence includes social competence and emotional balance'
    ],
    bestPractices: [
      'Name the theory and its author together (e.g., "Gardner\'s theory of multiple intelligences")',
      'Distinguish aptitude (potential) from intelligence (current ability) and achievement (past performance)',
      'Board question: list Gardner\'s 8 intelligences with one-line examples'
    ]
  },
  {
    chapter: 'Self and Personality',
    formulae: [],
    logic: [
      'Self: the awareness of one\'s own identity; includes self-concept, self-esteem, self-efficacy',
      'Indian notion of self: emphasis on collectivism, interconnectedness; Western notion: individualistic, independent',
      'Personality: characteristic ways of thinking, feeling and behaving that make a person unique',
      'Type theories: classify people into distinct categories (e.g., introvert/extrovert — Jung)',
      'Trait theories: personality = set of stable traits; Big Five (OCEAN): Openness, Conscientiousness, Extraversion, Agreeableness, Neuroticism',
      'Freud\'s psychoanalytic theory: personality = Id (pleasure principle), Ego (reality principle), Superego (moral principle); unconscious drives behaviour',
      'Freud\'s defence mechanisms: repression, projection, rationalisation, displacement, sublimation',
      'Horney & Adler: Neo-Freudian; emphasised social factors over biological drives',
      'Humanistic approach: Rogers — Real self vs. Ideal self; congruence = psychological health; Maslow — hierarchy of needs, self-actualisation',
      'Cultural approach: personality shaped by cultural demands and economic maintenance systems',
      'Personality assessment: Self-report (questionnaires — MMPI, 16PF), Projective (Rorschach Inkblot, TAT), Behavioural analysis (observation, interview)'
    ],
    tips: [
      'Rorschach Inkblot Test: 10 inkblot cards; person describes what they see — projects unconscious',
      'TAT (Thematic Apperception Test): person creates story around ambiguous pictures',
      'Self-report measures are objective but subject to social desirability bias',
      'Rogers: unconditional positive regard from others helps develop healthy self-concept'
    ],
    bestPractices: [
      'Compare type vs. trait approach: type places people in categories; trait describes degree of each dimension',
      'Freud\'s structure: Id (unconscious, biological), Ego (conscious, mediating), Superego (moral conscience)',
      'Board question: distinguish projective and self-report measures with examples'
    ]
  },
  {
    chapter: 'Meeting Life Challenges',
    formulae: [],
    logic: [
      'Stress: a transactional process between person and environment; neither purely stimulus nor response',
      'Types of stress: Physical/environmental (noise, heat), Psychological (conflict, frustration), Social (relationships)',
      'Sources of stress: Life events (major changes), Daily hassles (minor irritants), Traumatic events (disasters)',
      'GAS (General Adaptation Syndrome — Selye): Alarm reaction → Resistance → Exhaustion',
      'Stress responses: Emotional (anxiety, anger), Physiological (fight-or-flight — cortisol, adrenaline), Cognitive (difficulty concentrating), Behavioural (withdrawal)',
      'Coping types: Task-oriented (address problem), Emotion-oriented (manage emotional response), Avoidance-oriented (escape)',
      'Problem-focused coping: changes the stressor; Emotion-focused coping: changes emotional reaction to stressor',
      'Life skills for coping: assertiveness, time management, rational thinking, improving relationships, self-care'
    ],
    tips: [
      'Eustress = positive stress (motivating); Distress = negative stress (harmful)',
      'Burnout: chronic stress leading to emotional exhaustion, depersonalisation, reduced sense of achievement',
      'Social support: emotional, informational, tangible — all buffer stress',
      'Healthy lifestyle: balanced diet, exercise, positive thinking, social support protect against stress'
    ],
    bestPractices: [
      'Explain GAS with three stages and physiological changes at each stage',
      'Distinguish problem-focused and emotion-focused coping with examples',
      'Board question: "What is stress? Describe the sources and effects of stress"'
    ]
  },
  {
    chapter: 'Psychological Disorders',
    formulae: [],
    logic: [
      'Abnormal behaviour: 4Ds — Deviance, Distress, Dysfunction, Danger',
      'DSM-5 (Diagnostic and Statistical Manual): standard classification system for psychological disorders',
      'Anxiety disorders: Phobias (intense irrational fear), GAD (generalised anxiety disorder), Panic disorder',
      'OCD (Obsessive-Compulsive Disorder): obsessions (intrusive thoughts) + compulsions (repetitive behaviours)',
      'PTSD (Post-Traumatic Stress Disorder): flashbacks, nightmares, hyperarousal after traumatic event',
      'Depressive disorders: persistent sadness, loss of interest, fatigue, worthlessness, suicidal ideation',
      'Bipolar disorder: alternating episodes of mania (elevated mood, grandiosity) and depression',
      'Schizophrenia: positive symptoms (hallucinations, delusions, disorganised speech) + negative symptoms (flat affect, withdrawal)',
      'Dissociative disorders: disruption of identity, memory or consciousness (DID — multiple personalities)',
      'Eating disorders: Anorexia nervosa (self-starvation, distorted body image), Bulimia nervosa (binge-purge cycles)',
      'ADHD: inattention, hyperactivity, impulsivity — neurodevelopmental disorder',
      'Substance-related disorders: dependence (tolerance + withdrawal) and abuse'
    ],
    tips: [
      'Hallucination: perception without stimulus (hearing voices); Delusion: false fixed belief (persecution)',
      'Positive symptoms of schizophrenia = excess/distorted functions; Negative = reduction of normal functions',
      'Phobias: specific phobia (object), social phobia (scrutiny), agoraphobia (open/public places)',
      'Conduct disorder in childhood → can develop into antisocial personality disorder in adults'
    ],
    bestPractices: [
      'Use DSM criteria framework: describe key symptoms, duration, functional impairment',
      'Distinguish anxiety disorder from OCD: anxiety = fear of external threat; OCD = fear driven by intrusive thoughts',
      'Board question: "Distinguish between obsessions and compulsions with examples"'
    ]
  },
  {
    chapter: 'Therapeutic Approaches',
    formulae: [],
    logic: [
      'Psychotherapy: voluntary relationship between therapist and client to resolve psychological problems',
      'Therapeutic alliance: trust (client) + empathy (therapist) = foundation of effective therapy',
      'Psychoanalytic therapy (Freud): free association, dream analysis, interpretation — makes unconscious conscious',
      'Behaviour therapy: based on learning principles; techniques — systematic desensitisation (for phobias), token economy, aversion therapy',
      'Cognitive therapy (Beck, Ellis): identifies and challenges cognitive distortions (irrational thoughts); ABC model (Ellis): Activating event → Belief → Consequence',
      'CBT (Cognitive Behaviour Therapy): combines cognitive and behavioural techniques — most widely used',
      'Humanistic therapy (Rogers): client-centred therapy; unconditional positive regard, empathy, genuineness',
      'Existential therapy: focuses on meaning, freedom, responsibility',
      'Biomedical therapy: drugs (antidepressants, antipsychotics, anxiolytics), ECT (electroconvulsive therapy)',
      'Alternative therapies: yoga, meditation, mindfulness — effective for stress, anxiety, mild depression',
      'Rehabilitation: social skills training, vocational training — for chronic mental illness patients'
    ],
    tips: [
      'Systematic desensitisation: relaxation + gradual exposure hierarchy to feared stimulus (classical conditioning)',
      'Token economy: reward desired behaviour with tokens (operant conditioning)',
      'Cognitive distortions: overgeneralisation, all-or-nothing thinking, catastrophising, personalisation',
      'Psychotherapy ≠ advice-giving; requires professional training and structured therapeutic relationship'
    ],
    bestPractices: [
      'Link therapy type to underlying theoretical approach (e.g., behaviour therapy ← behaviourism)',
      'Board question: "Explain the techniques used in behaviour therapy" — name at least 3 with definitions',
      'Distinguish individual therapy, group therapy and family therapy by unit of treatment'
    ]
  },
  {
    chapter: 'Attitude and Social Cognition',
    formulae: [],
    logic: [
      'Attitude: evaluative thoughts + emotional component + behavioural tendency toward an attitude object',
      'Components of attitude (ABC): Affective (feeling), Behavioural (tendency to act), Cognitive (belief/thought)',
      'Attitude dimensions: valence (positive/negative), extremeness, simplicity/complexity, centrality',
      'Attitude formation: learning (classical + operant conditioning), family and school influences, reference groups, media',
      'Attitude change: Balance theory (Heider), Cognitive dissonance (Festinger — inconsistency between attitudes/behaviour creates discomfort → change)',
      'Two-step concept: attitude change involves source → opinion leader → audience',
      'Factors in persuasion: Source characteristics (credibility, attractiveness), Message characteristics (one-sided vs two-sided), Target characteristics',
      'Prejudice: negative attitude toward a group; Discrimination: behaviour based on prejudice',
      'Causes of prejudice: social learning, scapegoating, kernel of truth, self-fulfilling prophecy, ingroup bias',
      'Reducing prejudice: education, intergroup contact, emphasising individual identity, superordinate goals'
    ],
    tips: [
      'Prejudice = attitude (cognitive + affective); Discrimination = behaviour',
      'Stereotype = oversimplified generalisation about a group; basis of prejudice',
      'Festinger: cognitive dissonance → reduce inconsistency by changing attitude, behaviour or adding cognition',
      'Attribution: explain others\' behaviour by internal (dispositional) or external (situational) causes'
    ],
    bestPractices: [
      'Board question: "Define attitude. Discuss its components" — use ABC model with examples',
      'Distinguish prejudice and discrimination clearly — prejudice can exist without discrimination (LaPiere experiment)',
      'Strategies to reduce prejudice: at least 3 points with brief explanation'
    ]
  },
  {
    chapter: 'Social Influence and Group Processes',
    formulae: [],
    logic: [
      'Group: organised system of 2+ individuals with mutual interdependence, roles, norms, and common goals',
      'Group types: Primary (close, face-to-face: family) vs. Secondary (impersonal: professional); Formal vs. Informal; Ingroup vs. Outgroup',
      'Reasons for joining groups: security, status, self-esteem, affiliation, goal achievement, knowledge',
      'Group formation factors: proximity, similarity, common motives and goals',
      'Tuckman\'s stages of group formation: Forming → Storming → Norming → Performing → Adjourning',
      'Social facilitation: presence of others improves performance on well-learned tasks but impairs performance on novel/complex tasks',
      'Social loafing: reduced individual effort when working in a group (diffusion of responsibility)',
      'Groupthink: in highly cohesive groups, pressure for conformity overrides realistic appraisal of alternatives — leads to poor decisions',
      'Group polarisation: group discussion intensifies initial individual tendencies (risky shift or cautious shift)',
      'Conformity (Asch): individuals conform to group norms even when group is clearly wrong'
    ],
    tips: [
      'Reduce social loafing: individual accountability, smaller groups, meaningful tasks, monitoring performance',
      'Groupthink prevention: encourage dissent, bring in outside experts, use devil\'s advocate',
      'Ingroup bias: tend to favour members of own group; outgroup homogeneity: "they are all the same"',
      'Social influence types: conformity (peer pressure), compliance (direct request), obedience (authority)'
    ],
    bestPractices: [
      'Name Tuckman\'s 5 stages in order — board exams commonly ask for this',
      'Board question: "Distinguish between social facilitation and social loafing with examples"',
      'Explain groupthink with a real/hypothetical scenario and symptoms (illusion of invulnerability, self-censorship, etc.)'
    ]
  }
];

// ─── Economics Book 2: Introductory Macroeconomics ───────────────────────────
REVISION['XII Economics Macro'] = [
  {
    chapter: 'Introduction to Macroeconomics',
    formulae: [],
    logic: [
      'Macroeconomics: studies aggregate economic variables — total output, employment, aggregate price level, growth',
      'Distinguished from microeconomics: macro examines interlinkages across entire economy; micro examines individual sectors ceteris paribus',
      'Emerged as separate discipline in 1930s due to Keynes; motivated by the Great Depression',
      'Four sectors of an economy: Households (supply factors, demand goods), Firms (produce goods, demand factors), Government (provides public goods, taxes), External sector (exports/imports)',
      'Capitalist economy: means of production privately owned; workers are wage labourers; firms maximise profits',
      'Four factors of production: Land (rent), Labour (wages), Capital (interest), Entrepreneurship (profit)'
    ],
    tips: [
      'Keynesian macroeconomics focuses on short-run fluctuations in income and employment',
      'Great Depression (1930s): widespread unemployment, falling output — justified government intervention',
      'NCERT textbook deals mostly with a capitalist economy — may not fully capture developing economy dynamics'
    ],
    bestPractices: [
      'Distinguish micro vs. macro: micro = individual firm/consumer; macro = entire economy',
      'Board question: "What is macroeconomics? How does it differ from microeconomics?"'
    ]
  },
  {
    chapter: 'National Income Accounting',
    formulae: [
      'GDP (at MP) = C + I + G + (X − M)  (expenditure method)',
      'GDP (at FC) = GDP (at MP) − Net Indirect Taxes  (NIT = Indirect taxes − Subsidies)',
      'GNP = GDP + Net Factor Income from Abroad (NFIA)',
      'NNP = GNP − Depreciation  (= National Income at MP)',
      'National Income (NI) = NNP at FC = NNP (MP) − NIT',
      'Value Added = Value of Output − Intermediate Consumption',
      'GDP Deflator = (Nominal GDP / Real GDP) × 100',
      'CPI (Consumer Price Index): price change for a basket of goods consumed by households',
      'WPI (Wholesale Price Index): price change at wholesale level'
    ],
    logic: [
      'Three methods give same result: Product Method (sum of value added), Income Method (sum of factor incomes), Expenditure Method (sum of final expenditures)',
      'Double counting: avoided by using value added method or counting only final goods',
      'Final goods: used for final consumption or investment; Intermediate goods: used as input in further production',
      'Stock vs. Flow: GDP is a flow (measured per period); Wealth is a stock (at a point in time)',
      'Circular flow: households supply factors → firms pay factor incomes → households spend on goods → firms receive revenue → cycle repeats',
      'GDP vs. GNP: GDP = production within territory; GNP = production by residents (add NFIA)',
      'GDP as welfare indicator: flawed — ignores distribution, externalities (pollution), non-market activities, quality of life'
    ],
    tips: [
      'NFIA = Factor income received from abroad − Factor income paid to abroad',
      'Depreciation (Capital consumption allowance): wear and tear of fixed capital',
      'Gross = before depreciation; Net = after subtracting depreciation',
      'Market Price = Factor Cost + Net Indirect Taxes',
      'Personal Disposable Income (PDI) = PI − Personal Taxes; Personal Income (PI) = NI − Undistributed profits − Corporate tax + Transfer payments'
    ],
    bestPractices: [
      'Numericals: identify method (expenditure/income/product), apply correct formula step by step',
      'State whether "at MP" or "at FC" and "Gross" or "Net" in every answer',
      'Board question: "Explain why GDP may not be a good index of welfare of a country"'
    ]
  },
  {
    chapter: 'Money and Banking',
    formulae: [
      'Money Multiplier (Credit Multiplier) = 1 / CRR',
      'Total deposit creation = Initial deposit × Money Multiplier',
      'High Powered Money (H) = Currency + Banker deposits with RBI',
      'Money Supply (M1) = Currency with public + Demand deposits',
      'M3 = M1 + Time deposits with banks (broad money)'
    ],
    logic: [
      'Barter exchange limitations: requires double coincidence of wants; no common measure of value; no store of value',
      'Functions of money: Medium of exchange, Unit of account, Store of value, Standard of deferred payment',
      'Demand for money: Transaction motive (buy goods/services), Speculative motive (hold bonds vs. cash based on interest rate expectations)',
      'Liquidity trap: at very low interest rates, people prefer holding money to bonds — monetary policy ineffective',
      'Commercial banks: accept deposits (liabilities), give loans (assets); keep CRR + SLR as reserves',
      'Multiple credit creation: each deposit → bank lends (1-CRR) fraction → re-deposited → lends again → chain process',
      'RBI instruments: CRR (Cash Reserve Ratio), SLR (Statutory Liquidity Ratio), Repo Rate, Reverse Repo Rate, Open Market Operations (OMO), Bank Rate',
      'Sterilisation: RBI offsets money supply changes from foreign exchange interventions using OMO'
    ],
    tips: [
      'Repo Rate: rate at which RBI lends to commercial banks (raise → credit costly → money supply falls)',
      'Reverse Repo Rate: rate at which RBI borrows from banks; always below Repo Rate',
      'CRR ↑ → banks lend less → money multiplier ↓ → money supply ↓',
      'Open Market Operations: RBI sells securities → money supply ↓; buys securities → money supply ↑'
    ],
    bestPractices: [
      'Numerical: total credit creation = initial deposit / CRR (NOT × CRR)',
      'Distinguish M1 (narrow money) and M3 (broad money) with components',
      'Board question: "Explain the process of money creation by commercial banks with numerical example"'
    ]
  },
  {
    chapter: 'Determination of Income and Employment',
    formulae: [
      'AD = C + I  (two-sector); AD = C + I + G  (three-sector)',
      'Consumption function: C = c̄ + cY  (c̄ = autonomous consumption, c = MPC)',
      'MPC (b) = ΔC/ΔY  (Marginal Propensity to Consume)',
      'MPS = 1 − MPC  (Marginal Propensity to Save)',
      'Equilibrium: Y = AD → Y = c̄ + cY + Ī → Y* = (c̄ + Ī) / (1 − c)',
      'Investment Multiplier (k) = 1 / (1 − MPC) = 1 / MPS',
      'ΔY = k × ΔI  (change in income = multiplier × change in autonomous investment)'
    ],
    logic: [
      'Effective demand principle: in short run, output is determined solely by aggregate demand (AS is perfectly elastic)',
      'Ex ante vs. Ex post: ex ante = planned/desired; ex post = actual realised; equilibrium when ex ante AD = AS',
      'Unintended inventory changes: if AD > AS → inventories fall → firms produce more → output rises to equilibrium',
      'Multiplier process: ΔI → ΔY₁ → ΔC₁ → ΔY₂ → ΔC₂ → ... (each round adds c fraction of previous)',
      'Paradox of thrift: if all save more → AD falls → income falls → total savings may not increase',
      'Full employment equilibrium: AD = AS at full employment income (no involuntary unemployment)',
      'Deflationary gap: AD < full employment AS → actual output < potential → involuntary unemployment',
      'Inflationary gap: AD > full employment AS → excess demand → price rise'
    ],
    tips: [
      'Multiplier is always > 1 (since 0 < MPC < 1)',
      'Higher MPC → larger multiplier → greater impact of government spending',
      'Autonomous investment (Ī): not affected by income; Induced investment: increases with income',
      'Keynesian Cross: Y* at intersection of 45° line (Y=Y) and AD line'
    ],
    bestPractices: [
      'Numericals: always find Y* first, then use multiplier formula for changes',
      'Draw Keynesian cross diagram: label 45° line, AD line, equilibrium E, deflationary/inflationary gap',
      'Board question: "What is the investment multiplier? Explain with the help of a numerical example"'
    ]
  },
  {
    chapter: 'Government Budget and the Economy',
    formulae: [
      'Budget Deficit = Total Expenditure − Total Revenue',
      'Revenue Deficit = Revenue Expenditure − Revenue Receipts',
      'Fiscal Deficit = Total Expenditure − (Revenue Receipts + Capital Receipts excluding borrowings)',
      'Primary Deficit = Fiscal Deficit − Interest Payments',
      'Government Expenditure Multiplier = 1 / (1 − MPC)',
      'Tax Multiplier = −MPC / (1 − MPC)  (negative: tax ↑ → income ↓)'
    ],
    logic: [
      'Government functions: Allocation (public goods), Redistribution (reduce inequality via taxes/transfers), Stabilisation (reduce unemployment/inflation)',
      'Public goods: Non-rival (one person\'s use doesn\'t reduce availability) + Non-excludable (cannot exclude non-payers) → private market fails → government must provide',
      'Revenue budget: current receipts (taxes, fees) and current expenditure; Capital budget: borrowings, asset creation',
      'Revenue deficit: revenue expenditure > revenue receipts → borrowing for consumption → bad quality spending',
      'Fiscal deficit = government\'s total borrowing requirement; shows extent of government reliance on debt',
      'Primary deficit = fiscal deficit − interest payments; measures current fiscal stress excluding past debt burden',
      'Automatic stabilisers: tax revenues and transfer payments that automatically reduce fluctuations without discretionary action',
      'FRBMA (Fiscal Responsibility and Budget Management Act, 2003): binds government to reduce fiscal deficit'
    ],
    tips: [
      'Fiscal deficit = Primary deficit + Interest payments',
      'Revenue deficit growth as % of fiscal deficit → deterioration of expenditure quality',
      'Tax multiplier is smaller in absolute value than government expenditure multiplier: government spending has direct AD effect; tax works indirectly through consumption',
      'GST (Goods and Services Tax): comprehensive indirect tax replacing multiple taxes; increases GDP by ~2%'
    ],
    bestPractices: [
      'Numericals: calculate deficits step-by-step from given budget data',
      'Distinguish Revenue Deficit, Fiscal Deficit, Primary Deficit with formula',
      'Board question: "The fiscal deficit gives the borrowing requirement of the government" — Elucidate'
    ]
  },
  {
    chapter: 'Open Economy Macroeconomics',
    formulae: [
      'Y = C + I + G + NX  (NX = Exports − Imports)',
      'Balance of Payments (BoP) = Current Account + Capital Account + Official Reserve Transactions',
      'Open Economy Multiplier = 1 / (1 − c + m)  (m = marginal propensity to import)',
      'Closed economy multiplier = 1 / (1 − c); Open < Closed (m > 0)',
      'Exchange Rate: price of one currency in terms of another',
      'Purchasing Power Parity (PPP): exchange rate equalises price level across countries'
    ],
    logic: [
      'Balance of Payments: systematic record of all transactions between residents and rest of world',
      'Current Account: goods (visible trade), services (invisible), unilateral transfers; surplus = exports > imports',
      'Capital Account: FDI, portfolio investment, external borrowings, official reserve changes',
      'BoP always balances: current account deficit financed by capital account surplus or drawing on reserves',
      'Nominal exchange rate: price of foreign currency; Real exchange rate: relative price of foreign goods in domestic goods',
      'Depreciation (flexible rate): domestic currency loses value vs. foreign → exports cheaper → imports costlier → trade balance improves',
      'Devaluation (fixed rate): government deliberately reduces value of domestic currency',
      'Managed floating: RBI intervenes to manage exchange rate within a band (India\'s current system)',
      'Open economy multiplier smaller: some spending leaks to imports; higher m → smaller multiplier'
    ],
    tips: [
      'Trade surplus → demand for domestic currency rises → currency appreciates',
      'CAD (Current Account Deficit): India typically runs a CAD funded by capital inflows',
      'Official Reserve Transactions: changes in foreign exchange reserves — accommodating (fills BoP gap)',
      'BoP crisis: inability to finance CAD; requires IMF support, devaluation'
    ],
    bestPractices: [
      'Distinguish current account and capital account items clearly with examples',
      'Draw BoP structure: current (goods + services + transfers) + capital (FDI + portfolio + borrowings)',
      'Board question: "Differentiate between fixed and flexible exchange rate systems"'
    ]
  }
];

// ─── Political Science Book 1: Contemporary World Politics ───────────────────
REVISION['XII Political Science CWP'] = [
  {
    chapter: 'The End of Bipolarity',
    formulae: [],
    logic: [
      'Cold War: ideological and political rivalry between USA (capitalism) and USSR (socialism) — never direct military conflict',
      'Soviet system: state ownership of means of production, planned economy, one-party rule (Communist Party), no economic freedom for individuals',
      'Glasnost (openness) and Perestroika (restructuring): Gorbachev\'s reforms to modernise Soviet system — unintended consequences',
      'Fall of Berlin Wall: November 9, 1989 — symbol of end of Cold War and German reunification',
      'Disintegration of USSR: December 1991 — 15 new independent republics; Russia emerged as successor state',
      'CIS (Commonwealth of Independent States): formed by former Soviet republics (except Baltic states)',
      'Causes of USSR collapse: economic stagnation, political authoritarianism, nationalism of republics, failed reforms, arms race burden',
      'Shock Therapy: sudden transition to market economy in Russia/Eastern Europe — led to economic hardship, collapse of welfare state',
      'India-Russia relations: historical friendship, defence cooperation (arms supplier), energy partnership, space cooperation (cryogenic engine)'
    ],
    tips: [
      'Soviet Union (USSR) had 15 republics; major ones: Russia, Ukraine, Kazakhstan, Belarus, Georgia',
      'Warsaw Pact: Soviet military alliance (counterpart of NATO); dissolved 1991',
      'End of Cold War: US emerged as sole superpower (unipolar world)',
      'Baltic states (Estonia, Latvia, Lithuania): first to declare independence from USSR'
    ],
    bestPractices: [
      'Distinguish between collapse of Soviet system (economic/political failure) and shock therapy (post-collapse policy)',
      'Board question: "What were the consequences of the disintegration of the Soviet Union for the world?"',
      'India-Russia: name specific areas of cooperation (defence, space, energy)'
    ]
  },
  {
    chapter: 'Contemporary Centres of Power',
    formulae: [],
    logic: [
      'European Union (EU): integration from coal and steel (ECSC 1951) → EEC (1957 Treaty of Rome) → EC → EU (1992 Maastricht Treaty)',
      'EU features: single market, single currency (Euro), free movement of people, common foreign policy',
      'EU as power: world\'s largest trading bloc, second largest economy, significant diplomatic influence',
      'ASEAN (Association of South-East Asian Nations): founded 1967 — Indonesia, Malaysia, Philippines, Singapore, Thailand (original 5)',
      'ASEAN Way: informal, non-confrontational, consensus-based cooperation; respects sovereignty',
      'ASEAN Free Trade Area (AFTA) and ASEAN Regional Forum (ARF): economic and security cooperation',
      'China\'s rise: economic reforms since 1978 (Deng Xiaoping), open door policy, SEZs, WTO member 2001',
      'China\'s GDP growth: became world\'s 2nd largest economy; largest trading partner for many countries',
      'India-China relations: border conflict 1962 (Aksai Chin, Arunachal Pradesh), Five Principles of Peaceful Coexistence (Panchsheel), improving economic ties, China\'s strategic partnership with Pakistan as irritant'
    ],
    tips: [
      'EU motto: "United in Diversity"; headquarters: Brussels',
      'Euro: common currency; not all EU members use it (UK, Sweden, Denmark opted out)',
      'Brexit: UK voted to leave EU in 2016 referendum — exit completed 2020',
      'Miracle on the Han River: South Korea\'s rapid economic development (1960s-80s)'
    ],
    bestPractices: [
      'EU evolution: ECSC → EEC → EC → EU — know the year of each treaty',
      'Board question: "Explain the ASEAN Way. What are its significance?"',
      'Compare EU and ASEAN as regional organisations: integration depth, decision-making style'
    ]
  },
  {
    chapter: 'Contemporary South Asia',
    formulae: [],
    logic: [
      'South Asia: India, Pakistan, Bangladesh, Sri Lanka, Nepal, Bhutan, Maldives, Afghanistan',
      'SAARC (South Asian Association for Regional Cooperation): founded 1985; headquarters Kathmandu',
      'Major conflicts: India-Pakistan (Kashmir, 3 wars — 1947, 1965, 1971; Kargil 1999); Sri Lanka civil war (Sinhalese-Tamil); Nepal (monarchy vs. democracy vs. Maoists)',
      'Bangladesh: separated from Pakistan 1971 (with Indian support); military coups followed by democracy',
      'Democratisation challenges: Pakistan (military interventions), Myanmar (military dominance), Maldives (political instability)',
      'Nuclear dimension: India and Pakistan both nuclear states since 1998 (Pokhran II / Chagai tests) — raises regional security stakes',
      'India and South Asia: India is central due to size, geography, economic weight; seen as regional hegemon by smaller neighbors',
      'External powers: USA and China remain key players in South Asia; China-Pakistan strategic partnership'
    ],
    tips: [
      'SAFTA: South Asian Free Trade Area — aim to boost intra-regional trade (very low currently)',
      'Sri Lanka conflict: Liberation Tigers of Tamil Eelam (LTTE) — ended 2009 with military defeat of LTTE',
      'Nepal: became federal democratic republic 2008 after abolishing monarchy',
      'Bhutan: constitutional monarchy; close relationship with India'
    ],
    bestPractices: [
      'For each country: state type of government (democracy/monarchy/military) and key issue',
      'Board question: "What are the main sources of conflict and cooperation in South Asia?"',
      'India\'s dual role: conflict with Pakistan AND leadership of SAARC'
    ]
  },
  {
    chapter: 'International Organisations',
    formulae: [],
    logic: [
      'United Nations: founded 1945, 193 member states, HQ New York; primary goal: maintain international peace and security',
      'UN principal organs: General Assembly, Security Council, Secretariat, ICJ, ECOSOC, Trusteeship Council',
      'Security Council: 5 permanent members (P5: USA, UK, France, Russia, China) with veto power; 10 non-permanent (2-year terms)',
      'UN reform debate: need to expand Security Council to include India, Brazil, Germany, Japan (G4); reform veto; democratise structure',
      'India\'s case for UNSC seat: world\'s largest democracy, 5th largest economy, major contributor to UN peacekeeping',
      'World Bank: funds development projects in developing countries (IBRD + IDA)',
      'IMF: maintains global financial stability, provides emergency loans (with conditions)',
      'WTO: successor to GATT; governs international trade rules; settles trade disputes',
      'IAEA: ensures nuclear technology used peacefully; safeguards nuclear facilities'
    ],
    tips: [
      'UN Secretary-General: António Guterres (since 2017); appointed by UNGA on UNSC recommendation',
      'ICJ: settles disputes between states; only states (not individuals) can be parties',
      'UN Peacekeeping: India is one of largest contributors to UN peacekeeping forces',
      'UNHCR: protects refugees; Nobel Peace Prize 1954, 1981'
    ],
    bestPractices: [
      'Know all P5 members and what veto means (can block any substantive resolution)',
      'Board question: "What reforms are needed in the UN to make it more democratic and effective?"',
      'India\'s push for UNSC seat: economic size, democracy, peacekeeping contribution, South Asian representation'
    ]
  },
  {
    chapter: 'Security in the Contemporary World',
    formulae: [],
    logic: [
      'Traditional security: military threats to state — war, arms race, nuclear deterrence, alliances, balance of power',
      'Non-traditional security: threats beyond military — terrorism, human trafficking, climate change, pandemics, poverty, organised crime',
      'Balance of Power: states seek to prevent any one state from dominating — through alliances or military build-up',
      'Deterrence: discourage attack by ensuring unacceptable cost to attacker (nuclear deterrence)',
      'Arms Control: agreements limiting types, numbers or deployment of weapons (SALT, START, NPT, CTBT)',
      'Disarmament: giving up certain categories of weapons entirely',
      'CBMs (Confidence Building Measures): regular exchange of information between potentially rival states',
      'Human Security: security of individuals — freedom from want and freedom from fear',
      'Cooperative security: multilateral approach — all states cooperate to address common security threats'
    ],
    tips: [
      'NPT (Non-Proliferation Treaty): India has not signed — argues it is discriminatory (permits existing nuclear states, prohibits new ones)',
      'CTBT (Comprehensive Test Ban Treaty): India has not ratified',
      'Al-Qaeda, ISIS: non-state actors posing traditional-type security threats',
      'Global commons: high seas, atmosphere, outer space, Antarctica — shared security challenges'
    ],
    bestPractices: [
      'Clearly distinguish traditional vs. non-traditional security with 2 examples each',
      'Board question: "What is the difference between arms control and disarmament?"',
      'India\'s security concerns: Pakistan (terrorism, Kashmir), China (border, nuclear), internal (Naxalism, NE insurgency)'
    ]
  },
  {
    chapter: 'Environment and Natural Resources',
    formulae: [],
    logic: [
      'Global commons: areas beyond any state\'s jurisdiction — atmosphere, Antarctica, ocean floor, outer space',
      'Tragedy of the Commons: shared resources get over-exploited because no one has incentive to conserve them',
      'Rio Earth Summit 1992: 170 countries + NGOs; key outcome: Agenda 21 (sustainable development framework), CBD, UNFCCC',
      'Kyoto Protocol 1997: legally binding emission reduction targets for developed countries (Annex I); India and China exempted as developing nations',
      'North-South divide on environment: Developed nations want all countries to cut emissions; developing nations argue right to development and historical responsibility of developed world',
      'India\'s position: common but differentiated responsibilities; development right; criticises unjust burden on poor nations',
      'Biodiversity: threatened by deforestation, habitat destruction; Convention on Biological Diversity (CBD)',
      'Indigenous peoples\' rights: often displaced by development projects; international recognition through UN Declaration on Rights of Indigenous Peoples (2007)'
    ],
    tips: [
      'UNFCCC (UN Framework Convention on Climate Change): parent treaty for climate negotiations',
      'Paris Agreement 2015: all countries submit NDCs (Nationally Determined Contributions); limit warming to 1.5°C',
      'Agenda 21: global action plan for sustainable development — local, national, global levels',
      'Antarctica Treaty: international cooperation; no military use; India has research stations (Dakshin Gangotri, Maitri, Bharati)'
    ],
    bestPractices: [
      'Explain "common but differentiated responsibilities" with India\'s position',
      'Board question: "What were the outcomes of the Rio Earth Summit 1992?"',
      'Distinguish Kyoto Protocol and Paris Agreement: binding vs. voluntary commitments'
    ]
  }
];

// ─── Political Science Book 2: Politics in India Since Independence ───────────
REVISION['XII Political Science PISI'] = [
  {
    chapter: 'Challenges of Nation Building',
    formulae: [],
    logic: [
      'Three main challenges at Independence: National unity (diversity), Democratic institutions (newly adopted), Economic development (poverty)',
      'Partition: British India divided into India and Pakistan (August 1947); massive violence, migration (~10-15 million displaced)',
      'Integration of princely states: 565 princely states — Sardar Patel used diplomacy and force; Hyderabad (police action 1948), Junagadh, Kashmir (accession + conflict with Pakistan)',
      'Reorganisation of states: States Reorganisation Act 1956 — linguistic basis; created Andhra Pradesh (first linguistic state 1953)',
      'Nehru\'s vision: secular, democratic, socialist India; parliamentary democracy; non-alignment',
      'Constitutional framework: adopted Jan 26, 1950; B.R. Ambedkar (chairman, drafting committee); universal adult franchise',
      'New capital: Chandigarh (Le Corbusier) — Punjab\'s capital moved after Lahore went to Pakistan'
    ],
    tips: [
      'First general elections: 1951-52; Congress won majority; Nehru became first elected PM',
      'Kashmir accession: Maharaja Hari Singh signed Instrument of Accession Oct 1947 after Pakistani tribal invasion',
      'Sardar Patel: "Iron Man of India" — integrated princely states; also first Home Minister',
      'States Reorganisation Commission (1953): recommended linguistic basis for state formation'
    ],
    bestPractices: [
      'Three challenges framework: national unity + democracy + development — structure answer around these',
      'Board question: "What were the major challenges India faced immediately after independence?"',
      'Partition consequences: communal violence, refugee crisis, divided resources, border tensions'
    ]
  },
  {
    chapter: 'Era of One-Party Dominance',
    formulae: [],
    logic: [
      'Congress dominance 1952-1967: Congress won all three general elections with large majorities; dominated all state assemblies',
      'Why Congress dominated: nationalist movement legacy, organisational strength, Nehru\'s charisma, broad social coalition, no strong opposition',
      'Congress as "umbrella" party: accommodated diverse ideologies (socialists, conservatives, liberals) under one tent',
      'Socialist Party, Communist Party of India (CPI), Bharatiya Jan Sangh (BJS), Swatantra Party: main opposition parties',
      'Congress System (Rajni Kothari): Congress at centre, other parties forming pressure groups; one-party dominance with multi-party competition',
      'Social coalition: Congress support from multiple castes, communities, classes — prevented opposition consolidation',
      'Challenge from 1960s: Congress began to fracture; regional parties emerged; 1967 elections saw Congress losses in several states'
    ],
    tips: [
      'Defections (Aaya Ram Gaya Ram): floor-crossing by MLAs undermined state governments; led to Anti-Defection Law',
      'First non-Congress government: PSP-led Kerala government 1957 (E.M.S. Namboodiripad) — dismissed 1959',
      'Coalition governments at state level began in 1967 after Congress losses',
      '1952 and 1957 elections: Congress won ~75% of seats despite getting ~45% of votes (FPTP advantage)'
    ],
    bestPractices: [
      'Explain why Congress could dominate while getting less than majority votes (FPTP system)',
      'Board question: "What is meant by \'Congress System\'? Explain how it worked"',
      'Distinguish one-party dominance from one-party system: opposition existed but couldn\'t win'
    ]
  },
  {
    chapter: 'Politics of Planned Development',
    formulae: [],
    logic: [
      'Nehru\'s economic vision: planned development, public sector (commanding heights), mixed economy (private + public)',
      'Planning Commission: established 1950; Five Year Plans; Jawaharlal Nehru as chairman',
      'First Five Year Plan (1951-56): agriculture, irrigation, community development; modest goals',
      'Second Plan (1956-61): Mahalanobis model — heavy industries, public sector, import substitution (steel plants: Bhilai, Durgapur, Rourkela)',
      'Green Revolution (mid-1960s): high-yielding variety (HYV) seeds, fertilizers, irrigation — Punjab, Haryana, western UP; ended food crisis',
      'Tension between capitalists (favour private sector) and socialists (favour public sector, redistribution)',
      'License Raj: industrial licensing system — controlled private sector growth, led to inefficiency',
      'Kerala model vs. Bihar model: Kerala achieved high social indicators with moderate growth; contrasting approaches to development'
    ],
    tips: [
      'NITI Aayog replaced Planning Commission in 2015',
      'Import substitution: produce domestically what was earlier imported; protectionist policy',
      'Cooperative farming vs. land reform: debate between centralized planning and individual farmer rights',
      'Nehru\'s "temples of modern India": large public sector dams and steel plants'
    ],
    bestPractices: [
      'Mahalanobis model: heavy industry focus to build capital goods sector for long-run growth',
      'Board question: "What were the main features of the economic policy adopted by India after independence?"',
      'Green Revolution: benefits (food security) and limitations (regional inequality, environmental cost)'
    ]
  },
  {
    chapter: 'India\'s External Relations',
    formulae: [],
    logic: [
      'Non-Alignment: India\'s foreign policy framework — refuse to join US or Soviet military blocs; independent foreign policy',
      'NAM (Non-Aligned Movement): founded 1961, Nehru + Nasser (Egypt) + Tito (Yugoslavia) + Sukarno (Indonesia) + Nkrumah (Ghana)',
      'Panchsheel: Five Principles of Peaceful Coexistence — India-China 1954 (non-aggression, non-interference, peaceful coexistence, mutual benefit, equality)',
      'India-China War 1962: China captured Aksai Chin; exposed India\'s military unpreparedness; damaged Nehru\'s image',
      'India-Pakistan Wars: 1947-48 (Kashmir), 1965 (Lahore thrust), 1971 (Bangladesh liberation — India decisive winner)',
      'Tashkent Agreement 1966: Lal Bahadur Shastri (died), Kosygin mediated India-Pakistan post-1965 war',
      'Simla Agreement 1972: Indira Gandhi — India-Pakistan normalisation after 1971; converted ceasefire line to Line of Control (LoC) in Kashmir',
      'India\'s nuclear programme: Pokhran I (1974, Indira Gandhi — "Peaceful Nuclear Explosion"); Pokhran II 1998 (Vajpayee)'
    ],
    tips: [
      'Non-alignment ≠ neutrality: India had opinions and took positions (supported decolonisation)',
      'Hindi-Chini bhai-bhai: India-China friendship slogan before 1962 war',
      'Indira Doctrine: India would not allow external intervention in neighbourhood',
      'Bangladesh liberation: India supported Mukti Bahini; 90,000 Pakistani POWs — decisive military victory'
    ],
    bestPractices: [
      'Explain NAM\'s relevance: post-Cold War critics say it\'s irrelevant; defenders say it preserves strategic autonomy',
      'Board question: "Explain India\'s policy of Non-Alignment. Was it a success or failure?"',
      'India-China 1962: causes, outcome, lessons (defence preparedness, border management)'
    ]
  },
  {
    chapter: 'Challenges to and Restoration of the Congress System',
    formulae: [],
    logic: [
      '1967 elections: Congress suffered major losses — lost several states (UP, Bihar, MP, Rajasthan, West Bengal, Tamil Nadu); hung assemblies',
      'Defections: "Aaya Ram Gaya Ram" phenomenon — widespread floor-crossing; coalition instability',
      'Congress split 1969: Indira Gandhi vs. Syndicate (party bosses); Indira expelled — formed Congress (R) = Requisitionists',
      'Presidential election 1969: V.V. Giri (Indira\'s candidate) won over official Congress candidate — Indira won the power struggle',
      'Privy Purses abolition 1971: Indira Gandhi abolished constitutional allowances to former princes',
      'Bank Nationalisation 1969: Indira Gandhi nationalised 14 major banks — populist measure, Congress (R) gained popular support',
      '"Garibi Hatao" (Remove Poverty): Indira\'s 1971 election slogan against opposition\'s "Indira Hatao"',
      '1971 elections: Congress (R) won massive mandate (352/545 seats) — Congress restoration',
      'Green Revolution politics: Punjab/Haryana dominated; rich farmer lobby became politically powerful'
    ],
    tips: [
      'Syndicate: party bosses (K. Kamaraj, Nijalingappa) who controlled Congress organisation — lost to Indira',
      '1967-71: period of political instability, defections, President\'s Rule in many states',
      'Indira\'s populism: bank nationalisation, green revolution, pro-poor rhetoric — undermined party organisation',
      '4th General Elections 1967: Congress won but with reduced majority; 5th 1971: Congress (R) swept'
    ],
    bestPractices: [
      'Explain Congress split: ideological conflict (socialist vs. conservative) AND power struggle',
      'Board question: "What were the main political developments between 1967-1971?"',
      'Distinguish Congress (O) — Organisation (old guard) and Congress (R) — Requisitionists (Indira)'
    ]
  },
  {
    chapter: 'The Crisis of Democratic Order',
    formulae: [],
    logic: [
      'Background to Emergency: 1973-75 crises — JP Movement (Jayaprakash Narayan), Gujarat Navnirman Andolan, rising food prices, Allahabad HC verdict',
      'Allahabad High Court verdict June 1975: declared Indira Gandhi\'s 1971 election void for electoral malpractices',
      'Emergency (June 25, 1975 — March 1977): Article 352 invoked; civil liberties suspended, press censored, opposition leaders arrested, right to move courts suspended',
      'MISA (Maintenance of Internal Security Act): used to detain opposition leaders without trial',
      '20-Point Programme: economic reforms during Emergency (land reforms, bonded labour abolition, slum clearance)',
      'JP Movement: Jayaprakash Narayan called for "Total Revolution" — social, political, economic; Bihar and Gujarat students',
      'Why Emergency ended: Indira Gandhi called elections in 1977 believing she would win; miscalculation',
      '1977 elections: Janata Party swept to power — first non-Congress government at centre; Morarji Desai became PM',
      'Shah Commission 1977: investigated Emergency excesses — documented abuses'
    ],
    tips: [
      'Article 352: National Emergency — threat to security of India; also used 1962, 1971',
      'Sanjay Gandhi: Indira\'s son; unofficial power centre during Emergency; forced sterilisation programme',
      'Janata Party: coalition of opposition parties (BJS + socialists + Congress (O) + others)',
      'Janata government collapsed 1979 due to internal conflicts; Indira returned to power in 1980'
    ],
    bestPractices: [
      'Emergency: causes (political), proclamation, measures taken, impact on democracy, end',
      'Board question: "What were the causes and consequences of the Emergency declared in 1975?"',
      'Debate: did Emergency reveal weakness of democracy or its resilience (rejected in 1977 elections)?'
    ]
  },
  {
    chapter: 'Rise of Popular Movements',
    formulae: [],
    logic: [
      'Post-Emergency: changed political landscape — weakened Congress organisation; rise of regional parties; coalition era began',
      'Chipko Movement (1970s): Uttarakhand women hugged trees to prevent felling; led by Sunderlal Bahuguna; environmental movement',
      'Dalit Panthers (1972, Maharashtra): inspired by Black Panther Party; fought caste discrimination; militant Dalit assertion',
      'Farmers\' movements: KRRS (Karnataka), BKU (Bharat Kisan Union, UP) — demands: remunerative prices, waiver of loans, lower input costs',
      'Anti-arrack movement (1992, Andhra Pradesh): women in Nellore district campaigned against liquor — linked to domestic violence and poverty',
      'Fishworkers\' movement: opposed commercial trawlers threatening artisanal fishermen\'s livelihoods',
      'New social movements vs. old: old (class-based, labour) vs. new (identity-based, environmental, gender, tribal, consumer)',
      'Narmada Bachao Andolan (NBA): Medha Patkar; opposed Sardar Sarovar Dam — questioned large dam projects, displacement of tribals'
    ],
    tips: [
      'Rise of OBC politics: Mandal Commission 1980 (OBC reservations); implemented 1990 by V.P. Singh — triggered massive protests',
      'Mandal-Kamandal politics: OBC reservation (Mandal) + Ayodhya/Hindutva (Kamandal) — shaped 1990s politics',
      'RTI (Right to Information): emerged from grassroots movements (MKSS, Rajasthan); enacted 2005',
      'Women\'s movement: demanded reservation in Parliament and assemblies; 33% reservation bill (73rd/74th Amendment for local bodies)'
    ],
    bestPractices: [
      'New social movements: key features — non-party, issue-based, grassroots, identity-based',
      'Board question: "What is the significance of popular movements in a democracy?"',
      'Chipko, Narmada, anti-arrack: explain movement, cause, method, outcome'
    ]
  },
  {
    chapter: 'Recent Developments in Indian Politics',
    formulae: [],
    logic: [
      'End of Congress dominance: 1989 onwards — coalition era; no single party wins majority for 25 years',
      'Mandal politics (1990): V.P. Singh implemented Mandal Commission recommendations; 27% OBC reservations → massive anti-reservation protests → BJP-Hindutva mobilisation',
      'Ayodhya movement: BJP, VHP, RSS campaigned for Ram temple at disputed Babri Masjid site; Babri Masjid demolition Dec 6, 1992 → communal riots',
      'Rise of BJP: Advani\'s Rath Yatra (1990); 1984 (2 seats) → 1989 (85) → 1996 (161) → 1998 (182) — became single largest party; NDA coalition',
      'Coalition era: United Front governments (1996-98); NDA under Vajpayee (1999-2004); UPA under Manmohan Singh (2004-14); NDA under Modi (2014-present)',
      'Liberalisation: 1991 — economic crisis → IMF bailout → LPG reforms (Liberalisation, Privatisation, Globalisation) under Narasimha Rao + Manmohan Singh',
      'Regional parties: grew in importance — BSP, SP, TMC, AIADMK, BJD — coalition partners; federalism strengthened',
      'Rise of identity politics: caste, religion, region — central to electoral mobilisation'
    ],
    tips: [
      'India Shining (2004): BJP campaign; lost to Congress-led UPA — showed disconnect between growth and mass welfare',
      'RTI Act 2005: transparency; NREGA 2005: employment guarantee — UPA\'s flagship welfare schemes',
      'Anna Hazare movement (2011): anti-corruption; led to Lokpal discussions; indirect parent of AAP (Arvind Kejriwal)',
      '2014 election: BJP won absolute majority on its own (282/543) — ended coalition era temporarily'
    ],
    bestPractices: [
      'Coalition era features: unstable governments, regional parties as kingmakers, issue-based coordination',
      'Board question: "Describe the main features of the political developments in India since 1989"',
      'Mandal-Kamandal: understand how social justice politics and Hindutva politics emerged simultaneously'
    ]
  }
];
