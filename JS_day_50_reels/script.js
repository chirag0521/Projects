const reels = [
  {
    username: "travelwithaarav",
    likeCount: 12450,
    isLiked: false,
    commentCount: 320,
    caption: "Sunsets hit different when you’re on the road 🌅✨",
    video: "./1.mp4",
    userprofile: "https://randomuser.me/api/portraits/men/11.jpg",
    shareCount: 102,
    isFollowed: true
  },
  {
    username: "foodie_priya",
    likeCount: 9870,
    isLiked: true,
    commentCount: 210,
    caption: "Trying this viral pasta recipe 🍝💥",
    video: "./2.mp4",
    userprofile: "https://randomuser.me/api/portraits/women/15.jpg",
    shareCount: 76,
    isFollowed: false
  },
  {
    username: "techbyrahul",
    likeCount: 15400,
    isLiked: false,
    commentCount: 450,
    caption: "This gadget is insane 🤯🔥",
    video: "./3.mp4",
    userprofile: "https://randomuser.me/api/portraits/men/32.jpg",
    shareCount: 140,
    isFollowed: true
  },
  {
    username: "dancewithme",
    likeCount: 34780,
    isLiked: true,
    commentCount: 890,
    caption: "New choreography! 🔥🕺",
    video: "./4.mp4",
    userprofile: "https://randomuser.me/api/portraits/women/28.jpg",
    shareCount: 310,
    isFollowed: true
  },
  {
    username: "fit_anu",
    likeCount: 22050,
    isLiked: false,
    commentCount: 530,
    caption: "5-minute morning workout 💪☀️",
    video: "./5.mp4",
    userprofile: "https://randomuser.me/api/portraits/women/22.jpg",
    shareCount: 190,
    isFollowed: false
  },
  {
    username: "codingwithsid",
    likeCount: 7850,
    isLiked: false,
    commentCount: 150,
    caption: "JS tip of the day 💡",
    video: "./6.mp4",
    userprofile: "https://randomuser.me/api/portraits/men/44.jpg",
    shareCount: 54,
    isFollowed: true
  },
  {
    username: "petlover.mia",
    likeCount: 41200,
    isLiked: true,
    commentCount: 1200,
    caption: "My dog learned a new trick 🐶❤️",
    video: "./7.mp4",
    userprofile: "https://randomuser.me/api/portraits/women/45.jpg",
    shareCount: 410,
    isFollowed: true
  },
  {
    username: "streetphotography_ak",
    likeCount: 18900,
    isLiked: false,
    commentCount: 430,
    caption: "Caught this moment while walking 📸",
    video: "./8.mp4",
    userprofile: "https://randomuser.me/api/portraits/men/41.jpg",
    shareCount: 130,
    isFollowed: false
  },
  {
    username: "gamer_rishi",
    likeCount: 26500,
    isLiked: true,
    commentCount: 780,
    caption: "This level was CRAZY 😭🔥",
    video: "./9.mp4",
    userprofile: "https://randomuser.me/api/portraits/men/24.jpg",
    shareCount: 260,
    isFollowed: true
  },
  {
    username: "style_by_naina",
    likeCount: 17800,
    isLiked: false,
    commentCount: 390,
    caption: "Outfit of the day ✨👗",
    video: "./10.mp4",
    userprofile: "https://randomuser.me/api/portraits/women/12.jpg",
    shareCount: 120,
    isFollowed: false
  }
];

var sum = ''

reels.forEach(function(elem){
   sum = sum + `                <div class="reel">
                    <video autoplay loop muted src="${elem.video}"></video>
                    <div class="bottom">
                        <div class="user">
                            <img src="${elem.userprofile}"
                                alt="">
                            <h4>${elem.username}</h4>
                            <button>${elem.isFollowed?'Unfollow':'Follow'}</button>
                        </div>
                        <h3>${elem.caption}</h3>
                    </div>
                    <div class="right">
                        <div class="like">
                            <h4 class="like-icon icon">${elem.isLiked? '<i class="love ri-heart-3-fill"></i>':'<i class="ri-heart-3-line"></i>'}</h4>
                            <h6>${elem.likeCount}</h6>
                        </div>
                        <div class="comment">
                            <h4 class="comment-icon icon"><i class="ri-chat-3-line"></i></i></h4>
                            <h6>${elem.commentCount}</h6>
                        </div>
                        <div class="share">
                            <h4 class="share-icon icon"><i class="ri-share-forward-line"></i></i></i></h4>
                            <h6>${elem.shareCount}</h6>
                        </div>
                        <div class="menu">
                            <h4 class="menu-icon icon"><i class="ri-more-2-fill"></i></i></i></i></h4>
                        </div>
                    </div>
                </div>
`
})

var allReels = document.querySelector('.all-reels')
allReels.innerHTML = sum



