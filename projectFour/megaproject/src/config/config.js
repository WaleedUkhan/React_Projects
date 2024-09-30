const config = {
    appWriteURL : String(import.meta.env.VITE_APP_APPWIRTE_URL),
    appWriteProjectID : String(import.meta.env.VITE_APP_APPWIRTE_PROJECT_ID),
    appWriteDbID : String(import.meta.env.VITE_APP_APPWIRTE_DATABASE_ID),
    appWriteCollectionID : String(import.meta.env.VITE_APP_APPWIRTE_COLLECTION_ID),
    appWriteBucketID : String(import.meta.env.VITE_APP_APPWIRTE_BUCKET_ID),
};

export default config;