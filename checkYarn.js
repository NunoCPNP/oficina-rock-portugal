if (!/yarn\.js$/.test(process.env.npm_execpath || '')) {
  console.warn('\u001b[33mThis repository requires Yarn 1.x for scripts to work properly.\u001b[39m\n')
  process.exit(1)
}

console.log('')
console.log(' _____  __ _      _            ______           _    ')
console.log('|  _  |/ _(_)    (_)           | ___ \\         | |   ')
console.log('| | | | |_ _  ___ _ _ __   __ _| |_/ /___   ___| | __')
console.log("| | | |  _| |/ __| | '_ \\ / _` |    // _ \\ / __| |/ /")
console.log('\\ \\_/ / | | | (__| | | | | (_| | |\\ \\ (_) | (__|   < ')
console.log(' \\___/|_| |_|\\___|_|_| |_|\\__,_\\_| \\_\\___/ \\___|_|\\_\\')
console.log('')
