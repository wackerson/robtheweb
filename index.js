const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;

// Serve static files from root directory
app.use(express.static(__dirname));

// Home route
app.get('/', (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>ZugList</title>
      <style>
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        body {
          font-family: sans-serif;
          background-color: #000000;
          color: #ffffff;
          min-height: 100vh;
          padding: 20px;
        }

        .title-section {
          text-align: center;
          margin-bottom: 20px;
        }

        .main-title {
          font-size: 48px;
          font-weight: bold;
          color: #ffffff;
          margin-bottom: 10px;
          letter-spacing: 2px;
        }

        .greeting {
          font-size: 24px;
          color: #ffffff;
          margin-bottom: 8px;
        }

        .warning-text {
          font-size: 14px;
          color: #cccccc;
        }

        .categories-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 20px;
          max-width: 800px;
          margin: 40px auto;
          padding: 0 20px;
        }

        .category-btn {
          background-color: #000000;
          border: 3px solid #FFD700;
          border-radius: 12px;
          padding: 25px 20px;
          cursor: pointer;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 15px;
          transition: all 0.3s ease;
          box-shadow: 0 0 15px rgba(255, 215, 0, 0.3);
        }

        .category-btn:hover {
          box-shadow: 0 0 25px rgba(255, 215, 0, 0.6);
          transform: translateY(-3px);
        }

        .category-icon {
          font-size: 48px;
          line-height: 1;
        }

        .category-label {
          color: #FFD700;
          font-size: 18px;
          font-weight: bold;
          text-align: center;
        }

        @media (max-width: 768px) {
          .categories-grid {
            grid-template-columns: 1fr;
          }
          .main-title {
            font-size: 36px;
          }
        }
      </style>
    </head>
    <body>
      <div class="title-section">
        <h1 class="main-title">ZugList</h1>
        <div class="greeting">Ahoy, Mateys!</div>
        <div class="warning-text">Be sure to use AdBlock and VPN if needed.</div>
      </div>

      <div class="categories-grid">
        <a href="/movies" style="text-decoration: none;">
          <div class="category-btn">
            <div class="category-icon">🎬</div>
            <div class="category-label">Movies TV Shows</div>
          </div>
        </a>

        <a href="/anime" style="text-decoration: none;">
          <div class="category-btn">
            <div class="category-icon">🎌</div>
            <div class="category-label">Anime</div>
          </div>
        </a>

        <a href="/manga" style="text-decoration: none;">
          <div class="category-btn">
            <div class="category-icon">📖</div>
            <div class="category-label">Manga</div>
          </div>
        </a>

        <a href="/sports" style="text-decoration: none;">
          <div class="category-btn">
            <div class="category-icon">⚽</div>
            <div class="category-label">Live Sports</div>
          </div>
        </a>

        <a href="/live-tv" style="text-decoration: none;">
          <div class="category-btn">
            <div class="category-icon">📺</div>
            <div class="category-label">Live TV</div>
          </div>
        </a>

        <a href="/torrents" style="text-decoration: none;">
          <div class="category-btn">
            <div class="category-icon">⬇️</div>
            <div class="category-label">Torrents</div>
          </div>
        </a>

        <a href="/games" style="text-decoration: none;">
          <div class="category-btn">
            <div class="category-icon">🎮</div>
            <div class="category-label">Games</div>
          </div>
        </a>

        <a href="/music" style="text-decoration: none;">
          <div class="category-btn">
            <div class="category-icon">🎵</div>
            <div class="category-label">Music</div>
          </div>
        </a>

        <a href="/ebooks" style="text-decoration: none;">
          <div class="category-btn">
            <div class="category-icon">📚</div>
            <div class="category-label">eBooks</div>
          </div>
        </a>

        <a href="/comics" style="text-decoration: none;">
          <div class="category-btn">
            <div class="category-icon">📗</div>
            <div class="category-label">Comics</div>
          </div>
        </a>

      
    
      </div>
    </body>
    </html>
  `);
});

// Movies/TV Shows route
app.get('/movies', (req, res) => {
  const movieSites = [
    'soap2night.cc',
    'dorawatch.one',
    'wmovies.one',
    'hydrahd.ru',
    'cineby.gd',
    'flickystream.ru',
    'yflix.to',
    'cinema.bz',
    'tmovie.tv',
    'goojara.to',
    'veloratv.ru',
    'mapple.mov',
    'popcornmovies.org',
    'gomovies.gg',
    'onionplay.bz',
    'lookmovie2.to',
    'pressplay.top',
    'moviesjoytv.to',
    'fmovies.co',
    'soap2dayhdz.com',
    'projectfreetv.sx',
    'sflix.ps',
    'theflixerty.to',
    'myflixerz.to',
    'hdtoday.tv',
    'flixhq.to',
    'hurawatch.cc',
    'nunflix.li',
    'ridomovies.tv',
    '123moviesfree.net',
    'hdtoday.cc',
    'vidplay.top',
    'putlocker.pe',
    'yesmovies.ag',
    'watchseries.pe',
    'primewire.mov',
    'watch32.sx',
    'flickeraddon.pages.dev',
    'streamm4u.com.co'
  ];

  res.send(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
    <meta name="description" content="ZugList is a curated index of movies, anime, manga, live sports, TV, games, music, eBooks, torrents, and streaming tools. ">
    <meta name="keywords" content="free streaming, movies, anime, manga, live sports, IPTV, torrents, games, music downloads, eBooks">
    <meta name="robots" content="index, follow">
    <link rel="canonical" href="https://ZugList.cc${req.path}">

      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Movies/TV Shows - ZugList</title>
      <style>
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        body {
          font-family: sans-serif;
          background-color: #000000;
          color: #ffffff;
          min-height: 100vh;
          padding: 20px;
        }

        .title-section {
          text-align: center;
          margin-bottom: 30px;
        }

        .main-title {
          font-size: 48px;
          font-weight: bold;
          color: #ffffff;
          margin-bottom: 10px;
          letter-spacing: 2px;
        }

        .greeting {
          font-size: 24px;
          color: #ffffff;
          margin-bottom: 8px;
        }

        .warning-text {
          font-size: 14px;
          color: #cccccc;
        }

        .warning-text .highlight {
          color: #FFD700;
        }

        .back-link {
          display: inline-block;
          margin-bottom: 30px;
          color: #FFD700;
          text-decoration: none;
          font-size: 16px;
          padding: 10px 20px;
          border: 2px solid #FFD700;
          border-radius: 8px;
          transition: all 0.3s ease;
        }

        .back-link:hover {
          background-color: #FFD700;
          color: #000000;
        }

        .links-container {
          max-width: 800px;
          margin: 0 auto;
          padding: 0 20px;
        }

        .link-item {
          background-color: #1a1a2e;
          border-radius: 8px;
          margin-bottom: 12px;
          transition: all 0.3s ease;
        }

        .link-item:hover {
          background-color: #16213e;
          transform: translateX(5px);
        }

        .link-item a {
          display: flex;
          align-items: center;
          padding: 15px 20px;
          color: #ffffff;
          text-decoration: none;
          width: 100%;
        }

        .play-icon {
          color: #ffffff;
          font-size: 14px;
          margin-right: 15px;
          flex-shrink: 0;
        }

        .link-domain {
          font-size: 16px;
          color: #ffffff;
        }

        @media (max-width: 768px) {
          .main-title {
            font-size: 36px;
          }
          .links-container {
            padding: 0 10px;
          }
        }
      </style>
    </head>
    <body>
      <div class="title-section">
        <h1 class="main-title">ZugList</h1>
        <div class="greeting">Ahoy, Mateys!</div>
        <div class="warning-text">Be sure to use <span class="highlight">AdBlock</span> and <span class="highlight">VPN</span> if needed.</div>
      </div>

      <div class="links-container">
        <a href="/" class="back-link">← Back to Categories</a>
        
        ${movieSites.map(site => `
          <div class="link-item">
            <a href="https://${site}" target="_blank" rel="noopener noreferrer">
              <span class="play-icon">►</span>
              <span class="link-domain">${site}</span>
            </a>
          </div>
        `).join('')}
      </div>
    </body>
    </html>
  `);
});

