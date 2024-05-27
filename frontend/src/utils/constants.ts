export const frontendUrl = import.meta.env.VITE_FRONTEND_URL;
export const backendUrl = import.meta.env.VITE_BACKEND_URL;
export const mocking_enabled =
  parseInt(import.meta.env.VITE_MOCKING_ENABLED) ?? 0;
