using model.logs as modelLogs from './logs-model';

@path:'/logs-service'
service LogsService {
    @Capabilities.DeleteRestrictions.Deleteable: true
    @Capabilities.UpdateRestrictions.Updatable: true
    @Capabilities.InsertRestrictions.Insertable: true

    entity logs as projection on modelLogs.logs;
      
annotate LogsService.logs with @(
    UI: { 
        LineItem: [
        { Value: id },
        { Value: name },
        { Value: details },
        { Value: createdBy },
        { Value: createdAt }
    ],
    SelectionFields: [ name, createdBy ]
    }
    
);
}