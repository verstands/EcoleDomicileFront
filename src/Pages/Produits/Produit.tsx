import React from 'react'
import Tabs from '../../components/Tab';
import { FaListAlt, FaPlusCircle } from 'react-icons/fa';
import ProduitTable from './ProduitTable';
import AddProduit from './AddProduit';

const Produit = () => {
    const tabs = [
        {
            id: 'tab1',
            label: (
                <div className="flex items-center space-x-2">
                    <FaListAlt />
                    <span>Liste des produits</span>
                </div>
            ),
            content: <ProduitTable />,
        },
        {
            id: 'tab2',
            label: (
                <div className="flex items-center space-x-2">
                    <FaPlusCircle />
                    <span>Ajouter un produit</span>
                </div>
            ),
            content: <AddProduit />,
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

export default Produit