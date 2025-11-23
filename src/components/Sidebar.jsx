import React from 'react';
import './Sidebar.css';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  const followingChannels = [
    {
      name: "sachauzumaki",
      fullName: "Fortnite",
      status: "online",
      viewers: "4k",
      avatar: "https://files.kick.com/images/user/152345/profile_image/conversion/1f477fad-5ed0-4a40-8e8b-052d3fc1c701-thumb.webp"
    },
    {
      name: "ElZeein",
      fullName: "Desconectado",
      status: "offline",
      viewers: "5k",
      avatar: "https://kick.com/img/default-profile-pictures/default-avatar-2.webp"
    },
    {
      name: "Kingteka",
      fullName: "Desconectado",
      status: "offline",
      viewers: "1k",
      avatar: "https://files.kick.com/images/user/54730449/profile_image/conversion/bdc2ee51-2c9c-478b-ad95-6cbc23bd9e39-thumb.webp"
    },
    {
      name: "EsBebote",
      fullName: "Desconectado",
      status: "offline",
      viewers: "2k",
      avatar: "https://files.kick.com/images/user/8939589/profile_image/conversion/f4f8a742-95ff-4cc9-bbb9-da9af6dcbe4c-thumb.webp"
    },
    {
      name: "GabbiDoto",
      fullName: "Desconectado",
      status: "offline",
      viewers: "2k",
      avatar: "https://files.kick.com/images/user/45079194/profile_image/conversion/906a6f17-4de9-43b5-8c3c-c7c01d48fdbb-thumb.webp"
    }
  ];

  const liveChannels = [
    {
      name: "AleksVEVO",
      fullName: "Just Chatting",
      viewers: "3.3k",
      status: "online",
      avatar: "https://files.kick.com/images/user/723/profile_image/conversion/87a305ea-3bc8-4e65-8772-9a453e8b9f37-thumb.webp"
    },
    {
      name: "Dobla2",
      fullName: "Marvel Rivals",
      viewers: "391",
      status: "online",
      avatar: "https://files.kick.com/images/user/6478635/profile_image/conversion/8df5e67b-3876-46ce-b583-7df55bc9de6d-thumb.webp"
    },
    {
      name: "Soy_saraff",
      fullName: "PUBG",
      viewers: "33",
      status: "online",
      avatar: "https://files.kick.com/images/user/73856862/profile_image/conversion/b8d69ec1-cedd-450d-a5b7-b3068d4fe8ca-thumb.webp"
    },
    {
      name: "Pakazdota",
      fullName: "Dota 2",
      viewers: "5k",
      status: "online",
      avatar: "https://files.kick.com/images/user/62787863/profile_image/conversion/26179340-85ee-422a-bc71-b83e016b943c-thumb.webp"
    },
    {
      name: "WATAN",
      fullName: "League of Legends",
      viewers: "96",
      status: "online",
      avatar: "https://files.kick.com/images/user/46434775/profile_image/conversion/9075a34e-b88f-4ec0-b3af-8330beafe17b-thumb.webp"
    },
    {
      name: "Gioso",
      fullName: "Grand Theft Auto V",
      viewers: "1.2k",
      status: "online",
      avatar: "https://files.kick.com/images/user/1324969/profile_image/conversion/6c66a3f1-b3bb-4ea9-9bb9-4931d694ecf5-thumb.webp"
    }
  ];

  const recommendedCategories = [
    {
      name: "Just Chatting",
      viewers: "196.4k",
      image: "https://static-cdn.jtvnw.net/ttv-boxart/509658-52x72.jpg"
    },
    {
      name: "Grand Theft Auto V",
      viewers: "117.2k",
      image: "https://static-cdn.jtvnw.net/ttv-boxart/32982-52x72.jpg"
    },
    {
      name: "League of Legends",
      viewers: "152.1k",
      image: "https://static-cdn.jtvnw.net/ttv-boxart/21779-52x72.jpg"
    },
    {
      name: "Valorant",
      viewers: "134.7k",
      image: "https://static-cdn.jtvnw.net/ttv-boxart/516575-52x72.jpg"
    }
  ];

  return (
    <aside className="sidebar">

      {/* Canales que sigues */}
      <div className="sidebar-section">
        <div className="section-header">
          <h3>Canales Top</h3>
        </div>
        <div className="channels-list">
          {followingChannels.map((channel, idx) => (
            <Link key={idx} className="channel-item" to={`/stream/${channel.name}`}> 
              <div className="channel-avatar">
                <img src={channel.avatar} alt={channel.name} className="avatar-img" />
                <div className={`status-indicator ${channel.status}`}></div>
              </div>
              <div className="channel-info">
                <p className="channel-name">{channel.name}</p>
                <p className="channel-playing">{channel.fullName}</p>
              </div>
              {channel.viewers && (
                <span className="viewers-badge">{channel.viewers}</span>
              )}
            </Link>
          ))}
        </div>
      </div>

      {/* Canales en vivo */}
      <div className="sidebar-section">
        <div className="section-header">
          <h3>Canales en vivo</h3>
        </div>
        <div className="channels-list">
          {liveChannels.map((channel, idx) => (
            <div key={idx} className="channel-item live">
              <div className="channel-avatar">
                <img src={channel.avatar} alt={channel.name} className="avatar-img" />
                <div className="status-indicator online"></div>
              </div>
              <div className="channel-info">
                <p className="channel-name">{channel.name}</p>
                <p className="channel-playing">{channel.fullName}</p>
              </div>
              <span className="live-badge">EN VIVO</span>
            </div>
          ))}
        </div>
      </div>

      {/* Categorías recomendadas */}
      <div className="sidebar-section">
        <div className="section-header">
          <h3>Categorías recomendadas</h3>
        </div>
        <div className="categories-list">
          {recommendedCategories.map((cat, idx) => (
            <div key={idx} className="category-item">
              <div className="category-icon">
                <img src={cat.image} alt={cat.name} className="category-img" />
              </div>
              <div className="category-details">
                <p className="category-name">{cat.name}</p>
                <p className="category-viewers">
                  <span className="live-dot">●</span> {cat.viewers} espectadores
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;