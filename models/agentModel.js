const mongoose = require("mongoose");

const agentSchema = new mongoose.Schema({

    nom: {
      type: String,
      required: [true, "Renseignez le nom"],
    },
    postnom: {
        type: String,
        required: [true, "Renseignez le postnom"],
      },
    prenom: {
        type: String,
        required: [true, "Renseignez le prenom"],
      },
    lieunaissance: {
        type: String,
        required: [true, "Renseignez le lieu de naissance"],
      },
    datenaissance: {
        type: Date,
        required: [true, "Renseignez la date de naissance"],
      },
      genre: {
        type: String,
        required: [true, "Renseignez le genre"],
      },  
      etatcivil: {
        type: String,
        required: [true, "Renseignez l'état civile'"],
      },
      epoux: {
        type: String,
      },
      nompere: {
        type: String,
        required: [true, "Renseignez le nom du père"],
      },
      nommere: {
        type: String,
        required: [true, "Renseignez le nom de la mère père"],
      },
      nombreenfants: {
        type: Number,
        required: [true, "Renseignez le nombre d'enfants"],
      },
      province: {
        type: String,
        required: [true, "Renseignez la province"],
      },
      commune: {
        type: String,
        required: [true, "Renseignez la commune"],
      },
      secteur: {
        type: String,
        required: [true, "Renseignez le secteur"],
      },
      groupement: {
        type: String,
        required: [true, "Renseignez le groupement"],
      },
      adresse: {
        type: String,
        required: [true, "Renseignez l adresse"],
      },
      telephone: {
        type: Number,
        required: [true, "Renseignez le numéro de téléphone"],
      },
      matricule: {
        type: String,
        required: [true, "Renseignez le numéro matricule"],
      },
      grade: {
        type: String,
        required: [true, "Renseignez le grade"],
      },
      numerohvk: {
        type: String,
        required: [true, "Renseignez le numéro hvk"],
      },
      direction: {
        type: String,
        required: [true, "Renseignez la direction"],
      },
      dateaffectation: {
        type: Date,
        required: [true, "Renseignez la date d'affectation"],
      },
      photo: {
        type: String,
        required: [true, "Renseignez la date d'affectation"],
      },
      finger: {
        type: Buffer,
        unique:[true, "Une même personne ne peut s'enregistrer deux fois"],
        required: [true, "Renseignez la date d'affectation"],
      },
})

const Book = mongoose.model("Book", agentSchema);
module.exports = Book;