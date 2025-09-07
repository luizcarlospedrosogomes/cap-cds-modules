
using { LogsService } from './logs-service';
@Capabilities.DeleteRestrictions.Deleteable: true
@Capabilities.UpdateRestrictions.Updatable: true
@Common.InitialLoad: true

annotate LogsService.logs with @(
    UI: { 
        LineItem: [
        { Value: name },
        { Value: details },
        { Value: createdBy },
        { Value: createdAt }
    ],
    SelectionFields: [ name, createdBy ]
    }
    
);
