import { useState } from "react";
import { FiMinus } from "react-icons/fi";
import { GoPlus } from "react-icons/go";

type QuestionFaqProps = {
  question: string;
  answer: string;
};

export default function QuestionFaq(props: QuestionFaqProps) {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <div
      className={`p-5 rounded-tl-[2rem] rounded-br-[2rem] ${
        open ? "bg-white" : ""
      }`}
    >
      <div
        className="flex items-center justify-between mb-4"
        onClick={() => setOpen(!open)}
      >
        <h2 className="text-xl text-gray-900">{props.question}</h2>
        <button onClick={() => setOpen(!open)}>
          {open ? (
            <FiMinus className="w-6 h-6" />
          ) : (
            <GoPlus className="w-6 h-6" />
          )}
        </button>
      </div>
      {open ? <p className="text-lime-950/95">{props.answer}</p> : ""}
    </div>
  );
}
