import { Service, Request } from "@sap/cds";
import { Logs } from "./logs-controller";
import cds from "@sap/cds"; // import default
module.exports = (logs: Service, next: any )=>{
    logs.on('READ', 'logs', async (req: Request) => {
        const logger = new Logs('teste-fiori-elements')
        await logger.create({message: 'mensagem', details: 'detalhes'})
         const result = await cds.run(req.query); // <--- aqui


        // 3️⃣ Retorna o resultado normal
        return result;
    })
}