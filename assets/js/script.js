'use strict';



/**
 * all music information
 */

const musicData = [
   {
    backgroundImage: "./assets/images/yanyuan.jpg",
    posterUrl: "./assets/images/yanyuan.jpg",
    title: "演员remix",
    album: "My Playlist",
    year: 2023,
    artist: "Maxone & Maxone",
    musicPath: "https://cdn.jsdelivr.net/gh/sdfsdfsdf2/music-player@master/assets/music/演员remix.mp3",
  },
  {
    backgroundImage: "./assets/images/poster-1.jpg",
    posterUrl: "./assets/images/poster-1.jpg",
    title: "Happy Moments (Master)",
    album: "No Spirit",
    year: 2022,
    artist: "No Spirit x Tonion",
    musicPath: "https://cdn.jsdelivr.net/gh/sdfsdfsdf2/music-player@master/assets/music/music-1.mp3",
  },
  {
    backgroundImage: "./assets/images/poster-2.jpg",
    posterUrl: "./assets/images/poster-2.jpg",
    title: "We Are Going To Be Ok (Master)",
    album: "No Spirit",
    year: 2022,
    artist: "No Spirit x Jhove",
    musicPath: "https://cdn.jsdelivr.net/gh/sdfsdfsdf2/music-player@master/assets/music/music-2.mp3",
  },
  {
    backgroundImage: "./assets/images/poster-3.jpg",
    posterUrl: "./assets/images/poster-3.jpg",
    title: "Winter Meadow",
    album: "No Spirit",
    year: 2022,
    artist: "No Spirit x  juniorodeo",
    musicPath: "https://cdn.jsdelivr.net/gh/sdfsdfsdf2/music-player@master/assets/music/music-3.mp3",
  },
  {
    backgroundImage: "./assets/images/poster-4.jpg",
    posterUrl: "./assets/images/poster-4.jpg",
    title: "From Where We Started",
    album: "No Spirit",
    year: 2022,
    artist: "No Spirit",
    musicPath: "https://cdn.jsdelivr.net/gh/sdfsdfsdf2/music-player@master/assets/music/music-4.mp3",
  },
  {
    backgroundImage: "./assets/images/poster-5.jpg",
    posterUrl: "./assets/images/poster-5.jpg",
    title: "Where I Found You",
    album: "No Spirit",
    year: 2022,
    artist: "No Spirit",
    musicPath: "https://cdn.jsdelivr.net/gh/sdfsdfsdf2/music-player@master/assets/music/music-5.mp3",
  },
  {
    backgroundImage: "./assets/images/poster-1.jpg",
    posterUrl: "./assets/images/poster-1.jpg",
    title: "左边",
    album: "My Playlist",
    year: 2022,
    artist: "杨丞琳",
    musicPath: "https://cdn.jsdelivr.net/gh/sdfsdfsdf2/music-player@master/assets/music/杨丞琳 - 左边.mp3",
  },
  {
    backgroundImage: "./assets/images/poster-1.jpg",
    posterUrl: "./assets/images/poster-1.jpg",
    title: "雨爱",
    album: "My Playlist",
    year: 2022,
    artist: "杨丞琳",
    musicPath: "https://cdn.jsdelivr.net/gh/sdfsdfsdf2/music-player@master/assets/music/杨丞琳 - 雨爱.mp3",
  },
  {
    backgroundImage: "./assets/images/poster-1.jpg",
    posterUrl: "./assets/images/poster-1.jpg",
    title: "致十年后的我",
    album: "My Playlist",
    year: 2022,
    artist: "杨丞琳",
    musicPath: "https://cdn.jsdelivr.net/gh/sdfsdfsdf2/music-player@master/assets/music/致十年后的我.mp3",
  },
  {
    backgroundImage: "./assets/images/poster-1.jpg",
    posterUrl: "./assets/images/poster-1.jpg",
    title: "飞鸟和蝉",
    album: "My Playlist",
    year: 2022,
    artist: "任然",
    musicPath: "https://cdn.jsdelivr.net/gh/sdfsdfsdf2/music-player@master/assets/music/飞鸟和蝉.mp3",
  },
  {
    backgroundImage: "./assets/images/poster-1.jpg",
    posterUrl: "./assets/images/poster-1.jpg",
    title: "Intro.mp3",
    album: "My Playlist",
    year: 2022,
    artist: "周杰伦",
    musicPath: "https://cdn.jsdelivr.net/gh/sdfsdfsdf2/music-player@master/assets/music/jay/Intro.mp3",
  },

  {
    backgroundImage: "./assets/images/poster-1.jpg",
    posterUrl: "./assets/images/poster-1.jpg",
    title: "Mine Mine.mp3",
    album: "My Playlist",
    year: 2022,
    artist: "周杰伦",
    musicPath: "https://cdn.jsdelivr.net/gh/sdfsdfsdf2/music-player@master/assets/music/jay/Mine Mine.mp3",
  },

  {
    backgroundImage: "./assets/images/poster-1.jpg",
    posterUrl: "./assets/images/poster-1.jpg",
    title: "Mojito.mp3",
    album: "My Playlist",
    year: 2022,
    artist: "周杰伦",
    musicPath: "https://cdn.jsdelivr.net/gh/sdfsdfsdf2/music-player@master/assets/music/jay/Mojito.mp3",
  },

  {
    backgroundImage: "./assets/images/poster-1.jpg",
    posterUrl: "./assets/images/poster-1.jpg",
    title: "一点点.mp3",
    album: "My Playlist",
    year: 2022,
    artist: "周杰伦",
    musicPath: "https://cdn.jsdelivr.net/gh/sdfsdfsdf2/music-player@master/assets/music/jay/一点点.mp3",
  },

  {
    backgroundImage: "./assets/images/poster-1.jpg",
    posterUrl: "./assets/images/poster-1.jpg",
    title: "一路向北 (Live).mp3",
    album: "My Playlist",
    year: 2022,
    artist: "周杰伦",
    musicPath: "https://cdn.jsdelivr.net/gh/sdfsdfsdf2/music-player@master/assets/music/jay/一路向北 (Live).mp3",
  },

  {
    backgroundImage: "./assets/images/poster-1.jpg",
    posterUrl: "./assets/images/poster-1.jpg",
    title: "一路向北.mp3",
    album: "My Playlist",
    year: 2022,
    artist: "周杰伦",
    musicPath: "https://cdn.jsdelivr.net/gh/sdfsdfsdf2/music-player@master/assets/music/jay/一路向北.mp3",
  },

  {
    backgroundImage: "./assets/images/poster-1.jpg",
    posterUrl: "./assets/images/poster-1.jpg",
    title: "七里香 (Live).mp3",
    album: "My Playlist",
    year: 2022,
    artist: "周杰伦",
    musicPath: "https://cdn.jsdelivr.net/gh/sdfsdfsdf2/music-player@master/assets/music/jay/七里香 (Live).mp3",
  },

  {
    backgroundImage: "./assets/images/poster-1.jpg",
    posterUrl: "./assets/images/poster-1.jpg",
    title: "七里香.mp3",
    album: "My Playlist",
    year: 2022,
    artist: "周杰伦",
    musicPath: "https://cdn.jsdelivr.net/gh/sdfsdfsdf2/music-player@master/assets/music/jay/七里香.mp3",
  },

  {
    backgroundImage: "./assets/images/poster-1.jpg",
    posterUrl: "./assets/images/poster-1.jpg",
    title: "三年二班.mp3",
    album: "My Playlist",
    year: 2022,
    artist: "周杰伦",
    musicPath: "https://cdn.jsdelivr.net/gh/sdfsdfsdf2/music-player@master/assets/music/jay/三年二班.mp3",
  },

  {
    backgroundImage: "./assets/images/poster-1.jpg",
    posterUrl: "./assets/images/poster-1.jpg",
    title: "上海一九四三.mp3",
    album: "My Playlist",
    year: 2022,
    artist: "周杰伦",
    musicPath: "https://cdn.jsdelivr.net/gh/sdfsdfsdf2/music-player@master/assets/music/jay/上海一九四三.mp3",
  },

  {
    backgroundImage: "./assets/images/poster-1.jpg",
    posterUrl: "./assets/images/poster-1.jpg",
    title: "不爱我就拉倒.mp3",
    album: "My Playlist",
    year: 2022,
    artist: "周杰伦",
    musicPath: "https://cdn.jsdelivr.net/gh/sdfsdfsdf2/music-player@master/assets/music/jay/不爱我就拉倒.mp3",
  },

  {
    backgroundImage: "./assets/images/poster-1.jpg",
    posterUrl: "./assets/images/poster-1.jpg",
    title: "不能说的秘密.mp3",
    album: "My Playlist",
    year: 2022,
    artist: "周杰伦",
    musicPath: "https://cdn.jsdelivr.net/gh/sdfsdfsdf2/music-player@master/assets/music/jay/不能说的秘密.mp3",
  },

  {
    backgroundImage: "./assets/images/poster-1.jpg",
    posterUrl: "./assets/images/poster-1.jpg",
    title: "不该 (with aMEI).mp3",
    album: "My Playlist",
    year: 2022,
    artist: "周杰伦",
    musicPath: "https://cdn.jsdelivr.net/gh/sdfsdfsdf2/music-player@master/assets/music/jay/不该 (with aMEI).mp3",
  },

  {
    backgroundImage: "./assets/images/poster-1.jpg",
    posterUrl: "./assets/images/poster-1.jpg",
    title: "不该.mp3",
    album: "My Playlist",
    year: 2022,
    artist: "周杰伦",
    musicPath: "https://cdn.jsdelivr.net/gh/sdfsdfsdf2/music-player@master/assets/music/jay/不该\xa0(with\xa0aMEI).mp3",
  },

  {
    backgroundImage: "./assets/images/poster-1.jpg",
    posterUrl: "./assets/images/poster-1.jpg",
    title: "世界末日 (Live).mp3",
    album: "My Playlist",
    year: 2022,
    artist: "周杰伦",
    musicPath: "https://cdn.jsdelivr.net/gh/sdfsdfsdf2/music-player@master/assets/music/jay/世界末日 (Live).mp3",
  },

  {
    backgroundImage: "./assets/images/poster-1.jpg",
    posterUrl: "./assets/images/poster-1.jpg",
    title: "东风破.mp3",
    album: "My Playlist",
    year: 2022,
    artist: "周杰伦",
    musicPath: "https://cdn.jsdelivr.net/gh/sdfsdfsdf2/music-player@master/assets/music/jay/东风破.mp3",
  },

  {
    backgroundImage: "./assets/images/poster-1.jpg",
    posterUrl: "./assets/images/poster-1.jpg",
    title: "以父之名.mp3",
    album: "My Playlist",
    year: 2022,
    artist: "周杰伦",
    musicPath: "https://cdn.jsdelivr.net/gh/sdfsdfsdf2/music-player@master/assets/music/jay/以父之名.mp3",
  },

  {
    backgroundImage: "./assets/images/poster-1.jpg",
    posterUrl: "./assets/images/poster-1.jpg",
    title: "你听得到.mp3",
    album: "My Playlist",
    year: 2022,
    artist: "周杰伦",
    musicPath: "https://cdn.jsdelivr.net/gh/sdfsdfsdf2/music-player@master/assets/music/jay/你听得到.mp3",
  },

  {
    backgroundImage: "./assets/images/poster-1.jpg",
    posterUrl: "./assets/images/poster-1.jpg",
    title: "你好吗.mp3",
    album: "My Playlist",
    year: 2022,
    artist: "周杰伦",
    musicPath: "https://cdn.jsdelivr.net/gh/sdfsdfsdf2/music-player@master/assets/music/jay/你好吗.mp3",
  },

  {
    backgroundImage: "./assets/images/poster-1.jpg",
    posterUrl: "./assets/images/poster-1.jpg",
    title: "倒带 (Live).mp3",
    album: "My Playlist",
    year: 2022,
    artist: "周杰伦",
    musicPath: "https://cdn.jsdelivr.net/gh/sdfsdfsdf2/music-player@master/assets/music/jay/倒带 (Live).mp3",
  },

  {
    backgroundImage: "./assets/images/poster-1.jpg",
    posterUrl: "./assets/images/poster-1.jpg",
    title: "倒影.mp3",
    album: "My Playlist",
    year: 2022,
    artist: "周杰伦",
    musicPath: "https://cdn.jsdelivr.net/gh/sdfsdfsdf2/music-player@master/assets/music/jay/倒影.mp3",
  },

  {
    backgroundImage: "./assets/images/poster-1.jpg",
    posterUrl: "./assets/images/poster-1.jpg",
    title: "借口.mp3",
    album: "My Playlist",
    year: 2022,
    artist: "周杰伦",
    musicPath: "https://cdn.jsdelivr.net/gh/sdfsdfsdf2/music-player@master/assets/music/jay/借口.mp3",
  },

  {
    backgroundImage: "./assets/images/poster-1.jpg",
    posterUrl: "./assets/images/poster-1.jpg",
    title: "兰亭序.mp3",
    album: "My Playlist",
    year: 2022,
    artist: "周杰伦",
    musicPath: "https://cdn.jsdelivr.net/gh/sdfsdfsdf2/music-player@master/assets/music/jay/兰亭序.mp3",
  },

  {
    backgroundImage: "./assets/images/poster-1.jpg",
    posterUrl: "./assets/images/poster-1.jpg",
    title: "分裂.mp3",
    album: "My Playlist",
    year: 2022,
    artist: "周杰伦",
    musicPath: "https://cdn.jsdelivr.net/gh/sdfsdfsdf2/music-player@master/assets/music/jay/分裂.mp3",
  },

  {
    backgroundImage: "./assets/images/poster-1.jpg",
    posterUrl: "./assets/images/poster-1.jpg",
    title: "半兽人.mp3",
    album: "My Playlist",
    year: 2022,
    artist: "周杰伦",
    musicPath: "https://cdn.jsdelivr.net/gh/sdfsdfsdf2/music-player@master/assets/music/jay/半兽人.mp3",
  },

  {
    backgroundImage: "./assets/images/poster-1.jpg",
    posterUrl: "./assets/images/poster-1.jpg",
    title: "印第安老斑鸠.mp3",
    album: "My Playlist",
    year: 2022,
    artist: "周杰伦",
    musicPath: "https://cdn.jsdelivr.net/gh/sdfsdfsdf2/music-player@master/assets/music/jay/印第安老斑鸠.mp3",
  },

  {
    backgroundImage: "./assets/images/poster-1.jpg",
    posterUrl: "./assets/images/poster-1.jpg",
    title: "反方向的钟.mp3",
    album: "My Playlist",
    year: 2022,
    artist: "周杰伦",
    musicPath: "https://cdn.jsdelivr.net/gh/sdfsdfsdf2/music-player@master/assets/music/jay/反方向的钟.mp3",
  },

  {
    backgroundImage: "./assets/images/poster-1.jpg",
    posterUrl: "./assets/images/poster-1.jpg",
    title: "发如雪.mp3",
    album: "My Playlist",
    year: 2022,
    artist: "周杰伦",
    musicPath: "https://cdn.jsdelivr.net/gh/sdfsdfsdf2/music-player@master/assets/music/jay/发如雪.mp3",
  },

  {
    backgroundImage: "./assets/images/poster-1.jpg",
    posterUrl: "./assets/images/poster-1.jpg",
    title: "可爱女人.mp3",
    album: "My Playlist",
    year: 2022,
    artist: "周杰伦",
    musicPath: "https://cdn.jsdelivr.net/gh/sdfsdfsdf2/music-player@master/assets/music/jay/可爱女人.mp3",
  },

  {
    backgroundImage: "./assets/images/poster-1.jpg",
    posterUrl: "./assets/images/poster-1.jpg",
    title: "听妈妈的话.mp3",
    album: "My Playlist",
    year: 2022,
    artist: "周杰伦",
    musicPath: "https://cdn.jsdelivr.net/gh/sdfsdfsdf2/music-player@master/assets/music/jay/听妈妈的话.mp3",
  },

  {
    backgroundImage: "./assets/images/poster-1.jpg",
    posterUrl: "./assets/images/poster-1.jpg",
    title: "听爸爸的话.mp3",
    album: "My Playlist",
    year: 2022,
    artist: "周杰伦",
    musicPath: "https://cdn.jsdelivr.net/gh/sdfsdfsdf2/music-player@master/assets/music/jay/听爸爸的话.mp3",
  },

  {
    backgroundImage: "./assets/images/poster-1.jpg",
    posterUrl: "./assets/images/poster-1.jpg",
    title: "听见下雨的声音.mp3",
    album: "My Playlist",
    year: 2022,
    artist: "周杰伦",
    musicPath: "https://cdn.jsdelivr.net/gh/sdfsdfsdf2/music-player@master/assets/music/jay/听见下雨的声音.mp3",
  },

  {
    backgroundImage: "./assets/images/poster-1.jpg",
    posterUrl: "./assets/images/poster-1.jpg",
    title: "周大侠.mp3",
    album: "My Playlist",
    year: 2022,
    artist: "周杰伦",
    musicPath: "https://cdn.jsdelivr.net/gh/sdfsdfsdf2/music-player@master/assets/music/jay/周大侠.mp3",
  },

  {
    backgroundImage: "./assets/images/poster-1.jpg",
    posterUrl: "./assets/images/poster-1.jpg",
    title: "哪里都是你.mp3",
    album: "My Playlist",
    year: 2022,
    artist: "周杰伦",
    musicPath: "https://cdn.jsdelivr.net/gh/sdfsdfsdf2/music-player@master/assets/music/jay/哪里都是你.mp3",
  },

  {
    backgroundImage: "./assets/images/poster-1.jpg",
    posterUrl: "./assets/images/poster-1.jpg",
    title: "四面楚歌.mp3",
    album: "My Playlist",
    year: 2022,
    artist: "周杰伦",
    musicPath: "https://cdn.jsdelivr.net/gh/sdfsdfsdf2/music-player@master/assets/music/jay/四面楚歌.mp3",
  },

  {
    backgroundImage: "./assets/images/poster-1.jpg",
    posterUrl: "./assets/images/poster-1.jpg",
    title: "回到过去.mp3",
    album: "My Playlist",
    year: 2022,
    artist: "周杰伦",
    musicPath: "https://cdn.jsdelivr.net/gh/sdfsdfsdf2/music-player@master/assets/music/jay/回到过去.mp3",
  },

  {
    backgroundImage: "./assets/images/poster-1.jpg",
    posterUrl: "./assets/images/poster-1.jpg",
    title: "园游会.mp3",
    album: "My Playlist",
    year: 2022,
    artist: "周杰伦",
    musicPath: "https://cdn.jsdelivr.net/gh/sdfsdfsdf2/music-player@master/assets/music/jay/园游会.mp3",
  },

  {
    backgroundImage: "./assets/images/poster-1.jpg",
    posterUrl: "./assets/images/poster-1.jpg",
    title: "外婆.mp3",
    album: "My Playlist",
    year: 2022,
    artist: "周杰伦",
    musicPath: "https://cdn.jsdelivr.net/gh/sdfsdfsdf2/music-player@master/assets/music/jay/外婆.mp3",
  },

  {
    backgroundImage: "./assets/images/poster-1.jpg",
    posterUrl: "./assets/images/poster-1.jpg",
    title: "夜曲 (Live).mp3",
    album: "My Playlist",
    year: 2022,
    artist: "周杰伦",
    musicPath: "https://cdn.jsdelivr.net/gh/sdfsdfsdf2/music-player@master/assets/music/jay/夜曲 (Live).mp3",
  },

  {
    backgroundImage: "./assets/images/poster-1.jpg",
    posterUrl: "./assets/images/poster-1.jpg",
    title: "夜曲.mp3",
    album: "My Playlist",
    year: 2022,
    artist: "周杰伦",
    musicPath: "https://cdn.jsdelivr.net/gh/sdfsdfsdf2/music-player@master/assets/music/jay/夜曲.mp3",
  },

  {
    backgroundImage: "./assets/images/poster-1.jpg",
    posterUrl: "./assets/images/poster-1.jpg",
    title: "夜的第七章.mp3",
    album: "My Playlist",
    year: 2022,
    artist: "周杰伦",
    musicPath: "https://cdn.jsdelivr.net/gh/sdfsdfsdf2/music-player@master/assets/music/jay/夜的第七章.mp3",
  },

  {
    backgroundImage: "./assets/images/poster-1.jpg",
    posterUrl: "./assets/images/poster-1.jpg",
    title: "大笨钟.mp3",
    album: "My Playlist",
    year: 2022,
    artist: "周杰伦",
    musicPath: "https://cdn.jsdelivr.net/gh/sdfsdfsdf2/music-player@master/assets/music/jay/大笨钟.mp3",
  },

  {
    backgroundImage: "./assets/images/poster-1.jpg",
    posterUrl: "./assets/images/poster-1.jpg",
    title: "她的睫毛.mp3",
    album: "My Playlist",
    year: 2022,
    artist: "周杰伦",
    musicPath: "https://cdn.jsdelivr.net/gh/sdfsdfsdf2/music-player@master/assets/music/jay/她的睫毛.mp3",
  },

  {
    backgroundImage: "./assets/images/poster-1.jpg",
    posterUrl: "./assets/images/poster-1.jpg",
    title: "好久不见.mp3",
    album: "My Playlist",
    year: 2022,
    artist: "周杰伦",
    musicPath: "https://cdn.jsdelivr.net/gh/sdfsdfsdf2/music-player@master/assets/music/jay/好久不见.mp3",
  },

  {
    backgroundImage: "./assets/images/poster-1.jpg",
    posterUrl: "./assets/images/poster-1.jpg",
    title: "威廉古堡.mp3",
    album: "My Playlist",
    year: 2022,
    artist: "周杰伦",
    musicPath: "https://cdn.jsdelivr.net/gh/sdfsdfsdf2/music-player@master/assets/music/jay/威廉古堡.mp3",
  },

  {
    backgroundImage: "./assets/images/poster-1.jpg",
    posterUrl: "./assets/images/poster-1.jpg",
    title: "安静.mp3",
    album: "My Playlist",
    year: 2022,
    artist: "周杰伦",
    musicPath: "https://cdn.jsdelivr.net/gh/sdfsdfsdf2/music-player@master/assets/music/jay/安静.mp3",
  },

  {
    backgroundImage: "./assets/images/poster-1.jpg",
    posterUrl: "./assets/images/poster-1.jpg",
    title: "对不起.mp3",
    album: "My Playlist",
    year: 2022,
    artist: "周杰伦",
    musicPath: "https://cdn.jsdelivr.net/gh/sdfsdfsdf2/music-player@master/assets/music/jay/对不起.mp3",
  },

  {
    backgroundImage: "./assets/images/poster-1.jpg",
    posterUrl: "./assets/images/poster-1.jpg",
    title: "将军.mp3",
    album: "My Playlist",
    year: 2022,
    artist: "周杰伦",
    musicPath: "https://cdn.jsdelivr.net/gh/sdfsdfsdf2/music-player@master/assets/music/jay/将军.mp3",
  },

  {
    backgroundImage: "./assets/images/poster-1.jpg",
    posterUrl: "./assets/images/poster-1.jpg",
    title: "屋顶.mp3",
    album: "My Playlist",
    year: 2022,
    artist: "周杰伦",
    musicPath: "https://cdn.jsdelivr.net/gh/sdfsdfsdf2/music-player@master/assets/music/jay/屋顶.mp3",
  },

  {
    backgroundImage: "./assets/images/poster-1.jpg",
    posterUrl: "./assets/images/poster-1.jpg",
    title: "布拉格广场.mp3",
    album: "My Playlist",
    year: 2022,
    artist: "周杰伦",
    musicPath: "https://cdn.jsdelivr.net/gh/sdfsdfsdf2/music-player@master/assets/music/jay/布拉格广场.mp3",
  },

  {
    backgroundImage: "./assets/images/poster-1.jpg",
    posterUrl: "./assets/images/poster-1.jpg",
    title: "彩虹.mp3",
    album: "My Playlist",
    year: 2022,
    artist: "周杰伦",
    musicPath: "https://cdn.jsdelivr.net/gh/sdfsdfsdf2/music-player@master/assets/music/jay/彩虹.mp3",
  },

  {
    backgroundImage: "./assets/images/poster-1.jpg",
    posterUrl: "./assets/images/poster-1.jpg",
    title: "心雨.mp3",
    album: "My Playlist",
    year: 2022,
    artist: "周杰伦",
    musicPath: "https://cdn.jsdelivr.net/gh/sdfsdfsdf2/music-player@master/assets/music/jay/心雨.mp3",
  },

  {
    backgroundImage: "./assets/images/poster-1.jpg",
    posterUrl: "./assets/images/poster-1.jpg",
    title: "我不配.mp3",
    album: "My Playlist",
    year: 2022,
    artist: "周杰伦",
    musicPath: "https://cdn.jsdelivr.net/gh/sdfsdfsdf2/music-player@master/assets/music/jay/我不配.mp3",
  },

  {
    backgroundImage: "./assets/images/poster-1.jpg",
    posterUrl: "./assets/images/poster-1.jpg",
    title: "我是如此相信.mp3",
    album: "My Playlist",
    year: 2022,
    artist: "周杰伦",
    musicPath: "https://cdn.jsdelivr.net/gh/sdfsdfsdf2/music-player@master/assets/music/jay/我是如此相信.mp3",
  },

  {
    backgroundImage: "./assets/images/poster-1.jpg",
    posterUrl: "./assets/images/poster-1.jpg",
    title: "我落泪情绪零碎.mp3",
    album: "My Playlist",
    year: 2022,
    artist: "周杰伦",
    musicPath: "https://cdn.jsdelivr.net/gh/sdfsdfsdf2/music-player@master/assets/music/jay/我落泪情绪零碎.mp3",
  },

  {
    backgroundImage: "./assets/images/poster-1.jpg",
    posterUrl: "./assets/images/poster-1.jpg",
    title: "手写的从前.mp3",
    album: "My Playlist",
    year: 2022,
    artist: "周杰伦",
    musicPath: "https://cdn.jsdelivr.net/gh/sdfsdfsdf2/music-player@master/assets/music/jay/手写的从前.mp3",
  },

  {
    backgroundImage: "./assets/images/poster-1.jpg",
    posterUrl: "./assets/images/poster-1.jpg",
    title: "搁浅 (Live).mp3",
    album: "My Playlist",
    year: 2022,
    artist: "周杰伦",
    musicPath: "https://cdn.jsdelivr.net/gh/sdfsdfsdf2/music-player@master/assets/music/jay/搁浅 (Live).mp3",
  },

  {
    backgroundImage: "./assets/images/poster-1.jpg",
    posterUrl: "./assets/images/poster-1.jpg",
    title: "搁浅.mp3",
    album: "My Playlist",
    year: 2022,
    artist: "周杰伦",
    musicPath: "https://cdn.jsdelivr.net/gh/sdfsdfsdf2/music-player@master/assets/music/jay/搁浅.mp3",
  },

  {
    backgroundImage: "./assets/images/poster-1.jpg",
    posterUrl: "./assets/images/poster-1.jpg",
    title: "断了的弦.mp3",
    album: "My Playlist",
    year: 2022,
    artist: "周杰伦",
    musicPath: "https://cdn.jsdelivr.net/gh/sdfsdfsdf2/music-player@master/assets/music/jay/断了的弦.mp3",
  },

  {
    backgroundImage: "./assets/images/poster-1.jpg",
    posterUrl: "./assets/images/poster-1.jpg",
    title: "明明就 (Live).mp3",
    album: "My Playlist",
    year: 2022,
    artist: "周杰伦",
    musicPath: "https://cdn.jsdelivr.net/gh/sdfsdfsdf2/music-player@master/assets/music/jay/明明就 (Live).mp3",
  },

  {
    backgroundImage: "./assets/images/poster-1.jpg",
    posterUrl: "./assets/images/poster-1.jpg",
    title: "明明就.mp3",
    album: "My Playlist",
    year: 2022,
    artist: "周杰伦",
    musicPath: "https://cdn.jsdelivr.net/gh/sdfsdfsdf2/music-player@master/assets/music/jay/明明就.mp3",
  },

  {
    backgroundImage: "./assets/images/poster-1.jpg",
    posterUrl: "./assets/images/poster-1.jpg",
    title: "星晴.mp3",
    album: "My Playlist",
    year: 2022,
    artist: "周杰伦",
    musicPath: "https://cdn.jsdelivr.net/gh/sdfsdfsdf2/music-player@master/assets/music/jay/星晴.mp3",
  },

  {
    backgroundImage: "./assets/images/poster-1.jpg",
    posterUrl: "./assets/images/poster-1.jpg",
    title: "晴天 (Live).mp3",
    album: "My Playlist",
    year: 2022,
    artist: "周杰伦",
    musicPath: "https://cdn.jsdelivr.net/gh/sdfsdfsdf2/music-player@master/assets/music/jay/晴天 (Live).mp3",
  },

  {
    backgroundImage: "./assets/images/poster-1.jpg",
    posterUrl: "./assets/images/poster-1.jpg",
    title: "晴天.mp3",
    album: "My Playlist",
    year: 2022,
    artist: "周杰伦",
    musicPath: "https://cdn.jsdelivr.net/gh/sdfsdfsdf2/music-player@master/assets/music/jay/晴天.mp3",
  },

  {
    backgroundImage: "./assets/images/poster-1.jpg",
    posterUrl: "./assets/images/poster-1.jpg",
    title: "暗号 (Live).mp3",
    album: "My Playlist",
    year: 2022,
    artist: "周杰伦",
    musicPath: "https://cdn.jsdelivr.net/gh/sdfsdfsdf2/music-player@master/assets/music/jay/暗号 (Live).mp3",
  },

  {
    backgroundImage: "./assets/images/poster-1.jpg",
    posterUrl: "./assets/images/poster-1.jpg",
    title: "暗号.mp3",
    album: "My Playlist",
    year: 2022,
    artist: "周杰伦",
    musicPath: "https://cdn.jsdelivr.net/gh/sdfsdfsdf2/music-player@master/assets/music/jay/暗号.mp3",
  },

  {
    backgroundImage: "./assets/images/poster-1.jpg",
    posterUrl: "./assets/images/poster-1.jpg",
    title: "最后的战役.mp3",
    album: "My Playlist",
    year: 2022,
    artist: "周杰伦",
    musicPath: "https://cdn.jsdelivr.net/gh/sdfsdfsdf2/music-player@master/assets/music/jay/最后的战役.mp3",
  },

  {
    backgroundImage: "./assets/images/poster-1.jpg",
    posterUrl: "./assets/images/poster-1.jpg",
    title: "最长的电影 (Live).mp3",
    album: "My Playlist",
    year: 2022,
    artist: "周杰伦",
    musicPath: "https://cdn.jsdelivr.net/gh/sdfsdfsdf2/music-player@master/assets/music/jay/最长的电影 (Live).mp3",
  },

  {
    backgroundImage: "./assets/images/poster-1.jpg",
    posterUrl: "./assets/images/poster-1.jpg",
    title: "最长的电影.mp3",
    album: "My Playlist",
    year: 2022,
    artist: "周杰伦",
    musicPath: "https://cdn.jsdelivr.net/gh/sdfsdfsdf2/music-player@master/assets/music/jay/最长的电影.mp3",
  },

  {
    backgroundImage: "./assets/images/poster-1.jpg",
    posterUrl: "./assets/images/poster-1.jpg",
    title: "本草纲目.mp3",
    album: "My Playlist",
    year: 2022,
    artist: "周杰伦",
    musicPath: "https://cdn.jsdelivr.net/gh/sdfsdfsdf2/music-player@master/assets/music/jay/本草纲目.mp3",
  },

  {
    backgroundImage: "./assets/images/poster-1.jpg",
    posterUrl: "./assets/images/poster-1.jpg",
    title: "枫.mp3",
    album: "My Playlist",
    year: 2022,
    artist: "周杰伦",
    musicPath: "https://cdn.jsdelivr.net/gh/sdfsdfsdf2/music-player@master/assets/music/jay/枫.mp3",
  },

  {
    backgroundImage: "./assets/images/poster-1.jpg",
    posterUrl: "./assets/images/poster-1.jpg",
    title: "止战之殇.mp3",
    album: "My Playlist",
    year: 2022,
    artist: "周杰伦",
    musicPath: "https://cdn.jsdelivr.net/gh/sdfsdfsdf2/music-player@master/assets/music/jay/止战之殇.mp3",
  },

  {
    backgroundImage: "./assets/images/poster-1.jpg",
    posterUrl: "./assets/images/poster-1.jpg",
    title: "浪漫手机.mp3",
    album: "My Playlist",
    year: 2022,
    artist: "周杰伦",
    musicPath: "https://cdn.jsdelivr.net/gh/sdfsdfsdf2/music-player@master/assets/music/jay/浪漫手机.mp3",
  },

  {
    backgroundImage: "./assets/images/poster-1.jpg",
    posterUrl: "./assets/images/poster-1.jpg",
    title: "烟花易冷.mp3",
    album: "My Playlist",
    year: 2022,
    artist: "周杰伦",
    musicPath: "https://cdn.jsdelivr.net/gh/sdfsdfsdf2/music-player@master/assets/music/jay/烟花易冷.mp3",
  },

  {
    backgroundImage: "./assets/images/poster-1.jpg",
    posterUrl: "./assets/images/poster-1.jpg",
    title: "爱在西元前.mp3",
    album: "My Playlist",
    year: 2022,
    artist: "周杰伦",
    musicPath: "https://cdn.jsdelivr.net/gh/sdfsdfsdf2/music-player@master/assets/music/jay/爱在西元前.mp3",
  },

  {
    backgroundImage: "./assets/images/poster-1.jpg",
    posterUrl: "./assets/images/poster-1.jpg",
    title: "爱情废柴.mp3",
    album: "My Playlist",
    year: 2022,
    artist: "周杰伦",
    musicPath: "https://cdn.jsdelivr.net/gh/sdfsdfsdf2/music-player@master/assets/music/jay/爱情废柴.mp3",
  },

  {
    backgroundImage: "./assets/images/poster-1.jpg",
    posterUrl: "./assets/images/poster-1.jpg",
    title: "爱情悬崖.mp3",
    album: "My Playlist",
    year: 2022,
    artist: "周杰伦",
    musicPath: "https://cdn.jsdelivr.net/gh/sdfsdfsdf2/music-player@master/assets/music/jay/爱情悬崖.mp3",
  },

  {
    backgroundImage: "./assets/images/poster-1.jpg",
    posterUrl: "./assets/images/poster-1.jpg",
    title: "爱的飞行日记.mp3",
    album: "My Playlist",
    year: 2022,
    artist: "周杰伦",
    musicPath: "https://cdn.jsdelivr.net/gh/sdfsdfsdf2/music-player@master/assets/music/jay/爱的飞行日记.mp3",
  },

  {
    backgroundImage: "./assets/images/poster-1.jpg",
    posterUrl: "./assets/images/poster-1.jpg",
    title: "爷爷泡的茶.mp3",
    album: "My Playlist",
    year: 2022,
    artist: "周杰伦",
    musicPath: "https://cdn.jsdelivr.net/gh/sdfsdfsdf2/music-player@master/assets/music/jay/爷爷泡的茶.mp3",
  },

  {
    backgroundImage: "./assets/images/poster-1.jpg",
    posterUrl: "./assets/images/poster-1.jpg",
    title: "牛仔很忙.mp3",
    album: "My Playlist",
    year: 2022,
    artist: "周杰伦",
    musicPath: "https://cdn.jsdelivr.net/gh/sdfsdfsdf2/music-player@master/assets/music/jay/牛仔很忙.mp3",
  },

  {
    backgroundImage: "./assets/images/poster-1.jpg",
    posterUrl: "./assets/images/poster-1.jpg",
    title: "珊瑚海.mp3",
    album: "My Playlist",
    year: 2022,
    artist: "周杰伦",
    musicPath: "https://cdn.jsdelivr.net/gh/sdfsdfsdf2/music-player@master/assets/music/jay/珊瑚海.mp3",
  },

  {
    backgroundImage: "./assets/images/poster-1.jpg",
    posterUrl: "./assets/images/poster-1.jpg",
    title: "甜甜的.mp3",
    album: "My Playlist",
    year: 2022,
    artist: "周杰伦",
    musicPath: "https://cdn.jsdelivr.net/gh/sdfsdfsdf2/music-player@master/assets/music/jay/甜甜的.mp3",
  },

  {
    backgroundImage: "./assets/images/poster-1.jpg",
    posterUrl: "./assets/images/poster-1.jpg",
    title: "画沙.mp3",
    album: "My Playlist",
    year: 2022,
    artist: "周杰伦",
    musicPath: "https://cdn.jsdelivr.net/gh/sdfsdfsdf2/music-player@master/assets/music/jay/画沙.mp3",
  },

  {
    backgroundImage: "./assets/images/poster-1.jpg",
    posterUrl: "./assets/images/poster-1.jpg",
    title: "白色风车.mp3",
    album: "My Playlist",
    year: 2022,
    artist: "周杰伦",
    musicPath: "https://cdn.jsdelivr.net/gh/sdfsdfsdf2/music-player@master/assets/music/jay/白色风车.mp3",
  },

  {
    backgroundImage: "./assets/images/poster-1.jpg",
    posterUrl: "./assets/images/poster-1.jpg",
    title: "稻香 (Live).mp3",
    album: "My Playlist",
    year: 2022,
    artist: "周杰伦",
    musicPath: "https://cdn.jsdelivr.net/gh/sdfsdfsdf2/music-player@master/assets/music/jay/稻香 (Live).mp3",
  },

  {
    backgroundImage: "./assets/images/poster-1.jpg",
    posterUrl: "./assets/images/poster-1.jpg",
    title: "稻香.mp3",
    album: "My Playlist",
    year: 2022,
    artist: "周杰伦",
    musicPath: "https://cdn.jsdelivr.net/gh/sdfsdfsdf2/music-player@master/assets/music/jay/稻香.mp3",
  },

  {
    backgroundImage: "./assets/images/poster-1.jpg",
    posterUrl: "./assets/images/poster-1.jpg",
    title: "等你下课 (with 杨瑞代).mp3",
    album: "My Playlist",
    year: 2022,
    artist: "周杰伦",
    musicPath: "https://cdn.jsdelivr.net/gh/sdfsdfsdf2/music-player@master/assets/music/jay/等你下课 (with 杨瑞代).mp3",
  },

  {
    backgroundImage: "./assets/images/poster-1.jpg",
    posterUrl: "./assets/images/poster-1.jpg",
    title: "简单爱.mp3",
    album: "My Playlist",
    year: 2022,
    artist: "周杰伦",
    musicPath: "https://cdn.jsdelivr.net/gh/sdfsdfsdf2/music-player@master/assets/music/jay/简单爱.mp3",
  },

  {
    backgroundImage: "./assets/images/poster-1.jpg",
    posterUrl: "./assets/images/poster-1.jpg",
    title: "算什么男人.mp3",
    album: "My Playlist",
    year: 2022,
    artist: "周杰伦",
    musicPath: "https://cdn.jsdelivr.net/gh/sdfsdfsdf2/music-player@master/assets/music/jay/算什么男人.mp3",
  },

  {
    backgroundImage: "./assets/images/poster-1.jpg",
    posterUrl: "./assets/images/poster-1.jpg",
    title: "米兰的小铁匠.mp3",
    album: "My Playlist",
    year: 2022,
    artist: "周杰伦",
    musicPath: "https://cdn.jsdelivr.net/gh/sdfsdfsdf2/music-player@master/assets/music/jay/米兰的小铁匠.mp3",
  },

  {
    backgroundImage: "./assets/images/poster-1.jpg",
    posterUrl: "./assets/images/poster-1.jpg",
    title: "粉色海洋.mp3",
    album: "My Playlist",
    year: 2022,
    artist: "周杰伦",
    musicPath: "https://cdn.jsdelivr.net/gh/sdfsdfsdf2/music-player@master/assets/music/jay/粉色海洋.mp3",
  },

  {
    backgroundImage: "./assets/images/poster-1.jpg",
    posterUrl: "./assets/images/poster-1.jpg",
    title: "红尘客栈.mp3",
    album: "My Playlist",
    year: 2022,
    artist: "周杰伦",
    musicPath: "https://cdn.jsdelivr.net/gh/sdfsdfsdf2/music-player@master/assets/music/jay/红尘客栈.mp3",
  },

  {
    backgroundImage: "./assets/images/poster-1.jpg",
    posterUrl: "./assets/images/poster-1.jpg",
    title: "红颜如霜.mp3",
    album: "My Playlist",
    year: 2022,
    artist: "周杰伦",
    musicPath: "https://cdn.jsdelivr.net/gh/sdfsdfsdf2/music-player@master/assets/music/jay/红颜如霜.mp3",
  },

  {
    backgroundImage: "./assets/images/poster-1.jpg",
    posterUrl: "./assets/images/poster-1.jpg",
    title: "给我一首歌的时间.mp3",
    album: "My Playlist",
    year: 2022,
    artist: "周杰伦",
    musicPath: "https://cdn.jsdelivr.net/gh/sdfsdfsdf2/music-player@master/assets/music/jay/给我一首歌的时间.mp3",
  },

  {
    backgroundImage: "./assets/images/poster-1.jpg",
    posterUrl: "./assets/images/poster-1.jpg",
    title: "美人鱼.mp3",
    album: "My Playlist",
    year: 2022,
    artist: "周杰伦",
    musicPath: "https://cdn.jsdelivr.net/gh/sdfsdfsdf2/music-player@master/assets/music/jay/美人鱼.mp3",
  },

  {
    backgroundImage: "./assets/images/poster-1.jpg",
    posterUrl: "./assets/images/poster-1.jpg",
    title: "花海.mp3",
    album: "My Playlist",
    year: 2022,
    artist: "周杰伦",
    musicPath: "https://cdn.jsdelivr.net/gh/sdfsdfsdf2/music-player@master/assets/music/jay/花海.mp3",
  },

  {
    backgroundImage: "./assets/images/poster-1.jpg",
    posterUrl: "./assets/images/poster-1.jpg",
    title: "菊花台.mp3",
    album: "My Playlist",
    year: 2022,
    artist: "周杰伦",
    musicPath: "https://cdn.jsdelivr.net/gh/sdfsdfsdf2/music-player@master/assets/music/jay/菊花台.mp3",
  },

  {
    backgroundImage: "./assets/images/poster-1.jpg",
    posterUrl: "./assets/images/poster-1.jpg",
    title: "蒲公英的约定 (Live).mp3",
    album: "My Playlist",
    year: 2022,
    artist: "周杰伦",
    musicPath: "https://cdn.jsdelivr.net/gh/sdfsdfsdf2/music-player@master/assets/music/jay/蒲公英的约定 (Live).mp3",
  },

  {
    backgroundImage: "./assets/images/poster-1.jpg",
    posterUrl: "./assets/images/poster-1.jpg",
    title: "蒲公英的约定.mp3",
    album: "My Playlist",
    year: 2022,
    artist: "周杰伦",
    musicPath: "https://cdn.jsdelivr.net/gh/sdfsdfsdf2/music-player@master/assets/music/jay/蒲公英的约定.mp3",
  },

  {
    backgroundImage: "./assets/images/poster-1.jpg",
    posterUrl: "./assets/images/poster-1.jpg",
    title: "蜗牛 (Live).mp3",
    album: "My Playlist",
    year: 2022,
    artist: "周杰伦",
    musicPath: "https://cdn.jsdelivr.net/gh/sdfsdfsdf2/music-player@master/assets/music/jay/蜗牛 (Live).mp3",
  },

  {
    backgroundImage: "./assets/images/poster-1.jpg",
    posterUrl: "./assets/images/poster-1.jpg",
    title: "说了再见.mp3",
    album: "My Playlist",
    year: 2022,
    artist: "周杰伦",
    musicPath: "https://cdn.jsdelivr.net/gh/sdfsdfsdf2/music-player@master/assets/music/jay/说了再见.mp3",
  },

  {
    backgroundImage: "./assets/images/poster-1.jpg",
    posterUrl: "./assets/images/poster-1.jpg",
    title: "说好不哭 (with 五月天阿信).mp3",
    album: "My Playlist",
    year: 2022,
    artist: "周杰伦",
    musicPath: "https://cdn.jsdelivr.net/gh/sdfsdfsdf2/music-player@master/assets/music/jay/说好不哭 (with 五月天阿信).mp3",
  },

  {
    backgroundImage: "./assets/images/poster-1.jpg",
    posterUrl: "./assets/images/poster-1.jpg",
    title: "说好的幸福呢.mp3",
    album: "My Playlist",
    year: 2022,
    artist: "周杰伦",
    musicPath: "https://cdn.jsdelivr.net/gh/sdfsdfsdf2/music-player@master/assets/music/jay/说好的幸福呢.mp3",
  },

  {
    backgroundImage: "./assets/images/poster-1.jpg",
    posterUrl: "./assets/images/poster-1.jpg",
    title: "超人不会飞.mp3",
    album: "My Playlist",
    year: 2022,
    artist: "周杰伦",
    musicPath: "https://cdn.jsdelivr.net/gh/sdfsdfsdf2/music-player@master/assets/music/jay/超人不会飞.mp3",
  },

  {
    backgroundImage: "./assets/images/poster-1.jpg",
    posterUrl: "./assets/images/poster-1.jpg",
    title: "轨迹.mp3",
    album: "My Playlist",
    year: 2022,
    artist: "周杰伦",
    musicPath: "https://cdn.jsdelivr.net/gh/sdfsdfsdf2/music-player@master/assets/music/jay/轨迹.mp3",
  },

  {
    backgroundImage: "./assets/images/poster-1.jpg",
    posterUrl: "./assets/images/poster-1.jpg",
    title: "还在流浪.mp3",
    album: "My Playlist",
    year: 2022,
    artist: "周杰伦",
    musicPath: "https://cdn.jsdelivr.net/gh/sdfsdfsdf2/music-player@master/assets/music/jay/还在流浪.mp3",
  },

  {
    backgroundImage: "./assets/images/poster-1.jpg",
    posterUrl: "./assets/images/poster-1.jpg",
    title: "迷迭香.mp3",
    album: "My Playlist",
    year: 2022,
    artist: "周杰伦",
    musicPath: "https://cdn.jsdelivr.net/gh/sdfsdfsdf2/music-player@master/assets/music/jay/迷迭香.mp3",
  },

  {
    backgroundImage: "./assets/images/poster-1.jpg",
    posterUrl: "./assets/images/poster-1.jpg",
    title: "退后.mp3",
    album: "My Playlist",
    year: 2022,
    artist: "周杰伦",
    musicPath: "https://cdn.jsdelivr.net/gh/sdfsdfsdf2/music-player@master/assets/music/jay/退后.mp3",
  },

  {
    backgroundImage: "./assets/images/poster-1.jpg",
    posterUrl: "./assets/images/poster-1.jpg",
    title: "错过的烟火.mp3",
    album: "My Playlist",
    year: 2022,
    artist: "周杰伦",
    musicPath: "https://cdn.jsdelivr.net/gh/sdfsdfsdf2/music-player@master/assets/music/jay/错过的烟火.mp3",
  },

  {
    backgroundImage: "./assets/images/poster-1.jpg",
    posterUrl: "./assets/images/poster-1.jpg",
    title: "阳光宅男.mp3",
    album: "My Playlist",
    year: 2022,
    artist: "周杰伦",
    musicPath: "https://cdn.jsdelivr.net/gh/sdfsdfsdf2/music-player@master/assets/music/jay/阳光宅男.mp3",
  },

  {
    backgroundImage: "./assets/images/poster-1.jpg",
    posterUrl: "./assets/images/poster-1.jpg",
    title: "雨下一整晚.mp3",
    album: "My Playlist",
    year: 2022,
    artist: "周杰伦",
    musicPath: "https://cdn.jsdelivr.net/gh/sdfsdfsdf2/music-player@master/assets/music/jay/雨下一整晚.mp3",
  },

  {
    backgroundImage: "./assets/images/poster-1.jpg",
    posterUrl: "./assets/images/poster-1.jpg",
    title: "青花瓷 (Live).mp3",
    album: "My Playlist",
    year: 2022,
    artist: "周杰伦",
    musicPath: "https://cdn.jsdelivr.net/gh/sdfsdfsdf2/music-player@master/assets/music/jay/青花瓷 (Live).mp3",
  },

  {
    backgroundImage: "./assets/images/poster-1.jpg",
    posterUrl: "./assets/images/poster-1.jpg",
    title: "青花瓷.mp3",
    album: "My Playlist",
    year: 2022,
    artist: "周杰伦",
    musicPath: "https://cdn.jsdelivr.net/gh/sdfsdfsdf2/music-player@master/assets/music/jay/青花瓷.mp3",
  },

  {
    backgroundImage: "./assets/images/poster-1.jpg",
    posterUrl: "./assets/images/poster-1.jpg",
    title: "飘移.mp3",
    album: "My Playlist",
    year: 2022,
    artist: "周杰伦",
    musicPath: "https://cdn.jsdelivr.net/gh/sdfsdfsdf2/music-player@master/assets/music/jay/飘移.mp3",
  },

  {
    backgroundImage: "./assets/images/poster-1.jpg",
    posterUrl: "./assets/images/poster-1.jpg",
    title: "黑色幽默.mp3",
    album: "My Playlist",
    year: 2022,
    artist: "周杰伦",
    musicPath: "https://cdn.jsdelivr.net/gh/sdfsdfsdf2/music-player@master/assets/music/jay/黑色幽默.mp3",
  },

  {
    backgroundImage: "./assets/images/poster-1.jpg",
    posterUrl: "./assets/images/poster-1.jpg",
    title: "黑色毛衣.mp3",
    album: "My Playlist",
    year: 2022,
    artist: "周杰伦",
    musicPath: "https://cdn.jsdelivr.net/gh/sdfsdfsdf2/music-player@master/assets/music/jay/黑色毛衣.mp3",
  },

  {
    backgroundImage: "./assets/images/poster-1.jpg",
    posterUrl: "./assets/images/poster-1.jpg",
    title: "默 (Live).mp3",
    album: "My Playlist",
    year: 2022,
    artist: "周杰伦",
    musicPath: "https://cdn.jsdelivr.net/gh/sdfsdfsdf2/music-player@master/assets/music/jay/默 (Live).mp3",
  },

  {
    backgroundImage: "./assets/images/poster-1.jpg",
    posterUrl: "./assets/images/poster-1.jpg",
    title: "龙卷风.mp3",
    album: "My Playlist",
    year: 2022,
    artist: "周杰伦",
    musicPath: "https://cdn.jsdelivr.net/gh/sdfsdfsdf2/music-player@master/assets/music/jay/龙卷风.mp3",
  },

  {
    backgroundImage: "./assets/images/poster-1.jpg",
    posterUrl: "./assets/images/poster-1.jpg",
    title: "龙拳.mp3",
    album: "My Playlist",
    year: 2022,
    artist: "周杰伦",
    musicPath: "https://cdn.jsdelivr.net/gh/sdfsdfsdf2/music-player@master/assets/music/jay/龙拳.mp3",
  },
];



