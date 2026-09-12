	<!DOCTYPE html>
	<html lang="ja">
	<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>ROCKET ARCHIVE | 小石川ロケット班</title>
	<link rel="stylesheet" href="style.css">
	</head>
	<body>
	<div class="stars"></div>
	<div class="grid"></div>
	<div class="bg-rocket bg-rocket-1">🚀</div>
	<div class="bg-rocket bg-rocket-2">🚀</div>

	<header class="topbar">
	  <div class="brand"><span>KOISHIKAWA</span> / ROCKET ARCHIVE</div>
	  <div class="status"><i></i> SYSTEM ONLINE</div>
	</header>

	<main>
	  <section class="hero">
	    <div class="hero-copy">
	      <p class="eyebrow">MISSION ARCHIVE // 2026</p>
	      <h1>ROCKET<br><span>VIDEO</span><br>GALLERY</h1>
	      <p class="lead">小石川ロケット班の活動を、映像とともに記録する。<br>設計から打ち上げ、世界の舞台まで。軌跡のすべてをここに集約。</p>
	      <button class="scroll-btn" onclick="document.querySelector('#missions').scrollIntoView({behavior:'smooth'})">MISSION SELECT <b>↓</b></button>
	    </div>

	    <div class="hero-visual">
	      <div class="stats" id="stats">
	        <div class="stat">
	          <strong><span class="stat-num" data-target="43">0</span></strong>
	          <span class="stat-label">MEMBERS</span>
	          <small>設計・製作・運用を担う現役部員</small>
	        </div>
	        <div class="stat">
	          <strong><span class="stat-num" data-target="400">0</span><em>+</em></strong>
	          <span class="stat-label">SUCCESSFUL LAUNCHES</span>
	          <small>累計打ち上げ成功回数</small>
	        </div>
	        <div class="stat">
	          <strong><span class="stat-num" data-target="22000">0</span><em>m+</em></strong>
	          <span class="stat-label">TOTAL FLIGHT DISTANCE</span>
	          <small>累計飛行距離は 22,000m を突破</small>
	        </div>
	        <div class="stat">
	          <strong><i>#</i><span class="stat-num" data-target="1">0</span></strong>
	          <span class="stat-label">NATIONAL CHAMPION</span>
	          <small>全国大会 優勝</small>
	        </div>
	        <div class="stat wide">
	          <strong><span class="stat-num" data-target="4">0</span><em>TH</em></strong>
	          <span class="stat-label">WORLD FINALS</span>
	          <small>世界大会 第4位</small>
	        </div>
	      </div>
	    </div>
	  </section>

	  <section id="missions" class="missions">
	    <div class="section-head">
	      <div>
	        <p class="eyebrow">MISSION SELECT</p>
	        <h2>動画カテゴリー</h2>
	      </div>
	      <div class="mission-count">04 CATEGORIES</div>
	    </div>

	    <div class="cards">
	      <article class="card" data-category="打ち上げ映像">
	        <div class="card-no">MISSION 01</div>
	        <div class="card-icon">🚀</div>
	        <h3>打ち上げ映像</h3>
	        <p>実際のロケット打ち上げを記録した映像。</p>
	        <span>OPEN ARCHIVE →</span>
	      </article>
	      <article class="card" data-category="活動紹介">
	        <div class="card-no">MISSION 02</div>
	        <div class="card-icon">⚙</div>
	        <h3>活動紹介</h3>
	        <p>設計・製作・実験など、普段の活動を紹介。</p>
	        <span>OPEN ARCHIVE →</span>
	      </article>
	      <article class="card" data-category="世界大会">
	        <div class="card-no">MISSION 03</div>
	        <div class="card-icon">◎</div>
	        <h3>世界大会</h3>
	        <p>海外で挑戦した世界大会の記録。</p>
	        <span>OPEN ARCHIVE →</span>
	      </article>
	      <article class="card" data-category="内蔵カメラ映像">
	        <div class="card-no">MISSION 04</div>
	        <div class="card-icon">◉</div>
	        <h3>内蔵カメラ映像</h3>
	        <p>ロケットに搭載したカメラから見た飛行映像。</p>
	        <span>OPEN ARCHIVE →</span>
	      </article>
	    </div>
	  </section>
	</main>

	<div class="modal" id="modal">
	  <div class="modal-bg"></div>
	  <div class="modal-window">
	    <button class="close" id="close">×</button>
	    <p class="eyebrow" id="modalNo">MISSION 01</p>
	    <h2 id="modalTitle">打ち上げ映像</h2>
	    <div class="modal-details">
	      <div><span>STATUS</span><b>ARCHIVED</b></div>
	      <div><span>TYPE</span><b id="modalType">LAUNCH</b></div>
	      <div class="desc"><span>DESCRIPTION</span><p id="modalDesc"></p></div>
	    </div>
	    <div class="video-head">
	      <span>ARCHIVE CLIPS</span>
	      <b id="videoCount">03 VIDEOS</b>
	    </div>
	    <div class="video-grid" id="videoGrid"></div>
	  </div>
	</div>

	<script src="script.js"></script>
	<script type="module" src="https://static.cloudflareinsights.com/beacon.min.js/v31edd6df95cf4e85bb4c19e7a9bdbcba1788362987495" integrity="sha512-iIg7k2xntmwu6/uSb5tpc/hySgZc4eoL31yB29W6tJFo2akwjPWcEqnCEdJvGexCL0KEQwVYv5BlowfhVz26hg==" data-cf-beacon='{"version":"2024.11.0","token":"4edd5f8ec12a48cfa682ab8261b80a79","spa":2}' crossorigin="anonymous"></script>
</body>
	</html>
