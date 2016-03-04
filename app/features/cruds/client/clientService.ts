import app = require('main/app');
import Mock = require('features/cruds/MockCrudService');

class ClientService extends Mock<models.Client>  {
    constructor($q : ng.IQService){
        super($q, [
            { PK : 0, Name : "Rafa", Age: 22 },
            { PK : 1, Name : "Alejandra", Age: 21 },
            { PK : 2, Name : "Jose Luis", Age: 22 },
        ])
        
    }    
}

app.service(ClientService);
export = ClientService;