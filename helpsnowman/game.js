	//获取屏幕信息
var w = window.innerWidth,
    h = window.innerHeight,
    //修改宽度适应画布
    w = (w > 9 * h / 16) ? 9 * h / 16 : w,

    ctx = $('#canvas').getContext('2d'),
    //定义雪人
    snowman = {
			x: 0.5 * w,
			y: 0.8 * h
		},
    hails = [],
    arr = [],
    //将a作为变量方便界面调整
    a = ~~(0.008 * w);

//修改画布大小
$('#canvas').width = w;
$('#canvas').height = h;

function $(id) {
	return document.querySelector(id);
};

$('#but').onclick = function () {
	//调整样式
	$('#begin').style.display = "none";
	$('#canvas').style.display = "block";

	//定时增加冰雹
	addHail = setInterval(pushItem, 200);

	//定时刷新canvas
	intDraw = setInterval(drawCanvas, 20);
};

function end (){
	alert("成功躲过" + arr.length + "个冰雹！");
	location.reload();
};

//增加冰雹
function pushItem (){
	var hail = {
		x: 0,
		y: 0,
		covar: Math.random()	//随机速度
	};
	hail.x = Math.random() * w;
	hail.y = 0;

	hails.push(hail)
};

//刷新canvas
function drawCanvas () {
	ctx.clearRect(0, 0, w, h);

	drawSnowman();
	drawHail();
};

//画雪人
function drawSnowman () {
	//限定雪人的活动范围
	(snowman.x <= 6 * a) && (snowman.x = 6 * a);
	(snowman.x >= w - 6 * a) && (snowman.x = w - 6 * a);
	(snowman.y <= 10 * a) && (snowman.y = 10 * a);
	(snowman.y >= h - 10 * a) && (snowman.y = h - 10 * a);

	snowman.x += snowman.speedX;
	snowman.y += snowman.speedY;

	//画雪人

	//手
	ctx.beginPath();
	ctx.moveTo(snowman.x + 6 * a, snowman.y - 3 * a);
	ctx.lineTo(snowman.x + 3 * a, snowman.y + a);
	ctx.strokeStyle = "#7f735c";
	ctx.lineWidth = a / 2;
	ctx.stroke();

	//身体
	ctx.beginPath();
	ctx.moveTo(snowman.x - 6 * a, snowman.y + 5 * a);
	ctx.bezierCurveTo(snowman.x - 5 * a, snowman.y - 7 * a, snowman.x + 5 * a, snowman.y - 7 * a, snowman.x + 6 * a, snowman.y + 5 * a);//上
	ctx.bezierCurveTo(snowman.x + 6 * a, snowman.y + 13 * a, snowman.x - 7 * a, snowman.y + 13 * a, snowman.x - 6 * a, snowman.y + 5 * a);//下
	ctx.closePath();
	ctx.fillStyle = "#f7f7f7";
	ctx.fill();
	ctx.strokeStyle = "#393939";
	ctx.lineWidth = a/4;
	ctx.stroke();
	ctx.restore();

	//脸
	ctx.save();
	ctx.beginPath();
		//阴影
	ctx.shadowOffsetX = 2;
	ctx.shadowOffsetY = 6;
	ctx.shadowColor = "rgba(100,100,100,0.1)";
	ctx.shadowBlur = 8;

	ctx.moveTo(snowman.x - 5 * a,snowman.y - 6 * a);
	ctx.bezierCurveTo(snowman.x - 5 * a, snowman.y - 12 * a, snowman.x + 5 * a, snowman.y - 12 * a, snowman.x + 5 * a, snowman.y - 6 * a);//上
	ctx.bezierCurveTo(snowman.x + 5 * a, snowman.y - a, snowman.x - 5 * a, snowman.y - a, snowman.x - 5 * a, snowman.y - 6 * a);//下
	ctx.closePath();
	ctx.fillStyle = "#f7f7f7";
	ctx.fill();
	ctx.strokeStyle = "#393939";
	ctx.lineWidth = a/4;
	ctx.stroke();
	ctx.restore();

	//眼睛
	ctx.beginPath();
	ctx.arc(snowman.x - 2 * a, snowman.y - 7 * a, a/2, 0, Math.PI * 2, true);
	ctx.closePath();
	ctx.fillStyle = "#393939";
	ctx.fill();

	//眼睛
	ctx.beginPath();
	ctx.arc(snowman.x + 2 * a, snowman.y - 8 * a, a/2, 0, Math.PI * 2, true);
	ctx.closePath();
	ctx.fillStyle = "#393939";
	ctx.fill();

	//鼻子
	ctx.beginPath();
		//阴影
	ctx.shadowOffsetX = 1;
	ctx.shadowOffsetY = 3;
	ctx.shadowColor = "rgba(100,100,100,0.1)";
	ctx.shadowBlur = 5;

	ctx.moveTo(snowman.x + a, snowman.y - 5 * a);
	ctx.bezierCurveTo(snowman.x + 1.2 * a, snowman.y - 6 * a, snowman.x + 2 * a, snowman.y - 5.5 * a, snowman.x + 4 * a, snowman.y - 5.5 * a);//上
	ctx.bezierCurveTo(snowman.x + 2 * a, snowman.y - 4.5 * a, snowman.x + 1.2 * a, snowman.y - 4 * a, snowman.x + a, snowman.y - 5 * a);//下
	ctx.closePath();
	ctx.fillStyle = "#dfb779";
	ctx.fill();
	ctx.restore();

	//手
	ctx.beginPath();
	ctx.moveTo(snowman.x - 6 * a, snowman.y - 2 * a);
	ctx.lineTo(snowman.x - 3 * a, snowman.y + a);
	ctx.strokeStyle = "#7f735c";
	ctx.lineWidth = a / 2;
	ctx.stroke();
};

