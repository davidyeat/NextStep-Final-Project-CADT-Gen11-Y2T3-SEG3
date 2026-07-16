import { FundingType, Provider, Scholarship, University, User } from "../models/index.js";
import errorHandler from "../middlewares/errorMiddleware.js";

const favoriteConfig = {
    university: { model: University },
    scholarship: { model: Scholarship },
};

const getConfig = (type) => favoriteConfig[type];

export async function getFavorites(req, res) {
    try {
        const user = await User.findByPk(req.user.userId, {
            attributes: [],
            include: [
                {
                    model: University,
                    attributes: ["universityId", "campusName", "shortName", "type", "city", "province", "logoUrl", "coverImageUrl"],
                    through: { attributes: [] },
                },
                {
                    model: Scholarship,
                    attributes: ["scholarshipId", "title", "studyIn", "degreeLevel", "applicationDeadline", "coverImage"],
                    through: { attributes: [] },
                    include: [
                        { model: FundingType, attributes: ["name"] },
                        { model: Provider, attributes: ["providerLogo"] },
                    ],
                },
            ],
        });

        return res.status(200).json({
            universities: user?.Universities ?? [],
            scholarships: user?.Scholarships ?? [],
        });
    } catch (error) {
        errorHandler(error, req, res);
    }
}

export async function addFavorite(req, res) {
    try {
        const config = getConfig(req.params.type);
        if (!config) return res.status(400).json({ message: "Unsupported favorite type." });

        const user = await User.findByPk(req.user.userId);
        const item = await config.model.findByPk(req.params.id);
        if (!item) return res.status(404).json({ message: "Saved item not found." });

        await user[`add${req.params.type === "university" ? "University" : "Scholarship"}`](item);
        return res.status(201).json({ message: "Item saved successfully." });
    } catch (error) {
        errorHandler(error, req, res);
    }
}

export async function removeFavorite(req, res) {
    try {
        const config = getConfig(req.params.type);
        if (!config) return res.status(400).json({ message: "Unsupported favorite type." });

        const user = await User.findByPk(req.user.userId);
        const item = await config.model.findByPk(req.params.id);
        if (!item) return res.status(404).json({ message: "Saved item not found." });

        await user[`remove${req.params.type === "university" ? "University" : "Scholarship"}`](item);
        return res.status(204).send();
    } catch (error) {
        errorHandler(error, req, res);
    }
}
