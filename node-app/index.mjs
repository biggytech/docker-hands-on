import fs from 'fs'

fs.appendFile('my-file.txt', 'File created from Node.js', (err) => {
	if (err) throw err
	console.log('File saved!')
})

setTimeout(() => console.log('Exiting...'), 30000)
