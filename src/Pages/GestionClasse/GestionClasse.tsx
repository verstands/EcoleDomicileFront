import React from 'react'
import Tabs from '../../components/Tab';

const GestionClasse = () => {
    const tabs = [
        {
          label: "Gestion des élèves",
          icon: "",
          content: <p>Content of Tab 1</p>,
        },
        {
          label: "Gestion des groupes de travail",
          content: <p>Content of Tab 2</p>,
        },
        {
          label: "Gestion des activités de classe",
          icon: "",
          content: <p>Content of Tab 3</p>,
        },
      ];

      const [activeTab, setActiveTab] = React.useState("Gestion des élèves");

  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
  };
  return (
    <>
        <Tabs tabs={tabs} activeTab={activeTab} onTabChange={handleTabChange} />
    </>
  )
}

export default GestionClasse