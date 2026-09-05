// ─── Revision content (board-agnostic — all boards share one set) ─────────────
const REVISION = {
  Mathematics: [
      {
        chapter: 'Foundations — Arithmetic',
        formulae: [
          'BODMAS / PEMDAS order: Brackets → Orders (powers/roots) → Division → Multiplication → Addition → Subtraction',
          'Divisibility by 2: last digit even; by 3: digit-sum divisible by 3; by 4: last two digits divisible by 4; by 5: ends in 0 or 5; by 9: digit-sum divisible by 9; by 11: alternating digit-sum divisible by 11',
          'LCM × HCF = product of the two numbers (for any two positive integers)',
          'Percentage: part/whole × 100; Profit% = Profit/CP × 100; Loss% = Loss/CP × 100',
          'Simple Interest: SI = PRT/100; Amount = P + SI',
          'Compound Interest: A = P(1 + r/n)^(nt); CI = A − P',
          'Ratio a:b in simplest form: divide both by HCF(a,b)',
          'Proportion: a:b = c:d ↔ ad = bc (product of means = product of extremes)',
          'Speed = Distance/Time; Average speed = Total distance / Total time',
          'Work: if A takes n days, rate = 1/n per day; combined rate = sum of individual rates'
        ],
        logic: [
          'BODMAS strictly left-to-right within same precedence level',
          'Unitary method: find value of 1 unit first, then scale',
          'For percentages: "X% more than Y" means Y + X%·Y = Y(1 + X/100)',
          'Compound interest grows faster than simple interest for the same rate and time',
          'In ratio problems: find the total parts first, then multiply by the given total value',
          'Time–distance–speed: draw a table or number line to avoid sign errors',
          'Work problems: always add rates (jobs per day), not times'
        ],
        tips: [
          'Learn squares 1–25 and cubes 1–15 by heart — saves time on every paper',
          'For CI problems without calculator: use (1 + r/100)² = 1 + 2r/100 + (r/100)² for 2 years',
          'Percentage shortcut: 10% = move decimal one place left; 5% = half of 10%',
          'Ratio "3:5" → total 8 parts — always think in parts first'
        ],
        bestPractices: [
          'Show every step — partial credit is given for method in board exams',
          'Convert mixed numbers to improper fractions before operating',
          'Check the answer by substituting back into the original problem',
          'Label units throughout: "₹", "km/h", "days" — losing units loses marks'
        ]
      },
      {
        chapter: 'Foundations — Number System',
        formulae: [
          'Natural numbers (ℕ): 1, 2, 3, …   Whole numbers (W): 0, 1, 2, …   Integers (ℤ): …, −2, −1, 0, 1, 2, …',
          'Rational numbers (ℚ): p/q where p, q ∈ ℤ and q ≠ 0',
          'Irrational numbers: non-terminating non-repeating decimals (√2, π, e)',
          'Real numbers (ℝ) = ℚ ∪ Irrationals; every real number is on the number line',
          'Decimal expansion: terminating ↔ q = 2ⁿ5ᵐ in lowest terms; non-terminating repeating ↔ rational; non-terminating non-repeating ↔ irrational',
          'Absolute value: |x| = x if x ≥ 0; |x| = −x if x < 0',
          'Scientific notation: a × 10ⁿ where 1 ≤ a < 10',
          'Prime factorisation (Fundamental Theorem of Arithmetic): every integer > 1 is a unique product of primes'
        ],
        logic: [
          'ℕ ⊂ W ⊂ ℤ ⊂ ℚ ⊂ ℝ — each set is a superset of the previous',
          'Between any two rational numbers there is another rational (density property)',
          '√2 is irrational: proved by contradiction (if √2 = p/q in lowest terms, then 2 | p and 2 | q — contradiction)',
          'Sum/product of rational and irrational is irrational',
          'Sum of two irrationals can be rational (e.g. √2 + (−√2) = 0)',
          'Consecutive integers: n and n+1; their product n(n+1) is always even',
          'Every even number = 2k; every odd = 2k+1 for some integer k'
        ],
        tips: [
          'To convert a recurring decimal to a fraction: let x = 0.a̅b̅, multiply by 100 (for 2-repeating digits), subtract original, solve',
          'Zero is neither positive nor negative; it is a whole number and an integer but NOT a natural number',
          'π ≈ 22/7 is an approximation — 22/7 is rational, π is not',
          'Negative numbers on the number line: −3 < −2 < −1 < 0 (more negative = further left = smaller)'
        ],
        bestPractices: [
          'Always classify a number (natural / whole / integer / rational / irrational) before solving classification MCQs',
          'Write set membership clearly: 0 ∈ W but 0 ∉ ℕ',
          'When finding HCF/LCM use prime factorisation for numbers > 100 to avoid errors',
          'Double-check: is your irrational proof by contradiction fully circular-free?'
        ]
      },
      {
        chapter: 'Foundations — Mathematical Operations',
        formulae: [
          'Commutative law: a + b = b + a;  a × b = b × a  (NOT for − or ÷)',
          'Associative law: (a + b) + c = a + (b + c);  (a × b) × c = a × (b × c)',
          'Distributive law: a(b + c) = ab + ac;  a(b − c) = ab − ac',
          'Identity elements: 0 for addition (a + 0 = a);  1 for multiplication (a × 1 = a)',
          'Inverse elements: −a is additive inverse of a;  1/a is multiplicative inverse (a ≠ 0)',
          'Closure: ℤ is closed under +, −, ×; NOT under ÷ (7÷2 ∉ ℤ)',
          'Exponent rules: aᵐaⁿ = aᵐ⁺ⁿ; aᵐ/aⁿ = aᵐ⁻ⁿ; (aᵐ)ⁿ = aᵐⁿ; a⁰ = 1; a⁻ⁿ = 1/aⁿ',
          'Surds: √a × √b = √(ab);  √a / √b = √(a/b);  (√a + √b)(√a − √b) = a − b',
          'Rationalising denominator: multiply top and bottom by conjugate'
        ],
        logic: [
          'Division by zero is undefined — no real number satisfies a/0',
          'Subtraction and division are NOT commutative: 5 − 3 ≠ 3 − 5',
          'Order of operations failure is the most common arithmetic error — always apply BODMAS',
          'Negative × Negative = Positive; Negative × Positive = Negative',
          'Even + Even = Even; Even + Odd = Odd; Odd + Odd = Even',
          'a² − b² = (a+b)(a−b);  (a+b)² = a² + 2ab + b²;  (a−b)² = a² − 2ab + b²',
          'a³ + b³ = (a+b)(a² − ab + b²);  a³ − b³ = (a−b)(a² + ab + b²)'
        ],
        tips: [
          'Memorise (a+b)², (a−b)², (a+b)³, (a−b)³ — appear directly in factorisation and algebra',
          'To rationalise 1/(√a + √b): multiply by (√a − √b)/(√a − √b)',
          'Always simplify surds before adding: √12 + √3 = 2√3 + √3 = 3√3',
          'When distributing, include the sign: −(a − b) = −a + b not −a − b'
        ],
        bestPractices: [
          'Write the law used in each step for proofs (commutative, associative, etc.)',
          'Bracket negative terms when substituting: substitute −2 as (−2) to avoid sign errors',
          'Expand fully before simplifying — do not skip steps in surds or polynomials',
          'Verify factorisation by expanding back'
        ]
      },
      {
        chapter: 'Real Numbers',
        formulae: [
          'HCF(a, b) × LCM(a, b) = a × b',
          "Euclid's Division Lemma: a = bq + r,  0 ≤ r < b",
          'Prime factorisation: every natural number > 1 = product of primes (unique up to order)'
        ],
        logic: [
          'p/q (lowest terms) has a terminating decimal ↔ q = 2ⁿ × 5ᵐ',
          'Every composite number factors uniquely into primes (Fundamental Theorem of Arithmetic)',
          'Sum or product of a rational and an irrational is irrational',
          '√p is irrational for any prime p',
          "Euclid's algorithm: HCF(a, b) = HCF(b, r) where a = bq + r — repeat till r = 0"
        ],
        tips: [
          'Prove √2 irrational by contradiction: assume √2 = p/q (lowest terms) → 2 divides both p and q → contradiction',
          'LCM is always divisible by HCF',
          'For two primes p, q: HCF = 1 and LCM = p × q',
          'Non-terminating repeating decimal → irrational only if it never repeats; repeating → rational'
        ],
        bestPractices: [
          'Sanity-check: verify HCF × LCM = product of the two numbers',
          'Always write the full prime factorisation before computing HCF/LCM',
          'For three numbers: LCM(a,b,c) = LCM(LCM(a,b), c)'
        ]
      },
      {
        chapter: 'Polynomials',
        formulae: [
          'Quadratic ax² + bx + c: α + β = −b/a;  αβ = c/a',
          'Cubic ax³ + bx² + cx + d: α+β+γ = −b/a;  αβ+βγ+γα = c/a;  αβγ = −d/a',
          'Division Algorithm: p(x) = g(x)·q(x) + r(x);  deg r(x) < deg g(x)',
          '(a+b)² = a² + 2ab + b²;  (a−b)² = a² − 2ab + b²;  (a+b)(a−b) = a² − b²',
          '(a+b)³ = a³ + 3a²b + 3ab² + b³;  a³ + b³ = (a+b)(a² − ab + b²)'
        ],
        logic: [
          'A polynomial of degree n has at most n real zeroes',
          'Zeroes = x-intercepts of the polynomial graph',
          'If α is a zero then (x − α) is a factor (Factor Theorem)',
          'Remainder Theorem: remainder when p(x) is divided by (x − a) = p(a)',
          'Linear polynomial ax + b has exactly one zero: x = −b/a'
        ],
        tips: [
          'Form a quadratic by working backwards: x² − (sum)x + (product) = 0',
          'To find a cubic zero: try ±1, ±2, ±factors of constant term first',
          'Graph of quadratic ax² + bx + c: parabola opening up (a>0) or down (a<0)'
        ],
        bestPractices: [
          'Verify zeroes by substituting back into the polynomial',
          'Check sum and product of your found zeroes against −b/a and c/a',
          'After finding one zero of a cubic, use division algorithm for the other two'
        ]
      },
      {
        chapter: 'Pair of Linear Equations',
        formulae: [
          'a₁x + b₁y + c₁ = 0;  a₂x + b₂y + c₂ = 0',
          'Consistent (unique solution): a₁/a₂ ≠ b₁/b₂',
          'Consistent (infinitely many solutions): a₁/a₂ = b₁/b₂ = c₁/c₂',
          'Inconsistent (no solution): a₁/a₂ = b₁/b₂ ≠ c₁/c₂',
          'Substitution: express one variable in terms of other, substitute',
          'Elimination: multiply equations to make coefficients equal, then add/subtract'
        ],
        logic: [
          'Two lines in a plane: intersect (unique), parallel (none), or coincident (infinite)',
          'Cross-multiplication method: x/(b₁c₂−b₂c₁) = y/(c₁a₂−c₂a₁) = 1/(a₁b₂−a₂b₁)',
          'Graphically: intersection point = solution of the system'
        ],
        tips: [
          'Word problems: define variables clearly, write two equations, then solve',
          'Digits problem: tens digit = a, units digit = b → number = 10a + b',
          'Age problems: present age + years later = future age'
        ],
        bestPractices: [
          'Verify the solution by substituting back into BOTH original equations',
          'Check the consistency condition before attempting to solve',
          'For fractional equations, substitute 1/x = u, 1/y = v to simplify'
        ]
      },
      {
        chapter: 'Quadratic Equations',
        formulae: [
          'x = (−b ± √(b² − 4ac)) / 2a',
          'Discriminant: D = b² − 4ac',
          'Sum of roots: α + β = −b/a;  Product: αβ = c/a',
          'Form with known roots: x² − (α+β)x + αβ = 0'
        ],
        logic: [
          'D > 0 → two distinct real roots',
          'D = 0 → one repeated (equal) root: x = −b/2a',
          'D < 0 → no real roots (complex roots)',
          'Nature of roots determined entirely by D'
        ],
        tips: [
          'Factorise first; use the formula only if factorisation is not obvious',
          'Always rearrange to standard form (ax² + bx + c = 0) before computing D',
          'If "roots are equal" → set D = 0 and solve for the unknown parameter k',
          'Completing the square: ax² + bx + c = a(x + b/2a)² + (c − b²/4a)'
        ],
        bestPractices: [
          'Re-read: is "real roots", "equal roots", or "distinct roots" asked? Each needs a different D condition',
          'Verify both roots satisfy the original equation',
          'For word problems, always check that the solution makes physical sense (e.g., length cannot be negative)'
        ]
      },
      {
        chapter: 'Arithmetic Progressions',
        formulae: [
          'nth term:  aₙ = a + (n − 1)d',
          'Sum of n terms:  Sₙ = n/2 · [2a + (n − 1)d]  =  n/2 · (a + l)',
          'Given Sₙ: aₙ = Sₙ − Sₙ₋₁  for n ≥ 2;  a₁ = S₁',
          'Number of terms: n = (l − a)/d + 1',
          'Arithmetic mean of a and b: AM = (a + b)/2'
        ],
        logic: [
          'Common difference d must be constant throughout — verify with at least two pairs',
          'Middle term of an AP of odd length = arithmetic mean of first and last',
          'Sum of first n natural numbers: n(n+1)/2',
          'Sum of first n odd numbers = n²'
        ],
        tips: [
          'Take three consecutive AP terms as (a−d, a, a+d) to simplify algebra when sum is given',
          'Take four consecutive terms as (a−3d, a−d, a+d, a+3d)',
          'If aₙ is given, rewrite as a linear function of n: if aₙ = pn + q, then d = p, a = p + q'
        ],
        bestPractices: [
          'Identify a and d before attempting any AP question',
          'Cross-check: substitute your n back into aₙ and verify it matches the given term',
          'When asked for n, solve the quadratic carefully — reject negative/fractional values of n'
        ]
      },
      {
        chapter: 'Triangles',
        formulae: [
          'Heron\'s Formula: A = √[s(s−a)(s−b)(s−c)],  s = (a+b+c)/2',
          'Pythagoras Theorem: a² + b² = c²  (c = hypotenuse)',
          'Area ratio of similar triangles = (ratio of corresponding sides)²',
          'Perimeter ratio of similar triangles = ratio of corresponding sides',
          'Basic Proportionality Theorem (BPT): DE ∥ BC ⟹ AD/DB = AE/EC',
          'Mid-Point Theorem: line joining midpoints of two sides ∥ third side and = half of it',
          'Angle Bisector Theorem: BD/DC = AB/AC'
        ],
        logic: [
          '── Congruence Criteria (triangles are identical in shape AND size) ──',
          'SSS Congruence: If all three sides of one △ equal all three sides of another △, the triangles are congruent (AB=PQ, BC=QR, CA=RP ⟹ △ABC ≅ △PQR)',
          'SAS Congruence: If two sides and the INCLUDED angle of one △ equal two sides and the included angle of another △, they are congruent (AB=PQ, ∠B=∠Q, BC=QR ⟹ △ABC ≅ △PQR)',
          'ASA Congruence: If two angles and the INCLUDED side of one △ equal two angles and the included side of another △, they are congruent (∠B=∠Q, BC=QR, ∠C=∠R ⟹ △ABC ≅ △PQR)',
          'AAS Congruence: If two angles and a NON-INCLUDED side of one △ equal the corresponding two angles and side of another △, they are congruent (∠A=∠P, ∠B=∠Q, BC=QR ⟹ △ABC ≅ △PQR)',
          'RHS Congruence: If the hypotenuse and ONE side of a right triangle equal the hypotenuse and one side of another right triangle, they are congruent (right angle, AB=PQ hypotenuse, BC=QR ⟹ △ABC ≅ △PQR)',
          '── Similarity Criteria (same shape, sides proportional) ──',
          'AA Similarity (AAA): If two angles of one △ equal two angles of another △, the triangles are similar — the third angle is automatically equal (∠A=∠P, ∠B=∠Q ⟹ △ABC ~ △PQR)',
          'SSS Similarity: If all three pairs of corresponding sides are proportional, the triangles are similar (AB/PQ = BC/QR = CA/RP ⟹ △ABC ~ △PQR)',
          'SAS Similarity: If two sides are proportional AND the included angle is equal, the triangles are similar (AB/PQ = BC/QR, ∠B=∠Q ⟹ △ABC ~ △PQR)',
          '── Other key theorems ──',
          'Converse of BPT: if AD/DB = AE/EC then DE ∥ BC',
          'Converse of Pythagoras: if a² + b² = c² then the angle opposite c = 90°',
          'Similar triangles have equal corresponding angles AND proportional corresponding sides',
          'All equilateral triangles are similar to each other; all squares are similar to each other'
        ],
        tips: [
          'Pythagorean triples: (3,4,5), (5,12,13), (6,8,10), (8,15,17), (7,24,25), (9,40,41)',
          'Multiples of triples also work: (6,8,10) is 2×(3,4,5)',
          'In a right triangle, median to the hypotenuse = hypotenuse/2',
          'For BPT problems: identify the parallel line and the transversals it cuts',
          'Heron\'s formula useful when only sides are given, no height'
        ],
        bestPractices: [
          'Draw and label the diagram — mark given lengths, parallel lines, and right angles',
          'State the congruency/similarity criterion explicitly when writing a proof',
          'After finding the similarity ratio k, areas are in ratio k², perimeters in ratio k',
          'Verify BPT: check the ratio on both sides of the dividing line equals the same value'
        ]
      },
      {
        chapter: 'Coordinate Geometry',
        formulae: [
          'Distance: d = √[(x₂−x₁)² + (y₂−y₁)²]',
          'Mid-point: M = ((x₁+x₂)/2, (y₁+y₂)/2)',
          'Section formula (internal): P = ((mx₂+nx₁)/(m+n), (my₂+ny₁)/(m+n))',
          'Section formula (external): P = ((mx₂−nx₁)/(m−n), (my₂−ny₁)/(m−n))',
          'Area of triangle: ½|x₁(y₂−y₃) + x₂(y₃−y₁) + x₃(y₁−y₂)|',
          'Slope: m = (y₂−y₁)/(x₂−x₁);  Line: y − y₁ = m(x − x₁)'
        ],
        logic: [
          'Collinear points: area of triangle formed by them = 0',
          'Centroid of triangle: G = ((x₁+x₂+x₃)/3, (y₁+y₂+y₃)/3)',
          'Parallel lines have equal slopes; perpendicular lines: m₁ × m₂ = −1',
          'x-axis: y = 0;  y-axis: x = 0'
        ],
        tips: [
          'Origin divides a segment → use section formula with ratio m:n and P = (0,0)',
          'To check if a quadrilateral is a parallelogram: verify diagonals bisect each other (same mid-point)',
          'Distance from a point to origin: √(x² + y²)'
        ],
        bestPractices: [
          'Label all points before applying any formula — avoid sign errors',
          'Use the area formula to verify collinearity; if area ≠ 0, points are not collinear',
          'For "k:1" ratio problems, set the section formula equal to the given point and solve for k'
        ]
      },
      {
        chapter: 'Introduction to Trigonometry',
        formulae: [
          'sin θ = opp/hyp,  cos θ = adj/hyp,  tan θ = opp/adj',
          'cosec θ = 1/sin θ,  sec θ = 1/cos θ,  cot θ = 1/tan θ',
          'sin²θ + cos²θ = 1',
          '1 + tan²θ = sec²θ;  1 + cot²θ = cosec²θ',
          'Standard values: sin/cos at 0°, 30°, 45°, 60°, 90°'
        ],
        logic: [
          'All three Pythagorean identities come from sin²θ + cos²θ = 1 (divide by cos²θ or sin²θ)',
          'Reciprocal pairs: sin↔cosec, cos↔sec, tan↔cot',
          'tan θ = sin θ / cos θ;  cot θ = cos θ / sin θ',
          'Complementary angles: sin(90°−θ) = cos θ;  tan(90°−θ) = cot θ;  sec(90°−θ) = cosec θ'
        ],
        tips: [
          'To prove identities: simplify only one side — never cross-multiply',
          'When stuck, convert everything to sin and cos',
          'sec 90° and cosec 0° are undefined — common MCQ traps',
          'Memory trick for standard values: sin 0°→90° = √0/2, √1/2, √2/2, √3/2, √4/2'
        ],
        bestPractices: [
          'Memorise the standard values table; most MCQs use only 0°, 30°, 45°, 60°, 90°',
          'Write down the identity being used before substituting',
          'For expression simplification: factor common terms before applying an identity'
        ]
      },
      {
        chapter: 'Applications of Trigonometry',
        formulae: [
          'tan θ = height / horizontal distance',
          'Angle of elevation: measured upward from horizontal to line of sight',
          'Angle of depression: measured downward from horizontal to line of sight'
        ],
        logic: [
          'The angle of elevation from A to B = angle of depression from B to A (alternate interior angles)',
          'For two-position problems: draw two right triangles sharing a common side',
          'When observer moves toward/away from object: set up two equations and solve simultaneously'
        ],
        tips: [
          'Always draw a clear diagram with all given angles and distances labelled',
          'Use tan for height/distance ratio; use sin/cos when hypotenuse (slant distance) is involved',
          'Standard heights shortcut: if angle = 30°, height = distance/√3; if 45°, height = distance; if 60°, height = distance × √3'
        ],
        bestPractices: [
          'Label the unknown as h, d, or x and write the tan equation immediately',
          'Verify the answer is reasonable given the context (e.g., a building cannot be 500 km tall)',
          'For "two buildings" problems: use both angles from the point between them'
        ]
      },
      {
        chapter: 'Circles',
        formulae: [
          'Tangent length from external point P: PT = √(PO² − r²)',
          'PA × PB = PC × PD (intersecting chords: PA·PB = PC·PD)',
          'PT² = PA × PB (tangent-secant from external point)'
        ],
        logic: [
          'Tangent ⊥ radius at the point of contact',
          'Two tangents from an external point are equal in length',
          'Angle in a semicircle = 90° (angle subtended by diameter)',
          'Angle subtended at the centre = 2 × angle subtended at any point on the remaining arc',
          'Angles in the same segment are equal',
          'Opposite angles of a cyclic quadrilateral are supplementary (sum = 180°)',
          'Equal chords subtend equal angles at the centre; equal chords are equidistant from centre'
        ],
        tips: [
          'Tangent-radius perpendicularity is the most-used theorem — draw it immediately',
          'For tangent-tangent problems: use the two equal tangent lengths to find the kite shape',
          'Cyclic quadrilateral: if ∠A + ∠C = 180°, then ABCD is cyclic'
        ],
        bestPractices: [
          'Mark right angles at tangent-radius contact points as the first step',
          'State the theorem name in proofs: "By theorem, tangent ⊥ radius at point of contact"',
          'For angle problems: first find the arc/central angle, then use it to find inscribed angles'
        ]
      },
      {
        chapter: 'Areas Related to Circles',
        formulae: [
          'Area of circle: A = πr²',
          'Circumference: C = 2πr',
          'Area of sector (angle θ°): A = (θ/360) × πr²',
          'Arc length (angle θ°): l = (θ/360) × 2πr',
          'Area of segment = Area of sector − Area of triangle',
          'Area of ring = π(R² − r²)',
          'Area of equilateral triangle with side a: A = (√3/4)a²'
        ],
        logic: [
          'Sector is a "pie slice"; segment is the region between a chord and the arc',
          'For a semicircle: area = πr²/2; perimeter = πr + 2r',
          'Quadrant (90° sector): area = πr²/4'
        ],
        tips: [
          'Use π = 22/7 for clean fractions; 3.14 if the question specifies',
          'For combined figures: identify which parts to add and which to subtract',
          'Perimeter of a sector = 2r + arc length (two radii + arc)'
        ],
        bestPractices: [
          'Draw the figure and shade the required region before computing',
          'For "shaded area" problems: larger area minus smaller area',
          'Always check what "perimeter" means — arc only, or arc + chord, or arc + radii?'
        ]
      },
      {
        chapter: 'Surface Areas & Volumes',
        formulae: [
          'Cuboid: V = lbh,  TSA = 2(lb + bh + hl)',
          'Cube: V = a³,  TSA = 6a²',
          'Cylinder: V = πr²h,  CSA = 2πrh,  TSA = 2πr(r+h)',
          'Cone: V = ⅓πr²h,  l = √(r²+h²),  CSA = πrl,  TSA = πrl + πr²',
          'Sphere: V = (4/3)πr³,  SA = 4πr²',
          'Hemisphere: V = (2/3)πr³,  CSA = 2πr²,  TSA = 3πr²',
          'Frustum: V = (πh/3)(R²+r²+Rr),  l = √[h²+(R−r)²],  CSA = π(R+r)l'
        ],
        logic: [
          'Frustum = cone with its top cut off; R = base radius, r = top radius, h = height',
          'Recasting/melting: volume before = volume after (no wastage assumed)',
          'If n small spheres are formed from a big sphere: n × (4/3)πr³ = (4/3)πR³ → n = (R/r)³',
          'When a cone/hemisphere is placed on a cylinder: TSA calculation must avoid double-counting bases'
        ],
        tips: [
          'l (slant height) ≠ h (vertical height) — always use Pythagoras to relate them',
          'For combined solids: identify which surfaces are exposed to the outside',
          'Ratio of volumes of similar solids = cube of ratio of corresponding lengths'
        ],
        bestPractices: [
          'Write the formula with substituted values — examiners award formula marks',
          'Double-check units — questions often mix cm and m; convert first',
          'For hollow cylinders/spheres: volume of material = outer volume − inner volume'
        ]
      },
      {
        chapter: 'Statistics',
        formulae: [
          'Mean (direct): x̄ = Σf·xᵢ / Σf',
          'Mean (assumed mean): x̄ = a + (Σf·d / Σf),  d = xᵢ − a',
          'Mean (step-deviation): x̄ = a + (Σf·u / Σf) × h,  u = (xᵢ−a)/h',
          'Median = L + [(N/2 − cf) / f] × h',
          'Mode = L + [(f₁ − f₀) / (2f₁ − f₀ − f₂)] × h',
          'Empirical relation: Mode ≈ 3·Median − 2·Mean'
        ],
        logic: [
          'Mean: uses all values — sensitive to outliers',
          'Median: middle value — not affected by extreme values',
          'Mode: most frequent value — useful for categorical or skewed data',
          'The empirical relation holds for moderately skewed distributions',
          'For grouped data: class mark = (lower + upper limit)/2'
        ],
        tips: [
          'Modal class = class with the highest frequency (not the highest class mark)',
          'Median class: the class where cumulative frequency first reaches or exceeds N/2',
          'Step-deviation method is most efficient when class widths are equal and a central value is chosen as assumed mean'
        ],
        bestPractices: [
          'Always build the full frequency table with cumulative frequencies before finding median/mode',
          'Verify: Σf = N (total frequency)',
          'Cross-check: use empirical relation to see if your mean/median/mode values are consistent'
        ]
      },
      {
        chapter: 'Probability',
        formulae: [
          'P(E) = (Number of favourable outcomes) / (Total number of equally likely outcomes)',
          'P(Ē) = 1 − P(E)',
          '0 ≤ P(E) ≤ 1',
          'P(sure event) = 1;  P(impossible event) = 0'
        ],
        logic: [
          'Classical probability assumes all outcomes are equally likely',
          'Complementary events: E and Ē are mutually exclusive and exhaustive',
          'For a standard die: S = {1,2,3,4,5,6}, P(any face) = 1/6',
          'For a deck of 52 cards: 4 suits × 13 cards; 26 red (hearts+diamonds), 26 black (clubs+spades)'
        ],
        tips: [
          'Always list the sample space clearly for small problems',
          'Cards: Ace, 2–10, Jack, Queen, King = 13 per suit; face cards = J, Q, K (12 total)',
          'Coins: P(head) = P(tail) = 1/2; for n coins, total outcomes = 2ⁿ'
        ],
        bestPractices: [
          'Write out S (sample space) first, then count favourable outcomes',
          'Double-check: P(E) + P(Ē) must equal 1',
          'Read carefully — "at least one", "at most two", "exactly three" all mean different things'
        ]
      },
      {
        chapter: 'Quadrilaterals',
        formulae: [
          'Sum of interior angles of any quadrilateral = 360°',
          'Area of parallelogram = base × height = ab sin θ (a, b = sides, θ = included angle)',
          'Area of rectangle = length × breadth;  Perimeter = 2(l + b)',
          'Area of square = side²;  Perimeter = 4 × side;  Diagonal = side × √2',
          'Area of rhombus = ½ × d₁ × d₂ (d₁, d₂ = diagonals)',
          'Area of trapezium = ½ × (sum of parallel sides) × height = ½(a + b)h',
          'Diagonal of rectangle: d = √(l² + b²)',
          'Diagonals of rhombus bisect at 90°: side² = (d₁/2)² + (d₂/2)²'
        ],
        logic: [
          'Parallelogram (llgm): both pairs of opposite sides parallel and equal; opposite angles equal; diagonals bisect each other',
          'Rectangle: parallelogram with all angles 90°; diagonals equal in length',
          'Rhombus: parallelogram with all sides equal; diagonals bisect each other at right angles; diagonals bisect the vertex angles',
          'Square: rectangle + rhombus; all sides equal, all angles 90°, diagonals equal, bisect at 90°, bisect vertex angles (45° each)',
          'Trapezium: exactly one pair of parallel sides (called the parallel sides or bases)',
          'Isosceles trapezium: non-parallel sides equal; base angles equal; diagonals equal',
          'Hierarchy: Square ⊂ Rectangle ⊂ Parallelogram ⊂ Quadrilateral; Square ⊂ Rhombus ⊂ Parallelogram',
          'Converse: a quadrilateral is a parallelogram if: (i) both pairs of opposite sides are equal, OR (ii) both pairs of opposite angles are equal, OR (iii) diagonals bisect each other, OR (iv) one pair of sides is both parallel and equal',
          'Mid-point theorem for quadrilaterals: the quadrilateral formed by joining midpoints of any quadrilateral is a parallelogram'
        ],
        theorems: [
          'Theorem: A diagonal of a parallelogram divides it into two congruent triangles.',
          'Theorem: In a parallelogram, opposite sides are equal. Converse: If opposite sides of a quadrilateral are equal, it is a parallelogram.',
          'Theorem: In a parallelogram, opposite angles are equal. Converse: If opposite angles of a quadrilateral are equal, it is a parallelogram.',
          'Theorem: The diagonals of a parallelogram bisect each other. Converse: If the diagonals of a quadrilateral bisect each other, it is a parallelogram.',
          'Theorem: The diagonals of a rectangle are equal.',
          'Theorem: The diagonals of a rhombus are perpendicular bisectors of each other.',
          'Theorem: The diagonals of a square are equal and perpendicular bisectors of each other.',
          'Mid-Point Theorem (Gr 9): The line segment joining the mid-points of two sides of a triangle is parallel to the third side and equal to half of it. (Used to prove properties of special quadrilaterals.)'
        ],
        tips: [
          'Every square is a rectangle and a rhombus — but NOT every rectangle is a square',
          'For rhombus area: you need BOTH diagonals — they are NOT given as sides',
          'Draw the figure and mark all known properties before writing proof steps',
          'CPCT (Corresponding Parts of Congruent Triangles) — state the congruence first, THEN use CPCT',
          'Trapezium area: the two parallel sides go in the formula — identify them first'
        ],
        bestPractices: [
          'In proofs: establish congruence of triangles using SAS/ASA/SSS/AAS, then apply CPCT',
          'Label all angles and sides in the figure with the same symbols as in the question',
          'State the theorem or property used at each step — method marks depend on it',
          'For MCQs on area: rewrite every formula in your rough work before substituting numbers'
        ]
      }
    ],
    Science: [
      {
        chapter: 'Chemical Reactions & Equations',
        formulae: [
          'Law of Conservation of Mass: mass(reactants) = mass(products)',
          'Reactivity series: K > Na > Ca > Mg > Al > Zn > Fe > Pb > Cu > Ag > Au'
        ],
        logic: [
          'Types of reactions: combination (A+B→AB), decomposition (AB→A+B), displacement (A+BC→AC+B), double displacement (AB+CD→AD+CB), redox',
          'OIL RIG — Oxidation Is Loss (of electrons), Reduction Is Gain',
          'Exothermic reactions release heat; endothermic reactions absorb heat',
          'Thermal decomposition needs heat; photolytic needs light; electrolytic needs electricity'
        ],
        tips: [
          'Balance equations from the most complex molecule first, then adjust simpler ones',
          'Displacement: more reactive metal displaces less reactive from salt solution',
          'Corrosion = slow oxidation; rancidity = oxidation of fats and oils'
        ],
        bestPractices: [
          'Count atoms on both sides after balancing — verify before selecting answer',
          'Identify reaction type from the pattern of reactants and products, not just intuition'
        ]
      },
      {
        chapter: 'Acids, Bases & Salts',
        formulae: [
          'pH < 7 = acidic;  pH = 7 = neutral;  pH > 7 = basic',
          'Acid + Base → Salt + Water (neutralisation)',
          'Acid + Metal → Salt + Hydrogen gas',
          'Acid + Carbonate → Salt + CO₂ + Water'
        ],
        logic: [
          'Acids: release H⁺ (or H₃O⁺) in water; bases: release OH⁻ in water',
          'Indicators: litmus (red in acid, blue in base), phenolphthalein (colourless in acid, pink in base)',
          'Strong acids/bases fully ionise; weak ones partially ionise',
          'Baking soda (NaHCO₃) → washing soda (Na₂CO₃·10H₂O) → bleaching powder (Ca(OCl)Cl)',
          'Plaster of Paris: CaSO₄·½H₂O; sets by absorbing water to form gypsum (CaSO₄·2H₂O)'
        ],
        tips: [
          'Universal indicator gives a range of colours for a range of pH values',
          'Diluting an acid: ALWAYS add acid to water (not water to acid) — exothermic reaction',
          'CO₂ turns lime water milky (Ca(OH)₂ + CO₂ → CaCO₃ + H₂O)'
        ],
        bestPractices: [
          'Know the common salt names: NaCl (table salt), Na₂SO₄ (Glauber\'s salt), CuSO₄ (blue vitriol)',
          'Link salt to its parent acid and base for neutralisation questions'
        ]
      },
      {
        chapter: 'Metals & Non-Metals',
        formulae: [
          'Ore → Metal: Roasting (sulphide ores) → Smelting → Refining',
          'Thermite reaction: Fe₂O₃ + 2Al → Al₂O₃ + 2Fe + heat'
        ],
        logic: [
          'Properties of metals: malleable, ductile, sonorous, good conductors, high melting point',
          'Non-metals: brittle, poor conductors (except graphite), lower melting points',
          'Ionic compounds: metal + non-metal; covalent: non-metal + non-metal',
          'Anodising: increases oxide layer on aluminium for protection',
          'Galvanisation: coating iron with zinc to prevent rusting'
        ],
        tips: [
          'Reactivity series determines which metal displaces another in a displacement reaction',
          'Most reactive metals (K, Na, Ca) react vigorously with water',
          'Gold, platinum, silver are noble metals — unreactive even in most acids',
          'Amalgam: alloy of mercury with another metal'
        ],
        bestPractices: [
          'Memorise reactivity series from K to Au — both order and symbol',
          'For extraction questions: identify the ore → extraction method (reduction/electrolysis) → refining'
        ]
      },
      {
        chapter: 'Carbon & its Compounds',
        formulae: [
          'Combustion of hydrocarbons: CₙH₂ₙ₊₂ + O₂ → CO₂ + H₂O',
          'Saponification: fat + NaOH → soap + glycerol'
        ],
        logic: [
          'Catenation: carbon forms long chains with itself — basis of organic chemistry',
          'Tetravalency: carbon has 4 valence electrons → forms 4 bonds',
          'Saturated: only single C−C bonds (alkanes: CₙH₂ₙ₊₂)',
          'Unsaturated: double (alkenes: CₙH₂ₙ) or triple (alkynes: CₙH₂ₙ₋₂) bonds',
          'Isomers: same molecular formula, different structural formula',
          'Functional groups: −OH (alcohol), −COOH (carboxylic acid), −CHO (aldehyde), C=O (ketone)'
        ],
        tips: [
          'Test for unsaturation: decolourises bromine water (Br₂ solution)',
          'Ethanol (C₂H₅OH): fermentation of sugars; ethanoic acid (CH₃COOH): vinegar',
          'Soaps are sodium salts of fatty acids; detergents work in hard water, soaps do not'
        ],
        bestPractices: [
          'Know IUPAC names for first 4 homologues: methane, ethane, propane, butane',
          'For substitution vs addition reactions: saturated → substitution; unsaturated → addition'
        ]
      },
      {
        chapter: 'Life Processes',
        formulae: [
          'Photosynthesis: 6CO₂ + 6H₂O → C₆H₁₂O₆ + 6O₂  (in light, with chlorophyll)',
          'Aerobic respiration: C₆H₁₂O₆ + 6O₂ → 6CO₂ + 6H₂O + 38 ATP',
          'Anaerobic (yeast): C₆H₁₂O₆ → 2C₂H₅OH + 2CO₂  (no O₂)'
        ],
        logic: [
          'Autotrophs make their own food (photosynthesis); heterotrophs consume others',
          'Nutrition types: holozoic (animals), saprotrophic (fungi), parasitic',
          'In humans: digestion → absorption → assimilation',
          'Transpiration: loss of water vapour through stomata; pull that drives water up the xylem',
          'Excretion: removal of metabolic waste; kidneys filter blood via nephrons'
        ],
        tips: [
          'Guard cells control stomata: turgid → open; flaccid → closed',
          'Nephron: Bowman\'s capsule → glomerular filtration → tubular reabsorption → collecting duct',
          'Double circulation (humans): pulmonary + systemic; heart = 4 chambers'
        ],
        bestPractices: [
          'Link each organ to its function and the life process it supports',
          'Know the difference between respiration (cellular) and breathing (mechanical)'
        ]
      },
      {
        chapter: 'Control & Coordination',
        formulae: [],
        logic: [
          'Nervous system: brain (cerebrum, cerebellum, medulla) + spinal cord + nerves',
          'Reflex arc: receptor → sensory neuron → spinal cord → motor neuron → effector',
          'Synapse: gap between neurons; signal transmitted by neurotransmitters',
          'Endocrine system: hormones secreted by glands, carried by blood to target organs',
          'Plant hormones (phytohormones): auxin (phototropism), gibberellin (elongation), cytokinin (cell division), abscisic acid (dormancy), ethylene (ripening)'
        ],
        tips: [
          'Cerebrum: thinking, memory, voluntary actions; cerebellum: balance and coordination; medulla: involuntary actions (heartbeat, breathing)',
          'Adrenaline (fight-or-flight): increases heart rate, blood pressure, blood glucose',
          'Insulin (pancreas): lowers blood glucose; glucagon: raises blood glucose',
          'Tropisms: phototropism (light), geotropism (gravity), hydrotropism (water) — all mediated by auxin'
        ],
        bestPractices: [
          'Draw and label the reflex arc for exam answers — it often carries 3+ marks',
          'For hormone questions: link gland → hormone → function → disorder if deficient'
        ]
      },
      {
        chapter: 'Reproduction',
        formulae: [],
        logic: [
          'Asexual reproduction: fission, budding, fragmentation, regeneration, vegetative propagation — no fusion of gametes',
          'Sexual reproduction: fusion of male and female gametes → genetic variation',
          'Pollination: transfer of pollen from anther to stigma; self-pollination vs cross-pollination',
          'Fertilisation in humans: sperm + ovum → zygote → blastocyst → implantation',
          'Contraception types: barrier (condom), chemical (pill), surgical (vasectomy/tubectomy), IUD'
        ],
        tips: [
          'Double fertilisation in plants: one sperm + egg → zygote; another sperm + 2 polar nuclei → endosperm (3n)',
          'Germination requires: water, oxygen, suitable temperature (not light for most seeds)',
          'STIs: HIV/AIDS, gonorrhoea, syphilis — spread by unprotected sex'
        ],
        bestPractices: [
          'For plant reproduction: know the structure of a flower (stamen, pistil, petals, sepals)',
          'For human reproduction: be clear on the role of each hormone — FSH, LH, oestrogen, progesterone'
        ]
      },
      {
        chapter: 'Heredity & Evolution',
        formulae: [
          'Monohybrid cross ratios: F2 phenotype 3:1; genotype 1:2:1',
          'Dihybrid cross: F2 phenotype ratio 9:3:3:1'
        ],
        logic: [
          "Mendel's Law of Segregation: alleles separate during gamete formation",
          "Mendel's Law of Independent Assortment: genes on different chromosomes assort independently",
          'Dominant allele (T) masks recessive (t) in Tt heterozygote',
          'DNA → RNA → Protein (central dogma of molecular biology)',
          'Sex determination in humans: XX = female, XY = male; Y chromosome from father determines sex'
        ],
        tips: [
          'Use Punnett square for crosses — label gametes clearly',
          'Homozygous: TT or tt; Heterozygous: Tt',
          'Evolution: natural selection (Darwin) — organisms better adapted to environment survive and reproduce more',
          'Speciation: formation of new species by geographic isolation → genetic divergence'
        ],
        bestPractices: [
          'Always state both the genotype ratio and phenotype ratio in cross questions',
          'For sex-linked traits: colour blindness gene is on X chromosome — use Xᴮ notation'
        ]
      },
      {
        chapter: 'Light — Reflection & Refraction',
        formulae: [
          'Mirror formula: 1/v + 1/u = 1/f;  f = R/2',
          'Lens formula: 1/v − 1/u = 1/f',
          'Magnification (mirror): m = −v/u  =  h′/h',
          'Magnification (lens): m = v/u',
          'Power of lens: P = 1/f (f in metres);  unit = dioptre (D)',
          "Snell's Law: n₁ sin θ₁ = n₂ sin θ₂",
          'Refractive index: n = c/v = speed of light in vacuum / speed in medium',
          'n = sin(angle of incidence) / sin(angle of refraction)'
        ],
        logic: [
          'New Cartesian sign convention: distances from pole (mirror) or optical centre (lens); incident light direction = positive',
          'Real images: formed by convergence of actual rays; always inverted',
          'Virtual images: formed by apparent divergence; always erect',
          'Concave mirror: f negative; Convex mirror: f positive',
          'Convex lens: f positive; Concave lens: f negative',
          'Critical angle: sin C = 1/n; total internal reflection when angle > critical angle'
        ],
        tips: [
          'Convex mirror always forms a virtual, erect, diminished image — used as rear-view mirror',
          'Concave mirror: object beyond C → real, inverted, diminished image',
          'Dispersion: white light splits through prism — VIBGYOR (violet bends most, red least)',
          'Atmospheric refraction: stars twinkle; sun visible slightly before/after actual sunrise/sunset'
        ],
        bestPractices: [
          'Apply sign convention to u, v, f before substituting into any formula',
          'Sanity-check: virtual image → m positive; real image → m negative (for mirrors)'
        ]
      },
      {
        chapter: 'Human Eye & Colourful World',
        formulae: [
          'Power of corrective lens = 1/focal length (in metres)'
        ],
        logic: [
          'Human eye: cornea → iris/pupil → lens → retina (rods for dim light, cones for colour)',
          'Accommodation: ciliary muscles change lens curvature to focus near/far objects',
          'Myopia (short-sight): image forms in front of retina; corrected by concave (diverging) lens',
          'Hypermetropia (long-sight): image forms behind retina; corrected by convex (converging) lens',
          'Presbyopia: loss of accommodation with age; corrected by bifocal lenses',
          'Scattering: shorter wavelengths (blue/violet) scatter more — sky appears blue, sunsets red'
        ],
        tips: [
          'Near point of normal eye = 25 cm; far point = infinity',
          'Tyndall effect: scattering of light by colloidal particles — milk looks white in water',
          'Danger signals are red: red scatters least, so visible from far'
        ],
        bestPractices: [
          'For defect-of-vision MCQs: first identify near or far point shift, then choose lens type',
          'Know the difference between dispersion (prism) and scattering (Tyndall)'
        ]
      },
      {
        chapter: 'Electricity',
        formulae: [
          "Ohm's Law: V = IR",
          'Power: P = VI = I²R = V²/R',
          'Energy: E = Pt = VIt',
          'Series: Rₜ = R₁ + R₂ + …  (same I, voltage divides)',
          'Parallel: 1/Rₜ = 1/R₁ + 1/R₂ + …  (same V, current divides)',
          'Resistance: R = ρL/A',
          'Heating effect (Joule): H = I²Rt'
        ],
        logic: [
          'Series → total resistance always increases above the largest individual value',
          'Parallel → total resistance always less than the smallest individual resistor',
          'Household appliances wired in parallel — each gets full supply voltage independently',
          '1 kWh = 1 unit of electricity = 3.6 × 10⁶ J'
        ],
        tips: [
          'Two parallel resistors shortcut: Rₜ = (R₁ × R₂) / (R₁ + R₂)',
          'If current doubles, power quadruples (P = I²R)',
          'Resistivity ρ depends on material and temperature — not on dimensions of conductor'
        ],
        bestPractices: [
          'Draw and label the circuit before applying formulas',
          'Check units: V in volts, I in amperes, R in ohms, P in watts, E in joules or kWh'
        ]
      },
      {
        chapter: 'Magnetic Effects of Electric Current',
        formulae: [
          'Force on current-carrying conductor in field B: F = BIL sin θ',
          'Fleming\'s Left-Hand Rule: gives direction of force on conductor (motor)',
          'Fleming\'s Right-Hand Rule: gives direction of induced current (generator)',
          'Lenz\'s Law: induced current opposes the change causing it'
        ],
        logic: [
          'Oersted\'s discovery: electric current produces a magnetic field',
          'Solenoid: a coil of wire acts like a bar magnet when current flows; field inside is uniform',
          'Electromagnetic induction: changing magnetic flux induces EMF (Faraday\'s Law)',
          'AC changes direction periodically (50 Hz in India = 50 cycles/second)',
          'DC flows in one direction only'
        ],
        tips: [
          'Thumb rule (right-hand): thumb points in current direction → fingers curl in field direction',
          'Electric motor: converts electrical energy to mechanical energy (uses F = BIL)',
          'Generator: converts mechanical energy to electrical energy (uses electromagnetic induction)',
          'Earth\'s magnetic field: geographic north ≈ magnetic south (compass N points to geographic N)'
        ],
        bestPractices: [
          'Use Fleming\'s rules correctly — left for motor (force), right for generator (current)',
          'For MCQs about direction of induced current: apply Lenz\'s Law — always opposes change'
        ]
      },
      {
        chapter: 'Sources of Energy',
        formulae: [],
        logic: [
          'Fossil fuels: coal, petroleum, natural gas — non-renewable, cause pollution and greenhouse effect',
          'Renewable sources: solar, wind, hydro, geothermal, tidal, biomass',
          'Solar cell: converts light energy to electrical energy (photovoltaic effect)',
          'Biogas: produced by anaerobic decomposition of organic waste; mainly methane (CH₄)',
          'Nuclear fission: heavy nucleus splits releasing enormous energy; used in nuclear reactors',
          'Hydrogen bomb: nuclear fusion (H → He); not yet controlled for power generation'
        ],
        tips: [
          'Box solar cooker: reaches ~100–140°C; uses plane mirror reflector and glass lid',
          'Wind energy: needs wind speed > 15 km/h; wind farms usually set up on hills or coast',
          'Hydroelectric: potential energy of water → kinetic energy → electrical energy',
          'Efficiency: useful energy output / total energy input × 100%'
        ],
        bestPractices: [
          'Compare renewable vs non-renewable on: availability, cost, environmental impact, reliability',
          'Know the energy conversion chain for each source'
        ]
      }
    ],
    'Social Science': [
      {
        chapter: 'Nationalism in India',
        formulae: [],
        logic: [
          'Non-Cooperation Movement (1920–22): withdrew from courts, schools, councils; returned honours',
          'Civil Disobedience Movement (1930): Dandi March → Salt Satyagraha (12 March 1930)',
          'Quit India Movement (1942): "Do or Die"; demanded immediate independence',
          'Khilafat Movement (1919–24): supported by Gandhi to unite Hindus and Muslims'
        ],
        tips: [
          'Rowlatt Act (1919): detention without trial → sparked Non-Cooperation',
          'Jallianwala Bagh massacre (13 April 1919): turned moderate opinion against British',
          'Chauri Chaura incident (1922): mob violence → Gandhi called off Non-Cooperation',
          'Simon Commission (1927): all-British commission to review Indian constitution → boycotted'
        ],
        bestPractices: [
          'Link each movement to its social base: peasants, workers, women, tribals, middle class',
          'Know both the achievements and limitations of each movement for MCQs',
          'Create a timeline: 1919 → 1920 → 1922 → 1930 → 1942 — MCQs often test chronology'
        ]
      },
      {
        chapter: 'Resources & Development',
        formulae: [],
        logic: [
          'Resource types: natural (biotic/abiotic), human-made, human',
          'Sustainable development: meet present needs without compromising future generations',
          'Land use categories: forests, barren/uncultivable, permanent pastures, cultivable waste, net sown area, fallow',
          'Land degradation causes: deforestation, overgrazing, mining, waterlogging, salinisation'
        ],
        tips: [
          "India's net sown area ≈ 54% — one of the highest proportions globally",
          'Alluvial soil: northern plains, most fertile, wheat/rice/sugarcane',
          'Black soil (Regur): Deccan plateau, self-ploughing, cotton — Maharashtra/MP',
          'Red and yellow soil: Tamil Nadu, parts of Chhattisgarh, iron oxide content',
          'Laterite soil: high rainfall areas, Kerala/Karnataka, tea/coffee/cashew'
        ],
        bestPractices: [
          'Know the leading state for each soil type — map-based MCQs are common',
          'Link soil type → rainfall/topography → crop — enables elimination on MCQs'
        ]
      },
      {
        chapter: 'Agriculture',
        formulae: [],
        logic: [
          'Kharif crops: sown with monsoon onset (June), harvested September–October; rice, cotton, jowar, bajra',
          'Rabi crops: sown in winter (November), harvested March–April; wheat, barley, mustard, peas',
          'Zaid crops: grown between Rabi and Kharif seasons; watermelon, cucumber',
          'Green Revolution: HYV seeds + chemical fertilisers + irrigation → wheat/rice production surge (1960s–70s)'
        ],
        tips: [
          'India is the largest producer of spices, pulses, and jute in the world',
          'Rice needs high temperatures and heavy rainfall; wheat needs cool, moist weather during growth',
          'Plantation agriculture: large estates, single crop, capital-intensive; tea (Assam), rubber (Kerala)',
          'Shifting cultivation (Jhumming): forest cleared and burned, cultivated for a few years, then abandoned'
        ],
        bestPractices: [
          'Classify a given crop into Kharif/Rabi/Zaid before attempting related MCQs',
          'Know which state leads each major crop: Punjab (wheat), West Bengal (rice), Maharashtra (cotton)'
        ]
      },
      {
        chapter: 'Manufacturing Industries',
        formulae: [],
        logic: [
          'Industry classification: agro-based (cotton, jute, silk), mineral-based (iron & steel, cement), public sector, private sector, joint sector',
          'Location factors: raw materials, power, labour, capital, transport, market',
          'Textile industry: largest employer in organised sector after agriculture',
          'Iron and steel: basic industry — backbone of all other industries'
        ],
        tips: [
          'Jamshedpur (Tata Steel): oldest steel plant in India',
          'Ahmedabad: "Manchester of India" — major cotton textile centre',
          'Silicon Valley of India: Bengaluru (IT industry)',
          'SAIL (Steel Authority of India): public sector steel company'
        ],
        bestPractices: [
          'For location-of-industry MCQs: list the factors and then match with the city/region',
          'Know the difference between agglomeration (clustering of industries) and decentralisation'
        ]
      },
      {
        chapter: 'Money & Credit',
        formulae: [],
        logic: [
          'Functions of money: medium of exchange, store of value, unit of account, standard of deferred payment',
          'Credit: principal + interest over time; helps production but can create debt trap',
          'Formal credit: banks, cooperatives — lower interest; Informal: moneylenders, traders — high interest',
          'RBI: central bank of India; issues currency; regulates credit; lender of last resort'
        ],
        tips: [
          'Credit can push poor households into a debt trap if income fails to cover repayments',
          'SHGs (Self-Help Groups): pool savings, provide collateral-free credit — especially for women',
          'Collateral: asset pledged by borrower — land, building, vehicle'
        ],
        bestPractices: [
          'Compare formal vs informal credit on: interest rate, collateral, paperwork, flexibility',
          'Understand the double coincidence of wants problem that money solves'
        ]
      },
      {
        chapter: 'Globalisation & Indian Economy',
        formulae: [],
        logic: [
          'Globalisation: integration of production and markets across the world; driven by MNCs',
          'FDI: foreign direct investment — MNCs invest in production in other countries',
          'WTO: World Trade Organisation — sets rules for international trade, removes barriers',
          'Trade liberalisation: reducing tariffs and quotas to allow free flow of goods'
        ],
        tips: [
          'Benefits of globalisation: more jobs, consumer choice, technology transfer, FDI',
          'Drawbacks: job losses in small industries, exploitation of low-wage labour, cultural homogenisation',
          'ITES: IT-enabled services (call centres, back-office work) — major source of Indian employment'
        ],
        bestPractices: [
          'Balance pros and cons of globalisation — MCQs often ask for limitations',
          'Know the role of technology (telecom, internet) in enabling globalisation'
        ]
      },
      // ── CBSE Grade 10 History ──────────────────────────────────────────────
      {
        chapter: 'Rise of Nationalism in Europe',
        formulae: [],
        logic: [
          'Nationalism: sense of shared identity based on common language, culture, history and territory',
          'French Revolution (1789): introduced ideas of liberty, equality, fraternity; spread by Napoleon',
          'Romanticism: cultural movement that emphasised emotion, folk traditions and national language to build national identity',
          'Liberalism in Europe: individual freedom, constitutional government, end of aristocratic privilege',
          'Conservatism (post-1815): stability, tradition, established institutions — reaction to revolutionary upheaval',
          'Unification of Germany (1866–71): Bismarck used wars with Denmark, Austria, France; proclaimed empire at Versailles 1871',
          'Unification of Italy (1848–71): Mazzini (ideology), Cavour (diplomacy), Garibaldi (military) — Rome became capital 1871',
          'Balkans: rise of nationalism within the Ottoman Empire; "powder keg of Europe" — led to WWI'
        ],
        tips: [
          'Ernst Moritz Arndt, Grimm Brothers: used folklore and language to unite Germans',
          'Frankfurt Parliament (1848): liberal nationalists tried to unite Germany — failed; dissolved 1849',
          'Victor Emmanuel II: first king of unified Italy',
          'Frederic Sorrieu (1848): artist who visualised a utopia of democratic and social republics — "The Dream of Worldwide Democratic and Social Republics"',
          'Zollverein (1834): German customs union — removed trade barriers, created economic unity before political unity'
        ],
        bestPractices: [
          'Distinguish between liberal nationalism (individual rights + nation-state) and conservative nationalism (tradition + monarchy)',
          'Timeline: 1789 French Revolution → 1815 Congress of Vienna → 1848 Revolutions → 1866-71 Unifications'
        ]
      },
      {
        chapter: 'Making of a Global World',
        formulae: [],
        logic: [
          'Silk routes: pre-modern global links for trade and cultural exchange between Asia, Europe and Africa',
          'Colonialism: European powers acquired territories, extracted resources, created new trade patterns (16th–20th c.)',
          'Indentured labour: system of contract labour — Indian workers sent to Caribbean, Fiji, Mauritius (1830s–1920)',
          'Great Depression (1929): collapse of US stock market → global fall in output, trade, incomes, employment',
          'Bretton Woods (1944): post-WWII order — IMF for short-term credit, World Bank for reconstruction; fixed exchange rates',
          'GATT → WTO: removal of trade barriers; shift to a liberalised global trade regime (1995)'
        ],
        tips: [
          'Rinderpest (cattle plague, 1890s): devastated African cattle → Africans lost livelihoods → forced labour for colonists',
          'Corn Laws (UK, repealed 1846): removal allowed cheap food imports → hurt British farmers, helped industrialists',
          'Henry Ford: assembly-line mass production → workers could afford cars → model for global consumer society',
          'Post-WWII: decolonisation + Cold War shaped new international economic institutions'
        ],
        bestPractices: [
          'Sequence pre-modern → colonial → modern → contemporary globalisation stages',
          'Know the role of technology (steam ships, telegraph, refrigeration) in enabling 19th c. globalisation'
        ]
      },
      {
        chapter: 'Age of Industrialisation',
        formulae: [],
        logic: [
          'Proto-industrialisation: rural cottage industries supplying merchants before factory system; merchants gave raw materials, collected finished goods',
          'First Industrial Revolution (Britain, ~1780–1850): textiles, iron, steam engine; mechanised production',
          'Second Industrial Revolution (~1850–1914): steel, chemicals, electricity, precision tools spread to USA and Germany',
          'Child and women labour: cheap, less resistant to new practices; widely used in early mills',
          'India under colonialism: Indian textiles initially exported globally; British machine-cloth flooded India → Indian weavers ruined',
          'Bombay cotton mills (1850s–): industrialisation in India; faced competition from Lancashire'
        ],
        tips: [
          'Spinning Jenny (Hargreaves, 1764): multiple spindles from one wheel; cotton output soared',
          'Steam engine (Watt, 1769, improved): freed factories from river locations',
          'Staple industries (Victorian Britain): cotton, iron, coal — Britain called "workshop of the world"',
          'Indian hand-loom survived because it produced finer cloth; coarser cloth market lost to mills',
          'NWP, Agra: most weavers displaced by 1850s; Bengal muslin virtually wiped out'
        ],
        bestPractices: [
          'Compare British and Indian industrialisation: scale, timing, colonial constraints',
          'Know the difference between domestic system (putting-out) and factory system'
        ]
      },
      {
        chapter: 'Print Culture and the Modern World',
        formulae: [],
        logic: [
          'Woodblock printing (China, 594 AD): earliest form; spread to Japan and Korea; used for Buddhist texts',
          'Gutenberg press (c.1448): movable metal type; Bible first book printed (1450s); transformed Europe',
          'Print capitalism (Benedict Anderson): newspapers + novels created shared language and identity → foundation of nationalism',
          'Reformation (Luther, 1517): printing spread Protestant ideas rapidly across Europe; challenged the Church',
          'India: first printing press introduced by Portuguese missionaries in Goa (1556); spread to Bombay, Calcutta',
          'Raja Ram Mohan Roy: used print to campaign against sati; Sambad Kaumudi 1821'
        ],
        tips: [
          'Erasmus (humanist): warned that print spreads both wisdom and heresy',
          'Seditious Acts: colonial government tried to censor the press in India; Vernacular Press Act (1878) — gagged Indian-language newspapers',
          'Bal Gangadhar Tilak: Kesari (Marathi) — radical nationalist writing',
          'Women and print: reformers used print to debate women\'s education; women writers emerged 19th c. Bengal'
        ],
        bestPractices: [
          'Trace print from China → Europe (Gutenberg) → Reformation → Nationalism → India',
          'Connect print to each major movement: Reformation, Enlightenment, French Revolution, Indian nationalism'
        ]
      },
      // ── CBSE Grade 10 Geography ────────────────────────────────────────────
      {
        chapter: 'Forest and Wildlife Resources',
        formulae: [],
        logic: [
          'Biodiversity: variety of life forms at genetic, species and ecosystem levels; India has 8% of global species',
          'IUCN categories: Normal, Vulnerable, Endangered, Extinct, Rare, Endemic',
          'Deforestation causes: mining, dams, agriculture expansion, overgrazing, fuel-wood collection',
          'Project Tiger (1973): to protect Bengal tiger; expanded to 50+ reserves by 2023',
          'Community reserves: areas where local communities participate in conservation (Wildlife Protection Act 1972)'
        ],
        tips: [
          'India has 4 biodiversity hotspots: Eastern Himalayas, Western Ghats, Indo-Burma, Sundaland (Andaman)',
          'Sacred groves (Dev vans): traditionally protected forest patches in Rajasthan, Meghalaya, Himachal Pradesh',
          'Chipko Movement (1970s): villagers hugged trees to prevent logging — Uttarakhand; led by Gaura Devi',
          'Beej Bachao Andolan: seed conservation movement, Tehri Garhwal'
        ],
        bestPractices: [
          'Classify: reserved forest (most protected, govt.) vs protected vs unclassed',
          'Link each conservation law to what it protects and when it was enacted'
        ]
      },
      {
        chapter: 'Water Resources',
        formulae: [],
        logic: [
          'Freshwater: 2.5% of total water; most locked in ice caps/groundwater — only 0.006% accessible',
          'Multipurpose river projects: irrigation + electricity + flood control + navigation (e.g. Bhakra Nangal, Hirakud)',
          'Water scarcity causes: overuse, population growth, pollution, poor management',
          'Rainwater harvesting: storing runoff for local use; khadins (Rajasthan), kulhs (HP), johads (Rajasthan)',
          'Groundwater depletion: over-extraction for agriculture (Punjab, Haryana) threatens long-term supply'
        ],
        tips: [
          'Bhakra Nangal Dam: Sutlej River; tallest gravity dam in Asia; Gobind Sagar reservoir',
          'Hirakud Dam: Mahanadi, Odisha; one of the longest earthen dams in the world',
          'Indira Gandhi Canal: Rajasthan; transforms Thar Desert agriculture',
          'Large dams cause displacement; destroy forests; change local ecology — social and environmental concerns'
        ],
        bestPractices: [
          'Know river → dam → state for at least 5 major multipurpose projects',
          'Compare traditional water harvesting systems by region — map-based MCQs common'
        ]
      },
      {
        chapter: 'Minerals and Energy Resources',
        formulae: [],
        logic: [
          'Mineral types: metallic (ferrous: iron ore; non-ferrous: copper, bauxite) and non-metallic (mica, limestone)',
          'Mining methods: open-cast (near surface), shaft (deep underground), quarrying (surface rocks)',
          'Iron ore belts: Odisha-Jharkhand, Chhattisgarh-MP, Karnataka, Maharashtra-Goa',
          'Coal types by rank: Anthracite (best) > Bituminous > Lignite > Peat (lowest)',
          'Petroleum: Mumbai High, Gujarat coast, Assam (Digboi — oldest oil field of Asia)',
          'Non-conventional energy: solar, wind, tidal, biogas, geothermal — renewable and cleaner'
        ],
        tips: [
          'Mica: largely from Jharkhand, Rajasthan; used in electrical industries',
          'Bauxite → Aluminium: Jharkhand, Odisha, Gujarat, Chhattisgarh',
          'India is among the largest producers of iron ore and mica globally',
          'Digboi (Assam): first oil refinery in Asia (1901)',
          'Kudankulam: nuclear power plant, Tamil Nadu'
        ],
        bestPractices: [
          'Link mineral → leading state(s) — MCQs frequently test this',
          'Know the difference between conventional (coal, oil, gas, hydro, nuclear) and non-conventional energy'
        ]
      },
      {
        chapter: 'Lifelines of National Economy',
        formulae: [],
        logic: [
          'Transport modes: roadways, railways, airways, waterways, pipelines',
          'Railways: largest public sector enterprise in India; connects remote areas; broad gauge (1.676 m) is standard',
          'Roadways: largest network; National Highways (NH) connect major cities; maintained by NHAI',
          'Waterways: cheapest for heavy goods; National Waterways 1 (Ganga–Allahabad to Haldia) is longest',
          'Airways: fastest; Indian Airlines (domestic), Air India (international)',
          'Trade: imports (crude oil, gold, fertilisers) vs exports (IT, textiles, engineering goods)'
        ],
        tips: [
          'Golden Quadrilateral: 6-lane highway connecting Delhi-Mumbai-Chennai-Kolkata; 5,846 km',
          'North-South corridor: Srinagar to Kanyakumari; East-West: Silchar to Porbandar',
          'Kandla: India\'s largest port by cargo volume; free trade zone (Gujarat)',
          'Mumbai: largest natural harbour; Jawaharlal Nehru Port (JNPT): busiest container port',
          'ONGC (Oil and Natural Gas Corporation): state oil company; manages pipelines across India'
        ],
        bestPractices: [
          'Rank transport modes by cost (cheapest: waterways → railways → roads → airways) for heavy/bulky cargo',
          'Know which port handles what type of cargo — map questions appear in CBSE'
        ]
      }
    ],
  Physics: [
      {
        chapter: 'Force & Pressure',
        formulae: [
          "Newton's 2nd Law: F = ma",
          'Momentum: p = mv',
          'Impulse: J = F·Δt = Δp',
          'Pressure: P = F/A',
          'Liquid pressure at depth h: P = hρg',
          'Upthrust (Archimedes): U = ρ_fluid × V_submerged × g'
        ],
        logic: [
          "Newton's 1st Law: a body remains at rest or in uniform motion unless a net force acts (inertia)",
          "Newton's 3rd Law: action and reaction are equal in magnitude, opposite in direction, acting on DIFFERENT bodies",
          'Pressure in a liquid depends on depth, density, g — not on volume or shape of container',
          'Archimedes\' principle: buoyant force = weight of fluid displaced'
        ],
        tips: [
          'Impulse–momentum theorem: useful when force is unknown but time and velocity change are given',
          'Atmospheric pressure ≈ 101,325 Pa ≈ 76 cm Hg (standard)',
          'A body floats when its weight = upthrust; sinks when weight > upthrust'
        ],
        bestPractices: [
          'Draw a free-body diagram and label all forces before applying any law',
          'State units explicitly: N, kg·m/s, Pa — common mark-loss in ICSE'
        ]
      },
      {
        chapter: 'Machines & Levers',
        formulae: [
          'Mechanical Advantage (MA) = Load / Effort = L/E',
          'Velocity Ratio (VR) = Effort distance / Load distance',
          'Efficiency: η = MA/VR × 100%  =  (Work output / Work input) × 100%',
          'For ideal machine: MA = VR;  η = 100%',
          'Pulley: VR = number of segments of string supporting the load'
        ],
        logic: [
          'Lever: effort × effort arm = load × load arm (principle of moments)',
          'Class 1 lever: fulcrum between effort and load (seesaw, scissors)',
          'Class 2 lever: load between fulcrum and effort (wheelbarrow, nutcracker)',
          'Class 3 lever: effort between fulcrum and load (tweezers, broom)',
          'MA > 1: force multiplier (large load, small effort); MA < 1: speed multiplier'
        ],
        tips: [
          'Class 1 levers: MA can be > or < 1 depending on arm lengths',
          'Class 2 levers: MA always > 1 (load arm < effort arm)',
          'Class 3 levers: MA always < 1 (effort arm < total length)',
          'Friction reduces efficiency → MA < VR in real machines'
        ],
        bestPractices: [
          'State the class of lever before answering — draw and label arms',
          'Always check: if efficiency > 100%, something is wrong — recheck calculation'
        ]
      },
      {
        chapter: 'Work, Energy & Power',
        formulae: [
          'Work: W = Fs cos θ',
          'Kinetic Energy: KE = ½mv²',
          'Gravitational PE: PE = mgh',
          'Power: P = W/t = Fv',
          'Work–Energy Theorem: net work done = change in KE = ½mv² − ½mu²',
          '1 kWh = 3.6 × 10⁶ J'
        ],
        logic: [
          'Work = 0 when force ⊥ displacement (θ = 90°); e.g. circular motion with centripetal force',
          'Conservation of mechanical energy: KE + PE = constant (no non-conservative forces)',
          'Energy converts between forms but is never created or destroyed'
        ],
        tips: [
          'Constant velocity → net work = 0 → driving force = resistive force',
          '1 horsepower = 746 W',
          'For springs: PE = ½kx² (k = spring constant, x = extension from natural length)'
        ],
        bestPractices: [
          'Check the angle θ between force and displacement — most errors come from ignoring cos θ',
          'Verify energy conservation: total energy before = total energy after (frictionless system)'
        ]
      },
      {
        chapter: 'Heat',
        formulae: [
          'Heat absorbed/released: Q = mcΔT',
          'Latent heat: Q = mL',
          'Principle of calorimetry: heat lost by hot body = heat gained by cold body',
          'Thermal expansion: ΔL = Lα·ΔT (linear);  ΔA = Aβ·ΔT (area);  ΔV = Vγ·ΔT (volume)',
          'γ = 3α  (coefficient of volume expansion = 3 × linear expansion)'
        ],
        logic: [
          'Specific heat c: energy needed to raise 1 kg of substance by 1°C; water = 4200 J/kg·°C',
          'Latent heat: temperature does NOT change during a phase change',
          'Heat transfer: conduction (solids, contact), convection (fluids, bulk flow), radiation (no medium)',
          'Good absorbers of radiation are also good emitters (black body principle — Kirchhoff\'s Law)'
        ],
        tips: [
          'During melting/boiling: temperature is constant even though heat is being absorbed',
          'Anomalous expansion of water: density maximum at 4°C; expands below 4°C (protects aquatic life)',
          'Latent heat of vaporisation > latent heat of fusion for the same substance'
        ],
        bestPractices: [
          'Convert °C to K only if the formula requires absolute temperature',
          'Write the calorimetry equation (heat lost = heat gained) before substituting values'
        ]
      },
      {
        chapter: 'Sound',
        formulae: [
          'Speed of sound: v = fλ (f = frequency, λ = wavelength)',
          'Speed in air at 0°C ≈ 332 m/s; at t°C: v ≈ 332 + 0.6t m/s',
          'Doppler effect: f_obs = f_source × (v ± v_obs) / (v ∓ v_source)',
          'Echo condition: minimum distance = v/(2 × 10) m for 1/10 s persistence'
        ],
        logic: [
          'Sound is a mechanical, longitudinal wave — needs a medium to travel',
          'Frequency determines pitch; amplitude determines loudness',
          'Ultrasound: f > 20 kHz; Infrasound: f < 20 Hz; audible range: 20 Hz – 20 kHz',
          'Reflection of sound: angle of incidence = angle of reflection (same as light)',
          'Resonance: maximum amplitude when driving frequency = natural frequency of object'
        ],
        tips: [
          'Sound travels fastest in solids > liquids > gases (density and elasticity matter)',
          'Echo: reflected sound heard separately; reverberation: multiple reflections blend together',
          'SONAR uses ultrasound reflections to measure ocean depth: depth = (v × t)/2'
        ],
        bestPractices: [
          'For Doppler effect: use + or − correctly based on whether observer/source is approaching or receding',
          'Always state the unit of frequency (Hz) and wavelength (m)'
        ]
      }
    ],
    Chemistry: [
      {
        chapter: 'Periodic Table',
        html: function() {
          // [Z, symbol, name, mass, valency, type, group, period]
          // type: a=alkali, e=alkalineEarth, t=transition, p=postTransition,
          //       m=metalloid, n=nonmetal, h=halogen, g=nobleGas, l=lanthanide, c=actinide
          const E=[
            [1,'H','Hydrogen','1',1,'n',1,1],[2,'He','Helium','4',0,'g',18,1],
            [3,'Li','Lithium','7',1,'a',1,2],[4,'Be','Beryllium','9',2,'e',2,2],
            [5,'B','Boron','11',3,'m',13,2],[6,'C','Carbon','12',4,'n',14,2],
            [7,'N','Nitrogen','14',3,'n',15,2],[8,'O','Oxygen','16',2,'n',16,2],
            [9,'F','Fluorine','19',1,'h',17,2],[10,'Ne','Neon','20',0,'g',18,2],
            [11,'Na','Sodium','23',1,'a',1,3],[12,'Mg','Magnesium','24',2,'e',2,3],
            [13,'Al','Aluminium','27',3,'p',13,3],[14,'Si','Silicon','28',4,'m',14,3],
            [15,'P','Phosphorus','31','3,5','n',15,3],[16,'S','Sulphur','32','2,4,6','n',16,3],
            [17,'Cl','Chlorine','35.5','1,3,5,7','h',17,3],[18,'Ar','Argon','40',0,'g',18,3],
            [19,'K','Potassium','39',1,'a',1,4],[20,'Ca','Calcium','40',2,'e',2,4],
            [21,'Sc','Scandium','45',3,'t',3,4],[22,'Ti','Titanium','48','2,3,4','t',4,4],
            [23,'V','Vanadium','51','2,3,4,5','t',5,4],[24,'Cr','Chromium','52','2,3,6','t',6,4],
            [25,'Mn','Manganese','55','2,4,7','t',7,4],[26,'Fe','Iron','56','2,3','t',8,4],
            [27,'Co','Cobalt','59','2,3','t',9,4],[28,'Ni','Nickel','59','2,3','t',10,4],
            [29,'Cu','Copper','63.5','1,2','t',11,4],[30,'Zn','Zinc','65',2,'t',12,4],
            [31,'Ga','Gallium','70',3,'p',13,4],[32,'Ge','Germanium','73',4,'m',14,4],
            [33,'As','Arsenic','75','3,5','m',15,4],[34,'Se','Selenium','79',2,'n',16,4],
            [35,'Br','Bromine','80',1,'h',17,4],[36,'Kr','Krypton','84',0,'g',18,4],
            [37,'Rb','Rubidium','85',1,'a',1,5],[38,'Sr','Strontium','88',2,'e',2,5],
            [39,'Y','Yttrium','89',3,'t',3,5],[40,'Zr','Zirconium','91',4,'t',4,5],
            [41,'Nb','Niobium','93','3,5','t',5,5],[42,'Mo','Molybdenum','96','2,3,4,6','t',6,5],
            [43,'Tc','Technetium','98','4,7','t',7,5],[44,'Ru','Ruthenium','101','2,3,4','t',8,5],
            [45,'Rh','Rhodium','103','2,3','t',9,5],[46,'Pd','Palladium','106','2,4','t',10,5],
            [47,'Ag','Silver','108',1,'t',11,5],[48,'Cd','Cadmium','112',2,'t',12,5],
            [49,'In','Indium','115',3,'p',13,5],[50,'Sn','Tin','119','2,4','p',14,5],
            [51,'Sb','Antimony','122','3,5','m',15,5],[52,'Te','Tellurium','128','2,4,6','m',16,5],
            [53,'I','Iodine','127','1,3,5,7','h',17,5],[54,'Xe','Xenon','131',0,'g',18,5],
            [55,'Cs','Caesium','133',1,'a',1,6],[56,'Ba','Barium','137',2,'e',2,6],
            [72,'Hf','Hafnium','178',4,'t',4,6],[73,'Ta','Tantalum','181',5,'t',5,6],
            [74,'W','Tungsten','184','2,4,6','t',6,6],[75,'Re','Rhenium','186','2,4,6,7','t',7,6],
            [76,'Os','Osmium','190','2,3,4','t',8,6],[77,'Ir','Iridium','192','3,4','t',9,6],
            [78,'Pt','Platinum','195','2,4','t',10,6],[79,'Au','Gold','197','1,3','t',11,6],
            [80,'Hg','Mercury','201','1,2','t',12,6],[81,'Tl','Thallium','204','1,3','p',13,6],
            [82,'Pb','Lead','207','2,4','p',14,6],[83,'Bi','Bismuth','209','3,5','p',15,6],
            [84,'Po','Polonium','209','2,4','m',16,6],[85,'At','Astatine','210',1,'h',17,6],
            [86,'Rn','Radon','222',0,'g',18,6],
            [87,'Fr','Francium','223',1,'a',1,7],[88,'Ra','Radium','226',2,'e',2,7],
            [104,'Rf','Rutherfordium','267',4,'t',4,7],[105,'Db','Dubnium','268',5,'t',5,7],
            [106,'Sg','Seaborgium','271',6,'t',6,7],[107,'Bh','Bohrium','272',7,'t',7,7],
            [108,'Hs','Hassium','277','—','t',8,7],[109,'Mt','Meitnerium','276','—','t',9,7],
            [110,'Ds','Darmstadtium','281','—','t',10,7],[111,'Rg','Roentgenium','282','—','t',11,7],
            [112,'Cn','Copernicium','285','—','t',12,7],[113,'Nh','Nihonium','286',3,'p',13,7],
            [114,'Fl','Flerovium','289',4,'p',14,7],[115,'Mc','Moscovium','289',5,'p',15,7],
            [116,'Lv','Livermorium','293',2,'p',16,7],[117,'Ts','Tennessine','294',1,'h',17,7],
            [118,'Og','Oganesson','294',0,'g',18,7],
            // Lanthanides: placed in rows 8+ (rendered separately below main table)
            [57,'La','Lanthanum','139',3,'l',1,8],[58,'Ce','Cerium','140','3,4','l',2,8],
            [59,'Pr','Praseodymium','141',3,'l',3,8],[60,'Nd','Neodymium','144',3,'l',4,8],
            [61,'Pm','Promethium','145',3,'l',5,8],[62,'Sm','Samarium','150','2,3','l',6,8],
            [63,'Eu','Europium','152','2,3','l',7,8],[64,'Gd','Gadolinium','157',3,'l',8,8],
            [65,'Tb','Terbium','159','3,4','l',9,8],[66,'Dy','Dysprosium','163',3,'l',10,8],
            [67,'Ho','Holmium','165',3,'l',11,8],[68,'Er','Erbium','167',3,'l',12,8],
            [69,'Tm','Thulium','169',3,'l',13,8],[70,'Yb','Ytterbium','173','2,3','l',14,8],
            [71,'Lu','Lutetium','175',3,'l',15,8],
            // Actinides
            [89,'Ac','Actinium','227',3,'c',1,9],[90,'Th','Thorium','232',4,'c',2,9],
            [91,'Pa','Protactinium','231','4,5','c',3,9],[92,'U','Uranium','238','3,4,5,6','c',4,9],
            [93,'Np','Neptunium','237','3,4,5,6','c',5,9],[94,'Pu','Plutonium','244','3,4,5,6','c',6,9],
            [95,'Am','Americium','243','2,3,4,5,6','c',7,9],[96,'Cm','Curium','247','3,4','c',8,9],
            [97,'Bk','Berkelium','247','3,4','c',9,9],[98,'Cf','Californium','251',3,'c',10,9],
            [99,'Es','Einsteinium','252',3,'c',11,9],[100,'Fm','Fermium','257',3,'c',12,9],
            [101,'Md','Mendelevium','258',3,'c',13,9],[102,'No','Nobelium','259','2,3','c',14,9],
            [103,'Lr','Lawrencium','266',3,'c',15,9]
          ];
          const TC={'a':'#fee2e2','e':'#fef3c7','t':'#dbeafe','p':'#e8e0f7','m':'#d1fae5','n':'#f0fdf4','h':'#fef9c3','g':'#f1f5f9','l':'#ffedd5','c':'#ffe4e6'};
          const TL={'a':'Alkali','e':'Alk. Earth','t':'Transition','p':'Post-Trans.','m':'Metalloid','n':'Non-metal','h':'Halogen','g':'Noble Gas','l':'Lanthanide','c':'Actinide'};
          const grid={}, lant=[], acti=[];
          E.forEach(([z,sym,name,mass,val,typ,grp,per])=>{
            if(per<=7) grid[`${per}-${grp}`]={z,sym,name,mass,val,typ};
            else if(per===8) lant.push({z,sym,name,mass,val,typ});
            else acti.push({z,sym,name,mass,val,typ});
          });
          const cell=(el)=>{
            if(!el) return '<div class="ptc ptg0"></div>';
            const cbse=el.z<=20;
            return `<div class="ptc" style="background:${TC[el.typ]};${cbse?'outline:2px solid #2563eb;outline-offset:-1px;':''}">
              <span class="ptz">${el.z}</span><span class="pts">${el.sym}</span>
              <span class="ptm">${el.mass}</span><span class="ptv">v:${el.val}</span></div>`;
          };
          let rows='';
          // Row labels: Group numbers
          rows+=`<div class="ptrow"><div class="ptlbl">Per</div>${Array.from({length:18},(_,i)=>`<div class="ptgh">${i+1}</div>`).join('')}</div>`;
          for(let p=1;p<=7;p++){
            let r=`<div class="ptlbl">${p}</div>`;
            for(let g=1;g<=18;g++){
              const el=grid[`${p}-${g}`];
              // Period 6 group 3: lanthanide placeholder; period 7 group 3: actinide placeholder
              if(p===6&&g===3){ r+=`<div class="ptc ptf" style="background:#ffedd5;font-size:9px;line-height:1.2;color:#9a3412;">57–71<br>La–Lu</div>`; continue; }
              if(p===7&&g===3){ r+=`<div class="ptc ptf" style="background:#ffe4e6;font-size:9px;line-height:1.2;color:#9f1239;">89–103<br>Ac–Lr</div>`; continue; }
              r+=el?cell(el):'<div class="ptc ptg0"></div>';
            }
            rows+=`<div class="ptrow">${r}</div>`;
          }
          // Lanthanides/Actinides rows
          const lrow=(arr,label,bg,tc)=>{
            const spacer='<div class="ptc ptg0" style="grid-column:span 3"></div>';
            return `<div class="ptrow">${spacer}<div class="ptlbl" style="font-size:9px;writing-mode:unset;color:${tc}">${label}</div>${arr.map(el=>cell(el)).join('')}</div>`;
          };
          rows+=lrow(lant,'La','#ffedd5','#9a3412');
          rows+=lrow(acti,'Ac','#ffe4e6','#9f1239');
          // Legend
          const legend=Object.entries(TL).map(([k,l])=>`<span style="display:inline-flex;align-items:center;gap:3px;margin:2px 6px 2px 0;font-size:10px;color:#1e293b;">
            <span style="width:12px;height:12px;border-radius:3px;background:${TC[k]};display:inline-block;border:1px solid #ccc;${k==='n'?'border-color:#86efac':''}"></span>${l}</span>`).join('');
          const cbseLegend=`<span style="display:inline-flex;align-items:center;gap:3px;margin:2px 6px 2px 0;font-size:10px;color:#1e293b;">
            <span style="width:12px;height:12px;border-radius:3px;background:#eff6ff;border:2px solid #2563eb;display:inline-block;"></span>CBSE focus (Z 1–20)</span>`;
          return `<style>
            .pt-wrap{overflow-x:auto;margin-bottom:16px;font-family:ui-monospace,SFMono-Regular,monospace;}
            .ptrow{display:grid;grid-template-columns:24px repeat(18,1fr);gap:2px;margin-bottom:2px;}
            .ptlbl{display:flex;align-items:center;justify-content:center;font-size:9px;color:#64748b;font-weight:600;}
            .ptgh{display:flex;align-items:center;justify-content:center;font-size:9px;color:#64748b;font-weight:700;}
            .ptc{display:flex;flex-direction:column;align-items:center;justify-content:center;padding:2px 1px;border-radius:3px;border:1px solid #cbd5e1;min-width:30px;min-height:38px;cursor:default;transition:transform .1s;}
            .ptc:hover{transform:scale(1.25);z-index:10;position:relative;box-shadow:0 4px 12px rgba(0,0,0,.2);}
            .ptg0{background:transparent;border-color:transparent;}
            .ptf{text-align:center;}
            .ptz{font-size:8px;line-height:1;color:#64748b;align-self:flex-start;padding-left:2px;}
            .pts{font-size:13px;font-weight:800;line-height:1.1;color:#1e293b;}
            .ptm{font-size:7.5px;line-height:1;color:#334155;}
            .ptv{font-size:7px;line-height:1;color:#2563eb;font-weight:600;}
            .pt-leg{display:flex;flex-wrap:wrap;gap:2px;margin:8px 0 12px;padding:8px;background:#f8fafc;border-radius:6px;border:1px solid #e2e8f0;}
          </style>
          <div class="pt-wrap">
            <div class="pt-leg">${cbseLegend}${legend}</div>
            <div style="min-width:600px;">${rows}</div>
          </div>`;
        },
        formulae: [],
        logic: [
          'Period = same number of electron shells; properties change systematically across a period',
          'Group = same valence electrons; similar chemical properties down a group',
          'Atomic radius: decreases across a period (more nuclear charge, same shells); increases down a group (more shells)',
          'Ionisation energy: increases across period; decreases down group',
          'Electronegativity: highest at F (top-right), lowest at Fr (bottom-left)'
        ],
        tips: [
          'Metals: left side; non-metals: right side; metalloids along the staircase (B, Si, Ge, As, Sb, Te)',
          'Noble gases (Group 18): full valence shell → chemically inert; used in discharge tubes',
          'Halogens (Group 17): most reactive non-metals; reactivity decreases down the group',
          'Alkali metals (Group 1): most reactive metals; reactivity increases down the group'
        ],
        bestPractices: [
          'Memorise first 20 elements: H He Li Be B C N O F Ne Na Mg Al Si P S Cl Ar K Ca',
          'Link trends: smaller atom → stronger nuclear pull → higher IE and electronegativity'
        ]
      },
      {
        chapter: 'Anions and Cations',
        formulae: [
          'Ion = atom or group that has gained or lost electrons',
          'Cation (+): loses electron(s); formed by metals and NH₄⁺',
          'Anion (−): gains electron(s); formed by non-metals and polyatomic groups'
        ],
        logic: [
          'Valency of a cation = number of electrons lost (charge on cation)',
          'Valency of an anion = number of electrons gained (charge on anion)',
          'Simple ions: single atom (Na⁺, Cl⁻); Polyatomic ions: group of atoms with a charge (SO₄²⁻)',
          'Electrovalency: charge on the ion; used to balance ionic formulae',
          'Cross-multiplication rule: cation charge becomes subscript of anion; anion charge becomes subscript of cation'
        ],
        tips: [
          '── Monovalent Cations (charge +1) ──',
          'H⁺  — Hydrogen ion (proton)',
          'Na⁺ — Sodium ion',
          'K⁺  — Potassium ion',
          'Ag⁺ — Silver ion',
          'Cu⁺ — Cuprous (Copper I)',
          'Hg⁺ — Mercurous (rare; exists as Hg₂²⁺)',
          'NH₄⁺ — Ammonium (polyatomic)',
          '── Divalent Cations (charge +2) ──',
          'Ca²⁺ — Calcium ion',
          'Mg²⁺ — Magnesium ion',
          'Zn²⁺ — Zinc ion',
          'Fe²⁺ — Ferrous (Iron II)',
          'Cu²⁺ — Cupric (Copper II)',
          'Pb²⁺ — Lead II (Plumbous)',
          'Ba²⁺ — Barium ion',
          'Hg²⁺ — Mercuric (Mercury II)',
          'Mn²⁺ — Manganese II',
          'Ni²⁺ — Nickel II',
          'Co²⁺ — Cobalt II',
          '── Trivalent Cations (charge +3) ──',
          'Al³⁺ — Aluminium ion',
          'Fe³⁺ — Ferric (Iron III)',
          'Cr³⁺ — Chromium III',
          'Au³⁺ — Auric (Gold III)',
          '── Monovalent Anions (charge −1) ──',
          'F⁻  — Fluoride',
          'Cl⁻ — Chloride',
          'Br⁻ — Bromide',
          'I⁻  — Iodide',
          'OH⁻ — Hydroxide',
          'NO₃⁻ — Nitrate',
          'NO₂⁻ — Nitrite',
          'HCO₃⁻ — Hydrogen carbonate (Bicarbonate)',
          'CH₃COO⁻ — Acetate (Ethanoate)',
          'MnO₄⁻ — Permanganate',
          'H⁻  — Hydride',
          '── Divalent Anions (charge −2) ──',
          'O²⁻  — Oxide',
          'S²⁻  — Sulphide',
          'SO₄²⁻ — Sulphate',
          'SO₃²⁻ — Sulphite',
          'CO₃²⁻ — Carbonate',
          'CrO₄²⁻ — Chromate',
          'Cr₂O₇²⁻ — Dichromate',
          'S₂O₃²⁻ — Thiosulphate',
          'HPO₄²⁻ — Hydrogen phosphate',
          '── Trivalent Anions (charge −3) ──',
          'PO₄³⁻ — Phosphate',
          'N³⁻  — Nitride',
          'AsO₄³⁻ — Arsenate'
        ],
        bestPractices: [
          'Write ions as: symbol → charge (e.g. Fe²⁺ not Fe+2)',
          'To write a formula: cation first, anion second; cross-multiply charges; simplify if needed',
          'Example: Al³⁺ + SO₄²⁻ → Al₂(SO₄)₃ (cross 3 and 2)',
          'Know variable valency metals: Fe (2,3), Cu (1,2), Pb (2,4), Hg (1,2), Sn (2,4), Cr (2,3,6)',
          'Polyatomic anions ending in -ate have more oxygen than -ite (e.g. SO₄²⁻ vs SO₃²⁻)'
        ]
      },
      {
        chapter: 'Chemical Bonding',
        formulae: [
          'Ionic bond: metal loses electrons (→ cation) + non-metal gains electrons (→ anion)',
          'Covalent bond: sharing of electron pairs between non-metal atoms',
          'Octet rule: atoms gain, lose, or share electrons to achieve 8 valence electrons (2 for H)'
        ],
        logic: [
          'Ionic compounds: high melting points, conduct electricity in molten/aqueous state, brittle',
          'Covalent compounds: lower melting points, poor conductors, can be gases/liquids',
          'Polar covalent bond: unequal sharing due to electronegativity difference',
          'Electrovalency (ionic): number of electrons lost or gained',
          'Covalency: number of electron pairs shared'
        ],
        tips: [
          'Draw Lewis (dot-cross) diagrams for bonding in NaCl, H₂O, CO₂, CH₄',
          'NaCl: Na⁺ + Cl⁻; MgO: Mg²⁺ + O²⁻; AlCl₃: Al³⁺ + 3Cl⁻',
          'Coordinate (dative) bond: both electrons provided by one atom — e.g. NH₃ → BF₃'
        ],
        bestPractices: [
          'Identify bond type from the elements: metal+non-metal → ionic; non-metal+non-metal → covalent',
          'State the valency of each element before drawing the bond'
        ]
      },
      {
        chapter: 'Acids, Bases & Salts',
        formulae: [
          'Acid: produces H⁺ (proton donor); Base: produces OH⁻ (proton acceptor)',
          'Neutralisation: Acid + Base → Salt + Water',
          'Acid + Metal → Salt + H₂;  Acid + Carbonate → Salt + CO₂ + H₂O',
          'pH scale: 0–14;  pH < 7 = acidic, pH 7 = neutral, pH > 7 = basic'
        ],
        logic: [
          'Strong acids (HCl, H₂SO₄, HNO₃) fully ionise; weak acids (CH₃COOH) partially ionise',
          'Strong bases (NaOH, KOH) fully ionise; weak bases (NH₄OH) partially ionise',
          'Amphiprotic (amphoteric): can act as both acid and base — water, aluminium hydroxide',
          'Baking soda (NaHCO₃): mild base; washing soda (Na₂CO₃·10H₂O): stronger base',
          'Bleaching powder Ca(OCl)Cl reacts with CO₂/H₂O to release Cl₂ (bleaching agent)'
        ],
        tips: [
          'Litmus: red in acid, blue in base; Methyl orange: red in acid, yellow in base',
          'CO₂ turns lime water milky: Ca(OH)₂ + CO₂ → CaCO₃↓ + H₂O',
          'Concentrated H₂SO₄ is a dehydrating agent — draws water from substances'
        ],
        bestPractices: [
          'Know the common salt names: NaCl (common salt), Na₂SO₄·10H₂O (Glauber\'s salt), CuSO₄·5H₂O (blue vitriol), ZnSO₄·7H₂O (white vitriol)',
          'For any acid-base MCQ: first identify the type of reaction, then balance'
        ]
      },
      {
        chapter: 'Mole Concept',
        formulae: [
          'Mole = 6.022 × 10²³ particles (Avogadro\'s number, Nₐ)',
          'Molar mass (M) = mass of 1 mole in grams = numerically equal to molecular/atomic mass in u',
          'Number of moles (n) = given mass (m) / molar mass (M)',
          'Number of particles = n × Nₐ',
          'At STP (0°C, 1 atm): 1 mole of any gas = 22.4 L (molar volume)',
          'Percentage composition: % element = (mass of element in 1 mole / molar mass) × 100'
        ],
        logic: [
          'Empirical formula: simplest whole-number ratio of atoms in a compound',
          'Molecular formula = n × empirical formula (n = molecular mass / empirical formula mass)',
          'Stoichiometry: mole ratios from balanced equation used to calculate reactants/products',
          'Limiting reagent: the reactant that is fully consumed first, limiting the product formed'
        ],
        tips: [
          'For empirical formula: convert % to grams, divide by atomic mass, find simplest ratio',
          'Gay-Lussac\'s Law of Combining Volumes: at same T and P, volumes of gases react in simple ratios',
          '22.4 L/mol applies only at STP; at RTP (25°C), use 24 L/mol'
        ],
        bestPractices: [
          'Always write a balanced equation before mole calculations',
          'Show units at each step — mole calculations often lose marks due to unit errors'
        ]
      }
    ],
  'ICSE Mathematics': [
      {
        chapter: 'Mensuration',
        formulae: [
          'Cylinder: V = πr²h,  CSA = 2πrh,  TSA = 2πr(r+h)',
          'Cone: V = ⅓πr²h,  l = √(r²+h²),  CSA = πrl,  TSA = πr(r+l)',
          'Sphere: V = (4/3)πr³,  SA = 4πr²',
          'Hemisphere: V = (2/3)πr³,  CSA = 2πr²,  TSA = 3πr²',
          'Frustum: V = (πh/3)(R²+r²+Rr),  l = √[h²+(R−r)²]'
        ],
        logic: [
          'Slant height l ≠ vertical height h — always relate using Pythagoras: l² = r² + h²',
          'Recasting/melting: volume before = volume after',
          'For combined solids: add volumes; for CSA/TSA: only count exposed surfaces'
        ],
        tips: [
          'Use π = 22/7 unless question specifies otherwise',
          'TSA of combined solid = sum of exposed CSAs + any base areas',
          'Volume of material in hollow solid = outer volume − inner volume'
        ],
        bestPractices: [
          'Write the formula before substituting — ICSE awards formula marks',
          'Double-check units — mix of cm and m is a common trap'
        ]
      },
      {
        chapter: 'Similarity',
        formulae: [
          'If ΔABC ~ ΔPQR: AB/PQ = BC/QR = CA/RP  (ratio = k)',
          'Area ratio: ar(ABC)/ar(PQR) = k² = (AB/PQ)²',
          'Perimeter ratio: P(ABC)/P(PQR) = k',
          'BPT: DE ∥ BC → AD/DB = AE/EC',
          'Angle Bisector: BD/DC = AB/AC'
        ],
        logic: [
          'Similarity criteria: AA, SSS, SAS',
          'Corresponding angles of similar triangles are equal; sides are proportional',
          'AA is sufficient — if two angles match, triangles are similar',
          'Converse of BPT: AD/DB = AE/EC → DE ∥ BC'
        ],
        tips: [
          'In overlapping triangle problems: identify the common angle and parallel lines',
          'Altitude on hypotenuse creates two triangles similar to original and to each other',
          'Write the correspondence carefully: ΔABC ~ ΔPQR means A↔P, B↔Q, C↔R'
        ],
        bestPractices: [
          'State the similarity criterion and write the correspondence before equating sides',
          'After finding k, use k² for areas — do not re-calculate from scratch'
        ]
      },
      {
        chapter: 'Trigonometry (ICSE)',
        formulae: [
          'sin θ = opp/hyp,  cos θ = adj/hyp,  tan θ = opp/adj',
          'sin²θ + cos²θ = 1;  1 + tan²θ = sec²θ;  1 + cot²θ = cosec²θ',
          'Complementary: sin θ = cos(90°−θ);  tan θ = cot(90°−θ)',
          'Heights & Distances: tan(angle) = opposite / adjacent'
        ],
        logic: [
          'All Pythagorean identities derive from dividing sin²θ + cos²θ = 1 by cos²θ or sin²θ',
          'Angle of elevation and depression are alternate interior angles when horizontal lines are parallel — so they are equal'
        ],
        tips: [
          'Prove identities by manipulating one side only — LHS to RHS or vice versa',
          'Convert to sin/cos when stuck on an identity',
          'Standard values at 30°, 45°, 60° — must be memorised'
        ],
        bestPractices: [
          'Write the identity or formula being applied before substituting',
          'For heights & distances: draw a neat diagram with angle and known/unknown sides labelled'
        ]
      },
      {
        chapter: 'Coordinate Geometry (ICSE)',
        formulae: [
          'Distance: d = √[(x₂−x₁)² + (y₂−y₁)²]',
          'Section (internal): ((mx₂+nx₁)/(m+n), (my₂+ny₁)/(m+n))',
          'Midpoint: ((x₁+x₂)/2, (y₁+y₂)/2)',
          'Slope: m = (y₂−y₁)/(x₂−x₁)',
          'Equation of line: y − y₁ = m(x − x₁)',
          'Parallel lines: m₁ = m₂;  Perpendicular: m₁ × m₂ = −1'
        ],
        logic: [
          'Collinear points: slope between any two pairs is the same',
          'Reflection in x-axis: (x,y) → (x,−y); y-axis: (x,y) → (−x,y); origin: (x,y) → (−x,−y)',
          'Reflection in y = x: (x,y) → (y,x)'
        ],
        tips: [
          'ICSE often tests: find the equation of perpendicular bisector or median of a triangle',
          'For locus problems: write the coordinates of a general point and apply the given condition'
        ],
        bestPractices: [
          'Plot the points on a rough sketch before computing distances or slopes',
          'Verify: does the point lie on the line? Substitute into the equation'
        ]
      },
      {
        chapter: 'Statistics (ICSE)',
        formulae: [
          'Mean: x̄ = Σf·x / Σf',
          'Median = L + [(N/2 − cf) / f] × h',
          'Mode = L + [(f₁ − f₀) / (2f₁ − f₀ − f₂)] × h',
          'Quartiles: Q₁ = value at N/4 cumulative frequency; Q₃ = value at 3N/4',
          'Interquartile range: IQR = Q₃ − Q₁',
          'Ogive (cumulative frequency curve) used to find median/quartiles graphically'
        ],
        logic: [
          'Less-than ogive: plot upper class boundaries vs cumulative frequency',
          'Median from ogive: draw horizontal line from N/2 on y-axis to the curve, then drop to x-axis',
          'Histogram and frequency polygon represent frequency distribution graphically'
        ],
        tips: [
          'ICSE often asks for median and quartiles from a cumulative frequency graph',
          'Construct the cf table carefully — errors here cascade into wrong median/quartile',
          'Modal class ≠ mode; apply the formula for the grouped modal value'
        ],
        bestPractices: [
          'Draw the ogive with correctly plotted points — join with a smooth curve, not straight lines',
          'Always state N (total frequency) and N/2 before finding the median class'
        ]
      },
      {
        chapter: 'Probability (ICSE)',
        formulae: [
          'P(E) = n(E) / n(S)',
          'P(Ē) = 1 − P(E)',
          'P(A or B) = P(A) + P(B) − P(A and B)',
          'P(A and B) = P(A) × P(B)  [if A and B are independent]'
        ],
        logic: [
          'Sample space S: set of all possible equally likely outcomes',
          'Mutually exclusive events: P(A and B) = 0;  P(A or B) = P(A) + P(B)',
          'Independent events: occurrence of one does not affect probability of other'
        ],
        tips: [
          'For card problems: 52 cards, 4 suits, 13 cards per suit; 12 face cards total',
          'For dice: sample space = {1,2,3,4,5,6}; for two dice: 36 equally likely outcomes',
          'Tree diagrams help visualise conditional probability in two-stage experiments'
        ],
        bestPractices: [
          'List the sample space for small problems; use counting formulas for larger ones',
          'Verify: all probabilities in any complete set of events sum to 1'
        ]
      },
      {
        chapter: 'Geometric Progressions (GP)',
        formulae: [
          'nth term: aₙ = a·rⁿ⁻¹',
          'Sum of n terms: Sₙ = a(rⁿ−1)/(r−1)  for r ≠ 1',
          'Sum to infinity: S∞ = a/(1−r)  for |r| < 1',
          'Geometric Mean: GM of a and b = √(ab)',
          'Product of all n terms = (a × aₙ)^(n/2)'
        ],
        logic: [
          'GP: each term = previous term × constant ratio r',
          'r = t₂/t₁ = t₃/t₂ (ratio must be constant)',
          '|r| < 1: convergent GP; |r| > 1: divergent GP; r = 1: all terms equal',
          'If a, b, c are in GP then b² = ac (property of geometric mean)'
        ],
        tips: [
          'Take three consecutive GP terms as a/r, a, ar to simplify algebra when product is given',
          'For sum to infinity: check |r| < 1 before applying the formula',
          'GP vs AP: GP has constant ratio; AP has constant difference — do not confuse'
        ],
        bestPractices: [
          'Identify a and r before solving; verify r by dividing any two consecutive terms',
          'After finding n, check it is a positive integer — fractional or negative n is invalid'
        ]
      },
      {
        chapter: 'Matrices',
        formulae: [
          'Order of matrix: m × n (m rows, n columns)',
          'Addition: A + B (same order) — add corresponding elements',
          'Scalar multiplication: kA — multiply each element by k',
          'Matrix multiplication: (A·B)ᵢⱼ = Σ aᵢₖ·bₖⱼ  (A: m×n, B: n×p → AB: m×p)',
          'Transpose: (Aᵀ)ᵢⱼ = Aⱼᵢ  (rows become columns)',
          'Determinant of 2×2: |A| = ad − bc  for A = [[a,b],[c,d]]',
          'Inverse of 2×2: A⁻¹ = (1/|A|) × [[d,−b],[−c,a]]'
        ],
        logic: [
          'AB is defined only when columns of A = rows of B',
          'Matrix multiplication is NOT commutative in general: AB ≠ BA',
          'Identity matrix I: AI = IA = A',
          'A·A⁻¹ = I (inverse only exists if |A| ≠ 0)'
        ],
        tips: [
          'Check orders before multiplying — most errors are order mismatches',
          'Symmetric matrix: A = Aᵀ; Skew-symmetric: A = −Aᵀ',
          'ICSE typically tests 2×2 matrix problems — determinant, inverse, and solving systems'
        ],
        bestPractices: [
          'Write out the multiplication row × column explicitly before simplifying',
          'Verify A·A⁻¹ = I after computing the inverse'
        ]
      }
    ],
  'IB Mathematics': [
      {
        chapter: 'Algebra & Indices',
        formulae: [
          'aᵐ × aⁿ = aᵐ⁺ⁿ;  aᵐ / aⁿ = aᵐ⁻ⁿ;  (aᵐ)ⁿ = aᵐⁿ',
          'a⁰ = 1;  a⁻ⁿ = 1/aⁿ;  a^(p/q) = (ⁿ√a)ᵖ',
          'log_b(xy) = log_b x + log_b y',
          'log_b(x/y) = log_b x − log_b y',
          'log_b(xⁿ) = n·log_b x',
          'Change of base: log_b x = log x / log b = ln x / ln b',
          'log_b b = 1;  log_b 1 = 0'
        ],
        logic: [
          'Logarithm is the inverse of exponentiation: b^y = x ↔ log_b x = y',
          'log of a negative number or zero is undefined over the reals',
          'Solving log equations: check domain after solving — log argument must be > 0 (no extraneous solutions)'
        ],
        tips: [
          'Simplify with the same base before comparing exponents',
          'ln = log_e (natural log); log = log₁₀ (common log) — distinguish clearly',
          'Exponential growth: y = a·bˣ; b > 1 = growth; 0 < b < 1 = decay'
        ],
        bestPractices: [
          'Show each law applied explicitly — IB awards method marks even for wrong answers',
          'Verify by substituting a simple number if unsure of an index law'
        ]
      },
      {
        chapter: 'Functions',
        formulae: [
          'Domain: set of valid inputs; Range: set of actual outputs',
          'Composite: (f∘g)(x) = f(g(x))',
          'Inverse: f⁻¹ exists if f is one-to-one (bijective)',
          'Linear: f(x) = mx + c;  Quadratic: f(x) = ax² + bx + c',
          'Vertex of parabola: (−b/2a, f(−b/2a));  x = −b/2a is axis of symmetry',
          'Exponential: f(x) = aˣ;  Logarithmic: f(x) = log_a x  (inverse of each other)'
        ],
        logic: [
          'Vertical line test: a relation is a function if each vertical line meets the graph at most once',
          'Horizontal line test: a function has an inverse iff each horizontal line meets the graph at most once',
          'Domain of f⁻¹ = range of f; range of f⁻¹ = domain of f',
          'Graph of f⁻¹ is the reflection of graph of f in the line y = x'
        ],
        tips: [
          'For composite functions: work from right to left — g(x) first, then f',
          'To find f⁻¹: swap x and y, then solve for y',
          'Even function: f(−x) = f(x) (symmetric about y-axis); Odd: f(−x) = −f(x) (rotational symmetry)'
        ],
        bestPractices: [
          'Always state the domain restrictions when finding f⁻¹ (e.g. square root → x ≥ 0)',
          'Verify (f∘f⁻¹)(x) = x and (f⁻¹∘f)(x) = x to confirm an inverse'
        ]
      },
      {
        chapter: 'Geometry & Trigonometry',
        formulae: [
          'Area of triangle: A = ½ab sin C',
          'Sine Rule: a/sin A = b/sin B = c/sin C',
          'Cosine Rule: c² = a² + b² − 2ab cos C',
          'Arc length: l = rθ  (θ in radians)',
          'Sector area: A = ½r²θ',
          '180° = π radians;  1° = π/180 rad',
          'Unit circle: (cos θ, sin θ) for angle θ from positive x-axis'
        ],
        logic: [
          'Sine Rule: use with two angles + one side (AAS/ASA), or two sides + non-included angle (SSA)',
          'Cosine Rule: use with two sides + included angle (SAS), or all three sides (SSS)',
          'Ambiguous case (SSA): two possible triangles — check both solutions',
          'SOHCAHTOA applies to right triangles only; Sine/Cosine Rule for general triangles'
        ],
        tips: [
          'For obtuse triangles, prefer the Cosine Rule to avoid the ambiguous case',
          'Bearing: measured clockwise from North; 000° = North, 090° = East',
          'Exact values: sin 30° = ½, sin 45° = √2/2, sin 60° = √3/2 — must be memorised'
        ],
        bestPractices: [
          'Draw and label a clear diagram before choosing a rule',
          'Always verify: sum of all interior angles of triangle = 180°'
        ]
      },
      {
        chapter: 'Statistics & Probability',
        formulae: [
          'Mean: x̄ = Σx / n  (raw data);  x̄ = Σf·x / Σf  (grouped)',
          'Standard deviation: σ = √(Σ(x−x̄)² / n)',
          'Variance: σ² = Σ(x−x̄)² / n',
          'P(A ∪ B) = P(A) + P(B) − P(A ∩ B)',
          'P(A ∩ B) = P(A) × P(B|A)',
          'Conditional: P(B|A) = P(A ∩ B) / P(A)',
          'Binomial: P(X=r) = C(n,r) · pʳ · (1−p)ⁿ⁻ʳ;  Mean = np;  Variance = np(1−p)'
        ],
        logic: [
          'Independent events: P(A ∩ B) = P(A) × P(B)',
          'Mutually exclusive: P(A ∩ B) = 0',
          'Complementary: P(A′) = 1 − P(A)',
          'Binomial distribution: n independent trials, each with probability p of success'
        ],
        tips: [
          'Use tree diagrams for conditional probability — label branches and multiply along paths',
          'Larger σ = more spread; σ = 0 means all data values are identical',
          'IQR = Q₃ − Q₁; outlier if value > Q₃ + 1.5 IQR or < Q₁ − 1.5 IQR'
        ],
        bestPractices: [
          'State whether events are independent or mutually exclusive before choosing the formula',
          'Verify: all probabilities in the sample space sum to 1'
        ]
      }
    ],
    Biology: [
      {
        chapter: 'Cell Biology',
        formulae: [],
        logic: [
          'Cell theory: (1) all organisms made of cells, (2) cell is the basic unit of life, (3) cells arise from pre-existing cells',
          'Prokaryotes: no membrane-bound nucleus (bacteria, archaea)',
          'Eukaryotes: membrane-bound nucleus (plants, animals, fungi, protists)',
          'Mitosis (PMAT): growth, repair, asexual reproduction → 2 genetically identical diploid daughter cells',
          'Meiosis (PMAT I + PMAT II): sexual reproduction → 4 haploid cells with genetic variation'
        ],
        tips: [
          'Organelles: mitochondria (ATP via aerobic respiration), chloroplasts (photosynthesis — plants only), ribosomes (protein synthesis), ER (transport), Golgi (packaging)',
          'Osmosis: water moves from high water potential to low water potential across a semi-permeable membrane',
          'Diffusion: passive movement from high to low concentration; facilitated diffusion uses protein channels',
          'Active transport: moves molecules AGAINST concentration gradient; requires ATP and carrier proteins'
        ],
        bestPractices: [
          'Link each organelle to its function — MCQs often swap mitochondria ↔ chloroplast',
          'Use precise IB terminology: "water potential" not "concentration" for osmosis questions',
          'State which type of cell division and justify: mitosis → growth; meiosis → gametes'
        ]
      },
      {
        chapter: 'Molecular Biology',
        formulae: [
          'DNA replication: semi-conservative (each new DNA has one old + one new strand)',
          'Transcription: DNA → mRNA;  Translation: mRNA → protein (at ribosome)',
          'Complementary base pairing: A−T (DNA), A−U (RNA), G−C'
        ],
        logic: [
          'Central dogma: DNA → (transcription) → mRNA → (translation) → Protein',
          'Codon: 3-base sequence on mRNA coding for one amino acid; 64 codons, 20 amino acids (degeneracy)',
          'Enzyme: biological catalyst — lowers activation energy, not consumed in reaction',
          'Enzyme activity affected by temperature (denaturing above optimum), pH, substrate concentration',
          'ATP: adenosine triphosphate — universal energy currency of the cell'
        ],
        tips: [
          'DNA is double-stranded (double helix); RNA is single-stranded',
          'Introns: non-coding sequences removed in mRNA processing; Exons: coding sequences retained',
          'Induced-fit model of enzyme-substrate binding (more accurate than lock-and-key)'
        ],
        bestPractices: [
          'When given a DNA template, write the mRNA codon (replace T with U), then find the amino acid from the codon table',
          'Distinguish between DNA replication (nucleus, S-phase) and transcription (nucleus) and translation (ribosome)'
        ]
      },
      {
        chapter: 'Genetics & Evolution',
        formulae: [
          'Monohybrid F2 ratio: 3 dominant : 1 recessive (phenotype);  1:2:1 (genotype)',
          'Dihybrid F2 phenotype ratio: 9:3:3:1',
          'Hardy-Weinberg: p² + 2pq + q² = 1;  p + q = 1'
        ],
        logic: [
          "Mendel's Law of Segregation: allele pairs separate during gamete formation",
          "Mendel's Law of Independent Assortment: genes on different chromosomes assort independently",
          'Sex-linked genes: carried on X chromosome; X-linked recessive shows more in males (XY)',
          'Natural selection: heritable variation + selection pressure → change in allele frequency over generations',
          'Evolution: change in allele frequencies in a population over time'
        ],
        tips: [
          'Use a Punnett square — label gametes on top and side before filling in',
          'For sex-linked traits: carrier female = Xᴮ Xᵇ; affected male = Xᵇ Y',
          'Evidence for evolution: fossil record, comparative anatomy, molecular homology, biogeography'
        ],
        bestPractices: [
          'Always state the genotypic ratio AND phenotypic ratio separately',
          'For Hardy-Weinberg: check the five assumptions first (large population, no mutation/selection/migration, random mating)'
        ]
      }
    ],
  English: [
      {
        chapter: 'Tenses — Present, Past & Future',
        formulae: [
          'Simple Present: Subject + V1 (+s/es for he/she/it) — "She writes a letter." Negative/question use do/does. [Gr 8]',
          'Present Continuous: Subject + is/am/are + V-ing — "She is writing a letter." [Gr 8]',
          'Present Perfect: Subject + has/have + V3 — "She has written a letter." [Gr 9]',
          'Present Perfect Continuous: Subject + has/have + been + V-ing — "She has been writing since noon." [Gr 10]',
          'Simple Past: Subject + V2 — "She wrote a letter." Negative/question use did + V1. [Gr 8]',
          'Past Continuous: Subject + was/were + V-ing — "She was writing when I called." [Gr 8]',
          'Past Perfect: Subject + had + V3 — "She had written before he arrived." [Gr 9]',
          'Past Perfect Continuous: Subject + had been + V-ing — "She had been writing for an hour." [Gr 10]',
          'Simple Future: Subject + shall/will + V1 — "She will write a letter." [Gr 8]',
          'Future Continuous: Subject + will be + V-ing — "She will be writing at 5 pm." [Gr 9]',
          'Future Perfect: Subject + will have + V3 — "She will have written it by Monday." [Gr 10]',
          'Future Perfect Continuous: Subject + will have been + V-ing — "By June she will have been writing for a year." [Gr 10]'
        ],
        logic: [
          'Present Perfect vs Simple Past: Present Perfect = unspecified/recent past time with present relevance ("has gone"); Simple Past = definite, finished past time ("went yesterday")',
          'Continuous tenses show an action in progress at a stated moment; Perfect tenses show completion before a reference point; Perfect Continuous shows duration up to that point',
          'Time markers → tense: always/usually/every day/never → Simple Present; now/at present/Look!/Listen! → Present Continuous; since/for/just/already/yet/ever/never → Present Perfect; yesterday/ago/last week/in 2019 → Simple Past',
          '"since" is used with a point in time (since 2020, since Monday); "for" is used with a duration (for two years, for a while) — never interchange them',
          'Sequence of tense: if the main clause is in the past, the subordinate clause is usually also in the past ("He said he was tired") — except for universal truths ("He said the sun rises in the east")',
          'Conditional sentences: Type 1 (If + present, will + V1 — real future); Type 2 (If + past, would + V1 — unreal present); Type 3 (If + past perfect, would have + V3 — unreal past)'
        ],
        tips: [
          '"Yet" is used in questions and negatives ("Has she left yet?"); "already" is used in affirmatives ("She has already left")',
          'Never mix "since" with a duration or "for" with a point in time — this is one of the most common CBSE editing-exercise errors',
          'Stative verbs (know, believe, love, want, belong, seem) are not normally used in continuous forms: say "I know" not "I am knowing"'
        ],
        bestPractices: [
          'Underline the time-marker word in the sentence first, then decide the tense — do not guess from meaning alone',
          'In gap-filling exercises, check the tense of the surrounding sentences (narrative tense) before choosing the verb form',
          'For modal + perfect constructions (should have gone, must have left), remember it is always modal + have + V3, never modal + had'
        ]
      },
      {
        chapter: 'Modals',
        formulae: [
          'Can/Could — ability, permission, possibility: "She can swim." / "Could you help me?" [Gr 8]',
          'May/Might — permission, possibility (might = more uncertain): "You may leave now." / "It might rain." [Gr 8]',
          'Must — strong obligation or logical certainty: "You must wear a seatbelt." / "He must be tired." [Gr 9]',
          'Have to / Has to — external obligation (rule imposed by someone else): "I have to submit the form by Friday." [Gr 9]',
          'Should / Ought to — advice or moral duty: "You should apologise." [Gr 8]',
          'Shall / Will — future, offer, promise: "Shall I open the window?" [Gr 8]',
          'Would — past habit, polite request, hypothetical: "He would walk to school every day." [Gr 9]',
          'Need(n\'t) / Dare — semi-modals of necessity: "You needn\'t come if you\'re busy." [Gr 10]',
          'Used to — past habit that no longer continues: "She used to play the violin." [Gr 9]'
        ],
        logic: [
          'A modal is always followed by the base form (V1) of the verb — never add -s, -ed or "to" directly after a modal (except ought to, used to, have to)',
          'Must (internal, speaker\'s own obligation) vs Have to (external, imposed by rule/authority) — both translate as "must" in meaning but differ in source of obligation',
          'Mustn\'t (prohibition — it is forbidden) vs Don\'t have to (no obligation — free choice, not forbidden) — a very common confusion',
          'Can (ability/informal permission) vs May (formal permission) vs Could/Might (more polite or less certain versions of the same)',
          'Two modals cannot normally be used together (say "will be able to" not "will can")'
        ],
        tips: [
          'For deduction/certainty: must (very sure, positive) — can\'t (very sure, negative) — might/may/could (not sure)',
          '"Had better" + V1 gives strong advice with an implied negative consequence: "You had better leave now (or you will be late)."',
          '"Would rather" + V1 expresses preference: "I would rather stay home."'
        ],
        bestPractices: [
          'In error-correction exercises, check that no "to" follows a modal (wrong: "he can to swim"; right: "he can swim")',
          'Read the full sentence for degree of certainty/obligation intended before picking between must/should/may/might'
        ]
      },
      {
        chapter: 'Subject–Verb Agreement (Concord)',
        formulae: [
          'A singular subject takes a singular verb; a plural subject takes a plural verb — "The boy plays." / "The boys play." [Gr 8]',
          'Two singular subjects joined by "and" take a plural verb: "Ram and Shyam are friends." [Gr 8]',
          'Subjects joined by either/or, neither/nor, or, nor — the verb agrees with the subject nearer to it: "Neither the teacher nor the students were present." [Gr 9]',
          'Collective nouns (team, family, jury, committee) take a singular verb when acting as one unit, plural when members act individually: "The team is playing well." / "The team are arguing among themselves." [Gr 9]',
          'Indefinite pronouns — each, every, either, neither, someone, everybody, nobody — always take a singular verb: "Everyone is ready." [Gr 8]',
          'A fraction/percentage + of + noun — the verb agrees with the noun after "of": "Half the mangoes are rotten." / "Half the class is absent." [Gr 10]',
          'Words joined by "with", "along with", "as well as", "together with" do NOT make the subject plural — the verb agrees with the main subject only: "The captain, along with his team, was praised." [Gr 10]'
        ],
        logic: [
          'Titles of books, names of countries, and amounts of money/distance/time are treated as singular even if plural in form: "The Arabian Nights is a classic." / "Ten thousand rupees is a large sum."',
          '"A number of" + plural noun takes a plural verb (a number of students were absent); "The number of" + plural noun takes a singular verb (the number of students is rising)',
          'When the subject is a clause or gerund phrase, the verb is singular: "Playing games keeps you fit."'
        ],
        tips: [
          'Ignore words in between the subject and the verb (phrases starting with of, with, including) — find the true grammatical subject first',
          '"None" can take a singular or plural verb depending on meaning, but in formal CBSE usage treat it as singular: "None of the students has finished."'
        ],
        bestPractices: [
          'In a long sentence, mentally delete the prepositional phrase between subject and verb to check agreement',
          'Watch out for inverted sentences (there is/are, here comes) — the verb still agrees with the noun that follows it'
        ]
      },
      {
        chapter: 'Determiners',
        formulae: [
          '"A/An" — used before singular countable nouns, first mention, or general reference; "a" before consonant sounds, "an" before vowel sounds ("an hour", "a university"). [Gr 8]',
          '"The" — used for specific/already-mentioned nouns, unique objects (the sun), superlatives (the best), and proper nouns like rivers/mountain ranges/oceans (the Ganga, the Himalayas). [Gr 8]',
          'This/That + singular noun; These/Those + plural noun — this/these for near, that/those for far. [Gr 8]',
          'Some — affirmative sentences and offers ("I have some money", "Would you like some tea?"); Any — negatives and questions ("I don\'t have any money"). [Gr 8]',
          'Much + uncountable noun ("much water"); Many + countable plural noun ("many books"); a lot of/lots of works for both. [Gr 9]',
          'Little/a little + uncountable noun (little hope = almost none, a little hope = some); Few/a few + countable noun (few friends = almost none, a few friends = some). [Gr 9]',
          'All/Both/Half + noun; Each + singular noun (each student); Every + singular noun, implies the whole group. [Gr 9]'
        ],
        logic: [
          'Zero article is used before plural/uncountable nouns for general statements ("Dogs are loyal"), and before most proper nouns, meals, languages, and abstract nouns in general sense',
          'Little/Few (without "a") carry a negative meaning (almost none); a little/a few carry a positive meaning (some, a small amount)',
          '"The" is NOT used before names of countries (unless plural/republic: the USA, the Netherlands, the Philippines) or before continents, cities, single mountains/lakes'
        ],
        tips: [
          'For editing exercises, check every noun phrase for a missing/extra/wrong article — this is one of the most frequently tested error types',
          'Superlative adjectives almost always need "the" before them ("the tallest building")'
        ],
        bestPractices: [
          'Read the noun immediately after the determiner to decide countable/uncountable before choosing much/many or little/few',
          'When in doubt between "a" and "an", say the word aloud — the choice depends on the sound, not the spelling ("an hour" — silent h)'
        ]
      },
      {
        chapter: 'Prepositions',
        formulae: [
          'Time: "in" for months/years/seasons (in May, in 2020); "on" for days/dates (on Monday, on 2 October); "at" for precise clock time/points (at 5 o\'clock, at noon). [Gr 8]',
          'Place: "in" for enclosed spaces (in the box); "on" for surfaces (on the table); "at" for a point/address (at the door, at 221B Baker Street). [Gr 8]',
          'Movement: into, onto, through, across, along, towards. [Gr 8]',
          'Verb + preposition collocations: depend ON, listen TO, look AFTER (take care of), look FOR (search), look INTO (investigate), apply FOR, arrive AT/IN, agree WITH (a person) / TO (a proposal). [Gr 9]',
          'Adjective + preposition: afraid OF, angry WITH (a person) / AT (a situation), good AT, interested IN, famous FOR, proud OF. [Gr 9]',
          'Preposition + gerund: after the verb (after finishing), before leaving, without asking, by working hard, instead of complaining — a preposition is always followed by a V-ing form, not the base verb. [Gr 10]'
        ],
        logic: [
          'A preposition always takes an object (noun, pronoun, or gerund) — never a bare infinitive; say "good at swimming", not "good at swim"',
          'In "in/on/at" for time, the rule moves from largest to smallest unit: in (year/month/season) → on (day/date) → at (exact time)',
          'Some words take different prepositions in British vs everyday Indian usage (e.g. "different from" is the standard form tested in CBSE, though "different than" is common in American English)'
        ],
        tips: [
          'Never end a formal written sentence unnecessarily with a stray preposition in editing/gap-fill exercises where a cleaner structure is expected',
          'Learn verb-preposition pairs as fixed phrases (a single vocabulary unit), not word-by-word translations from Hindi'
        ],
        bestPractices: [
          'When a blank in a cloze/editing exercise is preceded by a verb or adjective you know, recall its fixed preposition rather than guessing from meaning',
          'For time expressions, check whether the noun is a specific date, a day, or a broader period before choosing in/on/at'
        ]
      },
      {
        chapter: 'Conjunctions & Clauses',
        formulae: [
          'Coordinating conjunctions (FANBOYS): For, And, Nor, But, Or, Yet, So — join two independent clauses of equal rank. [Gr 8]',
          'Subordinating conjunctions: because, since, as, although, though, if, unless, when, while, until, so that — introduce a dependent (subordinate) clause. [Gr 9]',
          'Correlative conjunctions (used in pairs): either…or, neither…nor, not only…but also, both…and, whether…or. [Gr 9]',
          'Noun clause — functions as a subject/object of the sentence, usually begins with that/what/who/whether/if: "I know that he is honest." [Gr 10]',
          'Adjective clause — modifies a noun, begins with who/whom/whose/which/that: "The man who called is my uncle." [Gr 10]',
          'Adverb clause — modifies a verb, begins with when/where/why/because/although/if: "She left because she was tired." [Gr 10]'
        ],
        logic: [
          'A clause has its own subject and verb; a phrase does not — this distinguishes clauses from prepositional/participial phrases',
          'A simple sentence has one independent clause; a compound sentence has two or more independent clauses joined by a coordinating conjunction; a complex sentence has one independent clause plus one or more dependent clauses',
          '"Not only…but also" requires parallel grammatical structure on both sides: "She is not only intelligent but also hardworking" (adjective…adjective)'
        ],
        tips: [
          'Do not use "because" and "so" in the same sentence — pick one to show cause-effect ("Because it rained, we stayed in" OR "It rained, so we stayed in", never both)',
          'Relative pronoun "who" refers to people, "which" to things/animals, "that" to either (informal), "whose" shows possession'
        ],
        bestPractices: [
          'When combining two sentences, first decide whether the relationship is addition, contrast, cause-effect, or condition — this decides which conjunction to use',
          'Check comma placement: a comma usually precedes a coordinating conjunction joining two independent clauses, but not before "because" when it starts a subordinate clause at the end of a sentence'
        ]
      },
      {
        chapter: 'Active & Passive Voice',
        formulae: [
          'Active: Subject + Verb + Object. Passive: Object (becomes new subject) + be + V3 + "by" + agent. [Gr 9]',
          'Simple Present passive: is/am/are + V3 — "The letter is written by her."',
          'Simple Past passive: was/were + V3 — "The letter was written by her."',
          'Present Continuous passive: is/am/are + being + V3 — "The letter is being written."',
          'Present Perfect passive: has/have + been + V3 — "The letter has been written."',
          'Future passive: will be + V3 — "The letter will be written."',
          'Modal passive: modal + be + V3 — "The letter must be written."',
          'Imperative passive: Let + object + be + V3 — "Open the door" → "Let the door be opened." [Gr 10]'
        ],
        logic: [
          'Only transitive verbs (verbs that take a direct object) can be changed into the passive voice — intransitive verbs (sleep, arrive, die) cannot',
          'The tense of the sentence never changes during active-passive conversion, only the structure changes',
          'When the agent (doer) is unknown, unimportant, or obvious, it is dropped: "Rice is grown in India" (not "by farmers")',
          'Sentences with two objects (indirect + direct) can form two different passive sentences: "She gave him a book" → "He was given a book" OR "A book was given to him"'
        ],
        tips: [
          'Questions in passive voice: move the auxiliary verb to the front — "Did she write the letter?" → "Was the letter written by her?"',
          'Passive voice is preferred in scientific/formal writing when the action matters more than who performed it'
        ],
        bestPractices: [
          'First identify the tense of the active sentence correctly — an error here cascades into the wrong "be" form in the passive',
          'Check subject-verb agreement in the passive sentence: the new subject (former object) decides singular/plural "be" form'
        ]
      },
      {
        chapter: 'Narration (Direct & Indirect Speech)',
        formulae: [
          'Statement: reporting verb "said" → "said/told + that" — tense shifts one step back (present→past, past→past perfect). [Gr 9]',
          'Yes/No question: reporting verb changes to "asked", add "if/whether", subject before verb, question mark removed: \'He said, "Do you like tea?"\' → "He asked if I liked tea." [Gr 10]',
          'Wh- question: reporting verb "asked", keep the Wh-word, subject-verb order (not question order): \'She said, "Where do you live?"\' → "She asked where I lived." [Gr 10]',
          'Imperative: reporting verb becomes "ordered/requested/advised" + to-infinitive: \'He said, "Shut the door."\' → "He ordered me to shut the door." [Gr 10]',
          'Exclamatory: reporting verb becomes "exclaimed with joy/sorrow that", exclamation removed, "Alas/Hurrah" converted to feeling words: \'She said, "Alas! I have lost my ring."\' → "She exclaimed with sorrow that she had lost her ring." [Gr 10]'
        ],
        logic: [
          'Pronoun changes follow the person speaking and being spoken to: I → he/she, we → they, you → I/we/he/she (depending on context)',
          'Tense back-shift: present simple → past simple, present continuous → past continuous, present perfect → past perfect, simple past → past perfect, will → would, can → could, may → might, must → had to',
          'Time and place words change: now → then, today → that day, tomorrow → the next day, yesterday → the day before, here → there, this → that, these → those, ago → before',
          'No back-shift is needed for universal truths ("She said the earth revolves around the sun") or when the reporting verb is in the present tense'
        ],
        tips: [
          'Always change the inverted commas and punctuation of direct speech into a plain, comma-free reported clause',
          '"Said to" changes to "told" when a listener is mentioned; plain "said" stays "said" when no listener is mentioned'
        ],
        bestPractices: [
          'Convert in this fixed order: reporting verb → conjunction/question word → pronoun → tense → time/place words — doing it out of order causes errors',
          'Re-read the reported sentence to check it reads as a natural, complete sentence, not just a mechanical substitution'
        ]
      },
      {
        chapter: 'Question Tags',
        formulae: [
          'Positive statement → negative tag: "She is happy, isn\'t she?" [Gr 8]',
          'Negative statement → positive tag: "He doesn\'t like tea, does he?" [Gr 8]',
          'The tag repeats the auxiliary/modal verb of the main sentence and the subject as a pronoun: "They have finished, haven\'t they?" [Gr 9]',
          'If there is no auxiliary verb in the main sentence, use do/does/did in the tag: "She sings well, doesn\'t she?" [Gr 9]',
          'Special cases: "I am right," tag = "aren\'t I?"; "Let\'s go," tag = "shall we?"; imperative "Close the door," tag = "will you?"; "Nothing/Nobody" (negative meaning) takes a positive tag: "Nobody called, did they?" [Gr 10]'
        ],
        logic: [
          'A question tag is used to confirm information or seek agreement — the intonation (rising/falling) changes the meaning between a genuine question and a rhetorical check',
          '"There is/are" sentences use "there" in the tag: "There is a problem, isn\'t there?"'
        ],
        tips: [
          'Words like hardly, scarcely, seldom, never, rarely make a sentence grammatically negative even without "not" — so the tag must be positive: "He hardly speaks, does he?"'
        ],
        bestPractices: [
          'Check the main verb/auxiliary of the sentence first, then flip its polarity for the tag, then match the subject pronoun exactly'
        ]
      },
      {
        chapter: 'Editing & Omission (Error Correction)',
        formulae: [
          'Editing task format: a passage with one error per line; underline the incorrect word, write the correction beside it. [Gr 10]',
          'Omission task format: a passage with one word missing per line; mark the gap with a caret (^) and write the missing word. [Gr 10]',
          'Most frequently tested error categories: articles (a/an/the), prepositions, subject-verb agreement, tense forms, plural/singular nouns, and pronoun case. [Gr 9]'
        ],
        logic: [
          'Read the whole line (not just the underlined word) to understand context before deciding the correction — the error is always grammatical, never a spelling mistake',
          'For omission exercises, missing words are typically small function words: articles, prepositions, auxiliary verbs (is/was/has), or conjunctions',
          'The correction should fit the exact grammatical slot — check number (singular/plural), tense, and part of speech before finalising'
        ],
        tips: [
          'Common patterns to check first: missing "the" before superlatives, wrong preposition after a fixed verb, singular verb with plural subject, wrong tense in a narrative passage',
          'Write only the corrected word, not the whole phrase, unless the exercise instructions ask for the full phrase'
        ],
        bestPractices: [
          'Practise identifying error types by category (article/preposition/tense/agreement) rather than memorising specific sentences — the categories repeat across papers',
          'Double-check your correction by re-reading the full corrected sentence aloud to confirm it now sounds grammatically complete'
        ]
      },
      {
        chapter: 'Non-Finite Verbs — Gerund, Infinitive & Participle',
        formulae: [
          'Gerund (V-ing used as a noun): "Swimming is good exercise." / "I enjoy reading." — can be subject, object, or object of a preposition. [Gr 9]',
          'Infinitive (to + V1): "To err is human." / "She wants to dance." — can act as noun, adjective, or adverb. [Gr 9]',
          'Present Participle (V-ing used as an adjective): "The barking dog scared the child." [Gr 8]',
          'Past Participle (V3 used as an adjective): "The broken window let in rain." [Gr 8]',
          'Perfect Participle (having + V3): "Having finished her homework, she went out to play." [Gr 10]'
        ],
        logic: [
          'Certain verbs are always followed by a gerund: enjoy, avoid, finish, suggest, admit, deny, consider, mind, practise, risk',
          'Certain verbs are always followed by an infinitive: want, decide, hope, plan, promise, refuse, agree, manage, offer',
          'Some verbs can take either with a change in meaning: "stop to smoke" (pause in order to smoke) vs "stop smoking" (quit the habit)',
          'A preposition is always followed by a gerund, never a plain infinitive: "good at swimming", "interested in learning", "instead of complaining"'
        ],
        tips: [
          'If a sentence starts with a V-ing form acting as the subject, it must be treated as singular for verb agreement: "Reading books is her hobby."',
          'Dangling participles (a participle phrase with no clear subject to modify) are a common error: "Walking to school, the rain started" should be "Walking to school, I got caught in the rain."'
        ],
        bestPractices: [
          'When unsure whether a verb takes gerund or infinitive, learn it as part of a fixed phrase rather than translating word-for-word',
          'Check that every participle phrase clearly modifies the noun right next to it to avoid a dangling modifier'
        ]
      },
      {
        chapter: 'Sentence Types & Transformation',
        formulae: [
          'Simple sentence — one subject, one finite verb (one independent clause): "She sings well." [Gr 8]',
          'Compound sentence — two or more independent clauses joined by a coordinating conjunction: "She sings well, and she dances too." [Gr 8]',
          'Complex sentence — one independent clause + one or more dependent clauses: "She sings well although she has never had lessons." [Gr 9]',
          'Assertive → Negative: add "not" appropriately, or use a negative word ("all" → "not a single…is left out"). [Gr 9]',
          'Assertive → Interrogative: invert subject and auxiliary, add question mark; if no auxiliary, add do/does/did. [Gr 9]',
          'Assertive → Exclamatory: begin with What/How, rearrange for emphasis: "It is a beautiful flower." → "What a beautiful flower it is!" [Gr 10]'
        ],
        logic: [
          'To combine simple sentences into a compound sentence, choose the coordinating conjunction that matches the logical relationship (addition = and, contrast = but, choice = or, result = so)',
          'To combine into a complex sentence, convert one clause into a subordinate clause using a relative pronoun (who/which/that) or subordinating conjunction (because/although/when/if)',
          'Degree of comparison transformation: Positive ("no other boy is as tall as Ram") ↔ Comparative ("Ram is taller than any other boy") ↔ Superlative ("Ram is the tallest boy") — must keep the same overall meaning'
        ],
        tips: [
          'When converting positive to superlative, remember to add "the" before the superlative adjective, and change "any other" to nothing (Ram is the tallest of all boys)',
          'When converting a sentence with "too…to" into "so…that", flip the meaning correctly: "He is too weak to walk" = "He is so weak that he cannot walk"'
        ],
        bestPractices: [
          'Read the instruction carefully — "rewrite as directed" questions specify exactly which sentence type or degree is required; do not change more than asked',
          'After transforming, re-read the new sentence to confirm the meaning of the original sentence has not changed'
        ]
      },
      {
        chapter: 'Commonly Confused Words & Usage',
        formulae: [
          '"Their" (possession) vs "There" (place) vs "They\'re" (they are). [Gr 8]',
          '"Its" (possession) vs "It\'s" (it is/it has). [Gr 8]',
          '"Your" (possession) vs "You\'re" (you are). [Gr 8]',
          '"Effect" (noun — result) vs "Affect" (verb — to influence). [Gr 9]',
          '"Fewer" (countable nouns) vs "Less" (uncountable nouns): "fewer chairs", "less water". [Gr 9]',
          '"Lay" (to place something — takes an object) vs "Lie" (to recline — no object); past forms: lay→laid, lie→lay (this is why it is confusing). [Gr 10]',
          '"Farther" (physical distance) vs "Further" (figurative/additional): "further discussion", "farther away". [Gr 10]'
        ],
        logic: [
          'Homophones (words that sound alike but differ in spelling and meaning) are a major source of error in written English — memorise them in contrastive pairs, never in isolation',
          'Countable vs uncountable distinction governs many word choices: few/fewer/many for countables, little/less/much for uncountables'
        ],
        tips: [
          'To remember its/it\'s: mentally expand the sentence — if you can say "it is" or "it has" in its place, use the apostrophe',
          'To remember affect/effect: Affect is an Action (verb); Effect is the End result (noun)'
        ],
        bestPractices: [
          'Proofread written answers specifically for homophone slips — they are invisible when reading for meaning but easily caught when reading word by word'
        ]
      }
    ],
  Hindi: [
      {
        chapter: 'वर्ण-विचार (स्वर, व्यंजन एवं उच्चारण)',
        formulae: [
          'स्वर (11): अ, आ, इ, ई, उ, ऊ, ऋ, ए, ऐ, ओ, औ — जिनके उच्चारण में किसी अन्य वर्ण की सहायता नहीं ली जाती। [कक्षा 8]',
          'ह्रस्व स्वर (मात्रा में कम समय): अ, इ, उ, ऋ — दीर्घ स्वर (अधिक समय): आ, ई, ऊ, ए, ऐ, ओ, औ। [कक्षा 8]',
          'व्यंजन (33+): क वर्ग (क, ख, ग, घ, ङ) से लेकर ह तक — जिनके उच्चारण में स्वर की सहायता आवश्यक होती है। [कक्षा 8]',
          'उच्चारण-स्थान के आधार पर वर्गीकरण: कंठ्य (क वर्ग), तालव्य (च वर्ग), मूर्धन्य (ट वर्ग), दंत्य (त वर्ग), ओष्ठ्य (प वर्ग)। [कक्षा 9]',
          'संयुक्त व्यंजन: क्ष (क्+ष), त्र (त्+र), ज्ञ (ज्+ञ), श्र (श्+र)। [कक्षा 8]',
          'अनुस्वार (ं) और अनुनासिक (ँ) — अनुस्वार शुद्ध नासिक्य ध्वनि, अनुनासिक स्वर सहित नासिक्य उच्चारण। [कक्षा 9]'
        ],
        logic: [
          'स्वर स्वतंत्र रूप से बोले जा सकते हैं; व्यंजन के उच्चारण में सदैव किसी न किसी स्वर की सहायता आवश्यक होती है (क = क् + अ)',
          'हिंदी वर्णमाला में मात्राएँ स्वरों के ह्रस्व/दीर्घ रूप का प्रतिनिधित्व करती हैं जब वे व्यंजन के साथ जुड़ती हैं',
          'घोष (सघोष) व्यंजन (ग, घ, ज, झ आदि) उच्चारण में स्वर-तंत्रियों का कंपन होता है; अघोष (क, ख, च, छ आदि) में नहीं'
        ],
        tips: [
          'स्वर याद रखने की सरल विधि: पहले ह्रस्व (अ, इ, उ, ऋ), फिर दीर्घ (आ, ई, ऊ), फिर संयुक्त (ए, ऐ, ओ, औ)',
          'उच्चारण-स्थान पहचानने के लिए वर्ग के पहले अक्षर को ध्यान से बोलें — जीभ जहाँ स्पर्श करे, वही स्थान'
        ],
        bestPractices: [
          'वर्तनी (स्पेलिंग) की शुद्धता के लिए मात्राओं (ि, ी, ु, ू आदि) का सही स्थान याद रखें — यह परीक्षा में सबसे अधिक अंक कटने का कारण है',
          'संयुक्ताक्षर लिखते समय आधे व्यंजन का सही रूप प्रयोग करें (क् + ष = क्ष, न कि क्श)'
        ]
      },
      {
        chapter: 'संधि (स्वर, व्यंजन एवं विसर्ग संधि)',
        formulae: [
          'संधि की परिभाषा: दो निकटवर्ती वर्णों (स्वर या व्यंजन) के मेल से होने वाला विकार/परिवर्तन संधि कहलाता है। [कक्षा 9]',
          'स्वर संधि — दीर्घ संधि: अ/आ + अ/आ = आ (विद्या+आलय = विद्यालय); गुण संधि: अ/आ + इ/ई = ए (नर+इंद्र = नरेंद्र), अ/आ + उ/ऊ = ओ (सूर्य+उदय = सूर्योदय); वृद्धि संधि: अ/आ + ए/ऐ = ऐ (एक+एक = एकैक), अ/आ + ओ/औ = औ (परम+औषध = परमौषध); यण संधि: इ/ई+असमान स्वर = य्, उ/ऊ+असमान स्वर = व् (यदि+अपि = यद्यपि)। [कक्षा 9]',
          'व्यंजन संधि: जब व्यंजन के साथ स्वर या व्यंजन मिलकर परिवर्तन करता है — जगत्+ईश = जगदीश, सत्+जन = सज्जन, दिक्+अंत = दिगंत। [कक्षा 10]',
          'विसर्ग संधि: विसर्ग (:) के आगे स्वर/व्यंजन आने पर होने वाला परिवर्तन — मनः+रथ = मनोरथ, निः+रोग = निरोग, निः+चल = निश्चल। [कक्षा 10]'
        ],
        logic: [
          'संधि-विच्छेद (संधि को अलग करना) करते समय पहले यह पहचानें कि मेल स्वर+स्वर, व्यंजन+स्वर/व्यंजन, या विसर्ग से जुड़ा है',
          'गुण संधि में परिणामी स्वर हमेशा "ए" या "ओ" होता है; वृद्धि संधि में हमेशा "ऐ" या "औ" — यह भेद याद रखने से पहचान आसान होती है',
          'व्यंजन संधि में अक्सर पहले शब्द का अंतिम वर्ण अगले शब्द के पहले वर्ण के अनुसार बदलता है (सत्+चित् = सच्चित्)'
        ],
        tips: [
          'दीर्घ संधि में दोनों वर्ण समान होने चाहिए (अ+अ, आ+आ, अ+आ) — परिणाम सदैव संगत दीर्घ स्वर',
          'विसर्ग संधि याद रखने की कुंजी: विसर्ग के बाद कोमल/घोष वर्ण आने पर विसर्ग प्रायः "ओ" या "र" में बदलता है'
        ],
        bestPractices: [
          'संधि करने और संधि-विच्छेद करने दोनों का अभ्यास करें — परीक्षा में दोनों प्रकार के प्रश्न पूछे जाते हैं',
          'प्रत्येक संधि के 3-4 प्रामाणिक उदाहरण कंठस्थ रखें ताकि नए शब्दों में भी पैटर्न पहचान सकें'
        ]
      },
      {
        chapter: 'समास (छह भेद)',
        formulae: [
          'समास की परिभाषा: दो या दो से अधिक शब्दों के मेल से बनने वाला एक नया, संक्षिप्त शब्द जिसमें कारक-चिह्न (विभक्ति) लुप्त हो जाते हैं। [कक्षा 9]',
          'अव्ययीभाव समास: पहला पद प्रधान, संपूर्ण पद अव्यय बन जाता है — यथाशक्ति (शक्ति के अनुसार), प्रतिदिन (प्रत्येक दिन)। [कक्षा 9]',
          'तत्पुरुष समास: दूसरा पद प्रधान, कारक-चिह्न का लोप — राजपुत्र (राजा का पुत्र), विद्यालय (विद्या के लिए आलय)। [कक्षा 9]',
          'कर्मधारय समास: दोनों पद विशेषण-विशेष्य या उपमान-उपमेय संबंध में, दूसरा पद प्रधान — नीलकमल (नीला है जो कमल), चंद्रमुख (चंद्र जैसा मुख)। [कक्षा 10]',
          'द्विगु समास: पहला पद संख्यावाचक, समूह/समाहार का बोध — नवरात्र (नौ रात्रियों का समूह), त्रिभुज (तीन भुजाओं का समूह)। [कक्षा 10]',
          'द्वंद्व समास: दोनों पद प्रधान, "और" का लोप — माता-पिता (माता और पिता), राम-लक्ष्मण। [कक्षा 9]',
          'बहुव्रीहि समास: कोई पद प्रधान नहीं, संपूर्ण पद किसी अन्य (तीसरे) अर्थ की ओर संकेत करता है — दशानन (दस आनन वाला अर्थात् रावण), चक्रपाणि (चक्र है पाणि में जिसके अर्थात् विष्णु)। [कक्षा 10]'
        ],
        logic: [
          'तत्पुरुष और बहुव्रीहि में भ्रम होता है: तत्पुरुष में समास का अर्थ स्वयं समास के भीतर के पदों से निकलता है, बहुव्रीहि में अर्थ किसी बाहरी/तीसरे व्यक्ति-वस्तु की ओर संकेत करता है',
          'कर्मधारय और द्विगु दोनों में पहला पद विशेषण जैसा होता है, पर द्विगु में पहला पद सदैव संख्यावाचक होता है, कर्मधारय में नहीं',
          'द्वंद्व समास पहचानने की सरल कसौटी: दोनों पदों के बीच "और" जोड़कर अर्थ पूर्ण बनता हो'
        ],
        tips: [
          'समास का विग्रह (विस्तार) करते समय कारक-चिह्न (का, के, की, में, पर आदि) को पुनः जोड़ें — यही समास-विग्रह कहलाता है',
          'बहुव्रीहि पहचानने की तरकीब: विग्रह में "जिसका/जिसके/जो...वह" जैसे वाक्यांश का प्रयोग होता है'
        ],
        bestPractices: [
          'प्रत्येक भेद के कम से कम 5 उदाहरण याद करें और उनका विग्रह लिखने का अभ्यास करें',
          'परीक्षा में समास पहचानने के लिए पहले विग्रह लिखें, फिर यह देखें कि कौन-सा पद प्रधान है'
        ]
      },
      {
        chapter: 'उपसर्ग और प्रत्यय',
        formulae: [
          'उपसर्ग: शब्द के आरंभ में जुड़कर नया अर्थ देने वाला शब्दांश — प्र, परा, अप, सम, अनु, अव, निर्/निस्, दुर्/दुस्, वि, आ, नि, अधि, सु, उत्, अभि, प्रति, अति, उप। [कक्षा 8]',
          'उदाहरण: प्र+गति=प्रगति, सु+पुत्र=सुपुत्र, दुर्+आचार=दुराचार, अनु+गमन=अनुगमन, वि+सम्=विषम। [कक्षा 8]',
          'प्रत्यय: शब्द के अंत में जुड़कर नया शब्द बनाने वाला शब्दांश — कृत् प्रत्यय (क्रिया से) और तद्धित प्रत्यय (संज्ञा/विशेषण से)। [कक्षा 9]',
          'कृत् प्रत्यय उदाहरण: लिख+अक=लेखक, पढ़+आई=पढ़ाई, खेल+आड़ी=खिलाड़ी। [कक्षा 9]',
          'तद्धित प्रत्यय उदाहरण: बुद्धि+मान=बुद्धिमान, समाज+इक=सामाजिक, मानव+ता=मानवता, दूध+वाला=दूधवाला। [कक्षा 10]'
        ],
        logic: [
          'उपसर्ग शब्द के अर्थ को बदलता या विशिष्ट करता है, पर स्वयं स्वतंत्र शब्द नहीं होता (जैसे "प्र" अकेले प्रयोग नहीं होता)',
          'प्रत्यय शब्द की श्रेणी (संज्ञा/विशेषण/क्रिया) भी बदल सकता है — जैसे क्रिया "पढ़ना" से संज्ञा "पढ़ाई" बनना',
          'एक ही मूल शब्द में उपसर्ग और प्रत्यय दोनों जुड़ सकते हैं: सु+फल+दायक = सुफलदायक'
        ],
        tips: [
          'संस्कृत के प्रमुख उपसर्ग (प्र, परा, अप, सम, अनु, अव आदि) कंठस्थ करें — परीक्षा में शब्द-निर्माण प्रश्नों का आधार यही हैं',
          'प्रत्यय पहचानने के लिए शब्द को मूल धातु/शब्द और शेष अंश में विभाजित करने का अभ्यास करें'
        ],
        bestPractices: [
          'नए शब्द बनाने के प्रश्नों में सही उपसर्ग/प्रत्यय चुनने से पहले शब्द का अर्थ पहले समझ लें',
          'उपसर्ग और प्रत्यय की सूचियाँ अलग-अलग तालिका बनाकर याद करें, ताकि परीक्षा में भ्रम न हो'
        ]
      },
      {
        chapter: 'संज्ञा, सर्वनाम एवं विशेषण',
        formulae: [
          'संज्ञा के भेद: व्यक्तिवाचक (राम, दिल्ली), जातिवाचक (लड़का, नदी), भाववाचक (सुंदरता, बुढ़ापा), समूहवाचक (सेना, भीड़), द्रव्यवाचक (सोना, पानी)। [कक्षा 8]',
          'लिंग: पुल्लिंग एवं स्त्रीलिंग — वचन: एकवचन एवं बहुवचन — कारक: कर्ता, कर्म, करण, संप्रदान, अपादान, संबंध, अधिकरण, संबोधन (8 कारक, प्रत्येक की विभक्ति चिह्न सहित)। [कक्षा 9]',
          'सर्वनाम के भेद: पुरुषवाचक (मैं, तू, वह), निश्चयवाचक (यह, वह), अनिश्चयवाचक (कोई, कुछ), संबंधवाचक (जो...वह), प्रश्नवाचक (कौन, क्या), निजवाचक (आप, स्वयं)। [कक्षा 8]',
          'विशेषण के भेद: गुणवाचक (सुंदर, काला), संख्यावाचक (पाँच, कुछ), परिमाणवाचक (थोड़ा, सारा), सार्वनामिक (यह, वह पुस्तक)। [कक्षा 8]',
          'विशेषण की अवस्थाएँ: मूलावस्था (अच्छा), उत्तरावस्था/तुलनात्मक (अच्छा से बेहतर — "अधिक अच्छा"), उत्तमावस्था/सर्वोत्तम ("सबसे अच्छा")। [कक्षा 9]'
        ],
        logic: [
          'कारक की पहचान क्रिया से शब्द का संबंध देखकर होती है — कर्ता क्रिया करता है, कर्म पर क्रिया का प्रभाव पड़ता है, करण साधन है जिससे क्रिया होती है',
          'सार्वनामिक विशेषण और सर्वनाम में भेद: जब सर्वनाम किसी संज्ञा के पहले आकर उसकी विशेषता बताए (यह पुस्तक), तब वह सार्वनामिक विशेषण है, स्वतंत्र सर्वनाम नहीं',
          'भाववाचक संज्ञा प्रायः विशेषण/क्रिया में प्रत्यय जोड़कर बनती है (सुंदर+ता=सुंदरता, मीठा+पन=मिठास)'
        ],
        tips: [
          'आठों कारकों के विभक्ति-चिह्न तालिका बनाकर याद रखें: कर्ता(ने), कर्म(को), करण(से/द्वारा), संप्रदान(के लिए), अपादान(से-अलगाव), संबंध(का/की/के), अधिकरण(में/पर), संबोधन(हे/अरे)',
          'लिंग-निर्णय में संदेह होने पर वाक्य में प्रयुक्त क्रिया के रूप से जाँच करें (गया/गई, अच्छा/अच्छी)'
        ],
        bestPractices: [
          'पद-परिचय लिखते समय क्रम याद रखें: शब्द भेद → लिंग → वचन → कारक/काल (जो लागू हो) → संबंधित शब्द (विशेष्य/क्रिया)',
          'हर कारक के लिए कम से कम दो उदाहरण वाक्य में प्रयोग करके अभ्यास करें'
        ]
      },
      {
        chapter: 'क्रिया और काल',
        formulae: [
          'क्रिया के भेद: सकर्मक (कर्म सहित — "राम पुस्तक पढ़ता है"), अकर्मक (कर्म रहित — "बच्चा सोता है")। [कक्षा 8]',
          'काल के तीन मुख्य भेद: वर्तमान काल, भूतकाल, भविष्यत् काल — प्रत्येक के सामान्य, अपूर्ण (जारी) और पूर्ण उपभेद। [कक्षा 8]',
          'सामान्य वर्तमान: वह पढ़ता है। अपूर्ण वर्तमान: वह पढ़ रहा है। पूर्ण वर्तमान: उसने पढ़ लिया है। संदिग्ध वर्तमान: वह पढ़ता होगा। [कक्षा 9]',
          'सामान्य भूत: वह पढ़ा। अपूर्ण भूत: वह पढ़ रहा था। पूर्ण भूत: उसने पढ़ लिया था। संदिग्ध भूत: वह पढ़ा होगा। हेतुहेतुमद् भूत: यदि वह पढ़ता तो पास होता। [कक्षा 10]',
          'सामान्य भविष्यत्: वह पढ़ेगा। संभाव्य भविष्यत्: वह पढ़े। अपूर्ण भविष्यत्: वह पढ़ रहा होगा। [कक्षा 9]'
        ],
        logic: [
          'सकर्मक/अकर्मक की पहचान: क्रिया से पूछें "क्या/किसे" — उत्तर मिले तो सकर्मक (कर्म है), न मिले तो अकर्मक',
          'प्रत्येक काल की पहचान क्रिया के अंतिम रूप (रहा है/रहा था/चुका है/गा/एगा आदि) से होती है, न कि केवल समय-सूचक शब्दों से',
          'संयुक्त क्रिया (दो क्रियाओं का मेल, जैसे "उठ बैठा", "खा लिया") एक ही क्रिया की तरह कार्य करती है'
        ],
        tips: [
          'हेतुहेतुमद् भूत काल पहचानने की कुंजी: वाक्य में "यदि...तो" जैसी शर्त और काल्पनिक परिणाम होता है',
          'वाच्य (कर्तृ/कर्म/भाव) के साथ काल बदलने पर क्रिया रूप में जो अंतर आता है, उसका अलग से अभ्यास करें'
        ],
        bestPractices: [
          'काल पहचानने के लिए वाक्य के अंत की क्रिया को रेखांकित कर उसका रूप विश्लेषण करने की आदत डालें',
          'हर काल के 2-3 उदाहरण वाक्य स्वयं बनाने का अभ्यास करें ताकि पहचान में भ्रम न हो'
        ]
      },
      {
        chapter: 'वाच्य (कर्तृवाच्य, कर्मवाच्य, भाववाच्य)',
        formulae: [
          'कर्तृवाच्य: क्रिया का रूप कर्ता के अनुसार बदलता है, कर्ता प्रधान होता है — "राम पत्र लिखता है।" [कक्षा 10]',
          'कर्मवाच्य: क्रिया का रूप कर्म के अनुसार बदलता है, कर्ता के साथ "द्वारा/से" जुड़ता है — "राम द्वारा पत्र लिखा जाता है।" [कक्षा 10]',
          'भाववाच्य: क्रिया सदैव एकवचन, पुल्लिंग, अन्यपुरुष रहती है; प्रायः अकर्मक क्रिया के साथ, कर्ता "से" सहित — "मुझसे चला नहीं जाता।" [कक्षा 10]',
          'कर्मवाच्य बनाने का सूत्र: कर्ता+द्वारा + कर्म + क्रिया का "जाना" रूप (काल के अनुसार) — जैसे लिखा जाता है/लिखा गया/लिखा जाएगा। [कक्षा 10]',
          'भाववाच्य केवल अकर्मक क्रियाओं से बनता है और इसका कोई कर्म नहीं होता — "मुझसे हँसा नहीं जाता", "उससे बैठा नहीं गया।" [कक्षा 10]'
        ],
        logic: [
          'भाववाच्य और कर्मवाच्य में भेद: भाववाच्य में क्रिया अकर्मक और कर्म अनुपस्थित होता है; कर्मवाच्य में क्रिया सकर्मक होती है और कर्म स्पष्ट रूप से उपस्थित रहता है',
          'वाच्य-परिवर्तन में मूल वाक्य का काल कभी नहीं बदलता, केवल वाक्य की संरचना (कर्ता/कर्म प्रधानता) बदलती है',
          'कर्तृवाच्य को कर्मवाच्य में बदलते समय कर्ता के साथ "ने" की जगह "के द्वारा/से" तथा क्रिया के साथ "जाना" धातु जुड़ती है'
        ],
        tips: [
          'भाववाच्य पहचानने की सरल कसौटी: वाक्य में "से" + क्रिया का "नहीं जाता/नहीं गया" रूप और कोई कर्म (वस्तु) नहीं होता',
          'वाच्य बदलते समय क्रिया के काल को ध्यान से देखें — भूतकाल में "गया", वर्तमान में "जाता है", भविष्यत् में "जाएगा"'
        ],
        bestPractices: [
          'तीनों वाच्यों के बीच रूपांतरण का अभ्यास एक ही मूल वाक्य से बार-बार करें (कर्तृ→कर्म→भाव)',
          'परीक्षा में वाच्य पहचानने से पहले पहले क्रिया सकर्मक है या अकर्मक, यह जाँच लें'
        ]
      },
      {
        chapter: 'वाक्य भेद एवं वाक्य-रूपांतरण',
        formulae: [
          'रचना के आधार पर वाक्य भेद: सरल वाक्य (एक उद्देश्य + एक विधेय, कोई योजक नहीं), संयुक्त वाक्य (दो स्वतंत्र उपवाक्य "और/तथा/या/फिर भी" से जुड़े), मिश्र वाक्य (एक प्रधान उपवाक्य + एक/अधिक आश्रित उपवाक्य "जो/कि/जब/यदि/क्योंकि" से जुड़े)। [कक्षा 10]',
          'अर्थ के आधार पर वाक्य भेद: विधानवाचक, निषेधवाचक, प्रश्नवाचक, विस्मयादिवाचक, आज्ञावाचक, इच्छावाचक, संदेहवाचक, संकेतवाचक। [कक्षा 9]',
          'सरल वाक्य में एक ही क्रिया प्रधान होती है; मिश्र वाक्य में आश्रित उपवाक्य प्रधान उपवाक्य पर निर्भर करता है और अकेला अर्थपूर्ण नहीं होता। [कक्षा 10]'
        ],
        logic: [
          'सरल→मिश्र रूपांतरण: संयोजक क्रिया रूप (कर, करके) को आश्रित उपवाक्य में विस्तारित करें — "सोकर उठा" → "जब वह सोकर उठा"',
          'मिश्र→संयुक्त रूपांतरण: "जो...वह/जब...तब" के स्थान पर "और/इसलिए" जैसे समुच्चयबोधक का प्रयोग करें',
          'संयुक्त→सरल रूपांतरण: दो स्वतंत्र उपवाक्यों में से एक को संयोजक क्रिया (करके/कर) के रूप में समाहित करें'
        ],
        tips: [
          'मिश्र वाक्य पहचानने की कुंजी: "जो-वह", "जब-तब", "जैसे-वैसे", "यदि-तो", "क्योंकि", "कि" जैसे युग्म-योजक शब्द खोजें',
          'संयुक्त वाक्य पहचानने की कुंजी: "और", "तथा", "या", "अथवा", "फिर भी", "इसलिए", "परंतु" जैसे समुच्चयबोधक अव्यय खोजें'
        ],
        bestPractices: [
          'रूपांतरण करते समय मूल वाक्य का अर्थ न बदले, यह बार-बार जाँचें',
          'एक ही वाक्य के तीनों रूप (सरल/संयुक्त/मिश्र) लिखने का अभ्यास करें ताकि परीक्षा में किसी भी दिशा में प्रश्न आए तो कठिनाई न हो'
        ]
      },
      {
        chapter: 'अलंकार',
        formulae: [
          'अलंकार की परिभाषा: वे भाषिक चमत्कार/युक्तियाँ जो काव्य की शोभा बढ़ाती हैं। मुख्यतः शब्दालंकार और अर्थालंकार दो भेद। [कक्षा 9]',
          'यमक अलंकार: एक ही शब्द का वाक्य में एक से अधिक बार भिन्न-भिन्न अर्थों में प्रयोग — "काली घटा का घमंड घटा।" [कक्षा 9]',
          'श्लेष अलंकार: एक ही शब्द के एक साथ (एक ही बार प्रयोग में) दो या अधिक अर्थ निकलना — "रहिमन पानी राखिए, बिन पानी सब सून।" [कक्षा 10]',
          'उपमा अलंकार: उपमेय की उपमान से "सा/सी/जैसा/समान" द्वारा तुलना — "मुख चंद्रमा जैसा है।" [कक्षा 9]',
          'रूपक अलंकार: उपमेय पर उपमान का सीधा आरोप, बिना तुलनावाचक शब्द के — "चरण-कमल बंदौ हरि राई" (चरण ही कमल हैं)। [कक्षा 10]',
          'उत्प्रेक्षा अलंकार: उपमेय में उपमान होने की संभावना/कल्पना — "मानो/जनु/जानो" शब्दों का प्रयोग — "मुख मानो चंद्रमा है।" [कक्षा 10]',
          'मानवीकरण अलंकार: निर्जीव वस्तुओं पर मानवीय क्रियाओं/भावों का आरोपण — "मेघ आए बड़े बन-ठन के, सँवर के।" [कक्षा 10]',
          'अतिशयोक्ति अलंकार: किसी बात को बहुत बढ़ा-चढ़ाकर, वास्तविकता से परे प्रस्तुत करना — "हनुमान की पूँछ में लगन न पाई आग, लंका सारी जल गई गए निशाचर भाग।" [कक्षा 10]'
        ],
        logic: [
          'यमक और श्लेष में भेद: यमक में शब्द बार-बार दोहराया जाता है (हर बार भिन्न अर्थ में); श्लेष में शब्द एक ही बार आता है पर उसके एक साथ कई अर्थ निकलते हैं',
          'उपमा और रूपक में भेद: उपमा में तुलनावाचक शब्द (सा/जैसा/समान) स्पष्ट रहता है; रूपक में उपमेय और उपमान में पूर्ण अभेद (एकरूपता) मान लिया जाता है, कोई तुलनावाचक शब्द नहीं होता',
          'उत्प्रेक्षा में "मानो/जनु" जैसे संभावनासूचक शब्द अनिवार्य होते हैं — यही इसे उपमा/रूपक से अलग करता है',
          'कथन-कारण या वस्तु के वर्णन में अत्यधिक बढ़ा-चढ़ाकर कहना (वास्तविकता से बहुत आगे) अतिशयोक्ति की पहचान है'
        ],
        tips: [
          'हर अलंकार का एक प्रतिनिधि उदाहरण याद रखें और उसके पहचान-चिह्न (तुलनावाचक शब्द/मानवीय क्रिया/शब्द-दोहराव) को रेखांकित करने का अभ्यास करें',
          'काव्य-पंक्ति पढ़ते समय पहले जाँचें — क्या कोई शब्द दोहराया गया है (यमक), कोई तुलनावाचक शब्द है (उपमा/उत्प्रेक्षा), या निर्जीव को सजीव बताया गया है (मानवीकरण)'
        ],
        bestPractices: [
          'अलंकार पहचानने के प्रश्नों में विकल्पों को हल करते समय पहले यह तय करें कि पंक्ति शब्दालंकार (शब्द पर आधारित) है या अर्थालंकार (अर्थ/भाव पर आधारित)',
          'हर अलंकार के लक्षण को एक पंक्ति में सूत्र रूप में लिखकर रिवीज़न करें'
        ]
      },
      {
        chapter: 'मुहावरे एवं लोकोक्तियाँ',
        formulae: [
          'मुहावरा: वाक्यांश जिसका शाब्दिक अर्थ नहीं बल्कि लाक्षणिक/विशेष अर्थ लिया जाता है — जैसे "आँखें खुलना" (सच्चाई का पता चलना)। [कक्षा 8]',
          'लोकोक्ति (कहावत): पूर्ण वाक्य जो जनश्रुति से बना हो और उपदेशात्मक/नीतिपरक अर्थ रखता हो — जैसे "अंधों में काना राजा" (योग्यों के अभाव में अल्प-योग्य ही श्रेष्ठ माना जाता है)। [कक्षा 8]',
          'सामान्य मुहावरे: नाकों चने चबाना (कठिनाई में डालना), आँखों में धूल झोंकना (धोखा देना), दाँतों तले उँगली दबाना (आश्चर्यचकित होना), कान भरना (चुगली करना), खून-पसीना एक करना (कड़ी मेहनत करना)। [कक्षा 9]',
          'सामान्य लोकोक्तियाँ: "नाच न जाने आँगन टेढ़ा" (अपनी अयोग्यता छिपाने के लिए बहाना बनाना), "ऊँट के मुँह में जीरा" (आवश्यकता से बहुत कम), "जिसकी लाठी उसकी भैंस" (शक्तिशाली की ही चलती है)। [कक्षा 10]'
        ],
        logic: [
          'मुहावरे वाक्य में सदैव क्रिया के साथ प्रयुक्त होते हैं और वाक्य के अनुसार काल/वचन में बदलते हैं (आँखें खुलीं/खुलेंगी/खुल जाएँगी)',
          'लोकोक्ति सामान्यतः स्वयं में पूर्ण वाक्य होती है और बिना बदलाव के प्रयुक्त होती है — यह मुहावरे से इसका मुख्य अंतर है'
        ],
        tips: [
          'मुहावरे का अर्थ लिखने के बाद उसका वाक्य में प्रयोग अवश्य करें — केवल अर्थ लिखने पर पूरे अंक नहीं मिलते',
          'विषय (परिश्रम, साहस, चतुराई, धोखा आदि) के अनुसार मुहावरों को समूहों में याद करें, इससे स्मरण आसान होता है'
        ],
        bestPractices: [
          'प्रत्येक सप्ताह 8-10 नए मुहावरे/लोकोक्ति सीखकर वाक्य-प्रयोग की एक नोटबुक बनाएँ',
          'परीक्षा में दिए गए मुहावरे का अर्थ पहले स्पष्ट करें, फिर स्वयं का सार्थक वाक्य बनाएँ जिसमें प्रसंग स्पष्ट झलके'
        ]
      },
      {
        chapter: 'पद-परिचय',
        formulae: [
          'पद-परिचय: वाक्य में प्रयुक्त प्रत्येक शब्द (पद) के व्याकरणिक रूप का पूर्ण विश्लेषण। [कक्षा 10]',
          'संज्ञा का पद-परिचय क्रम: भेद (व्यक्तिवाचक/जातिवाचक आदि) → लिंग → वचन → कारक → संबंधित क्रिया। [कक्षा 10]',
          'सर्वनाम का पद-परिचय क्रम: भेद (पुरुषवाचक/निश्चयवाचक आदि) → पुरुष → लिंग → वचन → कारक। [कक्षा 10]',
          'विशेषण का पद-परिचय क्रम: भेद (गुणवाचक/संख्यावाचक आदि) → लिंग → वचन → विशेष्य (जिस संज्ञा की विशेषता बताई जा रही है)। [कक्षा 10]',
          'क्रिया का पद-परिचय क्रम: भेद (सकर्मक/अकर्मक) → काल → वचन → लिंग → पुरुष → कर्ता/कर्म से संबंध। [कक्षा 10]',
          'अव्यय (क्रियाविशेषण/समुच्चयबोधक/संबंधबोधक/विस्मयादिबोधक) का पद-परिचय: भेद → किस शब्द/क्रिया की विशेषता बता रहा है। [कक्षा 10]'
        ],
        logic: [
          'पद-परिचय लिखते समय शब्द को अलग से न देखकर पूरे वाक्य में उसकी भूमिका के आधार पर विश्लेषण करें — एक ही शब्द भिन्न वाक्यों में भिन्न भेद का हो सकता है',
          'क्रिया-विशेषण अव्यय हमेशा किसी क्रिया, विशेषण, या दूसरे क्रिया-विशेषण की विशेषता बताता है — इसका उल्लेख पद-परिचय में अनिवार्य है',
          'सार्वनामिक विशेषण का पद-परिचय लिखते समय ध्यान दें कि यह मूलतः सर्वनाम है पर वाक्य में विशेषण की तरह कार्य कर रहा है'
        ],
        tips: [
          'हर पद-परिचय के अंत में "विशेष्य" या "क्रिया" के साथ संबंध अवश्य लिखें — इसके बिना उत्तर अधूरा माना जाता है',
          'रेखांकित शब्द से पहले और बाद के शब्दों को ध्यान से पढ़ें — इसी से कारक और विशेष्य का पता चलता है'
        ],
        bestPractices: [
          'पद-परिचय के प्रत्येक भेद (संज्ञा/सर्वनाम/विशेषण/क्रिया/अव्यय) के लिए निश्चित क्रम में उत्तर लिखने का अभ्यास करें, ताकि कोई अंश छूटे नहीं',
          'रोज़ एक अनुच्छेद से 5 शब्द चुनकर उनका पूर्ण पद-परिचय लिखने का अभ्यास करें'
        ]
      },
      {
        chapter: 'विराम-चिह्न',
        formulae: [
          'पूर्ण विराम (।): वाक्य समाप्ति पर। अल्प विराम (,): वाक्य में संक्षिप्त ठहराव/सूची पृथक्करण पर। [कक्षा 8]',
          'प्रश्नवाचक चिह्न (?): प्रश्नवाचक वाक्य के अंत में। विस्मयादिबोधक चिह्न (!): आश्चर्य/हर्ष/शोक भाव व्यक्त करने वाले वाक्य के अंत में। [कक्षा 8]',
          'उद्धरण चिह्न (" " या \' \'): किसी के कहे गए वाक्य को ज्यों का त्यों उद्धृत करने पर। [कक्षा 9]',
          'योजक चिह्न (-): दो शब्दों को जोड़ने पर (माता-पिता), सामासिक/द्वंद्व शब्दों में। अर्ध विराम (;): दो स्वतंत्र किंतु संबंधित उपवाक्यों के बीच। [कक्षा 9]',
          'विवरण चिह्न/निर्देशक चिह्न (:), (—): किसी सूची या स्पष्टीकरण से पहले। कोष्ठक ( ): अतिरिक्त जानकारी या स्पष्टीकरण के लिए। [कक्षा 10]'
        ],
        logic: [
          'विराम-चिह्नों का सही प्रयोग वाक्य के अर्थ को स्पष्ट व अस्पष्टता-रहित बनाता है — गलत स्थान पर लगाया गया अल्प विराम अर्थ बदल सकता है',
          'संवाद/उद्धरण लिखते समय उद्धरण-चिह्न के भीतर ही पूर्ण विराम/प्रश्नवाचक/विस्मयादिबोधक चिह्न लगाया जाता है'
        ],
        tips: [
          'लंबे वाक्यों को पढ़ते समय स्वाभाविक ठहराव के स्थान चिह्नित करने का अभ्यास करें — यही अल्प विराम के सही स्थान बताते हैं',
          'निबंध/पत्र लेखन में विराम-चिह्नों के सही प्रयोग पर अलग से अंक निर्धारित होते हैं, अतः पुनरीक्षण में विशेष ध्यान दें'
        ],
        bestPractices: [
          'लेखन के बाद प्रत्येक वाक्य को पुनः पढ़कर जाँचें कि पूर्ण विराम/प्रश्नवाचक/विस्मयादिबोधक चिह्न उचित स्थान पर है या नहीं',
          'बिना विराम चिह्नों वाले अनुच्छेद में चिह्न लगाने का साप्ताहिक अभ्यास करें'
        ]
      },
      {
        chapter: 'शब्द-ज्ञान (पर्यायवाची, विलोम, अनेकार्थी शब्द)',
        formulae: [
          'पर्यायवाची शब्द (समानार्थी): एक ही अर्थ देने वाले भिन्न शब्द — सूर्य: रवि, भानु, दिनकर, आदित्य, सूरज। जल: नीर, पानी, वारि, तोय, सलिल। [कक्षा 8]',
          'विलोम शब्द (विपरीतार्थक): विपरीत अर्थ देने वाले शब्द — दिन×रात, जीवन×मृत्यु, आदि×अंत, प्रिय×अप्रिय, गुण×दोष, आशा×निराशा। [कक्षा 8]',
          'अनेकार्थी शब्द: एक ही शब्द के भिन्न संदर्भ में भिन्न अर्थ — "कर" (हाथ / टैक्स / करना), "फल" (परिणाम / मीठा फल)। [कक्षा 9]',
          'तत्सम-तद्भव शब्द: तत्सम — संस्कृत से ज्यों का त्यों लिया गया शब्द (अग्नि, सूर्य, हस्त); तद्भव — संस्कृत से बदलकर बना शब्द (आग, सूरज, हाथ)। [कक्षा 9]',
          'देशज एवं विदेशज शब्द: देशज — स्थानीय बोलियों से आए शब्द (खिड़की, लोटा); विदेशज — अन्य भाषाओं से आए शब्द (स्कूल-अंग्रेज़ी, कमीज़-पुर्तगाली, कुर्सी-अरबी)। [कक्षा 10]'
        ],
        logic: [
          'पर्यायवाची शब्द भी सूक्ष्म अर्थ-भेद रखते हैं (जैसे "नीर" काव्यात्मक है, "पानी" सामान्य बोलचाल का) — प्रसंग के अनुसार उचित शब्द चुनें',
          'विलोम शब्द बनाते समय उपसर्ग जोड़कर भी बनाया जा सकता है (योग्य×अयोग्य, स्वदेश×विदेश), इसलिए उपसर्ग का ज्ञान यहाँ भी सहायक है'
        ],
        tips: [
          'शब्द-भंडार बढ़ाने के लिए हर पाठ से नए पर्यायवाची/विलोम शब्दों की एक निजी शब्दावली-सूची बनाएँ',
          'अनेकार्थी शब्दों के दोनों/सभी अर्थ वाक्य में प्रयोग करके याद करें, ताकि प्रसंग के अनुसार सही अर्थ पहचान सकें'
        ],
        bestPractices: [
          'साप्ताहिक रूप से 15-20 पर्यायवाची और विलोम शब्द-युग्मों का पुनरीक्षण करें',
          'तत्सम-तद्भव, देशज-विदेशज वर्गीकरण के प्रश्नों में शब्द की उत्पत्ति (मूल भाषा) पर ध्यान दें, न कि केवल प्रयोग पर'
        ]
      },
      {
        chapter: 'अशुद्धि-शोधन (सामान्य भाषिक त्रुटियाँ)',
        formulae: [
          'लिंग-दोष: "वह अच्छा लड़की है" (अशुद्ध) → "वह अच्छी लड़की है" (शुद्ध)। [कक्षा 9]',
          'वचन-दोष: "बहुत सारे बच्चा खेल रहे हैं" (अशुद्ध) → "बहुत सारे बच्चे खेल रहे हैं" (शुद्ध)। [कक्षा 9]',
          'कारक-दोष: "मैं घर को जा रहा हूँ" (अशुद्ध, अनावश्यक "को") → "मैं घर जा रहा हूँ" (शुद्ध)। [कक्षा 10]',
          'शब्द-क्रम दोष: वाक्य में उद्देश्य-विधेय का क्रम गड़बड़ाने पर अर्थ अस्पष्ट होता है — क्रम ठीक कर वाक्य सुधारें। [कक्षा 10]',
          'पुनरुक्ति दोष: एक ही अर्थ के दो शब्दों का अनावश्यक प्रयोग — "वापस लौटना" (अशुद्ध, लौटना में ही वापसी का भाव है) → "लौटना" (शुद्ध)। [कक्षा 10]'
        ],
        logic: [
          'अशुद्धि-शोधन प्रश्नों में सर्वप्रथम वाक्य के मूल भाव को समझें, फिर लिंग/वचन/कारक/क्रम की जाँच क्रमशः करें',
          'हिंदी में विशेषण संज्ञा के लिंग-वचन के अनुसार बदलता है (अच्छा लड़का/अच्छी लड़की/अच्छे लड़के) — यह अंग्रेज़ी से बड़ा अंतर है और अक्सर त्रुटि का स्रोत है'
        ],
        tips: [
          'वाक्य में क्रिया के अंत रूप (आ/ई/ए) से जाँचें कि वह कर्ता के लिंग-वचन से मेल खाता है या नहीं',
          'अंग्रेज़ी-प्रभावित वाक्य-रचना (जैसे शब्दशः अनुवाद) से बचें — हिंदी का स्वाभाविक वाक्य-क्रम कर्ता-कर्म-क्रिया है'
        ],
        bestPractices: [
          'लिखे गए उत्तर को दोबारा पढ़कर हर वाक्य में लिंग-वचन का मेल जाँचने की आदत डालें',
          'सामान्य त्रुटियों की एक सूची बनाकर बार-बार होने वाली अपनी गलतियों को चिह्नित करें और उन्हें दूर करने का अभ्यास करें'
        ]
      }
    ]
};

