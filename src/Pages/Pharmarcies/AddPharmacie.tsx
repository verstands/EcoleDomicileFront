import React, { useEffect, useState } from 'react'
import { FaSave } from 'react-icons/fa';
import { PharmacieINterface } from '../../interfaces/PharmacieInterface';
import PharmacieService from '../../services/Pharmacie.service';
import { RepositoryConfigInterface } from '../../interfaces/RepositoryConfig.interface';
import { QuartierInterface } from '../../interfaces/QuartierInterface';
import QuartierService from '../../services/Quartier.service';
import { CommuneInterface } from '../../interfaces/CommuneInterface';
import CommuneService from '../../services/Commune.service';
import SpinnerUjiza from '../../components/SpinnerUjiza';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const AddPharmacie = () => {
    const [data, setdata] = useState<PharmacieINterface>({
        nom: "",
        telephone: "",
        commune: "",
        communeavenu: "",
        id_quartier: ""
    });
    const [dataquartier, setDataquartier] = useState<QuartierInterface[] | null>(null);
    const [datacommune, setDatacommune] = useState<CommuneInterface[] | null>(null);
    const navigate = useNavigate();

    const [loading, setLoading] = useState(false);

    const config: RepositoryConfigInterface = {
        appConfig: {},
        dialog: {},
    };

    const pharmacieService = new PharmacieService(config);
    const quartierService = new QuartierService(config);
    const communeService = new CommuneService(config);

    const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const { name, value } = event.target;
        setdata((prevState) => ({
            ...prevState,
            [name]: value,
        }));
        getQ(value);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setdata((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    const getCommune = async () => {
        try {
            const response = await communeService.getCommune();
            setDatacommune(response.data);
        } catch (error: unknown) {
            console.error(error);
        }
    };


    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setLoading(true);
        const response = await pharmacieService.postPharmarcie(data); 
        setLoading(false);
        toast.success('Pharcie a été creé avec success');
        try {
            setLoading(false);
        } catch (error: unknown) {
            console.error("Unexpected error:", error);
            setLoading(false);
        }
    };

    const getQ = async (id: string) => {
        try {
            const response = await quartierService.getQuartierCommune(id);
            setDataquartier(response.data);
        } catch (error: unknown) {
            console.error(error);
        }
    }

    useEffect(() => {
        getCommune();
    }, []);

    return (
        <div className="px-10">
            <div className="border-white m-3  bg-white p-10 rounded-[10px] shadow">
                <form onSubmit={handleSubmit}>
                    <h2 className="text-[20px] font-bold">Ajouter une pharmacie</h2>
                    <br />
                    <hr />
                    <br />
                    <div>
                    </div>
                    <br />
                    <div className="grid md:grid-cols-1 xl:grid-cols-3 gap-2">
                        <div>
                            <label
                                htmlFor="email"
                                className="block mb-2 text-sm font-medium text-gray-900 dark:text-black"
                            >
                                Nom
                            </label>
                            <input
                                type="text"
                                name="nom"
                                id="email"
                                value={data.nom}
                                onChange={handleChange}
                                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            />
                        </div>
                        <div>
                            <label
                                htmlFor="email"
                                className="block mb-2 text-sm font-medium text-gray-900 dark:text-black"
                            >
                                Telephone
                            </label>
                            <input
                                type="number"
                                name="telephone"
                                id="email"
                                value={data.telephone}
                                onChange={handleChange}
                                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            />
                        </div>
                        <div>
                            <label
                                htmlFor="email"
                                className="block mb-2 text-sm font-medium text-gray-900 dark:text-black"
                            >
                                Commune
                            </label>
                            <select
                                name="commune"
                                id=""
                                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                value={data.commune}
                                onChange={handleSelectChange}
                            >
                                <option value="">Selectionneé une commune</option>
                                {
                                    datacommune?.map((e) => {
                                        return (
                                            <option value={e.id}>{e.nom}</option>
                                        )
                                    })
                                }
                            </select>
                        </div>
                        <div>
                            <label
                                htmlFor="email"
                                className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">
                                Quartier
                            </label>
                            <select
                                name="id_quartier"
                                id=""
                                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                value={data.id_quartier}
                                onChange={handleChange}
                            >
                                <option value="">Selectionneé un quartier</option>
                                {
                                    dataquartier?.map((e) => {
                                        return (
                                            <option value={e.id}>{e.nom}</option>
                                        )
                                    })
                                }
                            </select>
                        </div>
                        <div>
                            <label
                                htmlFor="email"
                                className="block mb-2 text-sm font-medium text-gray-900 dark:text-black"
                            >
                                Avenue
                            </label>
                            <input
                                type="text"
                                name="communeavenu"
                                id="email"
                                value={data.communeavenu}
                                onChange={handleChange}
                                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            />
                        </div>
                    </div>
                    <br />
                    {
                        loading ? <SpinnerUjiza /> : <button
                            type="submit"
                            className="border-[#06a9b2] text-white flex items-center gap-3 bg-[#06a9b2] p-3 rounded-[15px]"
                        >
                            <FaSave /> Enregistrer
                        </button>
                    }

                </form>
            </div>
        </div>
    );
}

export default AddPharmacie