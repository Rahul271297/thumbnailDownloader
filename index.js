// const youthumb = require('youtube-thumbnails')

// youthumb.all('dlte2Mfg614', (thumbnails) => {
//     console.log(thumbnails);
// });
const getVideoId = require('get-video-id');
const download = require('image-downloader');


const {id} = getVideoId("https://www.youtube.com/watch?v=vIPtATqnxBw&ab_channel=MohitMorani")


const options = {
    url: 'https://i.ytimg.com/vi/' + id + "/sddefault.jpg",
    dest: __dirname + "/" + Date.now() + "thumbnail.jpg",               // will be saved to /path/to/dest/image.jpg
  };
  
  download.image(options)
    .then(({ filename }) => {
      console.log('Saved to', filename); // saved to /path/to/dest/image.jpg
    })
    .catch((err) => console.error(err));

    // download the thumbnail