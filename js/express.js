var express = require('express'); //express js을 이용하기 위하여
var app = express();
const fs = require('fs'); //html파일을 읽어오기 위해서
var path = require('path');

var Realm = require('realm'); //realm을 이용하기 위해서!

/*저의 realm db 스키마 모양입니다.
단순히 유저정보만 담고 있으면 되었기 때문에 스키마 한개만 만들었습니다.
*/
const UserSchema = {
  name : 'User',
  primaryKey : 'id',
  properties: {
    id : 'string',
    name : 'string',
    passwd : 'string',
  }
};

var id;
var pwd;

app.get('/', function(req, res) { //제일 처음 나오는 페이지
  fs.readFile('btm.html', function(error, data) { //html파일을 읽어와서 웹페이지에 띄워준다.
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end(data);
  });
  console.log(req.name);
});

app.get('/Jmember', function(req, res){ //회원가입버튼을 눌렀을때 나오는 페이지
  console.log('join membership!');
  fs.readFile('join_membership.html', function(error, data){
    res.writeHead(200, {'Content-Type': 'text/html'}); //join_membership.html을 띄운다.
    res.end(data);
  })
});

app.get('/addDatabase', function(req, res){ //회원가입창에서 회원가입버튼을 눌렀을때 나오는 페이지
  fs.readFile('btm.html', function(error, data){
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end(data);
  });

  var name = req.query.name;
  var id = req.query.id;
  var passwd = req.query.password;

//사용자가 join_membership.html에서 입력한 정보를 realm에 넣는다.
  Realm.open({ //이용자가 입력한 정보를 realm에 넣는다.
    path:'loginRealm.realm',
    schema : [UserSchema],
  }).then(realm=>{
    console.log('password is : ' + req.query.id);
    realm.write(()=>{
      realm.create('User', {
        id : `${id}`,
        name : `${name}`,
        passwd :  `${passwd}`,
      });
    });
  });

  console.log('add database finsh');
})

app.get('/button', function(req, res){ //로그인 버튼을 눌렀을때 나오는 페이지
  console.log('button!');
  console.log(req.query.password);

  id = req.query.name;
  pwd = req.query.password;

  Realm.open({
    path : 'loginRealm.realm',
    schema : [UserSchema],
  }).then(realm=>{
    let login = realm.objects('User');
    console.log(id, pwd);
    let login_check = login.filtered(`id='${id}' AND passwd ='${pwd}'`); //입력한 정보가 db에 있는 사용자인지 확인한다
    if(JSON.stringify(login_check) == JSON.stringify({}))
    { //db에 없는 사용자라면
      fs.readFile('btm.html', function(error, data) { //처음페이지로 돌아가서 다시 로그인을 시도하게 한다
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.end(data);
      });
      console.log('you are not user');
    }
    else
    { //db에 있는 사용자라면 after_login이라는 웹페이지로 연결한다.
      fs.readFile('bsi.html', function(error, data) {
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.end(data);
      });
      console.log('login check! : ' + JSON.stringify(login_check));
    }
  }).catch(error=>{
    console.log(error);
  })

})

app.listen(8080, function() {
  console.log('example server bounding~');
});