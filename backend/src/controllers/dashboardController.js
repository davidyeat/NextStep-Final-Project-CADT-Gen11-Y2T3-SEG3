import { countDashboardEntities } from "../repositories/dashboardRepository.js";
import errorHandler from "../middlewares/errorMiddleware.js";

export const getDashboardStats = async (req, res) => {
    try {
        const stats = await countDashboardEntities();
        res.status(200).json(stats);
    } catch (err) {
        errorHandler(err, req, res);
    }
}
