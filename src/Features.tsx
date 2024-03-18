import { FaPhone } from "react-icons/fa6";

export default function Features() {
  return (
    <>
      <div>
        <h1 className="text-4xl font-bold text-default-700 text-center mb-8">
          المميزات الاساسية في الخدمة
        </h1>
        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-5 gap-y-10">
          {[...Array(10 - 1 + 1)].map((_, index) => (
            <div
              className="card bg-white shadow-sm p-5 rounded-[2rem] rounded-tl-none"
              key={`card-${index}`}
            >
              <div className="w-12 h-12 bg-gradient-to-br from-default-500 to to-default-600 rounded-2xl flex items-center justify-center text-white mb-3">
                <FaPhone />
              </div>
              <h3 className="text-xl mb-3 font-medium">مزامنة تلقائية</h3>
              <p className="text-gray-900">
                مزامنة جميع قصص Instagram بنقرة واحدة وإنشاء القطعة التي يمكنك
                تضمين على أي موقع.
              </p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
