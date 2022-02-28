<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
  
    
</head>
<body>
    

    <h2>会員登録</h2>
    <h2>氏名</h2>
    <p>
        <input type="text" id =lastname>
        <input type="text" id =firstname>
    </p>
    <p id="error_name" class=" error"></p>

    <h3>Email</h3>
    <p>
        <input type="email" id ="email">
    </p>
        <p id ="error_name" id = "error"></p>
    

    <h3>パスワード</h3>
    <p>
        <input type="password" id = "password">
       
    </p>
    <p id ="error_password" class="error"></p>

    <p>
        <button onclick="regist()">登録</button>
    </p>
    <script src="js/array_abject.js"></script>
</body>
</html>