<template>
    <div class="title">
        <p>{{ name }}</p>
        <h1>{{ text }}</h1>
        <h2>{{ tyuukou }}</h2>
        <h3 style="white-space:pre-wrap; word-wrap:break-word;">{{ tyuukouzidai }}</h3>
        <h4>{{ daigaku}}</h4>
        <h5>{{ daigakuzidai }}</h5>
        <h6>{{ now }}</h6>
        
    </div>
</template>

<script>
export default {
    name: "Title",
    data () {
        return {
            name: "学生時代",
            text: "最後までやり遂げる",
            tyuukou: "中学高校時代",
            tyuukouzidai: "中学のころ、バスケットボール部に入りました。周辺地域ではかなり強く、とても厳しい部活でした。先生は毎日のように怒鳴り、体罰のようなものもありました。それにより、同級生でも何人かやめていく人たちがいました。私も何度かやめたいと思うことがありましたが、このまま逃げてもいいことはないと思い、部活を最後まで続けました。　　　　　　　　　　　　　　高校でもバスケットボール部に入りました。中学ほど怒られたりすることはありませんでしたが、中学の倍くらい練習が多く、きついものでした。ですが、辞めようとは思いませんでした。それは、中学で辞めないでよかったと思えたからです。最後までやりきるというのはとても気持ちがいいものでした。そして、上下関係、礼儀、忍耐力、友情などたくさんのものを得ることができました。",
            daigaku: "大学時代",
            daigakuzidai: "　大学に入り始めたころ、私は会計士になりたいと思い、簿記の勉強を始めました。学校の授業が終わって、夜7時から9時までの2時間を週に3回、夏休みも含む約半年ほど簿記二級の勉強をし、年に3回行われる試験を受けました。これだけ勉強したから大丈夫だと思っていましたが、最後の詰めが甘く、不合格になってしまいました。次の試験まで4か月も空きがあり、また同じ勉強をしないといけないと考えると、やる気が出ませんでした。ですが、中学高校でやった部活動を思い出しました。何事もやりきることが大事。やりきることで得るものがある。そう自分に言い聞かせ、もう4か月勉強に励みました。そのおかげで、次の試験で合格することができました。",
            now: "部活動では、様々なことを学びましたが、最後までやりきることは自分の財産になることが分かりました。"
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