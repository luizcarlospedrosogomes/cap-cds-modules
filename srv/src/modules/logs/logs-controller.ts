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
        log = {name: this.name, app: this.app, type: this.type, process: this.process,  ...log}
        try {
            await INSERT(log).into("model.logs.logs");
    
        } catch (error) {
            logger.error(error)
        }
    }
}
