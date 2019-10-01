<template>
    <div class="title">
        <p>{{ name }}</p>
        <h1>{{ text }}</h1>
        <h2>{{ content }}</h2>
        <h3 style="white-space:pre-wrap; word-wrap:break-word;">{{ makezugirai }}</h3>
        
        <h6>{{ now }}</h6>
        
    </div>
</template>

<script>
export default {
    name: "Title",
    data () {
        return {
            name: "自分の弱み",
            text: "負けず嫌い",
            content: "強みではないのか？",
            makezugirai: "　負けず嫌いというと一見強みに見えますが、私の場合、弱みだと考えます。負けず嫌いだと、一度悔しいと思うことがあると、ほかのことはどうでもよくなってしまい、そのことだけに集中してしまいます。そうなると、冷静になることができず、客観的にものが見れず、どんなに頑張ってもその人に追いつき追い越すことができなくなってしまいます。その人に勝ちたい時こそ、冷静になり、客観的に物事を見るようにし、自分のどこがダメだったのか、あの人のどこがいいのかを考え、ダメだったところは直すようにし、いいところはまねをするようにすることが自分の成長につながると考えます。",
            
            now: "性格というのはそう簡単には治らなく、少しずつ直ってきてはいますが、やはり時々悔しくなってしまい、周りが見えなくなってしまうことがあります。そういう時こそ、自分を落ち着かせ、自分のどこがダメなのか、相手のどこがよいのか、冷静に考えるようにしています。そうすることで、何をすればいいのかわかるようになり、より自分が成長できるようになります。"
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