import { Service, Request } from "@sap/cds/apis/services";

module.exports = (logs: Service)=>{
    logs.on('READ', 'logs', async (req: Request) => {
        console.log('read logs')
    })
}