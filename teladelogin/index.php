<?php
include_once 'includes/header.php'
?>

<div id="login-container">
    <h1>Login</h1>
    <form action="php_action/login.php" method="POST">
        <label for="email">E-mail</label>
        <input type="email" name="email" id="email" placeholder="Digite seu e-mail" autocomplete="off">
        <label for="senha">Senha</label>
        <input type="password" name="senha" id="password" placeholder="Digite sua senha">
        <a href="" id="forgot-pass"> Esqueceu a senha?</a>
        <input type="submit" name="btn-login" value="Login">
    </form>
<div id="social-container">
        <p style="margin-bottom: 15px;">Ou entre pelas suas redes sociais</p>
        <i class="fa fa-facebook-f"></i>
        <i class="fa fa-linkedin"></i>
</div>
<div id="register-container">
        <p>Ainda não tem uma conta?</p>
        <a href="#">Registrar</a>
</div>
</div>

<?php
include_once 'includes/footer.php'
?>
