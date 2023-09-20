const usernameInput = document.getElementById('username');
        const passwordInput = document.getElementById('password');
        const usernameError = document.getElementById('usernameError');
        const passwordError = document.getElementById('passwordError');
        const submitBtn = document.getElementById('submitBtn');

        usernameInput.addEventListener('input', validateForm);
        passwordInput.addEventListener('input', validateForm);

        function validateForm() {
            const usernameValue = usernameInput.value.trim();
            const passwordValue = passwordInput.value.trim();

            if (usernameValue !== '' && passwordValue.length >= 4) {
                submitBtn.removeAttribute('disabled');
                usernameError.textContent = '';
                passwordError.textContent = '';
            } else {
                submitBtn.setAttribute('disabled', true);

                if (usernameValue === '') {
                    usernameError.textContent = 'Username is required.';
                } else {
                    usernameError.textContent = '';
                }

                if (passwordValue.length < 4) {
                    passwordError.textContent = 'Password must be at least 4 characters long.';
                } else {
                    passwordError.textContent = '';
                }
            }
        }