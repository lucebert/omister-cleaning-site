"use client";

import { useState } from "react";

const TABS = [
  { id: "camion", label: "Location camion" },
  { id: "auto", label: "Automobile" },
  { id: "mobilier", label: "Mobilier & textiles" },
  { id: "habitation", label: "Habitation & pro" },
];

export default function TariffTabs() {
  const [activeTab, setActiveTab] = useState("camion");

  const panelClass = (id: string) =>
    activeTab === id ? "tariff-panel active" : "tariff-panel";

  return (
    <>
      <div className="tariff-tabs" role="tablist">
        {TABS.map((tab) => (
          <button
            key={tab.id}
            className={activeTab === tab.id ? "tab-btn active" : "tab-btn"}
            data-tab={tab.id}
            onClick={() => setActiveTab(tab.id)}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <div className={panelClass("camion")} id="panel-camion">
        <div className="tariff-row"><div><div className="name">Camion utilitaire sans chauffeur</div><div className="detail">Déménagement, achats en magasin, transport de meubles</div></div><div className="price">À partir de 100€</div></div>
        <div className="tariff-row"><div><div className="name">Camion utilitaire avec chauffeur</div><div className="detail">Transport pris en charge de A à Z</div></div><div className="price">Sur devis</div></div>
        <p className="tariff-note">Tarif selon durée, kilométrage et créneau souhaité.</p>
      </div>

      <div className={panelClass("auto")} id="panel-auto">
        <div className="tariff-row"><div><div className="name">Formule Express</div><div className="detail">Aspiration des moquettes et plastiques</div></div><div className="price">À partir de 30€</div></div>
        <div className="tariff-row"><div><div className="name">Formule Intégrale Intérieure</div><div className="detail">Brossage mécanique à la visseuse + aspiration + shampouineuse + plastiques</div></div><div className="price">À partir de 50€</div></div>
        <div className="tariff-row"><div><div className="name">Sièges voiture</div><div className="detail">Nettoyage en profondeur</div></div><div className="price">À partir de 10€/siège</div></div>
        <p className="tariff-note">Véhicules très sales ou familiaux : devis personnalisé.</p>
      </div>

      <div className={panelClass("mobilier")} id="panel-mobilier">
        <div className="tariff-row"><div><div className="name">Fauteuil</div></div><div className="price">À partir de 30€</div></div>
        <div className="tariff-row"><div><div className="name">Tapis</div><div className="detail">Selon la taille</div></div><div className="price">À partir de 20€</div></div>
        <div className="tariff-row"><div><div className="name">Matelas</div></div><div className="price">Sur devis</div></div>
        <div className="tariff-row"><div><div className="name">Canapé 2/3 places</div></div><div className="price">À partir de 70€</div></div>
        <div className="tariff-row"><div><div className="name">Canapé d'angle</div></div><div className="price">À partir de 90€</div></div>
        <div className="tariff-row"><div><div className="name">Canapé 5 places et +</div></div><div className="price">À partir de 100€</div></div>
      </div>

      <div className={panelClass("habitation")} id="panel-habitation">
        <div className="tariff-row"><div><div className="name">Terrasse</div></div><div className="price">Sur devis</div></div>
        <div className="tariff-row"><div><div className="name">Commerce / Local professionnel</div></div><div className="price">Sur devis</div></div>
        <div className="tariff-row"><div><div className="name">Sol maison / appartement / grandes surfaces moquette</div><div className="detail">Monobrosse : décapage, lustrage, récurage</div></div><div className="price">Sur devis</div></div>
      </div>
    </>
  );
}
