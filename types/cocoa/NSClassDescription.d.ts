/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSClassDescription<T0 = void, T1 = void, T2 = void> extends NSObject {
    inverseForRelationshipKey<R = unknown, P0 = unknown>(_inverseForRelationshipKey: P0): R;
    validateValue_forKey<R = unknown, P0 = unknown, P1 = unknown>(_validateValue: P0, _forKey: P1): R;
    ownsDestinationObjectsForRelationshipKey<R = boolean, P0 = unknown>(_ownsDestinationObjectsForRelationshipKey: P0): R;
    entityName<R = unknown>(): R;
    displayNameForKey<R = unknown, P0 = unknown>(_displayNameForKey: P0): R;
    classPropertyKeys<R = unknown>(): R;
    classDescriptionForKeyPath<R = unknown, P0 = unknown>(_classDescriptionForKeyPath: P0): R;
    classDescriptionForDestinationKey<R = unknown, P0 = unknown>(_classDescriptionForDestinationKey: P0): R;
    allToOneRelationshipKeys<R = unknown>(): R;
    allToManyRelationshipKeys<R = unknown>(): R;
    allAttributeKeys<R = unknown>(): R;
    toManyRelationshipKeys<R = NSArray>(): R;
    toOneRelationshipKeys<R = NSArray>(): R;
    attributeKeys<R = NSArray>(): R;
  }
  namespace NSClassDescription {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject {
      alloc<R = NSClassDescription>(): R;
      new: <R = NSClassDescription>() => R;
      classDescriptionForClass<R = unknown, P0 = unknown>(_classDescriptionForClass: P0): R;
      invalidateClassDescriptionCache<R = void>(): R;
      registerClassDescription_forClass<R = void, P0 = unknown, P1 = unknown>(_registerClassDescription: P0, _forClass: P1): R;
      setClassDelegate<R = void, P0 = unknown>(_setClassDelegate: P0): R;
      classDelegate<R = unknown>(): R;
    }
  }
}

declare const NSClassDescription: cocoa.NSClassDescription.CLASS;
