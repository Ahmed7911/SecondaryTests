import React, { useState } from "react";
import "./Test1.css";

const quizData =
{
  "quiz_title": "English Language Proficiency Test (Timed)",
  "duration_minutes": 60,
  "contact": "Mr. Ahmed Mostafa 01067628622",
  "reading_comprehension_passage": `Egypt’s heritage is one of the richest in the world. From the ancient pyramids of Giza to the temples
of Luxor and Aswan, every stone tells a story of greatness and wisdom. These monuments remind us of
the creativity and hard work of the ancient Egyptians who built them thousands of years ago without
modern tools.
But Egypt’s heritage is not only about ancient history. It also lives in its music, art, traditions, and the
warm hospitality of its people. Every festival, meal, and song carries a part of the Egyptian soul that has
survived through centuries.
Today, protecting this great heritage is a shared responsibility. When people learn about their past, they
become proud of their identity and eager to build a stronger future. Egypt’s heritage is not just in
museums — it is alive in the hearts of its people.`,
  "questions": [
    {
      "id": 1,
      "type": "multiple_choice_multi_select",
      "instruction": "Choose TWO correct synonyms for 'isolated'.",
      "stem": "The old man lives in an **isolated** house far from the city. The synonyms of 'isolated' are:",
      "options": ["nearby", "lonely", "empty", "close", "remote"],
      "correct_answers": ["lonely", "remote"],
      "points": 2
    },
    {
      "id": 2,
      "type": "multiple_choice_multi_select",
      "instruction": "Choose TWO correct antonyms for 'protect'.",
      "stem": "We must **protect** our environment to keep it safe for future generations. The antonyms of 'protect' are:",
      "options": ["harm", "guard", "save", "damage", "secure"],
      "correct_answers": ["harm", "damage"],
      "points": 2
    },
    {
      "id": 3,
      "type": "multiple_choice_single_select",
      "instruction": "Choose the correct answer.",
      "stem": "He lost all his money because he trusted an online __________.",
      "options": ["scam", "survey", "scar", "scan"],
      "correct_answer": "scam",
      "points": 1
    },
    {
      "id": 4,
      "type": "multiple_choice_single_select",
      "instruction": "Choose the correct answer.",
      "stem": "Good teachers use different __________ to make their lessons interesting.",
      "options": ["rumors", "mistakes", "chances", "tactics"],
      "correct_answer": "tactics",
      "points": 1
    },
    {
      "id": 5,
      "type": "multiple_choice_single_select",
      "instruction": "Choose the correct answer.",
      "stem": "A/ An __________ is a sudden serious situation that needs quick action or help.",
      "options": ["appointment", "discovery", "emergency", "interaction"],
      "correct_answer": "emergency",
      "points": 1
    },
    {
      "id": 6,
      "type": "multiple_choice_single_select",
      "instruction": "Choose the correct answer.",
      "stem": "Spreading lies can completely ruin someone’s __________",
      "options": ["obligation", "interest", "reputation", "misinformation"],
      "correct_answer": "reputation",
      "points": 1
    },
    {
      "id": 7,
      "type": "multiple_choice_single_select",
      "instruction": "Choose the correct answer.",
      "stem": "Her face would light__________ whenever she saw the children smiling.",
      "options": ["down", "up", "on", "out"],
      "correct_answer": "up",
      "points": 1
    },
    {
      "id": 8,
      "type": "multiple_choice_single_select",
      "instruction": "Choose the correct answer.",
      "stem": "The beauty of the ancient temples is __________ to artists and writers even today.",
      "options": ["inspire", "inspired", "inspiration", "inspiring"],
      "correct_answer": "inspiring",
      "points": 1
    },
    {
      "id": 9,
      "type": "multiple_choice_single_select",
      "instruction": "Choose the correct answer.",
      "stem": "Egyptians __________ great pride in their long history and achievements.",
      "options": ["make", "take", "do", "build"],
      "correct_answer": "take",
      "points": 1
    },
    {
      "id": 10,
      "type": "multiple_choice_single_select",
      "instruction": "Choose the correct answer.",
      "stem": "__________ my stay in England, I learned English.",
      "options": ["While", "When", "During", "On"],
      "correct_answer": "During",
      "points": 1
    },
    {
      "id": 11,
      "type": "multiple_choice_single_select",
      "instruction": "Choose the correct answer.",
      "stem": "I’d rather I __________ abroad two years ago.",
      "options": ["travel", "traveled", "had traveled", "was traveling"],
      "correct_answer": "had traveled",
      "points": 1
    },
    {
      "id": 12,
      "type": "multiple_choice_single_select",
      "instruction": "Choose the correct answer.",
      "stem": "He never used to be careless, but now he __________",
      "options": ["doesn't", "isn't", "is", "does"],
      "correct_answer": "is",
      "points": 1
    },
    {
      "id": 13,
      "type": "multiple_choice_single_select",
      "instruction": "Choose the correct answer.",
      "stem": "The windows __________ all morning yesterday.",
      "options": ["was cleaned", "were cleaning", "were being cleaned", "have been cleaned"],
      "correct_answer": "were being cleaned",
      "points": 1
    },
    {
      "id": 14,
      "type": "multiple_choice_single_select",
      "instruction": "Choose the correct answer.",
      "stem": "My students __________ study hard for the exams.",
      "options": ["had better", "ought", "shouldn’t", "need"],
      "correct_answer": "had better",
      "points": 1
    },
    {
      "id": 15,
      "type": "multiple_choice_single_select",
      "instruction": "Choose the correct answer.",
      "stem": "It is __________ to cheat in exams.",
      "options": ["necessary", "allowed", "forbidden", "mustn't"],
      "correct_answer": "forbidden",
      "points": 1
    },
    {
      "id": 16,
      "type": "multiple_choice_single_select",
      "instruction": "Choose the correct answer.",
      "stem": "She isn't late for school, so she __________ hurry.",
      "options": ["must", "needn't", "doesn't have", "has to"],
      "correct_answer": "needn't",
      "points": 1
    },
    {
      "id": 17,
      "type": "multiple_choice_single_select",
      "instruction": "Choose the correct answer.",
      "stem": "If I __________ enough money, I would buy a new laptop.",
      "options": ["had", "have", "will have", "had had"],
      "correct_answer": "had",
      "points": 1
    },
    {
      "id": 18,
      "type": "multiple_choice_single_select",
      "instruction": "Choose the correct answer.",
      "stem": "If she feels hungry, she usually __________ a sandwich.",
      "options": ["ate", "will eat", "would eat", "eats"],
      "correct_answer": "eats",
      "points": 1
    },
    {
      "id": 19,
      "type": "multiple_choice_single_select",
      "instruction": "Choose the correct answer.",
      "stem": "__________ Mona come early, I will tell her the news.",
      "options": ["Should", "Were", "Had", "If"],
      "correct_answer": "Should",
      "points": 1
    },
    {
      "id": 20,
      "type": "short_answer",
      "category": "The Novel 'The old man and the sea'",
      "stem": "Why do you think Manolin liked Santiago?",
      "points": 2
    },
    {
      "id": 21,
      "type": "short_answer",
      "category": "The Novel 'The old man and the sea'",
      "stem": "If you were Santiago, would you go fishing again?",
      "points": 2
    },
    {
      "id": 22,
      "type": "short_answer",
      "category": "The Novel 'The old man and the sea'",
      "stem": "What constitutes faith?",
      "points": 2
    },
    {
      "id": 23,
      "type": "short_answer",
      "category": "The Novel 'The old man and the sea'",
      "stem": "What is monotheism?",
      "points": 2
    },
    {
      "id": 24,
      "type": "reading_comprehension",
      "passage_reference": "Paragraph 1-3",
      "stem": "What is the main idea of the passage?",
      "options": ["Egypt has a poor and forgotten history.", "Egypt’s heritage combines ancient and modern traditions.", "Only the pyramids show Egypt’s greatness.", "Egyptian people don’t value their history."],
      "correct_answer": "Egypt’s heritage combines ancient and modern traditions.",
      "points": 1
    },
    {
      "id": 25,
      "type": "reading_comprehension",
      "passage_reference": "Paragraph 3",
      "stem": "What is the writer’s opinion about Egypt’s heritage?",
      "options": ["It should be forgotten.", "It is no longer important.", "It only belongs to the past.", "It is something to be protected."],
      "correct_answer": "It is something to be protected.",
      "points": 1
    },
    {
      "id": 26,
      "type": "reading_comprehension",
      "passage_reference": "Inference",
      "stem": "What can you infer from the passage?",
      "options": ["Heritage connects people to their history and identity", "Egyptians do not care about art.", "Music is more important than temples.", "Modern Egypt has no traditions."],
      "correct_answer": "Heritage connects people to their history and identity",
      "points": 1
    },
    {
      "id": 27,
      "type": "reading_comprehension",
      "passage_reference": "Paragraph 2 (Vocabulary)",
      "stem": "The word “hospitality” in paragraph 2 is closest in meaning to............................",
      "options": ["kindness and welcome", "sadness and silence", "fear and anger", "pride and distance"],
      "correct_answer": "kindness and welcome",
      "points": 1
    },
    {
      "id": 28,
      "type": "reading_comprehension",
      "passage_reference": "Paragraph 2 (Detail)",
      "stem": "According to the passage, what gives Egyptian festivals special value?",
      "options": ["Their use of modern technology.", "Their foreign visitors.", "Their connection to the people’s soul and traditions.", "Their expensive decorations."],
      "correct_answer": "Their connection to the people’s soul and traditions.",
      "points": 1
    },
    {
      "id": 29,
      "type": "reading_comprehension",
      "passage_reference": "Vocabulary",
      "stem": "What is the opposite of “ancient” as used in the passage?",
      "options": ["old", "modern", "valuable", "hidden"],
      "correct_answer": "modern",
      "points": 1
    },
    {
      "id": 30,
      "type": "reading_comprehension",
      "passage_reference": "Paragraph 3 (Detail)",
      "stem": "What does the writer suggest about learning history?",
      "options": ["It makes people bored.", "It helps people feel proud and responsible.", "It is a waste of time.", "It should be avoided."],
      "correct_answer": "It helps people feel proud and responsible.",
      "points": 1
    },
    {
      "id": 31,
      "type": "translation_arabic_to_english",
      "stem_arabic": "ساعد المتطوعون في تنظيف الشوارع ألنهم يؤمنون أن الأفعال الصغيرة تصنع فارقًا كبيرًا.",
      "options": ["Volunteers helped clean the streets because they believe small actions make a big difference.", "Volunteers helped clean the streets because they trust small actions make a big change.", "Volunteers clean up the streets since they believe small actions do a big difference.", "Volunteers help cleaning up the streets since they trust little actions make a big difference."],
      "correct_answer": "Volunteers helped clean the streets because they believe small actions make a big difference.",
      "points": 1
    },
    {
      "id": 32,
      "type": "translation_english_to_arabic",
      "stem_english": "A single lie can destroy years of trust, while one honest word can rebuild it again.",
      "options": ["الكذبة الواحدة يمكن أن تبني سنوات من الثقة ، بينما كلمة صادقة واحدة يمكن أن تدمر بناءها.", "الكلمة الواحدة يمكن أن تدمر سنوات من الحقيقة ، بينما كلمة صادقة واحدة يمكن أن تعيد بناءها.", "الكذبة الواحدة يمكن أن تدمر سنوات من الثقة ، بينما كلمة صادقة واحدة يمكن أن تعيد بناءها.", "الكذبة الواحدة يمكن أن تدمر سنوات من الثقة ، بينما كلمة صادقة واحدة ال يمكن أن تعيد بناءها."],
      "correct_answer": "الكذبة الواحدة يمكن أن تدمر سنوات من الثقة ، بينما كلمة صادقة واحدة يمكن أن تعيد بناءها.",
      "points": 1
    }
  ]
}