// Anime route
app.get('/anime', (req, res) => {
  const animeSites = [
    'anime.nexus',
    'hianime.to',
    '9animetv.to',
    'miruro.to',
    'anitaku.io',
    'animekai.to',
    'gogoanime.org.vc',
    'anigo.to',
    'kickassanime.mx',
    'aniwatchtv.to',
    'animegg.org',
    'animestream.net',
    'kissanime.com.ru',
    'allmanga.to',
    'aniworld.to',
    'wcostream.tv',
    'nyaa.land',
    '123animes.ru'
  ];

  res.send(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
    <meta name="description" content="ZugList is a curated index of movies, anime, manga, live sports, TV, games, music, eBooks, torrents, and streaming tools.">
    <meta name="keywords" content="free streaming, movies, anime, manga, live sports, IPTV, torrents, games, music downloads, eBooks">
    <meta name="robots" content="index, follow">
    <link rel="canonical" href="https://ZugList.cc${req.path}">

      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Anime - ZugList</title>
      <style>
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        body {
          font-family: sans-serif;
          background-color: #000000;
          color: #ffffff;
          min-height: 100vh;
          padding: 20px;
        }

        .title-section {
          text-align: center;
          margin-bottom: 30px;
        }

        .main-title {
          font-size: 48px;
          font-weight: bold;
          color: #ffffff;
          margin-bottom: 10px;
          letter-spacing: 2px;
        }

        .greeting {
          font-size: 24px;
          color: #ffffff;
          margin-bottom: 8px;
        }

        .warning-text {
          font-size: 14px;
          color: #cccccc;
        }

        .warning-text .highlight {
          color: #FFD700;
          text-decoration: underline;
          cursor: pointer;
        }

        .warning-text .highlight:hover {
          color: #ffed4e;
        }

        .back-link {
          display: inline-block;
          margin-bottom: 30px;
          color: #FFD700;
          text-decoration: none;
          font-size: 16px;
          padding: 10px 20px;
          border: 2px solid #FFD700;
          border-radius: 8px;
          transition: all 0.3s ease;
        }

        .back-link:hover {
          background-color: #FFD700;
          color: #000000;
        }

        .links-container {
          max-width: 800px;
          margin: 0 auto;
          padding: 0 20px;
        }

        .link-item {
          background-color: #1a1a2e;
          border-radius: 8px;
          margin-bottom: 12px;
          transition: all 0.3s ease;
        }

        .link-item:hover {
          background-color: #16213e;
          transform: translateX(5px);
        }

        .link-item a {
          display: flex;
          align-items: center;
          padding: 15px 20px;
          color: #ffffff;
          text-decoration: none;
          width: 100%;
        }

        .play-icon {
          color: #FFD700;
          font-size: 14px;
          margin-right: 15px;
          flex-shrink: 0;
        }

        .link-domain {
          font-size: 16px;
          color: #ffffff;
        }

        @media (max-width: 768px) {
          .main-title {
            font-size: 36px;
          }
          .links-container {
            padding: 0 10px;
          }
        }
      </style>
    </head>
    <body>
      <div class="title-section">
        <h1 class="main-title">ZugList</h1>
        <div class="greeting">Ahoy, Mateys!</div>
        <div class="warning-text">Be sure to use <span class="highlight">AdBlock</span> and <span class="highlight">VPN</span> if needed.</div>
      </div>

      <div class="links-container">
        <a href="/" class="back-link">← Back to Categories</a>
        
        ${animeSites.map(site => `
          <div class="link-item">
            <a href="https://${site}" target="_blank" rel="noopener noreferrer">
              <span class="play-icon">►</span>
              <span class="link-domain">${site}</span>
            </a>
          </div>
        `).join('')}
      </div>
    </body>
    </html>
  `);
});

// Manga route
app.get('/manga', (req, res) => {
  const mangaSites = [
    'comix.to',
    'mangafire.to',
    'mangahaven.net',
    'batotoo.com',
    'mangadex.org',
    'allmanga.to',
    'mangago.me',
    'weebcentral.com',
    'battwo.com',
    'kagane.org'
  ];

  res.send(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
    <meta name="description" content="ZugList is a curated index of movies, anime, manga, live sports, TV, games, music, eBooks, torrents, and streaming tools.">
    <meta name="keywords" content="free streaming, movies, anime, manga, live sports, IPTV, torrents, games, music downloads, eBooks">
    <meta name="robots" content="index, follow">
    <link rel="canonical" href="https://ZugList.cc${req.path}">
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Manga - ZugList</title>
      <style>
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        body {
          font-family: sans-serif;
          background-color: #000000;
          color: #ffffff;
          min-height: 100vh;
          padding: 20px;
        }

        .title-section {
          text-align: center;
          margin-bottom: 30px;
        }

        .main-title {
          font-size: 48px;
          font-weight: bold;
          color: #ffffff;
          margin-bottom: 10px;
          letter-spacing: 2px;
        }

        .greeting {
          font-size: 24px;
          color: #ffffff;
          margin-bottom: 8px;
        }

        .warning-text {
          font-size: 14px;
          color: #cccccc;
        }

        .warning-text .highlight {
          color: #FFD700;
          text-decoration: underline;
          cursor: pointer;
        }

        .warning-text .highlight:hover {
          color: #ffed4e;
        }

        .back-link {
          display: inline-block;
          margin-bottom: 30px;
          color: #FFD700;
          text-decoration: none;
          font-size: 16px;
          padding: 10px 20px;
          border: 2px solid #FFD700;
          border-radius: 8px;
          transition: all 0.3s ease;
        }

        .back-link:hover {
          background-color: #FFD700;
          color: #000000;
        }

        .links-container {
          max-width: 800px;
          margin: 0 auto;
          padding: 0 20px;
        }

        .link-item {
          background-color: #1a1a2e;
          border-radius: 8px;
          margin-bottom: 12px;
          transition: all 0.3s ease;
        }

        .link-item:hover {
          background-color: #16213e;
          transform: translateX(5px);
        }

        .link-item a {
          display: flex;
          align-items: center;
          padding: 15px 20px;
          color: #ffffff;
          text-decoration: none;
          width: 100%;
        }

        .play-icon {
          color: #FFD700;
          font-size: 14px;
          margin-right: 15px;
          flex-shrink: 0;
        }

        .link-domain {
          font-size: 16px;
          color: #ffffff;
        }

        @media (max-width: 768px) {
          .main-title {
            font-size: 36px;
          }
          .links-container {
            padding: 0 10px;
          }
        }
      </style>
    </head>
    <body>
      <div class="title-section">
        <h1 class="main-title">ZugList</h1>
        <div class="greeting">Ahoy, Mateys!</div>
        <div class="warning-text">Be sure to use <span class="highlight">AdBlock</span> and <span class="highlight">VPN</span> if needed.</div>
      </div>

      <div class="links-container">
        <a href="/" class="back-link">← Back to Categories</a>
        
        ${mangaSites.map(site => `
          <div class="link-item">
            <a href="https://${site}" target="_blank" rel="noopener noreferrer">
              <span class="play-icon">►</span>
              <span class="link-domain">${site}</span>
            </a>
          </div>
        `).join('')}
      </div>
    </body>
    </html>
  `);
});

