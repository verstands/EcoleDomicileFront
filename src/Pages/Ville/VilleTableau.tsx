import React, { useEffect, useState } from 'react'
import { RepositoryConfigInterface } from '../../interfaces/RepositoryConfig.interface';
import SpinnerUjiza from '../../components/SpinnerUjiza';
import { FaEdit, FaTrash } from 'react-icons/fa';
import { VilleInterface } from '../../interfaces/VilleINterface';
import VilleService from '../../services/Ville.service';

const VilleTableau = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const [data, setData] = useState<VilleInterface[] | null>(null);
    const [loading, setLoading] = useState(true);

    const config: RepositoryConfigInterface= {
        appConfig: {},
        dialog: {},
    };

    const villeService = new VilleService(config);

    const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(event.target.value);
    };

    const getVille = async () => {
        try {
            const response = await villeService.getVille() as VilleInterface;
            setData(response.data);
            setLoading(false);
        } catch (error: unknown) {
            console.error(error);
        }
    };

    useEffect(() => {
        getVille();
    }, []);

    if (loading) {
        return <center><SpinnerUjiza /></center>;
    }

  return (
    <div className="p-8 relative overflow-x-auto shadow-md sm:rounded-lg">
            <div className="p-4 bg-white">
                <label htmlFor="table-search" className="sr-only">Search</label>
                <div className="relative mt-1">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                        <svg
                            className="w-4 h-4 text-gray-500"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 20 20"
                        >
                            <path
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M19 19L15 15M15 7a7 7 0 1 1-14 0 7 7 0 0 1 14 0z"
                            />
                        </svg>
                    </div>
                    <input
                        type="text"
                        id="table-search"
                        value={searchTerm}
                        onChange={handleSearch}
                        className="block w-80 pl-10 p-2.5 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
                        placeholder="Rechercher un pays"
                    />
                </div>
            </div>

            <table className="w-full text-sm text-left text-gray-500">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                    <tr>
                        <th scope="col" className="p-4">
                            <div className="flex items-center">
                                <input
                                    id="checkbox-all-search"
                                    type="checkbox"
                                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                                />
                                <label htmlFor="checkbox-all-search" className="sr-only">Sélectionner tout</label>
                            </div>
                        </th>
                        <th scope="col" className="px-6 py-3">Nom du produit</th>
                        <th scope="col" className="px-6 py-3">Nom de Pays</th>
                        <th scope="col" className="px-6 py-3">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {Array.isArray(data) &&
                        data
                            .filter((datas) => {
                                if (typeof datas.nom !== "string") {
                                    return false;
                                }
                                return datas.nom
                                    .toLowerCase()
                                    .includes(searchTerm.toLowerCase());
                            })
                            .map((datas, index) => (
                                <>
                                    <tr key={index}>
                                        <td className="p-4">
                                            <div className="flex items-center">
                                                <input
                                                    id="checkbox-all-search"
                                                    type="checkbox"
                                                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                                                />
                                                <label htmlFor="checkbox-all-search" className="sr-only">Sélectionner tout</label>
                                            </div>
                                        </td>
                                        <td className="p-4">
                                            {datas.nom}
                                        </td>
                                        <td className="p-4">
                                            {datas.pays.nom}
                                        </td>
                                        <td className="p-4">
                                            <div className='flex items-center gap-2'>
                                                <button className="border p-2 rounded-lg bg-red-600 text-white border-[#06a9b2]">
                                                    <FaTrash />
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                </>
                            ))}
                </tbody>
            </table>
        </div>
  )
}

export default VilleTableau