export interface QuartierInterface {
    nom: string;
    id_commune: string;
    id?: string;
    commune? : {
        id : string,
        nom : string,
        id_ville : string,
    }
}