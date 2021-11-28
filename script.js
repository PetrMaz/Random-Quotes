function generate(){
    var quotes = {
        "- Deepak Chopra" : '"Sex is always about emotions. Good sex is about free emotions; bad sex is about blocked emotions."',
        "- John Galsworthy" : '"Life calls the tune, we dance."',
        "- Aaron Lauritsen" : '"The struggles we endure today will be the ‘good old days’ we laugh about tomorrow."',
        "- Carrie Bradshaw" : '"Maybe some women are not meant to be tamed. Maybe they just need to run free until they find someone just as wild to run with them."',
        "- Buddah" : '"The mind is everything. What you think you become."',
        "- Earl Nightingale": '"We become what we think about."',
        "- Albert Einstein": '"Strive not to be a success, but rather to be of value."',
        "- Mahatma Gandhi": '"Live as if you were to die tomorrow. Learn as if you were to live forever"',
        "- Michael Jordan": '"I missed more than 9000 shots in my career. I lost almost 300 games. 26 times I been trusted to take the game winning shot and missed. I failed over and over and over again in my life. And that is why I succeed."',
        "- Mark Twain": '"Twenty years from now you will be more disappointed by the things that you didn’t do than by the ones you did do, so throw off the bowlines, sail away from safe harbor, catch the trade winds in your sails.  Explore, Dream, Discover."',
        "- Martin Luther King Jr": '"Darkness cannot drive out darkness: only light can do that. Hate cannot drive out hate: only love can do that."',
        "- Steve Jobs": '"Your time is limited, so don’t waste it living someone else’s life."',
        "- Charles Swindoll": '"Life is 10% what happens to me and 90% of how I react to it."',
        "- Henry Ford": '"Whether you think you can or you think you can’t, you’re right."',
        "- Chinese Proverb": '"The best time to plant a tree was 20 years ago. The second best time is now."',
        "- Unknown": '"You Learn More From Failure Than From Success. Don’t Let It Stop You. Failure Builds Character."',
        "- Walt Disney": '"The Way Get Started Is To Quit Talking And Begin Doing."',
        "- Aristotle": '"There is only one way to avoid criticism: do nothing, say nothing, and be nothing"',
    }
    // grab all the keys in the dictionary (authors) and store in an array
    var authors = Object.keys(quotes);

    
    // grab a random key (author) and store it in author
    var authorindex = authors[Math.floor(Math.random() * authors.length)];

    // grab the value(quote) that belongs to that key
    var quote = quotes[authorindex];

    document.getElementById("quote").textContent = quote;
    document.getElementById("author").textContent = authorindex;
    
}