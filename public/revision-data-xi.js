// ─── Grade XI CBSE revision notes (NCERT textbooks) ───────────────────────────
// screen-notes.js reads REVISION['XI Accountancy'] / ['XI Economics'] /
// ['XI Psychology'] when state.grade==='XI' && state.board==='CBSE'.

REVISION['XI Accountancy'] = [
  {
    chapter: 'Introduction to Accounting',
    formulae: [],
    logic: [
      'Accounting = identifying + measuring + recording + communicating economic events of an organisation to interested users',
      'Economic event: a happening of consequence to a business, measurable in money — external (between the firm and an outsider) or internal (within the firm, e.g. raw material moved from store to factory)',
      'Qualitative characteristics of accounting information: Reliability, Relevance, Understandability, Comparability',
      'Internal users: owners, management, employees (need info for planning/control/decisions); External users: investors, creditors/banks, tax authorities, regulators, customers, researchers (rely on published financial statements)',
      'Branches of accounting: Financial accounting (records transactions, finds profit/loss and position) · Cost accounting (ascertains cost of products/services, aids pricing) · Management accounting (uses both to help internal decision-making)',
      'Objectives of accounting: maintain systematic records → ascertain profit/loss → depict financial position → provide information to users',
      "Basic terms: Capital (owner's investment, a liability to the business) · Drawings (owner withdraws cash/goods, reduces capital) · Revenue/Income vs Gain (gain is incidental, e.g. profit on sale of an asset) · Expense vs Expenditure (expenditure whose benefit lasts >1 year = capital expenditure/asset; ≤1 year = revenue expenditure/expense) · Trade discount (deducted from list price at the time of sale) vs Cash discount (for prompt payment)"
    ],
    tips: [
      'If it can\'t be expressed in money, it is NOT recorded — e.g. skill of an employee, change in management policy',
      'Gain ≠ Revenue: revenue comes from the normal/main business activity, gain from an incidental event (sale of a fixed asset, winning a lawsuit)',
      'Goods vs Asset: the SAME item can be "goods" for one business and an "asset" for another — depends on what the business deals in (e.g. furniture is goods for a furniture dealer, an asset for everyone else)'
    ],
    bestPractices: [
      'A one-line definition question ("Define accounting") is common for 1 mark — memorise the identify/measure/record/communicate definition exactly',
      'When classifying an item as asset/liability/revenue/expense, first ask: does the business deal in it (goods), and is the benefit <1 year (expense) or >1 year (asset)?'
    ]
  },
  {
    chapter: 'Theory Base of Accounting',
    formulae: [
      'Accounting equation (Dual Aspect): Assets = Liabilities + Capital'
    ],
    logic: [
      'GAAP = rules/guidelines generally accepted by the accounting profession, bringing uniformity to recording and reporting',
      'Business Entity: business and owner are separate accounting entities — owner\'s personal transactions never enter the business books',
      'Money Measurement: only transactions expressible in money are recorded (so employee skill, management disputes etc. are never recorded)',
      'Going Concern: the business is assumed to continue indefinitely — justifies classifying assets as fixed vs current, and writing off fixed-asset cost (depreciation) over its useful life rather than at once',
      'Accounting Period: the indefinite life of a Going Concern is broken into fixed periods (usually 1 year) so profit/loss and position can be reported periodically',
      'Cost Concept: assets recorded at actual acquisition cost (price + transport + installation), not market value',
      'Dual Aspect: every transaction has two effects (receiving + giving) — basis of the accounting equation and double entry',
      'Revenue Recognition (Realisation): revenue is recognised when a legal right to receive it arises (typically at the point of sale), not when cash is actually received',
      'Matching: expenses of a period are matched against the revenue of the SAME period to find correct profit/loss',
      'Full Disclosure: all material facts affecting the financial statements must be disclosed, including in footnotes',
      'Consistency: same accounting policies used period to period (and firm to firm) so results are comparable — does not forbid a change, but the change and its effect must be disclosed',
      'Conservatism (Prudence): anticipate all possible losses, but do not record a gain/profit until it is actually realised ("provide for all losses, anticipate no profits") — e.g. stock valued at cost or market price, whichever is LOWER',
      'Materiality: insignificant items (e.g. cost of pencils/erasers) need not follow strict accounting treatment and can be written off as an expense at once',
      'Objectivity: transactions recorded free of personal bias, supported by verifiable documentary evidence (vouchers)',
      'Systems of accounting: Double entry (records BOTH aspects of every transaction — accurate, complete) vs Single entry (incomplete, only cash book + personal accounts — used by very small businesses)',
      'Basis of accounting: Cash basis (entries only when cash is received/paid) vs Accrual basis (income/expense recorded when EARNED/INCURRED, whether or not cash has moved — mandatory for companies under the Companies Act)'
    ],
    tips: [
      'Conservatism, Materiality and Consistency are "modifying principles" layered on top of the core concepts',
      'Matching concept is WHY outstanding/prepaid adjustments exist — makes the period\'s expense match the period\'s revenue, regardless of when cash moved',
      'Mnemonic for basic concepts: Business Entity, Money Measurement, Going Concern, Accounting Period, Cost, Dual Aspect, Revenue Recognition, Matching, Full Disclosure, Consistency, Conservatism, Materiality, Objectivity'
    ],
    bestPractices: [
      'A fill-in-the-blank/match-the-concept question is very common — be able to name the ONE concept that explains a given accounting treatment (e.g. "stock valued at cost or market price, whichever is lower" → Conservatism)',
      'Never confuse Consistency (same method every year) with Comparability (the qualitative characteristic that consistency helps achieve)'
    ]
  },
  {
    chapter: 'Recording of Transactions – I',
    formulae: [
      'Accounting Equation: Assets = Liabilities + Capital (must hold after every single transaction)'
    ],
    logic: [
      'Source documents (cash memo, invoice/bill, receipt, cheque, debit/credit note) are the evidence that a transaction occurred — accounting starts from these',
      'Voucher: prepared FROM a source document, used to actually record the transaction in the books',
      'Rules of Debit and Credit by account type: Assets → Debit = Increase, Credit = Decrease · Liabilities → Debit = Decrease, Credit = Increase · Capital → Debit = Decrease, Credit = Increase · Revenues/Income → Debit = Decrease, Credit = Increase · Expenses/Losses → Debit = Increase, Credit = Decrease',
      'Journal: the book of original entry — transactions recorded chronologically with a narration; the process is called "journalising"',
      'Ledger: book of final entry containing all accounts; "posting" = transferring journal entries to the ledger accounts'
    ],
    tips: [
      'Liabilities and Capital follow the SAME debit/credit rule (both: decrease=debit, increase=credit) because both sit on the same side of the accounting equation',
      'Every journal entry needs at least one debit and one credit of EQUAL amount — if unequal, the entry itself is wrong before you even post it',
      'For every transaction, ask: which TWO accounts are affected, and is each one increasing or decreasing?'
    ],
    bestPractices: [
      'Always determine the account types (asset/liability/capital/revenue/expense) FIRST, then apply the debit-credit rule — don\'t memorise "received = debit" shortcuts blindly',
      'Numericals on "prepare the accounting equation" — rebuild assets and liabilities+capital line by line after each transaction and check they tally at the end'
    ]
  },
  {
    chapter: 'Recording of Transactions – II',
    formulae: [],
    logic: [
      'Special purpose (subsidiary) books split the journal by transaction type, for firms with high transaction volume: Purchases Book (credit purchases of goods only), Sales Book (credit sales of goods only), Purchases Return Book, Sales Return Book, Journal Proper (everything else: opening entry, adjusting/closing/rectifying entries)',
      'Cash Book: records ALL cash and bank transactions and also acts as a ledger account (no separate Cash/Bank account is opened) — Simple Cash Book (cash column only), Double-column (cash + discount, or cash + bank), Triple-column (cash + bank + discount), Petty Cash Book (small/day-to-day cash expenses, usually run on the Imprest System)',
      'Contra entry: a transaction affecting BOTH the cash and bank columns of the same cash book (e.g. cash deposited into bank, or cash withdrawn from bank for office use) — denoted "C" and does not need posting to a ledger',
      'Imprest System: the petty cashier is given a fixed sum; at the end of the period they are reimbursed exactly the amount spent, so the float returns to the fixed sum',
      'Trade discount is deducted directly in the invoice and is NEVER recorded in the books; cash discount IS recorded (in the discount column of the cash book) since it depends on prompt payment'
    ],
    tips: [
      'Cash Book can never show a credit balance (you cannot pay out cash you do not have) — a negative cash balance signals an error',
      'Bank column of a cash book CAN show a credit balance — that is a bank overdraft',
      'Purchases/Sales Books record ONLY credit transactions of GOODS — cash purchases/sales of goods go in the cash book; purchase/sale of an asset (not goods) never goes in these books'
    ],
    bestPractices: [
      'In a double-column (bank) cash book, post a contra entry on both sides and mark it "C" in the ledger-folio column so it is not posted again elsewhere',
      'Petty cash numericals: compute the reimbursement as (fixed imprest amount − closing balance in hand), not the total spent restated from scratch'
    ]
  },
  {
    chapter: 'Bank Reconciliation Statement',
    formulae: [
      'BRS reconciles: Balance as per Cash Book ⇄ Balance as per Pass Book (bank statement)'
    ],
    logic: [
      'Causes of difference: timing differences (cheques issued but not yet presented; cheques deposited but not yet credited) and errors by either the business or the bank',
      'Items causing Cash Book balance < Pass Book balance (add to cash book balance to match passbook, when favourable): cheques deposited but not yet collected/credited',
      'Items causing Cash Book balance > Pass Book balance: cheques issued but not yet presented for payment',
      'Bank-side-only entries needing adjustment: bank charges, interest/commission debited by bank, interest credited by bank, direct deposits by customers, dishonour of a cheque/bill, direct debits (e.g. insurance premium via standing instruction)',
      'A favourable balance (asset, debit balance in cash book) becomes an overdraft (liability) treatment if adjustments push it negative — sign flips the reconciliation direction'
    ],
    tips: [
      'Start from EITHER balance and work to the other — always state clearly which balance you started from',
      'An item that increases the cash book balance when reconciling FROM cash book TO passbook will decrease it when reconciling the other way round — same list, opposite signs depending on direction',
      'BRS is a statement, not an account — it has no debit/credit sides, just a plus/minus list ending in the other book\'s balance'
    ],
    bestPractices: [
      'Before starting the reconciliation, first compute the CORRECT cash book balance if the question says some entries/errors were omitted from the cash book itself',
      'Always state the final answer as "Balance as per Pass Book = ₹X" (or vice versa) — a bare number without saying which book it matches loses marks'
    ]
  },
  {
    chapter: 'Trial Balance and Rectification of Errors',
    formulae: [
      'Trial balance (balance method): Total of all Debit balances = Total of all Credit balances'
    ],
    logic: [
      'Trial Balance = a statement (not an account) listing every ledger account\'s balance, to check arithmetical accuracy and as a base for final accounts',
      'Errors of Commission: wrong amount recorded, wrong totalling/casting, wrong balancing, posting to the wrong account of the SAME class (amount and side both correct)',
      'Errors of Omission: a transaction entirely omitted (affects both debit and credit equally — trial balance still tallies) OR partially omitted (one-sided — trial balance will NOT tally)',
      'Errors of Principle: a capital item wrongly treated as revenue, or vice versa (e.g. purchase of furniture debited to Purchases A/c) — never affects the trial balance total',
      'Compensating Errors: two or more errors that cancel each other\'s effect on the trial balance totals — trial balance still tallies despite two real mistakes',
      'Two-sided errors (affecting two accounts, equal debit/credit) do NOT disturb the trial balance; one-sided errors DO disturb it',
      'Suspense Account: opened for the difference when a trial balance does not tally, so final accounts can still be prepared while the search for errors continues; closed once every error is found and rectified'
    ],
    tips: [
      'A one-sided error is rectified with ONE account only (debit or credit that account, with a note) — a two-sided error needs a proper journal entry',
      'Not every error affects the trial balance — if your trial balance tallies, you may STILL have errors of principle, complete omission, or compensating errors hiding in it',
      'Suspense account appears on whichever side is SHORTER in the trial balance (so both sides match provisionally)'
    ],
    bestPractices: [
      'When rectifying, always identify: is it a one-sided or two-sided error, BEFORE deciding whether a Suspense Account entry is needed',
      'State clearly in long-answer questions: "trial balance agreement is not conclusive proof of accuracy" and list the error types a tallied trial balance can still hide'
    ]
  },
  {
    chapter: 'Depreciation, Provisions and Reserves',
    formulae: [
      'Straight Line Method: Annual Depreciation = (Cost − Estimated Scrap/Residual Value) ÷ Estimated Useful Life',
      'Straight Line Method rate on original cost: same ₹ amount written off every year — asset value can reach zero/scrap value',
      'Written Down Value (WDV/Reducing Balance) Method: Depreciation = Book Value at start of year × Rate% (rate applied to the REDUCING balance, never to original cost) — book value approaches but never reaches zero'
    ],
    logic: [
      'Depreciation: gradual, permanent, continuing fall in the book value of a FIXED (tangible) asset due to use, wear and tear, passage of time, or obsolescence — NOT valuation, it is cost allocation',
      'Depletion applies to wasting/natural resources (mines, quarries, oil wells); Amortisation applies to intangible assets (patents, goodwill, copyrights)',
      'Causes of depreciation: wear and tear, expiration of legal rights, obsolescence (new technology), abnormal factors (accident)',
      'Need for depreciation: matching cost with revenue, correct tax computation, showing true & fair financial position, legal compliance (Companies Act)',
      'Factors affecting depreciation amount: cost of asset, estimated useful life, estimated net residual/scrap value',
      'SLM vs WDV: SLM gives equal annual charge and is simple (suited to assets with equal utility every year, e.g. leases, furniture); WDV gives a higher charge in early years and is recognised by Income Tax law (suited to plant/machinery where repair costs rise with age, keeping total annual charge — depreciation+repairs — roughly even)',
      'Recording methods: (a) Charging depreciation directly to the Asset Account (asset shown net of depreciation), or (b) creating a Provision for Depreciation/Accumulated Depreciation Account (asset shown at original cost, depreciation accumulated separately — preferred, shows both original cost and total depreciation to date)',
      'Provision: a charge against profit for a known liability/loss of uncertain AMOUNT (e.g. provision for depreciation, provision for doubtful debts) — created whether the firm earns profit or not',
      'Reserve: an appropriation OF profit, retained to strengthen the financial position or meet a future need — created only when there is a profit',
      'Types of reserves: Revenue Reserve (General Reserve — free, usable for any purpose; Specific Reserve — e.g. Dividend Equalisation, Workmen Compensation, earmarked for a stated purpose) vs Capital Reserve (from capital profits, e.g. profit on sale of fixed asset/reissue of forfeited shares, premium on issue of shares/debentures — NOT normally available for dividend)',
      'Secret Reserve: exists but is not disclosed in the balance sheet (assets understated or liabilities overstated) — permitted only for banks, insurance and some financial companies, not ordinary companies'
    ],
    tips: [
      'Provision is a CHARGE (reduces profit, made even in a loss year); Reserve is an APPROPRIATION (made only out of profit)',
      'WDV depreciation amount keeps falling every year; SLM depreciation amount is the SAME every year',
      'On sale of an asset, use an Asset Disposal Account to find profit/loss on sale when a separate Provision for Depreciation Account is maintained'
    ],
    bestPractices: [
      'In numericals, first identify which method (SLM/WDV) and whether a separate Provision for Depreciation Account is used, before setting up ledger accounts',
      'Distinguish-between questions (Provision vs Reserve; Revenue Reserve vs Capital Reserve) are very common — answer in a clean two-column comparison'
    ]
  },
  {
    chapter: 'Financial Statements – I',
    formulae: [
      'Gross Profit = Net Sales − Cost of Goods Sold',
      'Cost of Goods Sold = Opening Stock + Net Purchases + Direct Expenses − Closing Stock',
      'Operating Profit (EBIT) = Net Profit + Non-operating Expenses − Non-operating Incomes',
      'Accounting Equation check in Balance Sheet: Total Assets = Total Liabilities + Capital'
    ],
    logic: [
      'Capital expenditure: benefit lasts more than one accounting year (acquiring/improving a fixed asset, e.g. installation cost, major extension) — appears in the Balance Sheet',
      'Revenue expenditure: benefit exhausted within the year (day-to-day running costs, repairs that merely maintain the asset) — appears in the Trading/P&L Account',
      'Trading Account: finds GROSS PROFIT — debited with opening stock, purchases, direct expenses (wages, carriage inwards, freight, etc.); credited with sales and closing stock',
      'Profit & Loss Account: finds NET PROFIT — starts from gross profit, debited with all indirect/operating expenses (rent, salaries, selling expenses), credited with other incomes (e.g. discount received, commission received)',
      'Closing entries transfer all expense/revenue account balances into the Trading and P&L Account so those accounts are closed for the period; net profit/loss is finally transferred to the Capital Account',
      'Balance Sheet: a STATEMENT (not an account) of assets and liabilities as on a given date, showing financial position — prepared from accounts that remain open after the P&L Account is closed',
      'Marshalling of a Balance Sheet: Order of Liquidity (most liquid asset/most immediately payable liability first — followed by sole proprietors/partnerships) OR Order of Permanence (least liquid/fixed items first — Schedule III format used by companies)'
    ],
    tips: [
      'Gross profit comes from the Trading Account; Net profit comes from the Profit & Loss Account — never mix the two up in a question that asks for one specifically',
      'A cost/expense directly tied to bringing goods to a saleable condition (carriage inward, wages, freight, octroi) is a DIRECT expense (Trading A/c); administrative/selling costs are INDIRECT (P&L A/c)',
      'Closing stock is credited to the Trading Account AND shown as a current asset in the Balance Sheet — the same figure appears in two places'
    ],
    bestPractices: [
      'Before classifying an expenditure, ask: is the benefit for this year only (revenue) or beyond this year (capital)? — common source of "distinguish" questions',
      'Always total and tally the Balance Sheet (Assets = Liabilities + Capital) as a self-check in numericals'
    ]
  },
  {
    chapter: 'Financial Statements – II',
    formulae: [
      'Provision for Doubtful Debts = estimated % × (Debtors − further Bad Debts written off during adjustment)',
      "Manager's Commission (before charging commission) = Rate% × Net Profit BEFORE commission",
      "Manager's Commission (after charging commission) = Rate% × Net Profit AFTER commission = (Rate ÷ (100 + Rate)) × Net Profit before commission"
    ],
    logic: [
      'Adjusting entries bring the accounts in line with the ACCRUAL basis and the Matching concept at the year end, before final accounts are prepared',
      'Closing Stock (if given outside the trial balance, as an adjustment): credited to Trading A/c AND shown as a current asset in the Balance Sheet',
      'Outstanding Expenses: expense incurred but not yet paid — added to the relevant expense (debit side, P&L) and shown as a current LIABILITY',
      'Prepaid Expenses: expense paid in advance for the NEXT period — deducted from the relevant expense (P&L) and shown as a current ASSET',
      'Accrued Income: income earned but not yet received — added to the relevant income (credit side, P&L) and shown as a current ASSET',
      'Income Received in Advance (Unearned Income): income received but not yet earned — deducted from the relevant income (P&L) and shown as a current LIABILITY',
      'Depreciation: debited to P&L as an expense; deducted from the asset\'s value in the Balance Sheet',
      'Bad Debts (further, given as adjustment): added to existing bad debts and debited to P&L; deducted from Debtors in the Balance Sheet',
      'Provision for Doubtful Debts: created by debiting P&L (as an expense) and shown as a deduction from Debtors in the Balance Sheet (after deducting further bad debts from debtors first)',
      'Provision for Discount on Debtors: calculated on (Debtors − Provision for Doubtful Debts already deducted); debited to P&L, deducted from Debtors in the Balance Sheet',
      "Manager's Commission: debited to P&L as an expense, shown as a current liability (outstanding commission) in the Balance Sheet",
      'Interest on Capital: debited to P&L (as an expense to the business); added to Capital in the Balance Sheet'
    ],
    tips: [
      'Every adjustment given OUTSIDE the trial balance hits TWO places: once in the Trading/P&L Account, once in the Balance Sheet — never post it in only one',
      '"Commission after charging such commission" always needs the (Rate ÷ (100+Rate)) formula — a very common numerical trap',
      'Order for debtors-side adjustments: deduct further bad debts first → then calculate Provision for Doubtful Debts on the remainder → then Provision for Discount on the net remaining debtors'
    ],
    bestPractices: [
      'Build a mental checklist of all adjustments (closing stock, O/E, prepaid, accrued income, income in advance, depreciation, bad debts, provisions, commission, interest on capital) and tick each one off both statements',
      'Always show workings for provision/commission calculations separately — partial credit is given even if the final balance sheet total is off'
    ]
  }
];

