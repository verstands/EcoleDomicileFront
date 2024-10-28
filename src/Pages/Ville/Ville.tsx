import React from 'react'
import { FaListAlt, FaPlusCircle } from 'react-icons/fa';
import Tabs from '../../components/Tab';
import VilleTableau from './VilleTableau';
import AddVille from './AddVille';

const Ville = () => {
    const tabs = [
        {
            id: 'tab1',
            label: (
                <div className="flex items-center space-x-2">
                    <FaListAlt
                    />
                    <span>Liste des villes</span>
                </div>
            ),
            content:  < VilleTableau />
        },
        {
            id: 'tab2',
            label: (
                <div className="flex items-center space-x-2">
                    <FaPlusCircle />
                    <span>Ajouter une ville</span>
                </div>
            ),
            content:   <AddVille />,
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

export default Ville