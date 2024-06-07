// ----------scrambleEnd--------------

var tl = gsap.timeline();
// video 3 ----------------------------

function dom() {
  const canvas = document.querySelector("#home>canvas");
  const context = canvas.getContext("2d");
  const redDiv = document.getElementById("redDiv");

  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  window.addEventListener("resize", function () {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    render();
  });

  function files(index) {
    // var data = "";
    // for (let i = 1000; i <= 1239; i++) {
    //   data += `./assets/Comp ${i}.jpg\n`;
    // }
    var data = `./assets/Comp 1000.jpg
    ./assets/Comp 1001.jpg
    ./assets/Comp 1002.jpg
    ./assets/Comp 1003.jpg
    ./assets/Comp 1004.jpg
    ./assets/Comp 1005.jpg
    ./assets/Comp 1006.jpg
    ./assets/Comp 1007.jpg
    ./assets/Comp 1008.jpg
    ./assets/Comp 1009.jpg
    ./assets/Comp 1010.jpg
    ./assets/Comp 1011.jpg
    ./assets/Comp 1012.jpg
    ./assets/Comp 1013.jpg
    ./assets/Comp 1014.jpg
    ./assets/Comp 1015.jpg
    ./assets/Comp 1016.jpg
    ./assets/Comp 1017.jpg
    ./assets/Comp 1018.jpg
    ./assets/Comp 1019.jpg
    ./assets/Comp 1020.jpg
    ./assets/Comp 1021.jpg
    ./assets/Comp 1022.jpg
    ./assets/Comp 1023.jpg
    ./assets/Comp 1024.jpg
    ./assets/Comp 1025.jpg
    ./assets/Comp 1026.jpg
    ./assets/Comp 1027.jpg
    ./assets/Comp 1028.jpg
    ./assets/Comp 1029.jpg
    ./assets/Comp 1030.jpg
    ./assets/Comp 1031.jpg
    ./assets/Comp 1032.jpg
    ./assets/Comp 1033.jpg
    ./assets/Comp 1034.jpg
    ./assets/Comp 1035.jpg
    ./assets/Comp 1036.jpg
    ./assets/Comp 1037.jpg
    ./assets/Comp 1038.jpg
    ./assets/Comp 1039.jpg
    ./assets/Comp 1040.jpg
    ./assets/Comp 1041.jpg
    ./assets/Comp 1042.jpg
    ./assets/Comp 1043.jpg
    ./assets/Comp 1044.jpg
    ./assets/Comp 1045.jpg
    ./assets/Comp 1046.jpg
    ./assets/Comp 1047.jpg
    ./assets/Comp 1048.jpg
    ./assets/Comp 1049.jpg
    ./assets/Comp 1050.jpg
    ./assets/Comp 1051.jpg
    ./assets/Comp 1052.jpg
    ./assets/Comp 1053.jpg
    ./assets/Comp 1054.jpg
    ./assets/Comp 1055.jpg
    ./assets/Comp 1056.jpg
    ./assets/Comp 1057.jpg
    ./assets/Comp 1058.jpg
    ./assets/Comp 1059.jpg
    ./assets/Comp 1060.jpg
    ./assets/Comp 1061.jpg
    ./assets/Comp 1062.jpg
    ./assets/Comp 1063.jpg
    ./assets/Comp 1064.jpg
    ./assets/Comp 1065.jpg
    ./assets/Comp 1066.jpg
    ./assets/Comp 1067.jpg
    ./assets/Comp 1068.jpg
    ./assets/Comp 1069.jpg
    ./assets/Comp 1070.jpg
    ./assets/Comp 1071.jpg
    ./assets/Comp 1072.jpg
    ./assets/Comp 1073.jpg
    ./assets/Comp 1074.jpg
    ./assets/Comp 1075.jpg
    ./assets/Comp 1076.jpg
    ./assets/Comp 1077.jpg
    ./assets/Comp 1078.jpg
    ./assets/Comp 1079.jpg
    ./assets/Comp 1080.jpg
    ./assets/Comp 1081.jpg
    ./assets/Comp 1082.jpg
    ./assets/Comp 1083.jpg
    ./assets/Comp 1084.jpg
    ./assets/Comp 1085.jpg
    ./assets/Comp 1086.jpg
    ./assets/Comp 1087.jpg
    ./assets/Comp 1088.jpg
    ./assets/Comp 1089.jpg
    ./assets/Comp 1090.jpg
    ./assets/Comp 1091.jpg
    ./assets/Comp 1092.jpg
    ./assets/Comp 1093.jpg
    ./assets/Comp 1094.jpg
    ./assets/Comp 1095.jpg
    ./assets/Comp 1096.jpg
    ./assets/Comp 1097.jpg
    ./assets/Comp 1098.jpg
    ./assets/Comp 1099.jpg
    ./assets/Comp 1100.jpg
    ./assets/Comp 1101.jpg
    ./assets/Comp 1102.jpg
    ./assets/Comp 1103.jpg
    ./assets/Comp 1104.jpg
    ./assets/Comp 1105.jpg
    ./assets/Comp 1106.jpg
    ./assets/Comp 1107.jpg
    ./assets/Comp 1108.jpg
    ./assets/Comp 1109.jpg
    ./assets/Comp 1110.jpg
    ./assets/Comp 1111.jpg
    ./assets/Comp 1112.jpg
    ./assets/Comp 1113.jpg
    ./assets/Comp 1114.jpg
    ./assets/Comp 1115.jpg
    ./assets/Comp 1116.jpg
    ./assets/Comp 1117.jpg
    ./assets/Comp 1118.jpg
    ./assets/Comp 1119.jpg
    ./assets/Comp 1120.jpg
    ./assets/Comp 1121.jpg
    ./assets/Comp 1122.jpg
    ./assets/Comp 1123.jpg
    ./assets/Comp 1124.jpg
    ./assets/Comp 1125.jpg
    ./assets/Comp 1126.jpg
    ./assets/Comp 1127.jpg
    ./assets/Comp 1128.jpg
    ./assets/Comp 1129.jpg
    ./assets/Comp 1130.jpg
    ./assets/Comp 1131.jpg
    ./assets/Comp 1132.jpg
    ./assets/Comp 1133.jpg
    ./assets/Comp 1134.jpg
    ./assets/Comp 1135.jpg
    ./assets/Comp 1136.jpg
    ./assets/Comp 1137.jpg
    ./assets/Comp 1138.jpg
    ./assets/Comp 1139.jpg
    ./assets/Comp 1140.jpg
    ./assets/Comp 1141.jpg
    ./assets/Comp 1142.jpg
    ./assets/Comp 1143.jpg
    ./assets/Comp 1144.jpg
    ./assets/Comp 1145.jpg
    ./assets/Comp 1146.jpg
    ./assets/Comp 1147.jpg
    ./assets/Comp 1148.jpg
    ./assets/Comp 1149.jpg
    ./assets/Comp 1150.jpg
    ./assets/Comp 1151.jpg
    ./assets/Comp 1152.jpg
    ./assets/Comp 1153.jpg
    ./assets/Comp 1154.jpg
    ./assets/Comp 1155.jpg
    ./assets/Comp 1156.jpg
    ./assets/Comp 1157.jpg
    ./assets/Comp 1158.jpg
    ./assets/Comp 1159.jpg
    ./assets/Comp 1160.jpg
    ./assets/Comp 1161.jpg
    ./assets/Comp 1162.jpg
    ./assets/Comp 1163.jpg
    ./assets/Comp 1164.jpg
    ./assets/Comp 1165.jpg
    ./assets/Comp 1166.jpg
    ./assets/Comp 1167.jpg
    ./assets/Comp 1168.jpg
    ./assets/Comp 1169.jpg
    ./assets/Comp 1170.jpg
    ./assets/Comp 1171.jpg
    ./assets/Comp 1172.jpg
    ./assets/Comp 1173.jpg
    ./assets/Comp 1174.jpg
    ./assets/Comp 1175.jpg
    ./assets/Comp 1176.jpg
    ./assets/Comp 1177.jpg
    ./assets/Comp 1178.jpg
    ./assets/Comp 1179.jpg
    ./assets/Comp 1180.jpg
    ./assets/Comp 1181.jpg
    ./assets/Comp 1182.jpg
    ./assets/Comp 1183.jpg
    ./assets/Comp 1184.jpg
    ./assets/Comp 1185.jpg
    ./assets/Comp 1186.jpg
    ./assets/Comp 1187.jpg
    ./assets/Comp 1188.jpg
    ./assets/Comp 1189.jpg
    ./assets/Comp 1190.jpg
    ./assets/Comp 1191.jpg
    ./assets/Comp 1192.jpg
    ./assets/Comp 1193.jpg
    ./assets/Comp 1194.jpg
    ./assets/Comp 1195.jpg
    ./assets/Comp 1196.jpg
    ./assets/Comp 1197.jpg
    ./assets/Comp 1198.jpg
    ./assets/Comp 1199.jpg
    ./assets/Comp 1200.jpg
    ./assets/Comp 1201.jpg
    ./assets/Comp 1202.jpg
    ./assets/Comp 1203.jpg
    ./assets/Comp 1204.jpg
    ./assets/Comp 1205.jpg
    ./assets/Comp 1206.jpg
    ./assets/Comp 1207.jpg
    ./assets/Comp 1208.jpg
    ./assets/Comp 1209.jpg
    ./assets/Comp 1210.jpg
    ./assets/Comp 1211.jpg
    ./assets/Comp 1212.jpg
    ./assets/Comp 1213.jpg
    ./assets/Comp 1214.jpg
    ./assets/Comp 1215.jpg
    ./assets/Comp 1216.jpg
    ./assets/Comp 1217.jpg
    ./assets/Comp 1218.jpg
    ./assets/Comp 1219.jpg
    ./assets/Comp 1220.jpg
    ./assets/Comp 1221.jpg
    ./assets/Comp 1222.jpg
    ./assets/Comp 1223.jpg
    ./assets/Comp 1224.jpg
    ./assets/Comp 1225.jpg
    ./assets/Comp 1226.jpg
    ./assets/Comp 1227.jpg
    ./assets/Comp 1228.jpg
    ./assets/Comp 1229.jpg
    ./assets/Comp 1230.jpg
    ./assets/Comp 1231.jpg
    ./assets/Comp 1232.jpg
    ./assets/Comp 1233.jpg
    ./assets/Comp 1234.jpg
    ./assets/Comp 1235.jpg
    ./assets/Comp 1236.jpg
    ./assets/Comp 1237.jpg
    ./assets/Comp 1238.jpg
    ./assets/Comp 1239.jpg
    `;
    return data.split("\n")[index];
  }

  const frameCount = 241;
  const images = [];
  const imageSeq = {
    frame: 0,
  };

  for (let i = 0; i < frameCount; i++) {
    const img = new Image();
    img.src = files(i);
    images.push(img);
  }

  gsap.to(imageSeq, {
    frame: frameCount - 1,
    snap: "frame",
    ease: "none",
    scrollTrigger: {
      scrub: 2,
      pin: true,
      trigger: "#home",
    },
    onUpdate: function () {
      render();
      if (imageSeq.frame >= 100 && imageSeq.frame <= 205) {
        redDiv.classList.add("show");
        redDiv.classList.remove("hide");
      } else {
        redDiv.classList.add("hide");
        redDiv.classList.remove("show");
      }
    },
  });

  images[0].onload = render;

  function render() {
    scaleImage(images[imageSeq.frame], context);
  }

  function scaleImage(img, ctx) {
    var canvas = ctx.canvas;
    var hRatio = canvas.width / img.width;
    var vRatio = canvas.height / img.height;
    var ratio = Math.max(hRatio, vRatio);
    var centerShift_x = (canvas.width - img.width * ratio) / 2;
    var centerShift_y = (canvas.height - img.height * ratio) / 2;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(
      img,
      0,
      0,
      img.width,
      img.height,
      centerShift_x,
      centerShift_y,
      img.width * ratio,
      img.height * ratio
    );
  }

  // gsap.to("#home canvas", {
  //   scale: 0.8,
  //   scrollTrigger: {
  //     scrub: 0.1,
  //     trigger: "#home",
  //     start: "bottom 100%",
  //     markers: true,
  //   },
  // });

  ScrollTrigger.create({
    trigger: "#home",
    pin: true,
    start: "bottom 100%",
  });
}

dom();
