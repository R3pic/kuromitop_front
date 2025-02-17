import {useEffect, useRef} from 'react';
import {useNavigate} from 'react-router';
import {getCookie} from '@/lib/cookie.ts';
import axiosInstance from '@/api/api.ts';

export default function AxiosInterceptor() {
  const navigate = useRef(useNavigate());

  useEffect(() => {
    const requestInterceptor = axiosInstance.interceptors.request.use(
      (config) => {
        const accessToken = getCookie('access_token');

        if (!accessToken) {
          navigate.current('/');
          return config;
        }

        config.headers['Content-Type'] = 'application/json';
        config.headers['Authorization'] = `Bearer ${accessToken}`;

        return config;
      },
      (error) => {
        console.log(error);
        return Promise.reject(error);
      },
    );

    const responseInterceptor = axiosInstance.interceptors.response.use(
      (res) => res,
      async (err) => {
        const res = err.response;
        console.error(err);

        if (res) {
          console.info("API Response", res);

          if (res.status === 401) {
            // 액세스 토큰 갱신 시도
            console.error("액세스 토큰이 만료되었습니다.");
            navigate.current('/');
          }

          if (res.status === 404) {
            navigate.current('/not-found');
          }

          if (res.status === 500) {
            navigate.current('/error');
          }
        }

        return res;
      });

    return () => {
      axiosInstance.interceptors.request.eject(requestInterceptor);
      axiosInstance.interceptors.response.eject(responseInterceptor);
    };
  }, []);
  return <></>;
}