
import {Router} from "express"
import {parseCSV, parseJSON, parseTXT, parseXML, parseYAML} from '../../parser.js';

const router = Router();

/**
 * @openapi
 * /parseCSV:
 *   post:
 *     summary: Retrieve parsed CSV file.
 *     description: Retrieve parsed CSV file.
 *     requestBody:
 *      description: Provide name of the file to parse
 *      required: false
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            properties:
 *              filename:
 *                type: string
 *     responses:
 *       200:
 *         description: Parsed file successfully.
 *       404:
 *         description: File does not exist.
 */
router.post("/parseCSV", async (req, res) => {
    const csv = await parseCSV(req.body.filename)
        .catch((error) => {
            res.status(404).send({"error": error});
        });
    if (csv && csv.length) {    
        const csvParsed = [];
        for (let i = 1; i < csv.length; i++) {
            const object = {};
            for (let j = 0; j < csv[0].length; j++) {
                object[csv[0][j]] = csv[i][j];
            }
            csvParsed.push(object);
        }
        res.send({"csv": csvParsed});
    }
})

/**
 * @openapi
 * /parseJSON:
 *   post:
 *     summary: Retrieve parsed JSON file.
 *     description: Retrieve parsed JSON file.
 *     requestBody:
 *      description: Provide name of the file to parse
 *      required: false
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            properties:
 *              filename:
 *                type: string
 *     responses:
 *       200:
 *         description: Parsed file successfully.
 *       404:
 *         description: File does not exist.
 */
router.post("/parseJSON", async (req, res) => {
    const json = await parseJSON(req.body.filename)
        .catch((error) => {
            res.status(404).send({"error": error});
        });
    if (json) res.send({"json": json});
})

/**
 * @openapi
 * /parseXML:
 *   post:
 *     summary: Retrieve parsed XML file.
 *     description: Retrieve parsed XML file.
 *     requestBody:
 *      description: Provide name of the file to parse
 *      required: false
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            properties:
 *              filename:
 *                type: string
 *     responses:
 *       200:
 *         description: Parsed file successfully.
 *       404:
 *         description: File does not exist.
 */
router.post("/parseXML", (req, res) => {
    const xml = parseXML(req.body.filename);
    if (xml.err) {
        res.status(404).send({"err": xml.err});
    } else {
        res.send({"xml": xml});
    }
})

/**
 * @openapi
 * /parseYAML:
 *   post:
 *     summary: Retrieve parsed YAML file.
 *     description: Retrieve parsed YAML file.
 *     requestBody:
 *      description: Provide name of the file to parse
 *      required: false
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            properties:
 *              filename:
 *                type: string
 *     responses:
 *       200:
 *         description: Parsed file successfully.
 *       404:
 *         description: File does not exist.
 */
router.post("/parseYAML", async (req, res) => {
    const yaml = await parseYAML(req.body.filename);
    if (yaml.err) {
        res.status(404).send({"err": yaml.err});
    } else {
        res.send({"yaml": yaml});
    }
})

/**
 * @openapi
 * /parseTXT:
 *   post:
 *     summary: Retrieve parsed TXT file.
 *     description: Retrieve parsed TXT file.
 *     requestBody:
 *      description: Provide name of the file to parse
 *      required: false
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            properties:
 *              filename:
 *                type: string
 *     responses:
 *       200:
 *         description: Parsed file successfully.
 *       404:
 *         description: File does not exist.
 */
router.post("/parseTXT", (req, res) => {
    const txt = parseTXT(req.body.filename);
    if (txt.err) {
        res.status(404).send({"err": txt.err});
    } else {
        res.send({"txt": txt});
    }
})

export default router;