// Live Sports route
app.get('/sports', (req, res) => {
  const sportsSites = [
    'supra-stream.com',
    'allstreamcc.com',
    'livetv.sx',
    'totalsportek.events',
    'sportsurge.net',
    'streamed.pk',
    'tv.tflix.app',
    'streameast.ga',
    'fctv33.hair',
    'methstreams.ms',
    'sportsbite.live',
    'sport7.pro',
    'sportyhunter.com',
    'watchsports.to',
    'onhockey.tv',
    'crackstreams.io',
    'sportplus.live',
    'livetv861.me',
    'strikeout.im',
    'watchfooty.st'
  ];

  res.send(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
    <meta name="description" content="ZugList is a curated index of movies, anime, manga, live sports, TV, games, music, eBooks, torrents, and streaming tools.">
    <meta name="keywords" content="free streaming, movies, anime, manga, live sports, IPTV, torrents, games, music downloads, eBooks">
    <meta name="robots" content="index, follow">
    <link rel="canonical" href="https://ZugList.cc${req.path}">
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Live Sports - ZugList</title>
      <style>
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        body {
          font-family: sans-serif;
          background-color: #000000;
          color: #ffffff;
          min-height: 100vh;
          padding: 20px;
        }

        .title-section {
          text-align: center;
          margin-bottom: 30px;
        }

        .main-title {
          font-size: 48px;
          font-weight: bold;
          color: #ffffff;
          margin-bottom: 10px;
          letter-spacing: 2px;
        }

        .greeting {
          font-size: 24px;
          color: #ffffff;
          margin-bottom: 8px;
        }

        .warning-text {
          font-size: 14px;
          color: #cccccc;
        }

        .warning-text .highlight {
          color: #FFD700;
          text-decoration: underline;
          cursor: pointer;
        }

        .warning-text .highlight:hover {
          color: #ffed4e;
        }

        .back-link {
          display: inline-block;
          margin-bottom: 30px;
          color: #FFD700;
          text-decoration: none;
          font-size: 16px;
          padding: 10px 20px;
          border: 2px solid #FFD700;
          border-radius: 8px;
          transition: all 0.3s ease;
        }

        .back-link:hover {
          background-color: #FFD700;
          color: #000000;
        }

        .links-container {
          max-width: 800px;
          margin: 0 auto;
          padding: 0 20px;
        }

        .link-item {
          background-color: #1a1a2e;
          border-radius: 8px;
          margin-bottom: 12px;
          transition: all 0.3s ease;
        }

        .link-item:hover {
          background-color: #16213e;
          transform: translateX(5px);
        }

        .link-item.preferred {
          background-color: #1a2a1a;
          border: 2px solid #FFD700;
          box-shadow: 0 0 15px rgba(255, 215, 0, 0.4);
        }

        .link-item.preferred:hover {
          background-color: #1f3a1f;
          box-shadow: 0 0 20px rgba(255, 215, 0, 0.6);
        }

        .link-item a {
          display: flex;
          align-items: center;
          padding: 15px 20px;
          color: #ffffff;
          text-decoration: none;
          width: 100%;
        }

        .play-icon {
          color: #FFD700;
          font-size: 14px;
          margin-right: 15px;
          flex-shrink: 0;
        }

        .star-icon {
          color: #FFD700;
          font-size: 16px;
          margin-right: 8px;
          flex-shrink: 0;
        }

        .link-domain {
          font-size: 16px;
          color: #ffffff;
        }

        .link-item.preferred .link-domain {
          color: #FFD700;
          font-weight: bold;
        }

        @media (max-width: 768px) {
          .main-title {
            font-size: 36px;
          }
          .links-container {
            padding: 0 10px;
          }
        }
      </style>
    </head>
    <body>
      <div class="title-section">
        <h1 class="main-title">ZugList</h1>
        <div class="greeting">Ahoy, Mateys!</div>
        <div class="warning-text">Be sure to use <span class="highlight">AdBlock</span> and <span class="highlight">VPN</span> if needed.</div>
      </div>

      <div class="links-container">
        <a href="/" class="back-link">← Back to Categories</a>
        
        ${sportsSites.map((site, index) => {
          const isPreferred = index < 2;
          return `
          <div class="link-item ${isPreferred ? 'preferred' : ''}">
            <a href="https://${site}" target="_blank" rel="noopener noreferrer">
              ${isPreferred ? '<span class="star-icon">★</span>' : ''}
              <span class="play-icon">►</span>
              <span class="link-domain">${site}</span>
            </a>
          </div>
        `;
        }).join('')}
      </div>
    </body>
    </html>
  `);
});

// Live TV route
app.get('/live-tv', (req, res) => {
  const liveTvSites = [
    'famelack.com',
    'tvpass.org',
    'globetv.app',
    'daddylive.mp',
    'tv247.us',
    'tv.garden',
    'iptv-web.app',
    'publiciptv.com'
  ];

  res.send(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
    <meta name="description" content="ZugList is a curated index of movies, anime, manga, live sports, TV, games, music, eBooks, torrents, and streaming tools.">
    <meta name="keywords" content="free streaming, movies, anime, manga, live sports, IPTV, torrents, games, music downloads, eBooks">
    <meta name="robots" content="index, follow">
    <link rel="canonical" href="https://ZugList.cc${req.path}">
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Live TV - ZugList</title>
      <style>
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        body {
          font-family: sans-serif;
          background-color: #000000;
          color: #ffffff;
          min-height: 100vh;
          padding: 20px;
        }

        .title-section {
          text-align: center;
          margin-bottom: 30px;
        }

        .main-title {
          font-size: 48px;
          font-weight: bold;
          color: #ffffff;
          margin-bottom: 10px;
          letter-spacing: 2px;
        }

        .greeting {
          font-size: 24px;
          color: #ffffff;
          margin-bottom: 8px;
        }

        .warning-text {
          font-size: 14px;
          color: #cccccc;
        }

        .warning-text .highlight {
          color: #FFD700;
          text-decoration: underline;
          cursor: pointer;
        }

        .warning-text .highlight:hover {
          color: #ffed4e;
        }

        .back-link {
          display: inline-block;
          margin-bottom: 30px;
          color: #FFD700;
          text-decoration: none;
          font-size: 16px;
          padding: 10px 20px;
          border: 2px solid #FFD700;
          border-radius: 8px;
          transition: all 0.3s ease;
        }

        .back-link:hover {
          background-color: #FFD700;
          color: #000000;
        }

        .links-container {
          max-width: 800px;
          margin: 0 auto;
          padding: 0 20px;
        }

        .link-item {
          background-color: #1a1a2e;
          border-radius: 8px;
          margin-bottom: 12px;
          transition: all 0.3s ease;
        }

        .link-item:hover {
          background-color: #16213e;
          transform: translateX(5px);
        }

        .link-item a {
          display: flex;
          align-items: center;
          padding: 15px 20px;
          color: #ffffff;
          text-decoration: none;
          width: 100%;
        }

        .play-icon {
          color: #FFD700;
          font-size: 14px;
          margin-right: 15px;
          flex-shrink: 0;
        }

        .link-domain {
          font-size: 16px;
          color: #ffffff;
        }

        @media (max-width: 768px) {
          .main-title {
            font-size: 36px;
          }
          .links-container {
            padding: 0 10px;
          }
        }
      </style>
    </head>
    <body>
      <div class="title-section">
        <h1 class="main-title">ZugList</h1>
        <div class="greeting">Ahoy, Mateys!</div>
        <div class="warning-text">Be sure to use <span class="highlight">AdBlock</span> and <span class="highlight">VPN</span> if needed.</div>
      </div>

      <div class="links-container">
        <a href="/" class="back-link">← Back to Categories</a>
        
        ${liveTvSites.map(site => `
          <div class="link-item">
            <a href="https://${site}" target="_blank" rel="noopener noreferrer">
              <span class="play-icon">►</span>
              <span class="link-domain">${site}</span>
            </a>
          </div>
        `).join('')}
      </div>
    </body>
    </html>
  `);
});

