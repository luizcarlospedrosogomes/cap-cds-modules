using model.logs as modelLogs from './logs-model';

@path:'/logs-service'
service LogsService {
    entity logs as projection on modelLogs.logs;
}