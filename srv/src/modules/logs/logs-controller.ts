import cds from '@sap/cds';
import { LogsCreate } from './logs.entities'

const logger = cds.log('logs-controller');

export class Logs{
    name: string;
    process: string;
    app:string;
    type:string;

    constructor(name:string, app?:string , process?: string){
        this.name = name;
        this.app = app || '';
        this.process = process || '';
        this.type = 'E'
    }

    create = async (log:LogsCreate) => {
        log = {name: this.name, app: this.app, type: this.type, process: this.process, createdBy: 'chapolim', createdAt: new Date(),    ...log}
        try {
            //await INSERT(log).into("model.logs.logs");
            const db = await cds.connect.to('db'); // conexão separada
            const tx = db.transaction();             // transação isolada
            await tx.run(INSERT.into("model.logs.logs").entries(log));  // ✅ usar tx.run, não db.run
            await tx.commit();
        } catch (error) {
            logger.error(error)
        }
    }
}
