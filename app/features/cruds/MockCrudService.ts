/**An implementation of the ICrudService with an in memory array */
class MockCrudService<T extends { PK: number }> implements features.cruds.ICrudService<T>  {
    /**Create a new mock crud service
     * @params $q $Q service
     * @params table Initial mock data
     */
    constructor(private $q: ng.IQService, private table : T[]) {
    }
        
    /**Get all available entites */
    Get(): ng.IPromise<T[]> {
        return this.$q.resolve(this.table);
    }
        
    /**Append a new entity and returns the entity with the PK assigned */
    Post(Entity: T): ng.IPromise<T> {
        Entity.PK = this.table.length;
        this.table.push(Entity);
        return this.$q.resolve(Entity);
    }
        
    /**Update entities values */
    Put(PK: number, Entity: T): ng.IPromise<void> {
        for(var i = 0; i < this.table.length; i++ ) {
            if (this.table[i].PK == PK) {
                this.table[i] = Entity;
                return this.$q.resolve();
            }
        }
        return this.$q.reject("Entity not found");
    }
        
    /**Delete an entity */
    Delete(PK: number): ng.IPromise<void> {
        for(var i = 0; i < this.table.length; i++ ) {
            if (this.table[i].PK == PK){
                this.table.splice(i, 1);
                return this.$q.resolve();
            }
        }
        return this.$q.reject("Entity not found");
    }
}
export = MockCrudService;