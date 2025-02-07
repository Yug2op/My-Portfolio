export const publicKey = String(import.meta.env.VITE_EMAILJS_PUBLIC_KEY);
const conf = {
    serviceId: String(import.meta.env.VITE_EMAILJS_SERVICE_ID),
    templateId: String(import.meta.env.VITE_EMAILJS_TEMPLATE_ID),
}

export default conf;