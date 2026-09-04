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
          'Memorise first 20 elements: H, He, Li, Be, B, C, N, O, F, Ne, Na, Mg, Al, Si, P, S, Cl, Ar, K, Ca',
          'Link trends: smaller atom → stronger nuclear pull → higher IE and electronegativity'
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
    ]
};

// merge IB and ICSE Mathematics chapters into the main Mathematics array
REVISION.Mathematics = REVISION.Mathematics
  .concat(REVISION['ICSE Mathematics'] || [])
  .concat(REVISION['IB Mathematics'] || []);
delete REVISION['ICSE Mathematics'];
delete REVISION['IB Mathematics'];

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
  board:    'rise.board',
  draft:    'rise.draft',
  results:  'rise.results',
  autoNext: 'rise.autoNext'
};

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

// Subject → question-bank file. Subjects absent here have no bank yet.
const BANKS = {
  'Mathematics':    'mathematics',
  'Science':        'science',
  'Social Science': 'social-science'
};

const BOARDS = [
  { id: 'CBSE', name: 'CBSE',       desc: 'Central Board of Secondary Education' },
  { id: 'ICSE', name: 'ICSE',       desc: 'Indian Certificate of Secondary Education' },
  { id: 'IB',   name: 'IB Diploma', desc: 'International Baccalaureate (MYP-5)' }
];

const MODES = {
  mock:  { label: 'Full Mock Test', count: 50, seconds: 40 * 60 },
  drill: { label: 'Chapter Drill',  count: 25, seconds: null }
};

// Revision notes are keyed either per board ("ICSE Mathematics") or shared ("Physics").
function notesKeyFor(board, subject) {
  if (REVISION[`${board} ${subject}`]) return `${board} ${subject}`;
  if (REVISION[subject]) return subject;
  return null;
}
function notesSubjects(board) {
  return (SUBJECTS[board] || []).filter(s => notesKeyFor(board, s));
}

// ─── Question bank loading (cached — one fetch per subject per session) ───────
const bankCache = {};
function loadBank(subject) {
  if (bankCache[subject]) return Promise.resolve(bankCache[subject]);
  const slug = BANKS[subject];
  if (!slug) return Promise.reject(new Error('No question bank for ' + subject));
  return fetch(`questions/${slug}.json`)
    .then(r => { if (!r.ok) throw new Error(`Could not load questions (HTTP ${r.status})`); return r.json(); })
    .then(list => { bankCache[subject] = list; return list; });
}
function chaptersOf(list) {
  const seen = new Map();
  list.forEach(q => seen.set(q.chapter || 'General', (seen.get(q.chapter || 'General') || 0) + 1));
  return [...seen.entries()].map(([name, count]) => ({ name, count }));
}

