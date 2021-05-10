/**
 * 아래 형태의 url에서, video Id를 추출할 수 있습니다.
 * https://www.youtube.com/watch?v={VideoID}
 * https://youtu.be/{VideoID}
 * https://www.youtube.com/embed/{VideoID}
 */
export const youtubeVideoIdParser = (url: string) => {
  const parser = new RegExp('[/|v=]([\\w]{11})');

  if (!url.match(parser)) {
    throw new Error(
      'Invalid Url: url should be one of those pattern; www.youtube.com/watch?v={videoId}, www.yotu.be/{videoId}, www.youtube.com/embed/{videoId}, and {videoId} is 11 length character.'
    );
  }

  return url.match(parser)![1];
};
