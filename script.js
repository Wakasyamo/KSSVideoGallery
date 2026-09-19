/* =========================================================
   ROCKET ARCHIVE
   Video Gallery Script

   動画再生について：

   JavaScriptから video.play()
   video.pause()
   video.currentTime

   を操作しません。

   動画再生はHTML5 <video controls> に完全に任せます。

   これにより、

   "The play() request was interrupted
    by a call to pause()."

   という play() / pause() の競合を防ぎます。
========================================================= */



/* =========================================================
   DOM
========================================================= */

const cards =
  document.querySelectorAll('.card');

const modal =
  document.querySelector('#modal');

const close =
  document.querySelector('#close');

const modalTitle =
  document.querySelector('#modalTitle');

const modalNo =
  document.querySelector('#modalNo');

const modalDesc =
  document.querySelector('#modalDesc');

const modalType =
  document.querySelector('#modalType');

const videoGrid =
  document.querySelector('#videoGrid');

const videoCount =
  document.querySelector('#videoCount');



/* =========================================================
   カテゴリー説明
========================================================= */

const descriptions = {

  '打ち上げ映像':
    '大会や試験で実際にロケットを打ち上げた瞬間を記録した映像です。発射から着地まで、ロケットの飛行を楽しめます。成功の瞬間はもちろん、機体の挙動や回収の様子まで収録しています。',

  '活動紹介':
    '設計、製作、実験、データ解析など、ロケット班が普段どのような活動をしているのかを紹介します。班員のインタビューや作業風景も見どころです。',

  '世界大会':
    '日本代表として参加した世界大会など、海外での挑戦を記録した映像です。世界の舞台で戦う機体と班員たちの姿を収めています。',

  '内蔵カメラ映像':
    'ロケットに搭載したカメラから撮影した、地上からは見られない飛行中の景色を楽しめます。高度数百メートルからの眺めは必見です。'

};



/* =========================================================
   カテゴリータイプ
========================================================= */

const types = {

  '打ち上げ映像':
    'LAUNCH',

  '活動紹介':
    'ACTIVITY',

  '世界大会':
    'WORLD CUP',

  '内蔵カメラ映像':
    'ONBOARD CAM'

};



/* =========================================================
   動画データ
=========================================================

   実際の動画ファイルは

   videos/

   フォルダに入れてください。

   例：

   videos/
   ├─ launch-01.mp4
   ├─ launch-02.mp4
   ├─ launch-03.mp4
   ├─ activity-01.mp4
   └─ ...

========================================================= */

const videos = {


  /* -------------------------------------------------------
     打ち上げ映像
  ------------------------------------------------------- */

  '打ち上げ映像': [

    {
      src: 'videos/launch-01.mp4',
      title: '打ち上げ #01',
      poster: 'videos/launch-01.jpg'
    },

    {
      src: 'videos/launch-02.mp4',
      title: '打ち上げ #02',
      poster: 'videos/launch-02.jpg'
    },

    {
      src: 'videos/launch-03.mp4',
      title: '打ち上げ #03',
      poster: 'videos/launch-03.jpg'
    }

  ],



  /* -------------------------------------------------------
     活動紹介
  ------------------------------------------------------- */

  '活動紹介': [

    {
      src: 'videos/activity-01.mp4',
      title: '設計・製作',
      poster: 'videos/activity-01.jpg'
    },

    {
      src: 'videos/activity-02.mp4',
      title: '実験・打上げ準備',
      poster: 'videos/activity-02.jpg'
    }

  ],



  /* -------------------------------------------------------
     世界大会
  ------------------------------------------------------- */

  '世界大会': [

    {
      src: 'videos/world-01.mp4',
      title: 'World Cup #01',
      poster: 'videos/world-01.jpg'
    },

    {
      src: 'videos/world-02.mp4',
      title: 'World Cup #02',
      poster: 'videos/world-02.jpg'
    },

    {
      src: 'videos/world-03.mp4',
      title: 'World Cup #03',
      poster: 'videos/world-03.jpg'
    }

  ],



  /* -------------------------------------------------------
     内蔵カメラ
  ------------------------------------------------------- */

  '内蔵カメラ映像': [

    {
      src: 'videos/onboard-01.mp4',
      title: 'Onboard #01',
      poster: 'videos/onboard-01.jpg'
    },

    {
      src: 'videos/onboard-02.mp4',
      title: 'Onboard #02',
      poster: 'videos/onboard-02.jpg'
    },

    {
      src: 'videos/onboard-03.mp4',
      title: 'Onboard #03',
      poster: 'videos/onboard-03.jpg'
    }

  ]

};



