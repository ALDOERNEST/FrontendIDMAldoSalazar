Feature: Login
    La página de inicio de sesión funcionará dependiendo de las credenciales del usuario.

    Scenario: Sucess Login
    Given que un navegador web está en la página de inicio de sesión de saucelabs
    When un usuario ingresa el nombre de usuario "standard_user", la contraseña "secret_sauce" y hace clic en el botón de inicio de sesión
    Then la URL contendrá el subdirectory
    Then agrego al carrito
    Then lleno Formulario