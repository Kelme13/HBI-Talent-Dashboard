import { createPool } from "mysql2/promise";

export const pool = createPool({
    host: "44.202.106.102",
    port: "3306",
    user: "user",
    password: "Wu$hhUvrU!JYtvAnJ2f6Y%bqhMYAh&",
    database: "Tasks"
});