/* =========================================================
   動画一覧を生成
========================================================= */

function renderVideos(category) {

  /*
    現在表示されている動画を全削除
  */

  videoGrid.innerHTML = '';


  /*
    該当カテゴリーの動画を取得
  */

  const list =
    videos[category] || [];


  /*
    動画が存在しない場合
  */

  if (list.length === 0) {

    const empty =
      document.createElement('div');

    empty.className =
      'video-error';

    empty.textContent =
      'このカテゴリーには動画が登録されていません。';

    videoGrid.appendChild(empty);

    videoCount.textContent =
      '00 VIDEOS';

    return;
  }



  /* -------------------------------------------------------
     各動画を生成
  ------------------------------------------------------- */

  list.forEach((videoData, index) => {


    /* =========================
       コンテナ
    ========================== */

    const item =
      document.createElement('div');

    item.className =
      'video-item';



    /* =========================
       動画表示領域
    ========================== */

    const thumb =
      document.createElement('div');

    thumb.className =
      'video-thumb';



    /* =========================
       video要素
    ========================== */

    const video =
      document.createElement('video');


    /*
      重要：

      autoplay は使用しない
    */

    video.autoplay = false;

    video.removeAttribute('autoplay');


    /*
      標準コントロールを使用
    */

    video.controls = true;


    /*
      動画読み込みを軽量化
    */

    video.preload =
      'metadata';


    /*
      スマートフォンで
      インライン再生
    */

    video.playsInline = true;

    video.setAttribute(
      'playsinline',
      ''
    );


    /*
      ダウンロードボタンを非表示
    */

    video.setAttribute(
      'controlsList',
      'nodownload'
    );


    /*
      ポスター画像
    */

    if (videoData.poster) {

      video.poster =
        videoData.poster;

    }


    /*
      音声付きの通常動画

      mutedにはしない
    */

    video.muted = false;


    /*
      動画ファイルを設定
    */

    video.src =
      videoData.src;



    /* =========================
       動画エラー処理
    ========================== */

    const error =
      document.createElement('div');

    error.className =
      'video-error';

    error.hidden =
      true;


    video.addEventListener(
      'error',
      () => {

        const code =
          video.error
            ? video.error.code
            : 0;


        const messages = {

          1:
            '動画の読み込みが中断されました。',

          2:
            'ネットワークエラーが発生しました。',

          3:
            '動画をデコードできませんでした。',

          4:
            'このブラウザでは動画を再生できません。'

        };


        error.textContent =
          '⚠ ' +
          (
            messages[code] ||
            '動画ファイルを読み込めません。'
          ) +
          ' [' +
          videoData.src +
          ']';


        error.hidden =
          false;

      }
    );



    /* =========================
       動画が正常に読み込まれた
    ========================== */

    video.addEventListener(
      'loadedmetadata',
      () => {

        error.hidden =
          true;

      }
    );



    /* =========================
       要素を配置
    ========================== */

    thumb.appendChild(video);

    item.appendChild(thumb);



    /* =========================
       タイトル
    ========================== */

    const title =
      document.createElement('p');

    title.textContent =
      videoData.title ||
      category;



    /* =========================
       CLIP番号
    ========================== */

    const clipNo =
      document.createElement('small');

    clipNo.className =
      'clip-no';

    clipNo.textContent =
      'CLIP ' +
      String(index + 1)
        .padStart(2, '0');


    title.appendChild(
      document.createTextNode(' ')
    );

    title.appendChild(
      clipNo
    );


    item.appendChild(
      title
    );



    /* =========================
       ファイル名
    ========================== */

    const filename =
      document.createElement('small');

    filename.className =
      'video-file';

    filename.textContent =
      videoData.src
        .split('/')
        .pop();


    item.appendChild(
      filename
    );



    /* =========================
       エラー表示
    ========================== */

    item.appendChild(
      error
    );


    /*
      完成した動画カードを追加
    */

    videoGrid.appendChild(
      item
    );

  });



  /* =========================
     動画本数
  ========================== */

  videoCount.textContent =
    String(list.length)
      .padStart(2, '0') +
    ' VIDEOS';

}



