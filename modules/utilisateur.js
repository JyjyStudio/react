class Utilisateur {
    constructor(prenom, nom) {
        this.prenom = prenom;
        this.nom = nom;
    }
    sePresenter() {
        console.log(`Bonjour je m'appelle ${this.prenom} ${this.nom}.`);
    }
}

export let elon = new Utilisateur('Elon', 'Musk');
export let jyhad = new Utilisateur('Jyhad', 'Ben Youssef');

export {Utilisateur};