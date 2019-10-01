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
            name: "自分の強み",
            text: "努力を惜しまない",
            content: "努力の大切さを知ったのは小学二年生の縄跳び大会でした。",
            nawatobi: "　小学二年生のころ、クラス全員でやる縄跳び大会がありました。朝の朝礼で先生が「来週の体育の時間に縄跳び大会がありますので、昼休みは練習するようにしましょう。」と言いました。それを聞いた僕は、ほかの友達は昼休みにドッヂボールなどして遊んでいる中、一人で黙々と縄跳びの練習をしていました。そして大会当日。一番飛び続けた人が優勝というルールでした。私はみんなより練習していたので、ダントツで飛び続け、見事優勝することができました。みんなに褒められ、すごくうれしくなりました。その時、今まで練習してきたから優勝できたんだなと実感し、その時努力の大切さを知ることになりました。",
            kouritu: "ただ努力するだけではだめ。",
            rennsyuu: "　中学生で部活を一生懸命、毎日休まず練習をしていても、そう簡単には周りの人よりうまくなることはできませんでした。中学ではメンバーに選ばれることはなく、そのまま引退しました。高校では試合に出たいと思っていましたが、なぜ周りと同じ努力をしても同じ結果が出ないのか、考えるようになりました。そしてある時、努力の質が大切だと気付くことができました。ただ努力をするだけではだめ。頭で考えながら行動に起こさないと、成長しない。そう思うようになってから毎日練習の意図を考えたり、ただのシュート練習も試合をイメージしながら練習しました。その努力は報われ、３年生では試合に出て、チームに貢献することができました。",
            now: "「努力なんか報われない」という人がよくいますが、そんなことはないのではと思います。その時は報われなくても、その努力がいつか報われるときが来ると思います。また、努力をしてもどうせ報われないからしても意味ないという人がときどきいますが、それは努力の質が低かったり、努力の量が足りないだけだと思います。何事も努力が必要だと思っています。これからいろんな困難に会うかもしれませんが、自分の努力を信じてこれから行動していこうと思います。"
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