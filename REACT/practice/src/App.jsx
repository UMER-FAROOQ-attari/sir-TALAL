import { useMemo, useState } from "react";
import "./App.css";
import { questions as baseQuestions } from "./questions";

function ProgressBar({ current, total }) {
  const percent = Math.round((current / total) * 100);
  return (
    <div className="w-full">
      <div className="mb-2 flex items-center justify-between text-xs font-semibold text-emerald-900">
        <span>
          Question {current}/{total}
        </span>
        <span>{percent}%</span>
      </div>
      <div className="h-2 w-full overflow-hidden rounded-full bg-emerald-100">
        <div
          className="h-full rounded-full bg-gradient-to-r from-emerald-500 to-amber-400 transition-all duration-300"
          style={{ width: `${percent}%` }}
        />
      </div>
    </div>
  );
}

function OptionButton({ label, isSelected, state, onClick, disabled }) {
  const base =
    "w-full rounded-xl border px-4 py-3 text-left text-sm font-semibold transition";
  const idle =
    "border-emerald-200 bg-white text-emerald-900 hover:border-emerald-400";
  const selected =
    state === "correct"
      ? "border-emerald-500 bg-emerald-50 text-emerald-900"
      : state === "wrong"
      ? "border-rose-500 bg-rose-50 text-rose-900"
      : "border-amber-400 bg-amber-50 text-amber-900";
  const styles = isSelected ? selected : idle;
  return (
    <button
      type="button"
      className={`${base} ${styles}`}
      onClick={onClick}
      disabled={disabled}
    >
      {label}
    </button>
  );
}

function ResultsPanel({ summary, onRestart, onReview }) {
  return (
    <div className="rounded-2xl border border-emerald-100 bg-white p-6 shadow-lg">
      <h2 className="text-2xl font-bold text-emerald-900">
        Quiz Completed
      </h2>
      <p className="mt-2 text-sm text-emerald-700">
        Here is your performance summary.
      </p>
      <div className="mt-6 grid gap-4 sm:grid-cols-3">
        <div className="rounded-xl bg-emerald-50 p-4 text-center">
          <p className="text-xs font-semibold uppercase tracking-widest text-emerald-700">
            Correct
          </p>
          <p className="mt-2 text-2xl font-bold text-emerald-900">
            {summary.correct}
          </p>
        </div>
        <div className="rounded-xl bg-rose-50 p-4 text-center">
          <p className="text-xs font-semibold uppercase tracking-widest text-rose-700">
            Wrong
          </p>
          <p className="mt-2 text-2xl font-bold text-rose-900">
            {summary.wrong}
          </p>
        </div>
        <div className="rounded-xl bg-amber-50 p-4 text-center">
          <p className="text-xs font-semibold uppercase tracking-widest text-amber-700">
            Score
          </p>
          <p className="mt-2 text-2xl font-bold text-amber-900">
            {summary.score}%
          </p>
        </div>
      </div>
      <div className="mt-6 flex flex-col gap-3 sm:flex-row">
        <button
          type="button"
          className="flex-1 rounded-xl bg-emerald-600 px-4 py-2 font-semibold text-white hover:bg-emerald-700"
          onClick={onRestart}
        >
          Restart Quiz
        </button>
        <button
          type="button"
          className="flex-1 rounded-xl border border-emerald-200 bg-white px-4 py-2 font-semibold text-emerald-800 hover:border-emerald-400"
          onClick={onReview}
        >
          Review Answers
        </button>
      </div>
    </div>
  );
}

