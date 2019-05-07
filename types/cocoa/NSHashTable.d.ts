/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSHashTable<T0 = void, T1 = void, T2 = void> extends NSObject, NSCopyingProtocol, NSSecureCodingProtocol, NSFastEnumerationProtocol {
    mutableCopyWithZone<R = unknown, P0 = _NSZone>(_mutableCopyWithZone: P0): R;
    mutableSet<R = unknown>(): R;
    minusHashTable<R = void, P0 = unknown>(_minusHashTable: P0): R;
    unionHashTable<R = void, P0 = unknown>(_unionHashTable: P0): R;
    intersectHashTable<R = void, P0 = unknown>(_intersectHashTable: P0): R;
    isSubsetOfHashTable<R = boolean, P0 = unknown>(_isSubsetOfHashTable: P0): R;
    isEqualToHashTable<R = boolean, P0 = unknown>(_isEqualToHashTable: P0): R;
    intersectsHashTable<R = boolean, P0 = unknown>(_intersectsHashTable: P0): R;
    containsObject<R = boolean, P0 = unknown>(_containsObject: P0): R;
    removeAllObjects<R = void>(): R;
    removeObject<R = void, P0 = unknown>(_removeObject: P0): R;
    member<R = unknown, P0 = unknown>(_member: P0): R;
    initWithPointerFunctions_capacity<R = unknown, P0 = unknown, P1 = number>(_initWithPointerFunctions: P0, _capacity: P1): R;
    getKeys_count<R = void, P0 = void, P1 = number>(_getKeys: P0, _count: P1): R;
    removeAllItems<R = void>(): R;
    copy<R = unknown>(): R;
    removeItem<R = void, P0 = void>(_removeItem: P0): R;
    insertKnownAbsentItem<R = void, P0 = void>(_insertKnownAbsentItem: P0): R;
    addObject<R = void, P0 = unknown>(_addObject: P0): R;
    getItem<R = void, P0 = void>(_getItem: P0): R;
    weakCount<R = number>(): R;
    encodeWithCoder<R = void, P0 = unknown>(_encodeWithCoder: P0): R;
    objectEnumerator<R = unknown>(): R;
    description<R = unknown>(): R;
    initWithOptions_capacity<R = unknown, P0 = number, P1 = number>(_initWithOptions: P0, _capacity: P1): R;
    initWithCoder<R = unknown, P0 = unknown>(_initWithCoder: P0): R;
    setRepresentation<R = NSSet>(): R;
    anyObject<R = unknown>(): R;
    pointerFunctions<R = NSPointerFunctions>(): R;
    allObjects<R = NSArray>(): R;
    count<R = number>(): R;
  }
  namespace NSHashTable {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject, NSCopyingProtocol, NSSecureCodingProtocol, NSFastEnumerationProtocol {
      alloc<R = NSHashTable>(): R;
      new: <R = NSHashTable>() => R;
      hashTableWithOptions<R = unknown, P0 = number>(_hashTableWithOptions: P0): R;
      weakObjectsHashTable<R = unknown>(): R;
      hashTableWithWeakObjects<R = unknown>(): R;
      allocWithZone<R = unknown, P0 = _NSZone>(_allocWithZone: P0): R;
      alloc<R = unknown>(): R;
    }
  }
}

declare const NSHashTable: cocoa.NSHashTable.CLASS;
