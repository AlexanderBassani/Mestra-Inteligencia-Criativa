<?php

if (isset($_POST['EMAIL']) && !empty($_POST['EMAIL'])) {
    $nome = addslashes($_POST['NOME']);
    $telefone = addslashes($_POST['TELEFONE']);
    $email = addslashes($_POST['EMAIL']);
    $empresa = addslashes($_POST['EMPRESA']);
}

$to = 'alexanderba09@gmail.com';
$subject = 'teste email';
$body = "Nome:" . $nome . '\r\n' .
    "Telefone:" . $telefone . '\r\n' .
    "Email:" . $email . '\r\n' .
    "Empresa:" . $empresa;

$header = "From:alexanderba09@outlook.com" . '\r\n' .
    "Reply-To:" . $email . '\e\n' .
    "X=Mailer:PHP/" . phpversion();

if (mail($to, $subject, $body, $header)) {
    echo 'sucesso';
} else {
    echo $_POST['NOME'];
}
