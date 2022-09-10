import {Router} from "express"
const router = Router();

/**
 * @openapi
 * /movies:
 *   post:
 *     summary: Add new movie.
 *     description: Add new movie.
 *     requestBody:
 *      description: Optional description in Markdown
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            properties:
 *              name:
 *                type: string
 *              year:
 *                type: integer
 *     responses:
 *       200:
 *         description: Addes new movie.
 *       403:
 *         description: Access forbidden.
 */
router.post('/movies', (req, res) => {
    if (Math.random() >= 0.5) {
        res.send({message: "posted"});
    } else {
        res.status(403).send({message: "Forbidden"});
    }
})

export default router;