/**
 * add eventListnere on all elements that are passed
 */

const addEventOnElements = function (elements, eventType, callback) {
  for (let i = 0, len = elements.length; i < len; i++) {
    elements[i].addEventListener(eventType, callback);
  }
}



/**
 * PLAYLIST
 * 
 * add all music in playlist, from 'musicData'
 */

const playlist = document.querySelector("[data-music-list]");

for (let i = 0, len = musicData.length; i < len; i++) {
  playlist.innerHTML += `
  <li>
    <button class="music-item ${i === 0 ? "playing" : ""}" data-playlist-toggler data-playlist-item="${i}">
      <img src="${musicData[i].posterUrl}" width="800" height="800" alt="${musicData[i].title} Album Poster"
        class="img-cover">

      <div class="item-icon">
        <span class="material-symbols-rounded">equalizer</span>
      </div>
    </button>
  </li>
  `;
}



/**
 * PLAYLIST MODAL SIDEBAR TOGGLE
 * 
 * show 'playlist' modal sidebar when click on playlist button in top app bar
 * and hide when click on overlay or any playlist-item
 */

const playlistSideModal = document.querySelector("[data-playlist]");
const playlistTogglers = document.querySelectorAll("[data-playlist-toggler]");
const overlay = document.querySelector("[data-overlay]");

