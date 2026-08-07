import { jsonOk, jsonNotFound } from '../utils/response.js';

/**
 * Mygr10 Data Model
 * 
 * In a production environment, this would be stored in Cloudflare D1 (SQL) 
 * or KV. For this version, we use a static data structure to provide 
 * the content for the frontend.
 */

const DATA = {
    boards: {
        CBSE: {
            name: 'Central Board of Secondary Education',
            subjects: {
                'Mathematics': {
                    chapters: {
                        'Real Numbers': [
                            { id: 'm1', stem: 'Which of the following is an irrational number?', options: ['√4', '√9', '√2', '√16'], correct: 2, explanation: '√2 cannot be expressed as a fraction of two integers.' },
                            { id: 'm2', stem: 'The HCF of two prime numbers a and b is:', options: ['0', '1', 'ab', 'a+b'], correct: 1, explanation: 'Prime numbers have no common factors other than 1.' },
                        ],
                        'Polynomials': [
                            { id: 'm3', stem: 'A quadratic polynomial can have at most how many zeroes?', options: ['1', '2', '3', '0'], correct: 1, explanation: 'The degree of a quadratic polynomial is 2, so it has at most 2 zeroes.' },
                        ]
                    }
                },
                'Science': {
                    chapters: {
                        'Chemical Reactions': [
                            { id: 's1', stem: 'Which of the following is a decomposition reaction?', options: ['C + O2 -> CO2', '2Mg + O2 -> 2MgO', 'CaCO3 -> CaO + CO2', 'H2 + Cl2 -> 2HCl'], correct: 2, explanation: 'Calcium carbonate breaks down into calcium oxide and carbon dioxide.' },
                        ]
                    }
                }
            }
        },
        ICSE: {
            name: 'Indian Certificate of Secondary Education',
            subjects: {
                'Physics': {
                    chapters: {
                        'Force': [
                            { id: 'p1', stem: 'The SI unit of force is:', options: ['Joule', 'Watt', 'Newton', 'Pascal'], correct: 2, explanation: 'Force is measured in Newtons (N).' },
                        ]
                    }
                }
            }
        },
        IB: {
            name: 'International Baccalaureate',
            subjects: {
                'Mathematics': {
                    chapters: {
                        'Algebra': [
                            { id: 'ib1', stem: 'Solve for x: 2x + 5 = 15', options: ['5', '10', '15', '20'], correct: 0, explanation: '2x = 10, so x = 5.' },
                        ]
                    }
                }
            }
        }
    }
};

export function getBoards() {
    return jsonOk({
        boards: Object.keys(DATA.boards).map(id => ({ id, name: DATA.boards[id].name }))
    });
}

export function getSubjects(request, ctx) {
    const boardId = ctx.params.board;
    const board = DATA.boards[boardId];
    if (!board) return jsonNotFound(`Board ${boardId} not found`);
    
    return jsonOk({
        subjects: Object.keys(board.subjects).map(id => ({ id }))
    });
}

export function getChapters(request, ctx) {
    const { board, subject } = ctx.params;
    const board = DATA.boards[board];
    if (!board) return jsonNotFound(`Board ${board} not found`);
    
    const subject = board.subjects[subject];
    if (!subject) return jsonNotFound(`Subject ${subject} not found in ${board}`);
    
    return jsonOk({
        chapters: Object.keys(subject.chapters).map(id => ({ id }))
    });
}

export function getQuestions(request, ctx) {
    const { board, subject, chapter } = ctx.params;
    const boardData = DATA.boards[board];
    if (!boardData) return jsonNotFound(`Board ${board} not found`);
    
    const subjectData = boardData.subjects[subject];
    if (!subjectData) return jsonNotFound(`Subject ${subject} not found`);
    
    const questions = subjectData.chapters[chapter];
    if (!questions) return jsonNotFound(`Chapter ${chapter} not found`);
    
    // Return questions without the correct answer to prevent cheating
    const sanitized = questions.map(({ correct, explanation, ...rest }) => rest);
    
    return jsonOk({ questions: sanitized });
}

export function submitTest(request, ctx) {
    // In a real app, this would validate answers on the server
    // For now, we just return the correct answers for the requested set
    const { board, subject, chapter } = ctx.params;
    const boardData = DATA.boards[board];
    const subjectData = boardData?.subjects[subject];
    const questions = subjectData?.chapters[chapter];
    
    if (!questions) return jsonNotFound('Test data not found');
    
    return jsonOk({
        answers: questions.map(q => ({ id: q.id, correct: q.correct, explanation: q.explanation }))
    });
}
