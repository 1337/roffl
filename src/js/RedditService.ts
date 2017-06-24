export default class RedditService {
    static async get(subreddit: string, after?: string) {
        let resp;
        if (after) {
            resp = await fetch(`https://www.reddit.com/r/${subreddit}.json?after=${after}`);
        } else {
            resp = await fetch(`https://www.reddit.com/r/${subreddit}.json`);
        }
        let json = await resp.json();
        return json;
    }
}
