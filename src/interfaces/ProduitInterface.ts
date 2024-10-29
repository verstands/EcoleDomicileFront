export interface ProduitInterface {
    id: string
    nom: string
    dosage: string
    prix: string
    description: string
    id_pharmacie: string
    pharmacie: Pharmacie
}

export interface Pharmacie {
    id: string
    nom: string
    idcommune: string
    communeavenu: string
    id_quartier: string
    id_user: string
    image: string
    idville: string
    idpays: string
    agentsId: string
    agents: Agents
    commune: Commune
  }
  
  export interface Agents {
    id: string
    nom: string
    prenom: string
    mdp: string
    telephone: string
    statut: string
    id_fonction: string
    email: string
  }
  
  export interface Commune {
    id: string
    nom: string
    id_ville: string
    paysId: any
  }