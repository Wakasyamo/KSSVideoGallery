	const cards = document.querySelectorAll('.card');
	const modal = document.querySelector('#modal');
	const close = document.querySelector('#close');
	const modalTitle = document.querySelector('#modalTitle');
	const modalNo = document.querySelector('#modalNo');
	const modalDesc = document.querySelector('#modalDesc');
	const modalType = document.querySelector('#modalType');
	const videoGrid = document.querySelector('#videoGrid');
	const videoCount = document.querySelector('#videoCount');

	const descriptions = {
	  '打ち上げ映像':'大会や試験で実際にロケットを打ち上げた瞬間を記録した映像です。発射から着地まで、ロケットの飛行を楽しめます。成功の瞬間はもちろん、機体の挙動や回収の様子まで収録しています。',
	  '活動紹介':'設計、製作、実験、データ解析など、ロケット班が普段どのような活動をしているのかを紹介します。班員のインタビューや作業風景も見どころです。',
	  '世界大会':'日本代表として参加した世界大会など、海外での挑戦を記録した映像です。世界の舞台で戦う機体と班員たちの姿を収めています。',
	  '内蔵カメラ映像':'ロケットに搭載したカメラから撮影した、地上からは見られない飛行中の景色を楽しめます。高度数百メートルからの眺めは必見です。'
	};
	const types = {'打ち上げ映像':'LAUNCH','活動紹介':'ACTIVITY','世界大会':'WORLD CUP','内蔵カメラ映像':'ONBOARD CAM'};

	// 各カテゴリーに複数の動画クリップを登録（実際の動画URLと差し替えるための枠）
	const videos = {
	  '打ち上げ映像':['LAUNCH 001','LAUNCH 002','LAUNCH 003'],
	  '活動紹介':['ACTIVITY 001','ACTIVITY 002'],
	  '世界大会':['WORLD CUP 001','WORLD CUP 002','WORLD CUP 003'],
	  '内蔵カメラ映像':['ONBOARD 001','ONBOARD 002','ONBOARD 003']
	};

	function renderVideos(cat){
	  videoGrid.innerHTML = '';
	  videos[cat].forEach((code,i)=>{
	    const item = document.createElement('div');
	    item.className = 'video-item';
	    item.innerHTML =
	      '<div class="video-thumb"><span class="play-sm">▶</span><span class="video-code">'+code+'</span></div>' +
	      '<p>'+cat+' — CLIP '+String(i+1).padStart(2,'0')+'</p>' +
	      '<small>ここに動画ファイルを配置できます</small>';
	    videoGrid.appendChild(item);
	  });
	  videoCount.textContent = String(videos[cat].length).padStart(2,'0')+' VIDEOS';
	}

	cards.forEach((card,i)=>{
	  // カード右上にクリップ数をバッジ表示
	  const n = videos[card.dataset.category].length;
	  const badge = document.createElement('b');
	  badge.className = 'clip-count';
	  badge.textContent = String(n).padStart(2,'0')+' CLIPS';
	  card.appendChild(badge);

	  card.addEventListener('click',()=>{
	    const cat=card.dataset.category;
	    modalTitle.textContent=cat;
	    modalNo.textContent='MISSION '+String(i+1).padStart(2,'0');
	    modalDesc.textContent=descriptions[cat];
	    modalType.textContent=types[cat];
	    renderVideos(cat);
	    modal.classList.add('open');
	    document.body.style.overflow='hidden';
	  });
	});
	function closeModal(){modal.classList.remove('open');document.body.style.overflow=''}
	close.addEventListener('click',closeModal);
	modal.addEventListener('click',e=>{if(e.target.classList.contains('modal-bg'))closeModal()});
	document.addEventListener('keydown',e=>{if(e.key==='Escape')closeModal()});

	// スタッツのカウントアップ演出（初回に画面内に入ったときのみ0から加算）
	const stats = document.querySelector('#stats');
	const numEls = stats.querySelectorAll('.stat-num');

	function countUp(el){
	  const target = +el.dataset.target;
	  const dur = 1600;
	  const t0 = performance.now();
	  function tick(t){
	    const p = Math.min(1,(t-t0)/dur);
	    const eased = 1-Math.pow(1-p,3);
	    el.textContent = Math.round(target*eased).toLocaleString('en-US');
	    if(p<1) requestAnimationFrame(tick);
	  }
	  requestAnimationFrame(tick);
	}

	if('IntersectionObserver' in window){
	  const io = new IntersectionObserver((entries)=>{
	    entries.forEach(e=>{
	      if(e.isIntersecting){
	        numEls.forEach(countUp);
	        io.disconnect();
	      }
	    });
	  },{threshold:.4});
	  io.observe(stats);
	}else{numEls.forEach(countUp)}
