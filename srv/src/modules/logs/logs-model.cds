namespace model.logs;
using { managed  } from '@sap/cds/common';

    entity logs  {
       key id: UUID;
        name: String(40);
        details: String;
        createdBy: String(240);
        createdAt: DateTime;

}