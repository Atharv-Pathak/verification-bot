module.exports = {
	bot: {
		token: process.envTOKEN,
		prefix: '!',
		clientSecret: process.env.SECRET,
		clientID: process.env.ID
	},
	website: {
		protocol: 'https://',
		domain: 'verify.up.railway.app',
		port: 8080,
		captcha: {
			sitekey: '6LfxEzwaAAAAAAAAAAAAAAArFfN0zpwri4rm',
			secretkey: '6LfxEzwaAAAAAAAAAAAa8dG7OhMBx78TRFZdJ'
		}
	}
};