function drawHail (){
	//检查所有冰雹
	for (var i = 0; i < hails.length; i++) {
		if (hails[i].y >= h) {	//超出画布删除并计数
			delete hails[i];
			arr.push(hails[i]);
			hails.splice(i, 1);
		} else if (Math.abs(snowman.x - hails[i].x) < 8 * a && Math.abs(snowman.y - hails[i].y) < 12 * a) {	//判断结束
			clearInterval(addHail);
			clearInterval(intDraw);

			end();
		} else {
			hails[i].x += (Math.random() * a - a / 2) * hails[i].covar;
			hails[i].y += 5 + hails[i].covar + arr.length / 100;

			//画冰雹
			ctx.beginPath();
			ctx.arc(hails[i].x, hails[i].y, 2 * a, 0, 360, false);
			ctx.closePath();
			ctx.fillStyle = "#fff";
			ctx.fill();
		};
	};
};


//键盘事件
document.onkeyup = function (event) {
	var e = event || window.event;
	var keyCode = e.keyCode || e.which;

	if(keyCode == 37 || keyCode == 39){
		snowman.speedX = 0;
	}else if(keyCode == 38 || keyCode == 40){
		snowman.speedY = 0;
	};
};
document.onkeydown = function (event) {
	var e = event || window.event;
	var keyCode = e.keyCode || e.which;

	switch (keyCode) {
		case 37:
			snowman.speedX = -5;
			break;
		case 38:
			snowman.speedY = -5;
			break;
		case 39:
			snowman.speedX = 5;
			break;
		case 40:
			snowman.speedY = 5;
			break;
		default:
			break;
	};
};

//手机平板类用重力感应事件
window.addEventListener("deviceorientation", function (event) {
	if ((event.gamma >= 3 && event.gamma <= 90) || (event.gamma <= -3 && event.gamma >= -90)) {
		snowman.speedX = 0.5 * event.gamma;
	}else{
		snowman.speedX = 0;
	}
	if ((event.beta >= 3 && event.beta <= 90) || (event.beta <= -3 && event.beta >= -90)) {
		snowman.speedY = 0.5 * event.beta;
	}else{
		snowman.speedY = 0;
	}
}, true)