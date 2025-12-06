<<<<<<< HEAD
let un = document.querySelector("#username");
let em = document.querySelector("#email");
let pw = document.querySelector("#password");
let form = document.querySelector("form");
let er = document.querySelector(".input-control small");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  const usernameRegex = /^[a-zA-Z0-9]{3,16}$/;
  let isValid = true;

    document.querySelector("#nameError").style.display = "none";
    document.querySelector("#emailError").style.display = "none";      
    document.querySelector("#passwordError").style.display = "none";


    if (!usernameRegex.test(un.value)) {
        document.querySelector("#nameError").textContent = "Invalid Username ";
        document.querySelector("#nameError").style.display = "initial";
        isValid = false;
    }

    if (!emailRegex.test(em.value)) {
        document.querySelector("#emailError").textContent = "Invalid email address.";
        document.querySelector("#emailError").style.display = "initial";
        isValid = false;
    }

    if (!passwordRegex.test(pw.value)) {
        document.querySelector("#passwordError").textContent = "Password must be at least 8 characters long and include uppercase, lowercase, number, and special character.";
        document.querySelector("#passwordError").style.display = "initial";
        isValid = false;
    }   

    if(isValid){
        document.querySelector("#resultMessage").textContent = "Everything is correct";
    }
});
=======
const reels = [
  {
    username: "alex_art",
    likeCount: 12400,
    isLiked: false,
    followCount: 3050,
    isFollowed: false,
    commentCount: 340,
    caption: "Creating something new everyday ✨",
    profilePhoto: "https://randomuser.me/api/portraits/men/12.jpg",
    shareCount: 120,
    video: "reels/1.mp4"
  },
  {
    username: "travel_with_mia",
    likeCount: 54000,
    isLiked: true,
    followCount: 120000,
    isFollowed: false,
    commentCount: 890,
    caption: "Sunsets hit different when you travel 🌅✈️",
    profilePhoto: "https://randomuser.me/api/portraits/women/45.jpg",
    shareCount: 640,
    video: "reels/2.mp4"
  },
  {
    username: "fit_raj",
    likeCount: 9870,
    isLiked: true,
    followCount: 45000,
    isFollowed: false,
    commentCount: 210,
    caption: "Morning workout grind 💪🔥",
    profilePhoto: "https://randomuser.me/api/portraits/men/32.jpg",
    shareCount: 77,
    video: "reels/3.mp4"
  },
  {
    username: "chef_sana",
    likeCount: 18900,
    isLiked: false,
    followCount: 78000,
    isFollowed: true,
    commentCount: 520,
    caption: "5-minute pasta recipe 🍝💛",
    profilePhoto: "https://randomuser.me/api/portraits/women/22.jpg",
    shareCount: 150,
    video: "reels/4.mp4"
  },
  {
    username: "tech_guru",
    likeCount: 35000,
    isLiked: true,
    followCount: 98000,
    isFollowed: false,
    commentCount: 640,
    caption: "Latest AI tools you must try 🤖",
    profilePhoto: "https://randomuser.me/api/portraits/men/75.jpg",
    shareCount: 430,
    video: "reels/5.mp4"
  },
  {
    username: "dance_diva",
    likeCount: 75600,
    isLiked: true,
    followCount: 65000,
    isFollowed: true,
    commentCount: 1320,
    caption: "Dance vibes only 💃🔥",
    profilePhoto: "https://randomuser.me/api/portraits/women/29.jpg",
    shareCount: 980,
    video: "reels/6.mp4"
  },
  {
    username: "nature_clicks",
    likeCount: 4300,
    isLiked: false,
    followCount: 12000,
    isFollowed: false,
    commentCount: 190,
    caption: "Nature heals 🌿📷",
    profilePhoto: "https://randomuser.me/api/portraits/men/90.jpg",
    shareCount: 55,
    video: "reels/3.mp4"
  },
  {
    username: "beauty_by_zoe",
    likeCount: 27800,
    isLiked: true,
    followCount: 34000,
    isFollowed: true,
    commentCount: 740,
    caption: "Soft glam makeup tutorial 💄✨",
    profilePhoto: "https://randomuser.me/api/portraits/women/4.jpg",
    shareCount: 310,
    video: "reels/1.mp4"
  },
  {
    username: "coding_with_sid",
    likeCount: 8200,
    isLiked: false,
    followCount: 41000,
    isFollowed: false,
    commentCount: 260,
    caption: "JavaScript tips that will save your time 💡",
    profilePhoto: "https://randomuser.me/api/portraits/men/14.jpg",
    shareCount: 100,
    video: "reels/4.mp4"
  },
  {
    username: "pet_world",
    likeCount: 64000,
    isLiked: true,
    followCount: 150000,
    isFollowed: true,
    commentCount: 2100,
    caption: "Cutest puppies you’ll see today 🐶❤️",
    profilePhoto: "https://randomuser.me/api/portraits/women/55.jpg",
    shareCount: 1500,
    video: "reels/2.mp4"
  }
];

var sum = ''

reels.forEach(function(elem) {
    sum=sum +`<div class="reel">
                    <video autoplay loop muted src="${elem.video}"></video>
                    <div class="bottom">

                        <div class="user">
                            <img src="${elem.profilePhoto}"
                                alt="">
                            <h4>${elem.username}</h4>
                            <button>${elem.isFollowed ? `Followed `: `Follow`}</button>
                        </div>

                        <h3>${elem.caption}</h3>

                        <div class="right">
                            <div class="like">
                                <h4 class="like-icon icon">${elem.isLiked ? '<i class=" love ri-heart-3-fill"></i>' : '<i class="ri-heart-3-line"></i>' }</h4>
                                <h6>${elem.likeCount}</h6>
                            </div>

                            <div class="comment">
                                <h4 class="comment-icon icon"><i class="ri-chat-1-line"></i></h4>
                                <h6>${elem.commentCount}</h6>
                            </div>

                            <div class="share">
                                <h4 class="share-icon icon"><i class="ri-share-forward-line"></i></h4>
                                <h6>${elem.shareCount}</h6>
                            </div>

                            <div class="more">
                                <h4 class="more-icon icon"><i class="ri-more-2-line"></i></h4>
                            </div>
                        </div>

                    </div>
                </div>
`
})

console.log();

var allReels = document.querySelector('.all-reels')

allReels.innerHTML = sum
>>>>>>> fbf7d7f66ef4ef9a3927caa369502bb857d3905f
