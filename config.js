module.exports = {
	bot: {
		token: process.env.TOKEN,
		prefix: '!',
		clientSecret: process.env.SECRET,
		clientID: process.env.ID
	},
	website: {
		protocol: 'https://',
		domain: 'domain.name',
		port: 8080,
		captcha: {
			sitekey: 'SITE_KEY',
			secretkey: 'SECRET_KEY'
		}
	}
};
