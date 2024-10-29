export interface PharmacieINterface {
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
    qurtier: Qurtier
    commune: Commune
    villes: Villes
    pays: Pays
  }

  export interface Qurtier {
    id: string
    nom: string
    id_commune: string
    paysId: any
  }
  
  export interface Commune {
    id: string
    nom: string
    id_ville: string
    paysId: any
  }
  
  export interface Villes {
    id: string
    nom: string
    id_pays: string
  }
  
  export interface Pays {
    id: string
    nom: string
  } 