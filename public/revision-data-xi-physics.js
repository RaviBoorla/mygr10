// ─── Grade XI CBSE Physics revision notes (NCERT textbook) ───────────────────
// screen-notes.js reads REVISION['XI Physics'] when state.grade==='XI' && state.board==='CBSE'.

REVISION['XI Physics'] = [
  {
    "chapter": "Units and Measurement",
    "formulae": [
      "SI base units: metre (m), kilogram (kg), second (s), ampere (A), kelvin (K), mole (mol), candela (cd)",
      "Percentage error in a product/quotient Z = AᵖBᵠ/Cʳ: ΔZ/Z × 100 = p(ΔA/A×100) + q(ΔB/B×100) + r(ΔC/C×100)",
      "Dimensional formula check: both sides of a valid physical equation must have identical dimensions in [M], [L], [T]",
      "1 Å = 10⁻¹⁰ m; 1 light year ≈ 9.46×10¹⁵ m; 1 parsec ≈ 3.08×10¹⁶ m"
    ],
    "logic": [
      "Base quantities (7): length, mass, time, electric current, thermodynamic temperature, amount of substance, luminous intensity — all others are derived",
      "Accuracy = closeness to the true value; precision = resolution/repeatability of successive measurements — a measurement can be precise without being accurate",
      "Significant figures: all non-zero digits are significant; zeros between non-zero digits are significant; leading zeros are never significant; trailing zeros after a decimal point are significant",
      "Dimensional analysis can check consistency and derive the form of a relation up to a dimensionless constant, but cannot fix that constant or detect purely numerical/trigonometric terms",
      "Order of magnitude = the power of 10 closest to a quantity's value — used for quick estimation (Fermi problems)"
    ],
    "tips": [
      "Least count of vernier callipers = 1 main-scale division − 1 vernier-scale division; of a screw gauge = pitch ÷ number of head-scale divisions",
      "Random errors are reduced by repeating a measurement and averaging; systematic errors (zero error, instrumental) must be corrected for, not averaged away",
      "When adding/subtracting, the result's decimal places are limited by the least precise term; when multiplying/dividing, the result's significant figures are limited by the operand with the fewest",
      "Don't confuse dimensionless angle/ratio arguments (radians) with physical dimensions — trigonometric and exponential function arguments must always be dimensionless"
    ],
    "bestPractices": [
      "Always state the unit with a measured quantity — a number alone is meaningless in physics",
      "Before accepting a derived formula, check it dimensionally; a dimensionally wrong equation is certainly wrong (but a dimensionally correct one isn't necessarily fully correct)",
      "Round only the final answer, not intermediate steps, to avoid compounding rounding error"
    ]
  },
  {
    "chapter": "Motion in a Straight Line",
    "formulae": [
      "v = u + at",
      "s = ut + ½at²",
      "v² = u² + 2as",
      "sₙ = u + a(n − ½)  (distance in the nth second)",
      "Average velocity = (displacement)/(time); Average speed = (path length)/(time)"
    ],
    "logic": [
      "Position, displacement, velocity and acceleration in 1-D motion are all signed (algebraic) quantities relative to a chosen origin and positive direction",
      "Instantaneous velocity = slope of x-t graph; instantaneous acceleration = slope of v-t graph",
      "Area under v-t graph = displacement over that interval",
      "Uniform velocity ⇒ x-t graph is a straight line, v-t graph is horizontal; uniform acceleration ⇒ x-t graph is a parabola, v-t graph is a straight line",
      "Zero velocity at an instant does NOT imply zero acceleration at that instant (e.g. top of a vertical throw)"
    ],
    "tips": [
      "Always fix a sign convention (positive direction) before substituting into the kinematic equations",
      "For 'retardation' problems, treat a as negative in the direction of motion — don't just drop the sign",
      "Average speed ≥ |average velocity| always; equal only when motion never reverses direction",
      "In relative-velocity problems (e.g. bullet/train), convert every speed to the same unit and the same reference frame before combining"
    ],
    "bestPractices": [
      "Draw the x-t or v-t graph (even roughly) before solving a kinematics word problem — it prevents sign errors",
      "Check whether a question asks for speed (scalar, always ≥0) or velocity (signed) before finalising an answer",
      "In multi-stage motion (there-and-back, bounce, etc.), split the motion into stages and apply kinematics stage-by-stage"
    ]
  },
  {
    "chapter": "Motion in a Plane",
    "formulae": [
      "Projectile range: R = u²sin(2θ)/g",
      "Maximum height: H = u²sin²θ/2g",
      "Time of flight: T = 2u sinθ/g",
      "Centripetal acceleration: a_c = v²/r = ω²r",
      "Angular speed: ω = 2π/T = 2πf",
      "Triangle law/parallelogram law: resultant R = √(A² + B² + 2AB cosθ)"
    ],
    "logic": [
      "A vector has magnitude AND direction; equality of two vectors requires both to match",
      "Resolving a vector into perpendicular components (x,y) makes vector addition reduce to ordinary scalar addition component-wise",
      "In projectile motion, horizontal and vertical motions are independent: horizontal velocity is constant, vertical motion is uniformly accelerated (free fall)",
      "In uniform circular motion speed is constant but velocity (direction) continuously changes, so there IS an acceleration — always directed toward the centre",
      "Relative velocity of A w.r.t. B: v_AB = v_A − v_B (vector subtraction)"
    ],
    "tips": [
      "Always resolve vectors along two convenient perpendicular axes before adding/subtracting them",
      "For projectile problems, write down u_x=u cosθ and u_y=u sinθ first, then treat the two directions completely separately",
      "Range is the same for complementary angles θ and (90°−θ), for the same launch speed",
      "Don't confuse angular velocity ω (rad/s) with linear speed v = ωr — they're related, not identical"
    ],
    "bestPractices": [
      "Draw a clear vector diagram before applying the triangle/parallelogram law",
      "Keep careful track of signs when resolving vectors into components — a sign error here cascades through the whole problem",
      "For circular motion, double check whether a question wants ω, v, or a_c — they are related but not interchangeable"
    ]
  },
  {
    "chapter": "Laws of Motion",
    "formulae": [
      "Newton's second law: F = dp/dt = ma (constant mass)",
      "Impulse: J = FΔt = Δp = m(v−u)",
      "Conservation of momentum (isolated system): Σp_before = Σp_after",
      "Friction: f ≤ μN (f = μ_s N at the point of slipping, f = μ_k N while sliding)",
      "Centripetal force (circular motion): F_c = mv²/r"
    ],
    "logic": [
      "First law: a body stays at rest/uniform velocity unless acted on by a net external force — this defines inertia and what a 'force' is operationally",
      "Second law: net force determines the RATE OF CHANGE of momentum, not momentum itself — zero net force means zero acceleration, not zero velocity",
      "Third law: action-reaction pairs act on DIFFERENT bodies and never cancel each other for the same body",
      "Momentum conservation follows directly from Newton's third law for an isolated system (internal forces cancel in pairs)",
      "Static friction is self-adjusting up to a maximum (μ_s N); kinetic friction is roughly constant (μ_k N) once sliding starts, and μ_k < μ_s typically"
    ],
    "tips": [
      "Always identify the SYSTEM first (what's included, what's external) before applying F=ma or conservation of momentum",
      "In pulley/connected-body problems, treat each mass separately with its own F=ma equation, using a common acceleration and unknown tension(s)",
      "Apparent weight in a lift = m(g ± a): + when accelerating upward, − when accelerating downward; zero in free fall (weightlessness)",
      "Don't confuse the string tension with the net force on a body in circular motion — tension often IS the entire centripetal force, but check for other forces too"
    ],
    "bestPractices": [
      "Draw a free-body diagram for each object before writing equations — missing a force is the most common error",
      "Keep a consistent sign convention (e.g. 'up' positive) throughout a single problem",
      "For 'two masses + pulley' problems, remember the magnitude of acceleration and string tension are the same throughout an inextensible, massless string over a frictionless, massless pulley"
    ]
  },
  {
    "chapter": "Work, Energy and Power",
    "formulae": [
      "Work: W = F·d = Fd cosθ",
      "Work-energy theorem: W_net = ΔKE = ½mv² − ½mu²",
      "Kinetic energy: KE = ½mv²",
      "Gravitational PE (near surface): U = mgh",
      "Spring PE: U = ½kx²",
      "Power: P = W/t = F·v (instantaneous)",
      "Elastic collision (1D), final velocities: v₁ = [(m₁−m₂)u₁ + 2m₂u₂]/(m₁+m₂), v₂ = [(m₂−m₁)u₂ + 2m₁u₁]/(m₁+m₂)"
    ],
    "logic": [
      "Work is zero if force and displacement are perpendicular (e.g. circular motion, normal force on a horizontal surface doing no work)",
      "A conservative force (gravity, spring, electrostatic) does path-independent work; a non-conservative force (friction, air resistance) does path-dependent (always dissipative) work",
      "Total mechanical energy (KE+PE) is conserved only when non-conservative forces do no work",
      "Elastic collision: both momentum and KE conserved; inelastic: only momentum conserved; perfectly inelastic: bodies coalesce, maximum possible KE loss",
      "Power is the RATE of doing work — the same work done faster requires more power, not more energy"
    ],
    "tips": [
      "Work can be negative (force opposing displacement) — don't assume work is always positive",
      "'Energy is dissipated/lost' in friction/inelastic collisions means converted to heat/sound/deformation, NOT destroyed — total energy (including these forms) is still conserved",
      "For 1-D elastic collisions with EQUAL masses, velocities are simply exchanged — a very common shortcut",
      "Remember units: 1 kWh = 3.6×10⁶ J; 1 eV = 1.6×10⁻¹⁹ J — useful for atomic-scale energy problems"
    ],
    "bestPractices": [
      "Identify whether a collision is elastic, inelastic, or perfectly inelastic BEFORE deciding which conservation laws apply",
      "When in doubt about the sign of work, check the angle between the force and displacement vectors explicitly",
      "For energy-conservation problems, always define your zero of potential energy clearly and stick to it throughout"
    ]
  },
  {
    "chapter": "Systems of Particles and Rotational Motion",
    "formulae": [
      "Centre of mass: X_cm = Σmᵢxᵢ/Σmᵢ",
      "Torque: τ = r × F, magnitude rF sinθ",
      "Moment of inertia: I = Σmᵢrᵢ²; parallel axis theorem I = I_cm + Md²; perpendicular axis theorem (planar lamina) I_z = I_x + I_y",
      "Angular momentum: L = Iω = r × p",
      "Rotational KE: KE = ½Iω²",
      "I_solid sphere(diameter) = (2/5)MR²; I_hollow sphere = (2/3)MR²; I_solid cylinder(axis) = (1/2)MR²; I_hollow cylinder(axis) = MR²; I_ring(diameter) = (1/2)MR²; I_rod(centre, ⊥) = (1/12)ML²"
    ],
    "logic": [
      "Equilibrium of a rigid body requires BOTH net force = 0 AND net torque = 0 — one without the other is insufficient",
      "Conservation of angular momentum (L=Iω=const in absence of external torque) is the rotational analogue of conservation of linear momentum",
      "A smaller moment of inertia for the same mass/radius means faster angular acceleration for a given torque, and a higher terminal angular speed for the same energy/work input",
      "Rolling without slipping: v_cm = ωR relates translational and rotational motion of the same object",
      "Centre of mass motion of a system behaves as if all external force acts on a single point particle of the system's total mass, irrespective of internal forces"
    ],
    "tips": [
      "Always identify the correct moment-of-inertia formula for the given shape/axis before substituting numbers — a sphere, ring, disc and rod all differ",
      "Use the parallel axis theorem whenever the given axis is NOT through the centre of mass",
      "For 'who reaches the bottom first' (rolling race) problems, smaller I/MR² always wins, regardless of mass or radius (they cancel out)",
      "Torque direction (clockwise/anticlockwise) matters — treat it as a signed quantity consistently, just like force direction in 1-D problems"
    ],
    "bestPractices": [
      "Sketch all forces AND their perpendicular distances from the pivot before writing a torque-balance equation",
      "Check both translational (ΣF=0) and rotational (Στ=0) equilibrium conditions in statics problems — don't stop after just one",
      "When conserving angular momentum, double-check that no external torque genuinely acts during the process in question"
    ]
  },
  {
    "chapter": "Gravitation",
    "formulae": [
      "Newton's law of gravitation: F = GMm/r², G = 6.674×10⁻¹¹ N m² kg⁻²",
      "g at surface: g = GM/R²; at height h: g(h)=g₀R²/(R+h)²; at depth d: g(d)=g₀(1−d/R)",
      "Gravitational PE: U = −GMm/r (zero at infinity)",
      "Escape speed: v_e = √(2GM/R) = √(2gR)",
      "Orbital speed (circular orbit): v_o = √(GM/r)",
      "Kepler's third law: T² = (4π²/GM)R³",
      "Total energy of a satellite in circular orbit: E = −GMm/2r"
    ],
    "logic": [
      "Gravity is always attractive and acts along the line joining two masses (a central force) — this is WHY angular momentum about the central body is conserved (Kepler's second law)",
      "g decreases both with altitude (height above surface) AND with depth below the surface, but by different formulas (inverse-square above, linear below for uniform density)",
      "The shell theorem: a uniform spherical shell exerts zero net gravitational force on anything strictly inside it, but behaves as if its mass were concentrated at the centre for anything outside it",
      "Weightlessness in orbit = free fall, NOT zero gravity — the astronaut and spacecraft accelerate together at the same rate",
      "Escape speed depends only on the planet (M, R), not on the escaping object's mass or launch direction"
    ],
    "tips": [
      "Don't confuse orbital speed v_o=√(GM/r) with escape speed v_e=√(2GM/r) — escape speed is always exactly √2 times orbital speed at the same r",
      "A bound orbit always has NEGATIVE total energy; an unbound (escaping) trajectory has E≥0",
      "For 'weight on another planet' problems, always work with the RATIO g_planet/g_Earth = (M ratio)/(R ratio)², not absolute values",
      "Tidal effects depend on the gradient of gravitational force (∝1/r³), unlike the force itself (∝1/r²) — this is why the Moon's tides dominate the Sun's despite the Sun's stronger overall pull"
    ],
    "bestPractices": [
      "When a problem gives 'weighs W₁ on Earth, find weight on planet X', always set up the ratio method rather than computing each g from scratch",
      "For escape/orbit energy problems, write the total energy E=KE+PE explicitly and track its sign throughout",
      "Remember g is NOT a universal constant — it depends on the planet's M and R, and varies with location on/above/below the same planet too"
    ]
  },
  {
    "chapter": "Mechanical Properties of Solids",
    "formulae": [
      "Stress = F/A (SI unit Pa)",
      "Strain = ΔL/L (longitudinal), ΔV/V (volumetric), or shear angle (shearing) — all dimensionless",
      "Young's modulus: Y = (F/A)/(ΔL/L)",
      "Shear modulus: G = (F/A)/(shear angle)",
      "Bulk modulus: K = −p/(ΔV/V)",
      "Compressibility = 1/K",
      "Elastic potential energy per unit volume = ½ × stress × strain"
    ],
    "logic": [
      "Hooke's law: within the elastic limit, stress ∝ strain — the modulus (Y, G, or K) is the constant of proportionality",
      "Elastic behaviour means the material fully returns to its original shape when stress is removed; plastic behaviour means it doesn't",
      "Young's modulus applies to tensile/compressive (longitudinal) deformation of solids; shear modulus to shape-changing deformation at constant volume; bulk modulus to uniform volume change under pressure (applies to solids, liquids and gases)",
      "A stiffer material (higher Y) needs more stress to produce the same strain — steel is far stiffer than rubber",
      "Liquids and gases have a bulk modulus (they resist volume change) but no shear modulus (they flow, offering no permanent resistance to shape change) and no Young's modulus"
    ],
    "tips": [
      "Don't confuse strain (dimensionless ratio) with stress (has units of pressure, Pa)",
      "Elastic limit ≠ fracture point — a material can deform plastically for a wide range of stress before it finally breaks",
      "For composite/combined-wire problems, remember tension (not stress) is often what's equal across wires in series, while stress/strain differ by area/length",
      "A coiled spring's extension depends on shear (rigidity) modulus, not Young's modulus, since the wire itself twists rather than stretches uniformly"
    ],
    "bestPractices": [
      "Always convert given diameters to radii before computing cross-sectional area (a very common slip)",
      "Check whether a problem is asking about longitudinal, shear, or volumetric strain before picking which modulus formula to use",
      "Keep careful track of units throughout (GPa vs Pa, cm vs m) — these problems are unit-conversion-heavy"
    ]
  },
  {
    "chapter": "Mechanical Properties of Fluids",
    "formulae": [
      "Pressure at depth h: P = P₀ + ρgh",
      "Pascal's law: F₁/A₁ = F₂/A₂ (hydraulic machines)",
      "Equation of continuity: A₁v₁ = A₂v₂",
      "Bernoulli's equation: P + ½ρv² + ρgh = constant",
      "Stokes' law: viscous drag F = 6πηrv",
      "Terminal velocity: v_t = 2r²(ρ−σ)g/9η",
      "Excess pressure — drop: Δp=2T/r; bubble (2 surfaces): Δp=4T/r",
      "Capillary rise: h = 2Tcosθ/ρgr"
    ],
    "logic": [
      "Pascal's law (pressure transmitted equally) underlies all hydraulic machines — the trade-off is force for distance (small piston moves far, large piston moves little, for the same work)",
      "Equation of continuity (mass conservation for incompressible flow) + Bernoulli's principle (energy conservation) together explain the speed-pressure trade-off at a constriction",
      "Viscosity opposes RELATIVE motion between fluid layers; it's the fluid analogue of friction between solids",
      "Surface tension arises from net inward cohesive force on surface molecules (fewer neighbours than molecules in the bulk) — this is why liquid surfaces behave like a stretched elastic membrane",
      "Angle of contact depends on the relative strength of cohesive (liquid-liquid) vs adhesive (liquid-solid) forces — acute (wetting) if adhesion wins, obtuse (non-wetting) if cohesion wins"
    ],
    "tips": [
      "Bernoulli's equation applies only to ideal (non-viscous, incompressible), steady, streamline flow — not to turbulent or highly viscous flow",
      "A drop/bubble has ONE free surface; a soap bubble/film has TWO — don't forget the factor of 2 for films",
      "Gauge pressure = absolute pressure − atmospheric pressure; Bernoulli's equation works with either, as long as you're consistent throughout one problem",
      "Terminal velocity problems (Stokes' law) require balancing THREE forces: weight (down), buoyancy (up), and viscous drag (up, opposing motion)"
    ],
    "bestPractices": [
      "Always check whether a 'excess pressure' question is about a drop (2T/r) or a bubble/film (4T/r) before applying the formula",
      "In continuity/Bernoulli problems, draw the two cross-sections being compared and label area, speed and height clearly at each",
      "Convert all lengths/areas to consistent SI units (metres, m²) before substituting into pressure/force formulas"
    ]
  },
  {
    "chapter": "Thermal Properties of Matter",
    "formulae": [
      "Celsius–Kelvin: tc = T − 273.15",
      "Celsius–Fahrenheit: tF = (9/5)tc + 32",
      "Linear expansion: L = L₀(1+αΔT); Area: A=A₀(1+βΔT), β≈2α; Volume: V=V₀(1+γΔT), γ≈3α",
      "Heat capacity: Q = msΔT (specific heat) or Q = nCΔT (molar specific heat)",
      "Latent heat: Q = mL (phase change, no temperature change)",
      "Newton's law of cooling (rate form): dT/dt = −k(T−T_s)",
      "Monatomic gas: Cv=(3/2)R, Cp=(5/2)R; Diatomic: Cv=(5/2)R, Cp=(7/2)R (equipartition)"
    ],
    "logic": [
      "Temperature measures the 'hotness' that determines the direction of heat flow (always from hot to cold); heat is energy in transit due to a temperature difference",
      "Conduction (molecular vibration, needs a medium), convection (bulk fluid motion, needs a fluid), radiation (EM waves, no medium needed) are the three distinct modes of heat transfer",
      "Equipartition of energy: each quadratic degree of freedom (translational, rotational, vibrational) contributes ½kT average energy per molecule — more degrees of freedom means higher specific heat",
      "During a phase change at constant pressure, temperature stays constant while latent heat is absorbed/released — this is why a melting-ice/water mixture stays at 0°C until all the ice has melted",
      "A good absorber of radiation at a given wavelength is also a good emitter at that same wavelength (Kirchhoff's law) — a perfectly black body is the best possible absorber AND emitter"
    ],
    "tips": [
      "Don't confuse 'heat capacity' (for the whole object, J/K) with 'specific heat capacity' (per unit mass, J/kg·K or J/g·K) — check units carefully",
      "A temperature CHANGE/interval in °C equals the same numeric change in K (ΔT is the same on both scales), even though the absolute values differ by 273.15",
      "In calorimetry problems, heat lost by the hotter object = heat gained by the cooler object(s), assuming no heat is lost to surroundings",
      "Thermal stress develops in a constrained object (not free to expand/contract) — a freely expanding rod never develops thermal stress, regardless of temperature change"
    ],
    "bestPractices": [
      "Always check whether a rod/wire in a thermal-expansion problem is free to expand or constrained before deciding whether to compute length change or stress",
      "In latent-heat/calorimetry problems, carefully separate 'sensible heat' stages (temperature changing, use msΔT) from 'latent heat' stages (phase changing at constant T, use mL)",
      "Convert Fahrenheit-Celsius-Kelvin carefully, remembering a Fahrenheit DEGREE interval is 5/9 of a Celsius/Kelvin degree interval, even though the absolute scales start differently"
    ]
  },
  {
    "chapter": "Thermodynamics",
    "formulae": [
      "First law of thermodynamics: ΔU = Q − W",
      "Work done by a gas: W = ∫P dV (= PΔV at constant pressure; = 0 at constant volume)",
      "Mayer's relation (ideal gas): Cp − Cv = R",
      "Carnot efficiency: η = 1 − T₂/T₁ (T in Kelvin)",
      "Refrigerator/heat pump COP: α = Q₂/W = Q₂/(Q₁−Q₂)",
      "Isothermal work (ideal gas): W = nRT ln(V₂/V₁)"
    ],
    "logic": [
      "Internal energy U is a STATE function (depends only on current state, e.g. T for an ideal gas) — ΔU is path-independent, unlike Q and W individually, which ARE path-dependent",
      "Thermodynamic processes: isothermal (T const), isobaric (P const), isochoric (V const), adiabatic (Q=0) — each has a distinct P-V diagram shape and work expression",
      "Zeroth law: if A is in thermal equilibrium with B, and B with C, then A is in thermal equilibrium with C — this is what makes 'temperature' a well-defined, transitive concept and justifies using a thermometer",
      "Second law (Kelvin-Planck/Clausius): no engine can be 100% efficient (some heat must be rejected); heat never flows spontaneously from cold to hot without external work",
      "A Carnot engine (operating on two reversible isothermal + two reversible adiabatic steps) is the theoretical maximum-efficiency engine between two given temperatures — no real engine can exceed it"
    ],
    "tips": [
      "Don't confuse Q (heat, path-dependent) with ΔU (internal energy change, path-independent) — only ΔU is the same for all processes between the same two states",
      "Work done BY the gas is positive during expansion (ΔV>0) and negative during compression (ΔV<0) — keep this sign convention consistent with the heat sign convention",
      "A cyclic process returns to its initial state, so ΔU=0 over a full cycle, meaning Q_net = W_net for the cycle",
      "For free expansion into vacuum: W=0 (nothing to push against) AND Q=0 (insulated) ⟹ ΔU=0 ⟹ T unchanged for an ideal gas — a classic 'trick' exam scenario"
    ],
    "bestPractices": [
      "Always state which process type (isothermal/isobaric/isochoric/adiabatic) applies before choosing a work formula",
      "In engine/refrigerator efficiency problems, use the Kelvin (absolute) temperature scale, never Celsius, in the efficiency formula",
      "When given data in calories, convert to joules (1 cal = 4.186 J, often rounded to 4.19 J) before combining with SI-unit quantities"
    ]
  },
  {
    "chapter": "Kinetic Theory",
    "formulae": [
      "Ideal gas equation: PV = nRT = NkT (N=number of molecules, k=Boltzmann constant=R/N_A)",
      "Pressure (kinetic theory): P = (1/3)ρ⟨v²⟩",
      "Root mean square speed: v_rms = √(3RT/M) = √(3kT/m)",
      "Average KE per molecule: (3/2)kT (translational only, monatomic)",
      "Mean free path: l = 1/(√2 π d² n)",
      "Degrees of freedom and Cv: monatomic Cv=(3/2)R; diatomic Cv=(5/2)R (rigid) or (7/2)R (with vibration); Cp=Cv+R always"
    ],
    "logic": [
      "Kinetic theory derives macroscopic gas laws (Boyle's, Charles's, Avogadro's) from microscopic molecular motion and collisions — a triumph connecting the macro and micro worlds",
      "Temperature, in kinetic theory, IS a direct measure of the average translational kinetic energy of molecules — not an independent quantity",
      "At the same temperature, ALL ideal gas species have the same average KE per molecule, but different v_rms (lighter molecules move faster) since KE=(1/2)mv²",
      "Degrees of freedom: translational (always 3), rotational (0 for monatomic, 2 for linear diatomic/polyatomic, 3 for non-linear polyatomic), vibrational (significant only at high temperatures for most gases)",
      "Mean free path depends on molecular size and number density, not directly on temperature at fixed density — but collision FREQUENCY increases with temperature since molecules move faster"
    ],
    "tips": [
      "Don't confuse v_rms (√(3RT/M)) with average speed or most probable speed — these are three distinct (though related) quantities from the Maxwell speed distribution",
      "For mixed-gas problems, each gas independently obeys the ideal gas law for its own partial pressure (Dalton's law of partial pressures)",
      "When converting gauge pressure to absolute pressure, always add 1 atm (or 1.013×10⁵ Pa) — many 'wrong answer' mistakes come from forgetting this",
      "R (universal gas constant, per mole) and k (Boltzmann's constant, per molecule) are related by R = N_A × k — know when to use which"
    ],
    "bestPractices": [
      "Always check whether a given pressure is gauge or absolute before substituting into PV=nRT",
      "Keep temperature in Kelvin throughout gas-law calculations — never substitute a Celsius value directly",
      "For mean-free-path and collision-frequency problems, be careful to compute number density n=N/V in SI units (molecules per m³) consistently"
    ]
  },
  {
    "chapter": "Oscillations",
    "formulae": [
      "SHM equation: a = −ω²x",
      "Displacement: x(t) = A cos(ωt+φ)",
      "Velocity: v = −Aω sin(ωt+φ), v_max=Aω",
      "Acceleration: a = −Aω²cos(ωt+φ), a_max=Aω²",
      "Period: T=2π/ω; Simple pendulum T=2π√(l/g); Spring-mass T=2π√(m/k)",
      "Total energy in SHM: E = ½mω²A² (constant); KE=½mω²(A²−x²); PE=½mω²x²"
    ],
    "logic": [
      "SHM is periodic motion where acceleration is always proportional to, and directed opposite to, displacement from a fixed mean position",
      "Every SHM is periodic, but not every periodic motion is SHM (e.g. a superposition of several different-frequency SHMs is periodic but not itself SHM, unless the frequencies have a common sub-multiple AND only a single frequency is present)",
      "In an ideal (undamped) SHM, total mechanical energy is conserved, continuously exchanging between kinetic (max at mean position) and potential (max at extremes) forms",
      "A reference circle (uniform circular motion) projects onto a diameter as SHM — this is a powerful geometric way to visualise phase and amplitude",
      "Damping removes energy progressively (reducing amplitude); resonance under forced oscillation can build amplitude dramatically when driving frequency ≈ natural frequency"
    ],
    "tips": [
      "Don't confuse angular frequency ω (rad/s, used in the SHM equations) with ordinary frequency f (Hz, cycles/s) — they relate by ω=2πf, and getting units wrong is a very common slip",
      "At the mean position: v is maximum, a is zero. At the extremes: v is zero, a is maximum. Never mix these up",
      "Time period of a simple pendulum does NOT depend on the mass of the bob or the amplitude (for small oscillations) — only on length and g",
      "When a pendulum or spring system is in an accelerating frame (e.g. a lift, or a car going around a curve), replace g with the EFFECTIVE gravitational acceleration in that frame"
    ],
    "bestPractices": [
      "Always check whether a given oscillation satisfies a=−ω²x before calling it SHM — periodic alone is not enough",
      "In energy-based SHM problems, remember KE+PE=constant=½mω²A² at every instant, which often shortcuts a direct calculus derivation",
      "For pendulum problems in a non-inertial frame, carefully work out the effective 'g' first (vector sum of true gravity and the pseudo-force's effective acceleration) before applying T=2π√(l/g_eff)"
    ]
  },
  {
    "chapter": "Waves",
    "formulae": [
      "Wave equation: v = fλ",
      "Speed on a stretched string: v = √(T/μ)",
      "Speed of sound (ideal gas): v = √(γP/ρ) = √(γRT/M)",
      "Standing wave on a string fixed at both ends: fₙ = nv/2L (all harmonics, n=1,2,3,...)",
      "Pipe closed at one end: fₙ = (2n−1)v/4L (odd harmonics only)",
      "Beat frequency: f_beat = |f₁ − f₂|",
      "Doppler effect (source moving, observer at rest): f' = f×v/(v∓v_s)"
    ],
    "logic": [
      "Transverse waves: particle motion ⊥ propagation direction (strings, EM waves); longitudinal waves: particle motion ∥ propagation direction (sound in gases/liquids)",
      "A travelling wave transports energy and has particles all sharing the same amplitude but a systematically varying phase; a standing wave does NOT transport net energy and has fixed nodes/antinodes",
      "A standing wave = superposition of two identical waves travelling in opposite directions (e.g. incident + reflected wave)",
      "Boundary conditions determine which harmonics are allowed: fixed/closed end ⟹ node; free/open end ⟹ antinode",
      "Beats arise from the superposition (interference in time) of two close-but-different frequencies; Doppler effect arises from relative motion between source and observer changing the effectively received frequency"
    ],
    "tips": [
      "Speed of a wave on a string/in a medium depends on the MEDIUM's properties (tension & mass density for strings; elasticity & density for sound) — NOT on the wave's own frequency or amplitude",
      "A closed-closed or open-open pipe/string supports ALL harmonics; a closed-open pipe supports only ODD harmonics — this is a very common distinguishing exam point",
      "Don't confuse wave speed (medium property) with particle speed (how fast individual particles of the medium oscillate, which depends on amplitude and frequency too)",
      "For Doppler problems, carefully track which of source/observer is moving, and in which direction, before picking the sign in the formula"
    ],
    "bestPractices": [
      "Always identify the type of wave (transverse/longitudinal) and the boundary conditions (open/closed ends) before deciding which harmonic formula to use",
      "In string/pipe resonance problems, draw the standing wave pattern (nodes and antinodes) to avoid harmonic-number errors",
      "Keep careful track of whether a 'frequency' asked for is the fundamental or a specific harmonic — read the question twice"
    ]
  }
];
