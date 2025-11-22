import { useState } from "react";
import "./GiftPopup.css";

export default function GiftPopup({ open, onClose, onSelectGift }) {
  
  if (!open) return null;

  const gifts = [
    { name: "León", price: 100, emoji: "🦁" },
    { name: "Astronauta", price: 140, emoji: "👨‍🚀" },
    { name: "Fuego", price: 50, emoji: "🔥" },
    { name: "Corazón", price: 20, emoji: "❤️" }
  ];

  return (
    <div className="gift-overlay">
      <div className="gift-popup">

        {/* Header */}
        <div className="gift-header">
          <h3>Enviar regalo 🎁</h3>
          <button className="gift-close" onClick={onClose}>✖</button>
        </div>

        {/* Lista de regalos */}
        <div className="gift-list">
          {gifts.map((gift, index) => (
            <div
              key={index}
              className="gift-item"
              onClick={() => onSelectGift(gift)}
            >
              <span className="gift-emoji">{gift.emoji}</span>
              <span>{gift.name}</span>
              <span className="gift-price">🪙 {gift.price}</span>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
