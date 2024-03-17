import { FaCircleCheck } from "react-icons/fa6";
import { FaTimesCircle } from "react-icons/fa";
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
  price?: string;
  promotion: string;
};

function Pricing(props: PriceListProps) {
  return (
    <>
      <div className="bg-white  shadow-xl px-10 rounded-xl py-10 duration-300 hover:scale-[1.03] hover:-translate-y-4 ">
        <div className="grid h-full">
          <div>
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
              {props.price ? (
                <>
                  {props.price}
                  <span className="ml-3 rtl:mr-3 text-gray-500 text-xl group-hover:text-gray-200">
                    / شهر
                  </span>
                </>
              ) : (
                ""
              )}
            </div>
            <p className="text-gray-600 text-sm mb-4 group-hover:text-gray-50">
              ابدأ بترتيب نفقاتك بأفضل ما لدينا نظام إدارة المطاعم.
            </p>
            <div>
              <ul className="pb-10">
                {props.lists.map((list) => (
                  <li className="flex items-center mb-7 gap-3 ">
                    {list.checked ? (
                      <FaCircleCheck
                        className={`w-5 h-5 text-default-500 group-hover:text-gray-50`}
                      />
                    ) : (
                      <FaTimesCircle
                        className={`w-5 h-5 text-gray-500 group-hover:text-gray-50`}
                      />
                    )}
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
            </div>
          </div>
          <div className="self-end">
            <button
              type="submit"
              className="inline-flex items-center justify-center space-x-2 py-3 px-4 border border-transparent text-sm font-medium rounded-2xl text-default-50 hover:text-default-700 bg-default-600 hover:bg-default-300 transition-colors w-full"
            >
              <div>احجز الآن</div>
            </button>{" "}
          </div>
        </div>
      </div>
    </>
  );
}
export default Pricing;
