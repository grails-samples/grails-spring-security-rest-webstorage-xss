<!doctype html>
<html>
<head>
    <meta name="layout" content="main"/>
    <title>Welcome to Grails</title>
    <asset:link rel="icon" href="favicon.ico" type="image/x-ico" />
    <style type="text/css">
    #logoutForm li, #loginForm li {
        list-style-type: none;
    }
</style>
</head>
<body>
    <div id="content" role="main">

        <hr/>

        <div id="loginForm" style="display: none;">
            <ol>
                <li>
                    <label for="username">Username: </label>
                    <input type="text" name="username" id="username">
                </li>
                <li>
                    <label for="username">Password: </label>
                    <input type="text" name="password" id="password">
                </li>
                <li><input type="submit" id="submitLogin" value="Login"/> </li>
            </ol>
        </div>

        <hr/>

        <div id="logoutForm" style="display: none;">
            <ol>

                <li><input type="text" id="loggedAs" disabled="disabled" /><input type="submit" value="Logout"/> </li>
            </ol>
        </div>



        <hr/>

        <ul id="announcements"></ul>

    </div>

    <script type="application/javascript">



    </script>

</body>
</html>
