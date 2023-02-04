
const wordFrequency = (words) => {
    if(words === undefined) { 
        throw new Error("Undefined collections or transations in processTransasctions");
    }
    else{
        const wordFrequencyTable = words.reduce((frequencyTable, word) => (
            frequencyTable.has(word) ?
            frequencyTable.set(word, 
                (frequencyTable.get(word) + 1)) :
            frequencyTable.set(word,1) 
        ), new Map());

        const orderedTotals = [...wordFrequencyTable].sort((a,b) => (
            (a[1] == b[1]) ?
            a[0].localeCompare(b[0]) :
            a[1] - b[0]
        ));

        const outputFormat =  orderedTotals.reduce((flatOutput,total,index) => {
            flatOutput.push(`${total[0]} ${total[1]}`);
            return flatOutput;
        }, []);
        
        return outputFormat;
    }
}

export const processTransactions = (words) => {
    return wordFrequency(words);
}