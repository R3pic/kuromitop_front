import { Cookies } from 'react-cookie';

const cookies = new Cookies();

export function getCookie(name: string): string | undefined {
  return cookies.get(name);
}

export function setCookie(name: string, value: string) {
  cookies.set(name, value, {
    maxAge: 60 * 60 * 3,
    path: '/',
  });
};

export function removeCookie(name: string) {
  cookies.remove(name, {
    path: '/',
  });
}