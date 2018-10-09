$(function() {
	
	//二维码下载
	$('.btnn').click(function() {
		$('#downloads').fadeIn();
		$('#dow').slideDown();
	});
	$('#closee').click(function() {
		$('#downloads').fadeOut();
		$('#dow').slideUp();
	});
	
	
	//登录注册
	$('#zhuce').click(function() {
		$('.box2').fadeIn(1000);
		$('.box').fadeOut(0);
	});
	$('#denglu').click(function() {
		$('.box').fadeIn(1000);
		$('.box2').fadeOut(0);
	});

	var oUser = document.getElementById('username');
	var oPwd = document.getElementById('password');
	var oBtn = document.getElementById('btn');
	oBtn.onclick = function() {
		var login = {
			'username': oUser.value,
			'password': oPwd.value
		};
		var dataJson = window.localStorage.getItem('list');
		var success = null;
		dataJson = eval('(' + dataJson + ')');
		for(var i = 0; i < dataJson.length; i++) {
			if(dataJson[i].username == login.username && dataJson[i].password == login.password) {
				alert('登陆成功');
				success = 1;
			}
		}
		if(success == null) {
			alert('用户名或密码错误');
		}
	}

	var ouser = document.getElementById('usernamer');
	var opass = document.getElementById('passwordr');
	var obtn = document.getElementById('btnr');
	obtn.onclick = function() {
		var puser = null;
		var ppass = null;
		if(ouser.value && opass.value) {
			if(window.localStorage.getItem('list')) {
				puser = {
					'username': ouser.value,
					'password': opass.value
				};
				var puserjson = window.localStorage.getItem('list');
				puserjson = eval('(' + puserjson + ')');
				for(var i = 0; i < puserjson.length; i++) {
					if(puserjson[i].username == puser.username) {
						alert('用户名重复');
						ppass = 1;
					}
				}
				if(ppass == null) {
					alert('注册成功');
					puserjson.push(puser);
					puserjson = JSON.stringify(puserjson);
					window.localStorage.setItem('list', puserjson);
				}
			} else {
				puser = {
					'username': ouser.value,
					'password': opass.value
				};
				var user = [];
				user.push(puser);
				user = JSON.stringify(user);
				window.localStorage.setItem('list', user);
				alert('注册成功');
			}
		}
	}

})