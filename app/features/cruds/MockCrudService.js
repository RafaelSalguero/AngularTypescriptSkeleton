define(["require", "exports"], function (require, exports) {
    /**An implementation of the ICrudService with an in memory array */
    var MockCrudService = (function () {
        /**Create a new mock crud service
         * @params $q $Q service
         * @params table Initial mock data
         */
        function MockCrudService($q, table) {
            this.$q = $q;
            this.table = table;
        }
        /**Get all available entites */
        MockCrudService.prototype.Get = function () {
            return this.$q.resolve(this.table);
        };
        /**Append a new entity and returns the entity with the PK assigned */
        MockCrudService.prototype.Post = function (Entity) {
            Entity.PK = this.table.length;
            this.table.push(Entity);
            return this.$q.resolve(Entity);
        };
        /**Update entities values */
        MockCrudService.prototype.Put = function (PK, Entity) {
            for (var i in this.table) {
                if (this.table[i].PK == PK) {
                    this.table[i] = Entity;
                    return this.$q.resolve();
                }
            }
            return this.$q.reject("Entity not found");
        };
        /**Delete an entity */
        MockCrudService.prototype.Delete = function (PK) {
            for (var i in this.table) {
                if (this.table[i].PK == PK) {
                    this.table.splice(i, 1);
                    return this.$q.resolve();
                }
            }
            return this.$q.reject("Entity not found");
        };
        return MockCrudService;
    })();
    return MockCrudService;
});
