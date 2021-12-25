// all song playlist

const songs = [
    {
        song: "Humma humma.mp3",
        name: "Humma humma",
        Artist: "A.R.Rahman",
        cover: "humma_humma.jpg"
    },

    {
        song: "Ek Dil Ek Jaan - Padmavati.mp3",
        name: "Ek Dil Ek Jaan",
        Artist: "shivam pathak",
        cover: "Ek_dil_ek_jann.jpg"
    },

    {
        song: "Kaun Tujhe.mp3",
        name: "kaun tujhe",
        Artist: "palak Muchhal",
        cover: "Kaun_tujhe.jpg"
    },

    {
        song: "Khairiyat.mp3",
        name: "Khairiyat",
        Artist: "Arijit Singh",
        cover: "Khariyat.jpg"
    },

    {
        song: "Apna Time Aayega.mp3",
        name: "Apna Time Aayega",
        Artist: "Ranveer singh",
        cover: "apna_time_aaega.jpg"
    },

    {
        song: "Genda Phool.mp3",
        name: "Genda Phool",
        Artist: "Badshah",
        cover: "genda_phool.jpg"
    },

    {
        song: "Chaar Kadam.mp3",
        name: "Chaar Kadam",
        Artist: "Shaan & Shreya Goshal",
        cover: "char_kadam.jpg"
    },

    {
        song: "Khalibali.mp3",
        name: "Khalibali",
        Artist: "Shivam Pathak,Sahil Hada",
        cover: "khalibali.jpg"
    },


    {
        song: "Nazar Na Lag Jaaye.mp3",
        name: "Nazar Na Lag Jaaye",
        Artist: "Sachin jigar",
        cover: "najar_na_lag_jae.jpg"
    },

    {
        song: "Samandar.mp3",
        name: "Samandar",
        Artist: "Shreya Ghosal & jubin Nautiyal",
        cover: "samndar.jpg"
    },

    {
        song: "Dekha Hazaro Dafaa.mp3",
        name: "Dekha Hazaro Dafaa",
        Artist: "Arijit singh & palak Muchhal",
        cover: "dekha_hajaro_dafa.jpg"
    },

    {
        song: "Tera Yaar Hoon Main.mp3",
        name: "Tera Yaar Hoon Main",
        Artist: "Arijit Singh",
        cover: "tera-yar_hoon_main.jpg"
    },

    {
        song: "Aao Kabhi Haveli Pe.mp3",
        name: "Aao Kabhi Haveli Pe",
        Artist: "Badshah & Nikhita Gandhi",
        cover: "aao_kabhi_haveli_p.jpg"
    },

    {
        song: "Coca Cola.mp3",
        name: "Coca Cola",
        Artist: "Tony Kakkar,Neha Kakkar,Young Desi",
        cover: "coca_cola.jpg"
    },

    {
        song: "Aankh Marey.mp3",
        name: "Aankh Marey",
        Artist: "Neha kakkar,Mika singh,Kumar sanu",
        cover: "aankh-marey.jpg"
    },

    {
        song: "Kya Baat Ay.mp3",
        name: "Kya Baat Ay",
        Artist: "Harrdy sandhu",
        cover: "Ky_bat_ay.jpg"
    },

    {
        song: "Do Pal.mp3",
        name: "Do pal",
        Artist: "Lata Mangeshkar & Sonu Nigam",
        cover: "do_pal.jpg"
    },

    {
        song: "Fikar Not.mp3",
        name: "Fikar Not",
        Artist: "Nakash Aziz,Dev negi, Amit Mishra",
        cover: "Fikar_not.jpg"
    },

    {
        song: "Janam Janam.mp3",
        name: "Janam Janam",
        Artist: "Arijit Singh & Antara Mitra",
        cover: "janam_janam.jpg"
    },

    {
        song: "Gali Gali.mp3",
        name: "Gali Gali.mp3",
        Artist: "Neha kakkar",
        cover: "gali_gali.jpg"
    },
]

// declarations

