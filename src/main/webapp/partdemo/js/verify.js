//////////////////////注册与登录验证开始////////////////////////////////////////
$(document).ready(function() {
	$('#btn-submit').click(function() {
		//手机号码
		var isMobile = /^(13[0-9]|14[0-9]|15[0-9]|17[0-9]|18[0-9])[0-9]{8}$/;
		if ($("#phone-number").val() == "") {
			layer.open({
				content: '手机号码不能为空',
				time: 1.5
			});
			return false;
		}
		if ($('#phone-number').val() != "" && $('#phone-number').val().length < 11) {
			layer.open({
				content: '请输入11位的手机号码',
				time: 1.5
			});
			return false;
		}
		if (!isMobile.test($("#phone-number").val())) {
			layer.open({
				content: '你输入的不是手机号码，请重输',
				time: 1.5
			});
			return false;
		}
		//短信验证码
		if ($("#verification-code").val() == "") {
			layer.open({
				content: '短信验证码不能为空',
				time: 1.5
			});
			return false;
		}
		if ($("#verification-code").val() != "" && $("#verification-code").val().length < 4) {
			layer.open({
				content: '请输入4位短信验证码',
				time: 1.5
			});
		}
		
		//密码	
		if ($("#pwd").val() == "") {
			layer.open({
				content: '登录密码不能为空',
				time: 1.5
			});
			return false;
		}
		if ($("#pwd").val() != "" && $("#pwd").val().length < 6) {
			layer.open({
				content: '请输入6位以上的登录密码',
				time: 1.5
			});
			return false;
		}
		if ($("#re-pwd").val() == "") {
			layer.open({
				content: '请再次输入密码',
				time: 1.5
			});
			return false;
		}
		alert("sadfd");
		//服务协议
		if ($("#checkbox-agree-agreement").is(':checked') == false && $("#checkbox-agree-agreement").val() == "on") {
			layer.open({
				content: '请阅读并同意勾选值得投服务协议',
				time: 1.5
			});
			return false;
		}
	});
	/*
	$('#clear-phone-number').click(function() {
		$("#phone-number").val("");
	});
	$('#clear-pwd').click(function() {
		$("#pwd").val("");
	});
	*/
	//图形验证码
	$("#verification-code-2").blur(function() {
		if ($(this).val().length < 4) {
			layer.open({
				content: '请输入4位图形验证码',
				time: 1.5
			});
			$('#btn-submit').attr('disabled', "true");
			return false;
		} else {
			$('#btn-submit').removeAttr('disabled');
			return true;
		}
	});


	//验证二次密码
	$("#re-pwd").blur(function() {
		if ($(this).val() != "") {
			if ($(this).val() != $("#pwd").val()) {
				layer.open({
					content: '两次密码输入不一样，请重新输入',
					time: 1.5
				});
				$('#btn-submit').attr('disabled', "true");
				return false;
			} else {
				$('#btn-submit').removeAttr('disabled');
				return true;
			}
		}
	});
	//提建议
	$("#btn-submit-suggest").click(function() {
		if ($("#suggest-content").val() == "") {
			layer.open({
				content: '内容不能为空',
				time: 1.5
			});
			return false;
		}
	});
});