// ─── State ────────────────────────────────────────────────────────────────────
const state = {
  board:   LS.get(KEY.board, null),
  screen:  'board',
  params:  [],
  notesQuery: '',
  notesFilter: 'all',
  openPicker: null   // subject whose chapter list is expanded on the home screen
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

  depth: 0,          // how many in-app navigations deep we are (drives the Back affordance)
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
    const target = buildHash(parts);
    if (location.hash === target) { this.render(); return; }
    if (replace) {
      location.replace(location.pathname + location.search + target);
      this.render();
    } else {
      this.depth++;
      location.hash = target;   // hashchange fires → render()
    }
  },

  goBack() {
    if (this.depth > 0) { this.depth--; history.back(); }
    else this.go(['home'], true);
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

    state.screen = name;
    state.params = r.parts;

    document.getElementById('app').innerHTML = this._header() + this._screen(name, r.parts);
    window.scrollTo(0, 0);
    this._afterRender(name, r.parts);
  },

  _header() {
    if (state.screen === 'board') return '';

    const inTest   = state.screen === 'test';
    const showBack = !inTest && state.screen !== 'home';

    const back = showBack
      ? `<button class="hdr-back" onclick="app.goBack()" aria-label="Go back">&#8592; Back</button>`
      : '';

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

    // Switching board is a one-step control, not a trip back to the welcome screen.
    const right = inTest
      ? `<span class="hdr-board">${esc(state.board)}</span>`
      : `<label class="hdr-board-picker">
           <span class="sr-only">Board</span>
           <select class="hdr-board-select" onchange="app.switchBoard(this.value)">
             ${BOARDS.map(b => `<option value="${b.id}" ${b.id === state.board ? 'selected' : ''}>${esc(b.name)}</option>`).join('')}
           </select>
         </label>`;

    return `
      <header class="app-header">
        <div class="hdr-left">${back}${logo}</div>
        <div class="hdr-right">${right}</div>
      </header>`;
  },

  _screen(name, params) {
    switch (name) {
      case 'board':   return this._screenBoard();
      case 'home':    return this._screenHome();
      case 'notes':   return params.length ? this._screenNotes(params[0], Number(params[1]) || 0)
                                           : this._screenNotesIndex();
      case 'test':    return this._screenTest();
      case 'results': return this._screenResults();
      default:        return '';
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
        <p class="welcome-sub">Grade 10 board exam practice</p>
        <div class="board-list">
          ${BOARDS.map(b => `
            <button class="btn board-btn" onclick="app.setBoard('${b.id}')">
              <strong>${esc(b.name)}</strong>
              <span>${esc(b.desc)}</span>
            </button>`).join('')}
        </div>
        <p class="welcome-foot">We remember your choice — you can switch boards any time from the header.</p>
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
    LS.set(KEY.board, board);
    this.render();
  },

  // ── Screen: home — practice, resume and history on one page ─────────────────
  _screenHome() {
    const subjects = SUBJECTS[state.board] || [];
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
      const hasBank  = !!BANKS[subject];
      const notesKey = notesKeyFor(state.board, subject);
      const open     = state.openPicker === subject;

      const actions = hasBank
        ? `<button class="btn primary act-btn" onclick="app.startTest({subject:'${esc(subject)}',mode:'mock'})">
             Mock test <small>${MODES.mock.count} Q · ${MODES.mock.seconds / 60} min</small>
           </button>
           <button class="btn act-btn" aria-expanded="${open}" onclick="app.togglePicker('${esc(subject)}')">
             Chapter drill <small>${MODES.drill.count} Q · untimed</small>
           </button>`
        : `<span class="soon-tag">Question bank coming soon</span>`;

      const notesBtn = notesKey
        ? `<button class="btn act-btn ghost" onclick="app.go(['notes','${esc(subject)}','0'])">Revision notes</button>`
        : '';

      return `
        <article class="subj-card card">
          <header class="subj-head">
            <h3>${esc(subject)}</h3>
            <span class="subj-meta" data-meta="${esc(subject)}">${hasBank ? '&nbsp;' : ''}</span>
          </header>
          <div class="subj-actions">${actions}${notesBtn}</div>
          <div class="chapter-picker" data-picker="${esc(subject)}" ${open ? '' : 'hidden'}>
            <p class="picker-hint">Pick a chapter to drill</p>
            <div class="chapter-chips" data-chips="${esc(subject)}">Loading chapters…</div>
          </div>
        </article>`;
    }).join('');

    const history = LS.get(KEY.results, []).slice(0, 5);
    const recent = history.length ? `
      <section class="home-section">
        <h2 class="section-title">Recent attempts</h2>
        <ul class="recent-list">
          ${history.map((h, i) => `
            <li class="recent-row card">
              <span class="recent-score ${h.correct / h.total >= 0.6 ? 'good' : 'weak'}">${Math.round(h.correct / h.total * 100)}%</span>
              <span class="recent-desc">
                <strong>${esc(h.subject)}</strong>
                <small>${esc(MODES[h.mode].label)}${h.chapter ? ' · ' + esc(h.chapter) : ''} · ${h.correct}/${h.total} · ${esc(h.when)}</small>
              </span>
              <button class="btn small" onclick="app.retryFromHistory(${i})">Retry</button>
            </li>`).join('')}
        </ul>
      </section>` : '';

    return `
      <div class="screen home-screen">
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
    (SUBJECTS[state.board] || []).filter(s => BANKS[s]).forEach(subject => {
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

    loadBank(subject)
      .then(all => {
        const pool = chapter ? all.filter(q => (q.chapter || 'General') === chapter) : all;
        if (!pool.length) throw new Error('No questions in this chapter yet.');
        const picked = shuffle(pool).slice(0, cfg.count);
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

  _screenTest() {
    const s = this.session;
    const title = `${state.board} · ${esc(s.subject)}${s.chapter ? ' · ' + esc(s.chapter) : ''} · ${MODES[s.mode].label}`;
    return `
      <div class="screen test-screen" id="test-session">
        ${this._modalMarkup()}
        <div class="test-topbar">
          <p class="test-title">${title}</p>
          <div class="test-topbar-right">
            <span class="answered-count" id="answered-count"></span>
            <div id="timer" class="timer" role="timer" aria-live="off">--:--</div>
            <button class="btn quit-btn" onclick="app.quitTest()">Quit</button>
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
    const prev = document.querySelector('.test-nav .nav-btn');
    if (prev) prev.disabled = s.index === 0;
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
    this._showModal('Quit this test?', 'Your answers so far will be discarded.', () => {
      clearInterval(this.timerInterval);
      this.session = null;
      LS.del(KEY.draft);
      this.go(['home'], true);
    }, 'Quit');
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
          num: i + 1, text: q.text, options: q.options, correct: q.correct,
          userAnswer: ua, isCorrect, explanation: q.explanation || '', chapter: q.chapter || ''
        };
      });
      const skipped = this.reviewData.filter(r => r.userAnswer === undefined).length;
      const wrong   = this.reviewData.length - correct - skipped;

      this.lastConfig  = { subject: s.subject, mode: s.mode, chapter: s.chapter };
      this.reviewIndex = 0;
      this.reviewFilter = 'all';
      this.summary = { correct, wrong, skipped, total: this.reviewData.length };

      const past = LS.get(KEY.results, []);
      past.unshift({
        ...this.lastConfig, board: state.board, correct, total: this.reviewData.length,
        when: new Date().toLocaleDateString(undefined, { day: 'numeric', month: 'short' })
      });
      LS.set(KEY.results, past.slice(0, 10));

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
                <button class="btn primary" onclick="app.retryLast()">Retry this ${cfg.mode === 'mock' ? 'mock' : 'drill'}</button>
                <button class="btn" onclick="app.go(['home'],true)">Back to practice</button>
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
      </div>
      <p class="rev-q-text">${esc(r.text)}</p>
      <div class="rev-options">${optHtml}</div>
      <div class="rev-explanation"><strong>Why:</strong> ${esc(r.explanation || 'Review this topic in your textbook.')}</div>
      <div class="test-nav">
        <button class="btn nav-btn" ${prevR ? `onclick="app.showReviewQuestion(${data.indexOf(prevR)})"` : 'disabled'}>&#8592; Prev</button>
        <button class="btn primary nav-btn" ${nextR ? `onclick="app.showReviewQuestion(${data.indexOf(nextR)})"` : 'disabled'}>Next &#8594;</button>
      </div>`;

    document.querySelectorAll('#rpal-grid .omr-bubble').forEach(btn => {
      btn.classList.toggle('current', btn.textContent.trim() === String(r.num));
    });
  },

  retryLast() { this.startTest({ ...this.lastConfig }); },

  retryFromHistory(i) {
    const h = LS.get(KEY.results, [])[i];
    if (h) this.startTest({ subject: h.subject, mode: h.mode, chapter: h.chapter || null });
  },

  // ── Screen: revision notes ──────────────────────────────────────────────────
  _screenNotesIndex() {
    const subjects = notesSubjects(state.board);
    if (!subjects.length) {
      return `<div class="screen"><h2>Revision notes</h2>
        <div class="card empty-state">Notes for ${esc(state.board)} are coming soon.</div></div>`;
    }
    return `
      <div class="screen">
        <h2>Revision notes</h2>
        <p class="subtitle">Formulae, theorems, logic and exam tips</p>
        <div class="subj-grid">
          ${subjects.map(s => {
            const chapters = REVISION[notesKeyFor(state.board, s)] || [];
            return `<button class="btn board-btn" onclick="app.go(['notes','${esc(s)}','0'])">
                      <strong>${esc(s)}</strong><span>${plural(chapters.length, 'chapter')}</span>
                    </button>`;
          }).join('')}
        </div>
      </div>`;
  },

  _screenNotes(subject, chapterIdx) {
    const key = notesKeyFor(state.board, subject);
    if (!key) {
      return `<div class="screen"><h2>${esc(subject)}</h2>
        <div class="card empty-state">Notes for this subject are coming soon.
          <button class="btn" onclick="app.go(['notes'])">See available notes</button></div></div>`;
    }
    const chapters = REVISION[key];
    const idx = Math.max(0, Math.min(chapterIdx, chapters.length - 1));
    return `
      <div class="screen rev-screen">
        <div class="rev-topbar">
          <h2>${esc(subject)}</h2>
          <input class="notes-search" id="notes-search" type="search" placeholder="Search all chapters…  ( / )"
                 value="${esc(state.notesQuery)}" oninput="app.setNotesQuery(this.value)">
          <div class="filter-bar" id="notes-filters">${this._filterBar(this._chapterItems(key, chapters, idx))}</div>
        </div>
        <label class="ch-select-wrap">
          <span class="sr-only">Chapter</span>
          <select class="ch-select" id="notes-select" onchange="app.selectChapter(Number(this.value))">
            ${this._chapterOptions(chapters, idx)}
          </select>
        </label>
        <div class="rev-layout">
          <nav class="rev-nav" id="notes-nav" aria-label="Chapters">${this._chapterTabs(subject, chapters, idx)}</nav>
          <div class="rev-content card" id="notes-body">${this._notesBody(key, chapters, idx)}</div>
        </div>
      </div>`;
  },

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
      `<option value="${i}" ${i === idx ? 'selected' : ''}>${esc(c.chapter)}</option>`).join('');
  },

  _chapterTabs(subject, chapters, idx) {
    const q = state.notesQuery.trim().toLowerCase();
    return chapters.map((c, i) => {
      const hits = q ? this._chapterItems(subject, chapters, i).filter(it => it.text.toLowerCase().includes(q)).length : 0;
      if (q && !hits) return '';
      return `<button class="ch-tab ${i === idx && !q ? 'active' : ''}" ${i === idx && !q ? 'aria-current="true"' : ''}
                      onclick="app.selectChapter(${i})">
                ${esc(c.chapter)}${q ? `<span class="chip-count">${hits}</span>` : ''}
              </button>`;
    }).join('') || '<p class="empty-inline">No chapter matches.</p>';
  },

  // Flatten one chapter into badge-tagged items, merging the separate THEOREMS lookup.
  _chapterItems(key, chapters, i) {
    const ch = chapters[i];
    const merged = { ...ch, theorems: [...(ch.theorems || []), ...(((THEOREMS[key] || {})[ch.chapter]) || [])] };
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
    return `<h3 class="rev-ch-title">${esc(chapters[idx].chapter)}</h3>
      ${items.length ? `<ul class="rev-list">${items.map(it => this._noteItem(it, false)).join('')}</ul>`
                     : '<div class="empty-state">Nothing under this filter — try “All”.</div>'}`;
  },

  _noteItem(it, showChapter) {
    return `<li class="rev-item"><span class="badge ${it.cls}">${it.label}</span>
      <span>${esc(it.text)}${showChapter ? `<em class="note-src">${esc(it.chapter)}</em>` : ''}</span></li>`;
  },

  // Notes interactions repaint only the two panels — scroll and focus stay put.
  _repaintNotes() {
    const subject = state.params[0];
    const key = notesKeyFor(state.board, subject);
    if (!key) return;
    const chapters = REVISION[key];
    const idx = Math.max(0, Math.min(Number(state.params[1]) || 0, chapters.length - 1));
    const nav  = document.getElementById('notes-nav');
    const body = document.getElementById('notes-body');
    const bar  = document.getElementById('notes-filters');
    if (nav)  nav.innerHTML  = this._chapterTabs(subject, chapters, idx);
    if (body) body.innerHTML = this._notesBody(key, chapters, idx);
    if (bar)  bar.innerHTML  = this._filterBar(this._chapterItems(key, chapters, idx));
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
