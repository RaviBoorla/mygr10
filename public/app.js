// ─── State ────────────────────────────────────────────────────────────────────
const state = {
  board:           null,
  mode:            null,   // 'mock' | 'drill'
  subject:         null,
  revisionSubject: null,
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
          "Euclid's Division Lemma: a = bq + r,  0 ≤ r < b"
        ],
        logic: [
          'p/q (lowest terms) has a terminating decimal ↔ q = 2ⁿ × 5ᵐ',
          'Every composite number factors uniquely into primes (Fundamental Theorem of Arithmetic)',
          'Sum or product of a rational and an irrational is irrational'
        ],
        tips: [
          'Prove √2 irrational by contradiction: assume √2 = p/q → contradiction',
          'LCM is always divisible by HCF',
          'For two primes p, q: HCF = 1 and LCM = p × q'
        ],
        bestPractices: [
          'Sanity-check: verify HCF × LCM = product of the two numbers',
          'Always write the full prime factorisation before computing HCF/LCM'
        ]
      },
      {
        chapter: 'Polynomials',
        formulae: [
          'Quadratic ax² + bx + c: α + β = −b/a;  αβ = c/a',
          'Cubic ax³ + bx² + cx + d: α+β+γ = −b/a;  αβ+βγ+γα = c/a;  αβγ = −d/a'
        ],
        logic: [
          'A polynomial of degree n has at most n zeroes',
          'Zeroes = x-intercepts of the polynomial graph',
          'If α is a zero then (x − α) is a factor (Factor Theorem)'
        ],
        tips: [
          'Division Algorithm: p(x) = g(x)·q(x) + r(x);  deg r < deg g',
          'Form a quadratic by working backwards: x² − (sum)x + (product) = 0'
        ],
        bestPractices: [
          'Verify zeroes by substituting back into the polynomial',
          'Check sum and product of your found zeroes against −b/a and c/a'
        ]
      },
      {
        chapter: 'Quadratic Equations',
        formulae: [
          'x = (−b ± √(b² − 4ac)) / 2a',
          'Discriminant: D = b² − 4ac'
        ],
        logic: [
          'D > 0 → two distinct real roots;  D = 0 → one repeated root;  D < 0 → no real roots',
          'Nature of roots is determined entirely by D — no need to solve the equation'
        ],
        tips: [
          'Factorise first; use the formula only if factorisation is not obvious',
          'Always rearrange to standard form (ax² + bx + c = 0) before computing D',
          'If "roots are equal" → set D = 0 and solve for the unknown parameter k'
        ],
        bestPractices: [
          'Re-read: is "real roots", "equal roots", or "distinct roots" asked? Each needs a different D condition',
          'Verify both roots satisfy the original equation'
        ]
      },
      {
        chapter: 'Arithmetic Progressions',
        formulae: [
          'nth term:  aₙ = a + (n − 1)d',
          'Sum of n terms:  Sₙ = n/2 · [2a + (n − 1)d]  =  n/2 · (a + l)',
          'Given Sₙ: aₙ = Sₙ − Sₙ₋₁  for n ≥ 2;  a₁ = S₁'
        ],
        logic: [
          'Common difference d must be constant throughout — verify with at least two pairs',
          'Middle term of an AP of odd length = arithmetic mean of first and last'
        ],
        tips: [
          'Take three consecutive AP terms as (a−d, a, a+d) to simplify algebra',
          'Take four consecutive terms as (a−3d, a−d, a+d, a+3d)'
        ],
        bestPractices: [
          'Identify a and d before attempting any AP question',
          'Cross-check: substitute your n back into aₙ and verify it matches the given term'
        ]
      },
      {
        chapter: 'Triangles',
        formulae: [
          'Pythagoras: a² + b² = c²',
          'Area ratio of similar triangles = (ratio of corresponding sides)²',
          'Angle Bisector Theorem: BD/DC = AB/AC'
        ],
        logic: [
          'Similarity criteria: AA, SSS, SAS — three not needed, two angles sufficient (AA)',
          'Corresponding sides of similar triangles are proportional',
          'Converse of Pythagoras: if a² + b² = c² then the angle opposite c = 90°'
        ],
        tips: [
          'Pythagorean triples: (3,4,5), (5,12,13), (8,15,17), (7,24,25)',
          'In a right triangle, the median to the hypotenuse = hypotenuse/2'
        ],
        bestPractices: [
          'Draw and label the diagram before reading the answer choices',
          'State the similarity criterion explicitly when writing your proof'
        ]
      },
      {
        chapter: 'Trigonometry',
        formulae: [
          'sin²θ + cos²θ = 1',
          '1 + tan²θ = sec²θ',
          '1 + cot²θ = cosec²θ',
          'Values: sin 0°=0, sin 30°=½, sin 45°=1/√2, sin 60°=√3/2, sin 90°=1',
          'cos 0°=1, cos 30°=√3/2, cos 45°=1/√2, cos 60°=½, cos 90°=0'
        ],
        logic: [
          'All three identities come from the Pythagorean theorem — not blind memorisation',
          'Reciprocal pairs: sin↔cosec, cos↔sec, tan↔cot',
          'tan θ = sin θ / cos θ;   cot θ = cos θ / sin θ'
        ],
        tips: [
          'To prove identities: simplify only one side — never cross-multiply',
          'When stuck, convert everything to sin and cos',
          'sec 90° and cosec 0° are undefined — common MCQ traps'
        ],
        bestPractices: [
          'Memorise the standard values table; 80% of trig MCQs use only 0°, 30°, 45°, 60°, 90°',
          'Write down the identity you are using before substituting'
        ]
      }
    ],
    Science: [
      {
        chapter: 'Chemical Reactions & Equations',
        formulae: [
          'Law of Conservation of Mass: mass(reactants) = mass(products)'
        ],
        logic: [
          'Types: combination, decomposition, displacement, double displacement, redox',
          'OIL RIG — Oxidation Is Loss (of electrons), Reduction Is Gain',
          'Thermal decomposition needs heat; electrolytic decomposition needs electricity'
        ],
        tips: [
          'Balance equations from the most complex molecule, then adjust simpler ones',
          'Displacement: more reactive metal displaces less reactive metal from salt solution',
          'Identify reaction type from the pattern of reactants and products'
        ],
        bestPractices: [
          'Count atoms on both sides after balancing — verify before marking an answer',
          'Learn the reactivity series: K > Na > Ca > Mg > Al > Zn > Fe > Cu > Ag > Au'
        ]
      },
      {
        chapter: 'Electricity',
        formulae: [
          "Ohm's Law: V = IR",
          'Power: P = VI = I²R = V²/R',
          'Energy: E = Pt = VIt',
          'Series: Rₜ = R₁ + R₂ + …   (same current, voltage divides)',
          'Parallel: 1/Rₜ = 1/R₁ + 1/R₂ + …   (same voltage, current divides)',
          'Resistance: R = ρL/A'
        ],
        logic: [
          'Series → total resistance always increases',
          'Parallel → total resistance always decreases (less than the smallest)',
          'Household appliances are in parallel — each gets full supply voltage',
          '1 kWh = 1 unit of electricity = 3.6 × 10⁶ J'
        ],
        tips: [
          'Two parallel resistors shortcut: R = (R₁ × R₂) / (R₁ + R₂)',
          'If current doubles, power quadruples (P = I²R)',
          'Resistivity ρ is a material constant — does not change with size'
        ],
        bestPractices: [
          'Draw and label the circuit before applying formulas',
          'Check units: V in volts, I in amperes, R in ohms, P in watts'
        ]
      },
      {
        chapter: 'Light — Reflection & Refraction',
        formulae: [
          'Mirror formula: 1/v + 1/u = 1/f',
          'Lens formula: 1/v − 1/u = 1/f',
          'Magnification (mirror): m = −v/u;   (lens): m = v/u',
          'Power of lens: P = 1/f (f in metres),  unit = dioptre D',
          "Snell's Law: n₁ sin θ₁ = n₂ sin θ₂"
        ],
        logic: [
          'Sign convention: distances measured from pole/optical centre; incident light left-to-right',
          'Real images: formed by actual ray convergence; always inverted; m negative (mirror)',
          'Virtual images: formed by extended rays; always erect; m positive',
          'Critical angle: sin C = 1/n (denser to rarer medium)'
        ],
        tips: [
          'Concave mirror: f negative.  Convex mirror: f positive',
          'Convex lens: f positive.  Concave lens: f negative',
          'Total Internal Reflection: light denser→rarer, angle > critical angle'
        ],
        bestPractices: [
          'Apply sign convention before substituting into any formula',
          'Sanity-check: virtual image → m positive;  real image → m negative (mirrors)'
        ]
      }
    ],
    'Social Science': [
      {
        chapter: 'Nationalism in India',
        formulae: [],
        logic: [
          'Non-Cooperation Movement (1920) — Gandhi returned Kaisar-i-Hind medal; withdrew from courts, schools, councils',
          'Civil Disobedience Movement (1930) — started with Dandi March (Salt Satyagraha, 12 March)',
          'Quit India Movement (1942) — "Do or Die"; demanded immediate independence'
        ],
        tips: [
          'Rowlatt Act (1919): arrest without trial → key trigger for Non-Cooperation',
          'Khilafat issue temporarily united Hindu and Muslim leaders',
          'Jallianwala Bagh massacre (1919) turned moderate opinion against the British'
        ],
        bestPractices: [
          'Link each movement to its social base: peasants, workers, women, tribals',
          'Know both the achievements and the limitations of each movement for MCQs'
        ]
      },
      {
        chapter: 'Resources & Development',
        formulae: [],
        logic: [
          'Resource types: natural (biotic/abiotic), human-made, human',
          'Sustainable development: meet present needs without compromising future generations',
          'Land degradation causes: deforestation, overgrazing, mining, waterlogging, salinisation'
        ],
        tips: [
          "India's net sown area ≈ 54% of total land — one of the highest in the world",
          'Laterite soil: heavy rainfall, leached, good for tea / coffee / cashew',
          'Black soil (Regur): self-ploughing, retains moisture, ideal for cotton — Deccan plateau',
          'Alluvial soil: most fertile, found in northern plains, good for wheat / rice / sugarcane'
        ],
        bestPractices: [
          'For map-based MCQs: know which state leads in each soil type',
          'Link soil type → climate/geography → typical crop — use elimination on MCQs'
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
          'Liquid pressure: P = hρg'
        ],
        logic: [
          "Newton's 1st Law: a body stays at rest or uniform motion unless a net force acts",
          "Newton's 3rd Law: every action has an equal and opposite reaction — forces act on different bodies",
          'Pressure in a liquid depends on depth, density, g — not on volume or shape of container'
        ],
        tips: [
          'Impulse–momentum theorem: useful when force is unknown but time interval is given',
          'Atmospheric pressure ≈ 101,325 Pa ≈ 76 cm Hg — standard reference value'
        ],
        bestPractices: [
          'Draw a free-body diagram and label all forces before applying any law',
          'State units explicitly: N, kg·m/s, Pa — common mark-loss in ICSE'
        ]
      },
      {
        chapter: 'Work, Energy & Power',
        formulae: [
          'Work: W = Fs cos θ',
          'Kinetic Energy: KE = ½mv²',
          'Gravitational PE: PE = mgh',
          'Power: P = W/t = Fv',
          'Work–Energy Theorem: net work = ΔKE'
        ],
        logic: [
          'Work = 0 when force ⊥ displacement (θ = 90°), e.g. a body moving in a circle',
          'Conservation of mechanical energy: KE + PE = constant (no friction)',
          'Energy converts between forms but is never created or destroyed'
        ],
        tips: [
          '1 kWh = 3.6 × 10⁶ J — essential for electricity-cost MCQs',
          'Constant velocity → net work = 0 → driving force = friction force'
        ],
        bestPractices: [
          'Check the angle θ between force and displacement — most errors come from ignoring cos θ',
          'Verify energy before and after to cross-check your answer'
        ]
      },
      {
        chapter: 'Heat',
        formulae: [
          'Heat absorbed/released: Q = mcΔT',
          'Latent heat: Q = mL',
          'Principle of calorimetry: heat lost = heat gained'
        ],
        logic: [
          'Specific heat c = energy needed to raise 1 kg by 1°C — water c = 4200 J/kg·°C',
          'Latent heat: temperature does not change during a phase change',
          'Good absorbers of radiation are also good emitters (black body principle)'
        ],
        tips: [
          'During melting/boiling the temperature is constant even though heat is being added',
          'Use calorimetry: heat lost by hot body = heat gained by cold body (no losses)'
        ],
        bestPractices: [
          'Convert all temperatures to Kelvin only if the formula requires it (most thermal physics uses ΔT)',
          'Write the calorimetry equation first, then substitute values'
        ]
      }
    ],
    Chemistry: [
      {
        chapter: 'Periodic Table',
        formulae: [],
        logic: [
          'Period = same number of electron shells; properties change across a period',
          'Group = same number of valence electrons; similar chemical properties down a group',
          'Atomic radius: decreases across a period (more protons, same shells); increases down a group',
          'Ionisation energy: increases across a period; decreases down a group'
        ],
        tips: [
          'Metals on the left, non-metals on the right, metalloids along the staircase line',
          'Noble gases (Group 18): full valence shell → chemically inert',
          'Electronegativity: increases across a period and up a group (F is highest)'
        ],
        bestPractices: [
          'Memorise the first 20 elements, their symbols, and their periods/groups',
          'Link trends: smaller atom → stronger nuclear pull → higher IE and electronegativity'
        ]
      }
    ],
    Mathematics: [
      {
        chapter: 'Mensuration',
        formulae: [
          'Cylinder: V = πr²h,  CSA = 2πrh,  TSA = 2πr(r + h)',
          'Cone: V = ⅓πr²h,  l = √(r² + h²),  CSA = πrl,  TSA = πr(r + l)',
          'Sphere: V = (4/3)πr³,  SA = 4πr²',
          'Hemisphere: V = (2/3)πr³,  CSA = 2πr²,  TSA = 3πr²'
        ],
        logic: [
          'Slant height l ≠ height h — always compute l with Pythagoras',
          'Recasting/melting: volume before = volume after (no wastage)',
          'When a cone is carved from a cylinder: waste = V(cylinder) − V(cone)'
        ],
        tips: [
          'Use π = 22/7 unless the question specifies 3.14 or exact π',
          'TSA = CSA + base area(s) — remember to add both bases for a cylinder'
        ],
        bestPractices: [
          'Write the formula before substituting; examiners award formula marks',
          'Double-check units — questions often mix cm and m'
        ]
      },
      {
        chapter: 'Statistics',
        formulae: [
          'Mean (direct): x̄ = Σf·x / Σf',
          'Mean (assumed): x̄ = A + (Σf·d / Σf),  d = x − A',
          'Median = L + [(N/2 − cf) / f] × h',
          'Mode = L + [(f₁ − f₀) / (2f₁ − f₀ − f₂)] × h'
        ],
        logic: [
          'Mean: uses all values — sensitive to outliers',
          'Median: middle value — not affected by extreme values',
          'Mode: most frequent — useful for categorical data'
        ],
        tips: [
          'For grouped data: identify the modal class (highest frequency) before applying the formula',
          'Median class: cumulative frequency first exceeds N/2'
        ],
        bestPractices: [
          'Draw the frequency table with a cumulative frequency column before attempting median',
          'Verify: Σf = N (total frequency) before computing mean'
        ]
      }
    ]
  },
  IB: {
    Mathematics: [
      {
        chapter: 'Algebra & Indices',
        formulae: [
          'aᵐ × aⁿ = aᵐ⁺ⁿ',
          'aᵐ / aⁿ = aᵐ⁻ⁿ',
          '(aᵐ)ⁿ = aᵐⁿ',
          'a⁻ⁿ = 1/aⁿ;   a^(1/n) = ⁿ√a',
          'log_b(xy) = log_b x + log_b y',
          'log_b(x/y) = log_b x − log_b y',
          'log_b(xⁿ) = n·log_b x',
          'Change of base: log_b x = ln x / ln b'
        ],
        logic: [
          'Logarithm is the inverse of exponentiation: bʸ = x ↔ log_b x = y',
          'log of a negative number is undefined over the reals',
          'log_b b = 1;   log_b 1 = 0'
        ],
        tips: [
          'Simplify with the same base before comparing exponents',
          'When solving log equations, check for extraneous solutions (argument must be > 0)'
        ],
        bestPractices: [
          'Show each law applied explicitly — IB awards method marks',
          'Verify by substituting a simple number if unsure of an index law'
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
          'Conversion: 180° = π radians'
        ],
        logic: [
          'Sine Rule: use when given two angles + one side, or two sides + non-included angle',
          'Cosine Rule: use when given two sides + included angle, or all three sides',
          'Ambiguous case (SSA with acute angle): two triangles may exist — check both'
        ],
        tips: [
          'For obtuse triangles, prefer the Cosine Rule to avoid the ambiguous case',
          'Radians: multiply degrees by π/180 to convert'
        ],
        bestPractices: [
          'Draw and label a clear diagram before choosing a rule',
          'Always verify: sum of interior angles = 180°'
        ]
      },
      {
        chapter: 'Statistics & Probability',
        formulae: [
          'Mean: x̄ = Σx / n',
          'Standard deviation: σ = √(Σ(x − x̄)² / n)',
          'P(A ∪ B) = P(A) + P(B) − P(A ∩ B)',
          'P(A ∩ B) = P(A) × P(B|A)',
          'Conditional: P(B|A) = P(A ∩ B) / P(A)'
        ],
        logic: [
          'Independent events: P(A ∩ B) = P(A) × P(B)',
          'Mutually exclusive: P(A ∩ B) = 0  →  P(A ∪ B) = P(A) + P(B)',
          'Complementary: P(A′) = 1 − P(A)'
        ],
        tips: [
          'Use tree diagrams for conditional probability — label each branch with its probability',
          'Larger σ = more spread out data; σ = 0 means all values are identical'
        ],
        bestPractices: [
          'Decide first: are the events independent or mutually exclusive? Different formula applies',
          'Verify: all probabilities in the sample space sum to 1'
        ]
      }
    ],
    Sciences: [
      {
        chapter: 'Cell Biology',
        formulae: [],
        logic: [
          'Cell theory: all living things are made of cells; cells arise only from pre-existing cells',
          'Eukaryotes have a membrane-bound nucleus; prokaryotes do not',
          'Mitosis: growth and repair — 2 genetically identical daughter cells',
          'Meiosis: sexual reproduction — 4 haploid cells with genetic variation'
        ],
        tips: [
          'Mitosis stages: PMAT — Prophase, Metaphase, Anaphase, Telophase',
          'Osmosis = diffusion of water through a semi-permeable membrane, high → low water potential'
        ],
        bestPractices: [
          'Link organelle to function — MCQs often swap mitochondria and chloroplast',
          'Use precise IB terminology: "water potential" not "concentration" when discussing osmosis'
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
      revisionSubject: null, revisionFilter: 'all',
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

    const FILTERS = [
      { id: 'all',           label: 'All' },
      { id: 'formulae',      label: 'Formulae' },
      { id: 'logic',         label: 'Logic' },
      { id: 'tips',          label: 'Tips' },
      { id: 'bestPractices', label: 'Best Practices' }
    ];
    const filterBar = FILTERS.map(f =>
      `<button class="filter-tab ${state.revisionFilter === f.id ? 'active' : ''}"
               onclick="app.setFilter('${f.id}')">${f.label}</button>`
    ).join('');

    const CATS = [
      { key: 'formulae',      label: 'Formula',       cls: 'badge-f' },
      { key: 'logic',         label: 'Logic',         cls: 'badge-l' },
      { key: 'tips',          label: 'Tip',           cls: 'badge-t' },
      { key: 'bestPractices', label: 'Best Practice', cls: 'badge-b' }
    ];

    const chHtml = chapters.map(ch => {
      const items = [];
      CATS.forEach(({ key, label, cls }) => {
        if (state.revisionFilter !== 'all' && state.revisionFilter !== key) return;
        (ch[key] || []).forEach(text =>
          items.push(`<li class="rev-item"><span class="badge ${cls}">${label}</span>${esc(text)}</li>`)
        );
      });
      if (!items.length) return '';
      return `
        <div class="ch-block open">
          <div class="ch-header" onclick="this.parentElement.classList.toggle('open')">
            <span>${esc(ch.chapter)}</span><span class="ch-chevron">&#9660;</span>
          </div>
          <ul class="ch-content">${items.join('')}</ul>
        </div>`;
    }).filter(Boolean).join('');

    return `
      <div class="screen">
        <h2>${esc(subject)}</h2>
        <div class="filter-bar">${filterBar}</div>
        <div class="chapters">
          ${chHtml || '<div class="card empty-state">No items match this filter.</div>'}
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
    state.revisionFilter  = 'all';
    this.navigate('revision-content');
  },

  setFilter(filter) {
    state.revisionFilter = filter;
    // Re-render in place without touching history
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
