const env = {
    production: process.env.NODE_ENV === 'production',
    google: {
        prod: process.env.REACT_APP_MAPS_API_KEY_PROD,
        dev: process.env.REACT_APP_MAPS_API_KEY_DEV
    }
};

export const googleMapsApiKey = env.production ? env.google.prod : env.google.dev;