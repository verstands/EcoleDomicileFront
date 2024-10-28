import React from 'react'
import { FaListAlt, FaPlusCircle } from 'react-icons/fa';
import Tabs from '../../components/Tab';
import PaysTableau from './PaysTableau';
import AddPays from './AddPays';

const Pays = () => {
    const tabs = [
        {
            id: 'tab1',
            label: (
                <div className="flex items-center space-x-2">
                    <FaListAlt
                    />
                    <span>Liste des pays</span>
                </div>
            ),
            content:  <PaysTableau/>
        },
        {
            id: 'tab2',
            label: (
                <div className="flex items-center space-x-2">
                    <FaPlusCircle />
                    <span>Ajouter un pays</span>
                </div>
            ),
            content:  <AddPays />,
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
    )
}

export default Pays