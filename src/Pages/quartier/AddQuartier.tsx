import React, { useEffect, useState } from 'react'
import { FaSave } from 'react-icons/fa';
import { RepositoryConfigInterface } from '../../interfaces/RepositoryConfig.interface';
import SpinnerUjiza from '../../components/SpinnerUjiza';
import { toast } from 'react-toastify';
import { QuartierInterface } from '../../interfaces/QuartierInterface';
import CommuneService from '../../services/Commune.service';
import QuartierService from '../../services/Quartier.service';
import { CommuneInterface } from '../../interfaces/CommuneInterface';
import { PaysInterface } from '../../interfaces/PaysInterface';
import { VilleInterface } from '../../interfaces/VilleINterface';
import PaysService from '../../services/Pays.service';
import VilleService from '../../services/Ville.service';

const AddQuartier = () => {
    const [data, setdata] = useState<QuartierInterface>({
        nom: "",
        id_commune: ""
    });
    const [dataPays, setDataPays] = useState<CommuneInterface[] | null>(null);
    const [dataPayss, setDataPayss] = useState<PaysInterface[] | null>(null);
    const [dataville, setville] = useState<VilleInterface[] | null>(null);

    const [loading, setLoading] = useState(false);

    const config: RepositoryConfigInterface = {
        appConfig: {},
        dialog: {},
    };

    const communeService = new CommuneService(config);
    const quartierService = new QuartierService(config);
    const paysService = new PaysService(config);
    const villeService = new VilleService(config);


    const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const { name, value } = event.target;
        setdata((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    const getCommune = async () => {
        try {
            const response = await communeService.getCommune() as CommuneInterface;
            setDataPays(response.data);
            setLoading(false);
        } catch (error: unknown) {
            console.error(error);
        }
    };


    const getPays = async () => {
        try {
            const response = await paysService.getPays() as CommuneInterface;
            setDataPayss(response.data);
        } catch (error: unknown) {
            console.error(error);
        }
    };

    useEffect(() => {
        getCommune();
        getPays();
    }, []);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setdata((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    const handleSelectChangePaye = (id: string) => {
        alert(id)
    }

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setLoading(true);
        const response = await quartierService.postQaurtier(data);
        setLoading(false);
        toast.success('quartier a été creé avec success');
        try {
            setLoading(false);
        } catch (error: unknown) {
            console.error("Unexpected error:", error);
            setLoading(false);
        }
    };

    return (
        <div className="px-10">
            <div className="border-white m-3  bg-white p-10 rounded-[10px] shadow">
                <form onSubmit={handleSubmit}>
                    <h2 className="text-[20px] font-bold">Ajouter un quartier</h2>
                    <br />
                    <hr />
                    <br />
                    <div>
                    </div>
                    <br />
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
                            Pays
                        </label>
                        <select
                            name="id_commune"
                            value={data.id_commune}
                            onChange={(event) => handleSelectChangePaye(event.target.value)} // Passez la valeur sélectionnée
                            className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        >
                            <option value="">Selectionnez un quartier</option>
                            {
                                dataPayss?.map((e) => (
                                    <option key={e.id} value={e.id}>{e.nom}</option>
                                ))
                            }
                        </select>
                    </div>

                    <div>
                        <label
                            htmlFor="email"
                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-black"
                        >
                            Ville
                        </label>
                        <select name="id_commune" id=""
                            value={data.id_commune}
                            onChange={handleSelectChange}
                            className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"

                        >
                            <option value="">Selectionnez un quartier</option>
                            {
                                dataPays?.map((e) => {
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
                            Commune
                        </label>
                        <select name="id_commune" id=""
                            value={data.id_commune}
                            onChange={handleSelectChange}
                            className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"

                        >
                            <option value="">Selectionnez un quartier</option>
                            {
                                dataPays?.map((e) => {
                                    return (
                                        <option value={e.id}>{e.nom}</option>
                                    )
                                })
                            }
                        </select>
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

export default AddQuartier