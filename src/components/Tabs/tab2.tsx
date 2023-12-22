import React from "react";

interface Tab2Props {
  tabItems: { href: string; label: string }[];
  activeTab: string;
}

export const Tab2: React.FC<Tab2Props> = ({ tabItems, activeTab }: Tab2Props) => {
  return (
    <div className="">
      <ul className="grid grid-flow-col text-center border-b border-gray-200 text-gray-500">
        {tabItems.map((tab, index) => (
          <li key={index}>
            <a
              href={tab.href}
              className={`flex px-4 justify-center border-b-4 ${
                activeTab === tab.href
                  ? "border-[#FF5959] text-[#FF5959]"
                  : "border-transparent hover:text-[#FF5959] hover:border-[#FF5959]"
              } py-4`}
            >
              {tab.label}
            </a>
          </li>
        ))}
      </ul>
      <div className="py-6">
        <p>{`Tab ${activeTab.slice(1)}`}</p>
      </div>
    </div>
  );
};
