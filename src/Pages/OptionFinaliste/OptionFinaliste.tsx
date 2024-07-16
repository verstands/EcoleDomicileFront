import React from 'react'
import Tabs from '../../components/Tab'
import PreparationExeta from './PreparationExeta';
import SuiviResultat from './SuiviResultat';

const OptionFinaliste = () => {
    const tabs = [
        {
          label: "Préparation aux examens",
          icon: "",
          content: <PreparationExeta />,
        },
        {
          label: "Suivi des résultats",
          icon: "",
          content: <SuiviResultat />,
        },

      ];

      const [activeTab, setActiveTab] = React.useState("Préparation aux examens");

  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
  };
  return (
    <>
    <Tabs tabs={tabs} activeTab={activeTab} onTabChange={handleTabChange} />
</>
  )
}

export default OptionFinaliste