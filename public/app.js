const state = {
    board: null,
    mode: null,
    subject: null,
    chapter: null,
    currentScreen: 'board-selection',
    // Test Session State
    test: {
        questions: [],
        answers: {}, // { qIndex: 'A'|'B'|'C'|'D' }
        review: new Set(),
        currentIndex: 0,
        timeLeft: 0,
        timerInterval: null
    }
};

const API_BASE = '/api/v1';

const screens = {
    'board-selection': `
        <div class="screen active" id="board-selection">
            <h1>Welcome to Mygr10</h1>
            <p class="subtitle">Select your board to begin practicing</p>
            <div class="btn-group">
                <button class="btn" onclick="app.setBoard('CBSE')">CBSE (Central Board of Secondary Education)</button>
                <button class="btn" onclick="app.setBoard('ICSE')">ICSE (Indian Certificate of Secondary Education)</button>
                <button class="btn" onclick="app.setBoard('IB')">IB Diploma (MYP-5)</button>
            </div>
        </div>
    `,
    'dashboard': `
        <div class="screen" id="dashboard">
            <h1>Dashboard</h1>
            <p class="subtitle">Board: <strong id="display-board"></strong></p>
            <div class="btn-group">
                <div class="card">
                    <h3>Subject-wise Full Mock</h3>
                    <p>40 MCQs • 90 Minutes • Full Syllabus</p>
                    <button class="btn primary" onclick="app.setMode('mock')">Start Mock Test</button>
                </div>
                <div class="card">
                    <h3>Chapter-wise Drill</h3>
                    <p>25 MCQs • Untimed • Focused Learning</p>
                    <button class="btn primary" onclick="app.setMode('drill')">Start Chapter Drill</button>
                </div>
            </div>
            <button class="btn" style="margin-top: 20px; text-align: center;" onclick="app.setBoard(null)">Change Board</button>
        </div>
    `,
    'subject-selection': `
        <div class="screen" id="subject-selection">
            <h1>Select Subject</h1>
            <p class="subtitle">Choose a subject to practice</p>
            <div id="subject-list" class="btn-group">
                <!-- Subjects injected here -->
            </div>
            <button class="btn" style="margin-top: 20px; text-align: center;" onclick="app.navigate('dashboard')">Back to Dashboard</button>
        </div>
    `,
    'test-session': `
        <div class="screen" id="test-session">
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 20px;">
                <h2 id="test-title" style="margin: 0; font-size: 18px;"></h2>
                <div id="timer" style="font-family: monospace; font-size: 20px; font-weight: bold; background: #000; color: #0f0; padding: 4px 8px; border-radius: 4px;">00:00</div>
            </div>
            
            <div style="display: grid; grid-template-columns: 1fr 250px; gap: 20px;">
                <div class="card">
                    <div id="question-container">
                        <p id="q-number" style="font-weight: bold; color: var(--text-light);"></p>
                        <p id="q-text" style="font-size: 18px; margin-bottom: 20px;"></p>
                        <div id="options-list" class="btn-group">
                            <!-- Options injected here -->
                        </div>
                    </div>
                    <div style="display: flex; justify-content: space-between; margin-top: 30px;">
                        <button class="btn" onclick="app.prevQuestion()">Previous</button>
                        <button class="btn" onclick="app.markForReview()">Mark for Review</button>
                        <button class="btn primary" onclick="app.nextQuestion()">Next</button>
                    </div>
                </div>
                
                <div class="card">
                    <h3 style="font-size: 16px; margin-top: 0;">Question Palette</h3>
                    <div id="palette" class="omr-grid">
                        <!-- Palette bubbles injected here -->
                    </div>
                    <button class="btn primary" style="width: 100%; margin-top: 20px;" onclick="app.submitTest()">Submit Test</button>
                </div>
            </div>
        </div>
    `,
    'results': `
        <div class="screen" id="results">
            <h1 style="text-align: center;">Test Results</h1>
            <div class="card" style="text-align: center;">
                <div style="font-size: 48px; font-weight: bold; color: var(--primary);" id="final-score">0/0</div>
                <p id="score-comment" style="color: var(--text-light);"></p>
            </div>
            <div id="review-list" style="display: grid; gap: 15px; margin-top: 20px;">
                <!-- Wrong answers injected here -->
            </div>
            <button class="btn primary" style="margin-top: 20px;" onclick="app.navigate('dashboard')">Back to Dashboard</button>
        </div>
    `
};

