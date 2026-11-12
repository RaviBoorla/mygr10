// ─── Grade XI ICSE (ISC) Physics revision notes ───────────────────────────
// screen-notes.js reads REVISION['XI ICSE Physics'] for Grade XI with the ICSE (ISC) syllabus selected.

REVISION['XI ICSE Physics'] = [
  {
    "chapter": "Units, Dimensions and Measurement",
    "formulae": [
      "SI base units: m, kg, s, A, K, mol, cd",
      "Vernier LC = 1 MSD − 1 VSD; screw gauge LC = pitch ÷ number of circular divisions",
      "Corrected reading = observed reading − (zero error, with sign)",
      "Z = A ± B ⇒ ΔZ = ΔA + ΔB; Z = AᵖBᵠ/Cʳ ⇒ ΔZ/Z = pΔA/A + qΔB/B + rΔC/C",
      "Mean absolute error Δā = (Σ|aᵢ − ā|)/n; relative error = Δā/ā; percentage error = (Δā/ā) × 100",
      "Common dimensions: force [M L T⁻²], energy [M L² T⁻²], pressure [M L⁻¹ T⁻²], G [M⁻¹ L³ T⁻²], h [M L² T⁻¹]"
    ],
    "logic": [
      "Every physical quantity is a number × unit; derived units are built from the seven base units",
      "Principle of homogeneity: only terms with identical dimensions can be added, subtracted or equated",
      "Dimensional analysis checks equations, converts units and derives relations up to a dimensionless constant",
      "Systematic errors (zero error, instrument fault) shift all readings one way; random errors scatter and are reduced by averaging",
      "Significant figures express the precision of a measurement; calculated results cannot be more precise than the data"
    ],
    "tips": [
      "Leading zeros are never significant; trailing zeros after a decimal point are",
      "For addition/subtraction keep least decimal places; for multiplication/division keep least significant figures",
      "Errors always ADD in propagation — even for a difference or a quotient",
      "Sign of zero error matters: positive zero error is subtracted, negative zero error is added"
    ],
    "bestPractices": [
      "Write dimensional formulae in square brackets and compare powers of M, L, T term by term",
      "Round only the final answer, not intermediate steps",
      "State the final measurement as (value ± absolute error) with matching decimal places"
    ]
  },
  {
    "chapter": "Motion in a Straight Line",
    "formulae": [
      "v = u + at;  s = ut + ½at²;  v² = u² + 2as;  s = (u + v)t/2",
      "Distance in nth second: sₙ = u + (a/2)(2n − 1)",
      "Free fall (up = +): v = u − gt, h = ut − ½gt²; max height H = u²/2g; time of flight 2u/g",
      "Average speed for equal distances: 2v₁v₂/(v₁ + v₂); for equal times: (v₁ + v₂)/2",
      "Relative velocity in 1D: v_AB = v_A − v_B",
      "v = dx/dt, a = dv/dt = v dv/dx"
    ],
    "logic": [
      "Slope of x–t = velocity; slope of v–t = acceleration; area under v–t = displacement; area under a–t = change in velocity",
      "A straight-line v–t graph means constant acceleration; a curved x–t graph means changing velocity",
      "Retardation is just acceleration opposite to velocity — use a sign convention consistently",
      "In free fall all bodies have the same acceleration g regardless of mass (no air resistance)",
      "Velocity is zero at the top of vertical flight but acceleration is still g downward"
    ],
    "tips": [
      "Convert km h⁻¹ to m s⁻¹ by × 5/18 before using SI equations",
      "Distances in successive equal seconds from rest are 1 : 3 : 5 …; total distances 1 : 4 : 9 …",
      "Average speed is NOT the average of speeds unless times are equal",
      "For a body thrown up from a height, solve s = ut − ½gt² with s negative below the launch point"
    ],
    "bestPractices": [
      "Draw a sketch with origin and positive direction before writing equations",
      "List knowns (u, v, a, s, t) and pick the equation that omits the unwanted unknown",
      "Reject unphysical roots of quadratics explicitly and say why"
    ]
  },
  {
    "chapter": "Vectors and Motion in a Plane",
    "formulae": [
      "R = √(P² + Q² + 2PQ cos θ); tan α = Q sin θ/(P + Q cos θ)",
      "A·B = AB cos θ = AₓBₓ + A_yB_y + A_zB_z;  |A × B| = AB sin θ",
      "Projectile: T = 2u sin θ/g, H = u² sin²θ/2g, R = u² sin 2θ/g, R_max = u²/g at 45°",
      "Trajectory: y = x tan θ − gx²/(2u² cos²θ)",
      "Horizontal projection from height h: t = √(2h/g), x = u√(2h/g)",
      "Circular motion: v = ωr, a_c = v²/r = ω²r, ω = 2πf = 2π/T"
    ],
    "logic": [
      "Vectors obey the parallelogram/triangle law; a vector can be resolved into perpendicular components",
      "Horizontal and vertical motions of a projectile are independent; only the vertical one is accelerated",
      "Complementary angles (θ and 90° − θ) give the same range for the same speed",
      "Uniform circular motion is accelerated motion — the direction of velocity keeps changing",
      "Relative velocity v_AB = v_A − v_B is found by vector subtraction (add −v_B)"
    ],
    "tips": [
      "î × ĵ = k̂, ĵ × k̂ = î, k̂ × î = ĵ; reverse order gives a minus sign",
      "At the highest point, velocity is u cos θ (not zero) and acceleration is g",
      "For a river crossing in shortest time, head perpendicular; for shortest path, head upstream at sin θ = v_r/v_s",
      "Umbrella/rain problems: always use velocity of rain relative to the person"
    ],
    "bestPractices": [
      "Draw and label a vector diagram before calculating",
      "Resolve into x and y components and treat each axis separately",
      "Give direction (angle with a reference) as well as magnitude for vector answers"
    ]
  },
  {
    "chapter": "Laws of Motion",
    "formulae": [
      "F = dp/dt = ma (constant m); impulse J = FΔt = Δp",
      "Momentum conservation: m₁u₁ + m₂u₂ = m₁v₁ + m₂v₂ (no external force)",
      "Static friction fₛ ≤ μₛN; kinetic friction fₖ = μₖN; μₛ = tan(angle of repose)",
      "Lift: apparent weight = m(g + a) going up with acceleration, m(g − a) going down",
      "Atwood machine: a = (m₂ − m₁)g/(m₁ + m₂), T = 2m₁m₂g/(m₁ + m₂)",
      "Banking: v₀ = √(rg tan θ); v_max = √[rg(μ + tan θ)/(1 − μ tan θ)]; flat curve v_max = √(μrg)"
    ],
    "logic": [
      "Inertia (first law) is resistance to change of state of motion; mass measures inertia",
      "Third-law pairs act on different bodies — draw a separate free-body diagram for each body",
      "Static friction is self-adjusting up to the limiting value μₛN",
      "Centripetal force is not a new force; it is supplied by tension, friction, gravity or normal reaction",
      "For concurrent forces in equilibrium, ΣFₓ = 0 and ΣF_y = 0 (or a closed polygon)"
    ],
    "tips": [
      "Rebound problems: Δv = v + u in magnitude because the direction reverses",
      "Pulling at an angle reduces normal reaction and friction; pushing increases it",
      "In vertical circles minimum speed at the top is √(gr), at the bottom √(5gr)",
      "On an incline: a = g(sin θ − μ cos θ) sliding down; g(sin θ + μ cos θ) retardation going up"
    ],
    "bestPractices": [
      "Start every dynamics problem with a labelled free-body diagram",
      "Choose axes along and perpendicular to the motion (or incline)",
      "State the law used (second law, conservation of momentum) before substituting"
    ]
  },
  {
    "chapter": "Work, Energy and Power",
    "formulae": [
      "W = F·s = Fs cos θ; variable force W = ∫F dx (area under F–x graph)",
      "K = ½mv² = p²/2m; gravitational PE = mgh; spring PE = ½kx²",
      "Work–energy theorem: W_net = ΔK",
      "P = dW/dt = F·v; 1 kWh = 3.6 × 10⁶ J; 1 hp = 746 W",
      "Elastic 1D: v₁ = [(m₁ − m₂)u₁ + 2m₂u₂]/(m₁ + m₂), v₂ = [(m₂ − m₁)u₂ + 2m₁u₁]/(m₁ + m₂)",
      "Coefficient of restitution e = (v₂ − v₁)/(u₁ − u₂); rebound e = √(h₂/h₁)"
    ],
    "logic": [
      "Work can be positive, negative or zero depending on the angle between force and displacement",
      "For conservative forces F = −dU/dx and mechanical energy (K + U) is conserved",
      "Momentum is conserved in all collisions (isolated system); KE only in elastic ones",
      "In 2D collisions, conserve momentum separately along x and y",
      "Efficiency = useful output power / input power"
    ],
    "tips": [
      "Rebound problems: change in velocity = u + v when direction reverses",
      "Doubling speed quadruples KE; doubling momentum also quadruples KE",
      "Equal-mass elastic head-on collision: velocities are exchanged",
      "Ballistic pendulum: use momentum for the impact, energy for the swing — never energy across the impact"
    ],
    "bestPractices": [
      "State which conservation law applies and why (isolated system, conservative forces)",
      "Write KE before and after explicitly when asked for energy loss",
      "Keep sign of work (e.g. friction negative) in work–energy calculations"
    ]
  },
  {
    "chapter": "System of Particles and Rotational Motion",
    "formulae": [
      "r_cm = Σmᵢrᵢ/Σmᵢ; v_cm = Σmᵢvᵢ/M; F_ext = M a_cm",
      "τ = r × F = rF sin θ; L = r × p = Iω; τ = dL/dt = Iα",
      "I = Σmr² = Mk²; parallel axis I = I_cm + Md²; perpendicular axis I_z = Iₓ + I_y",
      "Standard MI: ring MR², disc MR²/2, rod (centre) ML²/12, rod (end) ML²/3, solid sphere 2MR²/5, hollow sphere 2MR²/3",
      "Rotational KE = ½Iω²; rolling KE = ½Mv²(1 + k²/R²)",
      "Rolling down incline: a = g sin θ/(1 + k²/R²); v = √[2gh/(1 + k²/R²)]"
    ],
    "logic": [
      "Internal forces cannot change the motion of the centre of mass",
      "Moment of inertia depends on mass distribution and on the chosen axis, not just on mass",
      "If external torque is zero, Iω is constant: reducing I increases ω (skaters, divers, collapsing stars)",
      "Rolling without slipping: v_cm = ωR; contact point is momentarily at rest, top point moves at 2v_cm",
      "Static friction enables rolling but does no work on a body rolling without slipping"
    ],
    "tips": [
      "Perpendicular axis theorem applies only to plane laminae",
      "Parallel axis theorem must start from the axis through the centre of mass",
      "In rolling races the object with smaller k²/R² wins; mass and radius do not matter",
      "Angular momentum is conserved; rotational KE generally is not when I changes"
    ],
    "bestPractices": [
      "Mark the axis clearly before quoting a moment of inertia",
      "Write rotational and translational equations side by side and link them with a = αR",
      "Use vector cross products in component form for torque and angular momentum"
    ]
  },
  {
    "chapter": "Gravitation",
    "formulae": [
      "F = Gm₁m₂/r², G = 6.67 × 10⁻¹¹ N m² kg⁻²; g = GM/R²",
      "Height: g_h = g R²/(R + h)² ≈ g(1 − 2h/R); depth: g_d = g(1 − d/R); latitude: g' = g − ω²R cos²λ",
      "Potential V = −GM/r; potential energy U = −GMm/r",
      "Escape speed vₑ = √(2GM/R) = √(2gR) ≈ 11.2 km s⁻¹",
      "Orbital speed v₀ = √(GM/r); near surface √(gR) ≈ 7.9 km s⁻¹; T = 2π√(r³/GM)",
      "Satellite energies: K = GMm/2r, U = −GMm/r, E = −GMm/2r"
    ],
    "logic": [
      "Gravity is a central, conservative, universal force — always attractive",
      "Kepler's second law follows from angular momentum conservation under a central force",
      "g decreases both above and below the surface; it is maximum at the surface",
      "Escape speed is independent of the mass of the body and of the direction of projection",
      "Weightlessness in orbit is due to free fall, not to absence of gravity"
    ],
    "tips": [
      "Use the exact (R + h)² formula unless h ≪ R is stated",
      "Orbital speed does not depend on satellite mass; vₑ = √2 × v₀ (near surface)",
      "Height of a geostationary satellite ≈ 36 000 km — orbital radius ≈ 42 000 km",
      "Total energy of a bound orbit is negative; work needed to raise an orbit = ΔE"
    ],
    "bestPractices": [
      "Start from F_gravity = F_centripetal for any orbit problem",
      "Replace GM by gR² to work with familiar data",
      "Express ratio answers (g, T, v) using proportionality before substituting numbers"
    ]
  },
  {
    "chapter": "Mechanical Properties of Solids",
    "formulae": [
      "Stress σ = F/A (Pa); longitudinal strain = ΔL/L; volume strain = ΔV/V; shear strain = Δx/L = tan φ",
      "Young's modulus Y = FL/(AΔL); bulk modulus B = −ΔP/(ΔV/V); rigidity η = (F/A)/φ",
      "Compressibility = 1/B; Poisson's ratio σ = −(Δd/d)/(ΔL/L)",
      "Elastic energy U = ½ F ΔL; per unit volume u = ½ σ ε = σ²/2Y",
      "Thermal stress in a clamped rod = YαΔT"
    ],
    "logic": [
      "Elasticity is a body's tendency to regain shape; the restoring force is electromagnetic in origin",
      "Hooke's law holds only up to the proportional limit",
      "Beyond the yield point deformation is plastic: a permanent set remains",
      "Ductile materials have a long plastic region; brittle materials fracture soon after the elastic limit",
      "Solids have all three moduli; fluids have only a bulk modulus"
    ],
    "tips": [
      "'More elastic' means larger modulus — steel is more elastic than rubber",
      "Extension ∝ L/d² for the same material and load",
      "Convert mm² to m² carefully (1 mm² = 10⁻⁶ m²)",
      "Bulk modulus of a perfectly rigid body is infinite; compressibility zero"
    ],
    "bestPractices": [
      "Write the defining formula, then substitute in SI units",
      "Sketch and label the stress–strain curve whenever it is relevant",
      "For energy questions, use ½ × force × extension (not force × extension)"
    ]
  },
  {
    "chapter": "Mechanical Properties of Fluids",
    "formulae": [
      "P = P₀ + ρgh; Pascal: F₁/A₁ = F₂/A₂",
      "Continuity A₁v₁ = A₂v₂; Bernoulli P + ½ρv² + ρgh = constant; Torricelli v = √(2gh)",
      "Viscous force F = ηA dv/dx; Stokes F = 6πηrv; terminal velocity v_t = 2r²(ρ − σ)g/9η",
      "Reynolds number Rₑ = ρvD/η (laminar ≲ 1000, turbulent ≳ 2000)",
      "Excess pressure: drop 2T/r, bubble 4T/r, air bubble in liquid 2T/r",
      "Capillary rise h = 2T cos θ/(rρg); surface energy W = T ΔA"
    ],
    "logic": [
      "Pressure in a static fluid depends only on depth, not on vessel shape (hydrostatic paradox)",
      "Viscosity is fluid friction between layers; it opposes relative motion",
      "Faster flow ⇒ lower pressure (Bernoulli) — explains lift, atomisers, roofs blown off",
      "Surface tension makes a liquid surface behave like a stretched membrane, minimising area",
      "Angle of contact < 90° ⇒ liquid wets the surface and rises; > 90° ⇒ depressed"
    ],
    "tips": [
      "Soap bubble has two surfaces — double the area and excess pressure",
      "Terminal velocity ∝ r², so bigger raindrops fall faster",
      "Liquid viscosity falls with temperature; gas viscosity rises",
      "Coalescing drops release energy; splitting a drop needs energy"
    ],
    "bestPractices": [
      "State the assumptions (ideal fluid, streamline flow) when using Bernoulli's equation",
      "Draw a force diagram for terminal-velocity problems",
      "Keep units SI: mm → m, g cm⁻³ → kg m⁻³ (× 1000)"
    ]
  },
  {
    "chapter": "Thermal Properties of Matter",
    "formulae": [
      "C/100 = (F − 32)/180 = (K − 273.15)/100",
      "ΔL = LαΔT, ΔA = AβΔT, ΔV = VγΔT; β = 2α, γ = 3α",
      "Q = mcΔT; Q = mL (change of state); C = mc (heat capacity)",
      "Conduction H = KAΔT/L; thermal resistance R = L/KA",
      "Stefan: E = σT⁴, σ = 5.67 × 10⁻⁸ W m⁻² K⁻⁴; net loss eσA(T⁴ − T₀⁴); Wien: λ_max T = 2.9 × 10⁻³ m K",
      "Newton's law of cooling: dT/dt = −k(T − T₀)"
    ],
    "logic": [
      "Temperature measures average molecular KE; heat is energy in transit due to temperature difference",
      "In calorimetry, heat lost by hot bodies = heat gained by cold bodies (no losses)",
      "During a change of state temperature stays constant; latent heat changes potential energy of molecules",
      "Good absorbers are good emitters (Kirchhoff); a black body absorbs all radiation",
      "Water's high specific heat moderates climate and makes it a good coolant"
    ],
    "tips": [
      "Always convert to kelvin for Stefan's and Wien's laws",
      "Check whether all ice melts before setting up a mixture equation",
      "For rods in series, heat current is equal through each rod in steady state",
      "Newton's law averages: use mean temperature over the interval for exam problems"
    ],
    "bestPractices": [
      "Write heat-gained = heat-lost with each term labelled",
      "Track units: J g⁻¹ vs J kg⁻¹ for specific/latent heats",
      "Give temperatures with the correct scale symbol (°C or K)"
    ]
  },
  {
    "chapter": "Thermodynamics",
    "formulae": [
      "First law: ΔQ = ΔU + ΔW; ΔU = nC_vΔT for an ideal gas",
      "Work: isobaric PΔV; isochoric 0; isothermal nRT ln(V₂/V₁); adiabatic (P₁V₁ − P₂V₂)/(γ − 1) = nR(T₁ − T₂)/(γ − 1)",
      "Adiabatic: PV^γ = const, TV^(γ−1) = const, P^(1−γ)T^γ = const",
      "Cₚ − C_v = R; γ = Cₚ/C_v",
      "Heat engine η = W/Q₁ = 1 − Q₂/Q₁; Carnot η = 1 − T₂/T₁",
      "Refrigerator COP β = Q₂/W = T₂/(T₁ − T₂)"
    ],
    "logic": [
      "Thermal equilibrium (zeroth law) defines temperature",
      "Internal energy is a state function; heat and work depend on the path",
      "In isothermal processes ΔU = 0 so Q = W; in adiabatic processes Q = 0 so W = −ΔU",
      "Second law: no 100% efficient heat engine (Kelvin–Planck); no spontaneous cold → hot flow (Clausius)",
      "Carnot engine is the most efficient engine between two given temperatures; efficiency depends only on them"
    ],
    "tips": [
      "Use kelvin in every efficiency/COP formula",
      "Area under the P–V curve = work; area enclosed by a cycle = net work",
      "Adiabatic curves are steeper than isotherms by a factor γ",
      "Sign errors: work done ON the gas is negative in ΔQ = ΔU + ΔW"
    ],
    "bestPractices": [
      "State the type of process and the condition it imposes (ΔT = 0, ΔQ = 0, ΔV = 0, ΔP = 0)",
      "Draw a P–V diagram for cycle questions",
      "Show the formula, substitution with units, and the final answer with sign"
    ]
  },
  {
    "chapter": "Kinetic Theory of Gases",
    "formulae": [
      "Ideal gas: PV = nRT = Nk_BT; R = 8.314 J mol⁻¹ K⁻¹; k_B = R/N_A = 1.38 × 10⁻²³ J K⁻¹",
      "Pressure: P = (1/3)ρ v̄² = (2/3)E (E = KE per unit volume)",
      "v_rms = √(3RT/M) = √(3k_BT/m); average KE per molecule = (3/2)k_BT",
      "Equipartition: ½k_BT per degree of freedom; C_v = fR/2, Cₚ = (f + 2)R/2, γ = 1 + 2/f",
      "Monatomic γ = 5/3; rigid diatomic γ = 7/5; mean free path λ = 1/(√2 π d² n)"
    ],
    "logic": [
      "Pressure arises from momentum transferred by molecular collisions with the walls",
      "Temperature is a measure of average translational KE of molecules",
      "At the same temperature all ideal gases have the same average KE but lighter molecules move faster",
      "Degrees of freedom: monatomic 3, rigid diatomic 5, diatomic with vibration 7",
      "Real gases deviate from ideal behaviour at high pressure and low temperature"
    ],
    "tips": [
      "Use molar mass in kg mol⁻¹ in v_rms = √(3RT/M)",
      "Gauge pressure + atmospheric pressure = absolute pressure",
      "Doubling v_rms needs four times the absolute temperature",
      "For mixtures, C_v(mix) = Σnᵢ C_vᵢ / Σnᵢ"
    ],
    "bestPractices": [
      "Convert temperatures to kelvin first",
      "Write clear assumptions before a kinetic-theory derivation",
      "Present numerical answers with correct significant figures and SI units"
    ]
  },
  {
    "chapter": "Oscillations",
    "formulae": [
      "SHM: F = −kx, a = −ω²x; x = A sin(ωt + φ)",
      "v = ω√(A² − x²); v_max = ωA; a_max = ω²A",
      "T = 2π/ω; spring–mass T = 2π√(m/k); simple pendulum T = 2π√(l/g)",
      "Energy: K = ½mω²(A² − x²), U = ½mω²x², E = ½mω²A² = ½kA²",
      "Springs: series 1/k = 1/k₁ + 1/k₂; parallel k = k₁ + k₂"
    ],
    "logic": [
      "Every SHM is periodic but not every periodic motion is SHM",
      "Displacement, velocity and acceleration differ in phase by π/2 successively",
      "Energy oscillates between kinetic and potential at twice the frequency of motion",
      "Damping reduces amplitude; forcing makes the system follow the driver's frequency",
      "Resonance: natural frequency = driving frequency ⇒ maximum amplitude"
    ],
    "tips": [
      "Pendulum period is independent of mass and (for small angles) amplitude",
      "T ∝ √l and T ∝ 1/√g — use ratios for 'percentage change' questions",
      "Cutting a spring into n equal parts makes each part's constant nk",
      "Distinguish ωA (max speed) from ω²A (max acceleration)"
    ],
    "bestPractices": [
      "Prove SHM by showing restoring force ∝ −displacement",
      "Write the phase angle at t = 0 from the initial condition",
      "Use radians in all trigonometric SHM calculations"
    ]
  },
  {
    "chapter": "Waves",
    "formulae": [
      "v = fλ; y = A sin(ωt − kx); k = 2π/λ, ω = 2πf, v = ω/k",
      "String: v = √(T/μ); fₙ = (n/2L)√(T/μ)",
      "Sound: Newton v = √(P/ρ); Laplace v = √(γP/ρ); v ∝ √T; v_T ≈ v₀(1 + T/546) for T in °C (≈ 0.61 m s⁻¹ per °C)",
      "Closed pipe fₙ = (2n − 1)v/4L (odd harmonics); open pipe fₙ = nv/2L (all harmonics)",
      "Beats: f_b = |f₁ − f₂|; Doppler f' = f (v ± v_o)/(v ∓ vₛ) (upper signs: approaching)"
    ],
    "logic": [
      "A wave transports energy and momentum, not matter",
      "Superposition: resultant displacement is the algebraic sum of individual displacements",
      "Stationary waves have nodes (zero amplitude) and antinodes; they do not transfer energy",
      "Reflection from a rigid end gives phase change π; from a free end, none",
      "Speed of sound depends on medium (elasticity and density), not on frequency or pressure at constant T"
    ],
    "tips": [
      "Node-to-node = λ/2; node-to-antinode = λ/4",
      "Closed pipe: only odd harmonics; open pipe: all harmonics",
      "Waxing a fork lowers its frequency; filing raises it — use the change in beats to fix the sign",
      "In Doppler problems decide signs from 'approaching ⇒ frequency increases'"
    ],
    "bestPractices": [
      "Draw the standing-wave pattern (nodes/antinodes) before writing L in terms of λ",
      "Identify ω and k from the wave equation before computing v, f, λ",
      "Quote the speed of sound used and keep units consistent"
    ]
  }
];
