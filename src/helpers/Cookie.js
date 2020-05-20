export const setCookie = (name, value, age) => {
    document.cookie = `${name}=${value};max-age=${age};path=/;domain=.rms-med.ru`;
};
