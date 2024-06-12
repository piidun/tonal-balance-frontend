// middleware/auth.ts
export default defineNuxtRouteMiddleware((to, from) => {
      const token = useCookie('token');
      if (token.value) {
        if (to.path === '/login') {
          return navigateTo('/');
        }
      } else {
        if (to.path !== '/login' && to.path !== '/register-account') {
          return navigateTo('/login');
        }
      }
  });
  