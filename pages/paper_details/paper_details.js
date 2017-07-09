Page({
  data: {
    autoplay: true,
    interval: 3000,
    duration: 1000,
    circular: true,
    content: "在中央党校，“中青一班”一直是引人关注的群体。每年，学员名单由中组部敲定，并且安排联络员下到各个支部，全程参与学员的各个学习考核环节。从入学报到的第一天起，学员们就要快速实现三个转变：从官员到学员、从工作状态到学习状态，从家庭生活到集体生活。党校的学习、生活节奏可见一斑。在4个半月的培训中，学员们要系统学习马克思列宁主义、毛泽东思想、习近平总书记系列重要讲话精神、中国特色社会主义理论体系、党性教育等核心课。此外，还要参加从政经验交流、社会调研、体验式教学等课程。作为中国共产党培养领导干部的最高学府，党校承担着为领导干部补钙壮骨、立根固本的重要任务。在中央党校丰富的教育培训形式当中，“从政经验交流”课已经成为中央党校的品牌课，深受学员的欢迎。4月，一个阳光灿烂的下午，记者来到中央党校研讨楼3012会议室，观摩了中青一班一个学员支部正在举行的从政经验交流活动。主持这次交流的是支部副书记、山东省聊城市委书记徐景颜。从政经验交流每次一般由五位学员进行交流发言，由支部书记、副书记或学习委员轮流主持并进行点评。我们注意到，中央党校培训部主任张素峰也参与了这次从政经验交流。张素峰介绍说，开展从政经验交流始于2004年第20期中青班，是学学相长的好方法和重要平台，现在已经是中青班的教学安排内容，也成为培训部的一个知名品牌。中央党校学员都是有着丰富阅历和实践经验的领导干部，曾有学员生动地比喻说，“党校是一座富矿，学员中蕴藏着无尽宝藏”；“每个学员都是一本书”。按照教学安排，每位学员都要参加从政交流。在从政经验交流中，每个人都要讲自己从政道路上、成长过程中烙印深刻的事件和感悟，讲从工作中得到的经验和教训，讲处理各种矛盾问题的方法和体会等等，相互启发碰撞，互相切磋提醒，把个人的经验、教训、感悟转化为大家共同拥有的认识、借鉴、财富，达到“他山之石可以攻玉”之目的。谈理想信念：不忘初心 忠诚于党，天下之德，莫过于忠。绝对忠诚于党是我们党对党员的根本政治要求，是党的事业顺利发展的坚强政治保证。共产党员必须时刻牢记自己是党的人，把对党绝对忠诚作为基本政治素养，始终保持忠于党、忠于国家、忠于人民的政治品格。武汉大学副校长、教授、法学博士周叶中第一个发言。他说：“我始终对党组织有一种感恩。总想到只有努力做事，自己心里才能够踏实，才能够平静。”“我们所认定的目标，不要因为困难、挫折、困惑、诱惑而动摇，它源源不断的力量源泉，其实就是我们党的根本政治立场、人民立场。”"    
  },
  onLoad: function (options) {
    var data = JSON.parse(options.item_data);
    console.log(data);
    var imgUrlsArr = [];
    imgUrlsArr.push(data.thumbnail_pic_s);
    var image2 = data.thumbnail_pic_s02;
    var image3 = data.thumbnail_pic_s03;
    if (image2 != null) {
      imgUrlsArr.push(image2);
    }
    if (image3 != null) {
      imgUrlsArr.push(image3);
    }
    console.log("imgUrlsArr.length=" + imgUrlsArr.length);
    if (imgUrlsArr.length > 1) {
      this.setData({
        topTitle:data.title,
        topAuthor:data.author_name,
        topDate:data.date,
        imgUrls: imgUrlsArr,
        hiddenImg: true,
        hiddenSwiper: false,
        indicatordots: imgUrlsArr.length,
      })
    } else {
      this.setData({
        topTitle: data.title,
        topAuthor: data.author_name,
        topDate: data.date,
        imageUrl: imgUrlsArr[0],
        hiddenImg: false,
        hiddenSwiper: true
      })
    }
    console.log(imgUrlsArr);

  }
})