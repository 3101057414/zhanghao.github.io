let password = "";
password  = prompt('请输入密码进入本网站' ,'');
if (password != 'mima') {
  alert('密码不正确');
  window.opener = null;
  window.close()
}