const dependencies = {
	GetPrepositions: require('Domain/UseCases/GetPrepositions/GetPrepositions'),
	GetVerbs: require('Domain/UseCases/GetVerbs/GetVerbs'),
	GetVerbsSubjunctive: require('Domain/UseCases/GetVerbsSubjunctive/GetVerbsSubjunctive'),
	GetPrettyNumbers: require('Domain/UseCases/GetPrettyNumbers/GetPrettyNumbers'),
	SortText: require('Domain/UseCases/SortText/SortText')
}

module.exports = (text, injection) => {
	const {
		GetPrepositions,
		GetVerbs,
		GetVerbsSubjunctive,
		GetPrettyNumbers,
		SortText
	} = Object.assign({}, dependencies, injection)
	return {
		prepositions: GetPrepositions(text),
		verbs: GetVerbs(text),
		verbsSubjunctive: GetVerbsSubjunctive(text),
		numbers: GetPrettyNumbers(text),
		orderAlphabet: SortText(text)
	}
}
