function reshape(n, str) {
    str = str.replace(/\s/g, '');
    count = 0;
    letter = '';
    console.log(str.length);
    for(var i = 0; i < str.length; i++)
    {
        if (count < n)
        {
            letter += str[i];
            count ++;
        }
        else {
            count = 0;
            letter += '\n';
        }
        
        
    }
    return letter;
}

console.log(reshape(3, 'abc de fghij'));
console.log(reshape(2, '1 23 456'));