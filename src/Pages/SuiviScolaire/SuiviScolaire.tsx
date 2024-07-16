import React from 'react'
import Tabs from '../../components/Tab';
import TableauBordScolaire from './TableauBordScolaire';
import NotificationSuivi from './NotificationSuivi';
import EtablissementScolaire from './EtablissementScolaire';

const SuiviScolaire = () => {
    const tabs = [
        {
          label: "Tableau de bord",
          icon: "",
          content: <TableauBordScolaire />,
        },
        {
          label: "Établissements scolaires",
          icon: "",
          content: <EtablissementScolaire />,
        },
        {
          label: "Notifications",
          icon: "",
          content: <NotificationSuivi />,
        },

      ];

      const [activeTab, setActiveTab] = React.useState("Tableau de bord");

  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
  };
  return (
    <>
        <Tabs tabs={tabs} activeTab={activeTab} onTabChange={handleTabChange} />
    </>
  )
}

export default SuiviScolaire