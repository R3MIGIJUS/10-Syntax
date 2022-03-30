function ArDidzioji(text, i) {
 
    const letter = text [i-1];
    return letter === letter.toUpperCase();
}

const a = ArDidzioji ("Liepa", 1);
console.log(a);