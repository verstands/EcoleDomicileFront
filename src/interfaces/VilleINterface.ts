export interface VilleInterface {
    id?: string;
    nom: string;
    id_pays : string;
    pays? : {
        id : string;
        nom : string;
    }
}