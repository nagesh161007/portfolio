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
  switchCompany: () => {}
});

const companyData = [
  {
    company: company.FRESHWORKS
  },
  {
    company: company.FLIPKART
  },
  {
    company: company.NORTHEASTERN
  },
  {
    company: company.SPECTROCLOUD
  }
];

interface CompanySwitcherState {
  company: string;
}

export default function CompanySwitcher(props: any) {
  const [company, setCompany] = useState<CompanySwitcherState>(companyData[1]);

  const [selectedIndex, setSelectedIndex] = useState(1);

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
