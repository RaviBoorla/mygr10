// ─── Grade IX ICSE Physics revision notes ────────────────────────────────────
// screen-notes.js reads REVISION['IX ICSE Physics'] when grade==='IX'
REVISION['IX ICSE Physics'] = [
  {
    "chapter": "Measurements and Experimentation",
    "formulae": [
      "SI base units: length → metre (m), mass → kilogram (kg), time → second (s), current → ampere (A), temperature → kelvin (K)",
      "1 km = 1000 m; 1 cm = 10⁻² m; 1 mm = 10⁻³ m; 1 μm = 10⁻⁶ m",
      "Density ρ = m/V  (kg/m³ or g/cm³);  1 g/cm³ = 1000 kg/m³",
      "Least count of vernier calliper = 1 MSD − 1 VSD = (1/N) × 1 MSD",
      "Vernier reading = Main scale reading + (Vernier scale division coinciding × Least count)"
    ],
    "logic": [
      "Physical quantities are either fundamental (mass, length, time, etc.) or derived (speed, force, density, etc.)",
      "The least count of an instrument determines the precision of a measurement; smaller least count → more precise",
      "A vernier calliper measures internal/external diameters and depths with a typical least count of 0.1 mm",
      "A screw gauge measures small thicknesses with a typical least count of 0.01 mm",
      "Zero error must be noted at the start of an experiment and subtracted (positive error) or added (negative error) from every reading"
    ],
    "tips": [
      "Always record the unit alongside every measured value — a number without a unit is meaningless",
      "In vernier calliper readings, identify the main scale reading FIRST, then find which VSD coincides with any MSD",
      "Common error: confusing least count (instrument precision) with zero error (systematic offset) — they are different",
      "When converting units, track dimensions: multiplying m by m gives m², not m"
    ],
    "bestPractices": [
      "Draw and label the vernier calliper diagram showing the main scale, vernier scale, and coinciding division",
      "Record all readings in a table with columns for instrument, least count, zero error, and corrected reading",
      "State the formula for least count before computing it; show the substitution explicitly"
    ]
  },
  {
    "chapter": "Motion in One Dimension",
    "formulae": [
      "Speed = Distance / Time;  Velocity = Displacement / Time",
      "Acceleration a = (v − u) / t",
      "v = u + at",
      "s = ut + (1/2)at²",
      "v² = u² + 2as"
    ],
    "logic": [
      "Distance is a scalar (always positive); displacement is a vector (can be negative)",
      "Speed is a scalar; velocity is a vector — equal magnitudes but different directions mean different velocities",
      "Uniform motion: equal distances in equal time intervals; uniform acceleration: equal velocity changes in equal time intervals",
      "Equations of motion apply only when acceleration is uniform (constant) throughout the motion",
      "On a velocity-time graph: slope = acceleration; area under the curve = displacement"
    ],
    "tips": [
      "Identify u, v, a, t, s from the question before selecting the appropriate equation of motion",
      "If the object decelerates (slows down), the acceleration a is negative in the same direction as motion",
      "Free fall: a = g ≈ 10 m/s² (or 9.8 m/s²) downward; use the equations of motion with a = g",
      "Common error: using s for total path length instead of displacement — read the question carefully"
    ],
    "bestPractices": [
      "List all given quantities (u, v, a, t, s) with units before writing the equation",
      "Show each step of algebra when rearranging an equation of motion",
      "Sketch the velocity-time graph for the described motion even when not explicitly asked — it clarifies the problem"
    ]
  },
  {
    "chapter": "Laws of Motion",
    "formulae": [
      "Newton's first law: a body continues in its state of rest or uniform motion unless acted on by a net external force",
      "Newton's second law: F = ma  (force in newtons, mass in kg, acceleration in m/s²)",
      "Newton's third law: for every action there is an equal and opposite reaction",
      "Momentum p = mv  (kg·m/s);  Impulse = F × t = Δp",
      "Law of conservation of momentum: m₁u₁ + m₂u₂ = m₁v₁ + m₂v₂ (no external force)"
    ],
    "logic": [
      "Inertia is the resistance of a body to a change in its state of motion — it is proportional to mass",
      "The net force is the vector sum of all forces; if net force = 0, acceleration = 0 (body in equilibrium)",
      "Action and reaction forces act on DIFFERENT bodies — they can never cancel each other",
      "Impulse-momentum theorem: change in momentum = impulse = force × time",
      "Conservation of momentum holds only when no external forces act on the system"
    ],
    "tips": [
      "In F = ma, F is the NET (resultant) force, not just one of several forces acting",
      "Action-reaction pairs: clearly state 'body A exerts … on body B; body B exerts … on body A'",
      "In collision problems, conserve total momentum; also check whether kinetic energy is conserved (elastic vs inelastic)",
      "Common error: treating weight as mass — weight W = mg is a force (N), mass m is in kg"
    ],
    "bestPractices": [
      "Draw a free body diagram showing all forces on the body before writing the equation of motion",
      "Label forces with their magnitudes and directions using arrows proportional to magnitude",
      "Quote Newton's law number and state it before applying it in a proof or explanation"
    ]
  },
  {
    "chapter": "Fluids (Pressure, Upthrust, Archimedes' Principle)",
    "formulae": [
      "Pressure P = F/A  (Pa = N/m²);  Pressure at depth h: P = hρg",
      "Upthrust (Archimedes) = weight of fluid displaced = Vρ_fluid × g",
      "Atmospheric pressure ≈ 101325 Pa ≈ 76 cm of Hg at sea level",
      "Relative density = density of substance / density of water = weight in air / (weight in air − weight in water)",
      "Object floats when upthrust = weight; object sinks when upthrust < weight"
    ],
    "logic": [
      "Pressure in a fluid depends on depth, density and g — NOT on the shape or cross-section of the container",
      "Pascal's law: pressure applied to an enclosed fluid is transmitted equally in all directions",
      "Archimedes' principle: upthrust = weight of fluid displaced, regardless of the material of the object",
      "A body immersed in a fluid experiences an apparent loss of weight equal to the upthrust",
      "Relative density has no unit; it tells how many times denser a substance is than water"
    ],
    "tips": [
      "In upthrust problems, multiply the volume of the SUBMERGED part (not total volume) by ρ_fluid × g",
      "Sharp objects cut through material because a small area means very high pressure for the same force",
      "Common error: confusing upthrust (buoyant force, N) with relative density (dimensionless) — they are different quantities",
      "To find whether an object floats or sinks, compare its density with that of the fluid"
    ],
    "bestPractices": [
      "Draw a diagram showing the object in the fluid with upthrust (↑) and weight (↓) labelled",
      "State Archimedes' principle before applying it in any calculation",
      "Show each step in relative density calculations: weight in air, weight in water, difference"
    ]
  },
  {
    "chapter": "Sound",
    "formulae": [
      "Speed of sound v = fλ  (m/s = Hz × m)",
      "Speed of sound in air ≈ 340 m/s at 25 °C",
      "Echo time: d = (v × t) / 2  where d = distance to reflector",
      "Frequency of human hearing: 20 Hz to 20 000 Hz (20 kHz)",
      "Intensity level (dB): a 10 dB increase ≈ doubling of perceived loudness"
    ],
    "logic": [
      "Sound is a longitudinal mechanical wave — it needs a material medium; it cannot travel in vacuum",
      "Compression = region of high pressure; rarefaction = region of low pressure",
      "Speed of sound is greatest in solids, then liquids, then gases — solids have higher elasticity",
      "Pitch is determined by frequency; loudness is determined by amplitude; quality (timbre) by waveform",
      "Resonance occurs when the frequency of a forced vibration matches the natural frequency of the object"
    ],
    "tips": [
      "Minimum distance for an echo = (340 × 0.1) / 2 = 17 m — the ear needs at least 0.1 s to distinguish echo from original",
      "Infrasound < 20 Hz; Ultrasound > 20 000 Hz — both are beyond the range of human hearing",
      "Common error: confusing velocity of sound (depends on medium) with frequency (depends on source, not medium)",
      "In echo problems, the total time t is the two-way travel time; divide by 2 to get one-way distance"
    ],
    "bestPractices": [
      "Clearly state the given quantities (v, f or λ) and the unknown before applying v = fλ",
      "Draw a wavefront diagram showing compressions and rarefactions for a longitudinal wave",
      "In echo calculations show the formula d = vt/2 before substituting numbers"
    ]
  },
  {
    "chapter": "Heat and Energy",
    "formulae": [
      "Heat gained/lost: Q = mcΔT  where c = specific heat capacity (J kg⁻¹ °C⁻¹)",
      "Principle of calorimetry: heat lost by hot body = heat gained by cold body (no heat loss to surroundings)",
      "Latent heat: Q = mL  (no temperature change during a change of state)",
      "Specific heat of water = 4200 J kg⁻¹ °C⁻¹ = 4.2 J g⁻¹ °C⁻¹",
      "1 calorie = 4.2 joules"
    ],
    "logic": [
      "Temperature measures the degree of hotness; heat is energy transferred due to temperature difference",
      "During a change of state, temperature remains constant — energy goes into breaking/forming intermolecular bonds",
      "Specific heat capacity is the heat needed to raise 1 kg of a substance by 1 °C",
      "Latent heat of fusion (melting/freezing) and latent heat of vaporisation (boiling/condensing) are different values for the same substance",
      "Conduction occurs through molecular vibrations; convection through fluid movement; radiation requires no medium"
    ],
    "tips": [
      "In calorimetry, both sides of the equation must use the SAME final temperature T",
      "Common error: not converting mass from grams to kilograms when c is in J kg⁻¹ °C⁻¹",
      "During melting or boiling, ΔT = 0 so Q = mcΔT gives zero — use Q = mL instead",
      "Water has an unusually high specific heat capacity — this is why it is used as a coolant"
    ],
    "bestPractices": [
      "Write Q_lost = Q_gained and expand each term separately before solving",
      "State units of Q (J or cal), m (kg or g), c (J kg⁻¹ °C⁻¹) and ΔT (°C or K)",
      "Show the temperature change ΔT explicitly as (T_final − T_initial) with correct sign"
    ]
  },
  {
    "chapter": "Light (Reflection, Refraction)",
    "formulae": [
      "Law of reflection: angle of incidence = angle of reflection (both measured from the normal)",
      "Snell's law of refraction: n₁ sin θ₁ = n₂ sin θ₂",
      "Refractive index n = speed of light in vacuum / speed of light in medium = c/v",
      "Mirror formula: 1/v + 1/u = 1/f;  Magnification m = −v/u",
      "Lens formula: 1/v − 1/u = 1/f;  Power of lens P = 1/f (in dioptres, f in metres)"
    ],
    "logic": [
      "All angles in optics are measured from the NORMAL to the surface, not from the surface itself",
      "In reflection, incident ray, reflected ray and normal are coplanar",
      "Light bends towards the normal when entering a denser medium (n₂ > n₁) and away when entering a rarer medium",
      "Real image: formed by actual convergence of rays; can be caught on a screen — always inverted for a single mirror/lens",
      "Virtual image: rays appear to diverge from a point; cannot be caught on a screen — erect and magnified for a concave mirror (object inside F)"
    ],
    "tips": [
      "For mirrors, use sign convention: distances in the direction of incident light are positive (New Cartesian)",
      "A concave mirror has a positive focal length; a convex mirror has a negative focal length in the New Cartesian convention",
      "In total internal reflection, the light must travel from a denser to a rarer medium AND the angle of incidence must exceed the critical angle",
      "Common error: measuring the angle of incidence from the surface rather than the normal — always draw the normal first"
    ],
    "bestPractices": [
      "Draw a clear ray diagram (at least 2 rays) for every mirror/lens problem before computing",
      "State the sign convention you are using at the start of a numerical",
      "Verify the nature of the image (real/virtual, inverted/erect, magnified/diminished) from both the diagram and the formula"
    ]
  },
  {
    "chapter": "Electricity and Magnetism",
    "formulae": [
      "Ohm's law: V = IR  (volts = amperes × ohms)",
      "Series circuit: R_total = R₁ + R₂ + … ;  same current through all resistors",
      "Parallel circuit: 1/R_total = 1/R₁ + 1/R₂ + … ;  same voltage across all branches",
      "Electrical power: P = VI = I²R = V²/R  (watts)",
      "Energy: E = Pt = VIt  (joules);  1 kWh = 3.6 × 10⁶ J"
    ],
    "logic": [
      "Electric current is the rate of flow of charge: I = Q/t (amperes = coulombs per second)",
      "Potential difference (voltage) is the work done per unit charge: V = W/Q",
      "Ohm's law holds only for metallic conductors at constant temperature",
      "In a series circuit, voltages add up; in a parallel circuit, currents add up",
      "A magnetic field is produced around a current-carrying conductor; direction given by the right-hand thumb rule"
    ],
    "tips": [
      "In a parallel circuit, the equivalent resistance is LESS than the smallest individual resistance",
      "Common error: applying series formula to a parallel circuit or vice versa — always identify the circuit type first",
      "To find current in a branch of a parallel circuit, use I_branch = V / R_branch (V is the same across all branches)",
      "Energy cost on bills is in kWh; convert to joules only when asked for joules"
    ],
    "bestPractices": [
      "Draw and label the circuit diagram before writing any formula",
      "Show each step in a multi-resistor problem: find R_total, then I_total, then individual voltages/currents",
      "State Ohm's law as a formula before substituting values, and check that units are consistent throughout"
    ]
  }
];
