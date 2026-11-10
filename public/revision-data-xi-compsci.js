// ─── Grade XI CBSE Computer Science revision notes (NCERT textbook) ─────────
// screen-notes.js reads REVISION['XI Computer Science'] when state.grade==='XI' && state.board==='CBSE'.

REVISION['XI Computer Science'] = [
  {
    chapter: 'Computer System',
    formulae: [
      '1 Byte = 8 bits; 1 Nibble = 4 bits',
      '1 KB = 1024 Bytes · 1 MB = 1024 KB · 1 GB = 1024 MB · 1 TB = 1024 GB',
      '1 PB = 1024 TB · 1 EB = 1024 PB · 1 ZB = 1024 EB · 1 YB = 1024 ZB'
    ],
    logic: [
      'Hardware (4 parts): CPU, Primary Memory, Input Devices, Output Devices',
      'CPU = ALU (arithmetic/logic operations) + Control Unit (directs instruction execution & data flow) + Registers (fast local storage)',
      'RAM: volatile, temporary, holds active program/data — CPU interacts directly only with RAM, never secondary storage',
      'ROM: non-volatile, stores fixed data like the boot loader',
      'Cache memory sits between CPU and RAM — faster than RAM, stores frequently-used data to speed up the CPU',
      'System bus = Data bus (bidirectional — CPU reads AND writes) + Address bus (unidirectional — only CPU supplies addresses) + Control bus (signals)',
      'Microprocessor = CPU on one chip; Microcontroller = CPU + RAM + ROM + peripherals all on one chip (used for single-task devices)',
      'Software: System software (OS, utilities, device drivers) → Programming tools (editors, translators, IDEs) → Application software (general purpose / customised)',
      'Translators: Assembler (assembly→machine), Compiler (whole program at once, not needed again after), Interpreter (line-by-line, needed every run)',
      'FOSS (source + software both free, e.g. Python, Ubuntu) vs Freeware (free to use, source NOT available, e.g. Skype) vs Proprietary (must buy, e.g. Windows, Tally)',
      'OS functions: Process management, Memory management, File management, Device management',
      'Data types: Structured (fixed tabular format) · Semi-structured (tagged, no strict format — HTML, CSV) · Unstructured (no format — video, image, text doc)'
    ],
    tips: [
      'Deleting a file only marks its space "free" — it does not erase the bits, which is why recovery is possible until overwritten',
      'Data bus bidirectional (CPU reads+writes); Address bus unidirectional (CPU only ever sends an address, never receives one)',
      'A microcontroller is preferred in appliances (washing machine, remote) because it is small, cheap and purpose-built for one repetitive task',
      'Compiler translates once, ahead of time; interpreter translates+runs one line at a time, every single run',
      "Don't confuse 'hardware you can touch' with 'software you cannot' — this distinction is a common 1-mark question"
    ],
    bestPractices: [
      'Memorise the memory-unit chain (KB→MB→GB→TB→PB→EB→ZB→YB), each ×1024',
      'When asked "which bus is bidirectional/unidirectional", reason from WHO sends what, not rote memory',
      'Be ready to classify a given software as system/application/programming-tool and a given scenario as structured/semi-structured/unstructured'
    ]
  },
  {
    chapter: 'Encoding Schemes and Number System',
    formulae: [
      'Base values: Binary=2, Octal=8, Decimal=10, Hexadecimal=16',
      'Octal digit ↔ exactly 3 binary bits; Hexadecimal digit ↔ exactly 4 binary bits',
      'Decimal→any base: repeatedly divide by the base, read remainders bottom-to-top',
      'Any base→decimal: Σ (digit × base^position), position counted from 0 at the rightmost digit',
      'Nibble = 4 bits; Byte = 2 nibbles = 8 bits'
    ],
    logic: [
      'ASCII: 7/8-bit code for English letters, digits, symbols only',
      'ISCII: code scheme specifically for Indian-language scripts',
      'UNICODE: single standard covering almost all world scripts — solves ASCII/ISCII being script-limited',
      'Converting binary↔octal/hex is purely grouping bits in 3s (octal) or 4s (hex) from the binary point outward, padding with leading/trailing zeros as needed'
    ],
    tips: [
      'For octal/hex→binary, expand digit-by-digit (fixed 3 or 4 bits each) — much faster than going via decimal',
      'For binary→octal/hex, group bits in 3s/4s FROM THE RIGHT (or from the binary point for fractions), pad the leftmost group with zeros if short',
      'Hexadecimal digits A–F stand for decimal 10–15 — a common silent mistake is forgetting this mapping'
    ],
    bestPractices: [
      'Always double-check which direction a conversion question wants (X→decimal vs decimal→X) before starting',
      'For a base-B system with B distinct symbols, base value = B — a frequently asked direct-definition question',
      'Practise both integer AND fractional-part conversions (e.g. 10.75 in octal) — the fractional part uses negative powers of the base'
    ]
  },
  {
    chapter: 'Emerging Trends',
    formulae: [],
    logic: [
      'Artificial Intelligence (AI): machines simulating human intelligence — learning, reasoning, self-correction',
      'Machine Learning: a subset of AI where systems learn patterns from data and improve without being explicitly reprogrammed',
      'Big Data: extremely large, fast, varied datasets traditional tools cannot handle (key traits: Volume, Velocity, Variety)',
      'Internet of Things (IoT): physical devices + embedded sensors + connectivity, exchanging data automatically',
      'Cloud Computing: on-demand, internet-delivered computing resources from a centralised provider (e.g. storage, servers)',
      'Cloud service models: IaaS (infrastructure/VMs/storage) · PaaS (platform to build apps) · SaaS (ready-to-use software)',
      'Grid Computing: many distributed computers pool resources to jointly solve ONE large problem (different from cloud\'s provider-managed on-demand model)',
      'Blockchain: distributed, decentralised, tamper-resistant digital ledger — no single central authority controls it'
    ],
    tips: [
      "Don't confuse Cloud Computing (provider-managed, on-demand) with Grid Computing (many machines cooperating on one big task)",
      'IaaS < PaaS < SaaS in terms of how much the provider manages for you — IaaS gives raw infrastructure, SaaS gives a finished application',
      'Blockchain\'s selling point for exam answers is always: transparency + tamper-resistance + traceability'
    ],
    bestPractices: [
      'For scenario-based questions (smart school, startup, scholarship distribution), identify the SPECIFIC technology (IoT/Cloud/Blockchain) that solves THAT specific need',
      'Keep one real-world example ready for each term: AI=voice assistant, ML=spam filter, IoT=smart wearable, Cloud=Google Drive, Grid=research computing, Blockchain=transparent ledger'
    ]
  },
  {
    chapter: 'Introduction to Problem Solving',
    formulae: [
      '5! (factorial) = 5×4×3×2×1 = 120',
      'Armstrong number (3-digit): sum of cubes of its digits = the number itself, e.g. 371 = 3³+7³+1³'
    ],
    logic: [
      'Algorithm: step-by-step instructions in plain/structured language (pseudocode) to solve a problem',
      'Flowchart: the same logic shown graphically using standard symbols',
      'Flowchart symbols: Oval=Start/Stop · Parallelogram=Input/Output · Rectangle=Process step · Diamond=Decision',
      'Conditionals (IF/IF-ELSE) let a program execute different instructions depending on whether a condition is true or false',
      'Writing the algorithm BEFORE the code lets you verify logic independent of any language\'s syntax, catching errors early'
    ],
    tips: [
      'Always trace an algorithm with boundary values (smallest, largest, right-at-threshold) to catch off-by-one / boundary logic errors',
      'A "<" vs "<=" mistake at a boundary (e.g. classifying 9 or 99) is the single most common algorithm-correction question type',
      'Pseudocode has no fixed syntax — focus on clear, unambiguous steps, not a specific language\'s rules'
    ],
    bestPractices: [
      'Structure every pseudocode answer as START → INPUT → process (loop/condition) → OUTPUT → STOP',
      'When asked to "improve" a given algorithm, explicitly state what input/case breaks it, then show the fix',
      'For flowchart description questions (no drawing possible), describe shape-by-shape in the correct left-to-right/top-to-bottom flow'
    ]
  },
  {
    chapter: 'Getting Started with Python',
    formulae: [
      'Variable assignment: name = value',
      'Multiple assignment evaluates the WHOLE right side first (using old values), then assigns left to right: a, b = b, a',
      'Arithmetic operators: + - * / (true division, gives float) // (floor division) % (modulus) ** (power)',
      'Type conversion: int(), float(), str() convert between types'
    ],
    logic: [
      'Identifier rules: letters/digits/underscore only, cannot start with a digit, cannot be a keyword, no spaces/special symbols/periods',
      'Python is dynamically typed — "everything is an object", so a variable name can be rebound to a different type of object later',
      "'/' always gives a float result in Python 3, even for exact division (4/2 = 2.0, not 2)",
      "'//' is floor (integer) division — 24//4//2 evaluates LEFT TO RIGHT: (24//4)//2 = 6//2 = 3",
      'String comparison is case-sensitive: \'Bye\' == \'BYE\' is False',
      'Error types: Syntax error (breaks language grammar, caught before running) · Runtime error (valid syntax, fails during execution, e.g. divide by zero) · Logical error (runs fine, wrong output)'
    ],
    tips: [
      "Watch for 'int(\\'3.14\\')' — this raises an error, since int() cannot parse a string containing a decimal point",
      "'5'+'5' gives '55' (string concatenation), NOT 10 — a very common trick question",
      'In multiple assignment like num3, num2 = num1, num3+1 — using num3 before it has ever been assigned raises an error, since the right side uses the OLD (non-existent) num3',
      'bool is the correct type for yes/no facts; str for anything not used in arithmetic (like mobile numbers, which may have leading 0 or +)'
    ],
    bestPractices: [
      'Always trace "what is the output" questions value-by-value, writing down each variable\'s value after every line',
      'Remember PEMDAS/operator precedence: () then ** then * / // % (left to right) then + -',
      'When identifying error type, ask: does it fail BEFORE running (syntax), DURING running (runtime), or does it run but give a WRONG answer (logical)?'
    ]
  },
  {
    chapter: 'Flow of Control',
    formulae: [
      'range(start, stop, step) — generates start, start+step, … up to (but excluding) stop'
    ],
    logic: [
      "'break' exits the entire loop immediately; 'continue' skips only the rest of the CURRENT iteration and moves to the next one",
      'Indentation in Python is NOT cosmetic — it is the mandatory way of defining which statements belong to an if/for/while block',
      "'elif' is checked only when all earlier if/elif conditions in the same chain were false; 'else' never tests a condition itself",
      'Infinite loop: the loop condition never becomes false (or there is no break) — usually caused by forgetting to update the loop-control variable correctly',
      'Nested loop: a loop written inside another loop\'s body — the inner loop runs to completion for every single iteration of the outer loop'
    ],
    tips: [
      'When tracing nested loops with a break, the break only exits the INNERMOST loop, not both loops',
      'Leap year logic: divisible by 4 AND NOT by 100, UNLESS also divisible by 400 — e.g. 2000 is a leap year, 1900 is not',
      'Palindrome check: compare a string/number to its own reverse (e.g. using slicing [::-1] in Python)'
    ],
    bestPractices: [
      'Always count exactly how many times a loop body executes before tracing its output, especially with range() step values',
      'For "find the output" loop questions, build a small table of the loop variable\'s value at each pass',
      'Double-check whether a condition check (i%4==0 etc.) applies to the loop COUNTER or to a separately tracked value'
    ]
  },
  {
    chapter: 'Functions',
    formulae: [
      'def functionName(parameters):\\n    <body>\\n    return value   — function definition syntax',
      'math.ceil(x) rounds UP; math.floor(x) rounds DOWN',
      'random.randint(a, b) gives an integer N with a <= N <= b; random.random() gives a float in [0.0, 1.0)'
    ],
    logic: [
      'Parameter = placeholder named in the function DEFINITION; Argument = actual value supplied at the function CALL',
      'Global variable: defined outside all functions, accessible everywhere; Local variable: defined inside a function, exists only during that call',
      'A function with no return statement (or a bare "return") implicitly returns None',
      'Multiple return values are returned as one comma-packed tuple: return a, b, c',
      'Assigning to a variable INSIDE a function makes it local to that function by default, even if a global of the same name exists — reading an unassigned local before giving it a value raises UnboundLocalError'
    ],
    tips: [
      'math.pow() always returns a float; built-in pow() returns an int for int arguments, and pow(x,y,z) supports modular exponentiation',
      'In a function header, once ANY parameter has a default value, every parameter after it must also have a default',
      'Standard library functions need an import first: from math import sqrt, ceil OR import math then math.sqrt(...)'
    ],
    bestPractices: [
      'When identifying code errors, check: Python 2 vs 3 print syntax, argument-count mismatches, and default-parameter ordering first',
      'For "differentiate" questions (argument vs parameter, global vs local), always give one short concrete code example',
      'Remember a function call used as a bare statement (no assignment) still runs — it just discards any returned value'
    ]
  },
  {
    chapter: 'Strings',
    formulae: [
      's[start:stop:step] — slicing syntax; negative indices count from the end (-1 = last character)',
      'len(s) — length of string s',
      "s.find(sub) → -1 if not found; s.index(sub) → raises ValueError if not found",
      "s.count(sub), s.replace(old,new), s.split(sep), s.partition(sep) — sep-based operations"
    ],
    logic: [
      'Strings are IMMUTABLE — any "modification" (replace, concatenation, etc.) actually creates and returns a brand-new string object',
      'split(sep) returns a LIST of ALL pieces split at every occurrence of sep; partition(sep) returns exactly 3 parts (before, sep, after) using only the FIRST occurrence',
      'swapcase() flips upper↔lower for every letter; title() capitalises the first letter of every word',
      'isalpha() is True only if EVERY character is a letter and the string is non-empty (a space anywhere makes it False)'
    ],
    tips: [
      'A step of 2 or -2 in slicing picks every 2nd character (forward or in reverse) — trace index by index for "what is the output" questions',
      'find() is "safe" (returns -1); index() is "strict" (raises an error) when the substring is absent',
      'Because strings are immutable, any function that "modifies" a string (like deleteChar) must build and return a brand NEW string'
    ],
    bestPractices: [
      'For slicing questions, write out the string with index numbers (both positive and negative) above/below each character before answering',
      'Remember string comparisons and searches are case-sensitive unless explicitly converted with lower()/upper() first',
      'When writing string-processing functions, always build the result incrementally in a loop since strings can\'t be changed in place'
    ]
  },
  {
    chapter: 'Lists',
    formulae: [
      'list.sort() — sorts IN PLACE (modifies the list, returns None)',
      'sorted(list) — returns a NEW sorted list, original list unchanged',
      'list.append(x) — adds x as ONE single element (even if x is itself a list)',
      'list.extend(iterable) — adds each element of iterable individually'
    ],
    logic: [
      'Lists are MUTABLE — elements can be changed, added or removed in place after creation',
      'del list[a:b] / del list[::step] — deletes a slice of elements from the list',
      'list * n creates a new repeated list (an expression); list *= n (same as list = list*n) actually updates the list itself',
      'A nested list is a list containing other lists as elements, e.g. [[1,2],[3,4]] — access an inner element with double indexing: list[i][j]'
    ],
    tips: [
      'sort() vs sorted() is one of the most common trick-question pairs: sort() changes the ORIGINAL list and returns None; sorted() leaves the original UNTOUCHED and returns a new list',
      'append() vs extend(): append([50,60]) adds ONE nested element [50,60]; extend([50,60]) adds TWO separate elements 50 and 60',
      'When looping with "if i%2==0", remember this checks the INDEX, not necessarily the value stored there'
    ],
    bestPractices: [
      'Always state clearly whether a list operation is in-place (mutates) or returns-a-new-list, in any "differentiate" answer',
      'For nested-list record questions (e.g. student record with a marks sub-list), carefully count index levels: outer index, then inner index',
      'When finding max/min/median manually (without built-ins), always sort first for median-type problems'
    ]
  },
  {
    chapter: 'Tuples and Dictionaries',
    formulae: [
      'tuple1 + tuple2 — concatenation; tuple.count(x), tuple.index(x), max(), min(), sum() all work on tuples',
      "dict.get(key) → None if key absent (no error); dict[key] → raises KeyError if key absent",
      "key in dict — checks membership among the dictionary's KEYS"
    ],
    logic: [
      'Tuples are IMMUTABLE and ORDERED (accessed by numeric index, like a list, but cannot be changed after creation)',
      'A single-element tuple NEEDS a trailing comma: (5,) is a tuple, but (5) is just the integer 5',
      'Dictionaries store KEY-VALUE pairs; values are looked up by a meaningful KEY rather than a numeric position',
      'del dict[key] removes that key-value pair entirely',
      'Because tuples are immutable, any apparent "change" (like x = x + (4,)) creates an entirely NEW tuple object — proved by id(x) changing'
    ],
    tips: [
      'Tuples > Lists when data must stay fixed/protected (e.g. coordinates) and can also be used as dictionary keys, unlike lists',
      'get() is the "safe" dictionary lookup (returns None if missing); dict[key] is "strict" (raises KeyError)',
      '"Lists and tuples are ordered" means elements keep a fixed position accessible by index — unlike a set'
    ],
    bestPractices: [
      'When a question gives (5) and asks why len() fails, always check first whether a trailing comma is missing',
      'For "when to use a tuple vs dictionary" answers, always tie the choice to: fixed+positional data → tuple; named/key-based lookup → dictionary',
      'Dictionary methods to know cold: keys(), values(), items(), get(), del'
    ]
  },
  {
    chapter: 'Societal Impact',
    formulae: [],
    logic: [
      'Digital Footprint: the trail of data created when a person uses the internet (browsing, posts, logins)',
      'Netizen: a responsible, active citizen of the internet/digital society',
      'Cyber crimes: Hacking (unauthorised system break-in) · Identity theft (impersonating someone using stolen/misused identity) · Cyber bullying (harassment online) · Plagiarism/Copyright infringement (using others\' work as your own without credit/permission) · Credit card fraud (fake rewards used to extract financial info)',
      'IT Act (India): gives legal recognition to electronic transactions and defines cyber offences and penalties',
      'Ethical response to finding someone else\'s exposed password/data: inform them — never use, share or exploit it'
    ],
    tips: [
      'A genuine apology is NEVER cyber bullying — threats, embarrassing posts and harassment ARE',
      'Rephrasing someone else\'s content in your own words WITHOUT citing the source is still plagiarism',
      'Leaving an account logged in and someone else misusing it = identity theft, even though no technical "hacking" occurred'
    ],
    bestPractices: [
      'For scenario-based ethics questions, always identify BOTH the correct term (hacking/plagiarism/identity theft/etc.) AND justify briefly with the scenario\'s specific detail',
      'Never recommend using, sharing, or exploiting someone else\'s accidentally-exposed credentials — the only correct action is to inform them',
      'Keep the Column-A/Column-B matching terms (Plagiarism, Hacking, Credit card fraud, Digital Footprint) crisply defined — a recurring 1-mark matching question'
    ]
  }
];