REVISION['XI Economics'] = [
  {
    chapter: 'Introduction',
    formulae: [],
    logic: [
      'Economics studies how people/society choose to employ scarce resources (with alternative uses) to produce commodities and distribute them for consumption — central problem is SCARCITY, not shortage of a particular thing',
      'Economic activities = activities undertaken for monetary gain: consumption, production and distribution',
      'Economics traditionally studied in three parts: Consumption (how a consumer chooses what to buy given income and prices), Production (how a producer decides what/how to produce), Distribution (how national income/GDP is shared via wages, profit, interest)',
      'Statistics = the study of numbers relating to selected facts in a systematic form, needed to describe and analyse economic problems (poverty, income distribution, unemployment) and to formulate policies',
      'Qualitative information (e.g. "healthy/more healthy") is also a form of statistics in economics and social sciences, not just numeric data'
    ],
    tips: [
      'Opportunity cost = value of the next best alternative forgone — the reason scarcity forces a CHOICE',
      'Remember the three-part split (consumption/production/distribution) — a 1-mark "define economics" question expects scarcity + choice + alternative uses'
    ],
    bestPractices: [
      'A "why do we need statistics in economics" question should connect data → analysis of causes → policy formulation, in that order'
    ]
  },
  {
    chapter: 'Collection of Data',
    formulae: [],
    logic: [
      'Primary data: collected by the investigator for the FIRST time, for his/her own purpose — original but costly/time-consuming (methods: direct personal interview, indirect oral investigation, mailed questionnaire, schedules filled by enumerators)',
      'Secondary data: originally collected by someone else, already published/unpublished, and now used by a different investigator — cheaper, faster, but needs checking for suitability, accuracy, adequacy',
      'Census (Complete Enumeration): every single element/unit of the population is surveyed — most accurate, very costly, time-consuming (e.g. Census of India, every 10 years since 1881)',
      'Sample Survey: only a representative part (sample) of the population is studied and results generalised to the whole population — cheaper, faster, but has sampling error',
      'Representative sample: a sample whose characteristics genuinely reflect the population it is drawn from',
      'Sampling methods: Random (lottery method, every unit has equal chance of selection) vs Non-random (purposive — investigator deliberately chooses units)',
      'Sampling error: the difference between the sample result and the true population value — exists in a sample survey but NOT in a census'
    ],
    tips: [
      'Census = complete; Sample = partial but faster/cheaper — trade-off between accuracy and cost/time',
      'NSSO (now part of NSO)/Census of India are classic sources of large-scale Indian secondary data'
    ],
    bestPractices: [
      'When asked "which source — primary or secondary", first check whether the data already exists in published form for the purpose needed',
      'Always state at least one limitation of mailed questionnaires (low response rate, needs literate respondents) when comparing methods'
    ]
  },
  {
    chapter: 'Organisation of Data',
    formulae: [
      'Class width (Class Interval) = Upper class limit − Lower class limit',
      'Mid-value (class mark) of a class = (Lower limit + Upper limit) ÷ 2'
    ],
    logic: [
      'Classification = arranging raw data into homogeneous groups/classes according to common characteristics',
      'Types of classification: Geographical/Spatial (by location), Chronological/Temporal (by time), Qualitative (by attribute, non-numeric), Quantitative (by numerical magnitude — forms a frequency distribution)',
      'Raw data (mass data) must first be arranged as an Array (ascending/descending order) before further classification',
      'Frequency Distribution: a table showing classes/groups of values and the number of observations (frequency) falling in each',
      'Class intervals — Exclusive method: upper limit of one class = lower limit of next, upper limit value itself EXCLUDED from that class (e.g. 10–20, 20–30: a value of 20 goes into 20–30) — removes ambiguity, commonly used',
      'Class intervals — Inclusive method: both limits included in the same class (e.g. 10–19, 20–29) — needs a continuity correction before further statistical calculation',
      'Loss of information: classification groups individual values together, so some individual-level detail is always lost in a frequency distribution'
    ],
    tips: [
      'When converting Inclusive → Exclusive form for calculation: subtract/add half the gap between classes (adjustment factor) to the limits',
      'A frequency distribution is only meaningful with appropriately chosen, non-overlapping, exhaustive class intervals'
    ],
    bestPractices: [
      'Always state which method (inclusive/exclusive) a given frequency table uses before computing mid-values or further statistics',
      'In numericals, show the class-mark/mid-value column explicitly — many later formulas (mean, mode) build on it'
    ]
  },
  {
    chapter: 'Presentation of Data',
    formulae: [],
    logic: [
      'Textual presentation: data described in writing/paragraph form — simplest, but hard to compare large data',
      'Tabular presentation: data arranged in rows and columns — compact, allows easy comparison, is the basis for diagrams/further analysis',
      'Diagrammatic presentation: Bar diagrams (simple, multiple, component) for discrete/categorical comparisons; Pie diagram for showing parts of a whole (percentage shares, drawn as 360° sectors); Histogram, Frequency Polygon, Frequency Curve, Ogive (cumulative frequency curve) for CONTINUOUS frequency distributions'
    ],
    tips: [
      'Histogram needs continuous (not discrete) class intervals with NO gaps between bars — unlike a bar diagram',
      'Two ogives exist for any distribution: "less than" (always rising) and "more than" (always falling) — their intersection point gives the MEDIAN graphically',
      'A pie diagram\'s sector angle for a category = (value of category ÷ total) × 360°'
    ],
    bestPractices: [
      'Choose the diagram to match the data type: categories → bar/pie; continuous distribution → histogram/ogive',
      'Always label axes/sectors and give a title — presentation questions award marks for correct labelling, not just the shape'
    ]
  },
  {
    chapter: 'Measures of Central Tendency',
    formulae: [
      'Arithmetic Mean (ungrouped) = ΣX ÷ N',
      'Arithmetic Mean (grouped, direct method) = Σ(f × m) ÷ Σf  (m = mid-value of each class)',
      'Weighted Arithmetic Mean = Σ(w × X) ÷ Σw',
      'Median (ungrouped, N observations, data arranged in order): position = (N+1)/2 th value',
      'Median (grouped/continuous) = L + [(N/2 − cf) ÷ f] × h   (L = lower limit of median class, cf = cumulative frequency before median class, f = frequency of median class, h = class width)',
      'Mode (grouped) = L + [(f₁ − f₀) ÷ (2f₁ − f₀ − f₂)] × h  (f₁ = frequency of modal class, f₀ = frequency of class before it, f₂ = frequency of class after it)'
    ],
    logic: [
      'Mean uses EVERY observation and is most affected by extreme values (outliers); Median is the positional middle value, unaffected by extreme values; Mode is the most frequently occurring value',
      'Mean is a good measure for symmetric data without extreme outliers; Median is preferred for skewed data (e.g. income distribution) or open-ended classes; Mode is useful for categorical/most-popular-value questions',
      'Relationship in a symmetric distribution: Mean = Median = Mode',
      'The sum of deviations of all observations from their Arithmetic Mean is always ZERO — the defining algebraic property of the mean'
    ],
    tips: [
      'Assumed Mean / Step-Deviation methods simplify mean calculation for large numbers — use them to save time in long numericals',
      'Median class/Modal class = the class whose cumulative frequency first exceeds N/2 (median) / the class with highest frequency (mode)',
      'A single extreme value changes the Mean a lot but barely changes the Median — a classic "which average to use" exam question'
    ],
    bestPractices: [
      'Always build the cumulative frequency column FIRST before attempting median in grouped data',
      'State clearly which class is the median/modal class (with its L, cf/f values) before substituting into the formula — partial marks depend on this'
    ]
  },
  {
    chapter: 'Correlation',
    formulae: [
      "Karl Pearson's Coefficient of Correlation: r = Σ(x−x̄)(y−ȳ) ÷ √[Σ(x−x̄)² × Σ(y−ȳ)²]",
      "Spearman's Rank Correlation: R = 1 − [6Σd² ÷ (N³−N)]   (d = difference between the ranks of the two variables, N = number of pairs)",
      'r always lies between −1 and +1 (inclusive)'
    ],
    logic: [
      'Correlation measures the degree and direction of the LINEAR relationship between two variables',
      'Positive correlation: both variables move in the SAME direction; Negative correlation: they move in OPPOSITE directions; Zero/no correlation: no consistent relationship',
      "r = +1: perfect positive correlation; r = −1: perfect negative correlation; r = 0: no linear correlation",
      "Karl Pearson's method needs actual (interval/ratio) values and assumes a linear relationship; Spearman's Rank method uses RANKS instead of actual values — useful for qualitative/ordinal data (e.g. ranking beauty, honesty) or when actual values aren't available",
      'Correlation does NOT imply causation — two variables can be correlated without one causing the other (both could depend on a third factor)'
    ],
    tips: [
      "Spearman's method is simpler to compute by hand and works even when exact values are unknown, only their order",
      'If ranks are tied, Spearman\'s formula needs a correction factor — a common numerical twist',
      'A scatter diagram is the quickest visual way to judge the type (positive/negative/none) and roughly the strength of correlation before computing r'
    ],
    bestPractices: [
      'Always state the correlation\'s sign (direction) AND rough strength (near ±1 = strong, near 0 = weak) in the interpretation, not just the numeral',
      'Explicitly note "correlation ≠ causation" in any application-based answer involving two correlated variables'
    ]
  },
  {
    chapter: 'Index Numbers',
    formulae: [
      "Simple Price Index = (P₁ ÷ P₀) × 100",
      "Laspeyre's Price Index = [Σ(P₁q₀) ÷ Σ(P₀q₀)] × 100   (uses BASE year quantities as weights)",
      "Paasche's Price Index = [Σ(P₁q₁) ÷ Σ(P₀q₁)] × 100   (uses CURRENT year quantities as weights)"
    ],
    logic: [
      'Index number: a specialised average that measures the relative change in a variable (or group of variables) between two time periods, one of which is the Base Year (= 100)',
      'Important index numbers in India: Consumer Price Index (CPI — measures change in retail prices faced by a specific consumer group, used for inflation/DA calculation), Wholesale Price Index (WPI — measures change in wholesale/producer prices, India\'s now-replaced old general-inflation gauge), Index of Industrial Production (IIP — measures change in the quantum/volume of industrial production, not prices)',
      'Choosing a base year: should be a NORMAL year (no war, famine, extraordinary event) and not too far in the past',
      "Laspeyre's index uses base-year quantities as weights throughout — tends to overstate cost-of-living rise; Paasche's index uses current-year quantities — tends to understate it; Fisher's Index = geometric mean of Laspeyre's and Paasche's indices and is called the IDEAL index as it satisfies both the Time Reversal and Factor Reversal tests",
      'An index value of 153 (base=100) means the variable has risen by 53% relative to the base year'
    ],
    tips: [
      'CPI measures RETAIL prices paid by consumers; WPI measures WHOLESALE prices received by producers/traders — never confuse the two',
      'IIP is a quantum (volume) index, not a price index — it tracks industrial output, not prices',
      "Memory aid: Laspeyre's = base weights (think 'L for last/old'), Paasche's = current weights"
    ],
    bestPractices: [
      'State explicitly which year\'s quantities are used as weights before computing Laspeyre\'s/Paasche\'s index — this is the main source of numerical errors',
      'When asked to compare CPI/WPI/IIP, structure the answer as: what it measures → whose prices/output → current base year → main use'
    ]
  },
  {
    chapter: 'Use of Statistical Tools',
    formulae: [],
    logic: [
      'This chapter applies the statistical tools learnt earlier (classification, tabulation, diagrams, measures of central tendency, correlation, index numbers) to a self-designed PROJECT, not new theory',
      'Steps in designing a statistical project: choose a problem/topic → decide data needed (primary/secondary) → decide method of collection → organise and present the data → analyse using appropriate statistical tool(s) → draw conclusions and write the report'
    ],
    tips: [
      'Pick a tool that matches the project\'s question: central tendency for "typical value", correlation for "relationship between two things", index numbers for "change over time"'
    ],
    bestPractices: [
      'A good project report states the objective clearly, shows the raw data/table, the diagram/statistic used, and a conclusion that directly answers the original question'
    ]
  },
  {
    chapter: 'Indian Economy on the Eve of Independence',
    formulae: [],
    logic: [
      'Colonial economic policy aim: reduce India to a raw-material supplier for Britain\'s industries and a market for British finished goods — NOT genuine development',
      'Agriculture: remained stagnant/backward despite being ~85% of the population\'s livelihood — caused by the Zamindari system (profit went to zamindars, not cultivators, who only cared about collecting rent), low technology, negligible irrigation/fertiliser use; commercialisation of agriculture shifted farmers toward cash crops for British industry, not food security',
      'Industry: systematic DE-INDUSTRIALISATION — decline of world-famous handicrafts (e.g. Dacca muslin) with NO corresponding modern industrial base allowed to replace them; only limited growth in cotton/jute textile mills (TISCO, 1907, was a rare exception) and a near-total absence of capital goods (machine-making) industries',
      'Foreign Trade: India became an exporter of raw materials/importer of finished goods; generated a large EXPORT SURPLUS, but this surplus was used to meet Britain\'s expenses, not to benefit India — called the "drain of Indian wealth"',
      'Demographic profile: high infant mortality (~218 per 1000), low life expectancy (~32 years), low literacy (~16% overall, ~7% female), widespread poverty — nearly stagnant population growth pattern (first stage of demographic transition before 1921)',
      'Occupational Structure: agriculture consistently absorbed 70-75% of the workforce; manufacturing only ~10%, services ~15-20% — little change in colonial structure, though some regional shift (Madras, Bombay, Bengal saw workforce move toward manufacturing/services)',
      'Infrastructure: railways (introduced 1850), roads, ports, posts/telegraphs were developed, but PURELY to serve colonial interests (moving troops and raw materials to ports), not public welfare — railways did break geographic/cultural barriers but their net economic benefit to India was outweighed by the cost'
    ],
    tips: [
      'Key estimators of colonial-era national income: Dadabhai Naoroji, William Digby, Findlay Shirras, V.K.R.V. Rao (most significant), R.C. Desai',
      'Remember the economy was "characterised by stagnation" everywhere (agriculture, industry, trade benefits) despite some surface growth in areas like railways and exports'
    ],
    bestPractices: [
      'Structure any answer on the colonial economy around the same five heads used by the textbook: Agriculture, Industry, Foreign Trade, Demography, Infrastructure — covers the whole chapter systematically',
      'Always tie a fact back to the core colonial MOTIVE (raw material supply + captive market), not just list statistics'
    ]
  },
  {
    chapter: 'Indian Economy 1950–1990',
    formulae: [],
    logic: [
      'Economic Planning: India adopted Five Year Plans via the Planning Commission (est. 1950) — goals of every plan: Growth, Modernisation, Self-reliance, Equity (based on the Mahalanobis model emphasising heavy industry)',
      'Agriculture: Land Reforms (abolition of intermediaries/zamindari, land ceiling, consolidation of holdings) at independence; Green Revolution (from mid-1960s) — use of HYV seeds, chemical fertilisers, irrigation — concentrated initially in Punjab, Haryana, western UP, led to a marketable surplus and self-sufficiency in foodgrains, but increased regional/farmer-class disparity and over-dependence on fertiliser/pesticide',
      'Industry & Trade: Industrial Policy Resolution 1956 classified industries into Schedule A (exclusively public sector), Schedule B (mixed public/private, state took initiative), Schedule C (private sector) — basis of the "mixed economy" with a large public sector (self-reliance, employment, infrastructure)',
      'Trade Policy — Import Substitution: protected domestic industry via tariffs (raising cost of imports) and quotas (limiting import quantity) so Indian industry could develop without foreign competition, until the mid-1980s',
      'Criticism of the 1950-90 strategy: public sector grew inefficient/loss-making in several non-strategic areas, licensing (the "License Raj") discouraged competition and efficiency, protection allowed domestic industry to remain uncompetitive by global standards'
    ],
    tips: [
      'Goals of planning — Growth / Modernisation / Self-reliance / Equity — appear almost every year as a "state the goals of five year plans" question',
      'Green Revolution raised OUTPUT and self-sufficiency, but widened inequality between regions/farmer classes — a frequent "merit vs limitation" question'
    ],
    bestPractices: [
      'Link Industrial Policy Resolution 1956\'s Schedule A/B/C classification directly to "why India had such a large public sector" answers',
      'When discussing import substitution, name BOTH tools used — tariffs AND quotas — not just one'
    ]
  },
  {
    chapter: 'Liberalisation, Privatisation and Globalisation: An Appraisal',
    formulae: [],
    logic: [
      'Trigger for 1991 reforms: a severe Balance of Payments crisis — the government had to approach the IMF/World Bank for a loan, which came conditional on structural reforms (New Economic Policy, 1991)',
      'Liberalisation = removing unnecessary government controls/restrictions: industrial licensing abolished for most industries (reserved only for atomic energy, some railway activities), financial sector reforms (reduced RBI\'s role from regulator to facilitator, allowed private/foreign banks, raised FII limits), tax reforms (lower, simplified direct & indirect taxes, introduction of GST in 2017), foreign exchange reforms (rupee devalued in 1991, market-determined exchange rate), trade & investment reforms (removed import licensing/quantitative restrictions, lowered tariffs)',
      'Privatisation = transfer of ownership/management of government enterprises to the private sector — via (i) withdrawal of government from ownership/management, or (ii) outright sale (disinvestment); PSEs classified as Maharatnas/Navratnas/Miniratnas were given greater autonomy to compete globally',
      'Globalisation = integrating the domestic economy with the world economy through free flow of goods, services, capital, technology, labour — includes outsourcing (hiring external, often foreign, service providers for functions like IT/BPO) and WTO membership (founded 1995, successor to GATT, aims at a rule-based free-trade regime by removing tariff and non-tariff barriers)',
      'Criticisms of LPG reforms: agriculture neglected (public investment fell, subsidies cut, exposure to global price volatility without matching support); industrial growth decelerated in the initial years due to cheaper imported-goods competition; employment generation in the organised sector failed to keep pace (jobless growth); spread of benefits has been uneven across regions and social groups'
    ],
    tips: [
      'LPG = Liberalisation + Privatisation + Globalisation — three distinct but related reforms, don\'t conflate privatisation (ownership) with liberalisation (removing controls)',
      "Disinvestment = selling government equity in a PSE to the public/private players — the main privatisation TOOL used in India"
    ],
    bestPractices: [
      'When asked to "appraise" reforms, give BOTH a positive (growth, forex reserves, FDI/FII inflow, global integration) and a negative (agriculture neglect, jobless growth, inequality) side',
      'Name the exact trigger (BoP crisis, 1991) when asked why reforms were introduced'
    ]
  },
  {
    chapter: 'Human Capital Formation in India',
    formulae: [],
    logic: [
      'Human Capital = the stock of skill, education and health embodied in a population, which raises labour productivity; Human Resource = raw, untrained population that CAN be turned into human capital through investment',
      'Sources of Human Capital Formation: Education, Health (preventive + curative + social medicine + sanitation), On-the-job training, Migration (for better-paid work), Information (about labour-market opportunities)',
      'Human Capital vs Human Development: Human Capital treats education/health as a MEANS to raise productivity (an investment); Human Development treats education/health as ENDS in themselves — integral to well-being and every individual\'s RIGHT, regardless of productivity contribution',
      'Government\'s role needed because: education/health have large social (not just private) benefits; information failures (parents can\'t judge school/hospital quality in advance); and both should be a basic right of every citizen — so free/subsidised public provision is justified',
      'Key institutions: NCERT, UGC, AICTE (education); National Medical Commission, ICMR (health) — at both Union and State levels, since India is federal and education/health are responsibilities shared across all three tiers of government',
      "India's government education expenditure rose over time (as % of GDP and of total govt. expenditure) but elementary education still gets the largest SHARE while expenditure PER STUDENT is higher at the tertiary (college/university) level"
    ],
    tips: [
      'A "distinguish Human Capital from Human Development" question is very common — the core difference is MEANS (productivity) vs END (well-being/right)',
      'Always list ALL FIVE sources of human capital formation (education, health, on-job training, migration, information) when asked to enumerate'
    ],
    bestPractices: [
      'Justify government intervention in education/health using BOTH arguments: market-failure (information asymmetry) AND rights-based (basic right)',
      'Use the exact institution names (NCERT/UGC/AICTE, NMC/ICMR) when asked about the machinery governing education/health in India'
    ]
  },
  {
    chapter: 'Rural Development',
    formulae: [],
    logic: [
      'Rural development: a comprehensive term covering credit & marketing systems, diversification into productive non-farm activities, human resource development (education, health, sanitation) and sustainable farming for rural areas',
      'Rural credit: historically dominated by exploitative moneylenders/traders; post-1969 social/multi-agency banking (commercial banks, RRBs, cooperatives, land development banks); NABARD (set up 1982) is the APEX body coordinating all institutions in rural financing; Self-Help Groups (SHGs) fill the gap for the collateral-less poor through pooled thrift and micro-credit; Jan-Dhan Yojana expanded financial inclusion (zero-balance accounts, accident insurance, overdraft, direct benefit transfer)',
      'Agricultural marketing reforms (to protect farmers from exploitative private trading/low prices/poor storage): regulation of markets, better/standardised storage, improved transport, and cooperative marketing',
      'Diversification: (i) change in cropping pattern (ii) shift of workforce from agriculture to allied activities (animal husbandry/livestock, fisheries, horticulture) and non-farm activities (agro-processing, food processing, handicrafts, tourism) — needed since agriculture is already overcrowded and most non-farm rural livelihoods need to be found outside it',
      'Organic farming: a whole farming system that avoids chemical fertilisers/pesticides, restores ecological balance — benefits include cheaper locally-produced inputs, higher export demand, better soil health and more employment (labour-intensive); limitations: lower yields initially, shorter shelf life, limited off-season crop choice, needs farmer awareness and better marketing infrastructure'
    ],
    tips: [
      'NABARD = apex rural credit coordinating body (1982); remember it sits ABOVE commercial banks, RRBs, cooperatives, land development banks, not alongside them',
      'SHGs solve the "no collateral" problem that excludes poor rural households from formal bank credit'
    ],
    bestPractices: [
      'Structure "rural development" answers around the textbook\'s own heads: Credit, Marketing, Diversification, Sustainable/Organic farming — don\'t just list random facts',
      'Give BOTH benefits and limitations when asked to evaluate organic farming or SHG-based micro-credit'
    ]
  },
  {
    chapter: 'Employment: Growth, Informalisation and Other Issues',
    formulae: [
      'Worker-Population Ratio = (Total number of workers ÷ Total population) × 100'
    ],
    logic: [
      'Worker: anyone engaged in an economic (money-earning) activity, including the self-employed — includes those temporarily absent due to illness/festival, EXCLUDES unpaid work like a housewife\'s domestic work (a long-debated exclusion)',
      'Three categories by employment status: Self-employed (own and operate an enterprise — largest share, >50% of workforce), Regular Salaried Employees (paid regular wages by an employer), Casual Wage Labourers (engaged on others\' farms/enterprises, paid daily/casual wages)',
      'Formal (organised) sector: enterprises registered with government, workers get job security + social security benefits (PF, gratuity); Informal (unorganised) sector: not registered, no job security/benefits — the VAST majority (~90%) of India\'s workforce is in the informal sector, and this share has NOT fallen the way planners expected as the economy grew (informalisation of the workforce)',
      'Unemployment types: Open unemployment (person actively seeking work but cannot find any), Disguised unemployment (more people are employed on a task than actually needed — common on small farms, each person\'s true marginal contribution is near zero), Seasonal unemployment (work available only in certain seasons, e.g. agriculture — causes rural-urban circular migration), Educated unemployment (an India-specific issue — unemployment is HIGHER among the educated than the illiterate, due to skill-mismatch with available jobs)',
      'Sources of unemployment data in India: Census of India, National Statistical Office (NSO, earlier NSSO) surveys, Periodic Labour Force Survey (PLFS), Employment Exchange registration data'
    ],
    tips: [
      'Self-employed > Casual Wage Labourers > Regular Salaried, roughly, in share of India\'s total workforce — rural India leans more informal/casual than urban',
      'Disguised unemployment is the classic "too many hands on a small farm" example — distinguish it sharply from open unemployment (no work at all)'
    ],
    bestPractices: [
      'When classifying a worker in an application question, check BOTH dimensions: formal/informal sector AND self-employed/regular/casual status',
      'Name the correct TYPE of unemployment precisely (open/disguised/seasonal/educated) rather than a vague "no jobs" answer — exam-scored on correct terminology'
    ]
  },
  {
    chapter: 'Environment and Sustainable Development',
    formulae: [],
    logic: [
      'Environment = total planetary inheritance + totality of all (biotic + abiotic) resources; performs four functions: (i) supplies resources, (ii) assimilates waste, (iii) sustains life support systems, (iv) provides aesthetic services (scenery etc.)',
      'Environmental crisis arises when the DEMAND on these functions exceeds the environment\'s carrying/absorptive capacity — i.e. resource extraction exceeds the rate of regeneration, and/or waste exceeds assimilative capacity',
      'Renewable resources (e.g. forests, fish) can regenerate if used sustainably; Non-renewable resources (e.g. fossil fuels, minerals) cannot be replenished once exhausted',
      'Sustainable Development (Brundtland Commission definition): development that meets the needs of the present generation WITHOUT compromising the ability of future generations to meet their own needs',
      "Herman Daly's conditions for sustainability: (i) limit human population within the environment's carrying capacity, (ii) make technology more input-EFFICIENT not input-consuming, (iii) extract renewable resources no faster than their regeneration rate, (iv) deplete non-renewable resources no faster than renewable substitutes are created, (v) correct pollution-caused inefficiencies",
      'Global environmental problems: Global Warming (rise in average atmospheric temperature from greenhouse gases — CO₂, methane — from fossil-fuel burning and deforestation) and Ozone Depletion (CFCs/halons destroy stratospheric ozone, raising harmful UV radiation; addressed by the Montreal Protocol)',
      'Strategies for sustainable development in India: use of non-conventional/renewable energy (wind, solar) instead of thermal/hydro power; promoting LPG and gobar gas (biogas) in rural areas instead of wood/dung-cake fuel; use of CNG in public transport; the UN\'s 2015 Sustainable Development Goals (SDGs, target year 2030)'
    ],
    tips: [
      'Carrying capacity is compared to a ship\'s "Plimsoll line" (load limit mark) — a vivid textbook analogy worth remembering for long-answer questions',
      'Global Warming is about excess greenhouse gases trapping heat; Ozone Depletion is about CFCs destroying the UV-blocking ozone layer — two DIFFERENT problems, often confused'
    ],
    bestPractices: [
      'When defining sustainable development, always use BOTH halves of the Brundtland definition — present needs AND not compromising future generations',
      'List strategies under clear heads (renewable energy / clean cooking fuel / clean transport / global goals) rather than as a jumbled list'
    ]
  },
  {
    chapter: 'Comparative Development Experiences of India and its Neighbours',
    formulae: [],
    logic: [
      'India, Pakistan and China share similar developmental starting points — gained political reorganisation around the late 1940s (India & Pakistan independence 1947, People\'s Republic of China established 1949) and all adopted centralised planning strategies initially',
      'China: launched its First Five Year Plan in 1953; Mao\'s Great Leap Forward (1958) aimed at rapid industrialisation/collectivisation via communes but caused a massive famine (~30 million deaths); major reforms began in 1978 — decollectivised agriculture (land allocated back to households), encouraged private-sector/foreign enterprise, set up Special Economic Zones (SEZs) to attract foreign investment — this is credited with China\'s subsequent rapid growth',
      'Pakistan: introduced reforms in 1988, with denationalisation and encouragement of the private sector as thrust areas',
      'India: introduced its major (NEP) reforms in 1991, later than both neighbours',
      "Comparative outcomes (approx.): China's GDP and per-capita income growth has outpaced both India and Pakistan since its 1978 reforms; Human Development Index (HDI) value/rank: China highest (~0.797, rank ~78), India next (~0.685, rank ~130), Pakistan lowest (~0.544, rank ~168); China also has much lower maternal mortality than India/Pakistan",
      "'Liberty indicators' (e.g. extent of democratic participation) are NOT captured by HDI, GNI per capita or other standard development indicators — a reminder that these numbers don't tell the WHOLE development story"
    ],
    tips: [
      'Reform-year sequence: China 1978 → Pakistan 1988 → India 1991 — a common fill-in/match question',
      'China\'s SEZs + decollectivised (household-based) agriculture are the two reforms most often cited as the reason for its growth take-off'
    ],
    bestPractices: [
      'When comparing India/China/Pakistan, structure the answer around: (i) reform year & nature of reform (ii) sectoral growth outcome (iii) demographic/HDI/social indicators — and always add the caveat that liberty/political indicators are missing from these numbers',
      'Quote the approximate HDI ranking order (China > India > Pakistan) rather than exact decimals, which can vary by publication year'
    ]
  }
];

