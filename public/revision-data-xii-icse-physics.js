// ─── Grade XII ICSE (ISC) Physics revision notes ──────────────────────────────
// screen-notes.js reads REVISION['XII ICSE Physics'] when state.grade==='XII' && state.stream==='ICSE'
REVISION['XII ICSE Physics'] = [
  {
    "chapter": "Electrostatics",
    "formulae": [
      "Coulomb's law: F = kq₁q₂/r² where k = 1/(4πε₀) ≈ 9×10⁹ N m² C⁻²; in a medium F = kq₁q₂/(εᵣr²)",
      "Electric field: E = F/q₀ = kQ/r² (N C⁻¹ or V m⁻¹); due to a dipole on axis: E = 2kp/r³; on equatorial: E = kp/r³",
      "Electric potential: V = kQ/r (V); for a dipole on axis: V = kp cos θ/r²; E = −dV/dr",
      "Gauss's law: ∮E·dA = Q_enclosed/ε₀; for a uniform sphere: E = kQ/r² (outside); E = kQr/R³ (inside, r < R)",
      "Capacitance: C = Q/V (F); parallel plate: C = ε₀A/d; with dielectric: C = Kε₀A/d; energy U = ½CV² = Q²/2C = QV/2",
      "Capacitors in series: 1/C_net = 1/C₁ + 1/C₂; in parallel: C_net = C₁ + C₂; potential divides across series capacitors"
    ],
    "logic": [
      "Coulomb's law applies between point charges in vacuum; the dielectric constant (relative permittivity) reduces the force in a medium",
      "Superposition principle: total electric field or potential at a point is the vector (or scalar) sum of contributions from each charge",
      "Work done in moving a charge in an electric field equals the change in potential energy; W = q(V₁ − V₂); no work along an equipotential",
      "Gauss's law is most useful for finding E when the charge distribution has spherical, cylindrical, or planar symmetry",
      "Dielectric increases capacitance because polarisation of the dielectric reduces the effective electric field between the plates"
    ],
    "tips": [
      "In ISC questions, state Gauss's law in words and in equations before applying it; choose a Gaussian surface that matches the symmetry",
      "For capacitor combinations in a circuit, simplify step by step — identify series/parallel groups and reduce iteratively",
      "Energy stored in a capacitor: use U = ½CV² when V is known, U = Q²/2C when Q is known — pick the convenient form",
      "Electric field is a vector; always specify direction (towards or away from the charge) when writing the final answer"
    ],
    "bestPractices": [
      "Draw a clear diagram showing charges, field lines, or the Gaussian surface before writing equations",
      "State the formula, substitute values with units, then compute — this layout earns maximum marks in ISC",
      "For dipole problems, distinguish axis (end-on) and equatorial (broadside-on) positions — the formulae and directions differ"
    ]
  },
  {
    "chapter": "Current Electricity",
    "formulae": [
      "Ohm's law: V = IR; resistivity ρ: R = ρL/A (Ω); temperature dependence: ρ_T = ρ₀(1 + αT)",
      "Series: R_net = R₁ + R₂ + …; Parallel: 1/R_net = 1/R₁ + 1/R₂ + …; current divider: I₁ = I·R₂/(R₁+R₂)",
      "Kirchhoff's laws: KCL — sum of currents at a junction = 0; KVL — sum of EMFs = sum of IR drops around any closed loop",
      "Wheatstone bridge balance: P/Q = R/S (no current through galvanometer); unknown resistance S = QR/P",
      "EMF and terminal voltage: V = ε − Ir (discharging); V = ε + Ir (charging); maximum power transfer when R_ext = r",
      "Electric power: P = VI = I²R = V²/R (W); energy E = Pt (J); for AC circuits use P_avg = V_rms·I_rms·cos φ"
    ],
    "logic": [
      "Drift velocity of electrons vd = I/(nAe); current density J = nevd = σE where σ = 1/ρ is conductivity",
      "In a Wheatstone bridge, balance condition means no current through the galvanometer; this makes the circuit easy to analyse as two separate parallel branches",
      "Kirchhoff's KVL: assign a loop direction; EMF is positive if traversed from − to + terminal; IR is negative if traversed in the direction of current",
      "Internal resistance causes the terminal voltage to be less than EMF under load; the difference (ε − V) = Ir is the voltage drop across internal resistance",
      "Metre bridge applies the Wheatstone principle; unknown resistance X = R·(100−l)/l where l is the balancing length from the unknown-resistance end"
    ],
    "tips": [
      "In Kirchhoff's law problems, label each branch current with a unique symbol and direction before writing equations — an ambiguous diagram causes errors",
      "For the potentiometer, the balancing condition is that no current flows through the galvanometer; e.m.f. ratio = balancing length ratio",
      "Temperature coefficient α is positive for metals (resistance increases with T) and negative for semiconductors",
      "State the balance condition for Wheatstone bridge as an equation before solving — do not go directly to the formula"
    ],
    "bestPractices": [
      "Redraw complex resistor networks step by step, reducing series/parallel combinations one stage at a time",
      "Write KVL equations for each independent loop, then KCL at the nodes — solve simultaneous equations for the unknowns",
      "Check the final answer by substituting back and verifying energy conservation (sum of power dissipated = power supplied by EMF)"
    ]
  },
  {
    "chapter": "Moving Charges and Magnetism",
    "formulae": [
      "Lorentz force: F = q(E + v×B); magnetic force on current: F = IL×B; on a moving charge: F = qvB sin θ",
      "Biot-Savart law: dB = (μ₀/4π)·(I dl × r̂)/r² (T); μ₀ = 4π×10⁻⁷ T m A⁻¹",
      "Magnetic field at centre of circular loop of radius R: B = μ₀I/(2R); for n turns: B = nμ₀I/(2R)",
      "Ampere's circuital law: ∮B·dl = μ₀I_enclosed; for infinite solenoid: B = μ₀nI (inside), B ≈ 0 (outside)",
      "Radius of circular orbit: r = mv/(qB); period T = 2πm/(qB) (independent of v — cyclotron principle)",
      "Torque on current loop: τ = nIAB sin θ = M×B where magnetic moment M = nIA (A m²)"
    ],
    "logic": [
      "Magnetic force on a charge is always perpendicular to v and B; therefore it does no work and cannot change kinetic energy",
      "Right-hand rule (or curl rule) gives the direction of B for a current element; Fleming's left-hand rule gives force direction for a current in a field",
      "Biot-Savart law is used when there is no convenient symmetry; Ampere's law is preferred for high-symmetry current distributions (solenoid, toroid, long wire)",
      "Cyclotron frequency f = qB/(2πm) depends only on B and the charge-to-mass ratio — not on the speed; this is the basis of the cyclotron",
      "A current loop in a uniform magnetic field experiences a torque (not a net force) that tends to align its magnetic moment with the field"
    ],
    "tips": [
      "For Ampere's law, choose an Amperian loop that is concentric with and matches the symmetry of the current distribution",
      "In force problems, use F = BIL sin θ — always identify whether the angle θ is between I (or v) and B, not some other angle in the diagram",
      "Galvanometer converted to ammeter: add shunt S = Ig·G/(I−Ig) in parallel; to voltmeter: add R = V/Ig − G in series",
      "State the direction of the force using the right-hand slap rule or cross-product — do not guess"
    ],
    "bestPractices": [
      "Draw the current, field vector, and force vector on the diagram using arrows before writing the formula",
      "Show the derivation of B for a solenoid using Ampere's law step by step — the derivation is frequently examined in ISC",
      "Define magnetic moment M = nIA and state its direction (normal to the plane of the loop, determined by the right-hand rule) before calculating torque"
    ]
  },
  {
    "chapter": "Magnetism and Matter",
    "formulae": [
      "Magnetic dipole moment of a bar magnet: M = m·2l (A m²) where m is pole strength and 2l is the distance between poles",
      "Field on the axial line of a magnet: B = μ₀·2Mr/(4π(r²−l²)²) ≈ μ₀·2M/(4πr³) for r >> l",
      "Field on the equatorial line: B = μ₀·M/(4π(r²+l²)^(3/2)) ≈ μ₀·M/(4πr³) for r >> l; direction antiparallel to M",
      "Torque on a dipole in a uniform field: τ = MB sin θ; potential energy U = −MB cos θ; stable equilibrium at θ = 0",
      "Magnetic susceptibility χ = M/H; relative permeability μᵣ = 1 + χ; B = μ₀μᵣH",
      "Curie's law for paramagnetics: χ = C/T (C is Curie constant); for ferromagnetics: Curie temperature Tₒ above which ferromagnetic → paramagnetic"
    ],
    "logic": [
      "A bar magnet behaves as a magnetic dipole; its axial field is twice its equatorial field at the same distance (for r >> l)",
      "Diamagnetics (χ < 0) are weakly repelled by magnets; paramagnetics (0 < χ << 1) are weakly attracted; ferromagnetics (χ >> 1) are strongly attracted",
      "Hysteresis loop area represents energy lost per unit volume per cycle as heat — wider loop means greater energy loss (harder magnet)",
      "Retentivity is the residual magnetism at H = 0; coercivity is the reverse field needed to demagnetise — high values suit permanent magnets",
      "Earth's magnetism: geographic north is near the magnetic south pole; angle of declination is between geographic and magnetic meridians; angle of dip is between B and horizontal"
    ],
    "tips": [
      "In ISC, the approximate formulas (r >> l) are almost always used — state the approximation before applying them",
      "For dipole-in-field problems, potential energy U = −MB cos θ; minimum energy (stable) at θ = 0, maximum at θ = 180°",
      "Distinguish between B (magnetic flux density) and H (magnetising field); B = μ₀(H + M) in matter",
      "Curie temperature problems: above Tₒ ferromagnetics lose their special properties and behave as paramagnetics — a common conceptual question"
    ],
    "bestPractices": [
      "Clearly state whether the point is on the axial or equatorial line before choosing the formula",
      "Draw the magnet with its dipole moment M (pointing from S to N) before writing any torque or field expression",
      "Describe hysteresis curves in terms of physical properties (retentivity, coercivity, area) rather than just drawing the graph"
    ]
  },
  {
    "chapter": "Electromagnetic Induction",
    "formulae": [
      "Faraday's law: ε = −dΦ/dt; for N turns: ε = −N·dΦ/dt (V); magnetic flux Φ = BA cos θ (Wb = V s)",
      "Motional EMF: ε = Bvl sin θ; for a rod moving perpendicular to field: ε = Bvl (V)",
      "Self-inductance: Φ = LI; ε = −L(dI/dt); energy stored U = ½LI² (J); for solenoid: L = μ₀n²Al",
      "Mutual inductance: Φ₁₂ = MI₂; ε₁ = −M(dI₂/dt); M = k√(L₁L₂) where k ≤ 1 is coupling coefficient",
      "Growth of current in LR circuit: I = (ε/R)(1 − e^(−t/τ)) where τ = L/R (s); decay: I = I₀e^(−t/τ)",
      "Lenz's law: induced current always opposes the change in flux that causes it (consequence of energy conservation)"
    ],
    "logic": [
      "Lenz's law is a consequence of energy conservation — if the induced current aided the flux change, energy would be created from nothing",
      "Flux can change due to change in B, change in area, or change in the angle θ between B and the area vector",
      "Self-inductance opposes any change in current; it acts as electrical inertia — higher L means slower current rise/fall",
      "Mutual inductance depends on the geometry and the coupling between coils; it is symmetric (M₁₂ = M₂₁)",
      "Eddy currents are induced in bulk conductors by changing flux; they cause heating (useful in induction stoves) and braking (useful in speedometers)"
    ],
    "tips": [
      "For motional EMF, use Fleming's right-hand rule (generator rule) to find the direction of the induced EMF — generator/dynamo works on this principle",
      "In LR circuit problems, τ = L/R is the time constant; at t = τ, the current has reached about 63% of its final value",
      "Lenz's law direction: determine the change in flux (increasing or decreasing), then the induced current must create a field to oppose that change",
      "Energy stored in an inductor U = ½LI² is analogous to ½mv² for a moving mass — L behaves like mass"
    ],
    "bestPractices": [
      "State Faraday's and Lenz's laws before deriving the direction and magnitude of the induced EMF",
      "Draw the circuit diagram for LR problems, clearly marking L, R, and the switch; show the exponential variation with time",
      "For transformer problems use: V₁/V₂ = N₁/N₂ = I₂/I₁ and state the assumption of ideal transformer (no flux leakage, no resistance loss)"
    ]
  },
  {
    "chapter": "Alternating Current",
    "formulae": [
      "AC voltage: v = V₀ sin(ωt); RMS values: V_rms = V₀/√2 ≈ 0.707V₀; I_rms = I₀/√2",
      "Reactance: inductive X_L = ωL = 2πfL (Ω); capacitive X_C = 1/(ωC) = 1/(2πfC) (Ω); for DC: X_L = 0, X_C = ∞",
      "Impedance of LCR series: Z = √(R² + (X_L − X_C)²); current I_rms = V_rms/Z; phase angle φ: tan φ = (X_L−X_C)/R",
      "Resonance: X_L = X_C → ω₀ = 1/√(LC) (rad s⁻¹); at resonance Z = R (minimum), I is maximum; Q-factor = ω₀L/R = 1/(ω₀CR)",
      "Power: P = V_rms·I_rms·cos φ (W); power factor cos φ = R/Z; for pure L or C: cos φ = 0 (no power consumed)",
      "Transformer: V₁/V₂ = N₁/N₂; I₁/I₂ = N₂/N₁; step-up: N₂ > N₁; step-down: N₂ < N₁"
    ],
    "logic": [
      "In a pure resistor V and I are in phase; in a pure inductor V leads I by 90°; in a pure capacitor I leads V by 90° (ELI the ICE man)",
      "Impedance is the AC equivalent of resistance; it is a frequency-dependent quantity unlike DC resistance",
      "At resonance in a series LCR circuit, the impedance is minimum (= R) and current is maximum; voltage across L and C are equal and opposite but can exceed the supply voltage",
      "Q-factor measures the sharpness of resonance: a higher Q means a narrower bandwidth and larger voltage amplification across L or C",
      "Energy alternates between the inductor (magnetic energy ½LI²) and capacitor (electric energy ½CV²) in an LC circuit — analogous to kinetic and potential energy in a pendulum"
    ],
    "tips": [
      "In phasor diagrams, draw V_R along the reference direction, V_L upward, V_C downward; resultant is V_supply — use Pythagoras to find Z",
      "For resonance problems, always compute ω₀ = 1/√(LC) first, then find Z = R and hence I = V/R",
      "Power factor cos φ = 0 for pure reactive circuits — they consume no average power; power factor = 1 for pure resistive circuits",
      "Distinguish peak value V₀ from RMS value V_rms = V₀/√2 — exam questions often mix them deliberately"
    ],
    "bestPractices": [
      "Draw the phasor diagram for every LCR problem — it shows the phase relationships and helps write Z correctly",
      "State whether the circuit is inductive (X_L > X_C), capacitive (X_C > X_L), or resistive (at resonance) based on the phase angle",
      "Use V_rms and I_rms consistently throughout a calculation; avoid mixing peak and RMS values"
    ]
  },
  {
    "chapter": "Electromagnetic Waves",
    "formulae": [
      "Speed of EM waves in vacuum: c = 1/√(μ₀ε₀) ≈ 3×10⁸ m s⁻¹; in a medium: v = 1/√(με) = c/n",
      "Relation between E and B in an EM wave: E₀/B₀ = c (E and B are perpendicular to each other and to the direction of propagation)",
      "Wavelength–frequency: c = fλ; energy of photon: E = hf = hc/λ (J)",
      "EM spectrum (increasing wavelength): γ-rays, X-rays, UV, Visible, IR, Microwaves, Radio waves",
      "Intensity of EM wave: I = ½ε₀E₀²c = ½cB₀²/μ₀ = cε₀E₀²/2 (W m⁻²)",
      "Displacement current: I_d = ε₀·dΦ_E/dt (A); Ampere's law with Maxwell's correction: ∮B·dl = μ₀(I + I_d)"
    ],
    "logic": [
      "EM waves are transverse; E and B oscillate in mutually perpendicular planes, both perpendicular to the direction of propagation",
      "Maxwell's displacement current ensures continuity of current in a circuit with a capacitor being charged — the changing electric field between plates acts like a current",
      "EM waves carry energy and momentum; radiation pressure = I/c (for a perfect absorber) or 2I/c (for a perfect reflector)",
      "No medium is required for propagation; the energy is shared equally between the oscillating E and B fields",
      "The electromagnetic spectrum spans an enormous range of frequencies; all types travel at c in vacuum but are produced and detected differently"
    ],
    "tips": [
      "In ISC, questions on EM waves often test: (a) ordering the spectrum, (b) uses of each type, (c) the displacement current concept — prepare all three",
      "Displacement current is not a real current of charges; it arises from a changing electric flux and produces a magnetic field exactly as a real current does",
      "Radio waves have the longest wavelengths; γ-rays have the shortest — energy increases with frequency (E = hf)",
      "Show that E₀/B₀ = c by using wave equations — this derivation may be asked in ISC"
    ],
    "bestPractices": [
      "Draw an EM wave with E, B, and propagation direction as three mutually perpendicular arrows — always include this sketch",
      "State all properties of EM waves (transverse, constant c, no medium needed, carry energy and momentum) in list form for a 'properties' question",
      "For Maxwell's equations questions, write all four equations and identify which one accounts for the displacement current"
    ]
  },
  {
    "chapter": "Ray Optics",
    "formulae": [
      "Mirror formula: 1/v + 1/u = 1/f = 2/R; sign convention: distances measured from pole; real is negative (for mirror)",
      "Magnification (mirror): m = −v/u; m > 0 (virtual, erect); m < 0 (real, inverted)",
      "Snell's law: n₁ sin θ₁ = n₂ sin θ₂; refractive index n = c/v; for critical angle: sin θ_c = n₂/n₁ (n₁ > n₂)",
      "Lens formula: 1/v − 1/u = 1/f; lensmaker's equation: 1/f = (n−1)[1/R₁ − 1/R₂]; magnification m = v/u",
      "Power of lens: P = 1/f (in metres) in dioptres (D); lenses in contact: P_net = P₁ + P₂; f_net: 1/f_net = 1/f₁ + 1/f₂",
      "Prism: n = sin((A+δₘ)/2)/sin(A/2) at minimum deviation; deviation δ = (n−1)A for thin prism"
    ],
    "logic": [
      "Total internal reflection occurs when light goes from a denser to a rarer medium at an angle greater than the critical angle; used in optical fibres and diamonds",
      "Real image: formed by actual intersection of reflected/refracted rays; can be projected on a screen. Virtual image: rays appear to diverge from the image; cannot be projected",
      "For a concave mirror: beyond C gives diminished real inverted image; between F and C gives enlarged real inverted; inside F gives enlarged virtual erect",
      "Convex lens is converging (positive f); concave lens is diverging (negative f); the power is the reciprocal of focal length in metres",
      "Optical instruments: angular magnification M = β/α (angle with instrument / angle without); for simple microscope M = 1 + D/f; for telescope M = f_o/f_e"
    ],
    "tips": [
      "Always state the sign convention at the start of a mirror/lens problem; ISC follows the New Cartesian convention (incident light from left, all distances from pole)",
      "For lenses, use the standard formula 1/v − 1/u = 1/f (not 1/v + 1/u); verify the sign of v to decide real or virtual image",
      "In prism-dispersion questions, the angle of minimum deviation δₘ gives the standard relation for n — quote this formula before calculating",
      "Human eye accommodation: near point ~25 cm; far point = ∞ (normal); myopia: far point < ∞ (corrected by concave lens); hypermetropia: near point > 25 cm (corrected by convex lens)"
    ],
    "bestPractices": [
      "Draw a ray diagram (at least 2 rays) for every mirror and lens problem — the diagram carries marks and shows understanding",
      "Write mirror/lens formula, substitute values with signs, and calculate v step by step",
      "For compound systems (eye + lens), state the object and image distances for each optical element separately"
    ]
  },
  {
    "chapter": "Wave Optics",
    "formulae": [
      "Path difference for constructive interference: Δ = nλ (n = 0, ±1, ±2, …); for destructive: Δ = (2n−1)λ/2",
      "YDSE fringe width: β = λD/d; position of nth bright fringe: y_n = nλD/d; condition: d << D",
      "Intensity in interference: I = I₁ + I₂ + 2√(I₁I₂)cos δ; for equal intensities: I = 4I₀cos²(δ/2)",
      "Single-slit diffraction — minima: a sin θ = nλ (n ≠ 0); central maximum half-width: θ ≈ λ/a",
      "Brewster's law: tan θ_B = n; at Brewster angle reflected light is completely plane-polarised",
      "Resolving power of telescope: θ_min = 1.22λ/D (Rayleigh criterion); of microscope: d_min = 1.22λ/(2 sin θ)"
    ],
    "logic": [
      "Coherent sources must have the same frequency and a constant (or zero) phase difference — necessary for sustained interference",
      "Superposition principle: when two waves overlap, the resultant displacement is the algebraic sum at every point",
      "In diffraction, the central maximum is twice as wide as the secondary maxima; increasing a (slit width) narrows the diffraction pattern",
      "Polarisation proves the transverse nature of light — longitudinal waves cannot be polarised; unpolarised light has random electric field directions",
      "Malus's law: I = I₀ cos²θ where θ is the angle between the polariser and analyser transmission axes"
    ],
    "tips": [
      "In YDSE problems, verify whether path difference or phase difference is given; path diff Δ = (λ/2π) × phase diff",
      "Distinguish interference (two coherent sources, using path difference) from diffraction (single aperture, related to aperture width a)",
      "For Brewster's angle, the reflected and refracted rays are perpendicular: θ_B + θ_r = 90°; use this to verify n = tan θ_B",
      "Fringe width β = λD/d — increasing D or decreasing d increases fringe width; changing λ shifts the entire pattern"
    ],
    "bestPractices": [
      "Draw the YDSE setup with the two slits, the screen, and label d (slit separation), D (slit-to-screen distance) before writing any formula",
      "State whether the question asks for the condition of a bright or dark fringe, then write the corresponding path-difference formula",
      "Explain the concept (coherence, superposition, Brewster's law) briefly before quoting the formula — this demonstrates understanding to the examiner"
    ]
  },
  {
    "chapter": "Dual Nature of Radiation and Matter",
    "formulae": [
      "Planck's equation: E = hf = hc/λ; h = 6.626×10⁻³⁴ J s",
      "Photoelectric effect: KE_max = hf − φ = eV₀ (eV); threshold frequency f₀ = φ/h; stopping potential V₀ = hf/e − φ/e",
      "Einstein's photoelectric equation: hf = φ + ½mv²_max (energy conservation for photoemission)",
      "de Broglie wavelength: λ = h/p = h/(mv); for an electron accelerated through V: λ = h/√(2meV) = 1.227/√V nm",
      "Davisson-Germer experiment confirmed wave nature of electrons; observed diffraction pattern matches the de Broglie wavelength",
      "Momentum of a photon: p = h/λ = E/c; photon has no rest mass"
    ],
    "logic": [
      "Photoelectric effect cannot be explained by wave theory — the effect is instantaneous and depends on frequency, not intensity; Einstein's photon model explains this",
      "Stopping potential V₀ depends on the frequency of incident light (not intensity); increasing intensity increases the photoelectric current, not V₀",
      "The work function φ is the minimum energy needed to liberate an electron from the metal surface; it is a material property",
      "Wave-particle duality: light behaves as a wave in interference/diffraction and as a particle (photon) in the photoelectric effect; electrons behave as particles in usual motion and as waves in diffraction",
      "Heisenberg's uncertainty principle: Δx·Δp ≥ h/(4π); it is a fundamental quantum limit, not an instrumental limitation"
    ],
    "tips": [
      "In ISC, photoelectric effect questions often ask to calculate V₀, threshold frequency, or maximum kinetic energy — identify which is asked before choosing the formula",
      "de Broglie wavelength: for a particle accelerated through potential V, use λ = h/√(2meV) — note the √V in the denominator",
      "Work function φ can be given in eV or joules; convert to joules (1 eV = 1.6×10⁻¹⁹ J) before substituting in Einstein's equation",
      "Graph of KE_max vs frequency is a straight line with slope h and x-intercept f₀; y-intercept is −φ"
    ],
    "bestPractices": [
      "State Einstein's photoelectric equation (hf = φ + KE_max) before substituting values — it carries method marks",
      "Show unit conversions (eV to J, nm to m) as explicit steps to avoid arithmetic errors",
      "Relate the experimental observations (effect of frequency, intensity, material) to theory when answering descriptive questions"
    ]
  },
  {
    "chapter": "Atoms",
    "formulae": [
      "Bohr's postulates: electrons orbit in stationary states with angular momentum L = nh/(2π) = nℏ; energy is emitted/absorbed only on transitions",
      "Orbital radius: rₙ = n²a₀/Z where a₀ = 0.529 Å (Bohr radius); energy Eₙ = −13.6Z²/n² eV",
      "Frequency of emitted photon: hf = Eₙ₂ − Eₙ₁; wavenumber: 1/λ = R_H·Z²(1/n₁² − 1/n₂²) with R_H = 1.097×10⁷ m⁻¹",
      "Hydrogen spectrum series: Lyman (UV, n₁=1); Balmer (Visible, n₁=2); Paschen (IR, n₁=3); Brackett (n₁=4); Pfund (n₁=5)",
      "Kinetic energy of electron in nth orbit: KE = 13.6Z²/n² eV; potential energy PE = −27.2Z²/n² eV; total E = −13.6Z²/n² eV",
      "Ionisation energy from nth level = 13.6Z²/n² eV (energy needed to remove electron to infinity)"
    ],
    "logic": [
      "Bohr's model works only for hydrogen-like species (single electron); it fails for multi-electron atoms because it ignores electron–electron repulsion",
      "Ground state of hydrogen: n = 1, E₁ = −13.6 eV; excited states have higher (less negative) energies; zero energy corresponds to ionisation",
      "Emission spectrum arises when electrons fall to lower energy levels (releasing photons); absorption spectrum when electrons jump to higher levels",
      "The negative energy of Bohr orbits indicates a bound state; the electron needs energy equal to |Eₙ| to be ionised",
      "Rutherford's nuclear model established the small, dense, positively charged nucleus; it failed to explain atomic stability and discrete spectra — Bohr's model addressed these"
    ],
    "tips": [
      "In ISC, spectral line questions ask to identify the series: check the value of n₁ in Rydberg formula — Balmer series is the most common (n₁ = 2, visible)",
      "For the highest wavelength (lowest energy) in a series, use the smallest jump: n = n₁+1 to n = n₁",
      "Orbital radius scales as n²: r₂ = 4a₀, r₃ = 9a₀ for hydrogen; energy scales as 1/n²: E₂ = −3.4 eV, E₃ = −1.51 eV",
      "Total energy is always negative (bound state) = −KE; this is a check on your sign conventions"
    ],
    "bestPractices": [
      "Draw an energy-level diagram for hydrogen with key levels (n=1,2,3,4,∞) marked before answering spectral questions",
      "State Rydberg's formula clearly, identify n₁ (lower level) and n₂ (upper level), and substitute correctly",
      "Relate the concept to experimental evidence (Rutherford scattering for nuclear model, line spectra for Bohr model) in descriptive answers"
    ]
  },
  {
    "chapter": "Nuclei",
    "formulae": [
      "Nuclear notation: ᴬ_Z X (A = mass number, Z = atomic number, N = A−Z neutrons); nuclear radius: R = R₀A^(1/3) with R₀ ≈ 1.2×10⁻¹⁵ m",
      "Mass defect: Δm = [Zmp + (A−Z)mₙ − M_nucleus]; binding energy: BE = Δm·c² = Δm × 931.5 MeV/u",
      "Binding energy per nucleon (BE/A) peaks around A = 56 (iron); fusion releases energy for A < 56; fission releases energy for A > 56",
      "Radioactive decay: N = N₀e^(−λt); activity A = λN; half-life t₁/₂ = ln 2/λ = 0.693/λ; mean life τ = 1/λ = t₁/₂/ln 2",
      "α decay: ᴬ_Z X → ᴬ⁻⁴_(Z−2)Y + ⁴_₂He; β⁻ decay: n → p + e⁻ + ν̄; γ emission: no change in A or Z",
      "Q-value of a reaction: Q = (mass of reactants − mass of products)·c² = (KE of products − KE of reactants)"
    ],
    "logic": [
      "Nuclear forces are short-range (≤ 10⁻¹⁵ m), strong, and attractive between all nucleons; they overcome the electrostatic repulsion between protons",
      "Binding energy per nucleon measures nuclear stability; a higher value means a more stable nucleus; iron-56 is the most stable",
      "Radioactive decay is a statistical process; individual atoms decay randomly, but the overall population follows an exponential law",
      "In α decay, the daughter nucleus moves in the opposite direction to the α particle (conservation of momentum); in β decay, a neutrino is also emitted",
      "Fission of heavy nuclei (like U-235) releases energy because the products (medium-A nuclei) have higher BE/A; fusion of light nuclei (like H) also releases energy for the same reason"
    ],
    "tips": [
      "In ISC, calculate the number of remaining nuclei after n half-lives: N = N₀/2ⁿ — a quick alternative to the exponential formula",
      "Mass defect must be in atomic mass units (u) before multiplying by 931.5 MeV/u to get binding energy; keep units consistent",
      "For radioactive decay laws, activity A = λN₀e^(−λt) = A₀e^(−λt); do not confuse activity A with mass number A",
      "Alpha and beta particles are deflected by electric and magnetic fields; gamma rays are not (they are uncharged photons)"
    ],
    "bestPractices": [
      "Write the balanced nuclear equation (conserving A and Z) before calculating any Q-value or energy",
      "Show the calculation of λ from t₁/₂ as an explicit step before computing N or A at time t",
      "State clearly whether energy is released (exothermic, Q > 0) or absorbed (endothermic, Q < 0) for each nuclear reaction"
    ]
  },
  {
    "chapter": "Semiconductor Electronics",
    "formulae": [
      "Intrinsic semiconductor: nₑ = nₕ = nᵢ; conductivity σ = nᵢe(μₑ + μₕ); increases with temperature (unlike metals)",
      "Diode: forward biased — low resistance, V_knee ≈ 0.7 V (Si), 0.3 V (Ge); reverse biased — high resistance until breakdown",
      "Half-wave rectifier: V_dc = V₀/π; full-wave (bridge) rectifier: V_dc = 2V₀/π; ripple reduced by capacitor filter",
      "Zener diode: operates in reverse breakdown at V_Z; used as voltage regulator; connects in parallel with load",
      "BJT (NPN): I_E = I_B + I_C; current gain α = I_C/I_E (< 1); β = I_C/I_B (20–500); relation: β = α/(1−α)",
      "Logic gates: AND, OR, NOT, NAND, NOR, XOR; NAND and NOR are universal gates (any gate can be made from them alone)"
    ],
    "logic": [
      "In a p-type semiconductor, holes are majority carriers (added by trivalent doping) and electrons are minority carriers; in n-type, electrons are majority and holes are minority",
      "A p-n junction in forward bias narrows the depletion region, allowing majority carrier flow; in reverse bias, the depletion region widens, blocking current (only tiny reverse saturation current flows)",
      "In a transistor amplifier (CE configuration), input is at the base; a small base current controls a large collector current — this is the amplification principle",
      "The transistor as a switch: in saturation (fully ON) V_CE ≈ 0; in cut-off (fully OFF) I_C ≈ 0; ideal switch has no power loss",
      "NAND and NOR are universal gates because NOT, AND, and OR can each be realised using only NAND gates (or only NOR gates)"
    ],
    "tips": [
      "In ISC, truth tables for all standard gates must be memorised; NAND and NOR questions often ask to construct AND, OR, NOT from them",
      "For rectifier problems, distinguish half-wave (one diode, one cycle used) and full-wave bridge (four diodes, both cycles used); state the formula for each",
      "Zener diode voltage regulator: the series resistor limits current; output voltage = V_Z as long as the input is higher — do not omit the current analysis",
      "Transistor β vs α: use β = α/(1−α) and α = β/(1+β) — these conversions appear in many numerical problems"
    ],
    "bestPractices": [
      "Draw the circuit diagram for every semiconductor device question (diode, transistor, op-amp) with correct polarities of the supply",
      "Write the truth table row by row for logic gate problems — do not shortcut if more than 2 inputs",
      "Define majority and minority carriers explicitly when describing a doped semiconductor before discussing its electrical behaviour"
    ]
  },
  {
    "chapter": "Communication Systems",
    "formulae": [
      "Modulation index: for AM μ = A_m/A_c (0 ≤ μ ≤ 1); for FM β = A_m/f_m (deviation ratio)",
      "AM bandwidth: BW = 2f_m; FM bandwidth (Carson's rule): BW = 2(β + 1)f_m = 2(Δf + f_m)",
      "Range of communication (line-of-sight): d_T = √(2Rh_T) where R = 6400 km, h_T = antenna height; total range = √(2Rh_T) + √(2Rh_R)",
      "Critical frequency for sky-wave: f_c = 9√(N_max) where N_max is maximum electron density (m⁻³)",
      "Signal-to-noise ratio (SNR): SNR = P_signal/P_noise (dimensionless or in dB: SNR_dB = 10 log₁₀(SNR))",
      "Channel capacity (Shannon): C = B log₂(1 + SNR) (bps) where B = bandwidth of channel"
    ],
    "logic": [
      "Modulation shifts the signal to a higher carrier frequency suitable for transmission; it also allows multiple signals to share the medium (multiplexing) without interfering",
      "In AM, the carrier amplitude varies with the message signal; sidebands at f_c ± f_m carry the information; the carrier itself carries no information",
      "Ground waves follow the Earth's curvature and are used for AM radio (up to a few MHz); sky waves bounce off the ionosphere and are used for short-wave radio",
      "Space (line-of-sight) waves are used for TV, FM, and satellite communication; the range depends on antenna height",
      "Digital communication is less susceptible to noise than analogue because the signal is regenerated (not amplified with noise) at each repeater"
    ],
    "tips": [
      "In ISC, questions often ask to calculate the range of a TV tower: use d = √(2Rh); if both transmitter and receiver heights are given, add both individual ranges",
      "Distinguish between AM bandwidth (2f_m, narrow) and FM bandwidth (wider, proportional to deviation ratio) — they have very different spectral widths",
      "Critical frequency f_c = 9√N_max: N_max must be in m⁻³; compute √N_max first to avoid errors with large numbers",
      "Modulation index μ > 1 causes over-modulation (distortion in AM) — always check μ ≤ 1 for valid AM"
    ],
    "bestPractices": [
      "Draw a block diagram of the communication system (transmitter, channel, receiver) before answering descriptive questions about any component",
      "Show the formula for the quantity asked (range, bandwidth, modulation index) before substituting numbers",
      "Relate the concept to a real application (AM/FM radio, TV, satellite) when asked to justify the choice of a propagation method"
    ]
  }
];
