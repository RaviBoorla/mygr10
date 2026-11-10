// ─── Grade XI CBSE Mathematics revision notes (NCERT textbook) ──────────────
// screen-notes.js reads REVISION['XI Mathematics'] when state.grade==='XI' && state.board==='CBSE'.

REVISION['XI Mathematics'] = [
  {
    chapter: 'Sets',
    formulae: [
      'n(A ∪ B) = n(A) + n(B) − n(A ∩ B)',
      'n(A ∪ B ∪ C) = n(A)+n(B)+n(C) − n(A∩B) − n(B∩C) − n(A∩C) + n(A∩B∩C)',
      'Number of subsets of a set with n elements = 2ⁿ',
      'A − B = A ∩ B′',
      '(A ∪ B)′ = A′ ∩ B′  and  (A ∩ B)′ = A′ ∪ B′  (De Morgan\'s laws)'
    ],
    logic: [
      'φ (empty set) is a subset of every set; every set is a subset of itself',
      'A ⊂ B and B ⊂ A together mean A = B',
      'Equal sets have exactly the same elements; repetition doesn\'t change a set',
      'Intervals: (a,b) open both ends, [a,b] closed both ends, [a,b)/(a,b] half-open',
      'Universal set U must contain every set under discussion as a subset'
    ],
    tips: [
      '{3,4} ∈ A means {3,4} is literally ONE element of A — different from {3,4} ⊂ A',
      'Disjoint sets have A ∩ B = φ',
      'Venn diagrams: rectangle = universal set, circles = subsets'
    ],
    bestPractices: [
      'When proving two sets equal, show A ⊂ B AND B ⊂ A',
      'Always double-check: does the element belong to the SET or is it a SUBSET relation?'
    ]
  },
  {
    chapter: 'Relations and Functions',
    formulae: [
      'n(A × B) = n(A) × n(B)',
      'Number of relations from A to B = 2^(n(A)×n(B))',
      'Domain = set of first elements, Range = set of second elements, Codomain = the target set B (Range ⊆ Codomain)'
    ],
    logic: [
      'A relation is ANY subset of A × B; a function is a relation where every input has exactly ONE output',
      'Vertical line test: a graph represents a function if no vertical line cuts it more than once',
      'Even function: f(−x) = f(x) (symmetric about y-axis); odd function: f(−x) = −f(x) (symmetric about origin)',
      'For f(x)=√(expression), domain requires expression ≥ 0; for f(x)=1/(expression), domain excludes expression = 0'
    ],
    tips: [
      'A × B ≠ B × A in general (order of coordinates matters)',
      'Algebra of functions: (f+g)(x)=f(x)+g(x), (fg)(x)=f(x)g(x), (f/g)(x)=f(x)/g(x) (g(x)≠0)'
    ],
    bestPractices: [
      'Always state domain restrictions explicitly when finding domain of a function',
      'Check a relation against BOTH conditions (every element of A used, exactly once) before calling it a function'
    ]
  },
  {
    chapter: 'Trigonometric Functions',
    formulae: [
      'Radian ↔ Degree: degree = radian × 180/π',
      'sin(x±y) = sinx cosy ± cosx siny',
      'cos(x±y) = cosx cosy ∓ sinx siny',
      'sin2x = 2sinx cosx; cos2x = cos²x−sin²x = 1−2sin²x = 2cos²x−1',
      'sin²x + cos²x = 1; 1+tan²x = sec²x; 1+cot²x = cosec²x',
      'General solutions: sinθ=0 ⟹ θ=nπ; cosθ=0 ⟹ θ=(2n+1)π/2; tanθ=0 ⟹ θ=nπ',
      'sinx=siny ⟹ x=nπ+(−1)ⁿy; cosx=cosy ⟹ x=2nπ±y'
    ],
    logic: [
      'sin, cosec, tan, cot are odd (negative of f(x) at −x); cos, sec are even',
      'ASTC rule: All +ve in Q1, Sin +ve in Q2, Tan +ve in Q3, Cos +ve in Q4',
      'Period of sin x, cos x is 2π; period of tan x, cot x is π'
    ],
    tips: [
      'Memorise the standard angle table: 0°,30°,45°,60°,90° for sin/cos/tan',
      'Sum-to-product and product-to-sum identities are key for solving trig equations with multiple angles'
    ],
    bestPractices: [
      'Always express the general solution with "n ∈ Z" explicitly',
      'Check the quadrant before assigning the sign of a trig ratio'
    ]
  },
  {
    chapter: 'Complex Numbers and Quadratic Equations',
    formulae: [
      'i = √−1; i² = −1; i³ = −i; i⁴ = 1 (cycle repeats every 4 powers)',
      'z = a+ib; conjugate z̄ = a−ib; |z| = √(a²+b²)',
      'Multiplicative inverse of z: z⁻¹ = z̄/|z|²',
      'Quadratic formula: x = [−b ± √(b²−4ac)] / 2a',
      'Discriminant D = b²−4ac: D>0 real distinct roots, D=0 real equal roots, D<0 complex conjugate roots',
      'Sum of roots = −b/a; Product of roots = c/a'
    ],
    logic: [
      'For real-coefficient quadratics, complex roots always occur in conjugate pairs',
      'z+z̄ = 2Re(z) (real); z−z̄ = 2i·Im(z) (purely imaginary); z·z̄ = |z|²',
      'Argand plane: x-axis = real part, y-axis = imaginary part'
    ],
    tips: [
      'To divide complex numbers, multiply numerator and denominator by the conjugate of the denominator',
      'i raised to any power: divide the exponent by 4, use the remainder (0→1, 1→i, 2→−1, 3→−i)'
    ],
    bestPractices: [
      'Always rationalize (remove i from the denominator) in a final complex-number answer',
      'Check the discriminant sign first — it tells you what kind of roots to expect before solving'
    ]
  },
  {
    chapter: 'Linear Inequalities',
    formulae: [
      'Adding/subtracting the same number from both sides preserves the inequality',
      'Multiplying/dividing both sides by a POSITIVE number preserves the inequality',
      'Multiplying/dividing both sides by a NEGATIVE number REVERSES the inequality'
    ],
    logic: [
      'Strict inequalities (<, >) use an open circle on the number line; non-strict (≤, ≥) use a closed circle',
      'For two-variable inequalities, test a point (often the origin) to decide which side of the boundary line to shade',
      'The solution region of a system of inequalities is the overlap (intersection) of all individual regions'
    ],
    tips: [
      'Word problems: translate "at least" as ≥, "at most" as ≤, "more than"/"less than" as strict >, <',
      'When clearing fractions in an inequality, multiply by the LCM (a positive number) to avoid flipping the sign'
    ],
    bestPractices: [
      'Always double-check whether you needed to reverse the inequality sign after multiplying/dividing by a negative',
      'Verify your answer by substituting a value from your solution set back into the original inequality'
    ]
  },
  {
    chapter: 'Permutations and Combinations',
    formulae: [
      'Fundamental principle of counting: if one event has m outcomes and another independent event has n outcomes, together they have m×n outcomes',
      'nPr = n!/(n−r)!  (arrangements, order matters)',
      'nCr = n!/(r!(n−r)!)  (selections, order doesn\'t matter)',
      'nCr = nC(n−r); nC0 = nCn = 1; nPn = n!',
      'Permutations with repetition (n items, groups of p, q, r identical items): n!/(p!q!r!)',
      'Circular permutations of n distinct objects: (n−1)!'
    ],
    logic: [
      'Use permutation when ORDER matters (arrangements, rankings, passwords); use combination when order does NOT matter (committees, selections)',
      '"At least one" problems: often easier via total − none-of-the-restricted-case',
      'nCr relates to nPr by nPr = nCr × r!  (choose, then arrange)'
    ],
    tips: [
      'Watch for repeated letters in a word — divide by factorial of each repeat count',
      '"AND" in counting usually means multiply; "OR" (mutually exclusive cases) usually means add'
    ],
    bestPractices: [
      'Always decide permutation vs combination FIRST before computing',
      'For multi-stage selections (e.g. boys AND girls), compute each stage\'s count separately then multiply'
    ]
  },
  {
    chapter: 'Binomial Theorem',
    formulae: [
      '(a+b)ⁿ = Σ (r=0 to n) nCr aⁿ⁻ʳbʳ',
      'General term: T(r+1) = nCr aⁿ⁻ʳbʳ',
      'Middle term: if n even, single middle term is the ((n/2)+1)th term; if n odd, two middle terms: ((n+1)/2)th and ((n+3)/2)th',
      'Sum of binomial coefficients: nC0+nC1+...+nCn = 2ⁿ',
      'Number of terms in expansion of (a+b)ⁿ = n+1'
    ],
    logic: [
      'The exponents of a and b in each term always add up to n',
      'Setting a=1, b=x gives the simpler expansion (1+x)ⁿ = Σ nCr xʳ',
      'Alternating-sign expansions come from (a−b)ⁿ: signs alternate +,−,+,−,...'
    ],
    tips: [
      'To find the coefficient of a specific power of x, match exponents in the general term formula and solve for r',
      'Pascal\'s triangle gives the binomial coefficients directly for small n'
    ],
    bestPractices: [
      'Always double check T(r+1), not T(r), is the general term formula you need for "find the Kth term" questions',
      'Verify computed coefficients against Pascal\'s triangle for small n as a sanity check'
    ]
  },
  {
    chapter: 'Sequences and Series',
    formulae: [
      'AP nth term: aₙ = a + (n−1)d',
      'AP sum: Sₙ = n/2 [2a + (n−1)d] = n/2 (a + l), l = last term',
      'GP nth term: aₙ = a·r^(n−1)',
      'GP sum (r≠1): Sₙ = a(rⁿ−1)/(r−1); GP sum to infinity (|r|<1): S∞ = a/(1−r)',
      'AM of a,b = (a+b)/2; GM of a,b = √(ab); AM ≥ GM always, equality only when a=b',
      'Σn = n(n+1)/2; Σn² = n(n+1)(2n+1)/6; Σn³ = [n(n+1)/2]²'
    ],
    logic: [
      'AP: constant DIFFERENCE between consecutive terms; GP: constant RATIO between consecutive terms',
      'Inserting k arithmetic/geometric means between two numbers creates a (k+2)-term AP/GP',
      'A GP\'s infinite sum only exists/converges when |r| < 1'
    ],
    tips: [
      'If a series mixes a polynomial-in-n term, split it using the standard Σn, Σn², Σn³ formulas',
      'Three numbers in GP: write them as a/r, a, ar for easier algebra'
    ],
    bestPractices: [
      'Identify AP vs GP first by checking differences vs ratios of given terms',
      'For sum-to-infinity problems, always verify |r|<1 before applying the formula'
    ]
  },
  {
    chapter: 'Straight Lines',
    formulae: [
      'Slope through two points: m = (y₂−y₁)/(x₂−x₁)',
      'Point-slope form: y − y₁ = m(x − x₁)',
      'Slope-intercept form: y = mx + c',
      'Two-point form: (y−y₁)/(x−x₁) = (y₂−y₁)/(x₂−x₁)',
      'Parallel lines: m₁ = m₂; Perpendicular lines: m₁·m₂ = −1',
      'Distance of point (x₁,y₁) from line Ax+By+C=0: |Ax₁+By₁+C| / √(A²+B²)',
      'Distance between parallel lines Ax+By+C₁=0 and Ax+By+C₂=0: |C₁−C₂| / √(A²+B²)'
    ],
    logic: [
      'A horizontal line has slope 0; a vertical line has undefined slope',
      'The angle a line makes with the positive x-axis: slope m = tanθ',
      'General form Ax+By+C=0 always represents a straight line (first-degree equation)'
    ],
    tips: [
      'Convert between forms as needed — slope-intercept is easiest to read off slope and y-intercept directly',
      'For perpendicular-line problems, find the given line\'s slope first, then negative-reciprocal it'
    ],
    bestPractices: [
      'Always verify which two points/conditions you\'re given before picking a formula/form',
      'Double-check sign errors when substituting into the point-to-line distance formula'
    ]
  },
  {
    chapter: 'Conic Sections',
    formulae: [
      'Circle, centre (h,k), radius r: (x−h)² + (y−k)² = r²',
      'Parabola y²=4ax: focus (a,0), directrix x=−a, latus rectum length 4a',
      'Ellipse x²/a²+y²/b²=1 (a>b): foci (±c,0) where c²=a²−b²; eccentricity e=c/a=√(1−b²/a²)',
      'Hyperbola x²/a²−y²/b²=1: foci (±c,0) where c²=a²+b²; eccentricity e=c/a (always >1)',
      'Eccentricity classification: e=0 circle, 0<e<1 ellipse, e=1 parabola, e>1 hyperbola'
    ],
    logic: [
      'All conics arise from slicing a double cone at different angles — hence the family name',
      'A circle is a special ellipse where a=b (both foci coincide at the centre)',
      'Latus rectum = the chord through the focus, perpendicular to the major/transverse axis'
    ],
    tips: [
      'Always reduce a given conic equation to STANDARD form first (divide so RHS=1) before reading off a, b, c',
      'Check which axis is major by comparing which denominator is larger (ellipse) or by the sign pattern (hyperbola)'
    ],
    bestPractices: [
      'Identify the conic type FIRST from its equation shape before applying any formula',
      'Always compute c from a and b using the correct relation (ellipse: c²=a²−b²; hyperbola: c²=a²+b²) — these are opposite signs, easy to mix up'
    ]
  },
  {
    chapter: 'Introduction to Three Dimensional Geometry',
    formulae: [
      'Distance between (x₁,y₁,z₁) and (x₂,y₂,z₂): √[(x₂−x₁)²+(y₂−y₁)²+(z₂−z₁)²]',
      'Section formula (internal division, ratio m:n): ( (mx₂+nx₁)/(m+n), (my₂+ny₁)/(m+n), (mz₂+nz₁)/(m+n) )',
      'Midpoint of (x₁,y₁,z₁) and (x₂,y₂,z₂): ((x₁+x₂)/2, (y₁+y₂)/2, (z₁+z₂)/2)',
      'Centroid of a triangle with vertices (x₁,y₁,z₁),(x₂,y₂,z₂),(x₃,y₃,z₃): average of each coordinate'
    ],
    logic: [
      'Three mutually perpendicular coordinate planes (xy, yz, zx) divide space into 8 octants',
      'A point on an axis has the other two coordinates equal to zero (e.g. on the x-axis: (x,0,0))',
      'Three points are collinear if the sum of two of the three pairwise distances equals the third (longest) distance'
    ],
    tips: [
      'Always double-check signs when subtracting coordinates (x₂−x₁, not x₁−x₂) — order matters for section formula but not for plain distance',
      'A point on a coordinate plane (not axis) has exactly ONE coordinate equal to zero (e.g. on the xy-plane: z=0)'
    ],
    bestPractices: [
      'Sketch or at least visualize the octant/plane before solving — many sign errors come from skipping this',
      'For collinearity, always verify using the distance-sum check, not just by "eyeballing" coordinates'
    ]
  },
  {
    chapter: 'Limits and Derivatives',
    formulae: [
      'lim(x→a) [f(x)±g(x)] = lim f(x) ± lim g(x); lim[f(x)·g(x)] = lim f(x) · lim g(x)',
      'lim(x→0) sinx/x = 1;  lim(x→0) (1−cosx)/x = 0',
      'lim(x→0) [(1+x)ⁿ−1]/x = n;  lim(x→a) (xⁿ−aⁿ)/(x−a) = n·aⁿ⁻¹',
      'Power rule: d/dx(xⁿ) = nxⁿ⁻¹;  derivative of a constant = 0',
      'd/dx(sinx)=cosx;  d/dx(cosx)=−sinx;  d/dx(tanx)=sec²x',
      'Product rule: d/dx[f·g] = f·g′ + f′·g;  Quotient rule: d/dx[f/g] = (f′g − fg′)/g²'
    ],
    logic: [
      'A limit exists at a point only if the left-hand limit equals the right-hand limit',
      'A 0/0 form on direct substitution means algebraic simplification (factor/rationalize) is needed before taking the limit',
      'The derivative at a point = the slope of the tangent line to the curve at that point'
    ],
    tips: [
      'Always try direct substitution first; only factor/rationalize if you get an indeterminate 0/0 form',
      'For trigonometric limits, try to massage the expression into the standard sinx/x form'
    ],
    bestPractices: [
      'Use the first-principles definition f′(x)=lim(h→0)[f(x+h)−f(x)]/h when explicitly asked to derive "from first principles"',
      'Simplify algebraically as far as possible before substituting the limit value, to avoid 0/0 or ∞/∞ traps'
    ]
  },
  {
    chapter: 'Statistics',
    formulae: [
      'Mean x̄ = Σxᵢ/n (ungrouped) or Σfᵢxᵢ/Σfᵢ (grouped)',
      'Mean deviation about the mean = Σ|xᵢ−x̄| / n',
      'Variance σ² = Σ(xᵢ−x̄)² / n;  Standard deviation σ = √variance',
      'Shortcut variance formula: σ² = (Σxᵢ²/n) − x̄²',
      'Coefficient of variation CV = (σ/x̄) × 100'
    ],
    logic: [
      'Mean deviation and variance both measure spread/dispersion, but variance squares deviations (penalizing large deviations more) while mean deviation uses absolute values',
      'Adding a constant to every value shifts the mean but leaves variance/SD unchanged',
      'Multiplying every value by a constant k multiplies the SD by |k| and the variance by k²',
      'A higher CV means relatively MORE variability (useful to compare two differently-scaled data sets)'
    ],
    tips: [
      'For grouped data, use the midpoint of each class interval as xᵢ',
      'The shortcut formula σ²=(Σxᵢ²/n)−x̄² is usually faster than computing every (xᵢ−x̄)² by hand'
    ],
    bestPractices: [
      'Always compute the mean first — every other statistic (MD, variance, SD) depends on it',
      'When comparing variability between two data sets with different units/scales, use CV, not raw SD'
    ]
  },
  {
    chapter: 'Probability',
    formulae: [
      'P(E) = n(E)/n(S), for equally likely outcomes in sample space S',
      'P(not E) = 1 − P(E)',
      'P(A ∪ B) = P(A) + P(B) − P(A ∩ B)  (general addition rule)',
      'For mutually exclusive A, B: P(A ∪ B) = P(A) + P(B)  (since P(A∩B)=0)',
      '0 ≤ P(E) ≤ 1 always;  P(impossible event) = 0;  P(sure event) = 1'
    ],
    logic: [
      'Mutually exclusive events cannot occur together (A∩B=φ); exhaustive events cover the entire sample space',
      'For "at least one" problems, it\'s often easiest to compute 1 − P(none)',
      'When selecting without replacement, use combinations (nCr) to count favourable and total outcomes'
    ],
    tips: [
      'Standard deck of 52 cards: 4 suits × 13 ranks, 4 kings, 4 queens, 26 red, 26 black',
      'Two dice: 36 equally likely outcomes total; sum-of-7 has the most ways (6) of any sum'
    ],
    bestPractices: [
      'Always clearly define the sample space S before computing any probability',
      'Check whether events are mutually exclusive BEFORE applying the simpler addition rule (without the −P(A∩B) term)'
    ]
  }
];
