// ─── Grade IX CBSE Science revision notes (NCERT textbook) ───────────────────
// screen-notes.js reads REVISION['IX Science'] when state.grade==='IX' &&
// state.board==='CBSE', then splits its chapters across the Physics/
// Chemistry/Biology notes tabs (see IX_SCIENCE_SPLIT in screen-notes.js).

REVISION['IX Science'] = [
  {
    chapter: 'Exploration: Entering the World of Secondary Science',
    formulae: [
      'Speed of light, c = 299,792,458 m/s (an internationally agreed physical constant)'
    ],
    logic: [
      'Science uses models — simplified representations that keep only what matters for a given question (e.g. treating a moving car as a single point, ignoring air resistance)',
      'Law: a regular pattern observed in nature, often expressed mathematically. Theory: explains WHY that pattern occurs, based on evidence. Principle: a broad idea applied to a situation',
      'A scientific theory is not a guess — it is an evidence-based explanation, always open to revision as new evidence appears',
      'Prediction uses established laws/theories/models to anticipate outcomes before or without a direct experiment; when a prediction fails, scientists re-examine assumptions and models — they do not simply reject the evidence',
      'Standard (SI) units let measurements be compared across the world; mixing unit systems causes real errors (e.g. an aircraft running low on fuel from a kg/lb mix-up)',
      'Science is divided into branches (physics, chemistry, biology, earth science) only for convenience of organising knowledge — real-world problems usually need several branches together'
    ],
    tips: [
      'Estimation: find a reasonable approximate answer first, and check whether it is of a sensible order of magnitude, before refining it',
      'Scientific quantities are represented by agreed symbols and units (m, v, F, I) so results can be compared and shared precisely',
      'A failed prediction strengthens science, it does not weaken it — that is how theories get corrected and improved'
    ],
    bestPractices: [
      'Always check that units match before calculating — a unit mismatch (e.g. kg vs lb) is a common, costly real-world error',
      'When estimating, state your assumptions clearly and sanity-check whether the final number is plausible'
    ]
  },
  {
    chapter: 'Cell: The Building Block of Life',
    formulae: [
      'Total magnification of a microscope = magnifying power of eyepiece × magnifying power of objective lens',
      'Estimated cell size = diameter of visible field (µm) ÷ number of cells along the diameter',
      'Cell membrane thickness ≈ 7–10 nanometres; 1 nanometre = 10⁻⁶ mm',
      'Mature human RBCs have no nucleus and survive ≈120 days'
    ],
    logic: [
      'Cell theory: all living organisms are made of one or more cells; the cell is the basic unit of structure and function; all cells arise from pre-existing cells (Schleiden, Schwann, Virchow)',
      'Prokaryotic cells (e.g. bacteria): no well-defined nucleus (genetic material in a nucleoid), no membrane-bound organelles. Eukaryotic cells (plant/animal): well-defined nucleus + membrane-bound organelles',
      'Cell membrane: thin, selectively permeable boundary (fluid-mosaic model — lipid bilayer with embedded proteins); defines individuality of the cell. Cell wall: rigid, outside the membrane, found in plants/fungi/bacteria, made of cellulose in plants',
      'Osmosis = diffusion of water across a selectively permeable membrane, from a dilute (hypotonic) to a concentrated (hypertonic) solution, until concentrations equalise; diffusion (general) is net movement of particles from higher to lower concentration, with or without a membrane',
      'Plant cells in a concentrated solution lose water (cell membrane pulls away from the rigid cell wall) but keep their shape; animal cells (no cell wall) shrink and change shape',
      'Key organelles: nucleus (genetic control, holds chromosomes/DNA/chromatin), ribosomes (protein synthesis), ER — rough (has ribosomes, protein synthesis/secretion) vs smooth (no ribosomes, lipid/hormone synthesis), Golgi apparatus (packages/sorts/ships proteins and lipids), lysosomes (break down waste and worn-out parts), mitochondria ("powerhouse" — cellular respiration releases energy as ATP), plastids (chloroplasts — photosynthesis; leucoplasts — colourless, store starch/oil/protein; chromoplasts — pigments other than chlorophyll, give flowers/fruits their colour), vacuole (stores water/minerals/waste; keeps plant cells firm via pressure — loss of water causes wilting)',
      'Mitosis: one parent cell → two genetically identical daughter cells (growth, repair, asexual reproduction). Meiosis: parent cell divides twice → four daughter cells with half the chromosome number (only in reproductive-organ cells, for gametes, creates genetic diversity)',
      'Contact inhibition: normal (especially animal) cells stop dividing on contact with neighbours; cancer cells lose this control and divide uncontrollably, forming tumours'
    ],
    tips: [
      'Robert Hooke first observed and named cells (1665) in cork, using a self-built microscope (~200–300X)',
      'Mnemonic: Golgi = "post office" (packaging/shipping); lysosome = "clean-up crew"; mitochondria = "powerhouse"',
      'Mitochondria and chloroplasts both have their own DNA and ribosomes — evidence they evolved from ancient free-living bacteria',
      'A single large central vacuole is typical of mature plant cells; animal cell vacuoles, where present, are small and temporary'
    ],
    bestPractices: [
      'Distinguish "cell membrane vs cell wall" by permeability: membrane is selectively permeable (controls what passes), wall is simply permeable (lets water/minerals through, no selection)',
      'When comparing RER vs SER, anchor on structure (ribosomes present/absent) first, then link to function (protein vs lipid/hormone synthesis)'
    ]
  },
  {
    chapter: 'Tissues in Action',
    formulae: [],
    logic: [
      'A tissue is a group of similar cells working together to perform a specific function; tissues → organs → organ systems → organism (division of labour increases efficiency)',
      'Plant tissues: meristematic (actively dividing — apical at root/shoot tips for growth in length, lateral around the stem circumference for growth in girth, intercalary at nodes for regrowth after cutting/grazing) vs permanent (differentiated, specialised, do not divide)',
      'Permanent tissues: simple (one cell type — parenchyma: loosely packed, stores food/photosynthesis; collenchyma: flexible support via pectin-thickened corners; sclerenchyma: rigid, lignin-thickened, mostly dead cells) vs complex (more than one cell type — xylem transports water/minerals upward and gives strength; phloem transports food, mostly living cells)',
      'Differentiation = meristematic tissue becoming specialised into permanent tissue (losing the ability to divide)',
      'Animal tissues (4 types): epithelial (covering/lining — protection, absorption, secretion, exchange, sensory, depending on structure), connective (connects/supports — blood [fluid matrix], bone [rigid matrix], cartilage [soft/flexible matrix], tendon [muscle→bone], ligament [bone→bone]), muscular (skeletal/voluntary — striated, multinucleate; smooth/involuntary — spindle-shaped, single nucleus, e.g. gut; cardiac — branched, striated, tireless, heart only), nervous (neurons — cell body, dendrites receive signals, axon transmits signals)',
      'Joints: ball-and-socket (shoulder — free movement in all directions), hinge (elbow/knee — one direction only), pivot (neck — rotation), fixed (skull — no movement, protects brain)'
    ],
    tips: [
      'Blood and bone are both connective tissue despite very different consistency — the difference is in their matrix (fluid vs rigid)',
      'Adult human skeleton ≈ 12–15% of body weight; the rib cage (12 pairs of ribs) is joined by flexible cartilage so it can expand/contract for breathing',
      'Xylem cells (tracheids, vessels, fibres) are mostly dead/sclerenchymatous except xylem parenchyma; phloem cells (sieve tubes, companion cells) are mostly living'
    ],
    bestPractices: [
      'When asked to tell cell wall vs cell membrane permeability apart, or RBC/WBC/platelet function, state structure first, then link directly to the specific function it enables',
      'Link joint type → range of motion directly: ball-and-socket = most free, hinge = one-plane, pivot = rotation, fixed = none'
    ]
  },
  {
    chapter: 'Describing Motion Around Us',
    formulae: [
      'average speed = total distance travelled / time interval',
      'average velocity, v_av = displacement / time interval = s / t',
      'average acceleration, a = (v − u) / t   (v = final velocity, u = initial velocity)',
      'Kinematic equations (constant acceleration): v = u + at;  s = ut + ½at²;  v² = u² + 2as',
      'Uniform circular motion: average speed = 2πR / T (R = radius, T = time for one revolution); displacement after one full revolution = 0',
      'Slope of a position–time graph = velocity; slope of a velocity–time graph = acceleration; area under a velocity–time graph = displacement'
    ],
    logic: [
      'Distance (total path length, scalar) vs displacement (net change in position, vector) — displacement\'s magnitude ≤ distance travelled, equal only when moving in one direction without turning back',
      'Speed/velocity differ the same way: speed has only magnitude, velocity has magnitude + direction',
      'Straight-line position–time graph → constant velocity (zero acceleration); curved → changing velocity (accelerated motion)',
      'Straight horizontal velocity–time graph → zero acceleration; sloped straight line → constant acceleration (slope = acceleration)',
      'Uniform circular motion: speed is constant but velocity keeps changing direction, so it is still accelerated motion'
    ],
    tips: [
      'A fast-moving object can have zero acceleration (constant velocity) — acceleration is about how quickly velocity changes, not how large it is',
      'Always fix an origin and a positive direction before solving a straight-line motion problem, and keep that choice consistent throughout',
      'For a round trip (returns to start), displacement is zero even though distance travelled and average speed are not'
    ],
    bestPractices: [
      'Convert km/h to m/s by ×(1000/3600) = ×(5/18) before using any kinematic equation — unit mismatches are the most common error',
      'Identify which two of (s, u, v, a, t) are given, then pick the one kinematic equation that has exactly those variables plus the unknown'
    ]
  },
  {
    chapter: 'Exploring Mixtures and their Separation',
    formulae: [
      'Distillation separates two miscible liquids when their boiling points differ by at least 25 °C'
    ],
    logic: [
      'Mixtures: homogeneous (uniform composition throughout, e.g. true solutions) vs heterogeneous (non-uniform, includes suspensions and colloids)',
      'Crystallisation: obtains a pure solid from its saturated solution by controlled cooling/evaporation',
      'Sublimation: solid → vapour directly (below melting point), without a liquid stage; deposition is the reverse (vapour → solid, skipping liquid)',
      'Centrifugation: rapid spinning separates heavier solid particles from a solid–liquid mixture (denser material thrown outward/down)',
      'Coagulation: adding a coagulant makes small dispersed particles clump together and settle, separating solids from liquids in a heterogeneous mixture',
      'Paper chromatography separates dissolved components by differences in their rate of movement on the paper',
      'A separating funnel separates two immiscible liquids using their density difference',
      'Tyndall effect: dispersed particles in a colloid or suspension scatter light, making the light path visible — true solutions do not show this'
    ],
    tips: [
      'If two liquids are miscible, choose distillation; if immiscible, choose a separating funnel',
      'Tyndall effect is the quick test to tell a colloid/suspension apart from a true (homogeneous) solution',
      'Sublimation and deposition are opposite, both skipping the liquid phase entirely'
    ],
    bestPractices: [
      'Match the separation technique to the type of mixture first (solid-solid, solid-liquid, liquid-liquid, particle size) before answering "which method"',
      'Remember chromatography separates by movement-rate differences, not by boiling point or density'
    ]
  },
  {
    chapter: 'How Forces Affect Motion',
    formulae: [
      'Newton\'s second law: F = ma  (net force = mass × acceleration)',
      'Weight: F = mg  (g ≈ 9.8 m/s² near Earth\'s surface)',
      'Momentum, p = mass × velocity; Newton\'s second law (general form): net force ∝ rate of change of momentum'
    ],
    logic: [
      'Newton\'s first law (law of inertia): an object at rest stays at rest, and an object in motion continues at constant velocity, unless acted on by a net external force',
      'Newton\'s second law: net force causes acceleration in its own direction; acceleration ∝ net force and ∝ 1/mass',
      'Newton\'s third law: every action force has an equal and opposite reaction force, acting on a different object, simultaneously',
      'Friction opposes relative motion — it acts opposite to the direction of (attempted) motion between two surfaces in contact'
    ],
    tips: [
      'Inertia is the tendency to resist a change in motion — more mass means more inertia',
      'Action–reaction pairs (Newton\'s third law) always act on two different objects — they never cancel each other out on the same object',
      'Recoil (e.g. a gun firing) is a classic third-law example: forces are equal and opposite, but resulting accelerations differ because masses differ'
    ],
    bestPractices: [
      'Before applying F = ma, be clear it is the NET force (sum of all forces) on the object, not just one applied force',
      'When a problem mentions "no net force" or "constant velocity," go straight to Newton\'s first law, not the second'
    ]
  },
  {
    chapter: 'Work, Energy, and Simple Machines',
    formulae: [
      'Work: W = F × s  (force × displacement in the direction of the force)',
      'Kinetic energy: KE = ½mv²',
      'Potential energy (gravitational): PE = mgh',
      'Power: P = W / t  (rate of doing work)',
      'Mechanical advantage = load / effort (or output force / input force)'
    ],
    logic: [
      'Work-energy theorem: work done on an object equals the change in its energy',
      'Kinetic energy is energy due to motion; potential energy is energy stored due to position/deformation',
      'Mechanical energy (KE + PE) of a freely falling/swinging object stays constant if only gravity acts — energy converts between KE and PE but the total is conserved',
      'Simple machines (pulley, lever, inclined plane) make work easier by changing the magnitude or direction of the force needed — they do not reduce the total work done',
      'Doubling velocity quadruples kinetic energy (KE ∝ v²), since (2v)² = 4v²'
    ],
    tips: [
      'A fixed pulley only changes the direction of force (mechanical advantage ≈ 1); a movable/combination pulley system can give mechanical advantage > 1',
      'At the highest point of a pendulum/projectile, KE = 0 and PE is maximum; at the lowest point, PE = 0 and KE is maximum (same total mechanical energy throughout, ignoring friction/air resistance)',
      'Power depends on both work done AND how quickly it is done — same work done faster means higher power'
    ],
    bestPractices: [
      'Always check whether the question wants work, energy, or power — they have related but different formulae (W=Fs, KE/PE in joules, P=W/t in watts)',
      'For "ideal machine" questions, start from mechanical advantage = load/effort, then relate to the work-input = work-output assumption (no friction losses)'
    ]
  },
  {
    chapter: 'Journey Inside the Atom',
    formulae: [
      'Mass number (A) = number of protons + number of neutrons',
      'Maximum electrons in shell n = 2n² (K=2, L=8, M=18, N=32)',
      'Atomic number (Z) = number of protons = number of electrons in a neutral atom'
    ],
    logic: [
      'Historical atomic models, in order: J. J. Thomson (electrons embedded in a positively charged sphere, "plum pudding") → Rutherford (mostly empty space, dense positive nucleus, orbiting electrons) → Bohr (electrons in fixed energy levels/shells) → Chadwick discovered the neutron',
      'Three subatomic particles: electrons (negative), protons (positive, in nucleus), neutrons (neutral, in nucleus)',
      'Valency = combining capacity of an atom = number of electrons gained, lost, or shared to complete its octet (stable outer shell)',
      'Isotopes: same element (same atomic number/protons), different mass number (different neutrons). Isobars: different elements, same mass number, different atomic number',
      'An atom with a complete octet (8 electrons in outermost shell, or 2 for the first/K shell only, as in helium) is stable and largely unreactive'
    ],
    tips: [
      'Shell capacity 2n² gives K=2, L=8, M=18 — memorise these for filling electron configurations quickly',
      'Average atomic mass accounts for the relative abundance of each isotope in nature, not a simple average of isotope masses',
      'Fewer than 4 valence electrons → atom tends to lose them; more than 4 → atom tends to gain electrons, to reach a stable octet'
    ],
    bestPractices: [
      'When given protons and neutrons, compute mass number as their sum directly — do not confuse mass number with atomic number',
      'To find valency fast: count valence electrons, then take whichever is smaller — electrons to lose, or electrons to gain to reach 8'
    ]
  },
  {
    chapter: 'Atomic Foundations of Matter',
    formulae: [
      'Molecular mass = sum of atomic masses of all atoms in the molecule',
      'Formula unit mass (ionic compounds) = sum of atomic masses of all atoms in the simplest whole-number ratio (formula unit)'
    ],
    logic: [
      'Law of Conservation of Mass: mass can neither be created nor destroyed in a chemical reaction',
      'Law of Definite Proportions: a compound always has the same elements combined in the same fixed ratio by mass, regardless of source or method of formation',
      'A molecule is an electrically neutral group of ≥1 atom that exists independently and shows all chemical properties of that substance',
      'Covalent bond: formed by sharing of electrons between atoms (usually non-metal + non-metal). Ionic bond: formed by transfer of electrons (metal loses, non-metal gains), forming cations (positive) and anions (negative)',
      'Atoms bond to achieve a stable octet of valence electrons (8, or 2 for atoms with only the K shell)'
    ],
    tips: [
      'Covalent compound formula shows actual atom counts per molecule; ionic compound formula shows the simplest whole-number ratio of ions, not actual numbers in a "molecule" (ionic compounds don\'t form discrete molecules)',
      'Atoms with <4 valence electrons generally donate electrons (become cations); atoms with >4 generally accept electrons (become anions)'
    ],
    bestPractices: [
      'To calculate molecular/formula unit mass, write out every atom\'s count explicitly first, then multiply each by its atomic mass before summing — avoids missed-atom errors',
      'Distinguish ionic vs covalent quickly by checking if a metal and non-metal are involved (ionic) vs two non-metals (covalent)'
    ]
  },
  {
    chapter: 'Sound Waves: Characteristics and Applications',
    formulae: [
      'speed of sound = wavelength × frequency  (v = f λ)',
      'Speed of sound in dry air ≈ 331 m/s at 0 °C (increases with temperature and humidity)',
      'Infrasonic: frequency below 20 Hz. Audible: 20 Hz–20 kHz. Ultrasonic: above 20 kHz'
    ],
    logic: [
      'Sound is produced by vibrating objects and is a longitudinal mechanical wave — it needs a medium (solid, liquid, or gas) to travel; it cannot travel through vacuum',
      'In sound propagation, it is the density disturbance (compressions and rarefactions) that travels, not the medium\'s particles themselves — particles only vibrate about a mean position',
      'Wavelength = distance between two consecutive crests (or troughs); frequency = number of oscillations per unit time; time period = time for one complete oscillation (time period = 1/frequency)',
      'Amplitude = maximum change in density (or displacement) from the average/mean value — relates to loudness',
      'Intensity = sound energy passing per unit area per unit time, perpendicular to the direction of propagation',
      'Echoes and reverberation occur due to reflection of sound off surfaces'
    ],
    tips: [
      'Higher temperature/humidity → faster sound speed in air',
      'Frequency and time period are reciprocals of each other — if one increases, the other decreases',
      'Ultrasonic waves (>20 kHz) are used in medical imaging and cleaning; infrasonic waves (<20 Hz) are produced by earthquakes and some animals'
    ],
    bestPractices: [
      'Always use v = fλ to connect speed, frequency and wavelength — identify which two are given before solving for the third',
      'Remember sound cannot travel through vacuum — a common trick-question check'
    ]
  },
  {
    chapter: 'Reproduction: How Life Continues',
    formulae: [],
    logic: [
      'Reproduction is the biological process by which organisms produce new individuals of the same species, ensuring continuity of life and transfer of genetic information',
      'Asexual reproduction (one parent, no gametes): budding, spore formation, vegetative propagation in plants',
      'Sexual reproduction (in flowering plants): flower = reproductive organ (stamen = male, pistil = female); pollination = transfer of pollen from anther to stigma (self- or cross-pollination); fertilisation = pollen tube delivers sperm to the ovule, forming a zygote; ovule → seed, ovary → fruit',
      'Human male system: testes produce sperm; testes/seminal vesicles/prostate produce male hormones and secretions',
      'Human female system: ovaries produce eggs and female hormones; ovulation occurs around day 14 of the menstrual cycle',
      'If fertilisation occurs, the zygote develops into an embryo and pregnancy begins (≈9 months in humans), needing proper maternal nutrition, check-ups and rest',
      'Birth control methods include condoms, pills, and IUDs (e.g. Copper-T)'
    ],
    tips: [
      'Self-pollination = pollen from the same flower/plant; cross-pollination = pollen from a different plant of the same species',
      'Remember the sequence: pollination → fertilisation → ovule becomes seed, ovary becomes fruit',
      'Ovulation timing (~day 14) is a key fact for menstrual-cycle questions'
    ],
    bestPractices: [
      'Keep asexual vs sexual reproduction straight by checking for gamete fusion — its presence means sexual reproduction',
      'For human reproduction questions, separate male-organ functions (produce sperm/hormones) from female-organ functions (produce eggs/hormones, support pregnancy) clearly'
    ]
  },
  {
    chapter: 'Patterns in Life: Diversity and Classification',
    formulae: [],
    logic: [
      'Organisms are classified based on cell structure, number of cells, mode of nutrition, and ecological role',
      'Whittaker\'s five-kingdom system: Monera, Protista, Fungi, Plantae, Animalia',
      'Kingdom Plantae → five classes: Thallophyta, Bryophyta, Pteridophyta, Gymnosperm, Angiosperm',
      'Kingdom Animalia → Non-chordata (invertebrates, no notochord) and Chordata (vertebrates, has notochord)',
      'Non-chordate phyla: Porifera, Cnidaria, Platyhelminthes, Nematoda, Annelida, Arthropoda, Mollusca, Echinodermata',
      'Protochordates show the transition from invertebrates to vertebrates — they possess a notochord at least once in their life cycle',
      'Vertebrates are further grouped into: fish, amphibians, reptiles, birds, mammals',
      'Classification helps understand relationships among organisms, trace the history of life, and conserve biodiversity — it is not just about naming'
    ],
    tips: [
      'Notochord presence/absence is the key dividing line between chordates and non-chordates',
      'Use mnemonics for the invertebrate phyla order (Porifera → Cnidaria → Platyhelminthes → Nematoda → Annelida → Arthropoda → Mollusca → Echinodermata) to recall them in sequence',
      'Protochordates are the "bridge" group — remember them specifically when asked about the invertebrate-to-vertebrate transition'
    ],
    bestPractices: [
      'When classifying an organism, work top-down: kingdom → phylum/division → class, checking one defining feature at each step',
      'Don\'t confuse "five kingdoms" (Whittaker, all life) with "five classes of Plantae" (within just the plant kingdom) — they answer different questions'
    ]
  },
  {
    chapter: 'Earth as a System: Energy, Matter, and Life',
    formulae: [],
    logic: [
      'The Sun\'s electromagnetic radiation is Earth\'s primary energy source',
      'Most weather processes (evaporation, condensation, precipitation) occur in the troposphere (lowest atmospheric layer)',
      'Earth\'s shape, latitude, and axial tilt cause variation in insolation (incoming solar radiation) and uneven heating of the surface',
      'Uneven surface heating drives winds and ocean currents',
      'Matter and energy continuously cycle between biotic (living) and abiotic (non-living) systems',
      'Atmospheric oxygen is used up in combustion, respiration, and oxide formation, and is restored mainly through photosynthesis',
      'Water, carbon, nitrogen and oxygen each cycle continuously between atmosphere, oceans, land, and living organisms (biogeochemical cycles)',
      'Biogeochemical cycles make nutrients available to organisms, sustain life, regulate climate, and balance ecosystems'
    ],
    tips: [
      'Link cause → effect directly: insolation variation → uneven heating → winds/ocean currents',
      'Photosynthesis is the main process restoring atmospheric oxygen — pair it mentally with respiration/combustion, which consume oxygen',
      'Treat this chapter as "connecting the dots" across physics (energy), chemistry (cycles), and biology (life) rather than memorising isolated facts'
    ],
    bestPractices: [
      'For "why is Earth\'s surface unevenly heated" questions, cite shape + latitude + axial tilt together, not just one factor',
      'When asked about a specific cycle (water/carbon/nitrogen/oxygen), name at least one biotic and one abiotic pathway it moves through'
    ]
  }
];
