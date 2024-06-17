// middleware/auth.ts
export default defineNuxtRouteMiddleware((to, from) => {
      const token = useCookie('token');
      if (token.value) {
        if (to.path === '/login') {
          return navigateTo('/about');
        }

        if (to.path === '/') {
          return navigateTo('/process');
        }
      } else {
        if (to.path !== '/login' && to.path !== '/register-account' && to.path !== '/') {
          return navigateTo('/login');
        }
      }
  });
  