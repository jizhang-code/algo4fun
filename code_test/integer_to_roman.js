
// roman numerals are represented by 7 symbols:
// I->1
// V->5
// X->10
// L->50
// C->100
// D->500
// M->1000
// IV->5-1=4
// IX->10-1=9
// XL->50-10=40
// XC->100-10=90
// CD->500-100=400
// CM->1000-100=900


const integerToRoman = (num) => {
    let res = "";
    if (num < 1 || num > 3999) return res;
    let weight = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
    let token = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I'];
    let i = 0;
    while (num > 0){
        if (num - weight[i] >= 0){
            res += token[i];
            num -= weight[i];
        }
        else{
            i++;
        }
    }
    return res;
};

console.log(integerToRoman(136));
console.log(integerToRoman(991));