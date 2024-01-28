### install        
    - npm install
    - npm run build   - gerar arquivos /gen        
### deploy base de dados hana
    - cds deploy --profile production
#### swagger
    /$api-docs
## Test
 - cds deploy
 - npm run test
 - npm run jest -- --watchAll --silent --forceExit --detectOpenHandles  --maxWorkers=1
 

#### desempenho app
    /status ou http://localhost:4004/status 
