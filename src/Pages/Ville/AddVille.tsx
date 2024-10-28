import React, { useEffect, useState } from 'react'
import { FaSave } from 'react-icons/fa';
import { RepositoryConfigInterface } from '../../interfaces/RepositoryConfig.interface';
import SpinnerUjiza from '../../components/SpinnerUjiza';
import { toast } from 'react-toastify';
import { VilleInterface } from '../../interfaces/VilleINterface';
import VilleService from '../../services/Ville.service';
import { PaysInterface } from '../../interfaces/PaysInterface';
import PaysService from '../../services/Pays.service';

const AddVille = () => {
    const [data, setdata] = useState<VilleInterface>({
        nom: "",
        id_pays: ""
    });
    const [dataPays, setDataPays] = useState<PaysInterface[] | null>(null);

    const [loading, setLoading] = useState(false);

    const config: RepositoryConfigInterface = {
        appConfig: {},
        dialog: {},
    };

    const villeService = new VilleService(config);
    const paysService = new PaysService(config);


    const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const { name, value } = event.target;
        setdata((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    const getPharmacie = async () => {
        try {
            const response = await paysService.getPays() as PaysInterface;
            setDataPays(response.data);

            setLoading(false);
        } catch (error: unknown) {
            console.error(error);
        }
    };

    useEffect(() => {
        getPharmacie();
    }, []);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setdata((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setLoading(true);
        const response = await villeService.postVille(data);
        setLoading(false);
        toast.success('Ville a été creé avec success');
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
                    <h2 className="text-[20px] font-bold">Ajouter une ville</h2>
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
                    </div>
                    <div className="grid md:grid-cols-1 xl:grid-cols-3 gap-2">
                        <div>
                            <label
                                htmlFor="email"
                                className="block mb-2 text-sm font-medium text-gray-900 dark:text-black"
                            >
                                Pays
                            </label>
                            <select name="id_pays" id=""
                                value={data.id_pays}
                                onChange={handleSelectChange}
                                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"

                            >
                                <option value="">Selectionnez un pays</option>
                                {
                                    dataPays?.map((e) => {
                                        return(
                                            <option value={e.id}>{e.nom}</option>
                                        )
                                    })
                                }
                            </select>
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

export default AddVille