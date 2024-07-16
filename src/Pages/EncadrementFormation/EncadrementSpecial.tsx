import React from 'react'
import Tabs from '../../components/Tab'
import FormationSpecial from './FormationSpecial';
import RessourceEndrement from './RessourceEndrement';

const EncadrementSpecial = () => {
    const tabs = [
        {
          label: "Formations spéciales",
          icon: "",
          content: <FormationSpecial />,
        },
        {
          label: "Ressources",
          icon: "",
          content: <RessourceEndrement />,
        }

      ];

      const [activeTab, setActiveTab] = React.useState("Formations spéciales");

  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
  };
  return (
    <>
    <Tabs tabs={tabs} activeTab={activeTab} onTabChange={handleTabChange} />
</>
  )
}

export default EncadrementSpecial