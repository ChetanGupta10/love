
var love = setInterval(function () {

    var r_num = Math.floor(Math.random() * 40) + 1;
    var r_size = Math.floor(Math.random() * 65) + 10;
    var r_left = Math.floor(Math.random() * 100) + 1;
    var r_bg = Math.floor(Math.random() * 25) + 100;
    var r_time = Math.floor(Math.random() * 5) + 5;

    $('.bg_heart').append(
        "<div class='heart' style='width:" + r_size + "px;height:" + r_size +
        "px;left:" + r_left + "%;background:rgba(255," + (r_bg - 25) + "," + r_bg +
        ",1);animation:love " + r_time + "s ease'></div>"
    );

}, 500);


var i = 0;

var txt1 = "Hi Beautiful...! ❤️ << Aaj mujhe tumse kuch special kehna hai, isliye please is message ko poora padhna... << Jab maine tumse pehli baar baat ki thi, tabhi tum mujhe sabse alag lagi thi. Dheere dheere pata hi nahi chala kab tum meri soch ka important part ban gayi. Tumhari har baat, tumhari smile, tumhara nature... sab kuch mujhe bahut achha lagta hai. << Aur sach kahu, tum traditional dress me bahut zyada beautiful lagti ho... 🥰 << Tumhe us look me dekhkar bas nazar hi nahi hatti. << Main usually apni feelings kisi se share nahi karta, but tumhare liye jo feel karta hu wo genuinely special hai. Jab bhi tumse baat hoti hai na, pura din achha lagne lagta hai. << I don’t know future me kya hoga, but itna zaroor pata hai ki tum mere liye bahut important ho. ❤️ << I really like you... and maybe a little more than that. << Bas abhi tumhare saath zyada se zyada time spend karne chahta hu, taaki tumhe bata saku ki tum mere liye kitni special ho... 💖";

var speed = 70;

typeWriter();

function typeWriter() {

    if (i < txt1.length) {

        if (txt1.charAt(i) == '<')
            document.getElementById("text1").innerHTML += "</br>";

        else
            document.getElementById("text1").innerHTML += txt1.charAt(i);

        i++;

        setTimeout(typeWriter, speed);
    }
}
