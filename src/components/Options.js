import React from "react";

const Options = ({ questions, dispatch, answer }) => {
  return (
    <div>
      <div className="options">
        {questions.options.map((option, index) => (
          <button
            className={`btn btn-option ${answer === index ? answer : ""} ${
              index === questions.correctOption ? "correct" : "wrong"
            }`}
            key={option}
            onClick={() => dispatch({ type: "newAnswer", payload: index })}>
            {option}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Options;
