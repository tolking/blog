//启动计时器，记录启动服务所花费的时间
console.time('start WebServer need time');

//请求模块
var libHttp = require('http');  //HTTP协议模块
var libUrl = require('url');    //URL解析模块
var libFs = require("fs");      //文件系统模块
var libPath = require("path");  //路径解析模块

//依据路径获取返回内容类型字符串,用于http响应头
var funGetContentType = function (filePath) {
  var contentType = "";
  //使用路径解析模块获取文件扩展名
  var ext = libPath.extname(filePath);
  switch (ext) {
    case ".html":
      contentType = "text/html";
      break;
    case ".js":
      contentType = "text/javascript";
      break;
    case ".css":
      contentType = "text/css";
      break;
    case ".gif":
      contentType = "image/gif";
      break;
    case ".jpg":
      contentType = "image/jpeg";
      break;
    case ".png":
      contentType = "image/png";
      break;
    case ".ico":
      contentType = "image/icon";
      break;
    default:
			contentType = "application/octet-stream";
			break;
  }
  //返回内容类型字符串
  return contentType;
}

//Web服务器主函数,解析请求,返回Web内容
var funWebSvr = function (req, res) {
  //获取请求的url
  var reqUrl = req.url;
  //向控制台输出请求的路径
  console.log(reqUrl);
  //使用url解析模块获取url中的路径名
  var pathName = libUrl.parse(reqUrl).pathname;
  if (libPath.extname(pathName) == "") {
    //如果路径没有扩展名
    pathName += "/"; //指定访问目录
  }
  if (pathName.charAt(pathName.length - 1) == "/") {
    //如果访问目录
    pathName += "index.html"; //指定为默认网页
  }
  //使用路径解析模块,组装实际文件路径
  var filePath = libPath.join("./", pathName);
  //判断文件是否存在
  libFs.exists(filePath, function (exists) {
    //文件存在
    if (exists) {
      //在响应头中写入内容类型
      res.writeHead(200, { "Content-Type": funGetContentType(filePath) });
      //创建只读流用于返回
      var stream = libFs.createReadStream(filePath, { flags: "r",encoding:null });
      //指定如果流读取错误,返回404错误
      stream.on("error", function () {
        res.writeHead(404);
        res.end("<h1>404 Read Error</h1>");
      });
      //连接文件流和http返回流的管道,用于返回实际Web内容
      stream.pipe(res);
    }
    else {
      //文件不存在，返回404错误
      res.writeHead(404, { "Content-Type": "text/html" });
      res.end("<h1>404 Not Found</h1>");
    }
  });
}

//创建一个http服务器
var webSvr = libHttp.createServer(funWebSvr);

//指定服务器错误事件响应
webSvr.on("error", function (error) {
  //在控制台中输出错误信息
  console.log(error);
});

//开始侦听8888端口
webSvr.listen(8888, function () {
  //向控制台输出服务启动的信息
  console.log('WebServer running at http://localhost:8888/');
  //关闭服务启动计时器
  console.timeEnd('start WebServer need time');
});