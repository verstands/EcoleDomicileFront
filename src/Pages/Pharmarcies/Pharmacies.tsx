import React from 'react';
import { FaListAlt, FaPlusCircle } from 'react-icons/fa';
import Tabs from '../../components/Tab';
import PharmacieTable from './PharmacieTable';

const Pharmacies = () => {
  const tabs = [
    {
      id: 'tab1',
      label: (
        <div className="flex items-center space-x-2">
          <FaListAlt />
          <span>Liste des pharmacies</span>
        </div>
      ),
      content: <PharmacieTable />,
    },
    {
      id: 'tab2',
      label: (
        <div className="flex items-center space-x-2">
          <FaPlusCircle />
          <span>Ajouter une pharmacie</span>
        </div>
      ),
      content: <p></p>,
    },
  ];

  const [activeTab, setActiveTab] = React.useState('tab1');

  const handleTabChange = (tabId: string) => {
    setActiveTab(tabId);
  };

  return (
    <div>
      <Tabs tabs={tabs} activeTab={activeTab} onTabChange={handleTabChange} />
    </div>
  );
};

export default Pharmacies;
