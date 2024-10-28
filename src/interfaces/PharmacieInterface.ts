export interface PharmacieINterface {
    commune: string;
    communeavenu: string;
    id?: string;
    id_quartier: string;
    nom: string;
    qurtier? : {
        id : string,
        id_commune : string,
        nom : string,
    };
    telephone : string;
}