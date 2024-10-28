import React, { useEffect, useState } from 'react'
import SpinnerUjiza from '../../components/SpinnerUjiza'
import { ProduitInterface } from '../../interfaces/ProduitInterface';
import { RepositoryConfigInterface } from '../../interfaces/RepositoryConfig.interface';
import ProduitService from '../../services/Produit.service';
import { toast } from 'react-toastify';
import { FaSave } from 'react-icons/fa';
import PharmacieService from '../../services/Pharmacie.service';
import { PharmacieINterface } from '../../interfaces/PharmacieInterface';

const AddProduit = () => {
    const [data, setdata] = useState<ProduitInterface>({
        nom: "",
        dosage: "",
        prix: "",
        desciption: "",
        id_pharmacie: ""
    });
    const [loading, setLoading] = useState(false);
    const [datapharmacie, setPharmacie] = useState<PharmacieINterface[] | null>(null);


    const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const { name, value } = event.target;
        setdata((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setdata((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    const config: RepositoryConfigInterface = {
        appConfig: {},
        dialog: {},
    };

    const produitService = new ProduitService(config);
    const pharmacieService = new PharmacieService(config);

    const getPharmacie = async () => {
        try {
            const response = await pharmacieService.getPharmacie();
            setPharmacie(response.data);
        } catch (error: unknown) {
            console.error(error);
        }
    };

    useEffect(() => {
        getPharmacie();
    }, []);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setLoading(true);
        const response = await produitService.postProduit(data); 
        setLoading(false);
        toast.success('Produit a été creé avec success');
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
                    <h2 className="text-[20px] font-bold">Ajouter une pharmacie</h2>
                    <br />
                    <hr />
                    <br />
                    <div>
                    </div>
                    <br />
                    <div className="grid md:grid-cols-1 xl:grid-cols-2 gap-2">
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
                                Dosage
                            </label>
                            <input
                                type="number"
                                name="dosage"
                                id="email"
                                value={data.dosage}
                                onChange={handleChange}
                                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            />
                        </div>
                        <div>
                            <label
                                htmlFor="email"
                                className="block mb-2 text-sm font-medium text-gray-900 dark:text-black"
                            >
                                Prix
                            </label>
                            <input
                                type="number"
                                name="prix"
                                id="email"
                                value={data.prix}
                                onChange={handleChange}
                                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            />
                        </div>
                        <div>
                            <label
                                htmlFor="email"
                                className="block mb-2 text-sm font-medium text-gray-900 dark:text-black"
                            >
                                Pharmacie
                            </label>
                            <select
                                name="id_pharmacie"
                                id=""
                                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                value={data.id_pharmacie}
                                onChange={handleSelectChange}
                            >
                                <option value="">Selectionneé une commune</option>
                                {
                                    datapharmacie?.map((e) => {
                                        return (
                                            <option value={e.id}>{e.nom}</option>
                                        )
                                    })
                                }
                            </select>
                        </div>

                    </div>
                    <div>
                        <label
                            htmlFor="email"
                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-black"
                        >
                            Description
                        </label>
                        <textarea
                            name="desciption" id=""
                            className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            value={data.desciption}
                            onChange={handleSelectChange}
                        >
                        </textarea>
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
    )
}

export default AddProduit