// Torrents route
app.get('/torrents', (req, res) => {
  const torrentSites = [
    '1337x.to',
    'thepiratebay.org',
    'rutracker.org',
    'rargb.to',
    'limetorrents.lol',
    'yts.mx',
    'eztvx.to',
    'torrentgalaxy.one',
    'extratorrent.st',
    'ext.to'
  ];

  res.send(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
    <meta name="description" content="ZugList is a curated index of movies, anime, manga, live sports, TV, games, music, eBooks, torrents, and streaming tools.">
    <meta name="keywords" content="free streaming, movies, anime, manga, live sports, IPTV, torrents, games, music downloads, eBooks">
    <meta name="robots" content="index, follow">
    <link rel="canonical" href="https://ZugList.cc${req.path}">
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Torrents - ZugList</title>
      <style>
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        body {
          font-family: sans-serif;
          background-color: #000000;
          color: #ffffff;
          min-height: 100vh;
          padding: 20px;
        }

        .title-section {
          text-align: center;
          margin-bottom: 30px;
        }

        .main-title {
          font-size: 48px;
          font-weight: bold;
          color: #ffffff;
          margin-bottom: 10px;
          letter-spacing: 2px;
        }

        .greeting {
          font-size: 24px;
          color: #ffffff;
          margin-bottom: 8px;
        }

        .warning-text {
          font-size: 14px;
          color: #cccccc;
        }

        .warning-text .highlight {
          color: #FFD700;
          text-decoration: underline;
          cursor: pointer;
        }

        .warning-text .highlight:hover {
          color: #ffed4e;
        }

        .back-link {
          display: inline-block;
          margin-bottom: 30px;
          color: #FFD700;
          text-decoration: none;
          font-size: 16px;
          padding: 10px 20px;
          border: 2px solid #FFD700;
          border-radius: 8px;
          transition: all 0.3s ease;
        }

        .back-link:hover {
          background-color: #FFD700;
          color: #000000;
        }

        .links-container {
          max-width: 800px;
          margin: 0 auto;
          padding: 0 20px;
        }

        .link-item {
          background-color: #1a1a2e;
          border-radius: 8px;
          margin-bottom: 12px;
          transition: all 0.3s ease;
        }

        .link-item:hover {
          background-color: #16213e;
          transform: translateX(5px);
        }

        .link-item a {
          display: flex;
          align-items: center;
          padding: 15px 20px;
          color: #ffffff;
          text-decoration: none;
          width: 100%;
        }

        .play-icon {
          color: #FFD700;
          font-size: 14px;
          margin-right: 15px;
          flex-shrink: 0;
        }

        .link-domain {
          font-size: 16px;
          color: #ffffff;
        }

        @media (max-width: 768px) {
          .main-title {
            font-size: 36px;
          }
          .links-container {
            padding: 0 10px;
          }
        }
      </style>
    </head>
    <body>
      <div class="title-section">
        <h1 class="main-title">ZugList</h1>
        <div class="greeting">Ahoy, Mateys!</div>
        <div class="warning-text">Be sure to use <span class="highlight">AdBlock</span> and <span class="highlight">VPN</span> if needed.</div>
      </div>

      <div class="links-container">
        <a href="/" class="back-link">← Back to Categories</a>
        
        ${torrentSites.map(site => `
          <div class="link-item">
            <a href="https://${site}" target="_blank" rel="noopener noreferrer">
              <span class="play-icon">►</span>
              <span class="link-domain">${site}</span>
            </a>
          </div>
        `).join('')}
      </div>
    </body>
    </html>
  `);
});

// Games route
app.get('/games', (req, res) => {
  const gameSites = [
    'fitgirl-repacks.site',
    'dodi-repacks.site',
    'ankergames.net',
    'g4u.to',
    'steamrip.com',
    'steamgg.net',
    'm4ckd0ge-repacks.site',
    'gload.to'
  ];

  res.send(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
    <meta name="description" content="ZugList is a curated index of movies, anime, manga, live sports, TV, games, music, eBooks, torrents, and streaming tools.">
    <meta name="keywords" content="free streaming, movies, anime, manga, live sports, IPTV, torrents, games, music downloads, eBooks">
    <meta name="robots" content="index, follow">
    <link rel="canonical" href="https://ZugList.cc${req.path}">
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Games - ZugList</title>
      <style>
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        body {
          font-family: sans-serif;
          background-color: #000000;
          color: #ffffff;
          min-height: 100vh;
          padding: 20px;
        }

        .title-section {
          text-align: center;
          margin-bottom: 30px;
        }

        .main-title {
          font-size: 48px;
          font-weight: bold;
          color: #ffffff;
          margin-bottom: 10px;
          letter-spacing: 2px;
        }

        .greeting {
          font-size: 24px;
          color: #ffffff;
          margin-bottom: 8px;
        }

        .warning-text {
          font-size: 14px;
          color: #cccccc;
        }

        .warning-text .highlight {
          color: #FFD700;
          text-decoration: underline;
          cursor: pointer;
        }

        .warning-text .highlight:hover {
          color: #ffed4e;
        }

        .back-link {
          display: inline-block;
          margin-bottom: 30px;
          color: #FFD700;
          text-decoration: none;
          font-size: 16px;
          padding: 10px 20px;
          border: 2px solid #FFD700;
          border-radius: 8px;
          transition: all 0.3s ease;
        }

        .back-link:hover {
          background-color: #FFD700;
          color: #000000;
        }

        .links-container {
          max-width: 800px;
          margin: 0 auto;
          padding: 0 20px;
        }

        .link-item {
          background-color: #1a1a2e;
          border-radius: 8px;
          margin-bottom: 12px;
          transition: all 0.3s ease;
        }

        .link-item:hover {
          background-color: #16213e;
          transform: translateX(5px);
        }

        .link-item a {
          display: flex;
          align-items: center;
          padding: 15px 20px;
          color: #ffffff;
          text-decoration: none;
          width: 100%;
        }

        .play-icon {
          color: #FFD700;
          font-size: 14px;
          margin-right: 15px;
          flex-shrink: 0;
        }

        .link-domain {
          font-size: 16px;
          color: #ffffff;
        }

        @media (max-width: 768px) {
          .main-title {
            font-size: 36px;
          }
          .links-container {
            padding: 0 10px;
          }
        }
      </style>
    </head>
    <body>
      <div class="title-section">
        <h1 class="main-title">ZugList</h1>
        <div class="greeting">Ahoy, Mateys!</div>
        <div class="warning-text">Be sure to use <span class="highlight">AdBlock</span> and <span class="highlight">VPN</span> if needed.</div>
      </div>

      <div class="links-container">
        <a href="/" class="back-link">← Back to Categories</a>
        
        ${gameSites.map(site => `
          <div class="link-item">
            <a href="https://${site}" target="_blank" rel="noopener noreferrer">
              <span class="play-icon">►</span>
              <span class="link-domain">${site}</span>
            </a>
          </div>
        `).join('')}
      </div>
    </body>
    </html>
  `);
});

