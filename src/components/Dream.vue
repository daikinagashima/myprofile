<template>
    <div class="title">
        <p>{{ name }}</p>
        <h1>{{ text }}</h1>
        <h2>{{ content }}</h2>
        <h3 style="white-space:pre-wrap; word-wrap:break-word;">{{ timescarshare }}</h3>

        <h6>{{ now }}</h6>
        
    </div>
</template>

<script>
export default {
    name: "Title",
    data () {
        return {
            name: "将来の夢",
            text: "人の役に立つサービスを提供したい",
            content: "タイムズカーシェア",
            timescarshare: "　大学二年生のころ、念願の車の免許を取りました。早速運転をしたいと思いました。けれど、私の父は出張が多く、普段家には車がありませんでした。仕方なく、レンタカーで借りようとしましたが、学生の私には高い金額でした。どうにかして、安いお金で車に乗りたい。そう思い、ネットで探していると、タイムズカーシェアに出会いました。レンタカーより手軽で、料金も安く、私にとっては最高のサービスでした。",
            now: "ほかにもいくつか、私の役に立つサービスがありました。それらは、私にとって本当に素晴らしいサービスで、このサービスを作った人たちに感謝しました。それと同時にこのような、人の役に立ち、感謝されるようなサービスを作りたいと思うようになりました。"
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


</style>