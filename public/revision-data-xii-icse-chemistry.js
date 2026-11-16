// ─── Grade XII ICSE (ISC) Chemistry revision notes ────────────────────────
// screen-notes.js reads REVISION['XII ICSE Chemistry'] for Grade XII with the ICSE (ISC) syllabus selected.

REVISION['XII ICSE Chemistry'] = [
  {
    "chapter": "Solid State",
    "formulae": [
      "Packing efficiency (SC) = (1 × (4/3)πr³) / a³ × 100 = 52.4%; (BCC) = 68%; (FCC/CCP) = 74%",
      "Relationship between radius and edge length: SC r = a/2; BCC r = (√3/4)a; FCC r = a/(2√2)",
      "Density of unit cell: ρ = (Z × M) / (Nₐ × a³), where Z = atoms per unit cell, M = molar mass, a = edge length in cm",
      "Number of tetrahedral voids = 2N; octahedral voids = N (N = number of atoms in ccp/hcp lattice)",
      "Schottky defect: density decreases; Frenkel defect: density unchanged; F-centre (anion vacancy + trapped electron) gives colour"
    ],
    "logic": [
      "Crystalline solids have a definite, long-range periodic arrangement; amorphous solids have short-range order only and behave as supercooled liquids",
      "Unit cell types: primitive (corner only), body-centred (corner + body centre), face-centred (corner + face centres); all three are cubic Bravais lattices",
      "Closest packing: ABAB (hcp) and ABCABC (ccp/fcc) both give 74% efficiency and coordination number 12 — only the layer stacking sequence differs",
      "Point defects: stoichiometric (Schottky, Frenkel) preserve composition; non-stoichiometric (F-centres, metal excess/deficiency) alter composition and add colour or conductivity",
      "Electrical properties: insulators have large band gap; semiconductors have small band gap bridged by doping (n-type adds electrons, p-type adds holes)"
    ],
    "tips": [
      "In FCC, atoms touch along the face diagonal (4r = a√2), not the edge; use the correct geometry for each structure",
      "Density formula: convert a from pm to cm (÷ 10¹⁰) before cubing; forgetting this gives an answer 10³⁰ times wrong",
      "Schottky defects occur in ionic crystals with similar-sized ions (NaCl); Frenkel defects occur when one ion is much smaller (AgCl, AgBr)",
      "Coordination number = number of nearest neighbours: 6 in SC, 8 in BCC, 12 in FCC/HCP — memorise and quote with justification"
    ],
    "bestPractices": [
      "Draw the unit cell, label atom positions and the relevant diagonal, then derive r in terms of a before substituting numbers",
      "State units at every step in density calculations; express the final answer in g cm⁻³ with 2–3 significant figures",
      "When writing about defects, name the defect, describe which ion/vacancy is displaced, and state the effect on density and conductivity"
    ]
  },
  {
    "chapter": "Solutions",
    "formulae": [
      "Raoult's law: Pₐ = xₐ Pₐ°; total pressure P = xₐPₐ° + x_bP_b° (ideal solution)",
      "Relative lowering of vapour pressure: (Pₐ° − Pₐ)/Pₐ° = x_B (solute mole fraction)",
      "Elevation of boiling point: ΔTb = Kb × m; depression of freezing point: ΔTf = Kf × m (m = molality)",
      "Osmotic pressure: π = MRT (M = molarity, R = 0.0821 L atm mol⁻¹ K⁻¹, T in K)",
      "van 't Hoff factor i = observed colligative property / calculated for non-electrolyte; i > 1 for dissociation, i < 1 for association",
      "Henry's law: p = Kₕ × x (gas solubility increases with pressure; decreases with temperature)"
    ],
    "logic": [
      "Ideal solutions obey Raoult's law at all concentrations; ΔHmix = 0 and ΔVmix = 0; components have similar intermolecular forces",
      "Positive deviations (A–B interactions weaker than A–A and B–B) show P > ideal; negative deviations (A–B stronger) show P < ideal",
      "All colligative properties depend only on the number of solute particles, not their chemical identity — hence the utility of van 't Hoff factor for electrolytes",
      "Osmosis is the flow of solvent through a semipermeable membrane from lower to higher solute concentration; reverse osmosis applies pressure > π to reverse flow",
      "Abnormal molar masses arise from dissociation (apparent M lower) or association (apparent M higher); always check if the solute is ionic or forms dimers (e.g., acetic acid in benzene)"
    ],
    "tips": [
      "Kb and Kf are properties of the solvent alone, not the solute; Kf(water) = 1.86 K kg mol⁻¹, Kb(water) = 0.512 K kg mol⁻¹ — these are frequently given in questions",
      "For electrolytes, multiply theoretical ΔTf or ΔTb by i before comparing with experiment; derive i from the degree of dissociation α via i = 1 + (n − 1)α",
      "Henry's law applies to dilute solutions of gases; remember it predicts solubility — the constant Kₕ is large for sparingly soluble gases",
      "Osmotic pressure is the most sensitive colligative property (measurable for very dilute solutions); prefer it for high-molar-mass solutes"
    ],
    "bestPractices": [
      "Write the formula, identify the known and unknown, convert concentration to molality/molarity as required, then substitute and show units",
      "For electrolyte solutions, always state the value of i and explain it in terms of dissociation before computing the colligative property",
      "When determining molar mass from a colligative property, work step-by-step: molality → moles of solute → molar mass; clearly define each symbol"
    ]
  },
  {
    "chapter": "Electrochemistry",
    "formulae": [
      "Nernst equation: E_cell = E°_cell − (RT/nF) ln Q = E°_cell − (0.0592/n) log Q (at 25 °C)",
      "Standard electrode potential: E°_cell = E°_cathode − E°_anode; ΔG° = −nFE°_cell",
      "Equilibrium constant: ln K = nFE°/RT; log K = nE°/0.0592 (at 25 °C)",
      "Faraday's first law: m = (M × I × t) / (n × F); F = 96500 C mol⁻¹",
      "Molar conductivity: Λm = (κ × 1000) / M (κ in S cm⁻¹, M in mol L⁻¹); Kohlrausch law: Λ°m = Σλ°(cations) + Σλ°(anions)",
      "Resistance R = ρ × l/A; conductance G = 1/R; cell constant = l/A"
    ],
    "logic": [
      "In a galvanic cell, oxidation occurs at the anode (negative) and reduction at the cathode (positive); electron flow is from anode to cathode through the external circuit",
      "The standard hydrogen electrode (SHE) is assigned E° = 0.00 V; all standard electrode potentials are measured relative to SHE at 298 K, 1 atm, 1 M",
      "Spontaneity: ΔG < 0 ↔ E_cell > 0 ↔ K > 1; the three are mathematically equivalent and interconvertible via ΔG° = −nFE° = −RT ln K",
      "Electrolytic conductance: strong electrolytes show √c dependence (Debye–Hückel–Onsager); weak electrolytes show a steep rise near dilution infinity — Kohlrausch's law extrapolates Λ°m",
      "Electrolysis selectivity follows reduction potential (species with higher E° deposited first at cathode); at the anode, overvoltage determines whether O₂ or Cl₂ is evolved"
    ],
    "tips": [
      "In the Nernst equation, Q involves the ion concentration ratio raised to stoichiometric powers; write the half-cell reaction first to identify n",
      "Faraday's law: watch the valency (n) — depositing Cu²⁺ needs n = 2; Ag⁺ needs n = 1; Al³⁺ needs n = 3",
      "ΔG° = −nFE° and ΔG = −nFE (non-standard); never confuse the two — standard uses E°, non-standard uses Nernst-corrected E",
      "Degree of dissociation α = Λm / Λ°m; use this only for weak electrolytes where Λm ≠ Λ°m"
    ],
    "bestPractices": [
      "Split the cell reaction into separate half-reactions, balance each, then add; state E°_cathode and E°_anode before subtracting",
      "Carry n (number of electrons transferred) through every calculation; quote F = 96500 C mol⁻¹ or 96500 C mol⁻¹ as given in the data",
      "Interpret the sign of E°_cell: positive means spontaneous; convert to ΔG° and K to complete the thermodynamic picture when asked"
    ]
  },
  {
    "chapter": "Chemical Kinetics",
    "formulae": [
      "Rate = −(1/a)(d[A]/dt) = −(1/b)(d[B]/dt) = (1/c)(d[C]/dt) for aA + bB → cC",
      "Zero order: [A] = [A]₀ − kt; t½ = [A]₀/2k; units of k: mol L⁻¹ s⁻¹",
      "First order: [A] = [A]₀ e^(−kt); ln[A] = ln[A]₀ − kt; t½ = 0.693/k (independent of [A]₀); units of k: s⁻¹",
      "Second order (A → products): 1/[A] = 1/[A]₀ + kt; t½ = 1/(k[A]₀); units of k: L mol⁻¹ s⁻¹",
      "Arrhenius equation: k = A e^(−Eₐ/RT); ln k = ln A − Eₐ/(RT); log(k₂/k₁) = (Eₐ/2.303R)(1/T₁ − 1/T₂)",
      "Molecularity is from the mechanism; order is from experiment — they need not be equal"
    ],
    "logic": [
      "Rate law: rate = k[A]^m[B]^n; m and n are determined experimentally (not from the balanced equation); overall order = m + n",
      "Integrated rate laws allow determination of order graphically: [A] vs t (zero), ln[A] vs t (first), 1/[A] vs t (second) — linearity identifies the order",
      "Activation energy Eₐ is the minimum energy colliding molecules must have; a catalyst provides an alternative pathway with lower Eₐ, increasing k without shifting equilibrium",
      "Temperature dependence: a 10 °C rise roughly doubles the rate (rule of thumb) because the fraction of molecules exceeding Eₐ increases exponentially with T",
      "Elementary steps have molecularity 1 (unimolecular), 2 (bimolecular) or rarely 3 (termolecular); the rate-determining (slowest) step governs the overall rate law"
    ],
    "tips": [
      "Units of k change with order: check them first — if units are s⁻¹, it is first order; L mol⁻¹ s⁻¹ is second order",
      "t½ of a first-order reaction does not depend on initial concentration — quote this explicitly as it often earns a mark",
      "For Arrhenius, use the two-temperature form; never forget R = 8.314 J mol⁻¹ K⁻¹ and to convert Eₐ into J if given in kJ",
      "Do not equate molecularity with order; state that order is experimentally determined and molecularity applies only to elementary steps"
    ],
    "bestPractices": [
      "Determine order graphically by writing what plot would be linear; then quote the integrated rate equation used to find k",
      "In Arrhenius problems, convert T to Kelvin first and show Eₐ in J mol⁻¹ unless asked for kJ mol⁻¹",
      "Distinguish between rate and rate constant: rate depends on concentration; k does not (at constant T)"
    ]
  },
  {
    "chapter": "Surface Chemistry",
    "formulae": [
      "Freundlich adsorption isotherm: x/m = k P^(1/n), 0 < 1/n < 1; log(x/m) = log k + (1/n) log P (linear form)",
      "Langmuir isotherm: x/m = aP/(1 + bP); at high P, x/m → a/b (monolayer saturation)",
      "Coagulation: Hardy–Schulze rule — coagulating power ∝ (charge number)⁴ for oppositely charged ion",
      "Gold number = mg of protective colloid that just prevents coagulation of 10 mL standard gold sol by 1 mL 10% NaCl"
    ],
    "logic": [
      "Adsorption vs absorption: adsorption is a surface phenomenon (adsorbent/adsorbate); absorption is a bulk phenomenon; both together are called sorption",
      "Physisorption: weak van der Waals forces, reversible, low Eₐ, multilayer possible, decreases with temperature; chemisorption: chemical bond, specific, high Eₐ, monolayer only, may increase then decrease with T",
      "Colloids (1–1000 nm) scatter light (Tyndall effect) and show Brownian motion; they are stable due to like charges and solvation layers around particles",
      "Emulsions: O/W (milk, cream) stabilised by proteins; W/O (butter, margarine) stabilised by long-chain alcohols; emulsifying agent reduces interfacial tension",
      "Catalysis: homogeneous (same phase as reactants) vs heterogeneous (different phase); enzymes are biological catalysts with a lock-and-key specificity"
    ],
    "tips": [
      "Tyndall effect distinguishes a colloid from a true solution; mention the scattering of light by colloidal particles in your answer",
      "Hardy–Schulze rule: for a negative sol (e.g., As₂S₃), coagulating power is Al³⁺ > Ca²⁺ > Na⁺ — always list the counter-ion with its charge",
      "Freundlich isotherm log-plot: slope = 1/n (between 0 and 1), intercept = log k — this is a standard numerical question",
      "Do not confuse gold number with flocculation value; gold number is mass (lower = better protective colloid)"
    ],
    "bestPractices": [
      "Distinguish physisorption from chemisorption using enthalpy, specificity, temperature dependence and layer thickness — a comparison table earns full marks",
      "In Freundlich problems, convert to log form, equate slope and intercept to 1/n and log k explicitly, and substitute to find x/m",
      "Define each term (emulsifier, peptisation, dialysis) clearly before explaining the mechanism"
    ]
  },
  {
    "chapter": "p-Block Elements",
    "formulae": [
      "Hybridisation: NH₃ (sp³, pyramidal), NF₃ (sp³), H₂O (sp³, bent), PCl₅ (sp³d, trigonal bipyramidal), SF₆ (sp³d², octahedral)",
      "Bond angle trend: NH₃ 107°, PH₃ 93°, AsH₃ 92° — lone-pair repulsion decreases with larger central atom",
      "Interhalogen compounds: AB, AB₃, AB₅, AB₇ (A is heavier halogen); XeF₂ (linear), XeF₄ (square planar), XeF₆ (distorted octahedral)",
      "Oxidation states: N (−3 to +5), P (−3 to +5), S (−2 to +6), Cl (−1 to +7); exceptions: O usually −2 (−1 in peroxides, −½ in O₂F₂)",
      "Allotropes of S: rhombic (stable below 96 °C), monoclinic (stable 96–119 °C), plastic (amorphous); allotropes of P: white (P₄, toxic), red, black"
    ],
    "logic": [
      "Group 15 (N–Bi): N shows +5 state; heavier members show inert-pair effect (+3 more stable); N is unique — no d orbitals, can't expand octet, forms π bonds readily",
      "Group 16 (O–Po): O forms two bonds; S, Se form four or six using d orbitals; ozone (O₃) is angular (117°) with resonance; SO₂ is bent, SO₃ is trigonal planar",
      "Group 17 (halogens): electronegativity F > Cl > Br > I; oxidising power F > Cl > Br > I; acid strength HF < HCl < HBr < HI; F has no d orbitals — only −1 oxidation state",
      "Group 18 (noble gases): Xe forms compounds (XeF₂, XeF₄, XeOF₂) due to large size and low ionisation energy; He, Ne, Ar have no known stable compounds",
      "Oxoacids of nitrogen: HNO₂ (nitrous, N = +3), HNO₃ (nitric, N = +5); of sulfur: H₂SO₃ (+4), H₂SO₄ (+6), H₂S₂O₇ (oleum), H₂S₂O₈ (Marshall's acid, +7)"
    ],
    "tips": [
      "Nitrogen cannot form NF₅ — it has no d orbitals and cannot expand beyond the octet; phosphorus can (PCl₅, PF₅)",
      "In oxoacid comparisons, more O atoms = stronger acid (more stable conjugate base); HClO₄ > HClO₃ > HClO₂ > HClO",
      "Fluorine is always −1 (most electronegative element); when asked for oxidation state of an element in a fluoride, assign −1 to F first",
      "Interhalogen bond strength: the AB bond is weaker than A–A or B–B because the two atoms differ in size and electronegativity"
    ],
    "bestPractices": [
      "Draw Lewis structures, then derive hybridisation and geometry in one sequence — shape alone without hybridisation typically loses a mark",
      "List allotropes with their structural units (e.g., rhombic S has S₈ rings) and stable temperature ranges",
      "For industrial processes (Contact, Haber, Ostwald), give equation, conditions (temperature, pressure, catalyst) and the reason for each condition"
    ]
  },
  {
    "chapter": "d- and f-Block Elements",
    "formulae": [
      "Electronic configuration of 3d series: [Ar] 3d^n 4s² (n = 1–10); exceptions Cr = [Ar]3d⁵4s¹, Cu = [Ar]3d¹⁰4s¹",
      "On forming ions, 4s is lost before 3d: Fe = [Ar]3d⁶4s²; Fe²⁺ = [Ar]3d⁶; Fe³⁺ = [Ar]3d⁵",
      "Magnetic moment μ = √(n(n+2)) BM, where n = number of unpaired electrons (spin-only formula)",
      "Lanthanide contraction: atomic radii decrease from La to Lu due to poor shielding by 4f electrons; causes Zr ≈ Hf and similar properties",
      "Colour of transition-metal ions arises from d-d transitions (photon energy matches crystal-field splitting Δ); the absorbed wavelength is complementary to the observed colour"
    ],
    "logic": [
      "Transition metals show variable oxidation states because 3d and 4s electrons have similar energies; this also explains their use as catalysts",
      "Metallic character and malleability arise from partially filled d bands allowing electron delocalisation; high melting points result from strong metallic bonding with d-orbital participation",
      "Complex ion formation: transition metals act as Lewis acids (accept electron pairs); lone pairs from ligands fill empty d orbitals; crystal field theory explains splitting",
      "Lanthanoids (Ce–Lu) and actinoids (Th–Lr) fill 4f and 5f orbitals respectively; actinoids are mostly radioactive and show greater variation in oxidation states",
      "Catalytic activity: transition metals provide active surface sites and can change oxidation state; examples — Fe in Haber process, V₂O₅ in Contact process, Mn in KMnO₄ reactions"
    ],
    "tips": [
      "Always remove 4s electrons before 3d when writing the ion configuration — a common error is to remove 3d first",
      "Spin-only magnetic moment formula applies when orbital contribution is quenched (most 3d ions in an octahedral field); quote the formula and calculate n from the configuration",
      "Lanthanide contraction explanation: poor 4f shielding → effective nuclear charge increases → radii contract across the series — this one sentence earns a mark",
      "KMnO₄ colour: due to charge transfer (not d-d); Mn in +7 state has no d electrons — cannot show d-d transitions"
    ],
    "bestPractices": [
      "Write the electronic configuration of the neutral atom first, then derive the ion step-by-step, removing 4s before 3d",
      "For magnetic moment questions, determine n (unpaired electrons), state the formula, calculate and quote the unit (BM)",
      "When comparing properties across the d-block, refer to effective nuclear charge, shielding, and orbital energy convergence as the underlying reasons"
    ]
  },
  {
    "chapter": "Coordination Compounds",
    "formulae": [
      "IUPAC name: [metal(ligands)]^charge; anionic complex ends in -ate; Roman numeral for oxidation state in parentheses",
      "Coordination number = total number of donor atoms directly bonded to the central metal ion",
      "Crystal field splitting: Δₒ (octahedral) > Δₜ (tetrahedral) ≈ 4/9 Δₒ; high-spin if Δ < pairing energy P; low-spin if Δ > P",
      "Effective atomic number (EAN) rule: 36 (Kr), 54 (Xe), 86 (Rn) — metal + electrons from ligands = noble gas configuration (Werner's rule)",
      "Werner's theory: primary valence = oxidation state (ionisable, satisfied by anions); secondary valence = coordination number (non-ionisable, satisfied by ligands)"
    ],
    "logic": [
      "Ligands: monodentate (one donor atom), bidentate (two, e.g. en, ox²⁻), polydentate (e.g. EDTA⁴⁻ is hexadentate); chelates are more stable (chelate effect — entropy driven)",
      "Isomerism: structural (ionisation, linkage, coordination, hydrate) and stereoisomerism (geometric cis/trans, optical); square planar Pt(II) shows both; tetrahedral complexes show optical but rarely geometric isomerism",
      "Valence bond theory (VBT): hybridisation of metal orbitals receives ligand electron pairs; predicts geometry but cannot explain colour or magnetism quantitatively",
      "Crystal field theory (CFT): ligand electrons cause electrostatic repulsion; d orbitals split into t₂g and eₘ sets; Δₒ depends on ligand (spectrochemical series: I⁻ < Br⁻ < Cl⁻ < F⁻ < OH⁻ < H₂O < py < NH₃ < en < CN⁻ < CO)",
      "Colour: a complex absorbs visible light corresponding to Δ; the transmitted complementary colour is what we see; no d electrons (d⁰) or all paired (d¹⁰) → colourless"
    ],
    "tips": [
      "In IUPAC naming, list ligands alphabetically (ignore multiplying prefixes di, tri); always write 'ato' suffix for anionic ligands (chlorido, oxalato) in IUPAC 2005",
      "Geometric isomers are possible only for square planar (MA₂B₂, MABCD) and octahedral complexes (MA₄B₂, MA₃B₃); tetrahedral MA₂B₂ does not show cis/trans",
      "Chelate effect: each ligand-replacement step is entropically favoured; EDTA is so effective because all six donations happen in one molecule",
      "Optical isomers (enantiomers): [Co(en)₃]³⁺ and cis-[Co(en)₂Cl₂]⁺ are common examples; they are non-superimposable mirror images"
    ],
    "bestPractices": [
      "Break a coordination compound formula into central metal and ligands before naming: [Fe(CN)₆]⁴⁻ → Fe, six CN⁻ ligands → hexacyanoferrate(II) ion",
      "For CFT problems, write the d-electron count, distribute into t₂g and eₘ under high-spin or low-spin rules, then determine CFSE and magnetic moment",
      "Draw clear structural diagrams for geometric and optical isomers; label them (cis/trans or Δ/Λ) explicitly"
    ]
  },
  {
    "chapter": "Haloalkanes and Haloarenes",
    "formulae": [
      "SN2: rate = k[RX][Nu]; inversion of configuration (Walden inversion); favoured by primary substrates and strong nucleophiles",
      "SN1: rate = k[RX]; racemisation; favoured by tertiary substrates, polar protic solvents; carbocation stability R⁺: 3° > 2° > 1° > CH₃⁺",
      "E2 (elimination): anti-periplanar geometry required; Zaitsev product (more substituted alkene) is major",
      "E1: rate = k[RX]; favoured by tertiary substrates, weak nucleophiles, high temperature",
      "Reactivity order toward nucleophilic substitution: RI > RBr > RCl > RF (C–X bond strength increases up the group); aryl and vinyl halides are almost inert in SN reactions"
    ],
    "logic": [
      "Bond polarity: C–X bond is polar (C^δ+ X^δ−); nucleophiles attack the electrophilic carbon; leaving-group ability parallels acid strength of HX: I⁻ > Br⁻ > Cl⁻ > F⁻",
      "SN2 proceeds via a pentacoordinate trigonal bipyramidal transition state; the nucleophile enters from the back while the leaving group departs from the front",
      "SN1 proceeds via a planar carbocation; attack from either face gives racemic mixture (50:50 R/S); tertiary substrates favour SN1 due to hyperconjugation and inductive stabilisation",
      "Aryl halides are unreactive in SN1/SN2 because: (i) the C–X bond has partial double-bond character (resonance), (ii) the phenyl ring repels incoming nucleophiles, (iii) the sp² carbon is less electrophilic",
      "Uses and hazards: chloroform (CHCl₃) — anaesthetic; DDT — persistent pesticide; Freons (CFCs) — ozone depletion via Cl• radicals; PCBs — carcinogenic"
    ],
    "tips": [
      "Whenever you see a chiral centre reaction, determine whether inversion (SN2) or racemisation (SN1) occurs; specify R/S change explicitly",
      "Polar aprotic solvents (acetone, DMSO) favour SN2 (nucleophile not solvated); polar protic solvents (water, alcohol) favour SN1 and E1",
      "For haloarenes, distinguish nucleophilic aromatic substitution (requires activating groups) from electrophilic aromatic substitution (normal path)",
      "Reactivity in nucleophilic substitution: alkyl iodide is most reactive but remember fluoride is least reactive — the exam often tests this order"
    ],
    "bestPractices": [
      "Draw the mechanism with arrows: show the nucleophile, the transition state geometry, and the leaving group; label each step",
      "For optical activity questions, assign R/S to starting material and product, explaining any inversion or retention explicitly",
      "Quote conditions for each reaction: SN2 needs a primary substrate and strong nucleophile; SN1 needs a tertiary substrate and polar protic solvent"
    ]
  },
  {
    "chapter": "Alcohols, Phenols and Ethers",
    "formulae": [
      "Lucas test: anhydrous ZnCl₂/conc. HCl; 3° → immediate turbidity; 2° → turbidity in 5 min; 1° → no turbidity at room temperature",
      "Dehydration order (with H₂SO₄/heat): 3° > 2° > 1°; Zaitsev rule gives more substituted alkene as major product",
      "Acidity of phenol: Kₐ ≈ 10⁻¹⁰; weaker than carboxylic acids (Kₐ ≈ 10⁻⁵) but stronger than alcohols (Kₐ ≈ 10⁻¹⁶); electron-withdrawing groups (−NO₂) increase acidity",
      "Williamson ether synthesis: RONa + R'X → R–O–R' + NaX; primary R'X gives best yield; tertiary R'X undergoes elimination",
      "Oxidation: 1° alcohol → aldehyde → carboxylic acid; 2° alcohol → ketone; 3° alcohol → not oxidised under mild conditions"
    ],
    "logic": [
      "Alcohol acidity increases: CH₃OH < 1° < 2° < 3° in gas phase; in water the order reverses due to solvation; phenol is far more acidic due to resonance stabilisation of PhO⁻",
      "Electrophilic aromatic substitution (EAS) in phenol: −OH is a strong ortho/para director due to +M effect; ring is activated — phenol reacts with Br₂ water (no catalyst needed) giving 2,4,6-tribromophenol",
      "Ether cleavage with HI: HI cleaves to give the more reactive alkyl iodide; for aryl–alkyl ethers, ArOH + RI is always the product (Ar–O bond is not cleaved by HI)",
      "Propylene oxide (epoxide) ring-opening: acid catalysis → Markovnikov (Nu attacks more substituted C); base catalysis → anti-Markovnikov (Nu attacks less substituted C with inversion)",
      "Hydrogen bonding: alcohols have O–H···O bonds (high boiling point); ethers have no O–H but accept H-bonds from donor solvents; methanol > diethyl ether in boiling point"
    ],
    "tips": [
      "Phenol cannot be acylated by carboxylic acid directly — use acid chloride or acetic anhydride (Schotten-Baumann); note the difference from alcohol acylation",
      "Reimer-Tiemann reaction gives salicylaldehyde (CHO at ortho position); Kolbe's reaction gives salicylic acid (COOH at ortho) — both specific to phenol",
      "In ether cleavage, HI is more reactive than HBr and HCl; HI is always used in textbook examples — remember it",
      "Distinguish alcoholic KOH (elimination, E2) from aqueous KOH (substitution, SN2) in reactions of alkyl halides — same reagent, different role"
    ],
    "bestPractices": [
      "Classify the alcohol (1°/2°/3°) at the start and use it to predict which reagent and reaction type are relevant",
      "For phenol reactions, draw the resonance structures of PhO⁻ to justify its high acidity and ortho/para directing ability",
      "When completing a reaction sequence, state each intermediate, reagent, and condition; don't skip the aldehyde stage in 1° alcohol oxidation"
    ]
  },
  {
    "chapter": "Aldehydes, Ketones and Carboxylic Acids",
    "formulae": [
      "Aldehydes reduce Tollens' reagent (Ag(NH₃)₂⁺) → silver mirror; Fehling's solution (Cu²⁺ → Cu₂O, red ppt); ketones do not",
      "Nucleophilic addition: Nu⁻ attacks C=O → tetrahedral intermediate → protonation; order of reactivity: HCHO > RCHO > RCOR'",
      "Aldol condensation: 2CH₃CHO → CH₃CH(OH)CH₂CHO (acetaldol) with dilute NaOH; on heating → crotonaldehyde (CH₃CH=CHCHO) + H₂O",
      "Acidity of carboxylic acids: Kₐ increases with electron-withdrawing groups; CCl₃COOH > CHCl₂COOH > CH₂ClCOOH > CH₃COOH",
      "Hell-Volhard-Zelinsky (HVZ): RCH₂COOH + Br₂/P → RCHBrCOOH (α-bromination of carboxylic acid); Dakin oxidation: ArCHO + H₂O₂ → ArOH"
    ],
    "logic": [
      "Electrophilicity of carbonyl: δ+ on C due to polar C=O; nucleophiles add to C; electron-withdrawing groups on the adjacent carbon increase electrophilicity",
      "Aldehydes are more reactive than ketones in nucleophilic addition: less steric hindrance and C is more electrophilic (two H/R, not two R groups)",
      "Canizzaro reaction (non-enolisable aldehydes, e.g. HCHO, benzaldehyde): disproportionation with conc. NaOH → 1 mol alcohol + 1 mol carboxylate",
      "Carboxylic acid derivatives reactivity: acyl chloride > acid anhydride > ester > amide (order of nucleophilic acyl substitution based on leaving-group ability)",
      "Decarboxylation: RCOONa + NaOH (sodalime) → RH + Na₂CO₃; β-ketoacids decarboxylate readily at room temperature via cyclic transition state"
    ],
    "tips": [
      "The iodoform test: CH₃COR or CH₃CHOH compounds give yellow CHI₃ precipitate with I₂/NaOH; this tests for the CH₃CO– group",
      "Only aldehydes (not ketones) give Fehling's and Tollens' tests; benzaldehyde gives Tollens' but NOT Fehling's (aromatic aldehyde)",
      "For carboxylic acid naming: longest chain containing –COOH is the parent; –COOH carbon is C-1 (not counted separately in IUPAC)",
      "Lucas test works for alcohols up to 6 carbons; above that all dissolve readily — the test is not diagnostic for high-MW alcohols"
    ],
    "bestPractices": [
      "For identification of an organic compound, list the tests in order: (a) Tollens'/Fehling's for aldehyde, (b) iodoform for methyl ketone/secondary alcohol, (c) litmus for carboxylic acid",
      "When writing mechanisms, use curly arrows originating from electron-rich sites (lone pairs or π bonds) to electron-poor sites (δ+ carbon)",
      "Quote the structural formula of each product, not just the name; this avoids ambiguity and shows understanding"
    ]
  },
  {
    "chapter": "Amines",
    "formulae": [
      "Basicity order (aliphatic): 2° > 1° > 3° > NH₃ in water (solvent effects dominate over inductive); in gas phase: 3° > 2° > 1° > NH₃",
      "Basicity: aryl amines < NH₃ < alkyl amines; aniline pKb ≈ 9.4 (lone pair delocalised into ring)",
      "Hinsberg test: 1° amine + PhSO₂Cl → soluble sulfonamide in NaOH; 2° → insoluble sulfonamide; 3° → no reaction",
      "Diazonium coupling: ArN₂⁺ + PhOH (in NaOH) → azo dye (−N=N−); reacts with activated arenes (phenols, amines) at para position",
      "Gabriel synthesis: phthalimide + KOH + RX → N-alkylphthalimide → hydrolysis → 1° amine (pure, no secondary or tertiary)"
    ],
    "logic": [
      "Amines as bases: lone pair on N accepts a proton; electron-donating groups (alkyl) increase basicity; electron-withdrawing groups (aryl ring, −NO₂) decrease it",
      "Aniline is a weaker base than aliphatic amines because the N lone pair is delocalised into the benzene ring by +M effect, making it less available for protonation",
      "Electrophilic aromatic substitution on aniline: –NH₂ is a powerful ortho/para director; aniline reacts with Br₂ water to give 2,4,6-tribromoaniline",
      "Diazotisation: ArNH₂ + HNO₂ → ArN₂⁺ at 0–5 °C; above 5 °C the diazonium ion decomposes; it is a reactive electrophile used in Sandmeyer reactions",
      "Sandmeyer reactions: replace N₂⁺ with Cl (CuCl/HCl), Br (CuBr/HBr), CN (CuCN/KCN), OH (H₂O, warm), H (H₃PO₂); Balz-Schiemann: replace N₂⁺ with F using HBF₄"
    ],
    "tips": [
      "In basic solution Hinsberg test: 1° sulfonamide salt dissolves in NaOH (the N–H is acidic); 2° sulfonamide is insoluble — quote this in your answer",
      "Diazotisation must be done at 0–5 °C; a cold bath is essential — always mention temperature control in the procedure",
      "Gabriel synthesis gives only primary amines because the phthalimide nitrogen reacts only once (N–H is replaced, no further alkylation possible)",
      "In comparing basicities of amines, state which factor (inductive, resonance, solvation) dominates; examiners look for a reason, not just the order"
    ],
    "bestPractices": [
      "For identification of amines, use a stepwise approach: (1) Hinsberg test to identify class, (2) diazonium coupling for arylamines, (3) basicity test with litmus",
      "Write the diazonium coupling product showing the azo group (–N=N–) and the position of coupling (always para to activating group if para is free)",
      "In Gabriel synthesis, draw phthalimide's structure, show the alkylation and the hydrolysis step, then identify the product as a pure primary amine"
    ]
  },
  {
    "chapter": "Biomolecules",
    "formulae": [
      "Glucose: C₆H₁₂O₆ (aldohexose); mutarotation: α-D-glucose ⇌ β-D-glucose (equilibrium mixture, optical rotation changes with time)",
      "Peptide bond: –CO–NH– formed by condensation between –COOH and –NH₂ with loss of H₂O; primary structure = sequence of amino acids",
      "Nucleotide = nitrogenous base + pentose sugar + phosphate; DNA uses deoxyribose + A, T, G, C; RNA uses ribose + A, U, G, C",
      "Watson-Crick base pairing: A=T (2 H-bonds), G≡C (3 H-bonds) in DNA; A=U (2 H-bonds) in RNA",
      "Isoelectric point (pI): pH at which an amino acid has no net charge; at pH < pI, amino acid is a cation; at pH > pI, it is an anion"
    ],
    "logic": [
      "Carbohydrates: monosaccharides (can't hydrolyse further); disaccharides (sucrose, lactose, maltose — hydrolysis gives monosaccharides); polysaccharides (starch, cellulose, glycogen — storage and structural)",
      "Proteins: fibrous (structural, insoluble — keratin, collagen) vs globular (enzymatic, soluble — insulin, haemoglobin); denaturation disrupts secondary/tertiary structure reversibly or irreversibly",
      "Enzymes are biological catalysts: substrate binds at the active site (lock-and-key or induced-fit model); specificity arises from shape and functional-group complementarity",
      "DNA double helix: two antiparallel strands wound around a common axis; hydrophobic base-stacking and H-bonding between complementary bases stabilise the helix",
      "Vitamins: fat-soluble (A, D, E, K — stored in liver); water-soluble (B-complex, C — not stored, must be taken daily); deficiency diseases are examinable (scurvy = C, rickets = D)"
    ],
    "tips": [
      "Sucrose is non-reducing (no free anomeric –OH); maltose and lactose are reducing sugars — this is a frequent two-mark question",
      "Denaturation: mention the agent (heat, acid, organic solvent) and which level of protein structure is disrupted (secondary/tertiary); primary structure is NOT affected",
      "For nucleic acid base pairing: adenine pairs with thymine (not uracil) in DNA; in RNA, uracil replaces thymine — a common confusion",
      "Glycosidic bond in starch: α-1,4 in amylose (unbranched) + α-1,6 at branch points in amylopectin; cellulose has β-1,4 (why humans can't digest it)"
    ],
    "bestPractices": [
      "Draw the Haworth projection of glucose (α and β forms) showing the anomeric C-1 and the –OH orientation; label the ring atoms",
      "Name all four levels of protein structure (primary, secondary, tertiary, quaternary) and the types of interactions that maintain each",
      "When describing enzyme action, refer to both the substrate and the active site, the type of interaction (H-bonding, ionic, hydrophobic), and the product formation step"
    ]
  },
  {
    "chapter": "Polymers",
    "formulae": [
      "Degree of polymerisation n = molar mass of polymer / molar mass of monomer",
      "Addition polymerisation: nCH₂=CH₂ → (–CH₂–CH₂–)n (polyethylene); free-radical, cationic or anionic mechanism",
      "Condensation polymerisation: loss of small molecule (H₂O, HCl) in each step; example nylon-6,6 from hexamethylenediamine + adipic acid",
      "Glass transition temperature Tg: below Tg, polymer is glassy/rigid; above Tg, rubbery/flexible; crystalline polymers have a melting point Tm > Tg",
      "HDPE (high-density polyethylene) = linear chains, Ziegler-Natta catalyst; LDPE = branched, free-radical process; both from ethylene"
    ],
    "logic": [
      "Chain-growth (addition) polymerisation: initiation → propagation → termination; no by-product; molecular weight increases rapidly; e.g. PVC, PTFE, polystyrene",
      "Step-growth (condensation) polymerisation: any two molecules can react; MW increases slowly; by-product removed; e.g. polyesters (Dacron), polyamides (nylons), Bakelite",
      "Thermoplastics (linear/branched) can be remelted and reshaped; thermosets (cross-linked) cannot — difference is due to network structure",
      "Natural rubber: cis-1,4-polyisoprene (soft, tacky); vulcanisation adds –S– cross-links using sulphur → harder, elastic, resistant to temperature",
      "Biodegradable polymers (PHBV, PLA) contain ester or amide linkages hydrolysed by microorganisms; non-biodegradable polymers (polyethylene, PVC) persist in the environment"
    ],
    "tips": [
      "Nylon-6,6 is from two monomers (each with 6 C); nylon-6 is from one monomer (caprolactam); distinguish them by the name and their different monomer count",
      "Bakelite is a thermosetting polymer: phenol + formaldehyde with an acid or base catalyst; cross-linked 3D network — cannot be remoulded",
      "BunaN: butadiene–acrylonitrile copolymer, oil-resistant; BunaS: butadiene–styrene, tyres; neoprene: polychloroprene — quote the composition when naming a rubber",
      "Identify if a reaction is addition (no loss of atoms) or condensation (small molecule lost per step) before naming the polymer type"
    ],
    "bestPractices": [
      "Draw the repeating unit of a polymer inside square brackets with the bond continuing both sides and 'n' as subscript outside the bracket",
      "Distinguish thermoplastic from thermosetting using structure (linear vs cross-linked) and properties (reusable vs non-reusable)",
      "For condensation polymers, write both monomer structures, identify the functional groups, show the elimination of water, and draw the repeating unit"
    ]
  },
  {
    "chapter": "Chemistry in Everyday Life",
    "formulae": [
      "Drug–receptor interaction: drugs with complementary shape and polarity bind to receptor active sites; analgesics (aspirin inhibits COX enzymes → reduced prostaglandins)",
      "Cleansing action of soap: hydrophilic carboxylate head (-COO⁻) + hydrophobic hydrocarbon tail; micelle formation emulsifies grease with critical micelle concentration (CMC)",
      "Hardness of water: temporary (Ca(HCO₃)₂, Mg(HCO₃)₂ — removed by boiling); permanent (CaSO₄, MgSO₄ — removed by washing soda Na₂CO₃ or ion exchange)",
      "Chemicals in food: antioxidants (BHA, BHT) slow oxidative rancidity; preservatives (sodium benzoate, sorbic acid) inhibit microbial growth",
      "Rocket propellant: liquid H₂ + liquid O₂; solid propellant uses Al powder as fuel and ammonium perchlorate as oxidiser"
    ],
    "logic": [
      "Drug classification by action: analgesics (pain relief), antipyretics (fever), antibiotics (kill/inhibit bacteria), antiseptics (external use), disinfectants (surfaces), antacids (neutralise stomach acid), antihistamines (block H₁ receptors)",
      "Broad-spectrum antibiotics (chloramphenicol, tetracycline) act on many bacteria; narrow-spectrum (penicillin, streptomycin) are specific; bactericidal kill bacteria; bacteriostatic inhibit growth",
      "Detergents vs soaps: detergents are sodium alkylbenzenesulfonates (work in hard water); soaps are sodium/potassium salts of fatty acids (form scum with Ca²⁺/Mg²⁺)",
      "Synthetic dyes: azo dyes contain –N=N– group and are made by coupling a diazonium salt with an activated arene; mordant dyes fix to fabric via a metal ion bridge",
      "Rocket fuels, food additives, artificial sweeteners (saccharin, aspartame, sucralose) and preservatives all feature in ISC questions — focus on chemical names and functions"
    ],
    "tips": [
      "Aspirin (acetylsalicylic acid) is both an analgesic and antipyretic; paracetamol (acetaminophen) is an analgesic–antipyretic but not an anti-inflammatory — distinguish their actions",
      "Sulfa drugs (sulfonamides) are competitive inhibitors of PABA incorporation; they are bacteriostatic not bactericidal — a one-mark distinction",
      "Soap lather is poor in hard water because Ca²⁺ and Mg²⁺ precipitate the fatty-acid carboxylate as insoluble scum; detergents don't do this",
      "Artificial sweeteners: saccharin is 550× sweeter than sucrose; aspartame (not suitable for phenylketonurics); sucralose (made from sucrose, chlorinated) — exam questions ask for name and feature"
    ],
    "bestPractices": [
      "Organise drug classification as a table: class → example → mode of action → target; this systematic approach helps recall in exams",
      "For food chemistry questions, name the specific preservative or antioxidant, its function, and an example of food it is used in",
      "Link every chemical discussed to its real-world context: aspirin → COX inhibition → reduced pain/fever; this contextual connection scores explanation marks"
    ]
  }
];