function ReviewPanel({ review, onRestart }) {
  return (
    <div className="rounded-2xl border border-emerald-100 bg-white p-6 shadow-lg">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-emerald-900">
          Review Answers
        </h2>
        <button
          type="button"
          className="rounded-xl bg-emerald-600 px-4 py-2 text-sm font-semibold text-white hover:bg-emerald-700"
          onClick={onRestart}
        >
          Restart
        </button>
      </div>
      <div className="mt-6 space-y-4">
        {review.map((item, index) => (
          <div
            key={`${item.question}-${index}`}
            className="rounded-xl border border-emerald-100 bg-emerald-50/40 p-4"
          >
            <p className="text-sm font-semibold text-emerald-900">
              {index + 1}. {item.question}
            </p>
            <p className="mt-2 text-xs text-emerald-700">
              Your answer:{" "}
              <span
                className={
                  item.isCorrect ? "text-emerald-700" : "text-rose-700"
                }
              >
                {item.selected ?? "No answer"}
              </span>
            </p>
            <p className="mt-1 text-xs text-emerald-700">
              Correct answer:{" "}
              <span className="text-emerald-900">{item.correct}</span>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function App() {
  const questions = useMemo(() => baseQuestions, []);
  const total = questions.length;

  const [currentIndex, setCurrentIndex] = useState(0);
  const [selected, setSelected] = useState(null);
  const [locked, setLocked] = useState(false);
  const [answers, setAnswers] = useState([]);
  const [showResults, setShowResults] = useState(false);
  const [showReview, setShowReview] = useState(false);

  const current = questions[currentIndex];

  const score = answers.filter((item) => item.isCorrect).length;
  const wrong = answers.filter((item) => !item.isCorrect).length;

  function handleSelect(option) {
    if (locked) return;
    setSelected(option);
    const isCorrect = option === current.answer;
    setLocked(true);
    setAnswers((prev) => [
      ...prev,
      {
        question: current.question,
        selected: option,
        correct: current.answer,
        isCorrect,
      },
    ]);
  }

  function handleNext() {
    if (!locked) return;
    if (currentIndex + 1 >= total) {
      setShowResults(true);
      return;
    }
    setCurrentIndex((prev) => prev + 1);
    setSelected(null);
    setLocked(false);
  }

  function handleRestart() {
    setCurrentIndex(0);
    setSelected(null);
    setLocked(false);
    setAnswers([]);
    setShowResults(false);
    setShowReview(false);
  }

  function handleReview() {
    setShowReview(true);
  }

  const summary = {
    correct: score,
    wrong,
    score: total ? Math.round((score / total) * 100) : 0,
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-amber-50 to-emerald-100 px-4 py-10">
      <div className="mx-auto w-full max-w-4xl">
        <header className="mb-8 rounded-3xl border border-emerald-100 bg-white p-6 shadow-lg">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-emerald-600">
            Islamic MCQs
          </p>
          <h1 className="mt-3 text-3xl font-bold text-emerald-900 sm:text-4xl">
            Professional Islamic Quiz
          </h1>
          <p className="mt-2 text-sm text-emerald-700">
            Test your knowledge with curated questions. One question at a time,
            instant feedback, and a full summary at the end.
          </p>
        </header>

        {!showResults && !showReview && (
          <div className="rounded-3xl border border-emerald-100 bg-white p-6 shadow-lg">
            <ProgressBar current={currentIndex + 1} total={total} />
            <div className="mt-6">
              <p className="text-sm font-semibold text-emerald-700">
                Question {currentIndex + 1}
              </p>
              <h2 className="mt-2 text-xl font-bold text-emerald-900">
                {current.question}
              </h2>
            </div>

            <div className="mt-6 grid gap-3">
              {current.options.map((option) => {
                const state =
                  locked && option === current.answer
                    ? "correct"
                    : locked && option === selected
                    ? "wrong"
                    : "idle";
                return (
                  <OptionButton
                    key={option}
                    label={option}
                    isSelected={selected === option}
                    state={state}
                    onClick={() => handleSelect(option)}
                    disabled={locked}
                  />
                );
              })}
            </div>

            {locked && (
              <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <p
                  className={`text-sm font-semibold ${
                    selected === current.answer
                      ? "text-emerald-600"
                      : "text-rose-600"
                  }`}
                >
                  {selected === current.answer
                    ? "Correct answer!"
                    : `Incorrect. Correct answer: ${current.answer}`}
                </p>
                <button
                  type="button"
                  className="rounded-xl bg-emerald-600 px-5 py-2 text-sm font-semibold text-white hover:bg-emerald-700"
                  onClick={handleNext}
                >
                  {currentIndex + 1 === total ? "Finish Quiz" : "Next Question"}
                </button>
              </div>
            )}
          </div>
        )}

        {showResults && !showReview && (
          <ResultsPanel
            summary={summary}
            onRestart={handleRestart}
            onReview={handleReview}
          />
        )}

        {showReview && (
          <ReviewPanel review={answers} onRestart={handleRestart} />
        )}

        <footer className="mt-8 text-center text-xs text-emerald-700">
          Prepared for future PDF question import. Update `src/questions.js`.
        </footer>
      </div>
    </div>
  );
}
