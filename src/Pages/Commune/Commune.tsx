import React from 'react'
import { FaListAlt, FaPlusCircle } from 'react-icons/fa';
import Tabs from '../../components/Tab';
import CommuneTableau from './CommuneTable';
import AddCommune from './AddCommune';

const Commune = () => {
    const tabs = [
        {
            id: 'tab1',
            label: (
                <div className="flex items-center space-x-2">
                    <FaListAlt
                    />
                    <span>Liste des communes</span>
                </div>
            ),
            content:  < CommuneTableau/>
        },
        {
            id: 'tab2',
            label: (
                <div className="flex items-center space-x-2">
                    <FaPlusCircle />
                    <span>Ajouter une commune</span>
                </div>
            ),
            content:   <AddCommune/>,
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

export default Commune