const togglePlaylist = function () {
  playlistSideModal.classList.toggle("active");
  overlay.classList.toggle("active");
  document.body.classList.toggle("modalActive");
}

addEventOnElements(playlistTogglers, "click", togglePlaylist);



/**
 * PLAYLIST ITEM
 * 
 * remove active state from last time played music
 * and add active state in clicked music
 */

const playlistItems = document.querySelectorAll("[data-playlist-item]");

let currentMusic = 0;
let lastPlayedMusic = 0;

const changePlaylistItem = function () {
  playlistItems[lastPlayedMusic].classList.remove("playing");
  playlistItems[currentMusic].classList.add("playing");
}

addEventOnElements(playlistItems, "click", function () {
  lastPlayedMusic = currentMusic;
  currentMusic = Number(this.dataset.playlistItem);
  changePlaylistItem();
});



/**
 * PLAYER
 * 
 * change all visual information on player, based on current music
 */

const playerBanner = document.querySelector("[data-player-banner]");
const playerTitle = document.querySelector("[data-title]");
const playerAlbum = document.querySelector("[data-album]");
const playerYear = document.querySelector("[data-year]");
const playerArtist = document.querySelector("[data-artist]");

const audioSource = new Audio(musicData[currentMusic].musicPath);

const changePlayerInfo = function () {
  playerBanner.src = musicData[currentMusic].posterUrl;
  playerBanner.setAttribute("alt", `${musicData[currentMusic].title} Album Poster`);
  document.body.style.backgroundImage = `url(${musicData[currentMusic].backgroundImage})`;
  playerTitle.textContent = musicData[currentMusic].title;
  playerAlbum.textContent = musicData[currentMusic].album;
  playerYear.textContent = musicData[currentMusic].year;
  playerArtist.textContent = musicData[currentMusic].artist;

  audioSource.src = musicData[currentMusic].musicPath;

  audioSource.addEventListener("loadeddata", updateDuration);
  playMusic();
}

