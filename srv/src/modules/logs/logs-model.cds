using { managed  } from '@sap/cds/common';

service LogsService {

    entity logs : managed {
       key id: UUID;
        name: String(40);
        details: String;
    }
}