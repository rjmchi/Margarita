const total = 1000;
const ingredient_names = ['Tequila', 'Controy', 'Lime', 'Water'];
const ingredient_amounts=[2.5, 2, 1, 2.5];

const tot_amts = ingredient_amounts.reduce((tot,amt)=> tot+amt);
console.log(tot_amts);

for (let i=0;i<ingredient_names.length;i++){
    let amt = (total/tot_amts)*ingredient_amounts[i];
    console.log(`${ingredient_names[i]}: ${amt}`);
}
