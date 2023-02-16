function countAcaracter(sentence){
    let sentence = "Bonjour, chers candidat comment vous allez aujourd'hui";
    let count = 0;
for(let i = 0; i < sentence.length; i++)
        {
            if(sentence[i] == "a")
                count++;
        }
        console.log("Le nombre d'occurrences de 'a' est :" ,count);
}
countAcaracter();

module.exports = countAcaracter;
