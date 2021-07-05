const OAuth = require('oauth');
const { promisify } = require('util');

const { BEARER_TOKEN,
	ACCESS_TOKEN,
	ACCESS_TOKEN_SECRET,
	CONSUMER_API_KEY,
	CONSUMER_API_KEY_SECRET } = require('../assest/keys');



const newOAuth = () => {
	return new OAuth.OAuth(
		"https://twitter.com/oauth/request_token", "https://twitter.com/oauth/access_token", CONSUMER_API_KEY, CONSUMER_API_KEY_SECRET, "1.0a", null, "HMAC-SHA1"
	)
}

const getTweetsFromQuery = async ( query ) => {
	let oauth = newOAuth();
	
	const getOAuth = promisify( oauth.get.bind( oauth ) );

	let jsonResp = await getOAuth(
		`https://api.twitter.com/1.1/search/tweets.json?q=${query}`, ACCESS_TOKEN, ACCESS_TOKEN_SECRET
	)	
	
	return jsonResp;
};

// (async function (){
// 	const res = await getTweetsFromQuery({
// 		query: 'india',
// 	});
// 	console.log(res);
// })();


module.exports = {
	getTweetsFromQuery
}