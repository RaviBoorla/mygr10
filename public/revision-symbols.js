// ─── Revision notes: what each symbol in a formula stands for ────────────────
// Loaded lazily with the revision notes. formulaWhere(text, chapter) returns a
// "where …" line for a formula, built from that chapter's glossary below —
// only the symbols that actually appear in the formula are listed, and any the
// formula already explains itself, e.g. "(c = hypotenuse)", are skipped.
//
// Glossary format, keyed by chapter name ("XII:Name" for a Class XII-only
// meaning): { symbol: meaning } applies to every formula in the chapter;
// [regex, {...}] entries override for formulas matching the regex; and
// [regex, 'text'] gives a fixed "where" line for awkward formulas ('' = none).
// Symbols sharing a meaning are listed together: "a, b, c = sides".

const _S = {};

// ── Mathematics ──
_S['Foundations — Arithmetic'] = [
  [/Simple Interest/, { SI: 'simple interest', P: 'principal', R: 'rate of interest (% per year)', T: 'time in years' }],
  [/Compound Interest/, { A: 'amount', P: 'principal', r: 'annual rate of interest (as a decimal)', n: 'times interest is compounded per year', t: 'time in years', CI: 'compound interest' }],
  [/Profit/, { CP: 'cost price' }],
  [/^(Ratio|Proportion|Work|LCM|BODMAS|Divisibility|Speed)/, '']
];
_S['Real Numbers'] = [
  [/HCF/, { a: 'the two positive integers', b: 'the two positive integers' }],
  [/Euclid/, { a: 'dividend', b: 'divisor', q: 'quotient', r: 'remainder' }]
];
_S['Polynomials'] = [
  [/^Quadratic/, { a: 'coefficient of x²', b: 'coefficient of x', c: 'constant term', 'α': 'zeroes of the polynomial', 'β': 'zeroes of the polynomial' }],
  [/^Cubic/, { a: 'coefficient of x³', b: 'coefficient of x²', c: 'coefficient of x', d: 'constant term', 'α': 'zeroes of the polynomial', 'β': 'zeroes of the polynomial', 'γ': 'zeroes of the polynomial' }],
  [/Division Algorithm/, { 'p(x)': 'dividend', 'g(x)': 'divisor', 'q(x)': 'quotient', 'r(x)': 'remainder' }],
  [/^\(a/, '']
];
_S['Pair of Linear Equations'] = {
  'a₁': 'coefficient of x in the 1st equation', 'b₁': 'coefficient of y in the 1st equation', 'c₁': 'constant term of the 1st equation',
  'a₂': 'coefficient of x in the 2nd equation', 'b₂': 'coefficient of y in the 2nd equation', 'c₂': 'constant term of the 2nd equation'
};
_S['Quadratic Equations'] = {
  x: 'the unknown (a root)', a: 'coefficient of x²', b: 'coefficient of x', c: 'constant term', D: 'discriminant',
  'α': 'the two roots', 'β': 'the two roots'
};
_S['Arithmetic Progressions'] = [
  { 'aₙ': 'nth term', a: 'first term', d: 'common difference', n: 'number of terms (position of the term)', 'Sₙ': 'sum of the first n terms', l: 'last term', 'Sₙ₋₁': 'sum of the first (n − 1) terms', 'a₁': 'first term', 'S₁': 'sum of the first term' },
  [/Arithmetic mean/, { AM: 'arithmetic mean', a: 'the two numbers', b: 'the two numbers' }]
];
_S['Triangles'] = [
  [/Heron/, { A: 'area of the triangle', a: 'sides of the triangle', b: 'sides of the triangle', c: 'sides of the triangle', s: 'semi-perimeter' }],
  [/Pythagoras/, { a: 'the other two sides', b: 'the other two sides' }],
  [/BPT|Proportionality|Bisector/, { AD: 'segments of the sides cut by the line / bisector', DB: 'segments of the sides cut by the line / bisector', AE: 'segments of the sides cut by the line / bisector', EC: 'segments of the sides cut by the line / bisector', BD: 'segments of the base', DC: 'segments of the base', AB: 'the other two sides', AC: 'the other two sides' }]
];
const _COORD = [
  { d: 'distance between the points', 'x₁': 'coordinates of the 1st point', 'y₁': 'coordinates of the 1st point', 'x₂': 'coordinates of the 2nd point', 'y₂': 'coordinates of the 2nd point', 'x₃': 'coordinates of the 3rd point', 'y₃': 'coordinates of the 3rd point', M: 'mid-point' },
  [/Section/, { P: 'the dividing point', m: 'the ratio m : n', n: 'the ratio m : n' }],
  [/Slope|Line|line/, { m: 'slope', x: 'any point (x, y) on the line', y: 'any point (x, y) on the line' }],
  [/Parallel/, { 'm₁': 'slopes of the two lines', 'm₂': 'slopes of the two lines' }]
];
_S['Coordinate Geometry'] = _COORD;
_S['Coordinate Geometry (ICSE)'] = _COORD;
const _TRIG = { 'θ': 'acute angle of the right triangle', opp: 'side opposite θ', adj: 'side adjacent to θ', hyp: 'hypotenuse', opposite: 'side opposite the angle', adjacent: 'side adjacent to the angle' };
_S['Introduction to Trigonometry'] = _TRIG;
_S['Trigonometry (ICSE)'] = _TRIG;
_S['Applications of Trigonometry'] = { 'θ': 'angle of elevation (or depression)' };
_S['Circles'] = {
  P: 'the external point', PT: 'length of the tangent from P', PO: 'distance from P to the centre O', r: 'radius',
  PA: 'distances from P to where the lines meet the circle', PB: 'distances from P to where the lines meet the circle',
  PC: 'distances from P to where the lines meet the circle', PD: 'distances from P to where the lines meet the circle'
};
_S['Areas Related to Circles'] = [
  { A: 'area', C: 'circumference', r: 'radius', l: 'arc length', 'θ': 'angle at the centre (in degrees)' },
  [/ring/, { R: 'outer radius', r: 'inner radius' }],
  [/equilateral/, { a: 'side' }]
];
const _SOLIDS = [
  { V: 'volume', TSA: 'total surface area', CSA: 'curved surface area', SA: 'surface area', r: 'radius', h: 'height', l: 'slant height' },
  [/^Cuboid/, { l: 'length', b: 'breadth', h: 'height' }],
  [/^Cube/, { a: 'edge (side)' }],
  [/^Frustum/, { R: 'radius of the larger end', r: 'radius of the smaller end' }]
];
_S['Surface Areas & Volumes'] = _SOLIDS;
_S['Mensuration'] = _SOLIDS;
const _STATS = [
  { 'x̄': 'mean', 'Σ': 'sum of', f: 'frequency of a class', 'xᵢ': 'class mark (mid-point of a class)', x: 'class mark (mid-point of a class)', a: 'assumed mean', d: 'deviation (xᵢ − a)', u: 'step deviation (xᵢ − a)/h', h: 'class width' },
  [/^Median/, { L: 'lower limit of the median class', N: 'total frequency (Σf)', cf: 'cumulative frequency of the class before the median class', f: 'frequency of the median class' }],
  [/^Mode/, { L: 'lower limit of the modal class', 'f₁': 'frequency of the modal class', 'f₀': 'frequency of the class before the modal class', 'f₂': 'frequency of the class after the modal class' }],
  [/Quartile/, { 'Q₁': 'lower quartile', 'Q₃': 'upper quartile', N: 'total frequency' }],
  [/Interquartile/, { IQR: 'interquartile range', 'Q₁': 'lower quartile', 'Q₃': 'upper quartile' }]
];
_S['Statistics'] = _STATS;
_S['Statistics (ICSE)'] = _STATS;
_S['Probability'] = { 'P(E)': 'probability of event E', 'P(Ē)': 'probability that E does not happen' };
_S['Probability (ICSE)'] = { 'P(E)': 'probability of event E', 'P(Ē)': 'probability that E does not happen', 'n(E)': 'number of outcomes favourable to E', 'n(S)': 'total number of possible outcomes', A: 'the two events', B: 'the two events' };
_S['Quadrilaterals'] = [
  [/rectangle/, { l: 'length', b: 'breadth', d: 'diagonal' }],
  [/trapezium/, { a: 'the parallel sides', b: 'the parallel sides', h: 'height' }]
];
_S['Similarity'] = { k: 'scale factor (ratio of corresponding sides)', ar: 'area of', 'P(ABC)': 'perimeters of the two triangles', 'P(PQR)': 'perimeters of the two triangles' };
_S['Geometric Progressions (GP)'] = [
  { 'aₙ': 'nth term', a: 'first term', r: 'common ratio', n: 'number of terms', 'Sₙ': 'sum of the first n terms', 'S∞': 'sum to infinity' },
  [/Geometric Mean/, { GM: 'geometric mean', a: 'the two numbers', b: 'the two numbers' }]
];
_S['Matrices'] = [
  { A: 'matrices', B: 'matrices', k: 'a scalar (number)', 'aᵢₖ': 'element in row i, column k of A', 'bₖⱼ': 'element in row k, column j of B', 'Aᵀ': 'transpose of A', '|A|': 'determinant of A', 'A⁻¹': 'inverse of A', p: 'number of columns of B' },
  [/^Order/, ''],
  [/2×2/, { a: 'elements of the 2×2 matrix', b: 'elements of the 2×2 matrix', c: 'elements of the 2×2 matrix', d: 'elements of the 2×2 matrix' }]
];
_S['Algebra & Indices'] = { a: 'base', m: 'powers (exponents)', n: 'powers (exponents)', p: 'numerator of the fractional power', q: 'denominator of the fractional power', b: 'base of the logarithm', x: 'positive numbers', y: 'positive numbers' };
_S['Functions'] = [
  { f: 'functions', g: 'functions' },
  [/^Linear/, 'm = slope, c = y-intercept (linear); a, b, c = coefficients (quadratic)'],
  [/^Vertex/, { a: 'coefficient of x²', b: 'coefficient of x' }],
  [/^Exponential/, { a: 'base (a > 0, a ≠ 1)' }],
  [/^Domain/, '']
];
_S['Geometry & Trigonometry'] = [
  { a: 'sides of the triangle', b: 'sides of the triangle', c: 'sides of the triangle', A: 'angles opposite sides a, b, c', B: 'angles opposite sides a, b, c', C: 'angles opposite sides a, b, c' },
  [/Arc length|Sector/, { l: 'arc length', A: 'area of the sector', r: 'radius', 'θ': 'angle at the centre (radians)' }],
  [/^Area of triangle/, { A: 'area of the triangle', C: 'angle between sides a and b' }]
];
_S['Statistics & Probability'] = [
  { A: 'events', B: 'events' },
  [/^(Mean|Standard|Variance)/, { 'x̄': 'mean', x: 'each data value', n: 'number of data values', f: 'frequency', 'σ': 'standard deviation', 'σ²': 'variance', 'Σ': 'sum of' }],
  [/^Binomial/, { X: 'number of successes', r: 'a particular number of successes', n: 'number of trials', p: 'probability of success in one trial', 'C(n,r)': 'number of ways of choosing r from n' }]
];

// ── Science (X CBSE) ──
_S['Light — Reflection & Refraction'] = [
  { v: 'image distance', u: 'object distance', f: 'focal length', R: 'radius of curvature', m: 'magnification', 'h′': 'image height', h: 'object height', P: 'power of the lens', n: 'refractive index', 'n₁': 'refractive indices of the 1st and 2nd media', 'n₂': 'refractive indices of the 1st and 2nd media', 'θ₁': 'angle of incidence', 'θ₂': 'angle of refraction', c: 'speed of light in vacuum' },
  [/Refractive index/, { v: 'speed of light in the medium' }]
];
_S['Electricity'] = {
  V: 'potential difference (volts)', I: 'current (amperes)', R: 'resistance (ohms)', P: 'power (watts)', E: 'electrical energy', t: 'time',
  'Rₜ': 'total (equivalent) resistance', 'R₁': 'the individual resistances', 'R₂': 'the individual resistances',
  'ρ': 'resistivity of the material', L: 'length of the conductor', A: 'area of cross-section', H: 'heat produced'
};
_S['Magnetic Effects of Electric Current'] = { F: 'force on the conductor', B: 'magnetic field strength', I: 'current', L: 'length of conductor in the field', 'θ': 'angle between the conductor and the field' };

// ── Physics (X ICSE) ──
_S['Force & Pressure'] = {
  F: 'force', m: 'mass', a: 'acceleration', p: 'momentum', v: 'velocity', J: 'impulse', 'Δt': 'time for which the force acts', 'Δp': 'change in momentum',
  P: 'pressure', A: 'area', h: 'depth', 'ρ': 'density of the liquid', g: 'acceleration due to gravity',
  U: 'upthrust', 'ρ_fluid': 'density of the fluid', 'V_submerged': 'volume of the body under the fluid'
};
_S['Machines & Levers'] = { MA: 'mechanical advantage', VR: 'velocity ratio', L: 'load', E: 'effort', 'η': 'efficiency' };
_S['Work, Energy & Power'] = {
  W: 'work done', F: 'force', s: 'displacement', 'θ': 'angle between force and displacement', KE: 'kinetic energy', PE: 'potential energy',
  m: 'mass', v: 'final velocity', u: 'initial velocity', g: 'acceleration due to gravity', h: 'height', P: 'power', t: 'time'
};
_S['Heat'] = [
  { Q: 'heat absorbed or released', m: 'mass', c: 'specific heat capacity', 'ΔT': 'change in temperature', L: 'specific latent heat', 'α': 'coefficient of linear expansion', 'β': 'coefficient of area expansion', 'γ': 'coefficient of volume expansion' },
  [/expansion/, { L: 'original length', 'ΔL': 'change in length', A: 'original area', 'ΔA': 'change in area', V: 'original volume', 'ΔV': 'change in volume', 'ΔT': 'rise in temperature' }]
];
_S['Sound'] = { v: 'speed of sound', f: 'frequency', t: 'temperature in °C', 'f_obs': 'frequency heard by the observer', 'f_source': 'frequency of the source', 'v_obs': 'speed of the observer', 'v_source': 'speed of the source' };
_S['Refraction at Plane Surfaces'] = { n: 'refractive index', 'n₁': 'refractive indices of the two media', 'n₂': 'refractive indices of the two media', C: 'critical angle', d: 'lateral displacement', i: 'angle of incidence', r: 'angle of refraction' };
_S['Refraction through Lenses'] = { v: 'image distance', u: 'object distance', f: 'focal length', m: 'magnification', 'h_image': 'height of the image', 'h_object': 'height of the object', P: 'power of the lens', 'f₁': 'focal lengths of the two lenses', 'f₂': 'focal lengths of the two lenses', 'P₁': 'powers of the two lenses', 'P₂': 'powers of the two lenses' };
_S['Current Electricity (ICSE)'] = [
  { V: 'terminal voltage', 'ε_total': 'total EMF', 'r_total': 'total internal resistance', 'εᵢ': 'EMF of each cell', 'rᵢ': 'internal resistance of each cell', n: 'number of cells', 'ε': 'EMF of one cell', r: 'internal resistance of one cell', 'I_in': 'currents entering the junction', 'I_out': 'currents leaving the junction', I: 'current', R: 'resistance' },
  [/Wheatstone/, { P: 'resistances in the four arms', Q: 'resistances in the four arms', R: 'resistances in the four arms', S: 'resistances in the four arms' }],
  [/Ammeter/, { S: 'shunt resistance', G: 'galvanometer resistance', 'Iₘ': 'full-scale current of the galvanometer', I: 'largest current to be measured' }],
  [/Voltmeter/, { R: 'series resistance', V: 'largest voltage to be measured', 'Iₘ': 'full-scale current of the galvanometer', G: 'galvanometer resistance' }]
];
_S['Radioactivity'] = { A: 'mass number', Z: 'atomic number', N: 'amount (nuclei) remaining', 'N₀': 'initial amount', t: 'time elapsed', 'T½': 'half-life' };

// ── Biology ──
_S['Genetics & Evolution'] = { p: 'frequency of the dominant allele', q: 'frequency of the recessive allele' };

// ── Class XII Mathematics ──
_S['Ch 3 — Matrices'] = [
  { A: 'matrices', B: 'matrices', k: 'a scalar (number)', 'A′': 'transpose of A', 'B′': 'transpose of B', I: 'identity matrix', 'A⁻¹': 'inverse of A', 'aᵢⱼ': 'element in row i, column j', 'bᵢⱼ': 'element in row i, column j of B', m: 'number of rows', n: 'number of columns', p: 'number of columns of B' },
  [/^Types/, '']
];
_S['Ch 4 — Determinants'] = [
  { '|A|': 'determinant of A', 'Mᵢⱼ': 'minor of element aᵢⱼ', 'Aᵢⱼ': 'cofactor of element aᵢⱼ', 'adj(A)': 'adjoint of A', 'A⁻¹': 'inverse of A', I: 'identity matrix', i: 'row number', j: 'column number', 'x₁': 'vertices (x, y) of the triangle', 'y₁': 'vertices (x, y) of the triangle', 'x₂': 'vertices (x, y) of the triangle', 'y₂': 'vertices (x, y) of the triangle', 'x₃': 'vertices (x, y) of the triangle', 'y₃': 'vertices (x, y) of the triangle' },
  [/^\|A\| for/, '']
];
_S['Ch 5 — Continuity and Differentiability'] = [
  { c: 'the point being tested', h: 'a small change in x' },
  [/^(Chain|d\/dx|Logarithmic|Parametric|Second|Differentiable)/, ''],
  [/^(Rolle|Mean Value)/, { a: 'end-points of the interval [a, b]', b: 'end-points of the interval [a, b]', c: 'a point inside (a, b)' }]
];
_S['Ch 6 — Application of Derivatives'] = { 'x₀': 'the point (x₀, y₀) on the curve', 'y₀': 'the point (x₀, y₀) on the curve', m: 'slope of the tangent', 'Δx': 'small change in x', 'Δy': 'resulting change in y', c: 'the critical point' };
_S['Integrals'] = [
  { C: 'constant of integration', n: 'the power', a: 'a constant', 'F(b)': 'value of the antiderivative F at the limits', 'F(a)': 'value of the antiderivative F at the limits' },
  [/by parts/, { u: 'first function (by ILATE)', v: 'second function' }],
  [/^(Property|∫₋ₐ)/, { a: 'the limits of integration', b: 'the limits of integration' }]
];
_S['Application of Integrals'] = [
  { A: 'area', a: 'limits on the x-axis', b: 'limits on the x-axis', c: 'limits on the y-axis', d: 'limits on the y-axis', r: 'radius' },
  [/ellipse/, { a: 'semi-major and semi-minor axes', b: 'semi-major and semi-minor axes' }]
];
_S['Differential Equations'] = [
  { 'P(x)': 'functions of x only', 'Q(x)': 'functions of x only', 'P(y)': 'functions of y only', 'Q(y)': 'functions of y only', IF: 'integrating factor', C: 'constant of integration', v: 'y/x' },
  [/^(Order|General)/, '']
];
_S['Vector Algebra'] = [
  { 'r⃗': 'position vector', 'î': 'unit vectors along the x, y, z axes', 'ĵ': 'unit vectors along the x, y, z axes', 'k̂': 'unit vectors along the x, y, z axes',
    'a⃗': 'vectors', 'b⃗': 'vectors', 'c⃗': 'vectors', 'â': 'unit vector along a⃗', 'n̂': 'unit vector perpendicular to both a⃗ and b⃗',
    'a₁': 'components of a⃗', 'a₂': 'components of a⃗', 'a₃': 'components of a⃗', 'b₁': 'components of b⃗', 'b₂': 'components of b⃗', 'b₃': 'components of b⃗', 'c₁': 'components of c⃗', 'c₂': 'components of c⃗', 'c₃': 'components of c⃗',
    'θ': 'angle between the vectors', m: 'the ratio m : n', n: 'the ratio m : n' },
  [/Position vector/, { x: 'coordinates of P', y: 'coordinates of P', z: 'coordinates of P' }]
];
_S['Three Dimensional Geometry'] = [
  { 'α': 'angles the line makes with the x, y, z axes', 'β': 'angles the line makes with the x, y, z axes', 'γ': 'angles the line makes with the x, y, z axes',
    'λ': 'parameters (any real numbers)', 'μ': 'parameters (any real numbers)', 'r⃗': 'position vector of any point on the line',
    'a⃗': 'position vector of a point on the line', 'b⃗': 'vector parallel to the line', 'a⃗₁': 'points on the two lines', 'a⃗₂': 'points on the two lines', 'b⃗₁': 'directions of the two lines', 'b⃗₂': 'directions of the two lines', d: 'distance', 'θ': 'angle between them' },
  [/^Direction cosines/, { l: 'direction cosines', m: 'direction cosines', n: 'direction cosines' }],
  [/^Direction ratios/, { a: 'direction ratios', b: 'direction ratios', c: 'direction ratios', l: 'direction cosine' }],
  [/^Line through/, { a: 'direction ratios of the line', b: 'direction ratios of the line', c: 'direction ratios of the line', 'x₁': 'a point on the line', 'y₁': 'a point on the line', 'z₁': 'a point on the line' }],
  [/^Angle between two lines/, { 'l₁': 'direction cosines of the two lines', 'm₁': 'direction cosines of the two lines', 'n₁': 'direction cosines of the two lines', 'l₂': 'direction cosines of the two lines', 'm₂': 'direction cosines of the two lines', 'n₂': 'direction cosines of the two lines' }],
  [/^Lines parallel/, { 'a₁': 'direction ratios of the two lines', 'b₁': 'direction ratios of the two lines', 'c₁': 'direction ratios of the two lines', 'a₂': 'direction ratios of the two lines', 'b₂': 'direction ratios of the two lines', 'c₂': 'direction ratios of the two lines' }],
  [/^Plane:/, 'a, b, c = components of the normal to the plane; d = a constant'],
  [/^Angle between planes/, 'a₁, b₁, c₁ and a₂, b₂, c₂ = normals to the two planes'],
  [/^Distance from point/, 'x₁, y₁, z₁ = the point; a, b, c, d = coefficients in the plane’s equation'],
  [/^Intercept/, 'a, b, c = intercepts on the x, y, z axes']
];
_S['Linear Programming'] = [
  { Z: 'objective function', a: 'constants', b: 'constants', x: 'decision variables', y: 'decision variables' },
  [/^Objective/, 'Z = objective function; a, b = constants; x, y = decision variables'],
  [/^(Feasible|Corner|If feasible)/, '']
];
_S['XII:Probability'] = {
  A: 'events', B: 'events', 'P(A|B)': 'probability of A given that B has happened', 'P(B|A)': 'probability of B given that A has happened',
  'Bᵢ': 'events that partition the sample space', 'Bⱼ': 'events that partition the sample space', 'P(A|Bᵢ)': 'probability of A given Bᵢ', 'P(Bᵢ|A)': 'probability of Bᵢ given A',
  X: 'random variable', r: 'number of successes', n: 'number of trials', p: 'probability of success', q: 'probability of failure', 'C(n,r)': 'number of ways of choosing r from n',
  'μ': 'mean', 'σ²': 'variance', 'E(X)': 'expected value (mean) of X', 'xᵢ': 'values X can take', 'P(xᵢ)': 'probability of each value'
};

// ── Class XII Physics ──
_S['Electric Charges and Fields'] = {
  F: 'force between the charges', k: 'Coulomb constant', 'q₁': 'the two charges', 'q₂': 'the two charges', r: 'distance', 'ε₀': 'permittivity of free space',
  E: 'electric field', 'q₀': 'small test charge', q: 'charge', p: 'dipole moment', a: 'half the distance between the dipole charges', 'τ': 'torque', U: 'potential energy',
  'ΦE': 'electric flux', 'q_enc': 'charge enclosed by the surface', 'λ': 'linear charge density', 'σ': 'surface charge density', R: 'radius of the shell', n: 'an integer', e: 'charge on an electron'
};
_S['Electrostatic Potential and Capacitance'] = [{
  V: 'potential', W: 'work done', 'q₀': 'test charge', k: 'Coulomb constant', q: 'charge', r: 'distance', p: 'dipole moment', 'r̂': 'unit vector towards the point', 'ε₀': 'permittivity of free space',
  'V_P': 'potentials at points P and R', 'V_R': 'potentials at points P and R', U: 'potential energy', 'q₁': 'the two charges', 'q₂': 'the two charges', 'r₁₂': 'distance between them',
  E: 'electric field', C: 'capacitance', Q: 'charge on the capacitor', A: 'area of each plate', d: 'separation of the plates', 'C₀': 'capacitance without the dielectric',
  'C₁': 'the individual capacitances', 'C₂': 'the individual capacitances', u: 'energy per unit volume', K: 'dielectric constant'
}, [/E and V relation/, 'E = electric field; dV/dr = rate of change of potential with distance r']];
_S['Current Electricity'] = {
  V: 'potential difference', I: 'current', R: 'resistance', 'ρ': 'resistivity', l: 'length of the conductor', A: 'area of cross-section',
  m: 'mass of an electron', n: 'number of free electrons per unit volume', e: 'charge on an electron', 'τ': 'relaxation time', 'Δρ': 'change in resistivity', 'ρ₀': 'resistivity at the reference temperature', 'ΔT': 'change in temperature',
  'v_d': 'drift velocity', E: 'electric field', j: 'current density', 'V_ext': 'terminal voltage', 'ε': 'EMF of the cell', 'I_in': 'currents into the junction', 'I_out': 'currents out of the junction',
  'R₁': 'resistances', 'R₂': 'resistances', 'R₃': 'resistances', 'R₄': 'resistances', P: 'power', 'ΔV': 'potential changes around the loop'
};
_S['Moving Charges and Magnetism'] = [
  { F: 'force', q: 'charge', v: 'velocity', B: 'magnetic field', E: 'electric field', I: 'current', l: 'length of the conductor', 'ν_c': 'cyclotron frequency', m: 'mass of the particle',
    dB: 'field due to a small element', 'μ₀': 'permeability of free space', dl: 'small length element', 'r̂': 'unit vector from the element to the point', r: 'distance', R: 'radius of the loop', 'I_enc': 'current enclosed by the loop', 'rₛ': 'shunt resistance' },
  [/straight wire/, { R: 'distance from the wire' }],
  [/Galvanometer/, { R: 'large resistance in series' }],
  [/Magnetic moment/, { m: 'magnetic moment', N: 'number of turns', A: 'area of the loop', 'τ': 'torque' }],
  [/^μ₀ =/, '']
];
_S['Magnetism and Matter'] = {
  B: 'magnetic field', 'μ₀': 'permeability of free space', m: 'magnetic moment', r: 'distance from the magnet', 'τ': 'torque', U: 'potential energy',
  H: 'magnetic intensity', 'B₀': 'field in vacuum', M: 'magnetisation', 'χ': 'magnetic susceptibility', 'μᵣ': 'relative permeability', C: 'Curie constant', T: 'absolute temperature'
};
_S['Electromagnetic Induction'] = [{
  'Φ_B': 'magnetic flux', B: 'magnetic field', A: 'area', 'θ': 'angle between B and the normal to the area', 'ε': 'induced EMF', N: 'number of turns', t: 'time',
  L: 'self-inductance', I: 'current', 'Φ': 'flux through each turn', 'μᵣ': 'relative permeability', 'μ₀': 'permeability of free space', n: 'turns per unit length', l: 'length of the solenoid',
  M: 'mutual inductance', 'M₁₂': 'mutual inductance', 'M₂₁': 'mutual inductance', 'ε₁': 'EMF induced in coil 1', 'I₂': 'current in coil 2', 'ω': 'angular speed', U: 'energy stored'
}, [/Motional/, { l: 'length of the rod', v: 'velocity of the rod' }],
   [/generator/, { n: 'revolutions per second' }]];
_S['Alternating Current'] = {
  v: 'instantaneous voltage', 'v_m': 'peak voltage', 'ω': 'angular frequency', t: 'time', i: 'instantaneous current', 'i_m': 'peak current', 'φ': 'phase difference',
  V: 'rms voltage', I: 'rms current', 'X_L': 'inductive reactance', L: 'inductance', 'X_C': 'capacitive reactance', C: 'capacitance', Z: 'impedance', R: 'resistance',
  'ω₀': 'resonant angular frequency', P: 'average power', Q: 'quality factor', 'V_s': 'secondary and primary voltages', 'V_p': 'secondary and primary voltages',
  'N_s': 'turns in the secondary and primary coils', 'N_p': 'turns in the secondary and primary coils', 'I_s': 'secondary and primary currents', 'I_p': 'secondary and primary currents'
};
_S['Electromagnetic Waves'] = {
  'i_d': 'displacement current', 'ε₀': 'permittivity of free space', 'Φ_E': 'electric flux', t: 'time', c: 'speed of light', 'μ₀': 'permeability of free space',
  v: 'speed in the medium', 'μ': 'permeability of the medium', 'ε': 'permittivity of the medium', 'E₀': 'peak electric field', 'B₀': 'peak magnetic field',
  E: 'electric field', B: 'magnetic field', k: 'wave number (2π/λ)', z: 'distance along the direction of travel', 'ω': 'angular frequency', u: 'energy density'
};
_S['Ray Optics and Optical Instruments'] = [
  { v: 'image distance', u: 'object distance', f: 'focal length', R: 'radius of curvature', m: 'magnification', 'n₁': 'refractive indices of the two media', 'n₂': 'refractive indices of the two media',
    i: 'angle of incidence', r: 'angle of refraction', n: 'refractive index', c: 'speed of light in vacuum', 'i_c': 'critical angle', 'R₁': 'radii of curvature of the two surfaces', 'R₂': 'radii of curvature of the two surfaces',
    P: 'power of the lens', 'f₁': 'focal lengths of the lenses', 'f₂': 'focal lengths of the lenses', 'P₁': 'powers of the lenses', 'P₂': 'powers of the lenses',
    'n₂₁': 'refractive index of the prism relative to the surroundings', A: 'angle of the prism', 'D_m': 'angle of minimum deviation', D: 'least distance of distinct vision (25 cm)', L: 'length of the microscope tube', 'f_o': 'focal length of the objective', 'f_e': 'focal length of the eyepiece' },
  [/Snell/, { v: 'speed of light in the medium' }]
];
_S['Wave Optics'] = [
  { 'λ': 'wavelength', n: 'an integer (fringe order)', 'θ': 'angle of diffraction' },
  [/Malus/, { I: 'intensity after the analyser', 'I₀': 'intensity of the polarised light falling on it', 'θ': 'angle between polariser and analyser axes' }],
  [/Brewster/, { 'i_B': 'Brewster angle (polarising angle)', n: 'refractive index' }]
];
_S['Dual Nature of Radiation and Matter'] = [
  { E: 'energy of a photon', h: 'Planck’s constant', 'ν': 'frequency', c: 'speed of light', 'λ': 'wavelength', p: 'momentum', 'φ₀': 'work function of the metal', 'ν₀': 'threshold frequency', e: 'charge on an electron', 'V₀': 'stopping potential', 'K_max': 'maximum kinetic energy of the electrons', m: 'mass of the particle', v: 'velocity', V: 'accelerating voltage' },
  [/photoelectric/, { m: 'mass of an electron', v: 'speed of the fastest emitted electrons' }]
];
_S['Atoms'] = {
  'r_n': 'radius of the nth orbit', n: 'principal quantum number', 'a₀': 'Bohr radius', 'E_n': 'energy of the nth level', L: 'angular momentum', h: 'Planck’s constant', 'ħ': 'h/2π',
  'ν': 'frequency of the emitted photon', 'E_i': 'initial and final energy levels', 'E_f': 'initial and final energy levels', 'λ': 'wavelength', 'R_H': 'Rydberg constant', 'n₁': 'lower energy level', 'n₂': 'higher energy level'
};
_S['Nuclei'] = [
  { R: 'radius of the nucleus', 'R₀': 'a constant', A: 'mass number', 'ΔM': 'mass defect', Z: 'number of protons', 'mₚ': 'mass of a proton', 'mₙ': 'mass of a neutron', 'M_nucleus': 'actual mass of the nucleus',
    BE: 'binding energy', c: 'speed of light', N: 'number of undecayed nuclei', 'N₀': 'initial number of nuclei', 'λ': 'decay constant', t: 'time', 'T₁/₂': 'half-life', 'τ': 'mean life', Q: 'energy released (Q-value)', m: 'masses' },
  [/Mass defect/, { N: 'number of neutrons' }],
  [/Activity/, { A: 'activity (decays per second)', 'A₀': 'initial activity' }],
  [/^(1 u|Nuclear fission)/, '']
];
_S['Semiconductor Electronics'] = {
  'nₑ': 'electron concentration', 'nₕ': 'hole concentration', 'nᵢ': 'intrinsic carrier concentration',
  'I_E': 'emitter current', 'I_B': 'base current', 'I_C': 'collector current', 'β': 'current gain', 'A_v': 'voltage gain', 'R_C': 'collector (load) resistance', 'R_in': 'input resistance'
};

// ── Class XII Chemistry ──
_S['Solutions'] = {
  'χ_A': 'mole fraction of A', 'n_A': 'moles of A and B', 'n_B': 'moles of A and B', p: 'partial pressure', 'K_H': 'Henry’s law constant', 'χ': 'mole fraction',
  'p°': 'vapour pressure of the pure solvent', 'Δp': 'lowering of vapour pressure', 'χ_solvent': 'mole fraction of the solvent', 'χ_solute': 'mole fraction of the solute',
  'p_total': 'total vapour pressure', 'p°₁': 'vapour pressures of the pure components', 'p°₂': 'vapour pressures of the pure components', 'χ₁': 'mole fractions of the components', 'χ₂': 'mole fractions of the components',
  'ΔT_b': 'elevation in boiling point', 'ΔT_f': 'depression in freezing point', m: 'molality', 'π': 'osmotic pressure', R: 'gas constant', T: 'temperature (K)',
  i: 'van’t Hoff factor', M: 'molarity'
};
_S['Electrochemistry'] = [
  { 'E°_cell': 'standard cell potential', 'E°_cathode': 'standard reduction potentials of the cathode and anode', 'E°_anode': 'standard reduction potentials of the cathode and anode',
    'ΔrG°': 'standard Gibbs energy change', n: 'number of electrons transferred', R: 'gas constant', T: 'temperature (K)', Q: 'reaction quotient', K: 'equilibrium constant', 'E_cell': 'cell potential',
    'κ': 'conductivity', 'ρ': 'resistivity', 'Λ_m': 'molar conductivity', 'Λ°_m': 'limiting molar conductivity (infinite dilution)', 'ν₊': 'number of cations and anions per formula unit', 'ν₋': 'number of cations and anions per formula unit',
    'λ°₊': 'limiting conductivities of the cation and anion', 'λ°₋': 'limiting conductivities of the cation and anion', 'α': 'degree of dissociation', 'E°': 'standard cell potential', F: 'Faraday constant', c: 'concentration' },
  [/Faraday/, { m: 'mass deposited', M: 'molar mass', n: 'electrons per ion', Q: 'charge passed', Z: 'electrochemical equivalent', I: 'current', t: 'time', 'm₁': 'masses deposited', 'm₂': 'masses deposited', 'E₁': 'equivalent weights', 'E₂': 'equivalent weights' }]
];
_S['Chemical Kinetics'] = {
  '[R]': 'concentration of reactant', '[P]': 'concentration of product', t: 'time', k: 'rate constant', '[A]': 'concentrations of A and B', '[B]': 'concentrations of A and B',
  '[A]₀': 'initial concentration', 't₁/₂': 'half-life', A: 'pre-exponential (frequency) factor', 'Eₐ': 'activation energy', R: 'gas constant', T: 'temperature (K)',
  'k₁': 'rate constants at temperatures T₁ and T₂', 'k₂': 'rate constants at temperatures T₁ and T₂', 'T₁': 'the two temperatures', 'T₂': 'the two temperatures'
};

// ── Class XII Biology ──
_S['Organisms and Populations'] = { N: 'population size', 'dN/dt': 'rate of change of population size', 'N_t': 'population after time t', 'N₀': 'initial population', t: 'time', r: 'intrinsic rate of natural increase', K: 'carrying capacity', e: 'base of natural logarithms (≈ 2.718)' };
_S['Biodiversity and Conservation'] = { S: 'species richness', A: 'area', C: 'Y-intercept (a constant)', Z: 'slope of the line (regression coefficient)' };

// ── Class XII Economics ──
_S['Theory of Consumer Behaviour'] = { 'x₁': 'quantities of good 1 and good 2', 'x₂': 'quantities of good 1 and good 2', 'ΔX₁': 'change in quantity of good 1', 'ΔX₂': 'change in quantity of good 2', MRS: 'marginal rate of substitution', Ed: 'price elasticity of demand' };
_S['Production and Costs'] = { TP: 'total product', L: 'labour', K: 'capital', MP: 'marginal product', AP: 'average product', 'ΔTP': 'change in total product', 'ΔL': 'change in labour', TC: 'total cost', TFC: 'total fixed cost', TVC: 'total variable cost', AC: 'average cost', AFC: 'average fixed cost', AVC: 'average variable cost', MC: 'marginal cost', 'ΔTC': 'change in total cost', 'ΔTVC': 'change in total variable cost', 'ΔQ': 'change in output', Q: 'quantity of output' };
_S['The Theory of the Firm under Perfect Competition'] = { TR: 'total revenue', P: 'price', Q: 'quantity sold', AR: 'average revenue', MR: 'marginal revenue', 'ΔTR': 'change in total revenue', 'ΔQ': 'change in quantity', TC: 'total cost', SMC: 'short-run marginal cost', AVC: 'average variable cost' };
_S['Market Equilibrium'] = { Qd: 'quantity demanded', Qs: 'quantity supplied', MRP: 'marginal revenue product', MR: 'marginal revenue', MP: 'marginal product of labour' };
_S['National Income Accounting'] = { C: 'consumption expenditure', I: 'investment', G: 'government expenditure', X: 'exports', M: 'imports', MP: 'market price', FC: 'factor cost', NIT: 'net indirect taxes', GDP: 'gross domestic product', GNP: 'gross national product', NNP: 'net national product', NI: 'national income' };
_S['Money and Banking'] = { CRR: 'cash reserve ratio', M1: 'narrow money', M3: 'broad money' };
_S['Determination of Income and Employment'] = { AD: 'aggregate demand', C: 'consumption', I: 'investment', G: 'government expenditure', Y: 'national income', 'Y*': 'equilibrium income', 'Ī': 'autonomous investment', 'ΔC': 'change in consumption', 'ΔY': 'change in income', 'ΔI': 'change in investment', MPC: 'marginal propensity to consume', MPS: 'marginal propensity to save', b: 'MPC', 'c̄': 'autonomous consumption', c: 'MPC' };
_S['Government Budget and the Economy'] = { MPC: 'marginal propensity to consume' };
_S['Open Economy Macroeconomics'] = { Y: 'national income', C: 'consumption', I: 'investment', G: 'government expenditure', c: 'marginal propensity to consume (MPC)', m: 'marginal propensity to import', BoP: 'balance of payments' };

window.REVISION_SYMBOLS = _S;

// ── Matching ──
(function () {
  const STOP = new Set('a an and are as at be by do for if in is it no not of on or per so the to up two one all any max min sin cos tan cot sec cosec log ln lim exp det adj deg mod rad rms arg its has may new old net arc end top sum set out'.split(' '));
  const UNITS = new Set('m s kg g N J C V A T W Hz eV MeV keV fm Å mol K Pa atm L u Bq Ci cm mm km h min D mA μA nm rev Ω'.split(' '));
  const LATIN = /[A-Za-z]/;
  const COMBINING = /[̀-ͯ⃐-⃿]/;
  const DIGIT = /[0-9⁰¹²³⁴⁵⁶⁷⁸⁹]/;

  function glossaryFor(text, chapter, grade) {
    const g = _S[`${grade}:${chapter}`] || _S[chapter];
    if (!g) return null;
    const parts = Array.isArray(g) ? g : [g];
    let out = {};
    for (const p of parts) {
      if (Array.isArray(p)) {
        if (!p[0].test(text)) continue;
        if (typeof p[1] === 'string') return p[1];
        out = { ...out, ...p[1] };
      } else out = { ...out, ...p };
    }
    return out;
  }

  // Symbols the formula defines itself, e.g. "(c = hypotenuse)" or "M = moles of …".
  function inlineDefined(text, keys) {
    return new Set(keys.filter(k => {
      const e = k.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
      return new RegExp(`(^|[(,;]\\s*)${e}\\s*=\\s*[A-Za-z][a-z]{3,}`).test(text);
    }));
  }

  window.formulaWhere = function (text, chapter, grade) {
    const g = glossaryFor(text, chapter, grade || (typeof state !== 'undefined' ? state.grade : 'X'));
    if (g == null) return '';
    if (typeof g === 'string') return g;
    const keys = Object.keys(g).filter(k => g[k]).sort((a, b) => b.length - a.length);
    if (!keys.length) return '';
    const skip = inlineDefined(text, keys);

    // Scan only the formula: drop a leading label ("Mean (direct): …") and prose in brackets.
    let s = text;
    const colon = s.indexOf(':'), eq = s.indexOf('=');
    if (colon >= 0 && (eq < 0 || colon < eq)) s = s.slice(colon + 1);
    let prev;
    do { prev = s; s = s.replace(/\([^()]*(?<![_A-Za-z])[A-Za-z]{4,}[^()]*\)/g, ' ').replace(/\[[^[\]]*[A-Za-z]{4,}[^[\]]*\]/g, ' '); } while (s !== prev);

    const keyAt = (i, maxEnd) => keys.find(k => s.startsWith(k, i) && i + k.length <= maxEnd && !COMBINING.test(s[i + k.length] || ''));
    const found = [];
    let i = 0, unitRun = false;
    while (i < s.length) {
      const ch = s[i];
      if (LATIN.test(ch)) {
        let end = i; while (end < s.length && LATIN.test(s[end])) end++;
        const run = s.slice(i, end);
        // Units after a number ("332 m/s", "1.2 fm") are not symbols.
        let j = i - 1; while (j >= 0 && s[j] === ' ') j--;
        const afterNum = j >= 0 && (DIGIT.test(s[j]) || ((s[j] === '/' || s[j] === '·') && unitRun));
        if (UNITS.has(run) && (afterNum || unitRun)) { unitRun = true; i = end; continue; }
        unitRun = false;
        const exact = keyAt(i, s.length);
        if (run.length > 1 && (STOP.has(run.toLowerCase()) || run.length >= 5) && !(exact && exact.replace(/[^A-Za-z]/g, '').length >= run.length)) { i = end; continue; }
        // Split a run like "mgh" into known symbols; give up if any part is unknown.
        const segs = []; let p = i, ok = true;
        while (p < end) {
          const k = keyAt(p, s.length);
          if (!k) { ok = false; break; }
          const letters = k.replace(/[^A-Za-z]/g, '').length || 1;
          if (p + letters < end && k.length > letters) { ok = false; break; } // a subscripted key mid-run doesn't fit
          segs.push(k); p += k.length;
        }
        if (ok) { segs.forEach(k => found.push(k)); i = Math.max(p, end); }
        else { i = end; while (i < s.length && COMBINING.test(s[i])) i++; }
        continue;
      }
      if (ch !== ' ') unitRun = unitRun && /[\/·⁻⁰¹²³⁴⁵⁶⁷⁸⁹]/.test(ch);
      const k = keyAt(i, s.length);
      if (k && !(i > 0 && LATIN.test(s[i - 1]) && LATIN.test(k[0]))) { found.push(k); i += k.length; }
      else i++;
    }

    const order = [], byMeaning = new Map();
    for (const k of found) {
      if (skip.has(k) || order.includes(k)) continue;
      order.push(k);
      const m = g[k];
      if (!byMeaning.has(m)) byMeaning.set(m, []);
      byMeaning.get(m).push(k);
    }
    if (!order.length) return '';
    const rank = Object.keys(g);
    return [...byMeaning.entries()].map(([m, ks]) => `${ks.sort((a, b) => rank.indexOf(a) - rank.indexOf(b)).join(', ')} = ${m}`).join('; ');
  };
})();
