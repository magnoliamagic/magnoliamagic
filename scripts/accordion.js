'use strict';
{
    /*
    HTML構造: 複数のメニュー(食事、酒類)、複数の提供物(パスタ、カレー等/メニュー)
    ----------------------------------------------
    dl.menu  //食事のメニュー
      dt.item  //パスタ
      div.name  //料理名「格納パネル」
        dd  //カルボナーラ
        ...
      dt.item  //カレー
      div.name  //銘柄「格納パネル」
        dd  //カシミール
      ...
    dl.menu  //酒類のメニュー
      dt.item  //ワイン
      div.name  //銘柄「格納パネル」
        dd  //リード

    JS:「格納パネル」div.itemをクリックすると開閉するスタイル設定スクリプト
    ----------------------------------------------
      ・開いた状態のdiv.nameの高さを取得してname_heightに格納
      ・dt.itemとdiv.nameは対になっていることに注意
      ・div.itemをclickしたときにdiv.nameの「style,height:div.nameの高さ」をadd/removeするEventListenerを作成する
      ・div.itemに.closedをtoggleにする

    CSS: heightの値を0から「height:div.nameの高さ」の変更にtransitionを使う
    ----------------------------------------------
      ・「hight:0」で閉じ状態、「height:div.nameの高さ」で開き状態
      ・「dl.item.close + div.name」と「div.name」で区別する
      ・overflow:hiddenをつけることを忘れずに
      */

    const items = document.querySelectorAll('.item')
    const names = []
    const name_heights = []

    items.forEach((item, i) => {
        names[i] = item.nextElementSibling

        name_heights.push(names[i].clientHeight)

        item.addEventListener('click', () => {
            names[i].getAttribute('style')
                ? names[i].removeAttribute('style')
                : names[i].setAttribute('style', `height: ${name_heights[i]}px`)

            item.classList.toggle('closed')
        })

        item.classList.add('closed')
    })


}
