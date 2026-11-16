// ─── Grade IX ICSE Computer Science revision notes ───────────────────────────
REVISION['IX ICSE Computer Science'] = [
  {
    "chapter": "Java Fundamentals",
    "formulae": [
      "A Java program starts with: public class ClassName { public static void main(String[] args) { ... } }",
      "Class name must match the filename exactly (case-sensitive): class Hello must be in Hello.java",
      "Every statement ends with a semicolon; blocks are delimited by { }",
      "System.out.println(expr) prints expr followed by a newline; System.out.print(expr) does not add a newline",
      "Single-line comment: // text; multi-line comment: /* text */; documentation comment: /** text */"
    ],
    "logic": [
      "Java is a compiled-then-interpreted language: javac compiles source (.java) to bytecode (.class); the JVM interprets the bytecode — this enables platform independence ('Write Once, Run Anywhere')",
      "Java is strongly typed: every variable must be declared with a type before use, and type mismatches cause compile-time errors",
      "The main method is the program's entry point; execution begins at its first statement and proceeds sequentially unless a control structure alters flow",
      "Java is case-sensitive: int and Int are different; System and system are different",
      "An identifier must start with a letter, underscore, or dollar sign; subsequent characters may include digits; keywords (int, class, while) cannot be used as identifiers"
    ],
    "tips": [
      "In exam questions, always check whether the class name matches the filename — a mismatch causes a compile error",
      "Distinguish between compile-time errors (syntax mistakes caught by javac) and run-time errors (exceptions thrown during execution)",
      "Remember that Java is object-oriented: even the simplest program is wrapped in a class",
      "When tracing program output, process statements line by line and track variable values in a table"
    ],
    "bestPractices": [
      "Always write the full class and main method scaffold before filling in the logic in any coding answer",
      "Use meaningful identifier names (count, total) rather than single letters (except loop counters i, j)",
      "Comment complex sections of code to show the examiner you understand the logic, not just the syntax"
    ]
  },
  {
    "chapter": "Data Types, Variables and Operators",
    "formulae": [
      "Primitive types: byte (8-bit, −128 to 127), short (16-bit), int (32-bit, −2,147,483,648 to 2,147,483,647), long (64-bit), float (32-bit), double (64-bit), char (16-bit Unicode), boolean (true/false)",
      "Variable declaration and initialisation: int age = 17; double price = 99.5; char grade = 'A'; boolean pass = true;",
      "Arithmetic operators: + − * / % (modulo); integer division truncates: 7 / 2 = 3 (not 3.5)",
      "Relational operators: == != < > <= >= ; return a boolean",
      "Logical operators: && (AND), || (OR), ! (NOT); short-circuit evaluation applies — && stops at first false, || stops at first true"
    ],
    "logic": [
      "Integer arithmetic uses integer division; to get a decimal result, cast one operand to double: (double) 7 / 2 → 3.5",
      "Assignment operator = copies the value on the right into the variable on the left; == tests equality; confusing them is a common bug",
      "char values are stored as 16-bit integers (Unicode code points); 'A' has value 65, so 'A' + 1 gives 66, and (char)('A' + 1) gives 'B'",
      "Compound assignment operators (+=, -=, *=, /=, %=) are shorthand: x += 3 means x = x + 3",
      "String concatenation with + converts non-string operands to strings: \"Age: \" + 17 → \"Age: 17\"; but 1 + 2 + \"x\" → \"3x\" while \"x\" + 1 + 2 → \"x12\""
    ],
    "tips": [
      "Exam questions often test integer vs floating-point division — always check the declared types of both operands",
      "Remember operator precedence: * / % before + − before relational before logical; use parentheses when in doubt",
      "For char arithmetic, cast the result back to char to get a character: (char)('a' + 3) → 'd'",
      "Watch for String + number ambiguity — evaluation is left-to-right, so parentheses change the result"
    ],
    "bestPractices": [
      "Declare and initialise variables at the top of a method so their types and initial values are clear",
      "Use (double) cast explicitly when you need floating-point division of two integer variables",
      "Trace through expressions involving mixed types step by step in your answer to show type promotion"
    ]
  },
  {
    "chapter": "Input in Java (Scanner)",
    "formulae": [
      "Import statement: import java.util.Scanner; (placed before the class declaration)",
      "Create a Scanner: Scanner sc = new Scanner(System.in);",
      "Read an integer: int n = sc.nextInt();",
      "Read a double: double d = sc.nextDouble();",
      "Read a word (no spaces): String s = sc.next(); Read a full line: String line = sc.nextLine();"
    ],
    "logic": [
      "Scanner reads from a stream (System.in); each call to nextInt() or nextDouble() reads the next token and advances the read position",
      "After calling nextInt() or nextDouble(), the newline character left in the buffer causes the next nextLine() to read an empty string — fix by calling sc.nextLine() to consume the leftover newline before reading a string",
      "sc.hasNextInt() returns true if the next token is an integer — useful for input validation loops",
      "Scanner is a class in java.util; you must import it or refer to it as java.util.Scanner without the import",
      "System.in is the standard input stream; Scanner wraps it to provide convenient token-based reading"
    ],
    "tips": [
      "Always write the import statement — forgetting it causes a compile error that is easy to avoid",
      "In exam programs, declare the Scanner object at the start of main before any input prompts",
      "Be careful mixing nextInt()/nextDouble() with nextLine() — the leftover-newline bug is a classic exam trap",
      "For reading multiple values on separate lines, a separate nextInt() call per line works cleanly"
    ],
    "bestPractices": [
      "Print a prompt (System.out.print(\"Enter a number: \")) before every Scanner read so the user knows what to enter",
      "Declare the Scanner as sc consistently throughout the program",
      "Close the scanner at the end of the program with sc.close() to release the resource"
    ]
  },
  {
    "chapter": "Mathematical Library Methods",
    "formulae": [
      "Math.pow(x, n) returns xⁿ as a double: Math.pow(2, 10) → 1024.0",
      "Math.sqrt(x) returns the square root of x as a double: Math.sqrt(25.0) → 5.0",
      "Math.abs(x) returns the absolute value of x (works for int, long, float, double)",
      "Math.round(x) rounds a float/double to the nearest long (or int for float): Math.round(3.6) → 4",
      "Math.max(a, b) returns the larger; Math.min(a, b) returns the smaller of two values"
    ],
    "logic": [
      "All Math methods are static — call them as Math.methodName() without creating a Math object",
      "Math.pow(x, 0.5) is equivalent to Math.sqrt(x) — both return the square root as a double",
      "Math.random() returns a pseudo-random double in [0.0, 1.0); to get a random integer in [0, n−1] use (int)(Math.random() * n)",
      "Math.floor(x) rounds down toward negative infinity; Math.ceil(x) rounds up — these differ from (int) cast for negative numbers",
      "Integer overflow can occur with Math.abs(Integer.MIN_VALUE) because the result cannot be represented as an int — use long for safety"
    ],
    "tips": [
      "Exam questions often ask for the return type of a Math method — sqrt, pow, random all return double",
      "Cast the result of Math.pow or Math.sqrt to int when you need an integer result: (int) Math.sqrt(144) → 12",
      "Remember that Math.round(3.5) → 4 and Math.round(-3.5) → -3 (rounds toward positive infinity for .5 cases)",
      "Do not confuse Math.round (closest integer) with Math.floor (round down) in explanation questions"
    ],
    "bestPractices": [
      "Always cast Math.pow result to int when using it as an integer (e.g. digit count, digit power)",
      "State the return type alongside the method signature when explaining a Math method in an exam",
      "Use Math.abs when computing differences to avoid checking which operand is larger"
    ]
  },
  {
    "chapter": "Conditional Constructs (if-else, switch)",
    "formulae": [
      "if (condition) { ... } else if (condition) { ... } else { ... }",
      "Ternary operator: result = (condition) ? valueIfTrue : valueIfFalse;",
      "switch (expression) { case value1: ...; break; case value2: ...; break; default: ...; }",
      "switch expression must be of type byte, short, char, int, or String (Java 7+); cannot be float or double",
      "Without break, execution falls through to the next case"
    ],
    "logic": [
      "An if-else chain evaluates conditions top to bottom and executes the first true branch; subsequent branches are skipped",
      "Switch-case works by jumping directly to the matching case label — it is more efficient than a long if-else chain when testing a single variable against many exact values",
      "Fall-through is a common bug: if break is omitted, execution continues into the next case body even if that case's label did not match",
      "Nested if-else can model multi-condition logic, but deep nesting reduces readability — use logical operators (&&, ||) to flatten conditions",
      "The else clause catches all conditions not covered by earlier if / else-if — it must be the last in the chain"
    ],
    "tips": [
      "In exam dry-run questions, trace every branch carefully and note which break statements stop execution",
      "The ternary operator is a common syntax question — know that it is an expression, not a statement",
      "switch cannot test ranges (x > 10) — use if-else for range conditions",
      "Always include a default case in switch — the examiner often asks what happens when no case matches"
    ],
    "bestPractices": [
      "Always write break at the end of every case in a switch unless intentional fall-through is documented with a comment",
      "Use switch-case when comparing a single variable to multiple specific values; use if-else for range or compound conditions",
      "Indent nested if-else clearly so the matching if and else are visually aligned"
    ]
  },
  {
    "chapter": "Iterative Constructs (for, while, do-while)",
    "formulae": [
      "for (initialisation; condition; update) { body } — compact, all three parts in the header",
      "while (condition) { body } — condition tested before each iteration; may execute zero times",
      "do { body } while (condition); — body executes at least once before condition is tested",
      "break exits the nearest enclosing loop immediately; continue skips the remaining body and jumps to the update/condition",
      "An infinite loop: while (true) { ... } — must have a break or return inside to terminate"
    ],
    "logic": [
      "for loops are preferred when the number of iterations is known in advance; while loops are preferred when the termination condition depends on input or computation",
      "do-while is used when the loop body must execute at least once — e.g. menu loops that must show the menu before asking for a choice",
      "Off-by-one errors are the most common loop bug: check whether the loop condition uses < or <= and whether the counter starts at 0 or 1",
      "Every loop must have a progress condition that guarantees eventual termination — an infinite loop without a break is a logic error",
      "Variable scope: a variable declared inside the for initialisation (for (int i = ...)) exists only within that for loop"
    ],
    "tips": [
      "Trace loop execution by maintaining a table of variable values after each iteration — this is required for dry-run questions",
      "Check the initialisation value, condition, and update expression separately to predict the total number of iterations",
      "do-while vs while: if the loop body must run at least once regardless of the condition, choose do-while",
      "break inside a switch inside a loop exits only the switch, not the loop — a common misconception to avoid"
    ],
    "bestPractices": [
      "Initialise loop control variables (accumulator sum = 0, counter count = 0) immediately before the loop",
      "Use for loops for counting iterations and while loops for event-driven termination (e.g. read until -1)",
      "After writing a loop, manually trace two or three iterations to verify the logic before submitting"
    ]
  },
  {
    "chapter": "Nested Loops",
    "formulae": [
      "A nested loop is a loop inside another loop: for (int i = 1; i <= rows; i++) { for (int j = 1; j <= cols; j++) { ... } }",
      "Total iterations of a nested loop = (outer iterations) × (inner iterations per outer cycle)",
      "To print a right-angled triangle of n rows: outer loop i from 1 to n; inner loop j from 1 to i; print '*' for each j",
      "To print a number pyramid: outer loop i (rows); inner loop j (columns up to i); print i (the row number)",
      "Pattern printing: control the inner loop's range based on the outer loop variable to vary the number of elements per row"
    ],
    "logic": [
      "The outer loop controls rows; the inner loop controls columns within each row — always identify which variable represents which dimension",
      "After the inner loop completes for one outer iteration, print a newline (System.out.println()) to move to the next row",
      "For a decreasing triangle (widest at top), reverse the inner loop limit: inner runs from i down to 1, or from 1 to (n − i + 1)",
      "Nested loops for multiplication tables: outer loop for multiplier, inner loop for multiplicand 1 to 10, print product at each step",
      "Complexity: O(n²) for a standard nested loop of depth 2 with both loops running up to n — important for understanding efficiency"
    ],
    "tips": [
      "Trace nested loops by drawing a table with outer-loop variable in one column and inner-loop variable in another",
      "The number of stars printed in a triangle pattern equals n*(n+1)/2 — verify your loop logic against this formula",
      "Identify the pattern's structure (number of spaces, symbols per row) before writing any code",
      "Exam questions often mix spaces and stars — handle spaces first, then print the symbol"
    ],
    "bestPractices": [
      "Draw the expected output on paper first, then derive the loop bounds from the pattern",
      "Use i for the outer (row) variable and j for the inner (column) variable consistently",
      "Print a newline after the inner loop closes, never inside it, to avoid extra blank lines"
    ]
  },
  {
    "chapter": "Elementary Concepts of Objects and Classes",
    "formulae": [
      "Class definition: class ClassName { // fields (variables) and methods }",
      "Object creation: ClassName obj = new ClassName(); (or with constructor arguments)",
      "Constructor: a special method with the same name as the class and no return type — called automatically when an object is created",
      "this keyword refers to the current object instance: this.length = length; avoids ambiguity when parameter names shadow field names",
      "Access modifiers: private (accessible only within the class), public (accessible from anywhere)"
    ],
    "logic": [
      "A class is a blueprint (template); an object is a concrete instance of that blueprint with its own set of field values",
      "Encapsulation: fields are declared private and accessed through public getter/setter methods — this hides internal implementation",
      "A constructor with the same signature as the default constructor replaces it; a no-argument constructor must be explicitly written if another constructor is defined",
      "Methods define behaviour; fields define state — together they model a real-world entity",
      "Multiple objects of the same class can be created; each has its own copy of instance fields but shares the same method definitions"
    ],
    "tips": [
      "The constructor has no return type — not even void; confusing it with a method that returns void is a common syntax error",
      "Distinguish between instance variables (declared outside methods, inside the class) and local variables (declared inside a method)",
      "this.fieldName = paramName is the standard pattern when constructor parameter names match field names",
      "Exam questions often ask you to write a class with specific fields, a constructor, getters, and a display method — know this pattern thoroughly"
    ],
    "bestPractices": [
      "Declare all instance variables at the top of the class before the constructor and methods",
      "Make all instance variables private and provide public getter and setter methods",
      "Write the constructor immediately after field declarations, before any other methods"
    ]
  }
];
