
  function vidurineRaide (text) {

    if (text.lenght %2==0) {

        return text [(text.length/2-1)];

    } else {

        return text[Math.ceil(text.length/2-1)];
    }

} 

export {vidurineRaide}

/*

Arba buvo galima užrašyti f-ja trumpiau :

function vidurineRaide (text) {

    return text[Math.ceil(text.length / 2 - 1)];
}
*/