REVISION['XI Psychology'] = [
  {
    chapter: 'What is Psychology?',
    formulae: [],
    logic: [
      'Psychology = the scientific study of mental processes, experience and behaviour in different contexts — both a natural AND a social science',
      'Behaviour: anything an organism does that can be observed in some way — Overt (directly observable, e.g. speaking) vs Covert (not directly observable, e.g. thinking, feeling)',
      "Major schools/perspectives: Structuralism (Wundt, 1879 — analyse the mind into basic structural components via introspection) → Functionalism (focus on HOW/WHY behaviour helps adapt) → Behaviourism (~1910, studies only observable behaviour as shaped by the environment, rejects unobservable 'mind') → Gestalt psychology (Germany, 1912 — the whole is different from/greater than the sum of its parts; reaction against structuralism) → Psychoanalysis (Freud — behaviour as a manifestation of unconscious desires/conflicts) → Humanistic approach (focus on growth, free will, self-actualisation) → Cognitive approach (thought processes central to understanding behaviour)",
      'Contemporary psychology is "multivocal" — many approaches coexist, each giving a valid but partial view, not mutually exclusive',
      'Major fields today: cognitive, biological, health, developmental, social, educational/school, clinical/counselling, environmental, industrial/organisational, sports psychology',
      'Psychology overlaps with social sciences (economics, political science, sociology), biosciences (neurology, physiology, medicine), and even mass communication, music and fine arts'
    ],
    tips: [
      'Order to remember: Structuralism → Functionalism → Behaviourism/Gestalt (reactions to structuralism) → Psychoanalysis → Humanistic → Cognitive',
      'Key Terms glossary from this chapter: Behaviour, Behaviourism, Cognition, Consciousness, Constructivism, Developmental psychology, Functionalism, Gestalt, Humanistic approach, Introspection, Neuropsychology, Psychoanalysis, Structuralism'
    ],
    bestPractices: [
      'When asked to define psychology, mention it studies mental processes, experience AND behaviour — leaving out any one of the three loses marks',
      'A "name the school and its founder/key idea" question is common — pair each school with its defining idea (not just the name)'
    ]
  },
  {
    chapter: 'Methods of Enquiry in Psychology',
    formulae: [],
    logic: [
      'Goals of psychological research: description, prediction, explanation, control of behaviour, and application of knowledge',
      'Steps in psychological research: conceptualising the problem → collecting data → analysing data → drawing/revising conclusions',
      'Observation method: systematically watching and recording behaviour — Naturalistic (in real-life setting) vs Controlled/Laboratory; Participant (observer takes part) vs Non-participant',
      'Experimental method: establishes CAUSE-EFFECT relationships by manipulating an Independent Variable and measuring its effect on a Dependent Variable, using an Experimental group (gets the treatment) and a Control group (does not)',
      'Correlational research: studies the ASSOCIATION between variables (for prediction, not causation) — strength/direction ranges from −1.0 (perfect negative) through 0 (none) to +1.0 (perfect positive)',
      'Survey method: studies existing reality via structured/unstructured interviews, mailed questionnaires, or telephone — good for large samples, limited by response honesty/rate',
      'Psychological test: a standardised, objective instrument comparing an individual to others — can be verbal/non-verbal/performance type, individual or group-administered',
      'Case study: in-depth, detailed study of ONE particular individual/case',
      'Limitations of psychological enquiry: no absolute zero point for psychological scales, relative nature of psychological tools, subjective interpretation of qualitative data',
      'Ethical principles required: voluntary participation, informed consent, confidentiality, and sharing results with participants'
    ],
    tips: [
      'Experiment = the ONLY method that can establish causation; correlation/survey/observation describe or predict but do NOT prove cause-effect',
      "A classic exam scenario (e.g. 'Dr. Krishnan observes children without influencing them') is testing whether you can correctly NAME the method (here: naturalistic/non-participant observation)"
    ],
    bestPractices: [
      'In any method-identification question, name the method AND state one merit and one limitation — partial-credit structure favours this',
      'When given a correlation scenario, always identify BOTH variables and state the direction (positive/negative) explicitly'
    ]
  },
  {
    chapter: 'Human Development',
    formulae: [],
    logic: [
      'Development = a continuous, lifelong process of change in physical, cognitive, social, moral dimensions — broader than mere Growth (quantitative, physical increase) or Maturation (genetically-programmed sequential change)',
      'Prenatal development can be affected by maternal malnutrition, drug use, and illness',
      'Motor development follows two trends: Cephalocaudal (head-to-tail — head/upper body develops before lower body) and Proximodistal (centre-to-periphery — body centre develops before extremities); depends on BOTH maturation and learning',
      "Attachment: the emotional bond between child and caregiver — patterns vary across cultures depending on child-rearing practices",
      "Piaget's stages of cognitive development: Sensorimotor (0–2 yrs — develops object permanence) → Preoperational (2–7 yrs — centration, irreversibility, egocentrism are its limitations) → Concrete Operations (7–11 yrs — can perform mental operations, achieves conservation) → Formal Operations (11+ yrs — abstract, systematic, logical thought)",
      "Kohlberg's theory: moral reasoning develops through three broad levels, related to age and tied to cognitive development",
      "Puberty: growth spurt + development of reproductive maturity and secondary sexual characteristics",
      "Erikson: the key developmental challenge of ADOLESCENCE is forming a sense of IDENTITY",
      'Adulthood: marked by both stability and change; major transitions include marriage, parenthood, children leaving home, and age-related physical/cognitive/memory changes'
    ],
    tips: [
      'Centration = focusing on only one aspect of a situation while ignoring others; Irreversibility = inability to mentally reverse a sequence of events; Egocentrism = inability to see a situation from another\'s viewpoint — all three are PREOPERATIONAL-stage limitations',
      'Conservation (understanding that quantity stays the same despite a change in shape/arrangement) is achieved only from the CONCRETE OPERATIONS stage onward'
    ],
    bestPractices: [
      'When asked to describe Piaget\'s stages, always pair each stage with ITS defining limitation/achievement, not just the age range',
      "Erikson's 'identity' and Piaget's 'formal operations' are the two concepts most tested for ADOLESCENCE specifically — know both"
    ]
  },
  {
    chapter: 'Sensory, Attentional and Perceptual Processes',
    formulae: [],
    logic: [
      'Five external senses (vision, hearing, smell, taste, touch) + two internal senses (kinaesthetic — body movement/position; vestibular/organic) send stimuli as neural impulses to specialised brain areas',
      'Attention = the process of SELECTING certain information while filtering out the rest at a given moment — key properties: Alertness/activation, Concentration, Search',
      'Selective attention: focusing on ONE stimulus while ignoring others; Sustained attention: maintaining focus on a stimulus over a LONGER time period; Divided attention: handling more than one task at once — possible mainly with highly practiced, automatic tasks',
      "Span of attention: the 'magical number' 7 ± 2 items that can be attended to/held at once",
      'Perception = interpreting and meaningfully organising the raw information received from the senses — shaped by motivation, expectation, cognitive style and culture',
      'Figure-ground segregation: the most basic/primitive form of perceptual organisation — separating an object (figure) from its background (ground)',
      'Gestalt principles of perceptual organisation explain how we group separate elements into a meaningful whole',
      'Depth (3-D) perception from a 2-D retinal image uses Monocular cues (one eye needed, e.g. linear perspective) and Binocular cues (both eyes needed, e.g. retinal disparity)',
      'Perceptual constancies: our perception of an object\'s size, shape, and brightness stays stable despite changes in viewing angle, distance or lighting',
      'Illusions: systematic MISPERCEPTIONS from misinterpreting sensory information — some are universal, others culture-specific',
      'Socio-cultural factors affect perception by creating differential familiarity/salience with certain stimuli and particular habits of perceptual inference'
    ],
    tips: [
      'Selective vs Sustained vs Divided attention — a very common "distinguish between" question; divided attention needs AUTOMATICITY (well-practiced tasks)',
      'Figure-ground is the SIMPLEST Gestalt organisation principle — mention it first when listing perceptual organisation principles'
    ],
    bestPractices: [
      'Pair each perceptual constancy (size/shape/brightness) with a concrete everyday example when answering',
      'When explaining an illusion, state whether it is universal or culture-specific and WHY (misapplied depth/size cue, cultural unfamiliarity, etc.)'
    ]
  },
  {
    chapter: 'Learning',
    formulae: [],
    logic: [
      'Learning = any relatively PERMANENT change in behaviour/behavioural potential due to experience or practice — an inferred process, distinct from Performance (the actually observed response)',
      'Main types: Classical conditioning, Operant/Instrumental conditioning, Observational learning, Cognitive learning, Verbal learning, Skill learning',
      'Classical Conditioning (Pavlov, dogs/digestion studies): a neutral stimulus (becomes the Conditioned Stimulus, CS) paired repeatedly with an Unconditioned Stimulus (US, naturally triggers a response) comes to produce a Conditioned Response (CR) by itself, anticipating the US',
      'Operant/Instrumental Conditioning (Skinner): an "operant" is any voluntarily emitted response; the response is STRENGTHENED if followed by Reinforcement — any event that increases the frequency of the preceding response; the rate of conditioning depends on reinforcement type, amount, schedule and delay',
      'Observational Learning (= imitation/modelling/social learning): learning by watching a MODEL — whether the observed behaviour is actually performed depends on whether the model was rewarded or punished',
      'Verbal Learning: words associate via structural, phonetic or semantic similarity/contrast, studied via paired-associate learning, serial learning and free-recall methods; meaningfulness of material and personal/subjective organisation aid learning',
      'Skill: ability to perform complex tasks smoothly and efficiently, built through practice — passes through Cognitive → Associative → Autonomous phases',
      'Facilitating factors: motivation and preparedness (biological readiness) of the organism',
      'Learning disabilities (e.g. reading/writing difficulties) can restrict learning; often linked with hyperactivity, poor sense of time, and eye-hand coordination problems'
    ],
    tips: [
      'Classical conditioning = learning by ASSOCIATION between two stimuli (passive); Operant conditioning = learning from the CONSEQUENCE of one\'s own voluntary response (active)',
      'Generalisation = responding similarly to stimuli resembling the CS; Discrimination = learning to respond ONLY to the specific CS and not to similar stimuli — opposite processes'
    ],
    bestPractices: [
      'When explaining classical conditioning with an example, correctly label all four elements: US, UR (unconditioned response), CS, CR',
      'Link observational learning questions directly to "role models" (teachers/parents) since that is the textbook\'s own framing'
    ]
  },
  {
    chapter: 'Human Memory',
    formulae: [],
    logic: [
      'Memory = three interrelated processes — Encoding (registering information into a memory-compatible form), Storage (retaining it over time), Retrieval (bringing it back to awareness)',
      'Stage (Atkinson-Shiffrin) Model of Memory: information flows through Sensory Memory → Short-Term Memory (STM) → Long-Term Memory (LTM), much like a computer processes data',
      'Levels of Processing view: information can be encoded at the Structural (shallow — appearance), Phonetic (sound), or Semantic (meaning — deepest) level; SEMANTIC/deepest processing gives the BEST retention',
      'Long-Term Memory classifications: Declarative (facts/events, can be consciously stated) vs Procedural (skills/how-to, not easily stated); and Episodic (personal events) vs Semantic (general knowledge/facts)',
      'Forgetting = loss of stored information over time — sharp initial drop after learning, then a gradual decline (classic forgetting curve)',
      'Causes of forgetting: Trace decay (memory fades with disuse over time) and Interference (other information disrupts recall) — forgetting may also simply be due to absent RETRIEVAL CUES at the time of recall, not true loss of the memory',
      'Mnemonics = memory-improvement strategies — some use vivid imagery, others use organisation of the material to be learnt'
    ],
    tips: [
      'Maintenance rehearsal (simple repetition) keeps info in STM only; Elaborative rehearsal (linking to meaning/existing knowledge) is needed to move info into LTM — a frequent distinguish-between question',
      'Retrieval-cue-absence forgetting ≠ interference forgetting: the first means the memory is still there but inaccessible; the second means a competing memory actively disrupts it'
    ],
    bestPractices: [
      'When asked to describe the memory process, always name all three stages in order: Encoding → Storage → Retrieval',
      'Give one concrete example each for declarative/procedural and episodic/semantic memory when distinguishing them'
    ]
  },
  {
    chapter: 'Thinking',
    formulae: [],
    logic: [
      'Thinking = a complex, internal mental process of manipulating acquired/stored information — inferred from behaviour, not directly observed; uses mental representations (mental images or concepts)',
      'Complex thought processes: Problem solving, Reasoning, Decision-making, Judgment, Creative thinking',
      'Problem solving: goal-directed thinking aimed at a specific solution; common hindrances — Mental set (sticking to a familiar approach), Functional fixedness (seeing an object only in its usual use), lack of motivation/persistence',
      'Reasoning: goal-directed, involves drawing inferences — Deductive (general premises → specific conclusion) vs Inductive (specific observations → general conclusion)',
      'Judgment: drawing conclusions/forming opinions/evaluating objects or events; Decision-making: choosing among several available alternatives — the two are closely INTERRELATED',
      'Creative thinking: producing something NEW and original (an idea, object, or problem-solution); requires overcoming blocks to creativity and using strategies that enhance creative skills (e.g. divergent thinking)',
      'Language: a distinctly human symbol system, rule-governed, used to communicate intentions/feelings/motives; major language development occurs in the first 2-3 years of life; language and thought are closely/intricately related'
    ],
    tips: [
      'Mental set vs Functional fixedness: mental set = sticking to a PROCEDURE that worked before; functional fixedness = fixed on an object\'s USUAL function — both block creative problem solving',
      'Divergent thinking (generating many possible solutions) is the thinking style most linked to CREATIVITY, as opposed to convergent thinking (narrowing to one correct answer)'
    ],
    bestPractices: [
      'When distinguishing deductive/inductive reasoning, give one clear example of each direction (general→specific vs specific→general)',
      'Always state that judgment and decision-making are "interrelated, not identical" when a question pairs them'
    ]
  },
  {
    chapter: 'Motivation and Emotion',
    formulae: [],
    logic: [
      'Motivation = the process of persistent, goal-directed behaviour arising from driving forces (needs/motives)',
      'Two types: Biological motivation (innate causes — hormones, neurotransmitters, brain structures like the hypothalamus/limbic system; e.g. hunger, thirst, sex) vs Psychosocial motivation (from interaction with the social environment; e.g. need for affiliation, need for achievement, curiosity/exploration, need for power)',
      "Maslow's Hierarchy of Needs (ascending order): Physiological needs → Safety needs → Love/Belongingness needs → Esteem needs → Self-actualisation (top of the hierarchy) — lower needs generally must be reasonably satisfied before higher ones become motivating",
      'Emotion = a complex pattern of arousal involving (i) physiological activation, (ii) conscious awareness of feeling, (iii) a specific cognitive label describing the experience',
      'Basic emotions: joy, anger, sorrow, surprise, fear — other emotions arise as COMBINATIONS of these basics',
      'Culture strongly shapes how emotions are expressed and interpreted; emotions are expressed through both verbal and non-verbal (facial expression, gesture, tone) channels',
      'Effective management of emotions (especially negative ones) is important for physical and psychological well-being'
    ],
    tips: [
      "Maslow's hierarchy order (bottom to top): Physiological → Safety → Love/Belonging → Esteem → Self-actualisation — a guaranteed diagram/sequence question",
      'Biological motives (hunger/thirst/sex) have a clear physiological base; Psychosocial motives (achievement/affiliation/power) are learned through social interaction — know which examples go in which bucket'
    ],
    bestPractices: [
      'When applying Maslow\'s hierarchy to a real person/case (a common project-style question), explicitly map their behaviour to the SPECIFIC need level being satisfied',
      'An emotion-management answer should name concrete strategies (e.g. relaxation, reappraisal, expressing feelings appropriately), not just say "manage emotions well"'
    ]
  }
];
