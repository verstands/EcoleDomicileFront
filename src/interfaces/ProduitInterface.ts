export interface ProduitInterface {
    dosage: string;
    prix: string;
    id?: string;
    desciption: string;
    nom: string;
    id_pharmacie : string;
    pharmacie? : {
        id : string,
        telephone : string,
        nom : string,
        commune : string,
        communeavenu : string,
        id_quartier : string,
    };
}