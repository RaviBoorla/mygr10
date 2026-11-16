// ─── Grade XII ICSE (ISC) Computer Science revision notes ─────────────────
// ISC uses Java (not Python). screen-notes.js reads this when grade==='XII' && subject==='Computer Science' in the ISC stream.
REVISION['XII ICSE Computer Science'] = [
  {
    "chapter": "Boolean Algebra",
    "formulae": [
      "De Morgan's Law 1: (A.B)' = A' + B'   (NAND equivalent)",
      "De Morgan's Law 2: (A+B)' = A'.B'   (NOR equivalent)",
      "SOP (Sum of Products): OR of AND terms, one minterm per 1-cell in truth table",
      "POS (Product of Sums): AND of OR terms, one maxterm per 0-cell in truth table",
      "K-map grouping: groups must be powers of 2 (1,2,4,8); wrap around edges; largest group first",
      "Canonical SOP: each term contains all variables; canonical POS: each factor contains all variables",
      "Identity laws: A+0=A, A.1=A; Complement laws: A+A'=1, A.A'=0; Idempotent: A+A=A, A.A=A",
      "Absorption: A+AB=A, A(A+B)=A; Consensus: AB+A'C+BC=AB+A'C"
    ],
    "logic": [
      "Boolean algebra has only two values (0 and 1) and uses AND, OR, NOT as the three basic operations",
      "Any Boolean function can be expressed in canonical SOP or POS form — both are unique for a given truth table",
      "K-maps reduce Boolean expressions by visually grouping adjacent 1s (for SOP) or 0s (for POS) that differ in one variable",
      "Duality principle: every Boolean identity has a dual obtained by swapping AND/OR and 0/1",
      "De Morgan's laws allow conversion between NAND/NOR forms and AND-OR forms, enabling universal gate implementation"
    ],
    "tips": [
      "In ISC, always write both SOP and POS forms when asked to simplify — state which form is minimal",
      "Draw the K-map neatly with Gray-code column/row headers; examiner deducts marks for wrong adjacency groupings",
      "When applying De Morgan's law step-by-step, complement the entire expression and then apply variable by variable",
      "Show the truth table first for any expression before attempting K-map; verify your simplified expression matches"
    ],
    "bestPractices": [
      "Label K-map cells with minterms/maxterms and circle groups clearly, stating the resulting term for each group",
      "Write each Boolean law used by name during simplification (e.g., 'By De Morgan's Law:', 'By Absorption:')",
      "Verify your final simplified expression by substituting a few input combinations and checking against the truth table"
    ]
  },
  {
    "chapter": "Logic Gates and Circuits",
    "formulae": [
      "AND gate: Y = A.B  (Y=1 only when all inputs=1)",
      "OR gate: Y = A+B  (Y=0 only when all inputs=0)",
      "NOT gate: Y = A'  (Y = complement of A)",
      "NAND gate: Y = (A.B)'  — universal gate, can implement AND, OR, NOT",
      "NOR gate: Y = (A+B)'  — universal gate, can implement AND, OR, NOT",
      "XOR gate: Y = A⊕B = A'B + AB'  (Y=1 when inputs differ)",
      "XNOR gate: Y = (A⊕B)' = AB + A'B'  (Y=1 when inputs are equal)",
      "Half adder: Sum = A⊕B, Carry = A.B;  Full adder: Sum = A⊕B⊕Cin, Cout = AB+BCin+ACin"
    ],
    "logic": [
      "Any combinational logic circuit can be built using only NAND gates or only NOR gates (universal property)",
      "A combinational circuit's output depends only on current inputs; a sequential circuit's output depends on inputs and state",
      "To convert an AND-OR circuit to NAND-NAND: replace every AND with NAND and every OR with NAND (after drawing the two-level form)",
      "A multiplexer (data selector) uses control lines to route one of 2ⁿ inputs to output; a decoder activates one of 2ⁿ output lines",
      "Propagation delay in cascaded gates adds up; designers minimise levels to reduce delay in real circuits"
    ],
    "tips": [
      "ISC asks to draw the logic circuit for a given Boolean expression — redraw neatly with proper gate symbols",
      "When simplifying using NAND gates, first simplify the Boolean expression, then replace AND-OR with NAND-NAND",
      "For half/full adder questions, always give both the Boolean expressions AND the circuit diagram",
      "Verify your circuit by tracing at least two input combinations through the gates and comparing to the truth table"
    ],
    "bestPractices": [
      "Draw gates from left (inputs) to right (output) with clear wire intersections vs. connections (use a dot for junction)",
      "Label all intermediate signals (e.g., P=A.B, Q=C.D) to make circuit tracing unambiguous for the examiner",
      "State the number of gates used when asked to implement using NAND/NOR; minimise gate count"
    ]
  },
  {
    "chapter": "Object-Oriented Programming",
    "formulae": [
      "Four pillars: Encapsulation, Abstraction, Inheritance, Polymorphism",
      "Encapsulation: binding data (fields) and methods into a class; achieved via access modifiers (private, protected, public)",
      "Abstraction: hiding implementation details, exposing only interface (abstract classes and interfaces in Java)",
      "Inheritance: child class acquires fields and methods of parent class; keyword: extends",
      "Polymorphism: same method name, different behaviour — compile-time (overloading) and run-time (overriding)",
      "Constructor: same name as class, no return type; default constructor provided if none defined",
      "Object: instance of a class; created with new keyword; stored on heap",
      "this keyword: refers to current object; super keyword: refers to immediate parent class"
    ],
    "logic": [
      "A class is a blueprint (template); an object is a concrete instance with its own state (field values)",
      "Encapsulation protects data integrity by making fields private and providing getters/setters for controlled access",
      "Method overloading (same name, different parameters) is resolved at compile time — this is static/compile-time polymorphism",
      "Method overriding (same signature in subclass) is resolved at run time — this is dynamic/run-time polymorphism",
      "Abstraction separates 'what an object does' from 'how it does it', making code maintainable and modular"
    ],
    "tips": [
      "ISC theory questions often ask to distinguish OOP concepts — learn crisp one-sentence definitions with a Java example for each",
      "When explaining polymorphism, clearly separate overloading (compile-time) from overriding (run-time) with code snippets",
      "Access modifier rules: private (class only), default (package), protected (package + subclass), public (everywhere)",
      "The 'is-a' relationship justifies inheritance; 'has-a' justifies composition — state which applies in design questions"
    ],
    "bestPractices": [
      "Always declare instance variables private and provide public getters/setters — this demonstrates encapsulation in ISC programs",
      "Include a parameterised constructor alongside the default constructor so objects can be initialised with values at creation",
      "Use meaningful class and method names (PascalCase for classes, camelCase for methods) to earn presentation marks"
    ]
  },
  {
    "chapter": "Classes and Objects in Java",
    "formulae": [
      "Class declaration: public class ClassName { fields; constructors; methods; }",
      "Object creation: ClassName obj = new ClassName(args);",
      "Constructor chaining with this(): this(arg1, arg2) must be first statement in constructor",
      "Static member: belongs to class, not instance; accessed as ClassName.member",
      "final variable: value cannot change after assignment; final method: cannot be overridden; final class: cannot be extended",
      "Wrapper classes: int→Integer, double→Double, char→Character; autoboxing converts primitives automatically",
      "Math class methods (static): Math.pow(x,n), Math.sqrt(x), Math.abs(x), Math.ceil(x), Math.floor(x), Math.round(x)",
      "Scanner input: Scanner sc = new Scanner(System.in); sc.nextInt(), sc.nextDouble(), sc.next(), sc.nextLine()"
    ],
    "logic": [
      "Java is strictly pass-by-value: primitives pass their value; objects pass a copy of the reference (not the object itself)",
      "Memory: primitives and references live on the stack; actual objects live on the heap; garbage collector reclaims unused heap objects",
      "Static methods cannot access instance (non-static) fields or methods directly — they have no 'this' reference",
      "Method overloading resolution uses the most specific matching signature; widening conversion is used if no exact match exists",
      "Constructors are not inherited; if a parent class has only a parameterised constructor, the child must call super(...) explicitly"
    ],
    "tips": [
      "ISC programs are marked for correct class structure, field declarations, constructor, and method signatures — write each part clearly",
      "Show the complete class including import statements; for Scanner-based programs always import java.util.Scanner",
      "If the question says 'write a class', include a main() method demonstrating object creation unless told otherwise",
      "Common ISC pattern: a class with two overloaded constructors, a display() method, and a compute() method — practise this template"
    ],
    "bestPractices": [
      "Declare all instance variables at the top of the class before constructors and methods for readability",
      "Always initialise variables — Java does not auto-initialise local variables; uninitialized locals cause compile errors",
      "Close Scanner objects with sc.close() at the end of main() to avoid resource-leak warnings"
    ]
  },
  {
    "chapter": "Inheritance in Java",
    "formulae": [
      "Syntax: class Child extends Parent { ... }",
      "super() — calls parent constructor; must be first statement; inserted automatically if omitted (calls no-arg parent constructor)",
      "super.method() — calls overridden parent method from child",
      "Method overriding rule: same name, same return type, same parameters; @Override annotation is recommended",
      "Covariant return type: child override may return a subtype of the parent method's return type",
      "instanceof operator: (obj instanceof ClassName) returns true if obj is an instance of ClassName or its subclass",
      "Single inheritance only in Java (a class extends one class); multiple inheritance via interfaces",
      "Object class (java.lang.Object) is the root of all Java class hierarchies"
    ],
    "logic": [
      "A subclass inherits all non-private members; private members exist in the subclass object but are not directly accessible",
      "Constructor chaining: child constructor calls parent constructor (via super or implicit call) before executing its own body",
      "Runtime polymorphism works because a parent-type reference can hold a child-type object; method called is determined by actual object type",
      "Upcasting (child→parent reference) is implicit and safe; downcasting (parent→child reference) requires explicit cast and may throw ClassCastException",
      "Abstract class: contains at least one abstract method; cannot be instantiated; subclass must implement all abstract methods or be abstract itself"
    ],
    "tips": [
      "ISC often asks to write a child class that extends a given parent — always call super(args) if the parent has only a parameterised constructor",
      "When overriding, the child method must not have a more restrictive access modifier than the parent method",
      "Distinguish between method overloading (in same class) and overriding (in subclass) — a common ISC theory question",
      "For multilevel inheritance (A→B→C), trace the constructor call chain from C up to A to predict output questions"
    ],
    "bestPractices": [
      "Always use the @Override annotation when overriding a method so the compiler catches signature mismatches",
      "Call super() as the very first line in the child constructor; never call super() in a non-constructor method (use super.methodName() instead)",
      "Avoid accessing parent private fields directly in child class; use protected or getter methods provided by the parent"
    ]
  },
  {
    "chapter": "Arrays in Java",
    "formulae": [
      "Declaration and creation: int[] arr = new int[n];  (default value 0 for int, false for boolean, null for objects)",
      "Array literal: int[] arr = {1, 2, 3, 4, 5};",
      "Length: arr.length  (field, not method; note: String uses length() method)",
      "2-D array: int[][] mat = new int[rows][cols];  element access: mat[i][j]",
      "Jagged array: int[][] jag = new int[3][];  each row can have different length",
      "Array copying: System.arraycopy(src, srcPos, dest, destPos, length);  or use Arrays.copyOf()",
      "Arrays class (java.util.Arrays): Arrays.sort(arr), Arrays.fill(arr, val), Arrays.toString(arr)",
      "Linear search: O(n) worst case; Binary search on sorted array: O(log n) worst case"
    ],
    "logic": [
      "An array is a contiguous block of memory; index is the offset from the base address; access is O(1)",
      "Java arrays are objects on the heap; the array variable holds a reference to this object",
      "When an array is passed to a method, changes to elements inside the method are reflected in the caller (reference is passed by value)",
      "A 2-D array in Java is an array of arrays (array of row-references), so rows can be different lengths (jagged array)",
      "ArrayIndexOutOfBoundsException occurs when accessing index < 0 or >= length; always validate indices in production code"
    ],
    "tips": [
      "ISC programs frequently ask for matrix operations (transpose, multiply, sort rows) — write clear nested loops with proper index comments",
      "When searching or sorting, state the algorithm's time complexity in a comment; examiners award marks for complexity awareness",
      "For 2-D array output, use printf or formatted print to align columns; misaligned output loses presentation marks",
      "Common mistake: using arr.length() instead of arr.length — arrays have a field, Strings have a method"
    ],
    "bestPractices": [
      "Initialise arrays immediately after declaration; for input-filled arrays, include boundary checks before accessing elements",
      "Use enhanced for-each loop (for(int x : arr)) for read-only traversal; use indexed loop when you need the index or modify elements",
      "Always print array contents in a readable format during testing (use Arrays.toString() or a loop) to verify correctness"
    ]
  },
  {
    "chapter": "String Handling in Java",
    "formulae": [
      "String is immutable in Java; every modification creates a new String object",
      "String methods: length(), charAt(i), indexOf(ch), substring(start), substring(start,end), toLowerCase(), toUpperCase()",
      "String methods: trim(), replace(old,new), concat(str), compareTo(str), equals(str), equalsIgnoreCase(str)",
      "String.valueOf(x) converts int/char/double to String; Integer.parseInt(s) converts String to int",
      "StringBuilder/StringBuffer: mutable string; methods: append(), insert(), delete(), reverse(), toString()",
      "charAt(i) returns char at index i (0-based); last char at index length()-1",
      "String comparison: equals() for content; == compares references (may give wrong result with 'new String()')",
      "Character class: Character.isDigit(c), Character.isLetter(c), Character.isUpperCase(c), Character.toLowerCase(c)"
    ],
    "logic": [
      "String immutability means every concatenation in a loop (using +) creates a new object — use StringBuilder for efficiency",
      "String pool: string literals are interned (shared); new String(\"abc\") creates a heap object outside the pool",
      "compareTo() returns 0 if equal, negative if calling string < argument, positive if calling string > argument (lexicographic)",
      "substring(start, end) returns characters from index start (inclusive) to end (exclusive) — a common off-by-one error source",
      "charAt returns a char (primitive); wrapping in Character.toString() or string concatenation converts it to a one-character String"
    ],
    "tips": [
      "ISC programs often involve character-by-character processing — use a for loop with charAt(i) and Character class methods",
      "When reversing a string, use a StringBuilder and call reverse(), or loop from length()-1 to 0 appending chars",
      "For palindrome check, compare the string with its reverse; for anagram, sort both strings and compare with equals()",
      "Distinguish String (immutable, in java.lang) from StringBuilder (mutable, in java.lang) — use StringBuilder when building strings in loops"
    ],
    "bestPractices": [
      "Use equals() (not ==) for all String content comparisons; equalsIgnoreCase() for case-insensitive comparison",
      "Prefer StringBuilder over repeated + concatenation inside loops for better performance and clarity",
      "Always validate that a string is non-null and non-empty before calling methods like charAt(0) to avoid exceptions"
    ]
  },
  {
    "chapter": "Data Structures: Stack and Queue",
    "formulae": [
      "Stack: LIFO — Last In First Out; operations: push (add to top), pop (remove from top), peek/top (view top without removing)",
      "Queue: FIFO — First In First Out; operations: enqueue (add to rear), dequeue (remove from front), peek (view front)",
      "Stack using array: top starts at -1; push: arr[++top]=x; pop: return arr[top--]; isEmpty: top==-1; isFull: top==MAX-1",
      "Queue using array: front=0, rear=-1; enqueue: arr[++rear]=x; dequeue: return arr[front++]; isEmpty: front>rear",
      "Time complexity: push O(1), pop O(1), peek O(1) for both Stack and Queue",
      "Space complexity: O(n) for n elements",
      "Stack application: expression evaluation, balanced parentheses, function call stack, undo operations",
      "Queue application: scheduling, BFS traversal, printer spooling, producer-consumer buffer"
    ],
    "logic": [
      "A stack enforces access only from one end (the top); this restriction makes it ideal for problems with LIFO ordering (e.g., recursion, brackets)",
      "A queue enforces addition at one end (rear) and removal at the other (front); this ensures fairness in ordering",
      "An array-based queue suffers from the 'false full' problem when elements are dequeued — a circular queue resolves this",
      "Circular queue uses modular arithmetic: rear = (rear+1)%MAX; front = (front+1)%MAX; full when (rear+1)%MAX == front",
      "In Java, java.util.Stack extends Vector; java.util.LinkedList implements Deque and can serve as both stack and queue"
    ],
    "tips": [
      "ISC programs often ask to implement a stack/queue using an array — always include isFull() and isEmpty() checks with appropriate error messages",
      "For program output questions involving stack/queue, trace operations one by one and show intermediate states of the array",
      "When asked to convert infix to postfix, demonstrate the stack state at each step — this is a common ISC long-answer question",
      "Circular queue wrap-around condition is frequently tested; clearly state: full when (rear+1)%MAX == front, empty when front == -1"
    ],
    "bestPractices": [
      "Always check isEmpty() before pop/dequeue and isFull() before push/enqueue; handle these edge cases with a printed message rather than crashing",
      "Name your variables intuitively: top (stack), front/rear (queue) — examiners follow your logic by variable names",
      "Include a display() method in your Stack/Queue class to print current contents during tracing; it also demonstrates understanding"
    ]
  },
  {
    "chapter": "Data Structures: Linked Lists and Trees",
    "formulae": [
      "Linked list node: class Node { int data; Node next; }  (singly linked); add Node prev for doubly linked",
      "Insertion at beginning: newNode.next = head; head = newNode;  — O(1)",
      "Insertion at end: traverse to last node, lastNode.next = newNode;  — O(n)",
      "Deletion: set predecessor's next to skip the target node; isolated node gets garbage collected  — O(n) with traversal",
      "Binary tree node: class Node { int data; Node left; Node right; }",
      "Tree traversals: Inorder (Left-Root-Right), Preorder (Root-Left-Right), Postorder (Left-Root-Right → Root last)",
      "Binary Search Tree (BST) property: left subtree < root < right subtree for every node",
      "BST search: O(log n) average, O(n) worst case (skewed tree)"
    ],
    "logic": [
      "A linked list stores elements in non-contiguous memory; each node holds data and a reference to the next node",
      "Linked lists offer O(1) insertion/deletion given a reference to the position, but O(n) random access (unlike arrays)",
      "A tree is a hierarchical data structure; a binary tree has at most 2 children per node",
      "Inorder traversal of a BST visits nodes in sorted (ascending) order — this property is fundamental to BST-based search",
      "A complete binary tree with n nodes has height ⌊log₂n⌋; a skewed tree (all nodes on one side) degenerates to a linked list with height n-1"
    ],
    "tips": [
      "ISC asks to draw a linked list after a series of insertions/deletions — always draw boxes with arrows for each step",
      "For tree traversal questions, write the visit order next to each node as you trace; a systematic LRR/RLR pattern prevents errors",
      "BST insertion trace is a common ISC question — show the comparison at each node and which branch you take",
      "Distinguish between a Binary Tree (any arrangement) and a BST (ordered arrangement) — they have different properties"
    ],
    "bestPractices": [
      "Draw the linked list structure before coding — identify head, tail, and the target position to avoid pointer logic errors",
      "When implementing tree traversal, use clear recursive methods; include a base case check (if node == null return) first",
      "Comment each pointer reassignment in linked list operations (e.g., '// newNode now points to old head') for examiner clarity"
    ]
  },
  {
    "chapter": "Recursion",
    "formulae": [
      "A recursive method calls itself with a smaller/simpler sub-problem; must have a base case to terminate",
      "Factorial: int fact(int n) { return (n<=1) ? 1 : n*fact(n-1); }  — depth n, O(n) time and O(n) stack space",
      "Fibonacci: int fib(int n) { return (n<=1) ? n : fib(n-1)+fib(n-2); }  — O(2ⁿ) time naively",
      "Tower of Hanoi: move(n, src, dest, aux) — requires 2ⁿ−1 moves; O(2ⁿ) time",
      "GCD by Euclid: int gcd(int a,int b) { return (b==0) ? a : gcd(b, a%b); }",
      "Binary search recursive: search(arr, low, high, key) — O(log n)",
      "Each recursive call adds a frame to the call stack; too many levels → StackOverflowError",
      "Tail recursion: recursive call is the very last operation; some compilers optimise it to a loop"
    ],
    "logic": [
      "Every recursive solution has two parts: base case (terminates recursion) and recursive case (reduces the problem)",
      "The call stack records each invocation's local variables and return address; recursion uses O(depth) stack space",
      "Any recursive algorithm can be converted to an iterative one (using an explicit stack if needed) and vice versa",
      "Mutual recursion: method A calls method B, which calls method A — both must have base cases to avoid infinite recursion",
      "Memoisation (caching results of sub-problems) converts naive exponential recursion (e.g., Fibonacci) to O(n)"
    ],
    "tips": [
      "ISC asks to trace a recursive function — draw a call tree or a stack of frames showing argument values and return values",
      "Always identify and state the base case before writing any recursive method; examiners check for it explicitly",
      "For Tower of Hanoi, the number of moves formula 2ⁿ−1 is frequently asked; derive it from the recurrence T(n)=2T(n-1)+1",
      "Common mistake: infinite recursion because the recursive call doesn't reduce the problem — verify that arguments move towards the base case"
    ],
    "bestPractices": [
      "Write the base case as the first if-statement in the method; the recursive case follows in the else or after the return",
      "Add a print statement or comment showing the input at each call when tracing recursion for exam answers",
      "Test recursive methods with small inputs (n=0,1,2) manually before tracing larger values; misidentified base cases cause cascading errors"
    ]
  },
  {
    "chapter": "Sorting and Searching Algorithms",
    "formulae": [
      "Bubble Sort: O(n²) best (already sorted with flag), O(n²) average, O(n²) worst; O(1) space; stable",
      "Selection Sort: O(n²) best/average/worst; O(1) space; not stable (swaps may displace equal elements)",
      "Insertion Sort: O(n) best (nearly sorted), O(n²) average, O(n²) worst; O(1) space; stable",
      "Merge Sort: O(n log n) best/average/worst; O(n) space (auxiliary array); stable",
      "Quick Sort: O(n log n) average, O(n²) worst (sorted/reverse sorted array with naive pivot); O(log n) space; not stable",
      "Linear Search: O(1) best (first element), O(n) average/worst; works on unsorted arrays",
      "Binary Search: O(1) best (mid element), O(log n) average/worst; array must be sorted; iterative or recursive",
      "Binary search condition: if(arr[mid]==key) found; if(key<arr[mid]) high=mid-1; else low=mid+1"
    ],
    "logic": [
      "Bubble sort repeatedly swaps adjacent elements that are out of order; with an optimisation flag it detects already-sorted input in O(n)",
      "Selection sort finds the minimum element and swaps it into position; the number of swaps is O(n) — good when swaps are expensive",
      "Insertion sort builds a sorted sub-array one element at a time; it is efficient for small or nearly-sorted arrays",
      "Merge sort uses divide-and-conquer: split array in half, sort each half recursively, then merge; guaranteed O(n log n) unlike Quick Sort",
      "Binary search halves the search space each step; it requires a sorted array; mid = low + (high-low)/2 avoids integer overflow"
    ],
    "tips": [
      "ISC asks to write one complete pass of bubble/selection/insertion sort on a given array — show the array state after every comparison or swap",
      "For complexity questions, always give best, average, and worst case separately — a single figure is penalised",
      "Merge sort and Quick Sort are the two divide-and-conquer algorithms in the syllabus; know their recurrence relations T(n)=2T(n/2)+O(n)",
      "Binary search is only valid on a sorted array — if asked to search an unsorted array, use linear search and state why"
    ],
    "bestPractices": [
      "Trace sorting algorithms on a small example (5-6 elements) alongside your code to verify loop indices and swap conditions are correct",
      "Use a swap() helper method or inline swap with a temporary variable; label the temp variable clearly (int temp = arr[i]; arr[i]=arr[j]; arr[j]=temp;)",
      "State the algorithm's name, time complexity, and whether the array must be sorted as the first comment in any sorting/searching method"
    ]
  }
];