function Test1() {
    const [marks, setMarks] = React.useState(0);
    const [selectedAnswers, setSelectedAnswers] = React.useState({});
    const [feedback, setFeedback] = React.useState({});
    const [submitted, setSubmitted] = React.useState(false);
    const [openAnswer , setOpenanswer] = React.useState({});
    const [studentName , setStudentName] = React.useState('');

    // initialize timer from quizData.duration_minutes
    const formatHMS = (totalSeconds) => {
      const hrs = Math.floor(totalSeconds / 3600);
      const mins = Math.floor((totalSeconds % 3600) / 60);
      const secs = totalSeconds % 60;
      return `${String(hrs).padStart(2, '0')}:${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
    };

    const initialSeconds = quizData.duration_minutes * 60;
    const [timeRemaining, setTimeRemaining] = React.useState(() => formatHMS(initialSeconds));

    React.useEffect(() => {
      let remaining = initialSeconds;
      setTimeRemaining(formatHMS(remaining));
      const timer = setInterval(() => {
        remaining -= 1;
        if (remaining <= 0) {
          setTimeRemaining('00:00:00');
          clearInterval(timer);
          return;
        }
        setTimeRemaining(formatHMS(remaining));
      }, 1000);

      return () => clearInterval(timer);
    }, []);

    const handleOptionSelect = (questionId, option, isMultiSelect) => {
      // Prevent changes after submission or when time ended
      if (submitted || timeRemaining === '00:00:00') return;

      if (isMultiSelect) {
        setSelectedAnswers(prev => {
          const current = Array.isArray(prev[questionId]) ? prev[questionId] : [];
          const updated = current.includes(option)
            ? current.filter(o => o !== option)
            : [...current, option];
          return {
            ...prev,
            [questionId]: updated
          };
        });
      } else {
        setSelectedAnswers(prev => ({
          ...prev,
          [questionId]: option
        }));
      }
    };

    const checkAnswerCorrectness = (question) => {
      const userAnswer = selectedAnswers[question.id];
      if (!userAnswer) return null;

      if (question.type === "multiple_choice_multi_select" && question.correct_answers) {
        const sortedUser = Array.isArray(userAnswer) ? [...userAnswer].sort() : [userAnswer].sort();
        const sortedCorrect = [...question.correct_answers].sort();
        return JSON.stringify(sortedUser) === JSON.stringify(sortedCorrect);
      } else if (question.correct_answer) {
        return userAnswer === question.correct_answer;
      }
      return null;
    };

    const calculateMarks = () => {
        let totalMarks = 0;
        const newFeedback = {};
        quizData.questions.forEach((question) => {
            const isCorrect = checkAnswerCorrectness(question);
            newFeedback[question.id] = isCorrect;
            if (isCorrect) {
                totalMarks += question.points;
            }
        });
      setFeedback(newFeedback);
        setMarks(totalMarks);
      setSubmitted(true);
      // open default mail client with quiz result (does not send automatically)
      const totalPoints = quizData.questions.reduce((sum, q) => sum + q.points, 0);
      const body = `Name: ${studentName}\nScore: ${totalMarks} / ${totalPoints}`;
      window.location.href = `mailto:ashmaeyahmed7@gmail.com?subject=${encodeURIComponent(quizData.quiz_title + ' - Result')}&body=${encodeURIComponent(body)}`;
    };
    // if submitted set time to 00:00:00
    // Auto-submit when timer reaches 00:00:00
    React.useEffect(() => {
      if (timeRemaining === '00:00:00') {
        calculateMarks();
      }
    }, [timeRemaining]);
    return (
        <>
        {quizData.reading_comprehension_passage && (
          <p
            className="paragraph"

            onClick={(e) => {
              // Safely adjust styles when the paragraph is clicked
              const el = e.currentTarget;
              if (el.style.width === '100%') {
                el.style.width = '50px';
                el.style.height = '50px';
                el.style.borderRadius = '50%';
              } else {
                el.style.width = '100%';
                el.style.height = 'fit-content';
                el.style.borderRadius = '5px';
              }
            }}
          >
            {quizData.reading_comprehension_passage}
          </p>
        )}
          <div className="progress-bar">
            <div className="progress-fill" style={{ width: `${(Object.keys(selectedAnswers).length / quizData.questions.length) * 100}%` }}></div>
          </div>
          <input className="studentName" value={studentName} onChange={(e) => setStudentName(e.target.value)} placeholder="Enter your name"  />
          <div className="timer" style={{ marginTop: '8px' }}>
            <p style={{ fontSize: '1rem' }}><strong></strong> {timeRemaining}</p>
          </div>
          <div className="test-container">
            <div className="test-header">
              <h1>{quizData.quiz_title}</h1>
              <p><strong>Duration:</strong> {quizData.duration_minutes} minutes</p>
              <p><strong>Instructor:</strong> {quizData.contact}</p>
              <p><strong>Total Questions:</strong> {quizData.questions.length}</p>
            </div>
            {quizData.questions.map((question, index) => {
              const isMultiSelect = question.type === "multiple_choice_multi_select";
              const isCorrect = feedback[question.id];
              let cardStyle = {};
              if (isCorrect === true) cardStyle.borderLeft = '5px solid green';
              if (isCorrect === false) cardStyle.borderLeft = '5px solid red';

              return (
                <div key={index} className="question-card" style={cardStyle}>
                  <span className="question-number">Q{index + 1}</span>
                  <h3 className="question-text">{question.stem}</h3>
                  <p><strong>Type:</strong> {question.type.replace(/_/g, ' ')}</p>
                  <p><strong>Points:</strong> {question.points}</p>
                  
                  <p className="translation">{question.stem_arabic}</p>
                  <p className="translation">{question.stem_english}</p>
                  {isMultiSelect && index < 2 && <p style={{ color: '#3498db', fontWeight: 'bold' }}>📌 Select TWO correct answers:</p>}
                  {question.options && (
                    <div className="options-container">
                      {question.options.map((option, optIndex) => (
                        <div key={optIndex} className="option">
                          <input
                            type={isMultiSelect ? "checkbox" : "radio"}
                            id={`q${question.id}_opt${optIndex}`}
                            name={isMultiSelect ? undefined : `question_${question.id}`}
                            value={option}
                            onChange={() => handleOptionSelect(question.id, option, isMultiSelect)}
                            disabled={submitted || timeRemaining === '00:00:00'}
                            checked={
                              isMultiSelect
                                ? Array.isArray(selectedAnswers[question.id]) && selectedAnswers[question.id].includes(option)
                                : selectedAnswers[question.id] === option
                            }
                          />
                          <label htmlFor={`q${question.id}_opt${optIndex}`}>
                            {option}
                          </label>
                        </div>
                      ))}
                    </div>
                  )}
                  {!question.options && (
                    question.type === "short_answer" ? (
                      <div>
                        <input
                          className="openAnswer"
                          value={openAnswer[question.id] || ''}
                          onChange={(e) => setOpenanswer(prev => ({ ...prev, [question.id]: e.target.value }))}
                          disabled={submitted || timeRemaining === '00:00:00'}
                          placeholder="Type your answer here..."
                        />
                      </div>
                    ) : (
                      <p><em>Short answer or essay question - not implemented in this view</em></p>
                    )
                  )}
                  {!question.options && (
                    question.type === "reading_comprehension" ? (
                      <div>
                        <p className="paragraph">{quizData.reading_comprehension_passage}</p>
                      </div>
                    ) : null
                  )}
                  {isCorrect === true && <p style={{ color: 'green', fontWeight: 'bold', marginTop: '10px' }}>✓ Correct!</p>}
                  {isCorrect === false && (
                    <p style={{ color: 'red', fontWeight: 'bold', marginTop: '10px' }}>
                      ✗ Incorrect! 
                      {question.correct_answers ? ` Correct answers: ${question.correct_answers.join(', ')}` : ` Correct answer: ${question.correct_answer}`}
                    </p>
                  )}
                </div>
              );
            })}
            <div style={{ textAlign: 'center', marginTop: '40px' }}>
              <h2 style={{ fontSize: '1.8rem', color: '#2c3e50' }}>Your Marks: <span style={{ color: '#27ae60' }}>{marks}</span>/{quizData.questions.reduce((sum, q) => sum + q.points, 0)}</h2>
              <button onClick={calculateMarks}
                timeRemaining='00:00:00'
                disabled={submitted || timeRemaining === '00:00:00'} style={{
                  padding: '12px 30px',
                  fontSize: '1.1rem',
                  marginTop: '20px',
                  background: 'linear-gradient(135deg, #3498db 0%, #2980b9 100%)',
                  color: 'white',
                  border: 'none',
                  borderRadius: '8px',
                  cursor: 'pointer',
                  fontWeight: 'bold',
                  transition: 'transform 0.2s ease'
                }} onMouseOver={(e) => e.target.style.transform = 'scale(1.05)'} onMouseOut={(e) => e.target.style.transform = 'scale(1)'}
              >
                {submitted ? 'Submitted' : 'Submit Quiz'}
              </button>
            </div>
          </div>
        </>
    );
}
export default Test1;