const dependencies = {
	GetAllInformations: require('./Domain/UseCases/GetAllInformations/GetAllInformations'),
	textA: require('./textA.factory'),
	textB: require('./textB.factory')
}

function mountView(name, {prepositions, verbs, verbsSubjunctive, numbers, orderAlphabet}) {
  console.log('\x1b[33m%s\x1b[1m%s\x1b[0m','Analyzed Text: ', name)
  console.log('\x1b[34m%s\x1b[1m%s\x1b[0m', 'Numbers of Prepositions: ', prepositions)
  console.log('\x1b[34m%s\x1b[1m%s\x1b[0m', 'Numbers of Verbs: ', verbs)
  console.log('\x1b[34m%s\x1b[1m%s\x1b[0m', 'Numbers of Verbs Subjunctive: ', verbsSubjunctive)
  console.log('\x1b[34m%s\x1b[1m%s\x1b[0m', 'Numbers of Pretty Numbers: ', numbers)
  console.log('\x1b[34m%s\x1b[1m%s\x1b[0m', 'Order Alphabet: ', orderAlphabet)
  console.log('                                                                                      ')
  console.log('\x1b[45m/\\/\\/\\/\\/\\/\\/\\/\\/\\/\\/\\/\\/\\/\\/\\/\\/\\/\\/\\/\\/\\/\\/\\/\\/\\/\\/\\/\\\x1b[0m')
  console.log('                                                                                      ')
}

function Main(injection) {
	const {GetAllInformations, textA, textB} = Object.assign({}, dependencies, injection)
  console.log('                                                                                      ')
  console.log('                                                                                      ')
  console.log('                                                                                      ')
  console.log('███████╗███████╗ ██████╗ █████╗ ██╗     ███████╗    ████████╗███████╗███████╗████████╗')
  console.log('██╔════╝██╔════╝██╔════╝██╔══██╗██║     ██╔════╝    ╚══██╔══╝██╔════╝██╔════╝╚══██╔══╝')
  console.log('█████╗  ███████╗██║     ███████║██║     █████╗         ██║   █████╗  ███████╗   ██║   ')
  console.log('██╔══╝  ╚════██║██║     ██╔══██║██║     ██╔══╝         ██║   ██╔══╝  ╚════██║   ██║   ')
  console.log('███████╗███████║╚██████╗██║  ██║███████╗███████╗       ██║   ███████╗███████║   ██║   ')
  console.log('╚══════╝╚══════╝ ╚═════╝╚═╝  ╚═╝╚══════╝╚══════╝       ╚═╝   ╚══════╝╚══════╝   ╚═╝   ')
  console.log('                                                                                      ')
  console.log('\x1b[0m\x1b[41m\x1b[37m%s', 'Hello my little friends, welcome to the ESCALE TEST, today we will decode the Booglan language!')
  console.log('%s\x1b[0m', '                                        Let\'s go!')
  console.log('                                                                                      ')
  mountView('Text A', GetAllInformations(textA));
	mountView('Text B', GetAllInformations(textB));
}

Main()
