window.REVISION = window.REVISION || {};
window.REVISION['IX Mathematics'] = [
  {
    chapter: 'Orienting Yourself: The Use of Coordinates',
    formulae: [
      'Midpoint of segment joining (x₁,y₁) and (x₂,y₂) = ((x₁+x₂)/2, (y₁+y₂)/2)',
      'Section formula — point dividing AB in ratio m:n from A = ((m·x₂+n·x₁)/(m+n), (m·y₂+n·y₁)/(m+n))',
      'Reflection across x-axis: (x, y) → (x, –y); across y-axis: (x, y) → (–x, y)'
    ],
    logic: [
      'The Cartesian plane has two perpendicular number lines: the x-axis (horizontal) and y-axis (vertical) meeting at the origin (0, 0)',
      'The axes divide the plane into four quadrants: QI (+,+), QII (–,+), QIII (–,–), QIV (+,–)',
      'A point (x, y): x is the abscissa (horizontal distance), y is the ordinate (vertical distance)',
      'Points on the x-axis have y = 0; points on the y-axis have x = 0',
      'The concept originates from René Descartes (17th century); grid-based thinking appeared much earlier in the Sindhu–Sarasvatī civilisation'
    ],
    tips: [
      'Identify the quadrant by checking the signs of x and y: (+,+) → QI; (–,+) → QII; (–,–) → QIII; (+,–) → QIV',
      'On reflection, only the sign of the coordinate perpendicular to the axis of reflection changes'
    ],
    bestPractices: [
      'Always label axes and plot at least 3 points to verify a linear relationship',
      'For the section formula, confirm which point is A and which is B before substituting m and n'
    ]
  },
  {
    chapter: 'Introduction to Linear Polynomials',
    formulae: [
      'A polynomial in x: aₙxⁿ + aₙ₋₁xⁿ⁻¹ + … + a₁x + a₀ (n is a non-negative integer)',
      'Zero/root of linear polynomial ax + b (a ≠ 0): x = –b/a'
    ],
    logic: [
      'Degree = highest power of the variable; leading coefficient = coefficient of the highest-degree term',
      'Polynomial types by degree: Constant (0), Linear (1), Quadratic (2), Cubic (3)',
      'A linear polynomial ax + b represents a straight line in the coordinate plane',
      'Polynomials are closed under addition, subtraction, and multiplication — the result is always a polynomial',
      'Expressions with negative or fractional exponents (e.g., x⁻¹, √x) are NOT polynomials',
      'Many real-life situations (cost, distance, profit) are modelled by linear polynomials'
    ],
    tips: [
      'Check whether an expression is a polynomial by ensuring all exponents of variables are non-negative integers',
      'The zero of a polynomial is the x-value where the graph crosses the x-axis'
    ],
    bestPractices: [
      'To find the zero of p(x) = ax + b, set p(x) = 0 and solve for x',
      'Identify the degree first to classify the polynomial before solving'
    ]
  },
  {
    chapter: 'The World of Numbers',
    formulae: [
      'Number system nesting: ℕ ⊂ W ⊂ ℤ ⊂ ℚ ⊂ ℝ (Natural ⊂ Whole ⊂ Integers ⊂ Rational ⊂ Real)'
    ],
    logic: [
      'Natural numbers (ℕ): 1, 2, 3, … — closed under + and ×, but not – or ÷',
      'Whole numbers (W): 0, 1, 2, … — includes zero',
      'Integers (ℤ): …, –2, –1, 0, 1, 2, … — closed under +, –, ×',
      'Rational numbers (ℚ): p/q where p, q ∈ ℤ, q ≠ 0 — decimal is terminating or repeating',
      'Irrational numbers: cannot be written as p/q — decimal is non-terminating, non-repeating (e.g., √2, π)',
      'Zero was formalised by Brahmagupta (628 CE); the Bakhśhālī Manuscript contains one of the earliest known uses of zero as a placeholder'
    ],
    tips: [
      'To test if a number is rational, check whether its decimal representation terminates or repeats',
      'Every integer is a rational number (write n as n/1), but not every rational number is an integer'
    ],
    bestPractices: [
      'When classifying a number, work outward: check ℕ first, then W, ℤ, ℚ, and finally ℝ',
      'State the reason (terminating/repeating decimal vs non-terminating/non-repeating) when classifying rational vs irrational'
    ]
  },
  {
    chapter: 'Exploring Algebraic Identities',
    formulae: [
      '(a + b)² = a² + 2ab + b²',
      '(a – b)² = a² – 2ab + b²',
      '(a + b)(a – b) = a² – b²',
      '(a + b + c)² = a² + b² + c² + 2ab + 2bc + 2ca',
      '(a + b)³ = a³ + 3a²b + 3ab² + b³',
      '(a – b)³ = a³ – 3a²b + 3ab² – b³',
      'a³ + b³ = (a + b)(a² – ab + b²)',
      'a³ – b³ = (a – b)(a² + ab + b²)'
    ],
    logic: [
      'An algebraic identity is an equation true for ALL values of the variables — unlike an equation, which may hold only for specific values',
      'The difference of squares identity (a+b)(a–b) = a²–b² enables quick mental arithmetic: 99×101 = (100–1)(100+1) = 9999',
      'Identities are used to factorise expressions: x² – 9 = (x+3)(x–3)'
    ],
    tips: [
      'Choose the identity that matches the structure of the expression: look for perfect squares, sum/difference of cubes, or difference of squares',
      'Verify an identity by substituting specific values (e.g., a=2, b=3) on both sides'
    ],
    bestPractices: [
      'Memorise the 8 key identities; use geometric proofs (area models) to understand why they are true',
      'When factorising, first check for a common factor, then apply an identity to what remains'
    ]
  },
  {
    chapter: 'I\'m Up and Down, and Round and Round (Circles)',
    formulae: [
      'Circumference = 2πr; Area of circle = πr²',
      'Central angle theorem: central angle = 2 × inscribed angle (subtending the same arc)',
      'Sum of opposite angles of a cyclic quadrilateral = 180°'
    ],
    logic: [
      'Chord: a segment with both endpoints on the circle. Diameter: the longest chord, passing through the centre',
      'The perpendicular from the centre to a chord bisects the chord (and vice versa)',
      'Equal chords are equidistant from the centre',
      'Angle in a semicircle = 90° (Thales\' theorem)',
      'Angles subtended by the same arc on the same side of the chord are equal',
      'Tangent: a line touching the circle at exactly one point; it is perpendicular to the radius at the point of contact'
    ],
    tips: [
      'In cyclic quadrilateral problems, the first step is usually to identify the supplementary angle pairs',
      'If asked to prove an angle = 90°, check whether it is an angle in a semicircle (Thales\' theorem)'
    ],
    bestPractices: [
      'Draw a clear diagram, mark all given angles and lengths, and label the centre before applying theorems',
      'State the theorem used (e.g., "angle in a semicircle") to justify each step in a proof'
    ]
  },
  {
    chapter: 'Measuring Space: Perimeter and Area',
    formulae: [
      'Triangle area = ½ × base × height',
      'Rectangle area = l × w; Parallelogram area = base × height',
      'Trapezium area = ½(a + b) × h; Rhombus area = ½d₁d₂',
      'Circle area = πr²; Circumference = 2πr',
      'Heron\'s formula: A = √[s(s–a)(s–b)(s–c)], where s = (a+b+c)/2',
      'Sum of interior angles of an n-sided polygon = (n–2) × 180°'
    ],
    logic: [
      'Perimeter = total boundary length (1D measurement); Area = region enclosed within a 2D figure (2D measurement)',
      'Two shapes can have the same perimeter but different areas, and vice versa',
      'Athletes in a staggered-start relay race start at different positions because outer lanes have larger circumference — all athletes run equal distances'
    ],
    tips: [
      'Use Heron\'s formula when all three sides are known but the height is not given',
      'For composite shapes, divide the figure into simpler shapes, find each area separately, then add or subtract'
    ],
    bestPractices: [
      'Always state units for perimeter (cm, m) and area (cm², m²) — they differ',
      'Check that height is perpendicular to base in triangle/parallelogram area formulas; a slant side is not the height'
    ]
  },
  {
    chapter: 'The Mathematics of Maybe: Introduction to Probability',
    formulae: [
      'P(A) = number of favourable outcomes / total number of equally likely outcomes',
      'P(not A) = 1 – P(A)',
      'Sum of probabilities of all outcomes in a sample space = 1',
      'Range of probability: 0 ≤ P(A) ≤ 1'
    ],
    logic: [
      'Sample space: the set of all possible outcomes of an experiment',
      'Event: a subset of the sample space',
      'Experimental probability: based on actual trials/data; Theoretical probability: based on equally likely outcomes',
      'Mutually exclusive events cannot occur simultaneously; P(A and B) = 0',
      'As the number of trials increases, experimental probability approaches theoretical probability (Law of Large Numbers)'
    ],
    tips: [
      'P = 0 means impossible; P = 1 means certain — use these as a sanity check',
      'List the sample space carefully for dice, coins, or cards before computing probability'
    ],
    bestPractices: [
      'Always check that you have counted all equally likely outcomes — drawing a tree diagram helps',
      'Confirm events are mutually exclusive before adding probabilities'
    ]
  },
  {
    chapter: 'Predicting What Comes Next: Exploring Sequences and Progressions',
    formulae: [
      'AP nth term: tₙ = a + (n–1)d (a = first term, d = common difference)',
      'AP sum of n terms: Sₙ = n/2 × [2a + (n–1)d] = n/2 × (a + l), where l = last term',
      'GP nth term: tₙ = ar^(n–1) (a = first term, r = common ratio)'
    ],
    logic: [
      'A sequence is an ordered list of numbers following a pattern; each number is a term',
      'Arithmetic Progression (AP): each term differs from the previous by a constant common difference d',
      'Geometric Progression (GP): each term is multiplied by a constant common ratio r',
      'An explicit formula gives any term directly from n; a recursive formula gives each term in relation to the previous term',
      'Famous sequences: square numbers, triangle numbers, Fibonacci numbers'
    ],
    tips: [
      'To check if a sequence is an AP, verify that consecutive differences are equal; for a GP, verify that consecutive ratios are equal',
      'If asked for the sum of an AP when only the first and last terms are known, use Sₙ = n/2 × (a + l)'
    ],
    bestPractices: [
      'Identify a and d (or r) first, then substitute into the formula — avoid computing term by term for large n',
      'Write out the first 3–4 terms to confirm the pattern before applying a formula'
    ]
  },
  {
    chapter: 'Propositions and their Converses',
    formulae: [
      'Contrapositive of "If P then Q" is "If not Q then not P" — logically equivalent to the original',
      'Biconditional P ↔ Q: both P→Q and Q→P are true ("P if and only if Q")'
    ],
    logic: [
      'A proposition is a statement that is either true or false',
      'Converse of "If P then Q" is "If Q then P" — a true proposition does NOT always have a true converse',
      'A counterexample is a single instance that disproves a proposition',
      'The Baudhāyana–Pythagoras theorem (a²+b²=c²) and its converse are BOTH true — a rare case',
      'A proposition and its converse can both be true, one true and one false, or both false'
    ],
    tips: [
      'To disprove a proposition, find just ONE counterexample — you don\'t need to prove it false in general',
      'Do not assume the converse is true without proof; always verify separately'
    ],
    bestPractices: [
      'State the proposition clearly in "If P, then Q" form before writing the converse or contrapositive',
      'Use the contrapositive (logically equivalent to the original) when a direct proof is difficult'
    ]
  },
  {
    chapter: 'How Quantities Combine: Understanding Data',
    formulae: [
      'Mean (Arithmetic) = sum of values / number of values',
      'Weighted mean = Σ(wᵢ × xᵢ) / Σwᵢ',
      'Combined mean of two groups: x̄ = (n₁x̄₁ + n₂x̄₂) / (n₁ + n₂)',
      'Range = maximum – minimum'
    ],
    logic: [
      'Median: middle value when data is in order; for even n, average the two middle values',
      'Mode: most frequently occurring value; a data set can have no mode, one mode, or multiple modes',
      'Mean is best when data has no extreme outliers; median is more robust to outliers',
      'Frequency distribution: a table showing how often each value (or class) occurs',
      'Histogram: bar graph for continuous data with adjacent bars; modal class has the highest frequency'
    ],
    tips: [
      'Sort data before finding median — this is the most common error in exams',
      'A single extreme value (outlier) affects the mean significantly but not the median'
    ],
    bestPractices: [
      'State which measure of central tendency is most appropriate and why before computing',
      'Use the combined mean formula rather than re-summing all values when two group means are given'
    ]
  },
  {
    chapter: 'The World of Algorithms',
    formulae: [
      'Euclid\'s GCD algorithm: repeatedly replace (a, b) with (b, a mod b) until remainder = 0'
    ],
    logic: [
      'An algorithm is a finite, well-defined sequence of steps to solve a problem',
      'Five properties of a good algorithm: Input, Output, Definiteness (each step is clear), Finiteness (terminates), Effectiveness',
      'The word "algorithm" comes from Al-Khwārizmī, a 9th-century mathematician',
      'Flowchart symbols: Oval = Start/End, Rectangle = Process, Diamond = Decision, Parallelogram = Input/Output',
      'Selection sort: repeatedly find the minimum of the unsorted portion and place it at the front',
      'Bubble sort: repeatedly compare and swap adjacent elements until no swaps are needed'
    ],
    tips: [
      'An infinite loop is not a valid algorithm — finiteness is a required property',
      'Standard algorithms (addition, multiplication, sorting) are examples you use every day'
    ],
    bestPractices: [
      'Before coding or implementing, write the algorithm in plain English or as a flowchart to catch logical errors early',
      'Trace through the algorithm manually with a small example to verify correctness before generalising'
    ]
  },
  {
    chapter: 'Quadrilaterals',
    formulae: [
      'Sum of interior angles of any quadrilateral = 360°',
      'Sum of interior angles of an n-sided polygon = (n–2) × 180°',
      'Midpoint theorem: segment joining midpoints of two sides of a triangle is parallel to and half the third side'
    ],
    logic: [
      'Parallelogram: opposite sides equal and parallel, opposite angles equal, diagonals bisect each other',
      'Rectangle: parallelogram with all angles = 90°; diagonals are equal',
      'Rhombus: parallelogram with all sides equal; diagonals bisect each other at right angles',
      'Square: rectangle + rhombus — all sides equal, all angles 90°, equal diagonals that perpendicularly bisect each other',
      'Trapezium: exactly one pair of parallel sides; Kite: two pairs of consecutive equal sides',
      'Varignon\'s theorem: joining midpoints of any quadrilateral\'s sides always forms a parallelogram'
    ],
    tips: [
      'Every square is a rectangle and a rhombus, but not every rectangle is a square — check properties carefully',
      'To prove a quadrilateral is a parallelogram, it is enough to show one of: both pairs opposite sides equal, both pairs opposite sides parallel, diagonals bisect each other, or one pair of sides both equal and parallel'
    ],
    bestPractices: [
      'Draw and label the figure with all given measurements before applying any theorem',
      'State the property or theorem used at each step of a proof'
    ]
  },
  {
    chapter: 'Two Variables, One Line',
    formulae: [
      'Standard form of a linear equation in two variables: ax + by + c = 0 (a, b not both zero)',
      'x-intercept: set y = 0 and solve for x. y-intercept: set x = 0 and solve for y'
    ],
    logic: [
      'A linear equation in two variables has infinitely many solutions; each solution is a point (x, y)',
      'All solutions together form a straight line in the coordinate plane',
      'A system of two linear equations can have: one solution (lines intersect), no solution (parallel lines), or infinitely many solutions (same line)',
      'Substitution method: solve one equation for a variable, substitute into the other',
      'Elimination method: multiply equations to match coefficients, then add/subtract to eliminate one variable',
      'Real-life problems involving two unknowns (prices, ages, distances) are modelled by systems of linear equations'
    ],
    tips: [
      'Always verify the solution by substituting back into BOTH original equations',
      'If the elimination method yields 0 = 0, the lines are the same (infinite solutions); 0 = k (k ≠ 0) means no solution'
    ],
    bestPractices: [
      'Choose substitution when one equation already has an isolated variable; choose elimination when coefficients are easy to match',
      'Set up the two equations from the word problem before choosing a method'
    ]
  },
  {
    chapter: 'Math of Space: Surface Area and Volume',
    formulae: [
      'Cuboid: TSA = 2(lw + wh + lh); LSA = 2(l + w)h; V = lwh',
      'Cube (side a): TSA = 6a²; V = a³',
      'Cylinder (radius r, height h): CSA = 2πrh; TSA = 2πr(r + h); V = πr²h',
      'Cone (radius r, height h, slant l = √(r² + h²)): CSA = πrl; TSA = πr(r + l); V = ⅓πr²h',
      'Sphere (radius r): TSA = 4πr²; V = (4/3)πr³',
      'Hemisphere: CSA = 2πr²; TSA = 3πr²; V = (2/3)πr³'
    ],
    logic: [
      'Surface area: total area of all faces of a 3D solid (2D measurement, units = cm² etc.)',
      'Volume: 3D space enclosed by a solid (3D measurement, units = cm³ etc.)',
      'Volume of cone = ⅓ × volume of cylinder with the same base radius and height',
      'Volume of sphere = (4/3)πr³ — Archimedes proved this by comparison with a cylinder'
    ],
    tips: [
      'The slant height l of a cone is NOT the height h — always compute l = √(r² + h²) if not given',
      'TSA of a closed cylinder includes both circular bases; CSA does not — read the question carefully'
    ],
    bestPractices: [
      'Identify the shape(s) first, list the given dimensions, then select the correct formula',
      'For composite solids, calculate surface area carefully — shared/hidden faces are NOT part of the external surface'
    ]
  }
];
