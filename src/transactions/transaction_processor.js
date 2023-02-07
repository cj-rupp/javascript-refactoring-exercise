
const wordFrequency = (words) => {
    if(words === undefined) { 
        throw new Error("Undefined collections or transations in processTransasctions");
    }
    else{
        /* Collect the frequency of each word in a map */
        const wordFrequencyTable = words.reduce((frequencyTable, word) => (
            frequencyTable.has(word) ?
            frequencyTable.set(word, 
                (frequencyTable.get(word) + 1)) :
            frequencyTable.set(word,1) 
        ), new Map());

        /* Extract an array of pairs and sort them.
        The scores are sorted in descending order, but the word in ascending. */
        const orderedTotals = [...wordFrequencyTable].sort((a,b) => (
            (a[1] === b[1]) ?
            a[0].localeCompare(b[0]) :
            b[1] - a[1]
        ));

        /* Flatten the pairs for the output format */
        return orderedTotals.map((total) =>`${total[0]} ${total[1]}`);
    }
}

/* Just need to rename the exported function to maintain the API. Remember that you can't use a constant until it's
    been assigned. Should this function also be the one to raise the Error? */

export const processTransactions = wordFrequency;