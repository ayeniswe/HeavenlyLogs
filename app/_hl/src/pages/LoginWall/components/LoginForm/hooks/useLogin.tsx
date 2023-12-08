import { useEffect, useState } from 'react';
import { post } from '../../../../../lib/fetch';
import { ROUTE } from '../../../../../api/route';
import { setError } from '../../../../../utils/errors';

export const useLogin = () => {
  const [detail, setDetail] = useState('');
  const [loading, setLoading] = useState(false);
  const [show, setShow] = useState(false);

  useEffect(() => {
    /**
     * Handles the login submission.
     */
    const handleLogin = (): void => {
      const form = document.getElementById('login-form') as HTMLFormElement;
      form.addEventListener("submit", function(event) {
        setLoading(true);
        event.preventDefault();
        const formData = new FormData(form);
        const json = Object.fromEntries(formData);
        post(ROUTE.LOGIN, json).then((data) => {
          setError(data, setDetail);
          setLoading(false);
        });
      });
    }
    handleLogin();
  }, []);

  /**
   * Toggles the visibility of the password input field.
   */
  const showPassword = () => {
    const input = document.getElementById('password') as HTMLInputElement;
    if (input.type === 'password') {
      input.type = 'text';
      input.alt = 'show password';
      setShow(true);
    } else {
      input.type = 'password';
      input.alt = 'hide password';
      setShow(false);
    }
  }

  return {
    detail,
    loading,
    show,
    showPassword,
  };
}