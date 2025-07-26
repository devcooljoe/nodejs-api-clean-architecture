import env from './config/env';
import { appDataSource } from './infrastructure/db/DataSource';
import app from './main';

const PORT = env.PORT || 8000;

appDataSource.initialize()
    .then((_) => {
        console.log("Database connected");
        app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`);
        });
    })
    .catch((err) => {
        console.error("DB Connection failed:", err);
    });