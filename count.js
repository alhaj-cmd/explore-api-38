function kitchen() {
let roast =0;
return function(){
    roast++;
    return roast;
}

}

const firstSite = kitchen();
console.log(firstSite());