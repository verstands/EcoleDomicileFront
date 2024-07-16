import React from 'react'
import Tabs from '../../components/Tab';
import Tuteurs from './Tuteurs';
import Formation from './Formation';
import Ressource from './Ressource';

const Encadrement = () => {
    const tabs = [
        {
          label: "Tuteurs",
          icon: "",
          content: <Tuteurs />,
        },
        {
          label: "Formations spéciales",
          icon: "",
          content: <Formation />,
        },
        {
          label: "Ressources",
          icon: "",
          content: <Ressource />,
        },

      ];

      const [activeTab, setActiveTab] = React.useState("Tuteurs");

  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
  };
  return (
    <>
    <Tabs tabs={tabs} activeTab={activeTab} onTabChange={handleTabChange} />
</>
  )
}

export default Encadrement