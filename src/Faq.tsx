import QuestionFaq from "./components/QuestionFaq";
import ntc from "./ntc";

export default function Faq() {
  const questions: { question: string; answer: string }[] = [
    {
      question: "سـ1- ما هو نظام ستِم؟",
      answer: `برنامج إدارة المطاعم هو نظام مصمم لتبسيط الجوانب المختلفة لعمليات
          المطعم، بما في ذلك إدارة الطلبات والدفع المعالجة وتتبع المخزون
          والمزيد. يساعد هذا البرنامج على تحسين الكفاءة وتقليل الأخطاء وتحسين
          خدمة العملاء من خلال توفير الميزات مثل تتبع المبيعات، وإعداد التقارير
          المالية، ومعالجة الدفع، وإدارة الموظفين، وإدارة الحجز`,
    },
    {
      question: "كيف يمكن لبرنامج إدارة المطاعم تحسين إدارة المخزون؟",
      answer: `برنامج إدارة المطاعم هو نظام مصمم لتبسيط الجوانب المختلفة لعمليات المطعم، بما في ذلك إدارة الطلبات والدفع
المعالجة وتتبع المخزون والمزيد. يساعد هذا البرنامج على تحسين الكفاءة وتقليل الأخطاء وتحسين خدمة العملاء من خلال توفير الميزات
مثل تتبع المبيعات، وإعداد التقارير المالية، ومعالجة الدفع، وإدارة الموظفين، وإدارة الحجز`,
    },

    {
      question: "س3- كيف يمكن لبرنامج إدارة المطاعم تحسين إدارة المخزون؟ ",
      answer: `برنامج إدارة المطاعم هو نظام مصمم لتبسيط الجوانب المختلفة لعمليات المطعم، بما في ذلك إدارة الطلبات والدفع
المعالجة وتتبع المخزون والمزيد. يساعد هذا البرنامج على تحسين الكفاءة وتقليل الأخطاء وتحسين خدمة العملاء من خلال توفير الميزات
مثل تتبع المبيعات، وإعداد التقارير المالية، ومعالجة الدفع، وإدارة الموظفين، وإدارة الحجز`,
    },
    {
      question: "س4- هل نقدم دعم العملاء؟",
      answer: `برنامج إدارة المطاعم هو نظام مصمم لتبسيط الجوانب المختلفة لعمليات المطعم، بما في ذلك إدارة الطلبات والدفع
المعالجة وتتبع المخزون والمزيد. يساعد هذا البرنامج على تحسين الكفاءة وتقليل الأخطاء وتحسين خدمة العملاء من خلال توفير الميزات
مثل تتبع المبيعات، وإعداد التقارير المالية، ومعالجة الدفع، وإدارة الموظفين، وإدارة الحجز`,
    },
    {
      question: "س5- هل لدينا أي خطة مخصصة للشركات الكبيرة؟",
      answer: `برنامج إدارة المطاعم هو نظام مصمم لتبسيط الجوانب المختلفة لعمليات المطعم، بما في ذلك إدارة الطلبات والدفع
المعالجة وتتبع المخزون والمزيد. يساعد هذا البرنامج على تحسين الكفاءة وتقليل الأخطاء وتحسين خدمة العملاء من خلال توفير الميزات
مثل تتبع المبيعات، وإعداد التقارير المالية، ومعالجة الدفع، وإدارة الموظفين، وإدارة الحجز`,
    },
  ];
  return (
    <div>
      <h1 className="text-5xl font-bold text-center">FAQ</h1>
      {questions.map((question, index) => (
        <QuestionFaq
          key={index}
          question={question.question}
          answer={question.answer}
        />
      ))}
    </div>
  );
}
