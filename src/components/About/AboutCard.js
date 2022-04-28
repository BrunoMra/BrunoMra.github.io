import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Salut à tous, Je suis <span className="purple">Bruno Moreira </span>
            <br />Je suis étudiant, actuellement en BTS SIO au Lycée Fulbert à Chartres

            <br />
            <br />
            Je suis dans la spécialité SISR (Solution d'infrastructure système et réseaux)
            <br />
            <br />
            Je m'oriente l'année prochaine en<span className="purple"> DevOps spécialité Réseaux, Infrastructure et Cybersécurité</span>
          </p>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
