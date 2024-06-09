// middleware/auth.ts
export default defineNuxtRouteMiddleware((to, from) => {
      const token = localStorage.getItem('token');
      if (token) {
        if (to.path === '/login') {
          return navigateTo('/');
        }
      } else {
        if (to.path !== '/login') {
          return navigateTo('/login');
        }
      }
  });
  