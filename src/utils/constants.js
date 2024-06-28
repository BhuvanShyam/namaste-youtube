
export const GOOGLE_API_KEY = "AIzaSyBaQrhEbYCtiyfvKevJt6F-U4R7bFMZC6g";

export const YOUTUBE_API = 'https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key=' + GOOGLE_API_KEY;
export const YOUTUBE_API_COMMENTS = 'https://youtube.googleapis.com/youtube/v3/comments?key=' + GOOGLE_API_KEY; 
export const YOUTUBE_SEARCH_API = "https://suggestqueries.google.com/complete/search?client=chrome&ds=yt&q="
export const YOUTUBE_DATA_API = 'https://www.googleapis.com/youtube/v3/videos?id=<video_id>&key='+ GOOGLE_API_KEY +'&part=snippet,contentDetails,statistics'
export const YOUTUBE_API_COMMENTSS = 'https://www.googleapis.com/youtube/v3/commentThreads?key={your_api_key}&textFormat=plainText&part=snippet&videoId={video_id}&maxResults=100&pageToken={nextPageToken}'