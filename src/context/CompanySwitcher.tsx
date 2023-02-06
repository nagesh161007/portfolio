import React, { useState } from "react";
import company from "../constants/company";

interface CurrentUserContextType {
  currentCompany: {
    company: string;
  };
  switchCompany: Function;
}

export const CompanyContext = React.createContext<CurrentUserContextType>({
  currentCompany: { company: "" },
  switchCompany: () => {},
});

const companyData = [
  {
    company: company.FRESHWORKS,
  },
  {
    company: company.FLIPKART,
  },
  {
    company: company.NORTHEASTERN,
  },
];

interface CompanySwitcherState {
  company: string;
}

export default function CompanySwitcher(props: any) {
  const [company, setCompany] = useState<CompanySwitcherState>(companyData[0]);

  const [selectedIndex, setSelectedIndex] = useState(0);

  const switchCompany = (index?: number) => {
    if (selectedIndex == companyData.length - 1) {
      const indexToUpdate = index != undefined ? index : 0;
      setSelectedIndex(indexToUpdate);
      setCompany(companyData[indexToUpdate]);
    } else {
      const indexToUpdate = index != undefined ? index : selectedIndex + 1;
      setSelectedIndex(indexToUpdate);
      setCompany(companyData[indexToUpdate]);
    }
  };

  return (
    <div>
      <CompanyContext.Provider
        value={{ currentCompany: company, switchCompany }}
      >
        {props.children}
      </CompanyContext.Provider>
    </div>
  );
}
