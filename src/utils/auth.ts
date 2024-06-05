// // utils/auth.ts
// import Cookies from 'js-cookie';

// export const getAccessToken = () => Cookies.get('access_token');
// export const getRefreshToken = () => Cookies.get('refresh_token');

// // Fetch helper function with authentication
// export const fetchWithAuth = async (url: string, options?: RequestInit) => {
//     const accessToken = getAccessToken();

//     if (accessToken) {
//         options = {
//             ...options,
//             headers: {
//                 ...options?.headers,
//                 Authorization: `Bearer ${accessToken}`,
//             },
//         };
//     } 

//     const response = await fetch(url, options);

//     // Handle token refresh if needed
//     if (response.status === 401) {
//         const refreshToken = getRefreshToken();

//         if (refreshToken) {
//             // Make a request to your API to refresh the token
//             const refreshResponse = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/refresh`, {
//                 method: 'POST',
//                 headers: {
//                     'Content-Type': 'application/json',
//                 },
//                 body: JSON.stringify({ refreshToken }),
//             });

//             if (refreshResponse.ok) {
//                 const { accessToken, refreshToken, expires } = await refreshResponse.json();

//                 // Update the cookies with the new tokens
//                 const maxAge = expires * 24 * 60 * 60; // Convert expires (in days) to seconds
//                 Cookies.set('access_token', accessToken, { expires: maxAge });
//                 Cookies.set('refresh_token', refreshToken, { expires: maxAge });

//                 // Retry the original request with the new access token
//                 options.headers.Authorization = `Bearer ${accessToken}`;
//                 return fetch(url, options);
//             }
//         }
//     }

//     return response;
// };