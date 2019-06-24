import { Acteur } from './acteur';

export interface Evenement {
    type: string;
    date: Date;
    heure: string;
    list_acteurs: Array<Acteur>;
    niveau: string;
}