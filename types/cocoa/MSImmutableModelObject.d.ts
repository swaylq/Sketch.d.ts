/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSImmutableModelObject<T0 = void, T1 = void, T2 = void> extends MSModelObjectCommon, MSModelObjectProtocol, MSCodingProtocol {
    migrationsInList<R = unknown, P0 = string>(_migrationsInList: P0): R;
    migrationListForClass<R = string, P0 = unknown>(_migrationListForClass: P0): R;
    allocateMigrationListForClass<R = string, P0 = unknown>(_allocateMigrationListForClass: P0): R;
    decodePropertiesWithUnarchiver<R = void, P0 = unknown>(_decodePropertiesWithUnarchiver: P0): R;
    performMigrationsWithUnarchiver_migratingFrom_toVersion<R = void, P0 = unknown, P1 = number, P2 = number>(_performMigrationsWithUnarchiver: P0, _migratingFrom: P1, _toVersion: P2): R;
    enumerateMigrations_fromVersion_toVersion_block<R = void, P0 = string, P1 = number, P2 = number, P3 = CDUnknownBlockType>(_enumerateMigrations: P0, _fromVersion: P1, _toVersion: P2, _block: P3): R;
    performInitWithUnarchiver<R = void, P0 = unknown>(_performInitWithUnarchiver: P0): R;
    initWithUnarchiver_decodeBlock<R = unknown, P0 = unknown, P1 = CDUnknownBlockType>(_initWithUnarchiver: P0, _decodeBlock: P1): R;
    replacementObjectForJSONEncoder<R = unknown, P0 = unknown>(_replacementObjectForJSONEncoder: P0): R;
    encodeAsJSON<R = void, P0 = unknown>(_encodeAsJSON: P0): R;
    encodeObjectIDWithCoder<R = void, P0 = unknown>(_encodeObjectIDWithCoder: P0): R;
    encodeWithCoder<R = void, P0 = unknown>(_encodeWithCoder: P0): R;
    encodePropertiesWithCoder<R = void, P0 = unknown>(_encodePropertiesWithCoder: P0): R;
    keysDifferingFromObject<R = unknown, P0 = unknown>(_keysDifferingFromObject: P0): R;
    isEqualForDiffToObject<R = boolean, P0 = unknown>(_isEqualForDiffToObject: P0): R;
    copyWithZone<R = unknown, P0 = _NSZone>(_copyWithZone: P0): R;
    performInitWithMutableModelObject<R = void, P0 = unknown>(_performInitWithMutableModelObject: P0): R;
    initWithMutableModelObject<R = unknown, P0 = unknown>(_initWithMutableModelObject: P0): R;
    newMutableCounterpart<R = unknown>(): R;
    shouldDiffSubObjectsForDifferingObject<R = boolean, P0 = unknown>(_shouldDiffSubObjectsForDifferingObject: P0): R;
    differsFromObject<R = boolean, P0 = unknown>(_differsFromObject: P0): R;
    overlayRectForAncestors_document<R = CGRect, P0 = unknown, P1 = unknown>(_overlayRectForAncestors: P0, _document: P1): R;
    influenceRectForAncestors_document<R = CGRect, P0 = unknown, P1 = unknown>(_influenceRectForAncestors: P0, _document: P1): R;
    subObjectsForTreeDiff<R = NSArray>(): R;
    archiveReferenceIdentifier_bc<R = NSString>(): R;
    debugDescription<R = NSString>(): R;
    description<R = NSString>(): R;
    hash<R = number>(): R;
    objectID<R = NSString>(): R;
    superclass<R = unknown>(): R;
  }
  namespace MSImmutableModelObject {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends MSModelObjectCommon, MSModelObjectProtocol, MSCodingProtocol {
      alloc<R = MSImmutableModelObject>(): R;
      new: <R = MSImmutableModelObject>() => R;
      traitsForPropertyName<R = number, P0 = unknown>(_traitsForPropertyName: P0): R;
      mutableClass<R = unknown>(): R;
    }
  }
}

declare const MSImmutableModelObject: cocoa.MSImmutableModelObject.CLASS;
