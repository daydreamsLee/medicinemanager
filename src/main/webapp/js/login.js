$(function(){
	$("#inputName").val(getCookie("loginName"));
	console.log("账号cookie-->"+$("#inputName").val(getCookie("loginName")));
	$(".container form").submit(function(e){
		alert("login.js-->submit");
		return login_form();
	});
});
//登录方法
function login_form(){
	alert("login_form");
	//获取表单中的用户名和密码
	var name = $("#inputName").val();
	alert("login_form-->name="+name);
	var pwd = $("#inputPassword").val();
	alert("login_form-->pwd="+pwd);
	var remember = $(".container form input[type=checkbox]").get(0).checked;
//	alert(lName+"  "+lPwd);
	console.log(name+"  "+pwd);
	//断点跟踪
	$.ajax({
		url:basePath+"enter/login/"+name+"/"+pwd+"/0",
		type:"get",//使用restful方式
//		data:{"loginName":lName,"loginPwd":lPwd},
		dataType:"json",
		success:function(result){
			//result是服务端返回的数据
			if(result.status==0){
				window.location.href="index.html";
				if(remember){
					addCookie("loginName",lName,1);
				}
			}else if(result.status==1){
				alert(result.message);
			}
		},
		error:function(){
			alert("请求失败!");
		}
	});
	return false;
}