// merge IB and ICSE Mathematics chapters into the main Mathematics array
// (kept alongside the per-board keys below — the consolidated notes page reads those directly)
REVISION['CBSE Mathematics'] = REVISION.Mathematics;
REVISION.Mathematics = REVISION.Mathematics
  .concat(REVISION['ICSE Mathematics'] || [])
  .concat(REVISION['IB Mathematics'] || []);

// ─── Theorems by chapter ─────────────────────────────────────────────────────
const THEOREMS = {
  Mathematics: {
      'Real Numbers': [
        "Fundamental Theorem of Arithmetic: Every composite number can be expressed as a product of primes, and this factorisation is unique (up to order of factors). [Gr 10]",
        "Euclid's Division Lemma: For any two positive integers a and b, there exist unique integers q and r such that a = bq + r, where 0 ≤ r < b. [Gr 10]",
        "Theorem: If p is a prime and p divides a², then p divides a. [Gr 10]",
        "Theorem: √p is irrational for any prime number p (proved by contradiction). [Gr 10]",
        "Theorem: The sum or product of a non-zero rational and an irrational number is irrational. [Gr 10]"
      ],
      'Polynomials': [
        "Remainder Theorem: If polynomial p(x) is divided by (x − a), the remainder equals p(a). [Gr 9]",
        "Factor Theorem: (x − a) is a factor of p(x) if and only if p(a) = 0. [Gr 9]",
        "Theorem: A polynomial of degree n has at most n real zeroes. [Gr 9]"
      ],
      'Triangles': [
        "Isosceles Triangle Theorem (Gr 9): Angles opposite to equal sides of a triangle are equal. Converse: Sides opposite equal angles are equal.",
        "Angle Sum Property (Gr 8): The sum of all interior angles of a triangle is 180°.",
        "Exterior Angle Theorem (Gr 8): An exterior angle of a triangle equals the sum of the two non-adjacent interior angles.",
        "Mid-Point Theorem (Gr 9): The line segment joining the midpoints of two sides of a triangle is parallel to the third side and equals half of it.",
        "Converse of Mid-Point Theorem (Gr 9): A line through the midpoint of one side of a triangle, parallel to another side, bisects the third side.",
        "SSS Congruence Rule: If three sides of one triangle are equal to three sides of another, the triangles are congruent. [Gr 9]",
        "SAS Congruence Rule: If two sides and the included angle of one triangle are equal to two sides and the included angle of another, the triangles are congruent. [Gr 9]",
        "ASA Congruence Rule: If two angles and the included side of one triangle are equal to two angles and the included side of another, the triangles are congruent. [Gr 9]",
        "AAS Congruence Rule: If two angles and a non-included side of one triangle are equal to the corresponding two angles and side of another, the triangles are congruent. [Gr 9]",
        "RHS Congruence Rule: If the hypotenuse and one side of a right-angled triangle are equal to the hypotenuse and one side of another right-angled triangle, the triangles are congruent. [Gr 9]",
        "Basic Proportionality Theorem / Thales (Gr 10): If a line is drawn parallel to one side of a triangle, it divides the other two sides in the same ratio. (DE ∥ BC ⟹ AD/DB = AE/EC)",
        "Converse of BPT (Gr 10): If a line divides two sides of a triangle in the same ratio, it is parallel to the third side.",
        "AA Similarity Criterion (Gr 10): If two angles of one triangle are equal to two angles of another, the two triangles are similar.",
        "SSS Similarity Criterion (Gr 10): If corresponding sides of two triangles are proportional, the triangles are similar.",
        "SAS Similarity Criterion (Gr 10): If one angle of a triangle equals one angle of another, and the sides including these angles are proportional, the triangles are similar.",
        "Area Theorem (Gr 10): The ratio of areas of two similar triangles equals the square of the ratio of their corresponding sides.",
        "Pythagoras Theorem (Gr 8/10): In a right-angled triangle, the square of the hypotenuse equals the sum of the squares of the other two sides. (a² + b² = c²)",
        "Converse of Pythagoras (Gr 10): If the square of one side of a triangle equals the sum of squares of the other two sides, the angle opposite that side is 90°."
      ],
      'Circles': [
        "Theorem (Gr 9): Equal chords of a circle subtend equal angles at the centre. Converse: Chords subtending equal angles at the centre are equal.",
        "Theorem (Gr 9): The perpendicular from the centre of a circle to a chord bisects the chord. Converse: The line joining the centre to the midpoint of a chord is perpendicular to it.",
        "Theorem (Gr 9): Equal chords of a circle are equidistant from the centre. Converse: Chords equidistant from the centre are equal.",
        "Theorem (Gr 9): The angle subtended by an arc at the centre is double the angle subtended at any point on the remaining arc.",
        "Theorem (Gr 9): Angles in the same segment of a circle are equal.",
        "Theorem (Gr 9): The sum of opposite angles of a cyclic quadrilateral is 180°.",
        "Theorem (Gr 10): The tangent at any point of a circle is perpendicular to the radius at the point of contact.",
        "Theorem (Gr 10): The lengths of two tangents drawn from an external point to a circle are equal."
      ],
      'Introduction to Trigonometry': [
        "Pythagorean Identity (Gr 10): sin²θ + cos²θ = 1 (follows from Pythagoras in a right triangle). Divide by cos²θ → 1 + tan²θ = sec²θ. Divide by sin²θ → 1 + cot²θ = cosec²θ."
      ],
      'Probability': [
        "Theorem: For any event E, 0 ≤ P(E) ≤ 1.",
        "Complementary Event Theorem: P(E) + P(Ē) = 1."
      ]
  },
  Science: {
      'Chemical Reactions & Equations': [
        "Law of Conservation of Mass (Lavoisier, Gr 10): In any chemical reaction, the total mass of reactants equals the total mass of products.",
        "Law of Definite Proportions (Proust, Gr 9): A chemical compound always contains the same elements in the same fixed proportion by mass, regardless of source or method of preparation."
      ],
      'Electricity': [
        "Ohm's Law (Gr 10): At constant temperature, the current through a conductor is directly proportional to the potential difference across it. (V = IR, where R is constant for a given conductor)",
        "Joule's Law of Heating (Gr 10): Heat produced in a conductor H = I²Rt — proportional to the square of current, the resistance, and the time of flow."
      ],
      'Light — Reflection & Refraction': [
        "Laws of Reflection (Gr 8/10): (1) Angle of incidence = angle of reflection. (2) Incident ray, normal, and reflected ray are coplanar.",
        "Laws of Refraction — Snell's Law (Gr 10): (1) Incident ray, normal, and refracted ray are coplanar. (2) n₁ sin θ₁ = n₂ sin θ₂ (ratio of sines is constant for two given media).",
        "Theorem (Gr 10): The refractive index n = c/v = sin i / sin r (Snell's Law consequence)."
      ],
      'Magnetic Effects of Electric Current': [
        "Faraday's First Law of Electromagnetic Induction (Gr 10): Whenever the magnetic flux through a circuit changes, an EMF is induced in it.",
        "Faraday's Second Law (Gr 10): The magnitude of induced EMF is directly proportional to the rate of change of magnetic flux linkage.",
        "Lenz's Law (Gr 10): The direction of induced current is always such that it opposes the cause producing it (a consequence of conservation of energy).",
        "Fleming's Left-Hand Rule (motor effect): If the index finger points in the direction of the magnetic field and the middle finger in the direction of current, the thumb points in the direction of the force on the conductor.",
        "Fleming's Right-Hand Rule (generator effect): If the thumb points in the direction of motion and the index finger in the field direction, the middle finger gives the direction of induced current."
      ],
      'Heredity & Evolution': [
        "Mendel's Law of Segregation (Gr 10): The two alleles for each trait separate during gamete formation; each gamete carries only one allele.",
        "Mendel's Law of Independent Assortment (Gr 10): Alleles of different genes on different chromosomes assort into gametes independently of each other."
      ],
      'Life Processes': [
        "Cell Theory (Gr 9): (1) All organisms are made of one or more cells. (2) The cell is the basic structural and functional unit of life. (3) All cells arise from pre-existing cells (Virchow)."
      ]
  },
  Physics: {
      'Force & Pressure': [
        "Newton's First Law of Motion (Gr 9): A body at rest remains at rest, and a body in uniform motion continues in uniform motion in a straight line, unless acted upon by a net external force.",
        "Newton's Second Law of Motion (Gr 9): The net force on a body equals the rate of change of its momentum. For constant mass: F = ma.",
        "Newton's Third Law of Motion (Gr 9): For every action force, there is an equal and opposite reaction force; the two forces act on different bodies.",
        "Archimedes' Principle (Gr 9): When a body is wholly or partially immersed in a fluid, it experiences an upthrust equal to the weight of the fluid displaced.",
        "Pascal's Law (Gr 9): Pressure applied to an enclosed fluid is transmitted undiminished in all directions throughout the fluid.",
        "Law of Conservation of Momentum: The total linear momentum of a closed system remains constant when no external net force acts on it. (Follows from Newton's 3rd Law)"
      ],
      'Machines & Levers': [
        "Principle of Moments (Gr 9): When a body is in equilibrium under coplanar forces, the algebraic sum of the moments of all forces about any point is zero. (Clockwise moments = anticlockwise moments)",
        "Theorem: For an ideal machine, Mechanical Advantage = Velocity Ratio. In a real machine, MA < VR because efficiency < 100% due to friction."
      ],
      'Work, Energy & Power': [
        "Work–Energy Theorem (Gr 9): The net work done on a body equals its change in kinetic energy. (W_net = ΔKE = ½mv² − ½mu²)",
        "Law of Conservation of Energy (Gr 9): Energy cannot be created or destroyed; it can only be transformed from one form to another. The total energy of an isolated system remains constant.",
        "Law of Conservation of Mechanical Energy: In the absence of non-conservative forces, the sum of kinetic and potential energy remains constant. (KE + PE = constant)"
      ],
      'Heat': [
        "Principle of Calorimetry (Gr 9): In an isolated system, heat lost by a hotter body equals heat gained by a cooler body. (m₁c₁ΔT₁ = m₂c₂ΔT₂)",
        "Kirchhoff's Law of Radiation (Gr 10): A good absorber of thermal radiation is also a good emitter at the same temperature (and vice versa).",
        "Boyle's Law (Gr 9): At constant temperature, the volume of a fixed mass of gas is inversely proportional to its pressure. (PV = constant)",
        "Charles' Law (Gr 9): At constant pressure, the volume of a fixed mass of gas is directly proportional to its absolute temperature. (V/T = constant)",
        "Gay-Lussac's Law (Gr 9): At constant volume, the pressure of a fixed mass of gas is directly proportional to its absolute temperature. (P/T = constant)"
      ],
      'Sound': [
        "Law of Reflection of Sound (Gr 9): The angle of incidence of a sound wave equals its angle of reflection; the incident wave, reflected wave, and normal lie in the same plane.",
        "Doppler Effect (Gr 10): When the source and observer are in relative motion, the observed frequency is higher when they approach and lower when they recede."
      ]
    },
    Chemistry: {
      'Periodic Table': [
        "Periodic Law — Modern (Moseley, Gr 10): The physical and chemical properties of elements are a periodic function of their atomic numbers."
      ],
      'Mole Concept': [
        "Law of Conservation of Mass (Gr 9): In any chemical change, the total mass of products equals the total mass of reactants.",
        "Law of Definite Proportions (Gr 9): A pure chemical compound always contains the same elements in the same proportion by mass.",
        "Avogadro's Law (Gr 10): Equal volumes of all gases, at the same temperature and pressure, contain the same number of molecules.",
        "Gay-Lussac's Law of Combining Volumes (Gr 10): Gases react in volumes that bear a simple whole-number ratio to each other and to the volume of any gaseous product, at the same temperature and pressure."
      ]
    },
  'ICSE Mathematics': {
      'Similarity': [
        "Basic Proportionality Theorem (Thales, Gr 9/10): If a line is drawn parallel to one side of a triangle, it divides the other two sides in the same ratio.",
        "Converse of BPT: If a line divides two sides of a triangle in the same ratio, it is parallel to the third side.",
        "AA Similarity Theorem: Two triangles are similar if two pairs of corresponding angles are equal.",
        "SSS Similarity Theorem: Two triangles are similar if all three pairs of corresponding sides are proportional.",
        "SAS Similarity Theorem: Two triangles are similar if two pairs of corresponding sides are proportional and the included angles are equal.",
        "Area Theorem: The ratio of areas of two similar triangles = square of the ratio of their corresponding sides.",
        "Mid-Point Theorem (Gr 9): The segment joining midpoints of two sides of a triangle is parallel to the third side and equal to half its length.",
        "Pythagoras Theorem (Gr 8): In a right-angled triangle, hypotenuse² = sum of squares of the other two sides.",
        "Converse of Pythagoras: If hypotenuse² = sum of squares of the other two sides, the triangle is right-angled."
      ],
      'Coordinate Geometry (ICSE)': [
        "Theorem: The perpendicular bisector of a line segment is the locus of all points equidistant from the two endpoints.",
        "Thales' Theorem in Coordinate Geometry: The angle subtended by a diameter of a circle at any point on the circle is 90°."
      ]
  },
  'IB Mathematics': {
      'Geometry & Trigonometry': [
        "Sine Rule: a/sin A = b/sin B = c/sin C — valid for all triangles.",
        "Cosine Rule: c² = a² + b² − 2ab cos C — generalisation of Pythagoras.",
        "Pythagoras Theorem: In a right triangle, a² + b² = c² (c = hypotenuse).",
        "Area Theorem: Area of triangle = ½ab sin C (C = included angle)."
      ],
      'Statistics & Probability': [
        "Theorem: For any event A, 0 ≤ P(A) ≤ 1.",
        "Addition Rule: P(A ∪ B) = P(A) + P(B) − P(A ∩ B).",
        "Multiplication Rule: P(A ∩ B) = P(A) × P(B|A).",
        "Independence Theorem: Events A and B are independent iff P(A ∩ B) = P(A) × P(B).",
        "Bayes' Theorem: P(A|B) = P(B|A)·P(A) / P(B).",
        "Complementary Probability: P(A') = 1 − P(A)."
      ],
      'Algebra & Indices': [
        "Theorem: log_b x is defined only for x > 0 and b > 0, b ≠ 1.",
        "Change of Base Theorem: log_b x = log_a x / log_a b (for any valid base a)."
      ]
  },
  Biology: {
      'Cell Biology': [
        "Cell Theory (3 postulates): (1) All living organisms are made of one or more cells. (2) The cell is the smallest unit of life. (3) All cells arise from pre-existing cells.",
        "Osmosis Theorem: Water moves by osmosis from a region of higher water potential to lower water potential across a partially permeable membrane."
      ],
      'Genetics & Evolution': [
        "Mendel's Law of Segregation: Each organism carries two alleles for each trait; these separate during gamete formation so each gamete carries exactly one.",
        "Mendel's Law of Independent Assortment: Alleles of genes located on different chromosomes are distributed into gametes independently.",
        "Hardy–Weinberg Theorem: In the absence of evolution (no mutation, selection, migration, drift, non-random mating), allele and genotype frequencies in a population remain constant. (p + q = 1; p² + 2pq + q² = 1)",
        "Darwinian Natural Selection: Heritable variation + differential reproductive success leads to change in allele frequencies — the mechanism of evolution."
      ],
      'Molecular Biology': [
        "Central Dogma of Molecular Biology (Crick): Genetic information flows DNA → RNA → Protein. DNA can replicate itself. Information cannot flow backward from protein to nucleic acid.",
        "Semi-Conservative Replication Theorem (Meselson–Stahl): Each new DNA molecule retains one parental strand and one newly synthesised strand.",
        "Watson–Crick Base Pairing: In DNA, A pairs with T and G pairs with C via hydrogen bonds. In RNA, A pairs with U and G with C."
      ]
  }
};