var interval;
var music = document.getElementById(`audio`);
var play_pause = document.getElementById(`play_pause`);
var Music_player = document.getElementById(`Music_player`);
var next = document.getElementById(`next`);
var previous = document.getElementById(`previous`);
var Song_name = document.getElementById(`Song_name`);
var Artist = document.getElementById(`Artist`);
var audio_cover = document.getElementById(`audio_cover`);
var song = document.getElementById(`song`);
var player = document.getElementById(`player`);
var current_time = document.getElementById(`current_time`);
var lengthOfSong = document.getElementById(`lengthOfSong`);
var audio_cover = document.getElementById(`audio_cover`);
var Song_list = document.getElementById(`Songs`);
var allsong = document.getElementsByClassName(`allsong`);


// event listeners

window.addEventListener(`load`, () => {
    Song_name.innerText = songs[0].name;
    Artist.innerText = songs[0].Artist;
    audio.src = songs[0].song;
    audio_cover.src = songs[0].cover;
    current_time.innerText = '00:00';
    lengthOfSong.innerText = '00:00';
    songs.forEach((element, index) => {
        Song_list.innerHTML += `<button class = "allsong" id = "${index}" onclick = "playsong(this.id)">
        <h5>${index + 1}:- ${element.song}</h5>
        </button>
        `;
    });
})

play_pause.addEventListener('click', () => {
    if (play_pause.innerHTML == `<img src="pauseBtn.jpg">`) {
        pausetone();
    } else {
        playtone();
    }
})
next.addEventListener(`click`, nextt)
previous.addEventListener(`click`, prev)
player.addEventListener(`input`, () => {
    music.currentTime = player.value;
    playtone();
})

// functions

function playsong(indexOfsong) {
    Song_name.innerText = songs[indexOfsong].name;
    Artist.innerText = songs[indexOfsong].Artist;
    audio.src = songs[indexOfsong].song;
    audio_cover.src = songs[indexOfsong].cover;
    current_time.innerText = '00:00';
    index = indexOfsong;
    playtone();
}

function playtone() {
    music.play();
    play_pause.innerHTML = `<img src="pauseBtn.jpg">`;

    music.addEventListener(`playing`, playing)

    music.addEventListener(`ended`, () => {
        audio_cover.classList.remove(`rotated`);
        play_pause.innerHTML = `<img src="playBtn.jpg">`;
        clearInterval(interval);
        // nextt();
    })
}
function playing() {
    audio_cover.classList.add(`rotated`);
    let current_sec = 0;
    let current_min = 0;
    player.addEventListener(`input`, () => {
        music.currentTime = player.value;
        playtone();
    })
    interval = setInterval(() => {
        let duration = parseInt(music.duration);
        // console.log(music.currentTime);
        player.max = duration;
        let min = parseInt(duration / 60);
        let sec = parseInt(duration % 60);
        if (sec <= 9) {
            sec = `0` + sec;
        }
        if (min <= 9) {
            min = `0` + min;
        }
        lengthOfSong.innerText = `${min}:${sec}`
        if (parseInt(music.currentTime % 60) <= 9) {
            current_sec = `0` + parseInt(music.currentTime % 60);
        }
        else {
            current_sec = parseInt(music.currentTime % 60);
        }
        current_min = parseInt(music.currentTime / 60);
        if (parseInt(music.currentTime / 60) <= 9) {
            current_min = `0` + parseInt(music.currentTime / 60);
        }
        else {
            current_min = parseInt(music.currentTime / 60);
        }
        player.value = music.currentTime;

        current_time.innerText = `${current_min}:${current_sec}`
    }, 1000);

}
function pausetone() {
    music.pause();
    play_pause.innerHTML = `<img src="playBtn.jpg">`;
    audio_cover.classList.remove(`rotated`);
    clearInterval(interval);
    // stopProgressBar();
}
var index = 0;
function nextt() {
    clearInterval(interval);
    player.value = 0;
    if (index == songs.length - 1) {
        index = 0;
    }
    else {
        index++;
    }
    Song_name.innerText = songs[index].name;
    Artist.innerText = songs[index].Artist;
    audio.src = songs[index].song;
    audio_cover.src = songs[index].cover;
    playtone();
}
function prev() {
    player.value = 0;
    clearInterval(interval);
    if (index == 0) {
        index = songs.length - 1;
    }
    else {
        index--;
    }
    Song_name.innerText = songs[index].name;
    Artist.innerText = songs[index].Artist;
    audio.src = songs[index].song;
    audio_cover.src = songs[index].cover;
    playtone();
}
