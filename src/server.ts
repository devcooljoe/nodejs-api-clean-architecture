import app from './app';
import { AppDataSource } from './infrastructure/db/data-source';

const PORT = process.env.PORT || 8000;

AppDataSource.initialize()
    .then((_) => {
        console.log("📦 Database connected");
        app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`);
        });
    })
    .catch((err) => {
        console.error("❌ DB Connection failed:", err);
    });