import React from 'react'
import { FaListAlt, FaPlusCircle } from 'react-icons/fa';
import Tabs from '../../components/Tab';
import QuartierTableau from './QuartierTableau';
import AddQuartier from './AddQuartier';
const Quartier = () => {
    const tabs = [
        {
            id: 'tab1',
            label: (
                <div className="flex items-center space-x-2">
                    <FaListAlt
                    />
                    <span>Liste des quartiers</span>
                </div>
            ),
            content:  <QuartierTableau />
        },
        {
            id: 'tab2',
            label: (
                <div className="flex items-center space-x-2">
                    <FaPlusCircle />
                    <span>Ajouter un quartier</span>
                </div>
            ),
            content:   <AddQuartier/>,
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

export default Quartier