addEventOnElements(playlistItems, "click", changePlayerInfo);

/** update player duration */
const playerDuration = document.querySelector("[data-duration]");
const playerSeekRange = document.querySelector("[data-seek]");

/** pass seconds and get timcode formate */
const getTimecode = function (duration) {
  const minutes = Math.floor(duration / 60);
  const seconds = Math.ceil(duration - (minutes * 60));
  const timecode = `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  return timecode;
}

const updateDuration = function () {
  playerSeekRange.max = Math.ceil(audioSource.duration);
  playerDuration.textContent = getTimecode(Number(playerSeekRange.max));
}

audioSource.addEventListener("loadeddata", updateDuration);



/**
 * PLAY MUSIC
 * 
 * play and pause music when click on play button
 */

const playBtn = document.querySelector("[data-play-btn]");

let playInterval;

const playMusic = function () {
  if (audioSource.paused) {
    audioSource.play();
    playBtn.classList.add("active");
    playInterval = setInterval(updateRunningTime, 500);
  } else {
    audioSource.pause();
    playBtn.classList.remove("active");
    clearInterval(playInterval);
  }
}

playBtn.addEventListener("click", playMusic);


/** update running time while playing music */

const playerRunningTime = document.querySelector("[data-running-time");

const updateRunningTime = function () {
  playerSeekRange.value = audioSource.currentTime;
  playerRunningTime.textContent = getTimecode(audioSource.currentTime);

  updateRangeFill();
  isMusicEnd();
}



/**
 * RANGE FILL WIDTH
 * 
 * change 'rangeFill' width, while changing range value
 */

const ranges = document.querySelectorAll("[data-range]");
const rangeFill = document.querySelector("[data-range-fill]");

const updateRangeFill = function () {
  let element = this || ranges[0];

  const rangeValue = (element.value / element.max) * 100;
  element.nextElementSibling.style.width = `${rangeValue}%`;
}

addEventOnElements(ranges, "input", updateRangeFill);



/**
 * SEEK MUSIC
 * 
 * seek music while changing player seek range
 */

const seek = function () {
  audioSource.currentTime = playerSeekRange.value;
  playerRunningTime.textContent = getTimecode(playerSeekRange.value);
}

playerSeekRange.addEventListener("input", seek);



/**
 * END MUSIC
 */

const isMusicEnd = function () {
  if (audioSource.ended) {
    playBtn.classList.remove("active");
    audioSource.currentTime = 0;
    playerSeekRange.value = audioSource.currentTime;
    playerRunningTime.textContent = getTimecode(audioSource.currentTime);
    updateRangeFill();
    skipNext();
  }
}



/**
 * SKIP TO NEXT MUSIC
 */

const playerSkipNextBtn = document.querySelector("[data-skip-next]");

const skipNext = function () {
  lastPlayedMusic = currentMusic;

  if (isShuffled) {
    shuffleMusic();
  } else {
    currentMusic >= musicData.length - 1 ? currentMusic = 0 : currentMusic++;
  }

  changePlayerInfo();
  changePlaylistItem();
}

playerSkipNextBtn.addEventListener("click", skipNext);



/**
 * SKIP TO PREVIOUS MUSIC
 */

const playerSkipPrevBtn = document.querySelector("[data-skip-prev]");

const skipPrev = function () {
  lastPlayedMusic = currentMusic;

  if (isShuffled) {
    shuffleMusic();
  } else {
    currentMusic <= 0 ? currentMusic = musicData.length - 1 : currentMusic--;
  }

  changePlayerInfo();
  changePlaylistItem();
}

playerSkipPrevBtn.addEventListener("click", skipPrev);



/**
 * SHUFFLE MUSIC
 */

/** get random number for shuffle */
const getRandomMusic = () => Math.floor(Math.random() * musicData.length);

const shuffleMusic = () => currentMusic = getRandomMusic();

const playerShuffleBtn = document.querySelector("[data-shuffle]");
let isShuffled = false;

const shuffle = function () {
  playerShuffleBtn.classList.toggle("active");

  isShuffled = isShuffled ? false : true;
}

playerShuffleBtn.addEventListener("click", shuffle);



/**
 * REPEAT MUSIC
 */

const playerRepeatBtn = document.querySelector("[data-repeat]");

const repeat = function () {
  if (!audioSource.loop) {
    audioSource.loop = true;
    this.classList.add("active");
  } else {
    audioSource.loop = false;
    this.classList.remove("active");
  }
}

playerRepeatBtn.addEventListener("click", repeat);



/**
 * MUSIC VOLUME
 * 
 * increase or decrease music volume when change the volume range
 */

const playerVolumeRange = document.querySelector("[data-volume]");
const playerVolumeBtn = document.querySelector("[data-volume-btn]");

const changeVolume = function () {
  audioSource.volume = playerVolumeRange.value;
  audioSource.muted = false;

  if (audioSource.volume <= 0.1) {
    playerVolumeBtn.children[0].textContent = "volume_mute";
  } else if (audioSource.volume <= 0.5) {
    playerVolumeBtn.children[0].textContent = "volume_down";
  } else {
    playerVolumeBtn.children[0].textContent = "volume_up";
  }
}

playerVolumeRange.addEventListener("input", changeVolume);


/**
 * MUTE MUSIC
 */

const muteVolume = function () {
  if (!audioSource.muted) {
    audioSource.muted = true;
    playerVolumeBtn.children[0].textContent = "volume_off";
  } else {
    changeVolume();
  }
}

playerVolumeBtn.addEventListener("click", muteVolume);