/* =========================================================
   カテゴリーカード
========================================================= */

cards.forEach((card, index) => {


  const category =
    card.dataset.category;


  /*
    動画本数
  */

  const count =
    videos[category]
      ? videos[category].length
      : 0;



  /*
    CLIPSバッジ
  */

  const badge =
    document.createElement('b');

  badge.className =
    'clip-count';

  badge.textContent =
    String(count)
      .padStart(2, '0') +
    ' CLIPS';


  card.appendChild(
    badge
  );



  /*
    カードクリック
  */

  card.addEventListener(
    'click',
    () => {


      /*
        カテゴリー名
      */

      modalTitle.textContent =
        category;



      /*
        MISSION番号
      */

      modalNo.textContent =
        'MISSION ' +
        String(index + 1)
          .padStart(2, '0');



      /*
        説明
      */

      modalDesc.textContent =
        descriptions[category] ||
        '';



      /*
        タイプ
      */

      modalType.textContent =
        types[category] ||
        'ARCHIVE';



      /*
        動画を生成
      */

      renderVideos(
        category
      );



      /*
        モーダルを表示
      */

      modal.classList.add(
        'open'
      );


      /*
        背景スクロールを停止
      */

      document.body.style.overflow =
        'hidden';

    }
  );

});



/* =========================================================
   モーダルを閉じる
========================================================= */

function closeModal() {


  /*
    重要：

    ここで video.pause() を呼ばない。

    これが今回のエラー対策の重要ポイント。

    モーダルを閉じれば動画要素そのものが
    非表示になるため、JavaScriptから
    再生状態を操作する必要はありません。
  */


  modal.classList.remove(
    'open'
  );


  document.body.style.overflow =
    '';

}



/* =========================================================
   閉じるボタン
========================================================= */

close.addEventListener(
  'click',
  closeModal
);



/* =========================================================
   モーダル背景クリック
========================================================= */

modal.addEventListener(
  'click',
  event => {

    if (
      event.target.classList.contains(
        'modal-bg'
      )
    ) {

      closeModal();

    }

  }
);



/* =========================================================
   ESCキー
========================================================= */

document.addEventListener(
  'keydown',
  event => {

    if (event.key === 'Escape') {

      closeModal();

    }

  }
);



/* =========================================================
   スタッツ
========================================================= */

const stats =
  document.querySelector('#stats');


if (stats) {


  const numEls =
    stats.querySelectorAll(
      '.stat-num'
    );



  /* -------------------------------------------------------
     カウントアップ
  ------------------------------------------------------- */

  function countUp(element) {


    const target =
      Number(
        element.dataset.target
      );


    const duration =
      1600;


    const start =
      performance.now();



    function tick(now) {


      const progress =
        Math.min(
          1,
          (now - start) /
          duration
        );


      /*
        イージング
      */

      const eased =
        1 -
        Math.pow(
          1 - progress,
          3
        );


      /*
        数値表示
      */

      element.textContent =
        Math.round(
          target * eased
        ).toLocaleString(
          'en-US'
        );



      /*
        まだ途中なら続ける
      */

      if (progress < 1) {

        requestAnimationFrame(
          tick
        );

      }

    }


    requestAnimationFrame(
      tick
    );

  }



  /* -------------------------------------------------------
     IntersectionObserver
  ------------------------------------------------------- */

  if (
    'IntersectionObserver'
    in window
  ) {


    const observer =
      new IntersectionObserver(
        entries => {


          entries.forEach(
            entry => {


              if (
                entry.isIntersecting
              ) {


                /*
                  全数字をカウントアップ
                */

                numEls.forEach(
                  countUp
                );


                /*
                  一度だけ実行
                */

                observer.disconnect();

              }

            }
          );

        },
        {
          threshold: 0.4
        }
      );


    observer.observe(
      stats
    );


  } else {


    /*
      古いブラウザ用
    */

    numEls.forEach(
      countUp
    );

  }

}
