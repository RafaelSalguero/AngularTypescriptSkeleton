declare module features.cruds{
    /** Expose REST methods for a crud service*/
    interface ICrudService<T> {
        /**Get all available entites */
        Get() : ng.IPromise<T[]>;
        
        /**Append a new entity and returns the entity with the PK assigned */
        Post(Entity : T) : ng.IPromise<T>;
        
        /**Update entities values */
        Put(PK : number, Entity : T) : ng.IPromise<void>;
        
        /**Delete an entity */
        Delete(PK : number) : ng.IPromise<void>;
        
    }
}
