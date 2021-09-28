export const setCookie = (name: string, value: string): void => {
    const encodedName = encodeURIComponent(name);
    const encodedValue = encodeURIComponent(value);
    const cookie = [`${encodedName}=${encodedValue}`];

    document.cookie = cookie.join('; ');
}

export const getCookie = (name: string): string | null => {
    const items = document.cookie
        .split(';')
        .map(item => item.trim());

    for (let i = 0; i < items.length; i++) {
        const data = items[i].split('=');

        if (data[0] === name) {
            return data[1];
        }
    }

    return null;
}