// merge ICSE and IB theorem chapters into main Mathematics key
Object.assign(THEOREMS.Mathematics, THEOREMS['ICSE Mathematics'] || {});
Object.assign(THEOREMS.Mathematics, THEOREMS['IB Mathematics'] || {});
delete THEOREMS['ICSE Mathematics'];
delete THEOREMS['IB Mathematics'];

// ─── Small helpers ────────────────────────────────────────────────────────────
function esc(str) {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}

// localStorage that never throws (private mode, quota, disabled cookies)
const LS = {
  get(key, fallback) {
    try { const v = localStorage.getItem(key); return v === null ? fallback : JSON.parse(v); }
    catch { return fallback; }
  },
  set(key, value) { try { localStorage.setItem(key, JSON.stringify(value)); } catch { /* ignore */ } },
  del(key)        { try { localStorage.removeItem(key); } catch { /* ignore */ } }
};

const KEY = {
  board:     'rise.board',
  grade:     'rise.grade',
  draft:     'rise.draft',
  results:   'rise.results',
  autoNext:  'rise.autoNext',
  progress:  'rise.progress',   // "grade::board::subject" → qid → { box, due, chapter, correctCount, wrongCount, lastAt }
  bookmarks: 'rise.bookmarks'   // "grade::board::subject" → qid → { at }
};
// One storage bucket per grade+board+subject so X-CBSE-Mathematics, XII-CBSE-Mathematics
// and ICSE's own Mathematics never share progress, bookmarks or due-review counts.
function scopeKey(subject, grade, board) {
  return `${grade || state.grade}::${board || state.board}::${subject}`;
}

