import React from 'react'
import Tabs from '../../components/Tab';

const GestionEtudiant = () => {
    const tabs = [
        {
          label: "Gestion des profils étudiants",
          icon: "",
          content: <p>Content of Tab 1</p>,
        },
        {
          label: "Gestion des données étudiantes",
          content: <p>Content of Tab 2</p>,
        },
        {
          label: "Gestion des absences et des retards",
          icon: "",
          content: <p>Content of Tab 3</p>,
        },
      ];

      const [activeTab, setActiveTab] = React.useState("Gestion des profils étudiants");

      const handleTabChange = (tab: string) => {
        setActiveTab(tab);
      };
  return (
    <>
        <Tabs tabs={tabs} activeTab={activeTab} onTabChange={handleTabChange} />

    </>
  )
}

export default GestionEtudiant