// Music route
app.get('/music', (req, res) => {
  const spotifySites = [
    'spotdownloader.com',
    'spotifymate.com',
    'spotmate.online'
  ];

  const multipleSites = [
    'racoon',
    'ytiz.xyz',
    'lucida.to',
    'cobalt.tools'
  ];

  res.send(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
    <meta name="description" content="ZugList is a curated index of movies, anime, manga, live sports, TV, games, music, eBooks, torrents, and streaming tools.">
    <meta name="keywords" content="free streaming, movies, anime, manga, live sports, IPTV, torrents, games, music downloads, eBooks">
    <meta name="robots" content="index, follow">
    <link rel="canonical" href="https://ZugList.cc${req.path}">
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Music - ZugList</title>
      <style>
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        body {
          font-family: sans-serif;
          background-color: #000000;
          color: #ffffff;
          min-height: 100vh;
          padding: 20px;
        }

        .title-section {
          text-align: center;
          margin-bottom: 30px;
        }

        .main-title {
          font-size: 48px;
          font-weight: bold;
          color: #ffffff;
          margin-bottom: 10px;
          letter-spacing: 2px;
        }

        .greeting {
          font-size: 24px;
          color: #ffffff;
          margin-bottom: 8px;
        }

        .warning-text {
          font-size: 14px;
          color: #cccccc;
        }

        .warning-text .highlight {
          color: #FFD700;
          text-decoration: underline;
          cursor: pointer;
        }

        .warning-text .highlight:hover {
          color: #ffed4e;
        }

        .back-link {
          display: inline-block;
          margin-bottom: 30px;
          color: #FFD700;
          text-decoration: none;
          font-size: 16px;
          padding: 10px 20px;
          border: 2px solid #FFD700;
          border-radius: 8px;
          transition: all 0.3s ease;
        }

        .back-link:hover {
          background-color: #FFD700;
          color: #000000;
        }

        .links-container {
          max-width: 800px;
          margin: 0 auto;
          padding: 0 20px;
        }

        .section {
          margin-bottom: 40px;
        }

        .section-title {
          font-size: 24px;
          font-weight: bold;
          color: #ffffff;
          margin-bottom: 20px;
          text-align: left;
        }

        .link-item {
          background-color: #1a1a2e;
          border-radius: 8px;
          margin-bottom: 12px;
          transition: all 0.3s ease;
        }

        .link-item:hover {
          background-color: #16213e;
          transform: translateX(5px);
        }

        .link-item a {
          display: flex;
          align-items: center;
          padding: 15px 20px;
          color: #ffffff;
          text-decoration: none;
          width: 100%;
        }

        .spotify-icon {
          color: #1DB954;
          font-size: 20px;
          margin-right: 15px;
          flex-shrink: 0;
        }

        .music-icon {
          color: #FFD700;
          font-size: 18px;
          margin-right: 15px;
          flex-shrink: 0;
        }

        .link-domain {
          font-size: 16px;
          color: #ffffff;
        }

        @media (max-width: 768px) {
          .main-title {
            font-size: 36px;
          }
          .links-container {
            padding: 0 10px;
          }
        }
      </style>
    </head>
    <body>
      <div class="title-section">
        <h1 class="main-title">ZugList</h1>
        <div class="greeting">Ahoy, Mateys!</div>
        <div class="warning-text">Be sure to use <span class="highlight">AdBlock</span> and <span class="highlight">VPN</span> if needed.</div>
      </div>

      <div class="links-container">
        <a href="/" class="back-link">← Back to Categories</a>
        
        <div class="section">
          <h2 class="section-title">Spotify</h2>
          ${spotifySites.map(site => `
            <div class="link-item">
              <a href="https://${site}" target="_blank" rel="noopener noreferrer">
                <span class="spotify-icon">🎧</span>
                <span class="link-domain">${site}</span>
              </a>
            </div>
          `).join('')}
        </div>

        <div class="section">
          <h2 class="section-title">Multiple</h2>
          ${multipleSites.map(site => `
            <div class="link-item">
              <a href="https://${site}" target="_blank" rel="noopener noreferrer">
                <span class="music-icon">♫</span>
                <span class="link-domain">${site}</span>
              </a>
            </div>
          `).join('')}
        </div>
      </div>
    </body>
    </html>
  `);
});

// eBooks route
app.get('/ebooks', (req, res) => {
  const ebookSites = [
    'z-lib.gd',
    'annas-archive.org',
    'libgen.rs',
    'ebook-hunter.org'
  ];

  const audiobookSites = [
    'galaxyaudiobook.com',
    'audiobookbay.lu',
    'nepu.to'
  ];

  const ebookReaderSites = [
    'foxit.com',
    'flowoss.com'
  ];

  res.send(`
    <!DOCTYPE html>
    <html lang="en">
    <head>\
    <meta name="description" content="ZugList is a curated index of movies, anime, manga, live sports, TV, games, music, eBooks, torrents, and streaming tools.">
    <meta name="keywords" content="free streaming, movies, anime, manga, live sports, IPTV, torrents, games, music downloads, eBooks">
    <meta name="robots" content="index, follow">
    <link rel="canonical" href="https://ZugList.cc${req.path}">
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>eBooks - ZugList</title>
      <style>
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        body {
          font-family: sans-serif;
          background-color: #000000;
          color: #ffffff;
          min-height: 100vh;
          padding: 20px;
        }

        .title-section {
          text-align: center;
          margin-bottom: 30px;
        }

        .main-title {
          font-size: 48px;
          font-weight: bold;
          color: #ffffff;
          margin-bottom: 10px;
          letter-spacing: 2px;
        }

        .greeting {
          font-size: 24px;
          color: #ffffff;
          margin-bottom: 8px;
        }

        .warning-text {
          font-size: 14px;
          color: #cccccc;
        }

        .warning-text .highlight {
          color: #FFD700;
          text-decoration: underline;
          cursor: pointer;
        }

        .warning-text .highlight:hover {
          color: #ffed4e;
        }

        .back-link {
          display: inline-block;
          margin-bottom: 30px;
          color: #FFD700;
          text-decoration: none;
          font-size: 16px;
          padding: 10px 20px;
          border: 2px solid #FFD700;
          border-radius: 8px;
          transition: all 0.3s ease;
        }

        .back-link:hover {
          background-color: #FFD700;
          color: #000000;
        }

        .links-container {
          max-width: 800px;
          margin: 0 auto;
          padding: 0 20px;
        }

        .section {
          margin-bottom: 40px;
        }

        .section-title {
          font-size: 24px;
          font-weight: bold;
          color: #ffffff;
          margin-bottom: 20px;
          text-align: left;
        }

        .link-item {
          background-color: #1a1a2e;
          border-radius: 8px;
          margin-bottom: 12px;
          transition: all 0.3s ease;
        }

        .link-item:hover {
          background-color: #16213e;
          transform: translateX(5px);
        }

        .link-item a {
          display: flex;
          align-items: center;
          padding: 15px 20px;
          color: #ffffff;
          text-decoration: none;
          width: 100%;
        }

        .book-icon {
          color: #FFD700;
          font-size: 18px;
          margin-right: 15px;
          flex-shrink: 0;
        }

        .speaker-icon {
          color: #FFD700;
          font-size: 18px;
          margin-right: 15px;
          flex-shrink: 0;
        }

        .link-domain {
          font-size: 16px;
          color: #ffffff;
        }

        @media (max-width: 768px) {
          .main-title {
            font-size: 36px;
          }
          .links-container {
            padding: 0 10px;
          }
        }
      </style>
    </head>
    <body>
      <div class="title-section">
        <h1 class="main-title">ZugList</h1>
        <div class="greeting">Ahoy, Mateys!</div>
        <div class="warning-text">Be sure to use <span class="highlight">AdBlock</span> and <span class="highlight">VPN</span> if needed.</div>
      </div>

      <div class="links-container">
        <a href="/" class="back-link">← Back to Categories</a>
        
        <div class="section">
          <h2 class="section-title">eBooks</h2>
          ${ebookSites.map(site => `
            <div class="link-item">
              <a href="https://${site}" target="_blank" rel="noopener noreferrer">
                <span class="book-icon">📖</span>
                <span class="link-domain">${site}</span>
              </a>
            </div>
          `).join('')}
        </div>

        <div class="section">
          <h2 class="section-title">Audiobooks</h2>
          ${audiobookSites.map(site => `
            <div class="link-item">
              <a href="https://${site}" target="_blank" rel="noopener noreferrer">
                <span class="speaker-icon">🔊</span>
                <span class="link-domain">${site}</span>
              </a>
            </div>
          `).join('')}
        </div>

        <div class="section">
          <h2 class="section-title">eBook Readers</h2>
          ${ebookReaderSites.map(site => `
            <div class="link-item">
              <a href="https://${site}" target="_blank" rel="noopener noreferrer">
                <span class="book-icon">📖</span>
                <span class="link-domain">${site}</span>
              </a>
            </div>
          `).join('')}
        </div>
      </div>
    </body>
    </html>
  `);
});

// Comics route
app.get('/comics', (req, res) => {
  const comicSites = [
    'readcomiconline.li',
    'xoxocomic.com',
    'readcomicsonline.ru',
    'batcave.biz',
    'getcomics.org'
  ];

  res.send(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta name="description" content="ZugList is a curated index of movies, anime, manga, live sports, TV, games, music, eBooks, torrents, and streaming tools.">
      <meta name="keywords" content="free streaming, movies, anime, manga, live sports, IPTV, torrents, games, music downloads, eBooks">
      <meta name="robots" content="index, follow">
      <link rel="canonical" href="https://ZugList.cc${req.path}">
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Comics - ZugList</title>
      <style>
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        body {
          font-family: sans-serif;
          background-color: #000000;
          color: #ffffff;
          min-height: 100vh;
          padding: 20px;
        }

        .title-section {
          text-align: center;
          margin-bottom: 30px;
        }

        .main-title {
          font-size: 48px;
          font-weight: bold;
          color: #ffffff;
          margin-bottom: 10px;
          letter-spacing: 2px;
        }

        .greeting {
          font-size: 24px;
          color: #ffffff;
          margin-bottom: 8px;
        }

        .warning-text {
          font-size: 14px;
          color: #cccccc;
        }

        .warning-text .highlight {
          color: #FFD700;
          text-decoration: underline;
          cursor: pointer;
        }

        .warning-text .highlight:hover {
          color: #ffed4e;
        }

        .back-link {
          display: inline-block;
          margin-bottom: 30px;
          color: #FFD700;
          text-decoration: none;
          font-size: 16px;
          padding: 10px 20px;
          border: 2px solid #FFD700;
          border-radius: 8px;
          transition: all 0.3s ease;
        }

        .back-link:hover {
          background-color: #FFD700;
          color: #000000;
        }

        .links-container {
          max-width: 800px;
          margin: 0 auto;
          padding: 0 20px;
        }

        .link-item {
          background-color: #1a1a2e;
          border-radius: 8px;
          margin-bottom: 12px;
          transition: all 0.3s ease;
        }

        .link-item:hover {
          background-color: #16213e;
          transform: translateX(5px);
        }

        .link-item a {
          display: flex;
          align-items: center;
          padding: 15px 20px;
          color: #ffffff;
          text-decoration: none;
          width: 100%;
        }

        .comic-icon {
          color: #ffffff;
          font-size: 18px;
          margin-right: 15px;
          flex-shrink: 0;
        }

        .link-domain {
          font-size: 16px;
          color: #ffffff;
        }

        @media (max-width: 768px) {
          .main-title {
            font-size: 36px;
          }
          .links-container {
            padding: 0 10px;
          }
        }
      </style>
    </head>
    <body>
      <div class="title-section">
        <h1 class="main-title">ZugList</h1>
        <div class="greeting">Ahoy, Mateys!</div>
        <div class="warning-text">Be sure to use <span class="highlight">AdBlock</span> and <span class="highlight">VPN</span> if needed.</div>
      </div>

      <div class="links-container">
        <a href="/" class="back-link">← Back to Categories</a>
        
        ${comicSites.map(site => `
          <div class="link-item">
            <a href="https://${site}" target="_blank" rel="noopener noreferrer">
              <span class="comic-icon">📄</span>
              <span class="link-domain">${site}</span>
            </a>
          </div>
        `).join('')}
      </div>
    </body>
    </html>
  `);
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});


