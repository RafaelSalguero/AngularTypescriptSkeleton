var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", 'main/app', 'features/cruds/MockCrudService'], function (require, exports, app, Mock) {
    var ClientService = (function (_super) {
        __extends(ClientService, _super);
        function ClientService($q) {
            _super.call(this, $q, [
                { PK: 0, Name: "Rafa", Age: 22 },
                { PK: 1, Name: "Alejandra", Age: 21 },
                { PK: 2, Name: "Jose Luis", Age: 22 },
            ]);
        }
        return ClientService;
    })(Mock);
    app.service(ClientService);
    return ClientService;
});
