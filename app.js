

let pressquote = function() {
    const quote = [["Every strike brings me closer to the next home run.", "Babe Ruth"],
        ["The battles that count arent the ones for gold medals. The struggles within yourself the invisible battles inside all of usthats where its at.", "Jesse Owens"],
        ["How wonderful it is that nobody need wait a single moment before starting to improve the world.", "Anne Frank"], 
        ["Winning isnt everything, but wanting to win is." , "Vince Lombardi"],
        ["Happiness is not something readymade. It comes from your own actions." , "Dalai Lama"],
        ["If the wind will not serve, take to the oars.", "Latin Proverb"],
        ["If you want to lift yourself up, lift up someone else.", "Booker T. Washington"],
        ["Life shrinks or expands in proportion to ones courage.", "Anais Nin"],
        ["If you can dream it, you can achieve it." , "Zig Ziglar"],
        ["Whether you think you can or you think you cant, youre right.", "Henry Ford"]
    ];
    let color = ["#e6b980", "#9e5656", "#f8c789", "ca8237", "lightblue", "rgb(39, 174, 96)", "rgb(22, 160, 133)", "#f794a4", "#fdd6bd", "sienna"]
    let i = Math.floor(Math.random() * 10);
    console.log(i);
    
    let text1 = quote[i][0];
    let author1 = quote[i][1];
    let color1 = color[i];
    document.getElementById("text-quote").innerHTML = text1;
    document.getElementById("author-quote").innerHTML = author1;
    document.getElementById("text-quote").style.color = color1;
    document.getElementById("author-quote").style.color = color1;
    document.body.style.backgroundColor = color1;
    document.querySelector("i.fa-brands.fa-facebook").style.color = color1;
    document.querySelector("i.fa-brands.fa-instagram").style.color = color1;
    document.getElementById("new-quote").style.backgroundColor = color1;
    document.getElementById("new-quote").style.boxShadow = "2px 5px 2px lightsalmon";
};

