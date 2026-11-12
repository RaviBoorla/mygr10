// ─── Grade XI ICSE (ISC) Computer Science revision notes ───────────────────────────
// screen-notes.js reads REVISION['XI ICSE Computer Science'] for Grade XI with the ICSE (ISC) syllabus selected.

REVISION['XI ICSE Computer Science'] = [
  {
    "chapter": "Number Systems",
    "formulae": [
      "Value of digit = digit × base^position (position 0 just left of the point, negative to the right)",
      "Bases: binary 2, octal 8, decimal 10, hexadecimal 16 (A–F = 10–15)",
      "Decimal → base b: integer by repeated ÷b (remainders upward); fraction by repeated ×b (integer parts downward)",
      "Octal ↔ binary: 3 bits per digit; hex ↔ binary: 4 bits per digit; group outward from the point",
      "1's complement = invert all bits; 2's complement = 1's complement + 1",
      "Binary addition: 1+1 = 0 carry 1; 1+1+1 = 1 carry 1"
    ],
    "logic": [
      "Every positional system is the same idea with a different base",
      "n bits represent 2ⁿ distinct values, 0 to 2ⁿ − 1 unsigned",
      "Subtraction A − B is done as A + (2's complement of B), discarding the end carry",
      "Some decimal fractions (like 0.1) never terminate in binary, so computers store approximations",
      "Convert between octal and hex through binary, never via decimal guesses"
    ],
    "tips": [
      "Pad groups with leading zeros on the left of the integer part and trailing zeros on the right of the fraction",
      "Check a conversion by converting back to decimal",
      "Remember to read remainders bottom-up but fraction digits top-down",
      "State the base as a subscript in every answer, e.g. (101)₂"
    ],
    "bestPractices": [
      "Show each division/multiplication step in a table",
      "Write the word size used for complements (e.g. 8-bit)",
      "Verify subtraction results by decimal arithmetic"
    ]
  },
  {
    "chapter": "Encodings",
    "formulae": [
      "Sign-magnitude: MSB = sign, rest = magnitude; range −(2ⁿ⁻¹ − 1) … +(2ⁿ⁻¹ − 1); two zeros",
      "2's complement range for n bits: −2ⁿ⁻¹ … 2ⁿ⁻¹ − 1 (8-bit: −128…127, 16-bit: −32768…32767)",
      "Negative in 2's complement = invert bits of |x| and add 1",
      "Floating point: value = ± mantissa × 2^exponent",
      "ASCII: 7-bit, 'A' = 65, 'a' = 97, '0' = 48; ISCII: 8-bit for Indian scripts",
      "Unicode code points U+0000…U+10FFFF; UTF-8 uses 1–4 bytes (ASCII range = 1 byte)"
    ],
    "logic": [
      "Computers store everything as bit patterns; the encoding decides what the pattern means",
      "2's complement lets one adder circuit do both addition and subtraction",
      "Overflow: same-sign operands producing an opposite-sign result",
      "Fixed point has constant precision but small range; floating point has huge range but limited precision",
      "Unicode separates the character's identity (code point) from its byte encoding (UTF-8/16/32)"
    ],
    "tips": [
      "The same bit pattern means different numbers in different schemes — always state the scheme",
      "Upper- and lower-case ASCII letters differ by exactly 32",
      "Do not confuse Unicode (character set) with UTF-8 (encoding)",
      "2's complement has one more negative value than positive"
    ],
    "bestPractices": [
      "Show the positive pattern first, then derive the negative form",
      "Write the word size explicitly",
      "Check by converting the final pattern back to decimal"
    ]
  },
  {
    "chapter": "Propositional Logic",
    "formulae": [
      "Connectives: ¬ (NOT), ∧ (AND), ∨ (OR), → (if…then), ↔ (if and only if)",
      "p → q is false only for p = T, q = F; p → q ≡ ¬p ∨ q",
      "p ↔ q ≡ (p → q) ∧ (q → p)",
      "Converse q → p; inverse ¬p → ¬q; contrapositive ¬q → ¬p (≡ original)",
      "De Morgan: ¬(p ∧ q) ≡ ¬p ∨ ¬q; ¬(p ∨ q) ≡ ¬p ∧ ¬q",
      "n variables → 2ⁿ truth-table rows"
    ],
    "logic": [
      "A proposition has a definite truth value; questions, commands and open sentences do not",
      "Tautology always true, contradiction always false, contingency mixed",
      "Two propositions are equivalent if their truth-table columns are identical",
      "Laws of logic (identity, domination, idempotent, complement, absorption, distributive) let you simplify without tables",
      "Converse and inverse are equivalent to each other, not to the original conditional"
    ],
    "tips": [
      "A false hypothesis makes p → q true (vacuous truth)",
      "Negation of 'all' is 'some … not'",
      "Do not confuse inverse with contrapositive",
      "List truth-table rows in a fixed order (TT, TF, FT, FF)"
    ],
    "bestPractices": [
      "Build truth tables column by column with intermediate sub-expressions",
      "Name each law when simplifying algebraically",
      "Define the propositions p, q before writing symbolic forms"
    ]
  },
  {
    "chapter": "Boolean Algebra and Logic Gates",
    "formulae": [
      "Identity: A + 0 = A, A·1 = A; Null: A + 1 = 1, A·0 = 0",
      "Complement: A + A′ = 1, A·A′ = 0; Involution: (A′)′ = A",
      "Absorption: A + AB = A, A(A + B) = A; also A + A′B = A + B",
      "De Morgan: (A + B)′ = A′B′, (AB)′ = A′ + B′",
      "Half adder: S = A ⊕ B, C = AB; Full adder: S = A ⊕ B ⊕ Cin, Cout = AB + Cin(A ⊕ B)",
      "Consensus: AB + A′C + BC = AB + A′C"
    ],
    "logic": [
      "Boolean algebra works on two values, 0 and 1, with OR (+), AND (·) and NOT (′)",
      "Duality: swapping + ↔ · and 0 ↔ 1 turns one valid law into another",
      "NAND and NOR are universal: any circuit can be built from only one of them",
      "A logic circuit is drawn directly from the expression: each operator becomes a gate",
      "Simplification reduces the number of gates, cost and delay"
    ],
    "tips": [
      "Distributive law also works as A + BC = (A + B)(A + C) — unlike ordinary algebra",
      "When complementing, complement every variable AND swap the operators",
      "XOR = AB′ + A′B; XNOR = AB + A′B′ — don't swap them",
      "Verify a simplification with a quick truth table"
    ],
    "bestPractices": [
      "Write the law name at each step",
      "Keep brackets when applying De Morgan to avoid precedence errors",
      "Label all gate inputs and outputs in circuit diagrams"
    ]
  },
  {
    "chapter": "Computer Hardware",
    "formulae": [
      "Von Neumann: stored-program — instructions and data share one memory and one bus",
      "CPU = ALU + Control Unit + registers",
      "PC: next instruction address; IR: current instruction; MAR: address to access; MDR: data to/from memory",
      "Hierarchy (fast → slow): registers → cache → RAM → secondary storage",
      "Address bus: unidirectional; data bus: bidirectional; control bus: control/timing signals",
      "n address lines address 2ⁿ locations"
    ],
    "logic": [
      "The instruction cycle (fetch–decode–execute) repeats for every instruction",
      "Cache works because of locality of reference",
      "RAM is volatile; ROM and secondary storage are non-volatile",
      "Input devices convert real-world data into digital form; output devices do the reverse",
      "The Von Neumann bottleneck arises from a single shared CPU–memory path"
    ],
    "tips": [
      "Do not confuse PC (an address) with IR (an instruction)",
      "Capacity grows and speed falls as you move down the hierarchy",
      "Bus width decides addressable memory (address bus) and word size moved per transfer (data bus)",
      "Scanner, microphone, mouse are input; printer, speaker, monitor are output"
    ],
    "bestPractices": [
      "Describe register transfers in the fetch step in order",
      "Give examples alongside definitions",
      "Use 2ⁿ to justify address-bus width answers"
    ]
  },
  {
    "chapter": "Algorithms and Problem Solving",
    "formulae": [
      "Algorithm properties: finiteness, definiteness, input, output, effectiveness",
      "Flowchart: oval = start/stop, rectangle = process, diamond = decision, parallelogram = I/O, arrow = flow",
      "Single loop over n → ~n steps (linear); nested n × n → ~n² steps (quadratic)",
      "Loop with i doubling up to n → about log₂n + 1 iterations",
      "Triangular nested loop (j ≤ i) → n(n + 1)/2 steps"
    ],
    "logic": [
      "Stepwise refinement: decompose a problem top-down until each step is trivial",
      "Pseudocode and flowcharts describe logic independent of any language",
      "Tracing with a table exposes off-by-one and logic errors",
      "Efficiency is judged by how step count grows with input size",
      "The dominant term decides growth; constants matter less for large n"
    ],
    "tips": [
      "Watch loop bounds: < vs ≤ changes the iteration count by one",
      "In a trace table, update variables in the exact order of statements",
      "Integer division drops the remainder — common in digit-extraction loops",
      "State the final value after the loop exits, not the last value inside it"
    ],
    "bestPractices": [
      "Use a column per variable in trace tables",
      "Number pseudocode steps and indent loop bodies",
      "Test the algorithm with edge cases (0, 1, negative, largest)"
    ]
  },
  {
    "chapter": "Objects and Classes",
    "formulae": [
      "Object = state (fields) + behaviour (methods); class = blueprint",
      "new ClassName() creates an object and returns a reference",
      ".java → javac → .class (bytecode) → JVM (interpreter + JIT) → execution",
      "Encapsulation: private data accessed through public methods",
      "Abstraction: expose what an object does, hide how",
      "Errors: compile-time (syntax/type), run-time (exceptions), logical (wrong output)"
    ],
    "logic": [
      "Each object has its own copy of instance variables",
      "Assigning one reference to another makes both refer to the same object",
      "Bytecode is platform independent; the JVM is platform specific",
      "The compiler catches syntax and access violations before the program runs",
      "Run-time errors like division by zero or null dereference are only detected during execution"
    ],
    "tips": [
      "Uninitialised instance fields get default values (0, false, null); local variables do not",
      "private members cannot be accessed from another class, even through an object",
      "Integer ÷ 0 throws an exception; double ÷ 0 gives Infinity",
      "File name must match the public class name"
    ],
    "bestPractices": [
      "Define terms then give a short Java example",
      "When tracing objects, draw boxes for objects and arrows for references",
      "Name the specific exception for run-time error answers"
    ]
  },
  {
    "chapter": "Primitive Values, Wrapper Classes, Types and Casting",
    "formulae": [
      "Sizes: byte 1, short 2, int 4, long 8, float 4, double 8, char 2 bytes; boolean true/false",
      "Widening order: byte → short → int → long → float → double (char → int)",
      "Narrowing needs a cast: (int) 9.7 = 9 (truncates)",
      "Integer.parseInt(s), Double.parseDouble(s), Integer.valueOf(s), String.valueOf(x)",
      "Autoboxing: Integer i = 5; Unboxing: int n = i;",
      "Literals: 10 (int), 10L (long), 2.5 (double), 2.5f (float), 'A' (char), true (boolean)"
    ],
    "logic": [
      "Java primitive sizes are fixed on all platforms",
      "In expressions, byte/short/char are promoted to int before arithmetic",
      "Integer overflow wraps around silently",
      "Wrapper classes let primitives be treated as objects and provide parse/conversion methods",
      "Floating-point values are approximations — avoid == comparisons on them"
    ],
    "tips": [
      "Compound assignment (+=) casts implicitly; plain assignment does not",
      "int × int overflows before being stored in a long",
      "A char in arithmetic becomes its Unicode/ASCII number",
      "Compare wrapper objects with equals(), not =="
    ],
    "bestPractices": [
      "State the promoted type of each expression",
      "Show the cast explicitly in narrowing answers",
      "Write char outputs without quotes and doubles with a decimal point"
    ]
  },
  {
    "chapter": "Variables, Expressions and Operators",
    "formulae": [
      "Arithmetic: + − * / %; int / int truncates; % sign follows the dividend",
      "Increment: x++ (use, then add) vs ++x (add, then use)",
      "Ternary: cond ? value1 : value2",
      "Bitwise: & | ^ ~ << >> >>> (>>> fills with zeros)",
      "Math: sqrt, pow, abs, max, min, round (long for double), ceil/floor (double), random() in [0, 1)",
      "Precedence (high → low): postfix ++/--, unary/prefix, * / %, + −, shifts, relational, ==/!=, &, ^, |, &&, ||, ?:, assignment"
    ],
    "logic": [
      "Identifiers: letters, digits, _, $; no leading digit; not a keyword; case sensitive",
      "Variables must be declared with a type and initialised before use (local variables)",
      "Operands are evaluated left to right, then operators by precedence",
      "&& and || short-circuit; & and | on booleans evaluate both sides",
      "+ with a String operand becomes concatenation from that point onward"
    ],
    "tips": [
      "Math.sqrt/pow/ceil/floor return double — output shows .0",
      "Math.round(−2.5) is −2, not −3",
      "x = x++ leaves x unchanged",
      "Write 1.0 * a / b or (double) a / b to avoid integer division"
    ],
    "bestPractices": [
      "Evaluate increment expressions one operand at a time, tracking the variable",
      "Use brackets in Java expressions to match the maths exactly",
      "State the data type of the result"
    ]
  },
  {
    "chapter": "Statements and Scope",
    "formulae": [
      "if / if-else / if-else-if ladder; else pairs with the nearest unmatched if",
      "switch works on int, char, String, enum (and their wrappers); missing break → fall-through",
      "for (init; condition; update) — entry controlled",
      "while (cond) entry controlled; do { } while (cond); exit controlled (runs ≥ 1 time)",
      "break exits the loop/switch; continue skips to the next iteration; labels target outer loops",
      "Scope: a variable is visible only within the block { } where it is declared"
    ],
    "logic": [
      "Choose for when the iteration count is known, while when it depends on a condition",
      "Nested loops: the inner loop completes fully for every outer iteration",
      "Patterns: outer loop = rows, inner loop = columns/items per row",
      "A stray semicolon after for(...) or if(...) creates an empty body",
      "Local variables die when their block ends; they must be initialised before use"
    ],
    "tips": [
      "Count iterations carefully at boundary values",
      "Fall-through can be intentional (grouping cases)",
      "Use braces to avoid the dangling-else trap",
      "A loop variable declared in the for header is not accessible after the loop"
    ],
    "bestPractices": [
      "Trace loops with a table of loop variable and output",
      "Indent nested blocks consistently",
      "State the output exactly, including spaces and line breaks"
    ]
  },
  {
    "chapter": "Methods and Constructors",
    "formulae": [
      "Syntax: modifier returnType name(type p1, type p2) { … return value; }",
      "Method signature = name + parameter list (number, types, order); return type is not part of it",
      "Constructor: same name as class, no return type, called by new",
      "this.x = x distinguishes the field from a same-named parameter; this(…) calls another constructor (first statement)",
      "static: one copy per class; instance: one copy per object",
      "Java is always pass-by-value (copies of primitives or of references)"
    ],
    "logic": [
      "Methods break a program into reusable, testable units",
      "Overloading is chosen at compile time from the argument types (exact match, then widening)",
      "A default constructor exists only when no constructor is written",
      "Changes to an object through a passed reference are visible to the caller; reassigning the parameter is not",
      "A return statement ends the method immediately"
    ],
    "tips": [
      "Overloads cannot differ only in return type",
      "A static method cannot use this or instance fields directly",
      "Shadowing: without this, x = x assigns the parameter to itself",
      "Constructors are not inherited and have no return type — writing void makes it an ordinary method"
    ],
    "bestPractices": [
      "Write the full method header in answers",
      "Trace calls by noting each parameter's value on entry",
      "Use meaningful names and comment each method's purpose"
    ]
  },
  {
    "chapter": "Arrays",
    "formulae": [
      "Declare/create: int[] a = new int[n]; or int[] a = {1, 2, 3};",
      "Indices 0 … a.length − 1; length is a field (no brackets)",
      "2D: int[][] m = new int[r][c]; m.length = rows, m[i].length = columns of row i",
      "Default values: 0, 0.0, false, '\\u0000', null",
      "Linear search ~n comparisons; binary search ~log₂n (sorted array only)",
      "Bubble: swap adjacent pairs; Selection: swap minimum into place; Insertion: shift larger elements and insert"
    ],
    "logic": [
      "An array is a fixed-size collection of elements of one type stored contiguously",
      "Array variables hold references; assignment shares the same array",
      "After pass k of bubble sort, the k largest elements are in their final places",
      "Matrix operations use nested loops — rows outside, columns inside",
      "Out-of-range indices are caught at run time (ArrayIndexOutOfBoundsException)"
    ],
    "tips": [
      "Use < a.length, not <= a.length, in loop conditions",
      "== on arrays compares references, not contents",
      "Binary search on unsorted data gives wrong results silently",
      "Reset accumulators inside the outer loop for row-wise sums"
    ],
    "bestPractices": [
      "Show the array after each pass in sorting questions",
      "Write lo, hi, mid in a table for binary search traces",
      "Use descriptive loop variables (row, col) for 2D work"
    ]
  },
  {
    "chapter": "Strings",
    "formulae": [
      "length(), charAt(i), substring(b, e) (e exclusive), indexOf/lastIndexOf (−1 if absent)",
      "equals / equalsIgnoreCase compare contents; == compares references",
      "compareTo: difference of first mismatching chars, or of lengths if one is a prefix; 0 if equal",
      "toUpperCase, toLowerCase, trim, replace, concat, split(regex) — all return new values",
      "Character: isLetter, isDigit, isLetterOrDigit, isWhitespace, isUpperCase, toUpperCase",
      "StringBuilder/StringBuffer: append, insert, reverse, deleteCharAt, setCharAt, toString"
    ],
    "logic": [
      "Strings are immutable objects; methods return new Strings",
      "Characters are indexed from 0 to length() − 1",
      "A char used with + and an int gives a number; with a String it concatenates",
      "Frequency counting uses an int[26] indexed by c − 'a'",
      "Palindrome: compare characters from both ends moving inward"
    ],
    "tips": [
      "Calling s.toUpperCase() without assigning the result changes nothing",
      "substring(3, 7) has 4 characters (7 − 3)",
      "split(\" \") on consecutive spaces yields empty strings",
      "charAt(length()) throws StringIndexOutOfBoundsException"
    ],
    "bestPractices": [
      "Show index positions when tracing string methods",
      "Use equals(), never ==, to compare string contents",
      "Handle case with toLowerCase()/equalsIgnoreCase before comparing"
    ]
  },
  {
    "chapter": "Recursion",
    "formulae": [
      "Recursive method = base case (direct answer) + recursive case (smaller sub-problem)",
      "fact(n) = n × fact(n − 1), fact(0) = fact(1) = 1",
      "fib(n) = fib(n − 1) + fib(n − 2), fib(0) = 0, fib(1) = 1",
      "gcd(a, b) = gcd(b, a % b), gcd(a, 0) = a",
      "power(b, e) = b × power(b, e − 1), power(b, 0) = 1",
      "digitSum(n) = n % 10 + digitSum(n / 10), digitSum(0) = 0"
    ],
    "logic": [
      "Each call gets its own stack frame with its own parameters and locals",
      "Statements before the recursive call run on the way down; statements after run while unwinding",
      "Every recursive call must move closer to the base case",
      "Missing/unreachable base case → StackOverflowError",
      "Tree recursion (two calls per level) can grow exponentially"
    ],
    "tips": [
      "Print-before-call gives descending order; print-after-call gives ascending order",
      "Trace using a call tree or stack diagram, then evaluate bottom-up",
      "Check the base case for 0, 1 and negative inputs",
      "Count calls carefully in tree recursion — don't count only distinct values"
    ],
    "bestPractices": [
      "Write the base case first in any recursive method",
      "Show the return value at each level when tracing",
      "State the recurrence before writing code"
    ]
  },
  {
    "chapter": "Input/Output and Exceptions",
    "formulae": [
      "import java.util.Scanner; Scanner sc = new Scanner(System.in);",
      "nextInt(), nextDouble(), nextBoolean(), next() (one token), nextLine() (rest of line)",
      "print (no newline), println (newline), printf(\"%d %.2f %s %c %n\", …)",
      "try { risky } catch (SpecificException e) { … } catch (Exception e) { … } finally { always }",
      "Checked: IOException, FileNotFoundException; unchecked: ArithmeticException, NullPointerException, ArrayIndexOutOfBoundsException, NumberFormatException"
    ],
    "logic": [
      "Input comes from System.in; output goes to System.out (and errors to System.err)",
      "Exceptions transfer control to the first matching catch; remaining try statements are skipped",
      "finally runs even when try contains return",
      "The compiler forces checked exceptions to be caught or declared with throws",
      "Exception handling separates error-handling code from normal logic"
    ],
    "tips": [
      "nextInt() followed by nextLine() returns an empty string",
      "Catch specific exceptions before general ones (Exception last)",
      "%5d pads on the left; %-5d pads on the right",
      "next() stops at whitespace — use nextLine() for names with spaces"
    ],
    "bestPractices": [
      "Prompt the user before each input",
      "Name the exact exception class in answers",
      "Show exact output including line breaks and spacing"
    ]
  },
  {
    "chapter": "Trends in Computing and Ethics",
    "formulae": [
      "AI: machines performing tasks needing human-like intelligence; ML learns patterns from data",
      "Cloud models: IaaS (infrastructure), PaaS (platform), SaaS (software)",
      "IoT: sensor-equipped devices connected to the Internet",
      "IPR: copyright (creative works), patent (inventions), trademark (brand marks)",
      "Licences: proprietary, freeware, shareware, open source (permissive e.g. MIT; copyleft e.g. GPL)",
      "Threats: phishing, malware, ransomware, spyware, identity theft"
    ],
    "logic": [
      "Emerging technologies bring benefits along with privacy and security risks",
      "Ethical computing includes respecting IPR, privacy and avoiding plagiarism",
      "A digital footprint is persistent — online actions can be traced later",
      "AI systems can reflect bias in their training data",
      "Responsible e-waste disposal protects health and recovers materials"
    ],
    "tips": [
      "Copyright protects expression, not ideas",
      "Open source does not always mean 'no conditions' — read the licence",
      "Firewall filters traffic; antivirus detects malware — they are different",
      "Phishing relies on deception, not technical hacking"
    ],
    "bestPractices": [
      "Define each term, then give a real-world example",
      "Pair every threat with a specific safeguard",
      "Structure long answers as numbered points"
    ]
  }
];
