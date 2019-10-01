<template>
    <div class="title">
        <p>{{ name }}</p>
        <h1>{{ text }}</h1>
        <h2>{{ content }}</h2>
        <h3 style="white-space:pre-wrap; word-wrap:break-word;">{{ nawatobi }}</h3>
        <h4>{{ kouritu }}</h4>
        <h5>{{ rennsyuu }}</h5>
        <h6>{{ now }}</h6>
        
    </div>
</template>

<script>
export default {
    name: "Title",
    data () {
        return {
            name: "名前",
            text: "永島　大輝",
            content: "経歴",
            nawatobi: "２０１４年　　狛江市立狛江第四中学校卒業　　　　　　　　　　　　　　２０１７年　　大成高等学校卒業　　　　　　　　　　　　　　　　　　　２０１７年　　東京経済大学経営学部入学　　　　　　　　　　　　　　　２０２１年　　東京経済大学経営学部卒業見込み",
            kouritu: "趣味",
            rennsyuu: "バスケットボール、YouTube",
            now: "　この自己紹介ページでは、５つのページを作成いたしました。一つ目は、学生時代です。こちらは私が中学高校大学で力を入れたことについて書かせていただきました。二つ目は将来の夢です。こちらは私の将来の夢について書かせていただきました。三つ目は私自身で思う強み、そして四つ目は弱みです。最後まで見てくださると幸いです。"
        }
    }
}


</script>

<style>
p {
    color: black;
    margin-top: 10px;
    font-family: 'Hiragino Kaku Gothic ProN', 'ヒラギノ角ゴ ProN W3', Meiryo, メイリオ, Osaka, 'MS PGothic', arial, helvetica, sans-serif;
}
h1 {
    margin: 0.8em;
    text-align: center;
    font-size: 2em;
    padding: 30px;
    background: Transparent;
    font-weight: bold;
    font-family: "Helvetica Neue" , Helvetica , Arial , Verdana , Roboto , "游ゴシック" , "Yu Gothic" , "游ゴシック体" , "YuGothic" , "ヒラギノ角ゴ Pro W3" , "Hiragino Kaku Gothic Pro" , "Meiryo UI" , "メイリオ" , Meiryo , "ＭＳ Ｐゴシック" , "MS PGothic" , sans-serif;
}
h2 {
    margin: 1em;
    font-size: 30px;
    font-style: normal;
    font-weight: bold;
    
}
h3 {
    text-align: left;
    display: inline-block;
    font-size:20px;
    color: black;
    font-family: "Helvetica Neue" , Helvetica , Arial , Verdana , Roboto , "游ゴシック" , "Yu Gothic" , "游ゴシック体" , "YuGothic" , "ヒラギノ角ゴ Pro W3" , "Hiragino Kaku Gothic Pro" , "Meiryo UI" , "メイリオ" , Meiryo , "ＭＳ Ｐゴシック" , "MS PGothic" , sans-serif;
    margin-left: 20em;
    margin-right: 20em;
}

h4 {
    margin: 1em;
    font-size: 30px;
    font-style: normal;
    font-weight: bold;
    
}
h5 {
    text-align: left;
    display: inline-block;
    font-size:20px;
    color: black;
    font-family: "Helvetica Neue" , Helvetica , Arial , Verdana , Roboto , "游ゴシック" , "Yu Gothic" , "游ゴシック体" , "YuGothic" , "ヒラギノ角ゴ Pro W3" , "Hiragino Kaku Gothic Pro" , "Meiryo UI" , "メイリオ" , Meiryo , "ＭＳ Ｐゴシック" , "MS PGothic" , sans-serif;
    margin-left: 20em;
    margin-right: 20em;
}

h6 {
    margin-top: 4em;
    margin-left: 15em;
    margin-right: 15em;
    display: inline-block;
    font-size: 20px;
    margin-bottom: 5em
}

body {
    background-image: url("../assets/haikei2.png");
    background-size: cover;
    background-position: center;
    width:100%;
    height:20em;
}

</style>