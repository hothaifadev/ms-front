import { FaCircleCheck } from "react-icons/fa6";
import { IconType } from "react-icons";

export type PriceListType = {
  title: string;
  checked: boolean;
};

export type PriceListProps = {
  title: string;
  lists: PriceListType[];
  badge?: string;
  badgeColor?: string;
  icon: IconType;
  price: string;
  promotion: string;
};

function Pricing(props: PriceListProps) {
  return (
    <>
      <div className="bg-white hover:bg-gradient-to-tr from-default-400 to-default-600 shadow-xl px-10 rounded-xl py-10 duration-500 group hover:scale-105 hover:-translate-y-5">
        <div className="flex justify-between items-center mb-2">
          <h2 className="flex  gap-x-3 text-3xl font-bold text-gray-900 group-hover:text-gray-200">
            <props.icon className="text-red-500 w-7 h-7 group-hover:text-gray-50" />
            <span>{props.title}</span>
          </h2>
          {props.badge ? (
            <span className="m-2 px-4 py-1 bg-default-100 rounded-full text-sm font-semibold text-default-600">
              {props.badge}
            </span>
          ) : (
            ""
          )}
        </div>
        <p className="text-gray-700 mb-3">{props.promotion}</p>
        <div className="price text-2xl font-bold text-gray-900 mb-5 group-hover:text-gray-50">
          {props.price}{" "}
          <span className="ml-3 rtl:mr-3 text-gray-500 text-xl group-hover:text-gray-200">
            / شهر
          </span>
        </div>
        <p className="text-gray-600 text-sm mb-4 group-hover:text-gray-50">
          ابدأ بترتيب نفقاتك بأفضل ما لدينا نظام إدارة المطاعم.
        </p>
        {/* List */}
        <div>
          <ul>
            {props.lists.map((list) => (
              <li className="flex items-center mb-7 gap-3 ">
                <FaCircleCheck
                  className={`w-5 h-5 ${
                    list.checked
                      ? "text-default-500 group-hover:text-gray-50"
                      : "text-gray-500"
                  }`}
                />
                <span
                  className={`inline-block items-center justify-center ${
                    list.checked
                      ? "text-gray-900 group-hover:text-gray-50"
                      : "text-gray-500"
                  }`}
                >
                  {list.title}
                </span>
              </li>
            ))}
          </ul>
          <button>Test</button>
        </div>
      </div>
    </>
  );
}
export default Pricing;
