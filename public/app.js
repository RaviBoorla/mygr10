// ─── State ────────────────────────────────────────────────────────────────────
const state = {
  board:           null,
  mode:            null,   // 'mock' | 'drill'
  subject:         null,
  revisionSubject: null,
  revisionChapter: 0,
  revisionFilter:  'all',  // 'all'|'formulae'|'logic'|'tips'|'bestPractices'
  currentScreen:   'board-selection',
  history:         []      // stack of previous screen ids
};

// ─── Revision content ─────────────────────────────────────────────────────────
const REVISION = {
  CBSE: {
    Mathematics: [
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
          'Congruency criteria (Gr 9): SSS, SAS, ASA, AAS, RHS — all five sides/angles must correspond correctly',
          'Similarity criteria: AA (two angles), SSS (all side ratios equal), SAS (two sides ratio + included angle)',
          'AA is sufficient for similarity because the third angle is forced (angle sum = 180°)',
          'Converse of BPT: if AD/DB = AE/EC then DE ∥ BC',
          'Converse of Pythagoras: if a² + b² = c² then the angle opposite c = 90°',
          'Similar triangles have equal angles AND proportional sides — both conditions hold together',
          'All equilateral triangles are similar; all squares are similar'
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
    ]
  },
  ICSE: {
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
    Mathematics: [
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
    ]
  },
  IB: {
    Mathematics: [
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
    Sciences: [
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
  }
};

// ─── HTML escape helper ───────────────────────────────────────────────────────
function esc(str) {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}

// ─── Subject lists ────────────────────────────────────────────────────────────
const SUBJECTS = {
  CBSE: ['Mathematics', 'Science', 'Social Science', 'English', 'Hindi'],
  ICSE: ['Mathematics', 'Physics', 'Chemistry', 'Biology', 'History & Civics', 'Geography', 'English'],
  IB:   ['Mathematics', 'Sciences', 'Individuals & Societies', 'Language & Literature']
};

// ─── App ──────────────────────────────────────────────────────────────────────
const app = {

  // ── Bootstrap ──────────────────────────────────────────────────────────────
  init() { this.render(); },

  // ── Navigation ─────────────────────────────────────────────────────────────
  navigate(screenId) {
    if (state.currentScreen !== screenId) state.history.push(state.currentScreen);
    state.currentScreen = screenId;
    this.render();
    window.scrollTo(0, 0);
  },

  goBack() {
    if (!state.history.length) return;
    state.currentScreen = state.history.pop();
    this.render();
    window.scrollTo(0, 0);
  },

  goHome() {
    if (this.timerInterval) clearInterval(this.timerInterval);
    Object.assign(state, {
      board: null, mode: null, subject: null,
      revisionSubject: null, revisionChapter: 0, revisionFilter: 'all',
      currentScreen: 'board-selection', history: []
    });
    this.render();
  },

  // ── Render ──────────────────────────────────────────────────────────────────
  render() {
    document.getElementById('app').innerHTML =
      this._header() + this._screen();
  },

  _header() {
    const s = state.currentScreen;
    if (s === 'board-selection') return '';

    const isDuringTest = s === 'test-session';
    const canGoBack    = state.history.length > 0 && s !== 'dashboard' && !isDuringTest;

    const back = canGoBack
      ? `<button class="hdr-back" onclick="app.goBack()">&#8592; Back</button>`
      : `<div></div>`;

    const logoTarget = isDuringTest ? '' : `onclick="app.navigate('dashboard')"`;
    const logo = `<span class="hdr-logo" ${logoTarget}>Mygr10</span>`;

    const right = state.board
      ? `<span class="hdr-board">${esc(state.board)}</span>
         <button class="hdr-change" onclick="app.goHome()">Change board</button>`
      : '';

    return `
      <header class="app-header">
        <div class="hdr-left">${back}${logo}</div>
        <div class="hdr-right">${right}</div>
      </header>`;
  },

  _screen() {
    switch (state.currentScreen) {
      case 'board-selection':   return this._screenBoardSelect();
      case 'dashboard':         return this._screenDashboard();
      case 'subject-selection': return this._screenSubjectSelect();
      case 'test-session':      return this._screenTest();
      case 'results':           return this._screenResults();
      case 'revision':          return this._screenRevisionList();
      case 'revision-content':  return this._screenRevisionContent();
      default: return '<p class="screen">Unknown screen.</p>';
    }
  },

  // ── Screens ─────────────────────────────────────────────────────────────────
  _screenBoardSelect() {
    return `
      <div class="screen welcome-screen">
        <div class="welcome-logo">Mygr10</div>
        <p class="welcome-sub">Grade 10 board exam practice</p>
        <div class="board-list">
          <button class="btn board-btn" onclick="app.setBoard('CBSE')">
            <strong>CBSE</strong>
            <span>Central Board of Secondary Education</span>
          </button>
          <button class="btn board-btn" onclick="app.setBoard('ICSE')">
            <strong>ICSE</strong>
            <span>Indian Certificate of Secondary Education</span>
          </button>
          <button class="btn board-btn" onclick="app.setBoard('IB')">
            <strong>IB Diploma</strong>
            <span>International Baccalaureate (MYP-5)</span>
          </button>
        </div>
      </div>`;
  },

  _screenDashboard() {
    return `
      <div class="screen">
        <h2 class="dash-title">What would you like to do today?</h2>
        <div class="mode-grid">
          <div class="mode-card card" onclick="app.setMode('mock')">
            <div class="mode-icon">&#128221;</div>
            <h3>Full Mock Test</h3>
            <p>40 MCQs &bull; 90 min &bull; Full syllabus</p>
            <button class="btn primary">Start Mock</button>
          </div>
          <div class="mode-card card" onclick="app.setMode('drill')">
            <div class="mode-icon">&#127919;</div>
            <h3>Chapter Drill</h3>
            <p>25 MCQs &bull; Untimed &bull; One chapter</p>
            <button class="btn primary">Start Drill</button>
          </div>
          <div class="mode-card card" onclick="app.startRevision()">
            <div class="mode-icon">&#128218;</div>
            <h3>Revision Notes</h3>
            <p>Formulae, tips &amp; key concepts</p>
            <button class="btn primary">Open</button>
          </div>
        </div>
      </div>`;
  },

  _screenSubjectSelect() {
    const label = state.mode === 'mock' ? 'Full Mock Test' : 'Chapter Drill';
    const btns  = (SUBJECTS[state.board] || []).map(s =>
      `<button class="btn subject-btn" onclick="app.selectSubject('${esc(s)}')">${esc(s)}</button>`
    ).join('');
    return `
      <div class="screen">
        <h2>${esc(label)}</h2>
        <p class="subtitle">Choose a subject</p>
        <div class="btn-group">${btns}</div>
      </div>`;
  },

  _screenTest() {
    return `
      <div class="screen" id="test-session">
        <div class="test-topbar">
          <p id="test-title" class="test-title"></p>
          <div class="test-topbar-right">
            <div id="timer" class="timer">--:--</div>
            <button class="btn quit-btn" onclick="app.quitTest()">Quit</button>
          </div>
        </div>
        <div class="test-layout">
          <div class="card question-area">
            <p id="q-number" class="q-number"></p>
            <p id="q-text"   class="q-text"></p>
            <div id="options-list"></div>
            <div class="test-nav">
              <button class="btn nav-btn" onclick="app.prevQuestion()">&#8592; Prev</button>
              <button class="btn review-btn" id="mark-btn" onclick="app.markForReview()">&#9873; Mark</button>
              <button class="btn primary nav-btn" onclick="app.nextQuestion()">Next &#8594;</button>
            </div>
          </div>
          <div class="card palette-area">
            <h4 class="palette-title">Question Palette</h4>
            <div class="palette-legend">
              <span><span class="dot answered"></span>Answered</span>
              <span><span class="dot review"></span>Review</span>
              <span><span class="dot current-dot"></span>Current</span>
            </div>
            <div id="palette" class="omr-grid"></div>
            <button class="btn primary submit-btn" onclick="app.submitTest()">Submit Test</button>
          </div>
        </div>
      </div>`;
  },

  _screenResults() {
    return `
      <div class="screen" id="results">
        <h2 style="text-align:center;">Your Results</h2>
        <div class="card score-card">
          <div id="final-score" class="final-score"></div>
          <p id="score-comment" class="score-comment"></p>
        </div>
        <div id="review-list"></div>
        <div class="results-actions">
          <button class="btn" onclick="app.navigate('subject-selection')">Try Again</button>
          <button class="btn primary" onclick="app.navigate('dashboard')">Dashboard</button>
          <button class="btn" onclick="app.goHome()">Change Board</button>
        </div>
      </div>`;
  },

  _screenRevisionList() {
    const btns = (SUBJECTS[state.board] || []).map(s =>
      `<button class="btn subject-btn" onclick="app.openRevisionSubject('${esc(s)}')">${esc(s)}</button>`
    ).join('');
    return `
      <div class="screen">
        <h2>Revision Notes</h2>
        <p class="subtitle">Pick a subject to review formulae, tips &amp; key concepts</p>
        <div class="btn-group">${btns}</div>
      </div>`;
  },

  _screenRevisionContent() {
    const subject  = state.revisionSubject;
    const chapters = (REVISION[state.board] || {})[subject];

    if (!chapters || chapters.length === 0) {
      return `
        <div class="screen">
          <h2>${esc(subject)}</h2>
          <div class="card empty-state">Revision notes for this subject are coming soon.</div>
        </div>`;
    }

    const idx = Math.min(state.revisionChapter, chapters.length - 1);
    const ch  = chapters[idx];

    const FILTERS = [
      { id: 'all',           label: 'All' },
      { id: 'formulae',      label: 'Formulae' },
      { id: 'logic',         label: 'Logic' },
      { id: 'tips',          label: 'Tips' },
      { id: 'bestPractices', label: 'Best Practices' }
    ];
    const CATS = [
      { key: 'formulae',      label: 'Formula',       cls: 'badge-f' },
      { key: 'logic',         label: 'Logic',         cls: 'badge-l' },
      { key: 'tips',          label: 'Tip',           cls: 'badge-t' },
      { key: 'bestPractices', label: 'Best Practice', cls: 'badge-b' }
    ];

    const chapterTabs = chapters.map((c, i) =>
      `<button class="ch-tab ${i === idx ? 'active' : ''}"
               onclick="app.selectRevisionChapter(${i})">${esc(c.chapter)}</button>`
    ).join('');

    const filterBar = FILTERS.map(f =>
      `<button class="filter-tab ${state.revisionFilter === f.id ? 'active' : ''}"
               onclick="app.setFilter('${f.id}')">${f.label}</button>`
    ).join('');

    const items = [];
    CATS.forEach(({ key, label, cls }) => {
      if (state.revisionFilter !== 'all' && state.revisionFilter !== key) return;
      (ch[key] || []).forEach(text =>
        items.push(`<li class="rev-item"><span class="badge ${cls}">${label}</span>${esc(text)}</li>`)
      );
    });

    const contentHtml = items.length
      ? `<ul class="rev-list">${items.join('')}</ul>`
      : '<div class="empty-state">No items match this filter.</div>';

    return `
      <div class="screen rev-screen">
        <div class="rev-topbar">
          <h2>${esc(subject)}</h2>
          <div class="filter-bar">${filterBar}</div>
        </div>
        <div class="rev-layout">
          <nav class="rev-nav">${chapterTabs}</nav>
          <div class="rev-content card">
            <h3 class="rev-ch-title">${esc(ch.chapter)}</h3>
            ${contentHtml}
          </div>
        </div>
      </div>`;
  },

  // ── Actions ──────────────────────────────────────────────────────────────────
  setBoard(board) {
    state.board = board;
    state.history = [];
    this.navigate('dashboard');
  },

  setMode(mode) {
    state.mode = mode;
    this.navigate('subject-selection');
  },

  startRevision() {
    this.navigate('revision');
  },

  selectSubject(subject) {
    state.subject = subject;
    state.mode === 'mock' ? this.startTest(40, 90 * 60) : this.startTest(25, null);
  },

  openRevisionSubject(subject) {
    state.revisionSubject = subject;
    state.revisionChapter = 0;
    state.revisionFilter  = 'all';
    this.navigate('revision-content');
  },

  selectRevisionChapter(idx) {
    state.revisionChapter = idx;
    document.getElementById('app').innerHTML = this._header() + this._screenRevisionContent();
  },

  setFilter(filter) {
    state.revisionFilter = filter;
    document.getElementById('app').innerHTML = this._header() + this._screenRevisionContent();
  },

  // ── Test session ─────────────────────────────────────────────────────────────
  startTest(qCount, timeLimit) {
    this.questions = Array.from({ length: qCount }, (_, i) => ({
      id: i,
      text: `Sample question ${i + 1} for ${state.subject}. (Mock data — replace with API call.)`,
      options: ['Option A', 'Option B', 'Option C', 'Option D'],
      correct: Math.floor(Math.random() * 4),
      tag: 'Topic ' + (Math.floor(i / 5) + 1)
    }));
    this.userAnswers         = {};
    this.reviewSet           = new Set();
    this.currentQuestionIndex = 0;

    this.navigate('test-session');

    const el = document.getElementById('test-title');
    if (el) el.textContent =
      `${state.board} · ${state.subject} · ${state.mode === 'mock' ? 'Full Mock' : 'Chapter Drill'}`;

    this.renderQuestion();
    this.renderPalette();
    this.startTimer(timeLimit);
  },

  renderQuestion() {
    const q       = this.questions[this.currentQuestionIndex];
    const numEl   = document.getElementById('q-number');
    const textEl  = document.getElementById('q-text');
    const optEl   = document.getElementById('options-list');
    const markBtn = document.getElementById('mark-btn');
    if (!numEl || !textEl || !optEl) return;

    numEl.textContent  = `Question ${this.currentQuestionIndex + 1} of ${this.questions.length}`;
    textEl.textContent = q.text;

    optEl.innerHTML = ['A','B','C','D'].map((letter, i) =>
      `<button class="option-btn ${this.userAnswers[q.id] === i ? 'selected' : ''}"
               onclick="app.selectOption(${i})">
         <span class="option-letter">${letter}</span>
         <span>${esc(q.options[i])}</span>
       </button>`
    ).join('');

    if (markBtn) {
      const marked = this.reviewSet.has(this.currentQuestionIndex);
      markBtn.classList.toggle('marked', marked);
      markBtn.textContent = marked ? '⚑ Marked' : '⚑ Mark';
    }
  },

  renderPalette() {
    const palette = document.getElementById('palette');
    if (!palette) return;
    palette.innerHTML = this.questions.map((q, i) => {
      const answered = this.userAnswers[q.id] !== undefined;
      const reviewed = this.reviewSet.has(i);
      const current  = i === this.currentQuestionIndex;
      const cls = ['omr-bubble',
        reviewed ? 'review' : answered ? 'answered' : '',
        current  ? 'current' : ''
      ].filter(Boolean).join(' ');
      return `<div class="${cls}" onclick="app.jumpToQuestion(${i})">${i + 1}</div>`;
    }).join('');
  },

  selectOption(index) {
    this.userAnswers[this.questions[this.currentQuestionIndex].id] = index;
    this.renderQuestion();
    this.renderPalette();
  },

  nextQuestion() {
    if (this.currentQuestionIndex < this.questions.length - 1) {
      this.currentQuestionIndex++;
      this.renderQuestion();
      this.renderPalette();
    }
  },

  prevQuestion() {
    if (this.currentQuestionIndex > 0) {
      this.currentQuestionIndex--;
      this.renderQuestion();
      this.renderPalette();
    }
  },

  jumpToQuestion(index) {
    this.currentQuestionIndex = index;
    this.renderQuestion();
    this.renderPalette();
  },

  markForReview() {
    const idx = this.currentQuestionIndex;
    this.reviewSet.has(idx) ? this.reviewSet.delete(idx) : this.reviewSet.add(idx);
    this.renderQuestion();
    this.renderPalette();
  },

  startTimer(timeLimit) {
    if (this.timerInterval) clearInterval(this.timerInterval);
    const el = document.getElementById('timer');
    if (!el) return;

    if (timeLimit === null) { el.textContent = 'Untimed'; return; }

    let s = timeLimit;
    const tick = () => {
      if (s <= 0) { this.submitTest(); return; }
      const m = Math.floor(s / 60), sec = s % 60;
      el.textContent = `${String(m).padStart(2,'0')}:${String(sec).padStart(2,'0')}`;
      el.classList.toggle('timer-low', s <= 300);
      s--;
    };
    this.timerInterval = setInterval(tick, 1000);
    tick();
  },

  quitTest() {
    if (!confirm('Quit this test? Your progress will be lost.')) return;
    clearInterval(this.timerInterval);
    state.history = [];
    this.navigate('dashboard');
  },

  submitTest() {
    const unanswered = this.questions.filter(q => this.userAnswers[q.id] === undefined).length;
    if (unanswered > 0 && !confirm(`${unanswered} question${unanswered > 1 ? 's' : ''} unanswered. Submit anyway?`)) return;
    clearInterval(this.timerInterval);

    let score = 0;
    const wrong = [];
    this.questions.forEach(q => {
      const ua = this.userAnswers[q.id];
      if (ua === q.correct) {
        score++;
      } else {
        wrong.push({
          q:       q.text,
          correct: `${String.fromCharCode(65 + q.correct)}) ${q.options[q.correct]}`,
          user:    ua !== undefined ? `${String.fromCharCode(65 + ua)}) ${q.options[ua]}` : 'Not answered'
        });
      }
    });

    state.history = ['dashboard'];
    this.navigate('results');

    const pct = Math.round(score / this.questions.length * 100);
    const scoreEl   = document.getElementById('final-score');
    const commentEl = document.getElementById('score-comment');
    if (scoreEl)   scoreEl.textContent  = `${score} / ${this.questions.length}`;
    if (commentEl) commentEl.textContent =
      pct === 100 ? 'Perfect score! Outstanding.' :
      pct >= 80   ? 'Great work — you\'re well prepared.' :
      pct >= 60   ? 'Good effort — review the ones you missed.' :
                    'Keep practising — you\'ll get there!';

    const list = document.getElementById('review-list');
    if (!list) return;
    if (!wrong.length) {
      list.innerHTML = '<div class="card empty-state" style="color:var(--success)">All answers correct!</div>';
      return;
    }
    list.innerHTML = wrong.map(w => `
      <div class="card wrong-card">
        <p class="wrong-q">${esc(w.q)}</p>
        <p class="wrong-user">&#10007; Your answer: ${esc(w.user)}</p>
        <p class="wrong-correct">&#10003; Correct: ${esc(w.correct)}</p>
      </div>`).join('');
  }
};

window.app = app;
app.init();
