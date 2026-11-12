// ─── Grade XI ICSE (ISC) Chemistry revision notes ───────────────────────────
// screen-notes.js reads REVISION['XI ICSE Chemistry'] for Grade XI with the ICSE (ISC) syllabus selected.

REVISION['XI ICSE Chemistry'] = [
  {
    "chapter": "Some Basic Concepts of Chemistry",
    "formulae": [
      "Number of moles n = mass ÷ molar mass = particles ÷ Nₐ = V(gas at STP) ÷ 22.4 L; Nₐ = 6.022 × 10²³ mol⁻¹",
      "Mass % of element = (mass of element in 1 mol ÷ molar mass) × 100",
      "Molecular formula = n × empirical formula; n = molar mass ÷ empirical formula mass; molar mass = 2 × vapour density",
      "Molarity M = mol solute ÷ L solution; molality m = mol solute ÷ kg solvent; mole fraction x_A = n_A ÷ Σn (Σx = 1)",
      "Molarity from mass % and density: M = (10 × % × d) ÷ molar mass, with d in g mL⁻¹",
      "Dilution: M₁V₁ = M₂V₂"
    ],
    "logic": [
      "Laws of chemical combination: conservation of mass, definite proportions, multiple proportions, Gay-Lussac's gaseous volumes, Avogadro's law",
      "Atomic mass is relative to ¹²C = 12 u exactly; the average atomic mass is the abundance-weighted mean of the isotopic masses",
      "The mole connects the particle scale and the laboratory scale: 1 mol of anything contains Nₐ particles",
      "Stoichiometry: convert everything to moles, use the balanced-equation ratio, then convert back to mass or volume",
      "The limiting reagent is consumed first and decides the yield; compare the available mole ratio with the required ratio"
    ],
    "tips": [
      "Molality and mole fraction do not depend on temperature; molarity does (volume changes)",
      "Read whether a question asks for atoms or molecules: 1 mol NH₃ holds 4Nₐ atoms",
      "Empirical-formula ratios such as 1 : 1.5 or 1 : 1.33 must be multiplied (×2, ×3) to whole numbers. Do not round them",
      "For the limiting reagent, compare mole ratios with the equation coefficients, never the raw masses"
    ],
    "bestPractices": [
      "Write the balanced equation first and show the mole ratio explicitly",
      "Carry units at every step (g, mol, L, kg) and round only at the end",
      "Set out empirical-formula work as a table: % → moles → ÷ smallest → whole-number ratio"
    ]
  },
  {
    "chapter": "Structure of Atom",
    "formulae": [
      "E = hν = hc/λ; wavenumber ν̄ = 1/λ; h = 6.626 × 10⁻³⁴ J s",
      "Photoelectric: hν = W₀ + ½mv²; W₀ = hν₀",
      "Bohr (H-like): Eₙ = −13.6 Z²/n² eV = −2.18 × 10⁻¹⁸ Z²/n² J; rₙ = 0.529 n²/Z Å",
      "Rydberg: 1/λ = R_H Z²(1/n₁² − 1/n₂²), R_H = 1.097 × 10⁷ m⁻¹; lines from level n to ground state = n(n − 1)/2",
      "de Broglie λ = h/mv = h/p; Heisenberg Δx · Δp ≥ h/4π",
      "Nodes: radial = n − l − 1, angular = l, total = n − 1; max electrons in shell = 2n², orbitals = n²"
    ],
    "logic": [
      "Thomson (plum pudding) → Rutherford (nuclear) → Bohr (quantised orbits) → quantum mechanical model (orbitals as probability regions)",
      "Spectral series of H: Lyman (to n = 1, UV), Balmer (to n = 2, visible), Paschen (3), Brackett (4), Pfund (5) in the IR",
      "Dual nature: matter waves matter only for tiny masses; orbits with exact paths are replaced by orbitals",
      "Quantum numbers n, l (0 to n − 1), mₗ (−l to +l), mₛ (±½) fix an electron's address; Pauli: no two electrons share all four",
      "Filling: Aufbau by (n + l) rule (lower n first on a tie), Hund's rule for degenerate orbitals; Cr (3d⁵4s¹) and Cu (3d¹⁰4s¹) are exceptions"
    ],
    "tips": [
      "Convert nm → m (× 10⁻⁹) before using E = hc/λ",
      "Intensity of light changes the number of photoelectrons, never their maximum KE",
      "Transition metals lose 4s electrons before 3d when forming ions (Fe³⁺ = 3d⁵)",
      "In H (one electron) all orbitals of the same n are degenerate; in multi-electron atoms use n + l"
    ],
    "bestPractices": [
      "State the formula, substitute with units, then simplify. Each step earns marks",
      "When checking a quantum-number set, test n ≥ 1, 0 ≤ l ≤ n − 1 and |mₗ| ≤ l together",
      "Write configurations in noble-gas core form and count unpaired electrons using orbital boxes"
    ]
  },
  {
    "chapter": "Classification of Elements and Periodicity in Properties",
    "formulae": [
      "Modern periodic law: properties are periodic functions of atomic number (Moseley)",
      "Blocks: s = ns¹⁻²; p = ns² np¹⁻⁶; d = (n−1)d¹⁻¹⁰ ns⁰⁻²; f = (n−2)f¹⁻¹⁴ (n−1)d⁰⁻¹ ns²",
      "Group number: s-block = number of valence electrons; p-block = 10 + ns + np electrons; d-block = (n−1)d + ns electrons",
      "Mulliken electronegativity χ = (IE + EA)/2",
      "Isoelectronic species: radius decreases as nuclear charge increases (O²⁻ > F⁻ > Na⁺ > Mg²⁺ > Al³⁺)"
    ],
    "logic": [
      "Effective nuclear charge rises across a period and atoms shrink; a new shell down a group makes atoms larger",
      "IE exceptions: Be > B and N > O (filled s² and half-filled p³ stability)",
      "Cl has the most negative ΔegH (not F) because of repulsion in fluorine's compact 2p shell; noble gases have positive ΔegH",
      "Metallic, basic character ↑ down a group, ↓ across a period; oxides go from basic (Na₂O) through amphoteric (Al₂O₃) to acidic (Cl₂O₇)",
      "Diagonal relationship (Li–Mg, Be–Al, B–Si) arises from similar charge/size ratios"
    ],
    "tips": [
      "A large jump between successive IEs tells you the number of valence electrons",
      "Cation < parent atom < anion in size; higher positive charge → smaller ion",
      "Lanthanoid contraction makes 4d and 5d elements of a group almost the same size (Zr ≈ Hf)",
      "Electronegativity is a property of a bonded atom, has no units, and is not the same as electron gain enthalpy"
    ],
    "bestPractices": [
      "Always explain a trend by naming the cause: nuclear charge, shielding, number of shells, subshell stability",
      "Locate an element by first writing its configuration, then deciding block → period → group",
      "Quote the exceptions when asked about IE or ΔegH trends; examiners look for them"
    ]
  },
  {
    "chapter": "Chemical Bonding and Molecular Structure",
    "formulae": [
      "Formal charge = (valence electrons) − (non-bonding electrons) − ½(bonding electrons)",
      "Bond order (MO) = ½(N_b − N_a); BO > 0 means the molecule can exist; higher BO → shorter, stronger bond",
      "Dipole moment μ = q × d (debye; 1 D = 3.336 × 10⁻³⁰ C m)",
      "Steric number = bond pairs + lone pairs → 2 sp linear, 3 sp² trigonal planar, 4 sp³ tetrahedral, 5 sp³d trigonal bipyramidal, 6 sp³d² octahedral",
      "Lone pairs (5 pairs): 1 lp see-saw (SF₄), 2 lp T-shape (ClF₃), 3 lp linear (XeF₂); (6 pairs): 1 lp square pyramidal (BrF₅), 2 lp square planar (XeF₄)"
    ],
    "logic": [
      "Ionic bond formation is favoured by low IE of the metal, very negative ΔegH of the non-metal and high lattice enthalpy",
      "VSEPR repulsion order: lp–lp > lp–bp > bp–bp, which shrinks bond angles (CH₄ 109.5° > NH₃ 107° > H₂O 104.5°)",
      "Valence bond theory: a bond forms by overlap of half-filled orbitals; head-on overlap gives σ, sideways overlap gives π",
      "MO order: for up to N₂ (≤ 14 electrons) π2p lies below σ2p; for O₂ and F₂ σ2p lies below π2p. O₂ and B₂ are paramagnetic",
      "Hydrogen bonding (with F, O, N) raises boiling points (H₂O, HF, NH₃); intramolecular H-bonding (o-nitrophenol) lowers them"
    ],
    "tips": [
      "Lone pairs in sp³d geometry always go equatorial",
      "Symmetric shapes (CO₂, BF₃, CH₄, PCl₅, SF₆, XeF₄) have zero dipole moment even with polar bonds",
      "Bond orders to memorise: H₂ 1, He₂ 0, Li₂ 1, B₂ 1, C₂ 2, N₂ 3, O₂ 2, F₂ 1, Ne₂ 0",
      "Fajans' rules: small, high-charge cation + large anion → more covalent (LiI > LiF; AlCl₃ partly covalent)"
    ],
    "bestPractices": [
      "For shapes, first count valence electrons → bond pairs and lone pairs → electron geometry → molecular shape",
      "Draw MO diagrams with labelled levels and show unpaired electrons with arrows",
      "State 'all bond dipoles cancel by symmetry' explicitly when explaining zero dipole moment"
    ]
  },
  {
    "chapter": "States of Matter: Gases and Liquids",
    "formulae": [
      "Boyle: P₁V₁ = P₂V₂; Charles: V₁/T₁ = V₂/T₂; Gay-Lussac: P₁/T₁ = P₂/T₂; combined: P₁V₁/T₁ = P₂V₂/T₂ (T in K)",
      "Ideal gas: PV = nRT; R = 0.0821 L atm K⁻¹ mol⁻¹ = 8.314 J K⁻¹ mol⁻¹; M = dRT/P",
      "Dalton: P = Σpᵢ, pᵢ = xᵢP; Graham: r₁/r₂ = √(M₂/M₁) = √(d₂/d₁)",
      "KE per mole = (3/2)RT; u_rms = √(3RT/M), u_avg = √(8RT/πM), u_mp = √(2RT/M)",
      "van der Waals: (P + an²/V²)(V − nb) = nRT; Z = PV/nRT; T_c = 8a/27Rb, P_c = a/27b², V_c = 3b, T_Boyle = a/Rb"
    ],
    "logic": [
      "Intermolecular forces: London dispersion < dipole–dipole < hydrogen bonding; thermal energy competes with them and decides the state",
      "Kinetic theory postulates: negligible molecular volume, no attractions, random motion, elastic collisions, KE ∝ T",
      "Real gases deviate at high P (volume matters) and low T (attractions matter); Z < 1 when attractions dominate, Z > 1 when repulsions dominate",
      "A gas liquefies only below T_c; at T_c the liquid and vapour become indistinguishable",
      "Liquids: vapour pressure ↑ with T (boiling when it equals external P); surface tension and viscosity ↓ with T"
    ],
    "tips": [
      "Always convert °C to K (add 273) in gas-law problems",
      "For Graham's law, the time taken is proportional to √M (the inverse of rate) for equal volumes",
      "Molar mass from density at STP = d × 22.4",
      "'a' measures attraction (easily liquefied gases have large a); 'b' measures molecular size"
    ],
    "bestPractices": [
      "List the given values with units, then pick the gas law that keeps the right quantities constant",
      "Use R consistent with your units: 0.0821 for L atm, 8.314 for SI (Pa, m³, J)",
      "For deviation questions, use a Z vs P sketch with labelled regions and say why at each region"
    ]
  },
  {
    "chapter": "Chemical Thermodynamics",
    "formulae": [
      "First law: ΔU = q + w (q + absorbed; w + done on the system); work against constant P: w = −P_ext ΔV",
      "Reversible isothermal (ideal gas): w = −2.303 nRT log(V₂/V₁)",
      "ΔH = ΔU + Δn(g)RT; at constant pressure q_p = ΔH, at constant volume q_v = ΔU; C_p − C_v = R",
      "ΔH°(reaction) = ΣΔH°f(products) − ΣΔH°f(reactants) = Σ(bond enthalpies broken) − Σ(bond enthalpies formed)",
      "ΔS = q_rev/T; ΔS(phase change) = ΔH/T at the transition temperature",
      "ΔG = ΔH − TΔS; ΔG° = −RT ln K = −2.303 RT log K; T(crossover) = ΔH/ΔS"
    ],
    "logic": [
      "System types: open (energy + matter), closed (energy only), isolated (neither); state functions U, H, S, G vs path functions q, w",
      "Hess's law follows because H is a state function; thermochemical equations can be added, reversed (change sign) or multiplied",
      "Born–Haber idea: lattice enthalpy found indirectly from a cycle of sublimation, ionisation, dissociation, electron gain and formation steps",
      "Entropy rises with melting, vaporisation, dissolution and an increase in gas moles; the second law says ΔS_universe > 0 for spontaneous change",
      "Spontaneity at constant T, P: ΔG < 0; enthalpy-driven when ΔH < 0 at low T, entropy-driven when ΔS > 0 at high T"
    ],
    "tips": [
      "Convert ΔS from J to kJ (÷ 1000) before combining with ΔH in kJ",
      "Count only gaseous species in Δn(g); ΔH°f of elements in standard states is zero",
      "Strong acid + strong base ΔH_neut ≈ −57 kJ mol⁻¹; weak acid/base gives a smaller magnitude",
      "K > 1 ⇔ ΔG° < 0; K < 1 ⇔ ΔG° > 0"
    ],
    "bestPractices": [
      "Write the target equation first in Hess's law problems and manipulate the given ones to match it",
      "State the sign convention you use before solving any first-law problem",
      "For spontaneity, tabulate the signs of ΔH, ΔS and ΔG and give the crossover temperature"
    ]
  },
  {
    "chapter": "Equilibrium",
    "formulae": [
      "For aA + bB ⇌ cC + dD: K_c = [C]ᶜ[D]ᵈ/[A]ᵃ[B]ᵇ; K_p = K_c(RT)^Δn, Δn = gas moles (products − reactants)",
      "Reverse reaction: K' = 1/K; multiply equation by n: K' = Kⁿ; add equations: multiply the K values",
      "pH = −log[H⁺]; pH + pOH = 14 at 298 K; K_w = [H⁺][OH⁻] = 10⁻¹⁴",
      "Weak acid: [H⁺] = √(K_a C), α = √(K_a/C); weak base: [OH⁻] = √(K_b C); K_a × K_b = K_w",
      "Buffer: pH = pK_a + log([salt]/[acid]); pOH = pK_b + log([salt]/[base])",
      "K_sp: AB = s², AB₂ or A₂B = 4s³, AB₃ = 27s⁴; precipitation when ionic product > K_sp"
    ],
    "logic": [
      "Equilibrium is dynamic: forward rate = backward rate; K depends only on temperature (and on how the equation is written)",
      "Q vs K: Q < K → forward; Q > K → backward; Q = K → equilibrium",
      "Le Chatelier: the system opposes the change; only temperature changes the value of K (exothermic: K falls as T rises)",
      "Acid–base concepts: Arrhenius (H⁺/OH⁻ in water), Brønsted–Lowry (proton donor/acceptor, conjugate pairs), Lewis (electron-pair acceptor/donor)",
      "Salt hydrolysis: SA–WB salt acidic (NH₄Cl), WA–SB salt basic (CH₃COONa), SA–SB neutral (NaCl); the common-ion effect suppresses ionisation and solubility"
    ],
    "tips": [
      "Pure solids and liquids do not appear in K expressions",
      "For very dilute strong acids (10⁻⁸ M), include H⁺ from water: pH is just below 7, never above it",
      "The stronger the acid, the weaker its conjugate base",
      "An inert gas at constant volume has no effect; at constant pressure it favours the side with more gas moles"
    ],
    "bestPractices": [
      "Use an ICE table (initial, change, equilibrium) for every equilibrium-concentration problem",
      "Write the hydrolysis equation when explaining the pH of a salt solution",
      "In neutralisation-mixing problems compute moles, find the excess, then divide by the total volume"
    ]
  },
  {
    "chapter": "Redox Reactions",
    "formulae": [
      "Oxidation = loss of e⁻ / increase in O.N.; reduction = gain of e⁻ / decrease in O.N. (OIL RIG)",
      "Sum of O.N. = 0 (neutral) or = ion charge; F = −1 always; O = −2 (peroxide −1, superoxide −½, OF₂ +2); H = +1 (metal hydrides −1)",
      "MnO₄⁻: acidic → Mn²⁺ (5e⁻), neutral/weakly basic → MnO₂ (3e⁻), strongly basic → MnO₄²⁻ (1e⁻); Cr₂O₇²⁻ → 2Cr³⁺ (6e⁻)",
      "E°cell = E°(cathode) − E°(anode) = E°(right) − E°(left); feasible if E°cell > 0",
      "Common O.N.: Cr in K₂Cr₂O₇ +6, S in H₂SO₄ +6, S in S₂O₃²⁻ +2 (avg), S in S₄O₆²⁻ +2.5, Fe in Fe₃O₄ +8/3, Cl in HClO₄ +7"
    ],
    "logic": [
      "Redox = simultaneous oxidation and reduction; the oxidising agent is reduced and the reducing agent is oxidised",
      "Types: combination, decomposition, displacement (metal/non-metal), disproportionation (same element both up and down)",
      "Ion-electron method: split into halves, balance atoms other than O/H, then O (H₂O), then H (H⁺), then charge (e⁻), then equalise e⁻ and add; in basic medium neutralise H⁺ with OH⁻",
      "Redox titrations: KMnO₄ is a self-indicator (pink end-point); K₂Cr₂O₇ needs an indicator such as diphenylamine",
      "Electrode potential: a higher (more positive) E° means a stronger oxidising agent; a lower (more negative) E° means a stronger reducing agent"
    ],
    "tips": [
      "A fractional O.N. is an average over non-equivalent atoms (Fe₃O₄, S₄O₆²⁻)",
      "An element in its highest O.N. can only be an oxidising agent; in its lowest, only a reducing agent; intermediate states can be both (SO₂, H₂O₂)",
      "Always check that both atoms and total charge balance in the final ionic equation",
      "Do not multiply E° values when an equation is multiplied: E° is intensive"
    ],
    "bestPractices": [
      "Write O.N. above each atom before deciding what is oxidised and what is reduced",
      "Show half-equations separately, then add them; examiners award step marks",
      "State the medium (acidic/basic) and balance with H⁺/H₂O or OH⁻/H₂O accordingly"
    ]
  },
  {
    "chapter": "Hydrogen",
    "formulae": [
      "Isotopes: protium ¹H, deuterium ²H (D), tritium ³H (T, radioactive β-emitter, t½ ≈ 12.3 y)",
      "Volume strength of H₂O₂: 'V volume' contains 68V/22.4 g L⁻¹; molarity = V/11.2",
      "Hardness (ppm CaCO₃) = (moles of Ca/Mg salt per L × 100 × 1000) per 1000 g water",
      "Water gas: C + H₂O → CO + H₂; shift reaction: CO + H₂O → CO₂ + H₂ (catalyst)",
      "Hydrides: ionic (s-block: NaH, CaH₂), covalent (p-block: electron-deficient B₂H₆, electron-precise CH₄, electron-rich NH₃/H₂O), metallic/interstitial (d, f-block)"
    ],
    "logic": [
      "Hydrogen resembles both alkali metals (1s¹, H⁺) and halogens (gains 1e⁻, H⁻, diatomic) and so is placed separately",
      "Water: bent (104.5°), highly polar, extensive hydrogen bonding → high bp, high specific heat; ice has an open cage structure and floats",
      "Temporary hardness (bicarbonates) is removed by boiling or Clark's method; permanent hardness (Cl⁻/SO₄²⁻ of Ca/Mg) by washing soda, Calgon or ion exchange",
      "H₂O₂: open-book non-planar structure; O at −1, so it is both an oxidant and a reductant; decomposes in light; stored with urea in dark wax-lined bottles",
      "Hydrogen as fuel: high energy per unit mass, clean product (water), used in fuel cells; the 'hydrogen economy' faces storage and transport problems"
    ],
    "tips": [
      "Heavy water D₂O: bp 101.4 °C, mp 3.8 °C, denser than H₂O; used as a moderator",
      "Calgon is sodium hexametaphosphate (Na₆P₆O₁₈); zeolite exchanges Ca²⁺ for Na⁺ and is regenerated with brine",
      "H₂O₂ reduces acidified KMnO₄ (decolourises it) but oxidises Fe²⁺, PbS, I⁻",
      "Lab H₂O₂: BaO₂ + dilute H₂SO₄; industrial: 2-ethylanthraquinol auto-oxidation"
    ],
    "bestPractices": [
      "Write a balanced equation for every hardness-removal or H₂O₂ reaction you mention",
      "For volume-strength problems, start from 2H₂O₂ → 2H₂O + O₂ and the 68 g ↔ 22.4 L relationship",
      "Classify hydrides with one named example each"
    ]
  },
  {
    "chapter": "The s-Block Elements",
    "formulae": [
      "Group 1: ns¹; Group 2: ns²; flame colours: Li crimson, Na yellow, K lilac, Rb red-violet, Cs blue; Ca brick red, Sr crimson, Ba apple green (Be, Mg none)",
      "Oxides on burning: 4Li + O₂ → 2Li₂O; 2Na + O₂ → Na₂O₂; K + O₂ → KO₂",
      "Solvay: NaCl + NH₃ + CO₂ + H₂O → NaHCO₃↓ + NH₄Cl; 2NaHCO₃ → Na₂CO₃ + H₂O + CO₂",
      "Gypsum CaSO₄·2H₂O → (393 K) CaSO₄·½H₂O (plaster of Paris) → (> 393 K) CaSO₄ (dead burnt)",
      "Lime: CaCO₃ → CaO + CO₂; CaO + H₂O → Ca(OH)₂; 2Ca(OH)₂ + 2Cl₂ → CaCl₂ + Ca(OCl)₂ + 2H₂O"
    ],
    "logic": [
      "Down both groups: size ↑, IE ↓, electropositive and reducing character ↑; Li is still the best reducing agent in water because of its huge hydration enthalpy",
      "Anomalies of Li and Be come from small size and high polarising power; diagonal pairs are Li–Mg and Be–Al",
      "Group 2 trends: hydroxide solubility ↑ and sulphate solubility ↓ down the group; carbonate thermal stability ↑ down the group",
      "Alkali metals dissolve in liquid NH₃ to give blue, paramagnetic, conducting solutions (solvated electrons)",
      "NaOH by the chlor-alkali (Castner–Kellner) process; Portland cement = CaO + SiO₂ + Al₂O₃ + Fe₂O₃ clinker with gypsum to slow setting"
    ],
    "tips": [
      "Baking soda NaHCO₃; washing soda Na₂CO₃·10H₂O (effloresces); soda ash anhydrous Na₂CO₃",
      "Excess CO₂ clears milky lime water by forming soluble Ca(HCO₃)₂",
      "BeO and Be(OH)₂ are amphoteric; BeCl₂ is covalent and polymeric in the solid",
      "KHCO₃ is too soluble, so K₂CO₃ cannot be made by the Solvay process"
    ],
    "bestPractices": [
      "Explain solubility trends with both lattice enthalpy and hydration enthalpy",
      "Give the formula AND the common name for every compound",
      "Write balanced equations for the preparation and key reactions of each important compound"
    ]
  },
  {
    "chapter": "Some p-Block Elements",
    "formulae": [
      "Group 13: ns² np¹ (B, Al, Ga, In, Tl); Group 14: ns² np² (C, Si, Ge, Sn, Pb)",
      "Boric acid: B(OH)₃ + 2H₂O ⇌ [B(OH)₄]⁻ + H₃O⁺ (weak monobasic Lewis acid)",
      "Borax bead: Na₂B₄O₇·10H₂O → Na₂B₄O₇ → 2NaBO₂ + B₂O₃",
      "Diborane: 4BF₃ + 3LiAlH₄ → 2B₂H₆ + 3LiF + 3AlF₃; B₂H₆ + 3O₂ → B₂O₃ + 3H₂O; B₂H₆ + 6H₂O → 2B(OH)₃ + 6H₂",
      "Silicones: R₂SiCl₂ + 2H₂O → R₂Si(OH)₂ + 2HCl, then condensation → –(R₂SiO)ₙ–",
      "CO lab prep: HCOOH → (conc. H₂SO₄) CO + H₂O; SiO₂ + 4HF → SiF₄ + 2H₂O"
    ],
    "logic": [
      "The inert pair effect makes the lower oxidation state more stable down the group: Tl⁺ > Tl³⁺, Pb²⁺ > Pb⁴⁺ (PbO₂ is an oxidant, SnCl₂ a reductant)",
      "Boron is anomalous (non-metal, covalent, electron-deficient); BX₃ are Lewis acids with acidity BF₃ < BCl₃ < BBr₃ due to back-bonding",
      "Diborane has 4 terminal 2c–2e and 2 bridging 3c–2e (banana) bonds; AlCl₃ dimerises to Al₂Cl₆ to complete its octet",
      "Carbon allotropes: diamond (sp³, hard insulator), graphite (sp², layered conductor/lubricant), fullerene C₆₀ (20 hexagons + 12 pentagons), graphene (single layer)",
      "Silicates are built from SiO₄⁴⁻ tetrahedra; zeolites are aluminosilicates used as shape-selective catalysts and water softeners"
    ],
    "tips": [
      "Ga is smaller than Al because of poor d-electron shielding — a favourite 'explain why'",
      "CCl₄ resists hydrolysis (no d orbitals on C) but SiCl₄ hydrolyses readily",
      "CO binds haemoglobin ~300× more strongly than O₂; CO₂ is linear (sp) with zero dipole moment",
      "R₃SiCl = chain terminator, R₂SiCl₂ = chain builder, RSiCl₃ = cross-linker"
    ],
    "bestPractices": [
      "Back structural explanations with hybridisation and bond type (e.g. 3c–2e bonds, back-bonding)",
      "Give a balanced equation whenever you describe a preparation or test",
      "Link each property to a use (graphite conducts → electrodes; silicones repel water → waterproofing)"
    ]
  },
  {
    "chapter": "Organic Chemistry: Some Basic Principles and Techniques",
    "formulae": [
      "% C = (12/44) × (mass CO₂/mass compound) × 100; % H = (2/18) × (mass H₂O/mass compound) × 100",
      "Dumas: % N = (28 × V₀ ÷ 22 400) ÷ w × 100, with V₀ = volume of dry N₂ at STP (subtract aqueous tension)",
      "Kjeldahl: % N = 1.4 × M × 2 × V(H₂SO₄ in mL) ÷ w (for H₂SO₄); 1.4 × M × V ÷ w for a monobasic acid",
      "Carius: % X = (at. mass X ÷ molar mass AgX) × (mass AgX ÷ w) × 100; % S = (32/233) × (mass BaSO₄ ÷ w) × 100",
      "Rf = distance moved by substance ÷ distance moved by solvent front"
    ],
    "logic": [
      "Carbon is tetravalent; sp³ (109.5°), sp² (120°), sp (180°); s-character ↑ → electronegativity of C ↑",
      "Isomerism: structural (chain, position, functional, metamerism, tautomerism) and stereo (geometrical, optical)",
      "Fission: homolytic → free radicals; heterolytic → carbocations (sp², planar) and carbanions (sp³, pyramidal)",
      "Electronic effects: inductive (permanent, σ, distance-dependent), electromeric (temporary, π, reagent-driven), resonance/mesomeric (π/lone pair delocalisation), hyperconjugation (σ C–H delocalisation)",
      "Purification: sublimation, crystallisation, simple/fractional distillation, steam distillation, distillation under reduced pressure, differential extraction, chromatography"
    ],
    "tips": [
      "Carbocation stability 3° > 2° > 1° > CH₃⁺ (allyl and benzyl are extra stable by resonance); carbanion stability is the reverse",
      "Halogens are −I but +R; overall they withdraw electrons",
      "Kjeldahl fails for nitro, azo and ring nitrogen — use Dumas",
      "Boil the Lassaigne extract with HNO₃ before the AgNO₃ test to remove CN⁻ and S²⁻"
    ],
    "bestPractices": [
      "For IUPAC names: longest chain → lowest locants → alphabetical prefixes → correct suffix",
      "Draw curved arrows from the electron source to the electron sink when showing electronic effects",
      "In quantitative analysis write the formula, substitute with units, and state the answer to 3 significant figures"
    ]
  },
  {
    "chapter": "Hydrocarbons",
    "formulae": [
      "General formulas: alkanes CₙH₂ₙ₊₂, alkenes CₙH₂ₙ, alkynes CₙH₂ₙ₋₂; benzene C₆H₆ (C–C 139 pm)",
      "Wurtz: 2RX + 2Na → R–R + 2NaX (dry ether); decarboxylation: RCOONa + NaOH → (CaO) RH + Na₂CO₃; Kolbe electrolysis: 2CH₃COONa → C₂H₆ (anode)",
      "Alkene prep: alcohol → (conc. H₂SO₄, 443 K) alkene + H₂O; RX → (alc. KOH) alkene; alkyne → Lindlar → cis, Na/liq. NH₃ → trans",
      "Ethyne: CaC₂ + 2H₂O → C₂H₂ + Ca(OH)₂; 3C₂H₂ → (red-hot Fe, 873 K) C₆H₆; HC≡CH + H₂O → (Hg²⁺/H⁺) CH₃CHO",
      "Hückel's rule: planar, cyclic, conjugated with (4n + 2) π electrons → aromatic"
    ],
    "logic": [
      "Alkanes: free-radical halogenation (initiation → propagation → termination); reactivity F₂ > Cl₂ > Br₂ > I₂ and 3° H > 2° H > 1° H",
      "Conformations of ethane: staggered (60°) more stable than eclipsed (0°) by ~12.5 kJ mol⁻¹; Newman and sawhorse projections",
      "Alkenes: electrophilic addition — Markovnikov (via the more stable carbocation); peroxide effect (anti-Markovnikov) only with HBr; ozonolysis locates the C=C",
      "Alkynes: terminal H is acidic (sp C, 50% s) → NaNH₂ and ammoniacal AgNO₃/Cu₂Cl₂ tests",
      "Benzene: electrophilic substitution (nitration, halogenation, sulphonation, Friedel–Crafts) via a σ-complex; o/p directors (–OH, –NH₂, –CH₃, –X) vs m directors (–NO₂, –CN, –CHO, –COOH, –SO₃H)"
    ],
    "tips": [
      "Geometrical isomerism needs two different groups on each doubly bonded carbon (but-2-ene yes, propene no)",
      "To work back from ozonolysis products, join the two C=O carbons with a C=C",
      "Halogens are deactivating but still ortho/para directing",
      "Polycyclic aromatic hydrocarbons such as benzo[a]pyrene (from incomplete combustion) are carcinogenic"
    ],
    "bestPractices": [
      "Write mechanisms with curved arrows and label each step (initiation, propagation, termination)",
      "Name every product by IUPAC and state the reagent and conditions over the arrow",
      "For directive-influence questions, show the resonance structures of the substituted ring"
    ]
  },
  {
    "chapter": "Environmental Chemistry",
    "formulae": [
      "Acid rain (pH < 5.6): 2SO₂ + O₂ + 2H₂O → 2H₂SO₄; 4NO₂ + O₂ + 2H₂O → 4HNO₃; CaCO₃ + H₂SO₄ → CaSO₄ + H₂O + CO₂",
      "Ozone formation: O₂ → (UV) 2O; O + O₂ ⇌ O₃",
      "Ozone destruction: CF₂Cl₂ → (UV) ·CF₂Cl + Cl·; Cl· + O₃ → ClO· + O₂; ClO· + O → Cl· + O₂",
      "Normal rain: CO₂ + H₂O ⇌ H₂CO₃ (pH ≈ 5.6)",
      "Water standards: BOD of clean water < 5 ppm; F⁻ > 2 ppm → mottling; nitrate > 50 ppm → blue baby syndrome; lead limit ≈ 50 ppb"
    ],
    "logic": [
      "The atmosphere: troposphere (weather, ground-level pollution) and stratosphere (ozone layer)",
      "Smog: classical (smoke + fog + SO₂, reducing, cool humid) vs photochemical (NOₓ + hydrocarbons + sunlight → O₃, PAN; oxidising, warm sunny)",
      "Greenhouse effect: CO₂, CH₄, N₂O, H₂O, CFCs, O₃ absorb IR; more of them → global warming",
      "Water pollution: pathogens, organic waste (high BOD, low DO), eutrophication from phosphates/nitrates, toxic heavy metals; soil pollution from pesticides (DDT biomagnification), herbicides, industrial waste",
      "Green chemistry: prevent waste, use safer solvents (supercritical CO₂, water), catalysts, renewable feedstocks, and design for degradation"
    ],
    "tips": [
      "Stratospheric ozone is good (UV shield); tropospheric ozone is a pollutant",
      "Only the photochemical smog is oxidising — a common true/false trap",
      "The ozone hole appears over Antarctica in spring (September–October) because of polar stratospheric clouds",
      "CO is toxic by binding haemoglobin; CO₂ is not toxic at normal levels but is the main greenhouse gas"
    ],
    "bestPractices": [
      "Back every pollution answer with the chemical equation for how the pollutant forms or acts",
      "Use a two-column table for compare/contrast questions (classical vs photochemical smog)",
      "End long answers with control measures — examiners expect remedies as well as causes"
    ]
  }
];