// Unbiased Fisher–Yates on a copy (Array#sort with a random comparator is biased)
function shuffle(list) {
  const a = list.slice();
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function plural(n, word) { return `${n} ${word}${n === 1 ? '' : 's'}`; }

// ─── Catalogue ────────────────────────────────────────────────────────────────
const SUBJECTS = {
  CBSE: ['Mathematics', 'Science', 'Social Science', 'English', 'Hindi'],
  ICSE: ['Mathematics', 'Physics', 'Chemistry', 'Biology', 'History & Civics', 'Geography', 'English'],
  IB:   ['Mathematics', 'Biology', 'Individuals & Societies', 'Language & Literature']
};

// "grade board subject" → question-bank file slug (public/questions/<slug>.json).
// Every bank is named <grade>-<board>-<subject> on disk (spaces/punctuation stripped),
// so a grade+board+subject combination with no entry here simply has no bank yet —
// that's the "coming soon" case, not a fallback to some other grade or board's file.
const BANKS = {
  'X CBSE Mathematics':           'X-CBSE-Mathematics',
  'X CBSE Science':               'X-CBSE-Science',
  'X CBSE Social Science':        'X-CBSE-Social-Science',
  'X ICSE Mathematics':           'X-ICSE-Mathematics',
  'X ICSE Physics':               'X-ICSE-Physics',
  'X ICSE Chemistry':             'X-ICSE-Chemistry',
  'X ICSE Biology':               'X-ICSE-Biology',
  'X ICSE History & Civics':      'X-ICSE-History-Civics',
  'X ICSE Geography':             'X-ICSE-Geography',
  'X ICSE English':               'X-ICSE-English',
  'X CBSE Hindi':                  'X-CBSE-Hindi'
};
// Returns the question-bank file slug for (subject, board, grade), or undefined if none.
function bankSlug(subject, board, grade) {
  board = board || state.board;
  grade = grade || state.grade;
  return BANKS[`${grade} ${board} ${subject}`];
}

const BOARDS = [
  { id: 'CBSE', name: 'CBSE',       short: 'CBSE', desc: 'Central Board of Secondary Education' },
  { id: 'ICSE', name: 'ICSE',       short: 'ICSE', desc: 'Indian Certificate of Secondary Education' },
  { id: 'IB',   name: 'IB Diploma', short: 'IB',   desc: 'International Baccalaureate (MYP-5)' }
];

const GRADES = [
  { id: 'X',   label: 'X Board' },
  { id: 'XII', label: 'XII Board' }
];

const MODES = {
  mock:     { label: 'Full Mock Test',    count: 50, seconds: 40 * 60 },
  drill:    { label: 'Chapter Drill',     count: 25, seconds: null },
  bookmark: { label: 'Bookmarked Review', count: 50, seconds: null },
  srs:      { label: 'Spaced Review',     count: 30, seconds: null }
};

// Leitner-style spaced repetition: box index → days until next due.
const SRS_INTERVALS = [0, 1, 3, 7, 14, 30];

// ─── Consolidated revision notes — one page per subject, merged across boards ─
const NOTES_CATALOG = [
  { id: 'Mathematics', label: 'Maths' },
  { id: 'Physics',     label: 'Physics' },
  { id: 'Chemistry',   label: 'Chemistry' },
  { id: 'Biology',     label: 'Biology' },
  { id: 'English',     label: 'English' },
  { id: 'Hindi',       label: 'Hindi' }
];
// CBSE's combined "Science" subject holds chemistry/physics/biology chapters together —
// name the ones that belong to each split-out subject so they can be pulled out below.
const CBSE_SCIENCE_SPLIT = {
  Chemistry: ['Chemical Reactions & Equations', 'Acids, Bases & Salts', 'Metals & Non-Metals', 'Carbon & its Compounds'],
  Physics:   ['Light — Reflection & Refraction', 'Human Eye & Colourful World', 'Electricity', 'Magnetic Effects of Electric Current', 'Sources of Energy'],
  Biology:   ['Life Processes', 'Control & Coordination', 'Reproduction', 'Heredity & Evolution']
};
// canonical subject → [board, REVISION key, THEOREMS key, chapter allow-list] sources to merge, in board display order
const NOTES_SOURCES = {
  Mathematics: [
    ['CBSE', 'CBSE Mathematics', 'Mathematics'],
    ['ICSE', 'ICSE Mathematics', 'Mathematics'],
    ['IB',   'IB Mathematics',   'Mathematics']
  ],
  Physics: [
    ['CBSE', 'Science', 'Science', CBSE_SCIENCE_SPLIT.Physics],
    ['ICSE', 'Physics', 'Physics']
  ],
  Chemistry: [
    ['CBSE', 'Science', 'Science', CBSE_SCIENCE_SPLIT.Chemistry],
    ['ICSE', 'Chemistry', 'Chemistry']
  ],
  Biology: [
    ['CBSE', 'Science', 'Science', CBSE_SCIENCE_SPLIT.Biology],
    ['ICSE', 'Biology', 'Biology'],
    ['IB',   'Biology', 'Biology']
  ],
  English: [
    ['CBSE', 'English', 'English'],
    ['ICSE', 'English', 'English']
  ],
  Hindi: [
    ['CBSE', 'Hindi', 'Hindi']
  ]
};
const _consolidatedCache = {};
function consolidatedChapters(subjectId) {
  if (_consolidatedCache[subjectId]) return _consolidatedCache[subjectId];
  const merged = [];
  (NOTES_SOURCES[subjectId] || []).forEach(([board, key, theoremKey, only]) => {
    (REVISION[key] || [])
      .filter(ch => !only || only.includes(ch.chapter))
      .forEach(ch => {
        const name = ch.chapter.trim().toLowerCase();
        const hit = merged.find(m => m.chapter.trim().toLowerCase() === name);
        if (hit) { if (!hit._boards.includes(board)) hit._boards.push(board); }
        else merged.push({ ...ch, _boards: [board], _theoremKey: theoremKey });
      });
  });
  return (_consolidatedCache[subjectId] = merged);
}

// ─── Question bank loading (cached — one fetch per subject per session) ───────
const bankCache = {};
function loadBank(subject) {
  const slug = bankSlug(subject);
  const cacheKey = slug || subject;
  if (bankCache[cacheKey]) return Promise.resolve(bankCache[cacheKey]);
  if (!slug) return Promise.reject(new Error('No question bank for ' + subject));
  return fetch(`questions/${slug}.json`)
    .then(r => { if (!r.ok) throw new Error(`Could not load questions (HTTP ${r.status})`); return r.json(); })
    .then(list => { bankCache[cacheKey] = list; return list; });
}
function chaptersOf(list) {
  const seen = new Map();
  list.forEach(q => seen.set(q.chapter || 'General', (seen.get(q.chapter || 'General') || 0) + 1));
  return [...seen.entries()].map(([name, count]) => ({ name, count }));
}

// ─── State ────────────────────────────────────────────────────────────────────
const state = {
  board:   LS.get(KEY.board, null),
  grade:   LS.get(KEY.grade, 'X'),  // 'X' | 'XII' — top-level tab on the home screen
  screen:  'board',
  params:  [],
  notesQuery: '',
  notesFilter: 'all',
  openPicker: null,  // subject whose chapter list is expanded on the home screen
  difficulty: {},    // subject → 'all' | 'easy' | 'medium' | 'hard', for Mock/Drill
  mobileMenuOpen: false  // the header's single hamburger menu (Progress / Notes / Career Pathing / boards)
};

// ─── Routing (real URLs → real Back button, refresh-safe, shareable) ──────────
function parseHash() {
  const raw = (location.hash || '').replace(/^#\/?/, '');
  const parts = raw.split('/').filter(Boolean).map(p => { try { return decodeURIComponent(p); } catch { return p; } });
  return { name: parts[0] || '', parts: parts.slice(1) };
}
function buildHash(parts) {
  return '#/' + parts.map(encodeURIComponent).join('/');
}

// ─── App ──────────────────────────────────────────────────────────────────────
const app = {

  session: null,     // live test session
  reviewData: null,  // last completed attempt

  // ── Bootstrap ──────────────────────────────────────────────────────────────
  init() {
    this.autoNext = LS.get(KEY.autoNext, true);
    window.addEventListener('hashchange', () => this.render());
    document.addEventListener('keydown', e => this.onKey(e));
    if (!location.hash && state.board) this.go(['home'], true);
    this.render();
  },

  // ── Navigation ─────────────────────────────────────────────────────────────
  go(parts, replace = false) {
    state.mobileMenuOpen = false;
    const target = buildHash(parts);
    if (location.hash === target) { this.render(); return; }
    if (replace) {
      location.replace(location.pathname + location.search + target);
      this.render();
    } else {
      location.hash = target;   // hashchange fires → render()
    }
  },

  // ── Render ──────────────────────────────────────────────────────────────────
  render() {
    const r = parseHash();
    let name = r.name || 'home';

    // Guards: never strand the user on a screen that has no data behind it.
    if (!state.board)                        name = 'board';
    else if (name === 'test' && !this.session)    name = 'home';
    else if (name === 'results' && !this.reviewData) name = 'home';
    else if (!['home', 'notes', 'test', 'results', 'board'].includes(name)) name = 'home';

    // A guarded redirect must correct the URL too, or the address bar claims a screen
    // that is not on show and Back/refresh land somewhere unexpected.
    if (name !== (r.name || 'home') && name !== 'board') {
      location.replace(location.pathname + location.search + buildHash([name]));
    }

    state.screen = name;
    state.params = r.parts;

    document.getElementById('app').innerHTML = this._header() + this._screen(name, r.parts);
    window.scrollTo(0, 0);
    this._afterRender(name, r.parts);
  },

  _header() {
    if (state.screen === 'board') return '';

    const inTest = state.screen === 'test';
    const logoAttrs = inTest ? 'aria-disabled="true"' : `onclick="app.go(['home'])" title="Home"`;
    const logo = `<button class="hdr-logo" ${logoAttrs}>
      <svg class="logo-icon" width="20" height="20" viewBox="0 0 32 32" aria-hidden="true">
        <rect width="32" height="32" rx="7" fill="#2563eb"/>
        <rect x="5"  y="22" width="5" height="5"  rx="1.5" fill="rgba(255,255,255,0.55)"/>
        <rect x="13" y="17" width="5" height="10" rx="1.5" fill="rgba(255,255,255,0.78)"/>
        <rect x="21" y="11" width="5" height="16" rx="1.5" fill="#ffffff"/>
        <polygon points="23.5,4 27,9.5 20,9.5" fill="#ffffff"/>
      </svg>
      <span>Rise</span>
    </button>`;

    const notesActive = state.screen === 'notes';
    const progressActive = state.screen === 'progress';

    // Every header action — boards, Progress, Revision Notes, Career Pathing — lives
    // behind one hamburger menu on every screen size, each item stacked full-width
    // one after another. No collapsing, no grouping, nothing hidden.
    const menuBoards = BOARDS.map(b => `
      <button class="btn small ${b.id === state.board ? 'primary' : 'ghost'}"
              aria-pressed="${b.id === state.board}" ${inTest ? 'disabled' : ''}
              title="${esc(b.desc)}" onclick="app.switchBoard('${b.id}')">${esc(b.name)}</button>`).join('');
    const hamburgerBtn = `
      <button class="hdr-hamburger" aria-label="Menu" aria-expanded="${state.mobileMenuOpen}"
              ${inTest ? 'disabled' : ''} onclick="app.toggleMobileMenu()">
        <span></span><span></span><span></span>
      </button>`;
    const menu = `
      <div class="hdr-menu" ${state.mobileMenuOpen ? '' : 'hidden'}>
        ${menuBoards}
        <button class="btn small ${progressActive ? 'primary' : 'ghost'}"
                ${inTest ? 'disabled' : ''} onclick="app.go(['progress'])">Progress</button>
        <button class="btn small ${notesActive ? 'primary' : 'ghost'}"
                ${inTest ? 'disabled' : ''} onclick="app.go(['notes'])">Revision Notes</button>
        <a class="btn small ghost" href="careers.html" target="_blank" rel="noopener">Career Pathing</a>
      </div>`;

    return `
      <header class="app-header">
        <div class="hdr-left">${logo}</div>
        <div class="hdr-right">${hamburgerBtn}</div>
        ${menu}
      </header>`;
  },

  toggleMobileMenu() {
    state.mobileMenuOpen = !state.mobileMenuOpen;
    this.render();
  },

  _screen(name, params) {
    switch (name) {
      case 'board':    return this._screenBoard();
      case 'home':     return this._screenHome();
      case 'notes':    return this._screenNotes(params[0] || NOTES_CATALOG[0].id, Number(params[1]) || 0);
      case 'progress': return this._screenProgress();
      case 'test':     return this._screenTest();
      case 'results':  return this._screenResults();
      default:         return '';
    }
  },

  _afterRender(name, params) {
    if (name === 'home')    this._hydrateHome();
    if (name === 'test') {
      this.renderQuestion(); this.renderPalette(); this.renderTestMeta();
      if (this.session.questions.length) this.startTimer();
    }
    if (name === 'results') { this._buildReviewPalette(); this.showReviewQuestion(this.reviewIndex || 0); }
  },

  // ── Screen: board selection (first run only) ────────────────────────────────
  _screenBoard() {
    return `
      <div class="screen welcome-screen">
        <div class="welcome-logo">
          <svg class="welcome-logo-icon" width="52" height="52" viewBox="0 0 32 32" aria-hidden="true">
            <rect width="32" height="32" rx="7" fill="#2563eb"/>
            <rect x="5"  y="22" width="5" height="5"  rx="1.5" fill="rgba(255,255,255,0.55)"/>
            <rect x="13" y="17" width="5" height="10" rx="1.5" fill="rgba(255,255,255,0.78)"/>
            <rect x="21" y="11" width="5" height="16" rx="1.5" fill="#ffffff"/>
            <polygon points="23.5,4 27,9.5 20,9.5" fill="#ffffff"/>
          </svg>
          Rise
        </div>
        <p class="welcome-sub">Grade X &amp; XII board exam practice</p>
        <div class="board-list">
          ${BOARDS.map(b => `
            <button class="btn board-btn" onclick="app.setBoard('${b.id}')">
              <strong>${esc(b.name)}</strong>
              <span>${esc(b.desc)}</span>
            </button>`).join('')}
        </div>
        <p class="welcome-foot">We remember your choice — you can switch boards any time from the ☰ menu.</p>
      </div>`;
  },

  setBoard(board) {
    state.board = board;
    LS.set(KEY.board, board);
    this.go(['home'], true);
  },

  switchBoard(board) {
    if (board === state.board) return;
    state.board = board;
    state.openPicker = null;
    state.mobileMenuOpen = false;
    LS.set(KEY.board, board);
    // Notes and results don't reflect the newly chosen board on their own screen,
    // so jump to that board's home page instead of leaving the click looking stuck.
    const cur = parseHash();
    if (cur.name === 'results' || cur.name === 'notes') {
      this.go(['home']);
    } else {
      this.render();
    }
  },

  // Top-level X / XII tab on the home screen — same board, different grade's banks.
  setGrade(grade) {
    if (grade === state.grade) return;
    state.grade = grade;
    state.openPicker = null;
    LS.set(KEY.grade, grade);
    this.render();
  },

  // ── Screen: progress — per-chapter accuracy, weakest chapters first ─────────
  _screenProgress() {
    const subjects = (SUBJECTS[state.board] || []).filter(s => bankSlug(s));
    const store = LS.get(KEY.progress, {});
    const now = Date.now();

    const sections = subjects.map(subject => {
      const bySubj = store[scopeKey(subject)] || {};
      const chapters = {};
      Object.values(bySubj).forEach(r => {
        const name = r.chapter || 'General';
        const c = chapters[name] || (chapters[name] = { correct: 0, wrong: 0, due: 0 });
        c.correct += r.correctCount || 0;
        c.wrong += r.wrongCount || 0;
        if (r.due <= now) c.due++;
      });
      const rows = Object.entries(chapters).sort((a, b) => {
        const accA = a[1].correct / (a[1].correct + a[1].wrong || 1);
        const accB = b[1].correct / (b[1].correct + b[1].wrong || 1);
        return accA - accB; // weakest chapter first
      });
      if (!rows.length) return '';
      const dueTotal = this._dueCount(subject);
      return `
        <section class="home-section">
          <h2 class="section-title">${esc(subject)}</h2>
          ${dueTotal ? `<button class="btn act-btn ghost small" onclick="app.startSpacedReview('${esc(subject)}')">
                          &#8635; Review ${plural(dueTotal, 'due question')}</button>` : ''}
          <ul class="recent-list">
            ${rows.map(([chapter, c]) => {
              const total = c.correct + c.wrong;
              const pct = total ? Math.round(c.correct / total * 100) : 0;
              return `<li class="recent-row card">
                <span class="recent-score ${pct >= 60 ? 'good' : 'weak'}">${pct}%</span>
                <span class="recent-desc">
                  <strong>${esc(chapter)}</strong>
                  <small>${plural(total, 'attempt')}${c.due ? ` · ${c.due} due for review` : ''}</small>
                </span>
              </li>`;
            }).join('')}
          </ul>
        </section>`;
    }).join('');

    return `
      <div class="screen">
        <h2>Progress</h2>
        <p class="subtitle">Accuracy by chapter, weakest first — built from your attempted mocks and drills.</p>
        ${sections || '<div class="card empty-state">Take a mock test or chapter drill to start building your progress history.</div>'}
      </div>`;
  },

  // Top-level X / XII tab pair — shared by the Home and Revision Notes screens so
  // switching grade anywhere carries over everywhere (it's one global toggle).
  _gradeTabs() {
    return `
      <div class="filter-bar grade-tabs" role="group" aria-label="Grade">
        ${GRADES.map(g => `
          <button class="filter-tab ${g.id === state.grade ? 'active' : ''}"
                  aria-pressed="${g.id === state.grade}" onclick="app.setGrade('${g.id}')">${esc(g.label)}</button>`).join('')}
      </div>`;
  },

  // ── Screen: home — practice, resume and history on one page ─────────────────
  _screenHome() {
    // Grade X's CBSE English still has no question bank — hide that placeholder
    // card there rather than show a permanent "coming soon" dead end. Hindi now
    // has a real bank (Course A, objective sections only) so it stays visible.
    // Grade XII has no banks yet for *any* subject, so every card there is meant to
    // show "coming soon" instead — that's the whole point of the XII shell.
    const subjects = (SUBJECTS[state.board] || [])
      .filter(s => !(state.grade === 'X' && state.board === 'CBSE' && s === 'English'));
    const draft    = this._draft();

    const resume = draft ? `
      <section class="resume-banner card">
        <div>
          <p class="resume-title">Resume your ${esc(MODES[draft.mode].label.toLowerCase())}</p>
          <p class="resume-sub">${esc(draft.subject)}${draft.chapter ? ' · ' + esc(draft.chapter) : ''} —
             ${Object.keys(draft.answers).length} of ${draft.questions.length} answered${draft.remaining !== null ? ` · ${this._mmss(draft.remaining)} left` : ''}</p>
        </div>
        <div class="resume-actions">
          <button class="btn" onclick="app.discardDraft()">Discard</button>
          <button class="btn primary" onclick="app.resumeDraft()">Resume</button>
        </div>
      </section>` : '';

    const cards = subjects.map(subject => {
      const hasBank  = !!bankSlug(subject);
      const open     = state.openPicker === subject;

      const actions = hasBank
        ? `<button class="btn primary act-btn" onclick="app.startTest({subject:'${esc(subject)}',mode:'mock'})">
             Mock test <small>${MODES.mock.count} Q · ${MODES.mock.seconds / 60} min</small>
           </button>
           <button class="btn act-btn" aria-expanded="${open}" onclick="app.togglePicker('${esc(subject)}')">
             Chapter drill <small>${MODES.drill.count} Q · untimed</small>
           </button>`
        : `<span class="soon-tag">Question bank coming soon</span>`;

      const bmCount  = hasBank ? this._bookmarkCount(subject) : 0;
      const dueCount = hasBank ? this._dueCount(subject) : 0;
      const reviewLinks = (bmCount || dueCount) ? `
          <div class="subj-actions">
            ${bmCount  ? `<button class="btn act-btn ghost small" onclick="app.startBookmarkReview('${esc(subject)}')">&#9733; Bookmarked <small>${bmCount}</small></button>` : ''}
            ${dueCount ? `<button class="btn act-btn ghost small" onclick="app.startSpacedReview('${esc(subject)}')">&#8635; Due for review <small>${dueCount}</small></button>` : ''}
          </div>` : '';

      return `
        <article class="subj-card card">
          <header class="subj-head">
            <h3>${esc(subject)}</h3>
            <span class="subj-meta" data-meta="${esc(subject)}">${hasBank ? '&nbsp;' : ''}</span>
          </header>
          ${hasBank ? this._difficultyBar(subject) : ''}
          <div class="subj-actions">${actions}</div>
          ${reviewLinks}
          <div class="chapter-picker" data-picker="${esc(subject)}" ${open ? '' : 'hidden'}>
            <p class="picker-hint">Pick a chapter to drill</p>
            <div class="chapter-chips" data-chips="${esc(subject)}">Loading chapters…</div>
          </div>
        </article>`;
    }).join('');

    const history = LS.get(KEY.results, [])
      .filter(h => (h.grade || 'X') === state.grade && h.board === state.board)
      .slice(0, 5);
    const recent = history.length ? `
      <section class="home-section">
        <h2 class="section-title">Recent attempts</h2>
        <ul class="recent-list">
          ${history.map(h => `
            <li class="recent-row card">
              <span class="recent-score ${h.correct / h.total >= 0.6 ? 'good' : 'weak'}">${Math.round(h.correct / h.total * 100)}%</span>
              <span class="recent-desc">
                <strong>${esc(h.subject)}</strong>
                <small>${esc(MODES[h.mode].label)}${h.chapter ? ' · ' + esc(h.chapter) : ''} · ${h.correct}/${h.total} · ${esc(h.when)}</small>
              </span>
              <button class="btn small" onclick="app.retryFromHistory(${h.ts})">Retry</button>
            </li>`).join('')}
        </ul>
      </section>` : '';

    return `
      <div class="screen home-screen">
        ${this._gradeTabs()}
        ${resume}
        <section class="home-section">
          <h2 class="section-title">Practice</h2>
          <p class="subtitle">Pick a subject and start — no extra screens in between.</p>
          <div class="subj-grid">${cards}</div>
        </section>
        ${recent}
      </div>`;
  },

  // Fill in question/chapter counts once banks load; keeps the first paint instant.
  _hydrateHome() {
    (SUBJECTS[state.board] || []).filter(s => bankSlug(s)).forEach(subject => {
      loadBank(subject).then(list => {
        const meta = document.querySelector(`[data-meta="${CSS.escape(subject)}"]`);
        if (meta) meta.textContent = `${list.length} questions · ${chaptersOf(list).length} chapters`;
        if (state.openPicker === subject) this._renderChips(subject, list);
      }).catch(() => {
        const meta = document.querySelector(`[data-meta="${CSS.escape(subject)}"]`);
        if (meta) meta.textContent = 'Questions unavailable';
      });
    });
    if (state.openPicker) {
      const bank = bankCache[state.openPicker];
      if (bank) this._renderChips(state.openPicker, bank);
    }
  },

  _DIFFICULTIES: [['all', 'All'], ['easy', 'Easy'], ['medium', 'Medium'], ['hard', 'Hard']],

  _difficultyBar(subject) {
    const cur = state.difficulty[subject] || 'all';
    return `<div class="filter-bar diff-bar" data-diff="${esc(subject)}">
      ${this._DIFFICULTIES.map(([id, label]) =>
        `<button class="filter-tab ${cur === id ? 'active' : ''}" data-level="${id}"
                 onclick="app.setDifficulty('${esc(subject)}','${id}')">${label}</button>`).join('')}
    </div>`;
  },

  setDifficulty(subject, level) {
    state.difficulty[subject] = level;
    const bar = document.querySelector(`[data-diff="${CSS.escape(subject)}"]`);
    if (bar) bar.querySelectorAll('.filter-tab').forEach(btn =>
      btn.classList.toggle('active', btn.dataset.level === level));
  },

  togglePicker(subject) {
    state.openPicker = state.openPicker === subject ? null : subject;
    // Only touch the affected card — no full-screen repaint, no lost scroll position.
    document.querySelectorAll('[data-picker]').forEach(el => {
      el.hidden = el.getAttribute('data-picker') !== state.openPicker;
    });
    document.querySelectorAll('[aria-expanded]').forEach(el => el.setAttribute('aria-expanded', 'false'));
    if (!state.openPicker) return;
    const card = document.querySelector(`[data-picker="${CSS.escape(subject)}"]`);
    const btn  = card && card.parentElement.querySelector('[aria-expanded]');
    if (btn) btn.setAttribute('aria-expanded', 'true');
    loadBank(subject)
      .then(list => this._renderChips(subject, list))
      .catch(err => {
        const box = document.querySelector(`[data-chips="${CSS.escape(subject)}"]`);
        if (box) box.textContent = err.message;
      });
  },

  _renderChips(subject, list) {
    const box = document.querySelector(`[data-chips="${CSS.escape(subject)}"]`);
    if (!box) return;
    const chapters = chaptersOf(list);
    // Index-based handlers: chapter titles never have to survive an HTML attribute round-trip.
    this._chapterIndex = this._chapterIndex || {};
    this._chapterIndex[subject] = chapters.map(c => c.name);
    box.innerHTML = chapters
      .map((c, i) => `<button class="chip" onclick="app.drillChapter('${esc(subject)}',${i})">
                   ${esc(c.name)}<span class="chip-count">${c.count}</span>
                 </button>`).join('');
  },

  drillChapter(subject, i) {
    const name = ((this._chapterIndex || {})[subject] || [])[i];
    if (name) this.startTest({ subject, mode: 'drill', chapter: name });
  },

  // ── Draft (an in-progress test survives navigation, refresh and crashes) ────
  _draft() {
    const d = LS.get(KEY.draft, null);
    if (!d || !d.questions || !d.questions.length) return null;
    if (d.board !== state.board) return null;
    return d;
  },
  _saveDraft() {
    if (!this.session) return;
    LS.set(KEY.draft, { ...this.session, board: state.board });
  },
  discardDraft() { LS.del(KEY.draft); this.render(); },
  resumeDraft() {
    const d = this._draft();
    if (!d) { this.render(); return; }
    this.session = d;
    this.go(['test']);
  },

  // ── Test session ────────────────────────────────────────────────────────────
  startTest({ subject, mode, chapter = null }) {
    const cfg = MODES[mode];
    this.session = {
      subject, mode, chapter,
      questions: [], answers: {}, marked: [], index: 0,
      remaining: cfg.seconds, loading: true, error: null
    };
    LS.del(KEY.draft);
    this.go(['test']);

    const difficulty = state.difficulty[subject] || 'all';
    this.session.difficulty = difficulty;

    loadBank(subject)
      .then(all => {
        const byChapter = chapter ? all.filter(q => (q.chapter || 'General') === chapter) : all;
        const pool = difficulty === 'all' ? byChapter : byChapter.filter(q => q.difficulty === difficulty);
        if (!pool.length) {
          throw new Error(difficulty === 'all'
            ? 'No questions in this chapter yet.'
            : `No ${difficulty} questions available${chapter ? ' in this chapter' : ''}. Try a different difficulty.`);
        }
        // Mock tests surface real board-paper questions first, filling remaining slots at random.
        const picked = mode === 'mock'
          ? shuffle(pool.filter(q => q.priority)).concat(shuffle(pool.filter(q => !q.priority))).slice(0, cfg.count)
          : shuffle(pool).slice(0, cfg.count);
        this.session.questions = picked.map((q, i) => ({ ...q, id: q.id || `q-${i}` }));
        this.session.loading = false;
        if (state.screen !== 'test') return;
        this.renderQuestion(); this.renderPalette(); this.renderTestMeta();
        this.startTimer();
        this._saveDraft();
      })
      .catch(err => {
        // No fabricated questions: an honest error beats fake answers in a study app.
        this.session.loading = false;
        this.session.error = err.message || 'Could not load questions.';
        if (state.screen === 'test') this.renderTestMeta();
      });
  },

  // Bookmarked review and spaced review both hand over an already-resolved question
  // list (no chapter/difficulty filtering, no timer) instead of going through startTest.
  startCustomTest(subject, mode, questions) {
    if (!questions.length) return;
    this.session = {
      subject, mode, chapter: null, difficulty: 'all',
      questions: shuffle(questions).slice(0, MODES[mode].count).map((q, i) => ({ ...q, id: q.id || `q-${i}` })),
      answers: {}, marked: [], index: 0,
      remaining: null, loading: false, error: null
    };
    LS.del(KEY.draft);
    this.go(['test']);
    this._saveDraft();
  },

  startBookmarkReview(subject) {
    const store = LS.get(KEY.bookmarks, {});
    const ids = Object.keys(store[scopeKey(subject)] || {});
    if (!ids.length) return;
    loadBank(subject).then(all => this.startCustomTest(subject, 'bookmark', all.filter(q => ids.includes(q.id))));
  },

  startSpacedReview(subject) {
    const store = LS.get(KEY.progress, {});
    const bySubj = store[scopeKey(subject)] || {};
    const now = Date.now();
    const dueIds = Object.keys(bySubj).filter(id => bySubj[id].due <= now);
    if (!dueIds.length) return;
    loadBank(subject).then(all => this.startCustomTest(subject, 'srs', all.filter(q => dueIds.includes(q.id))));
  },

  _screenTest() {
    const s = this.session;
    const diffTag = s.difficulty && s.difficulty !== 'all' ? ` · ${esc(s.difficulty)}` : '';
    const title = `${state.grade} · ${state.board} · ${esc(s.subject)}${s.chapter ? ' · ' + esc(s.chapter) : ''} · ${MODES[s.mode].label}${diffTag}`;
    return `
      <div class="screen test-screen" id="test-session">
        ${this._modalMarkup()}
        <div class="test-topbar">
          <p class="test-title">${title}</p>
          <div class="test-topbar-right">
            <span class="answered-count" id="answered-count"></span>
            <div id="timer" class="timer" role="timer" aria-live="off">--:--</div>
            <button class="btn quit-btn" onclick="app.quitTest()">Exit</button>
          </div>
        </div>
        <div class="progress-rail"><div class="progress-fill" id="progress-fill"></div></div>
        <div class="test-layout">
          <div class="card question-area">
            <div id="q-state"></div>
            <p id="q-number" class="q-number"></p>
            <p id="q-chapter" class="q-chapter"></p>
            <p id="q-text"   class="q-text"></p>
            <div id="options-list" role="group" aria-label="Answer options"></div>
            <div class="test-nav">
              <button class="btn nav-btn" onclick="app.prevQuestion()">&#8592; Prev</button>
              <button class="btn review-btn" id="mark-btn" onclick="app.markForReview()">&#9873; Mark</button>
              <button class="btn review-btn" id="bookmark-btn" onclick="app.toggleBookmark()">&#9734; Bookmark</button>
              <button class="btn primary nav-btn" onclick="app.nextQuestion()">Next &#8594;</button>
            </div>
            <p class="kbd-hint">Keyboard: <kbd>A</kbd>–<kbd>D</kbd> or <kbd>1</kbd>–<kbd>4</kbd> answer ·
               <kbd>←</kbd> <kbd>→</kbd> move · <kbd>M</kbd> mark · <kbd>Enter</kbd> next</p>
          </div>
          <details class="card palette-area" id="palette-panel" open>
            <summary class="palette-summary">Question palette</summary>
            <div class="palette-inner">
              <div class="palette-legend">
                <span><span class="dot answered"></span>Answered</span>
                <span><span class="dot review"></span>Marked</span>
                <span><span class="dot current-dot"></span>Current</span>
              </div>
              <div id="palette" class="omr-grid"></div>
              <label class="autonext">
                <input type="checkbox" id="autonext-toggle" ${this.autoNext ? 'checked' : ''}
                       onchange="app.setAutoNext(this.checked)">
                Jump to next question after answering
              </label>
              <button class="btn primary submit-btn" onclick="app.submitTest()">Submit test</button>
            </div>
          </details>
        </div>
      </div>`;
  },

  renderTestMeta() {
    const s = this.session;
    const box = document.getElementById('q-state');
    if (!box) return;
    if (s.loading) {
      box.innerHTML = '<div class="inline-state">Loading questions…</div>';
    } else if (s.error) {
      box.innerHTML = `<div class="inline-state error">${esc(s.error)}
        <button class="btn small" onclick="app.go(['home'])">Back to practice</button></div>`;
    } else {
      box.innerHTML = '';
    }
    const answered = Object.keys(s.answers).length;
    const total    = s.questions.length || 1;
    const counter  = document.getElementById('answered-count');
    if (counter) counter.textContent = s.questions.length ? `${answered}/${s.questions.length} answered` : '';
    const fill = document.getElementById('progress-fill');
    if (fill) fill.style.width = `${Math.round(answered / total * 100)}%`;
  },

  renderQuestion() {
    const s = this.session;
    if (!s || !s.questions.length) return;
    const q = s.questions[s.index];
    const numEl  = document.getElementById('q-number');
    const chEl   = document.getElementById('q-chapter');
    const textEl = document.getElementById('q-text');
    const optEl  = document.getElementById('options-list');
    if (!numEl || !textEl || !optEl) return;

    numEl.textContent  = `Question ${s.index + 1} of ${s.questions.length}`;
    if (chEl) chEl.textContent = q.chapter || '';
    textEl.textContent = q.text;

    optEl.innerHTML = q.options.map((opt, i) => {
      const selected = s.answers[q.id] === i;
      return `<button class="option-btn ${selected ? 'selected' : ''}"
                      aria-pressed="${selected}" onclick="app.selectOption(${i})">
                <span class="option-letter">${String.fromCharCode(65 + i)}</span>
                <span>${esc(opt)}</span>
              </button>`;
    }).join('');

    const markBtn = document.getElementById('mark-btn');
    if (markBtn) {
      const marked = s.marked.includes(s.index);
      markBtn.classList.toggle('marked', marked);
      markBtn.innerHTML = marked ? '&#9873; Marked' : '&#9873; Mark';
    }
    this._renderBookmarkBtn('bookmark-btn', s.subject, q.id);
    const prev = document.querySelector('.test-nav .nav-btn');
    if (prev) prev.disabled = s.index === 0;
  },

  _isBookmarked(subject, id) {
    const store = LS.get(KEY.bookmarks, {});
    const key = scopeKey(subject);
    return !!(store[key] && store[key][id]);
  },

  _bookmarkCount(subject) {
    const store = LS.get(KEY.bookmarks, {});
    return Object.keys(store[scopeKey(subject)] || {}).length;
  },

  _dueCount(subject) {
    const store = LS.get(KEY.progress, {});
    const now = Date.now();
    return Object.values(store[scopeKey(subject)] || {}).filter(r => r.due <= now).length;
  },

  _renderBookmarkBtn(btnId, subject, id) {
    const btn = document.getElementById(btnId);
    if (!btn) return;
    const on = this._isBookmarked(subject, id);
    btn.classList.toggle('marked', on);
    btn.innerHTML = on ? '&#9733; Bookmarked' : '&#9734; Bookmark';
  },

  toggleBookmark(subject, id) {
    if (subject === undefined) {
      const s = this.session;
      if (!s) return;
      subject = s.subject;
      id = s.questions[s.index].id;
    }
    const store = LS.get(KEY.bookmarks, {});
    const key = scopeKey(subject);
    const bySubj = store[key] || (store[key] = {});
    if (bySubj[id]) delete bySubj[id]; else bySubj[id] = { at: Date.now() };
    LS.set(KEY.bookmarks, store);
    this._renderBookmarkBtn('bookmark-btn', subject, id);
    this._renderBookmarkBtn('review-bookmark-btn', subject, id);
  },

  renderPalette() {
    const s = this.session;
    const palette = document.getElementById('palette');
    if (!palette || !s) return;
    palette.innerHTML = s.questions.map((q, i) => {
      const cls = ['omr-bubble',
        s.marked.includes(i) ? 'review' : s.answers[q.id] !== undefined ? 'answered' : '',
        i === s.index ? 'current' : ''
      ].filter(Boolean).join(' ');
      return `<button class="${cls}" ${i === s.index ? 'aria-current="true"' : ''}
                      onclick="app.jumpToQuestion(${i})"
                      aria-label="Question ${i + 1}">${i + 1}</button>`;
    }).join('');
  },

  setAutoNext(on) { this.autoNext = on; LS.set(KEY.autoNext, on); },

  selectOption(index) {
    const s = this.session;
    const q = s.questions[s.index];
    s.answers[q.id] = index;
    this.renderQuestion(); this.renderPalette(); this.renderTestMeta();
    this._saveDraft();
    if (this.autoNext && s.index < s.questions.length - 1) {
      setTimeout(() => { if (this.session === s) this.nextQuestion(); }, 180);
    }
  },

  nextQuestion() { this.jumpToQuestion(this.session.index + 1); },
  prevQuestion() { this.jumpToQuestion(this.session.index - 1); },

  jumpToQuestion(index) {
    const s = this.session;
    if (!s || !s.questions.length) return;
    s.index = Math.max(0, Math.min(index, s.questions.length - 1));
    this.renderQuestion(); this.renderPalette();
    this._saveDraft();
    const area = document.querySelector('.question-area');
    if (area) area.scrollTop = 0;
  },

  markForReview() {
    const s = this.session;
    const at = s.marked.indexOf(s.index);
    at === -1 ? s.marked.push(s.index) : s.marked.splice(at, 1);
    this.renderQuestion(); this.renderPalette();
    this._saveDraft();
  },

  _mmss(sec) {
    const m = Math.floor(sec / 60), r = sec % 60;
    return `${String(m).padStart(2, '0')}:${String(r).padStart(2, '0')}`;
  },

  startTimer() {
    clearInterval(this.timerInterval);
    const s = this.session;
    const el = document.getElementById('timer');
    if (!s || !el) return;
    if (s.remaining === null) { el.textContent = 'Untimed'; el.classList.add('untimed'); return; }

    let ticks = 0;
    const tick = () => {
      if (s.remaining <= 0) { clearInterval(this.timerInterval); this.submitTest(true); return; }
      el.textContent = this._mmss(s.remaining);
      el.classList.toggle('timer-low', s.remaining <= 300);
      if (s.remaining === 300) el.setAttribute('aria-live', 'polite');
      s.remaining--;
      if (++ticks % 5 === 0) this._saveDraft();
    };
    this.timerInterval = setInterval(tick, 1000);
    tick();
  },

  // ── Modal (Escape closes, Enter confirms, focus lands on the action) ─────────
  _modalMarkup() {
    return `
      <div class="modal-overlay" id="test-modal" hidden>
        <div class="modal-box" role="dialog" aria-modal="true" aria-labelledby="modal-title">
          <p class="modal-title" id="modal-title"></p>
          <p class="modal-body"  id="modal-body"></p>
          <div class="modal-actions">
            <button class="btn" id="modal-cancel" onclick="app._modalCancel()">Cancel</button>
            <button class="btn primary" id="modal-ok" onclick="app._modalOk()">OK</button>
          </div>
        </div>
      </div>`;
  },
  _modalOpen() {
    const o = document.getElementById('test-modal');
    return !!o && !o.hidden;
  },
  _showModal(title, body, onOk, okLabel = 'OK') {
    const overlay = document.getElementById('test-modal');
    if (!overlay) { if (onOk) onOk(); return; }
    document.getElementById('modal-title').textContent = title;
    document.getElementById('modal-body').textContent  = body;
    document.getElementById('modal-ok').textContent    = okLabel;
    this._modalOnOk = onOk;
    overlay.hidden = false;
    document.getElementById('modal-ok').focus();
  },
  _modalOk() {
    const o = document.getElementById('test-modal');
    if (o) o.hidden = true;
    const fn = this._modalOnOk; this._modalOnOk = null;
    if (fn) fn();
  },
  _modalCancel() {
    const o = document.getElementById('test-modal');
    if (o) o.hidden = true;
    this._modalOnOk = null;
  },

  quitTest() {
    this._showModal('Exit this test?', 'Your answers so far will be discarded.', () => {
      clearInterval(this.timerInterval);
      this.session = null;
      LS.del(KEY.draft);
      this.go(['home'], true);
    }, 'Exit');
  },

  submitTest(force = false) {
    const s = this.session;
    if (!s || !s.questions.length) return;
    const unanswered = s.questions.filter(q => s.answers[q.id] === undefined).length;

    const doSubmit = () => {
      clearInterval(this.timerInterval);
      let correct = 0;
      this.reviewData = s.questions.map((q, i) => {
        const ua = s.answers[q.id];
        const isCorrect = ua === q.correct;
        if (isCorrect) correct++;
        return {
          id: q.id, num: i + 1, text: q.text, options: q.options, correct: q.correct,
          userAnswer: ua, isCorrect, explanation: q.explanation || '', chapter: q.chapter || ''
        };
      });
      const skipped = this.reviewData.filter(r => r.userAnswer === undefined).length;
      const wrong   = this.reviewData.length - correct - skipped;

      this.lastConfig  = { subject: s.subject, mode: s.mode, chapter: s.chapter };
      this.reviewIndex = 0;
      this.reviewFilter = 'all';
      this.summary = { correct, wrong, skipped, total: this.reviewData.length };

      this._updateProgress(s.subject, this.reviewData);

      const now = Date.now();
      const past = LS.get(KEY.results, []);
      past.unshift({
        ...this.lastConfig, grade: state.grade, board: state.board, correct, total: this.reviewData.length,
        ts: now,
        when: new Date(now).toLocaleString(undefined,
          { day: 'numeric', month: 'short', hour: 'numeric', minute: '2-digit' })
      });
      LS.set(KEY.results, past.slice(0, 30));

      this.session = null;
      LS.del(KEY.draft);
      this.go(['results'], true);
    };

    if (!force && unanswered > 0) {
      this._showModal('Submit test?', `${plural(unanswered, 'question')} still unanswered.`, doSubmit, 'Submit');
    } else {
      doSubmit();
    }
  },

  // Leitner-style spaced repetition: every answered question moves its box up (correct)
  // or resets to 0 (wrong), which sets when it's next due for review.
  _updateProgress(subject, reviewData) {
    const store = LS.get(KEY.progress, {});
    const key = scopeKey(subject);
    const bySubj = store[key] || (store[key] = {});
    const now = Date.now();
    reviewData.forEach(r => {
      if (r.userAnswer === undefined) return;
      const rec = bySubj[r.id] || { box: 0, correctCount: 0, wrongCount: 0 };
      rec.chapter = r.chapter;
      rec.lastAt = now;
      rec.lastResult = r.isCorrect ? 'correct' : 'wrong';
      if (r.isCorrect) {
        rec.box = Math.min((rec.box || 0) + 1, SRS_INTERVALS.length - 1);
        rec.correctCount = (rec.correctCount || 0) + 1;
      } else {
        rec.box = 0;
        rec.wrongCount = (rec.wrongCount || 0) + 1;
      }
      rec.due = now + SRS_INTERVALS[rec.box] * 86400000;
      bySubj[r.id] = rec;
    });
    LS.set(KEY.progress, store);
  },

  // ── Screen: results ─────────────────────────────────────────────────────────
  _screenResults() {
    const { correct, wrong, skipped, total } = this.summary;
    const pct = Math.round(correct / total * 100);
    const cfg = this.lastConfig;
    const FILTERS = [
      { id: 'all',     label: `All ${total}` },
      { id: 'wrong',   label: `Incorrect ${wrong}` },
      { id: 'skipped', label: `Skipped ${skipped}` }
    ];
    return `
      <div class="screen" id="results">
        <div class="test-topbar">
          <p class="test-title">${esc(cfg.subject)}${cfg.chapter ? ' · ' + esc(cfg.chapter) : ''} · ${MODES[cfg.mode].label} — results</p>
          <div class="score-summary">
            <div class="score-tile pct-tile ${pct >= 60 ? 'good' : 'weak'}"><span class="tile-val">${pct}%</span><span class="tile-lbl">Score</span></div>
            <div class="score-tile correct-tile"><span class="tile-val">${correct}</span><span class="tile-lbl">Correct</span></div>
            <div class="score-tile wrong-tile"><span class="tile-val">${wrong}</span><span class="tile-lbl">Incorrect</span></div>
            <div class="score-tile skip-tile"><span class="tile-val">${skipped}</span><span class="tile-lbl">Skipped</span></div>
            <button class="btn exit-btn" onclick="app.exitReview()">Exit</button>
          </div>
        </div>
        <div class="test-layout">
          <div class="card question-area" id="rev-card-area"></div>
          <div class="card palette-area">
            <div class="palette-inner">
              <div class="filter-bar small-filters">
                ${FILTERS.map(f => `<button class="filter-tab ${this.reviewFilter === f.id ? 'active' : ''}"
                    onclick="app.setReviewFilter('${f.id}')">${f.label}</button>`).join('')}
              </div>
              <div id="rpal-grid" class="omr-grid"></div>
              <div class="results-actions">
                <button class="btn primary" onclick="app.retryLast()">Retry this ${cfg.mode === 'mock' ? 'mock' : cfg.mode === 'bookmark' ? 'bookmarked set' : cfg.mode === 'srs' ? 'review' : 'drill'}</button>
                <button class="btn" onclick="app.exitReview()">Back to practice</button>
              </div>
            </div>
          </div>
        </div>
      </div>`;
  },

  setReviewFilter(id) {
    this.reviewFilter = id;
    document.querySelectorAll('#results .filter-tab').forEach(btn =>
      btn.classList.toggle('active', btn.getAttribute('onclick').includes(`'${id}'`)));
    this._buildReviewPalette();
    const first = this._reviewList()[0];
    if (first) this.showReviewQuestion(this.reviewData.indexOf(first));
  },

  _reviewList() {
    const d = this.reviewData || [];
    if (this.reviewFilter === 'wrong')   return d.filter(r => !r.isCorrect && r.userAnswer !== undefined);
    if (this.reviewFilter === 'skipped') return d.filter(r => r.userAnswer === undefined);
    return d;
  },

  _buildReviewPalette() {
    const grid = document.getElementById('rpal-grid');
    if (!grid || !this.reviewData) return;
    const visible = this._reviewList();
    if (!visible.length) { grid.innerHTML = '<p class="empty-inline">Nothing here — nice work.</p>'; return; }
    grid.innerHTML = visible.map(r => {
      const i = this.reviewData.indexOf(r);
      const cls = r.isCorrect ? 'rev-correct' : r.userAnswer === undefined ? 'rev-skip' : 'rev-wrong';
      return `<button class="omr-bubble ${cls}" onclick="app.showReviewQuestion(${i})"
                      aria-label="Question ${r.num}">${r.num}</button>`;
    }).join('');
  },

  showReviewQuestion(i) {
    const data = this.reviewData || [];
    if (!data.length) return;
    this.reviewIndex = Math.max(0, Math.min(i, data.length - 1));
    const r = data[this.reviewIndex];
    const visible = this._reviewList();
    const pos = visible.indexOf(r);

    const optHtml = r.options.map((opt, oi) => {
      let cls = 'opt-neutral';
      if (oi === r.correct) cls = 'opt-correct';
      else if (oi === r.userAnswer) cls = 'opt-wrong';
      const marker = oi === r.correct ? '✓' : (oi === r.userAnswer && !r.isCorrect ? '✗' : '');
      return `<div class="rev-opt ${cls}">
                <span class="rev-opt-label">${String.fromCharCode(65 + oi)}</span>
                <span>${esc(opt)}</span>
                ${marker ? `<span class="rev-opt-marker">${marker}</span>` : ''}
              </div>`;
    }).join('');

    const badge = r.isCorrect ? '<span class="rev-badge correct">Correct</span>'
      : r.userAnswer === undefined ? '<span class="rev-badge skipped">Not attempted</span>'
      : '<span class="rev-badge wrong">Incorrect</span>';

    const prevR = pos > 0 ? visible[pos - 1] : null;
    const nextR = pos > -1 && pos < visible.length - 1 ? visible[pos + 1] : null;

    const area = document.getElementById('rev-card-area');
    if (area) area.innerHTML = `
      <div class="rev-card-header">
        <span class="rev-q-num">Q${r.num} of ${data.length}</span>${badge}
        <span class="rev-chapter">${esc(r.chapter || '')}</span>
        <button class="btn small review-btn" id="review-bookmark-btn"
                onclick="app.toggleBookmark('${esc(this.lastConfig.subject)}','${esc(r.id)}')">&#9734; Bookmark</button>
      </div>
      <p class="rev-q-text">${esc(r.text)}</p>
      <div class="rev-options">${optHtml}</div>
      <div class="rev-explanation"><strong>Why:</strong> ${esc(r.explanation || 'Review this topic in your textbook.')}</div>
      <div class="test-nav">
        <button class="btn nav-btn" ${prevR ? `onclick="app.showReviewQuestion(${data.indexOf(prevR)})"` : 'disabled'}>&#8592; Prev</button>
        <button class="btn primary nav-btn" ${nextR ? `onclick="app.showReviewQuestion(${data.indexOf(nextR)})"` : 'disabled'}>Next &#8594;</button>
      </div>`;
    this._renderBookmarkBtn('review-bookmark-btn', this.lastConfig.subject, r.id);

    document.querySelectorAll('#rpal-grid .omr-bubble').forEach(btn => {
      btn.classList.toggle('current', btn.textContent.trim() === String(r.num));
    });
  },

  retryLast() {
    const cfg = this.lastConfig;
    // Bookmarked/due sets are recomputed fresh rather than replayed — the whole point
    // of spaced review is that "due" changes after every attempt.
    if (cfg.mode === 'bookmark') { this.startBookmarkReview(cfg.subject); return; }
    if (cfg.mode === 'srs')      { this.startSpacedReview(cfg.subject);  return; }
    this.startTest({ ...cfg });
  },

  // Leaving the review drops the attempt so a stray #/results cannot resurrect it.
  exitReview() {
    this.reviewData = null;
    this.go(['home'], true);
  },

  retryFromHistory(ts) {
    const h = LS.get(KEY.results, []).find(r => r.ts === ts);
    if (!h) return;
    if (h.mode === 'bookmark') { this.startBookmarkReview(h.subject); return; }
    if (h.mode === 'srs')      { this.startSpacedReview(h.subject);  return; }
    this.startTest({ subject: h.subject, mode: h.mode, chapter: h.chapter || null });
  },

  // ── Screen: revision notes (consolidated across CBSE, ICSE and IB) ──────────
  _screenNotes(subjectId, chapterIdx) {
    const id = NOTES_CATALOG.some(s => s.id === subjectId) ? subjectId : NOTES_CATALOG[0].id;
    // Notes content only exists for Grade X so far — Grade XII falls back to the
    // existing "coming soon" empty-state below rather than a separate code path.
    const chapters = state.grade === 'XII' ? [] : consolidatedChapters(id);
    const idx = chapters.length ? Math.max(0, Math.min(chapterIdx, chapters.length - 1)) : 0;
    return `
      <div class="screen rev-screen">
        <div class="rev-heading-row">
          <h2>Revision notes</h2>
          ${this._gradeTabs()}
        </div>
        <div class="filter-bar notes-subj-tabs">${this._subjectTabs(id)}</div>
        ${chapters.length ? `
        <div class="rev-topbar">
          <input class="notes-search" id="notes-search" type="search" placeholder="Search all chapters…  ( / )"
                 value="${esc(state.notesQuery)}" oninput="app.setNotesQuery(this.value)">
          <div class="filter-bar" id="notes-filters">${this._filterBar(this._chapterItems(id, chapters, idx))}</div>
        </div>
        <label class="ch-select-wrap">
          <span class="sr-only">Chapter</span>
          <select class="ch-select" id="notes-select" onchange="app.selectChapter(Number(this.value))">
            ${this._chapterOptions(chapters, idx)}
          </select>
        </label>
        <div class="rev-layout">
          <nav class="rev-nav" id="notes-nav" aria-label="Chapters">${this._chapterTabs(id, chapters, idx)}</nav>
          <div class="rev-content card" id="notes-body">${this._notesBody(id, chapters, idx)}</div>
        </div>` : `<div class="card empty-state">Notes for this subject are coming soon.</div>`}
      </div>`;
  },

  _subjectTabs(activeId) {
    return NOTES_CATALOG.map(s => `<button class="filter-tab ${s.id === activeId ? 'active' : ''}"
             onclick="app.go(['notes','${s.id}','0'])">${esc(s.label)}</button>`).join('');
  },

  _chLabel(ch) { return `${ch.chapter} (${ch._boards.join(', ')})`; },

  _FILTERS: [
    { id: 'all',           label: 'All' },
    { id: 'theorems',      label: 'Theorems' },
    { id: 'formulae',      label: 'Formulae' },
    { id: 'logic',         label: 'Logic' },
    { id: 'tips',          label: 'Tips' },
    { id: 'bestPractices', label: 'Best practices' }
  ],
  _CATS: [
    { key: 'theorems',      label: 'Theorem',       cls: 'badge-th' },
    { key: 'formulae',      label: 'Formula',       cls: 'badge-f'  },
    { key: 'logic',         label: 'Logic',         cls: 'badge-l'  },
    { key: 'tips',          label: 'Tip',           cls: 'badge-t'  },
    { key: 'bestPractices', label: 'Best practice', cls: 'badge-b'  }
  ],

  _filterBar(items) {
    const counts = {};
    (items || []).forEach(it => { counts[it.cat] = (counts[it.cat] || 0) + 1; });
    return this._FILTERS.map(f => {
      const n = f.id === 'all' ? (items || []).length : (counts[f.id] || 0);
      const dead = items && n === 0;
      return `<button class="filter-tab ${state.notesFilter === f.id ? 'active' : ''}"
               ${dead ? 'disabled' : ''} onclick="app.setNotesFilter('${f.id}')">
               ${f.label}${items ? `<span class="chip-count">${n}</span>` : ''}</button>`;
    }).join('');
  },

  // Small screens get a native picker: one tap through 30 chapters beats a wall of chips.
  _chapterOptions(chapters, idx) {
    return chapters.map((c, i) =>
      `<option value="${i}" ${i === idx ? 'selected' : ''}>${esc(this._chLabel(c))}</option>`).join('');
  },

  _chapterTabs(id, chapters, idx) {
    const q = state.notesQuery.trim().toLowerCase();
    return chapters.map((c, i) => {
      const hits = q ? this._chapterItems(id, chapters, i).filter(it => it.text.toLowerCase().includes(q)).length : 0;
      if (q && !hits) return '';
      return `<button class="ch-tab ${i === idx && !q ? 'active' : ''}" ${i === idx && !q ? 'aria-current="true"' : ''}
                      onclick="app.selectChapter(${i})">
                ${esc(this._chLabel(c))}${q ? `<span class="chip-count">${hits}</span>` : ''}
              </button>`;
    }).join('') || '<p class="empty-inline">No chapter matches.</p>';
  },

  // Flatten one chapter into badge-tagged items, merging the separate THEOREMS lookup.
  _chapterItems(key, chapters, i) {
    const ch = chapters[i];
    const tKey = ch._theoremKey || key;
    const merged = { ...ch, theorems: [...(ch.theorems || []), ...(((THEOREMS[tKey] || {})[ch.chapter]) || [])] };
    const out = [];
    this._CATS.forEach(cat => (merged[cat.key] || []).forEach(text =>
      out.push({ text, label: cat.label, cls: cat.cls, cat: cat.key, chapter: ch.chapter })));
    return out;
  },

  _notesBody(key, chapters, idx) {
    const q = state.notesQuery.trim().toLowerCase();
    const inFilter = it => state.notesFilter === 'all' || state.notesFilter === it.cat;

    if (q) {
      const hits = chapters.flatMap((_, i) => this._chapterItems(key, chapters, i))
        .filter(inFilter).filter(it => it.text.toLowerCase().includes(q));
      if (!hits.length) return `<div class="empty-state">No notes match “${esc(state.notesQuery)}”.</div>`;
      return `<h3 class="rev-ch-title">${plural(hits.length, 'match')} for “${esc(state.notesQuery)}”</h3>
              <ul class="rev-list">${hits.map(it => this._noteItem(it, true)).join('')}</ul>`;
    }

    const items = this._chapterItems(key, chapters, idx).filter(inFilter);
    const chHtml = typeof chapters[idx].html === 'function' ? chapters[idx].html() : '';
    return `<h3 class="rev-ch-title">${esc(this._chLabel(chapters[idx]))}</h3>${chHtml}
      ${items.length ? `<ul class="rev-list">${items.map(it => this._noteItem(it, false)).join('')}</ul>`
                     : (chHtml ? '' : '<div class="empty-state">Nothing under this filter — try "All".</div>')}`;
  },

  _noteItem(it, showChapter) {
    return `<li class="rev-item"><span class="badge ${it.cls}">${it.label}</span>
      <span>${esc(it.text)}${showChapter ? `<em class="note-src">${esc(it.chapter)}</em>` : ''}</span></li>`;
  },

  // Notes interactions repaint only the two panels — scroll and focus stay put.
  _repaintNotes() {
    const id = NOTES_CATALOG.some(s => s.id === state.params[0]) ? state.params[0] : NOTES_CATALOG[0].id;
    const chapters = state.grade === 'XII' ? [] : consolidatedChapters(id);
    if (!chapters.length) return;
    const idx = Math.max(0, Math.min(Number(state.params[1]) || 0, chapters.length - 1));
    const nav  = document.getElementById('notes-nav');
    const body = document.getElementById('notes-body');
    const bar  = document.getElementById('notes-filters');
    if (nav)  nav.innerHTML  = this._chapterTabs(id, chapters, idx);
    if (body) body.innerHTML = this._notesBody(id, chapters, idx);
    if (bar)  bar.innerHTML  = this._filterBar(this._chapterItems(id, chapters, idx));
    const sel = document.getElementById('notes-select');
    if (sel && Number(sel.value) !== idx) sel.value = String(idx);
  },

  selectChapter(i) {
    state.params[1] = String(i);
    state.notesQuery = '';
    state.notesFilter = 'all';
    const search = document.getElementById('notes-search');
    if (search) search.value = '';
    // Keep the URL shareable without stacking a history entry per chapter click.
    location.replace(location.pathname + location.search + buildHash(['notes', state.params[0], String(i)]));
    this._repaintNotes();
    const body = document.getElementById('notes-body');
    if (body) body.scrollTop = 0;
  },

  setNotesFilter(id) { state.notesFilter = id; this._repaintNotes(); },
  setNotesQuery(v)   { state.notesQuery  = v;  this._repaintNotes(); },

  // ── Keyboard ────────────────────────────────────────────────────────────────
  onKey(e) {
    if (e.metaKey || e.ctrlKey || e.altKey) return;
    const tag = (e.target.tagName || '').toLowerCase();
    const typing = tag === 'input' || tag === 'textarea' || tag === 'select';

    if (this._modalOpen()) {
      if (e.key === 'Escape') { e.preventDefault(); this._modalCancel(); }
      return;
    }
    if (state.screen === 'test' && !typing && this.session && this.session.questions.length) {
      const k = e.key.toLowerCase();
      const letter = 'abcd'.indexOf(k);
      const digit  = '1234'.indexOf(k);
      const optionCount = this.session.questions[this.session.index].options.length;
      if (letter > -1 && letter < optionCount) { e.preventDefault(); this.selectOption(letter); return; }
      if (digit  > -1 && digit  < optionCount) { e.preventDefault(); this.selectOption(digit);  return; }
      if (e.key === 'ArrowRight' || e.key === 'Enter') { e.preventDefault(); this.nextQuestion(); return; }
      if (e.key === 'ArrowLeft')  { e.preventDefault(); this.prevQuestion(); return; }
      if (k === 'm')              { e.preventDefault(); this.markForReview(); return; }
      return;
    }
    if (state.screen === 'results' && !typing) {
      const visible = this._reviewList();
      const pos = visible.indexOf(this.reviewData[this.reviewIndex]);
      if (e.key === 'ArrowRight' && pos > -1 && pos < visible.length - 1) {
        e.preventDefault(); this.showReviewQuestion(this.reviewData.indexOf(visible[pos + 1]));
      } else if (e.key === 'ArrowLeft' && pos > 0) {
        e.preventDefault(); this.showReviewQuestion(this.reviewData.indexOf(visible[pos - 1]));
      }
      return;
    }
    if (state.screen === 'notes' && e.key === '/' && !typing) {
      const search = document.getElementById('notes-search');
      if (search) { e.preventDefault(); search.focus(); search.select(); }
    }
  }
};

window.app = app;
app.init();
