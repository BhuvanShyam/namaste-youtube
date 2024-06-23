
const GOOGLE_API_KEY = "AIzaSyBaQrhEbYCtiyfvKevJt6F-U4R7bFMZC6g";

export const YOUTUBE_API = 'https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key=' + GOOGLE_API_KEY;
export const YOUTUBE_API_COMMENTS = 'https://youtube.googleapis.com/youtube/v3/comments?key=' + GOOGLE_API_KEY; 