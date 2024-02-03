namespace model.logs;
using { managed  } from '@sap/cds/common';

    entity logs : managed {
       key id: UUID;
        name: String(40);
        details: String;

}