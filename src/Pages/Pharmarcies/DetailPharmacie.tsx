import React from 'react';
import { useLocation } from 'react-router-dom';
import { PharmacieINterface } from '../../interfaces/PharmacieInterface';
import { FaTrash } from 'react-icons/fa';

const DetailPharmacie = () => {
    const location = useLocation();
    const { pharmacie } = location.state as { pharmacie: PharmacieINterface };

    if (!pharmacie) {
        return <div>Pas de détails disponibles.</div>;
    }

    return (
        <div className="p-8 bg-gray-100 min-h-screen">
            <div className="max-w-2xl mx-auto bg-white shadow-lg rounded-lg p-6">
                <h2 className="text-2xl font-bold mb-4 text-gray-800">Détails de la Pharmacie</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                        <img 
                            src="../a.png"  
                            alt={pharmacie.nom} 
                            className="w-full h-48 object-cover rounded-lg mb-4"
                        />
                    </div>
                    <div>
                        <p className="text-gray-700"><strong>Nom :</strong> {pharmacie.nom}</p>
                        <p className="text-gray-700"><strong>Commune :</strong> {pharmacie.commune.nom}</p>
                        <p className="text-gray-700"><strong>Quartier :</strong> {pharmacie.qurtier?.nom}</p>
                        <p className="text-gray-700"><strong>Ville :</strong> {pharmacie.villes.nom}</p>
                        <p className="text-gray-700"><strong>Pays :</strong> {pharmacie.pays.nom}</p>
                    </div>
                </div>
                <button className="text-red-600 hover:text-red-800">
                    <FaTrash size="30" />
                </button>
            </div>
        </div>
    );
};

export default DetailPharmacie;
