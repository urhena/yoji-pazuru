export default function Message(props) {
    return (
        <div className="message-container">
            <div className="message">
                <p>【このサイトについて】</p>
                <p>Reactを用いた四字熟語パズルです。ソースコードは下線を引いた「urhena」の下部のリンクから確認できます。四字熟語のデータはオンライン英和辞典のJMDict（3/17日付版）よりPythonのスクリプトで取得したもので、1811語があります。</p>
                <br />
                <p>【パズルの解き方】</p>
                <p>ランダムに表示される問題列の字をクリックすることでそれらが順番に回答列の枠に入ります。その四つの枠に字が入った瞬間、それぞれ緑色（正解）か赤色（不正解）がつきます。次のパズルに進むには右側（横向き表示の場合）か下側（縦向き表示の場合）にある灰色のボタンをクリックします。</p>
            </div>
            <div className="button-container">
            <button className="x-button" onClick={props.closeMessage}>閉じる</button>
            </div>
        </div>
    )
}