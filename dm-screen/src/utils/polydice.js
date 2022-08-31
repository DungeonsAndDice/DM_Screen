class DiceRoller {

    static rollPolyDice(sides, num=1, add=0, minus=0){
        let sum = 0;
        for (var i = 1; i <= num; i++){
            var result = Math.floor(Math.random()*sides) + 1;
            sum+= result;
        }
        sum += parseInt(add);
        sum -= minus;
        if (sum < 1) {sum = 1}
        return sum;
    }

    static diceNotationParse(dice){
        let dice_str = dice.replace(/ /g, "").replace("D", "d");
        let d = dice_str.indexOf("d");
        let plus = dice_str.indexOf("+");
        let minus = dice_str.indexOf("-")
        let num = dice_str.slice(0,d);
        let sides = 0;
        let add = 0;
        let subtract = 0;
        if (plus != -1) {
            sides = dice_str.slice(d+1, plus);
            add = dice_str.slice(plus+1);
        } else if (minus != -1){
            sides = dice_str.slice(d+1, minus);
            subtract = dice_str.slice(minus+1);
        } else {
            sides = dice_str.slice(d+1);
        }
        return {number: num, die: sides, add: add, minus: subtract}
    }

    static rollDieCode(dieCode) {
        let dice_parse = this.diceNotationParse(dieCode);
        return this.rollPolyDice(dice_parse.die, dice_parse.number, dice_parse.add, dice_parse.minus);
    }

    static curveFinder(num, sides) {
        let min = num;
        let max = num*sides;
        let outcomes = max - min + 1;
        let mid = 0;
        if (outcomes %2 === 0) {
            console.log("even number of outcomes");
            mid = outcomes/2 + parseInt(min) -1;
        } else {
            console.log("odd number of outcomes")
            mid = (outcomes -1)/2 + parseInt(min);
        }
        console.log(`Outcomes(${outcomes}) = max ${max} - ${min} + 1`)
        return mid;
    }

    static modFinder(hitPoints, hitDice){
        let parsed = this.diceNotationParse(hitDice);
        console.log("parsed", parsed)
        let mid = this.curveFinder(parsed.number, parsed.die);
        console.log("mid", mid)
        return hitPoints - mid;
    }
}

export default DiceRoller;