const app = {
    init() {
        this.render();
    },

    render() {
        const appDiv = document.getElementById('app');
        appDiv.innerHTML = screens[state.currentScreen] || '';
        const screenEl = appDiv.querySelector('.screen');
        if (screenEl) screenEl.classList.add('active');

        if (state.currentScreen === 'dashboard') {
            document.getElementById('display-board').innerText = state.board;
        }
        
        if (state.currentScreen === 'subject-selection') {
            this.renderSubjects();
        }
    },

    navigate(screenId) {
        state.currentScreen = screenId;
        this.render();
    },

    setBoard(board) {
        state.board = board;
        this.navigate(board ? 'dashboard' : 'board-selection');
    },

    setMode(mode) {
        state.mode = mode;
        this.navigate('subject-selection');
    },

    renderSubjects() {
        const list = document.getElementById('subject-list');
        const subjects = state.board === 'CBSE' 
            ? ['Mathematics', 'Science', 'Social Science', 'English', 'Hindi']
            : state.board === 'ICSE'
            ? ['Mathematics', 'Physics', 'Chemistry', 'Biology', 'History & Civics', 'Geography', 'English']
            : ['Mathematics', 'Sciences', 'Individuals & Societies', 'Language & Literature'];

        list.innerHTML = subjects.map(s => 
            `<button class="btn" onclick="app.selectSubject('${s}')">${s}</button>`
        ).join('');
    },

    selectSubject(subject) {
        state.subject = subject;
        if (state.mode === 'mock') {
            this.startTest(40, 90 * 60); // 40 Qs, 90 Mins
        } else {
            this.startTest(25, null); // 25 Qs, Untimed
        }
    },

    startTest(qCount, timeLimit) {
        // Mock data for now until backend is ready
        this.questions = Array.from({ length: qCount }, (_, i) => ({
            id: i,
            text: `Sample question ${i + 1} for ${state.subject}? This is a mock question to test the OMR interface.`,
            options: ['Option A', 'Option B', 'Option C', 'Option D'],
            correct: 0, // Option A
            tag: 'Topic ' + (Math.floor(i / 5) + 1)
        }));
        this.userAnswers = {};
        this.reviewSet = new Set();
        this.currentQuestionIndex = 0;
        
        this.navigate('test-session');
        
        const titleEl = document.getElementById('test-title');
        if (titleEl) {
            titleEl.innerText = `${state.board} ${state.subject} - ${state.mode === 'mock' ? 'Full Mock' : 'Chapter Drill'}`;
        }

        this.renderQuestion();
        this.renderPalette();
        this.startTimer(timeLimit);
    },

    renderQuestion() {
        const q = this.questions[this.currentQuestionIndex];
        const numEl = document.getElementById('q-number');
        const textEl = document.getElementById('q-text');
        const optionsList = document.getElementById('options-list');

        if (!numEl || !textEl || !optionsList) return;

        numEl.innerText = `Question ${this.currentQuestionIndex + 1} of ${this.questions.length}`;
        textEl.innerText = q.text;
        
        optionsList.innerHTML = q.options.map((opt, i) => `
            <button class="btn ${this.userAnswers[q.id] === i ? 'primary' : ''}" onclick="app.selectOption(${i})">
                ${String.fromCharCode(65 + i)}) ${opt}
            </button>
        `).join('');
    },

    renderPalette() {
        const palette = document.getElementById('palette');
        if (!palette) return;

        palette.innerHTML = this.questions.map((q, i) => {
            const cls = this.reviewSet.has(i)
                ? 'omr-bubble review'
                : this.userAnswers[q.id] !== undefined
                    ? 'omr-bubble answered'
                    : 'omr-bubble';
            return `<div class="${cls}" onclick="app.jumpToQuestion(${i})">${i + 1}</div>`;
        }).join('');
    },

    selectOption(index) {
        const q = this.questions[this.currentQuestionIndex];
        this.userAnswers[q.id] = index;
        this.renderQuestion();
        this.renderPalette();
    },

    nextQuestion() {
        if (this.currentQuestionIndex < this.questions.length - 1) {
            this.currentQuestionIndex++;
            this.renderQuestion();
            this.renderPalette();
        }
    },

    prevQuestion() {
        if (this.currentQuestionIndex > 0) {
            this.currentQuestionIndex--;
            this.renderQuestion();
            this.renderPalette();
        }
    },

    jumpToQuestion(index) {
        this.currentQuestionIndex = index;
        this.renderQuestion();
        this.renderPalette();
    },

    markForReview() {
        const idx = this.currentQuestionIndex;
        if (this.reviewSet.has(idx)) {
            this.reviewSet.delete(idx);
        } else {
            this.reviewSet.add(idx);
        }
        this.renderPalette();
    },

    startTimer(timeLimit) {
        const timerEl = document.getElementById('timer');
        if (!timerEl) return;

        if (this.timerInterval) clearInterval(this.timerInterval);

        if (timeLimit === null) {
            timerEl.innerText = "Untimed";
            return;
        }

        let seconds = timeLimit;
        const updateTimer = () => {
            if (seconds <= 0) {
                this.submitTest();
                return;
            }
            const m = Math.floor(seconds / 60);
            const s = seconds % 60;
            timerEl.innerText = `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
            seconds--;
        };

        this.timerInterval = setInterval(updateTimer, 1000);
        updateTimer();
    },

    submitTest() {
        if (this.timerInterval) clearInterval(this.timerInterval);
        let score = 0;
        const review = [];

        this.questions.forEach(q => {
            if (this.userAnswers[q.id] === q.correct) {
                score++;
            } else {
                review.push({
                    q: q.text,
                    correct: q.options[q.correct],
                    user: q.options[this.userAnswers[q.id]] || 'Not Answered'
                });
            }
        });

        this.navigate('results');
        
        const scoreEl = document.getElementById('final-score');
        const commentEl = document.getElementById('score-comment');
        if (scoreEl) scoreEl.innerText = `${score}/${this.questions.length}`;
        if (commentEl) commentEl.innerText = score === this.questions.length ? "Perfect Score!" : "Keep practicing!";
        
        const reviewList = document.getElementById('review-list');
        if (reviewList) {
            reviewList.innerHTML = review.map(item => `
                <div class="card" style="border-left: 4px solid var(--error);">
                    <p><strong>${item.q}</strong></p>
                    <p style="color: var(--error);">Your answer: ${item.user}</p>
                    <p style="color: var(--success);">Correct answer: ${item.correct}</p>
                </div>
            `).join('');
        }
    }
};

window.app = app;
app.init();
