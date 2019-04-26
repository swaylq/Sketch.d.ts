/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSMapTable<T0 = void, T1 = void, T2 = void> extends NSObject, NSCopyingProtocol, NSSecureCodingProtocol, NSFastEnumerationProtocol {
    mutableCopyWithZone<R = unknown, P0 = _NSZone>(_mutableCopyWithZone: P0): R;
    dictionaryRepresentation<R = unknown>(): R;
    mutableDictionary<R = unknown>(): R;
    removeAllObjects<R = void>(): R;
    getKeys_values<R = number, P0 = void, P1 = void>(_getKeys: P0, _values: P1): R;
    mapMember_originalKey_value<R = boolean, P0 = void, P1 = void, P2 = void>(_mapMember: P0, _originalKey: P1, _value: P2): R;
    enumerator<R = unknown>(): R;
    removeAllItems<R = void>(): R;
    allValues<R = unknown>(): R;
    allKeys<R = unknown>(): R;
    replaceItem_forExistingKey<R = void, P0 = void, P1 = void>(_replaceItem: P0, _forExistingKey: P1): R;
    existingItemForSetItem_forAbsentKey<R = void, P0 = void, P1 = void>(_existingItemForSetItem: P0, _forAbsentKey: P1): R;
    setItem_forKnownAbsentKey<R = void, P0 = void, P1 = void>(_setItem: P0, _forKnownAbsentKey: P1): R;
    setItem_forAbsentKey<R = void, P0 = void, P1 = void>(_setItem: P0, _forAbsentKey: P1): R;
    setItem_forKey<R = void, P0 = void, P1 = void>(_setItem: P0, _forKey: P1): R;
    removeObjectForKey<R = void, P0 = unknown>(_removeObjectForKey: P0): R;
    setObject_forKey<R = void, P0 = unknown, P1 = unknown>(_setObject: P0, _forKey: P1): R;
    objectForKey<R = unknown, P0 = unknown>(_objectForKey: P0): R;
    copy<R = unknown>(): R;
    objectEnumerator<R = unknown>(): R;
    keyEnumerator<R = unknown>(): R;
    __capacity<R = number>(): R;
    encodeWithCoder<R = void, P0 = unknown>(_encodeWithCoder: P0): R;
    description<R = unknown>(): R;
    initWithKeyPointerFunctions_valuePointerFunctions_capacity<R = unknown, P0 = unknown, P1 = unknown, P2 = number>(_initWithKeyPointerFunctions: P0, _valuePointerFunctions: P1, _capacity: P2): R;
    initWithKeyOptions_valueOptions_capacity<R = unknown, P0 = number, P1 = number, P2 = number>(_initWithKeyOptions: P0, _valueOptions: P1, _capacity: P2): R;
    initWithCoder<R = unknown, P0 = unknown>(_initWithCoder: P0): R;
    valuePointerFunctions<R = NSPointerFunctions>(): R;
    keyPointerFunctions<R = NSPointerFunctions>(): R;
    count<R = number>(): R;
    // + NSMapTable(UIElementChildCacheExtension): 
    _flushChildCache<R = void, P0 = unknown>(__flushChildCache: P0): R;
  }
  namespace NSMapTable {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject, NSCopyingProtocol, NSSecureCodingProtocol, NSFastEnumerationProtocol {
      alloc<R = NSMapTable>(): R;
      new: <R = NSMapTable>() => R;
      weakToWeakObjectsMapTable<R = unknown>(): R;
      strongToWeakObjectsMapTable<R = unknown>(): R;
      weakToStrongObjectsMapTable<R = unknown>(): R;
      strongToStrongObjectsMapTable<R = unknown>(): R;
      mapTableWithWeakToWeakObjects<R = unknown>(): R;
      mapTableWithStrongToWeakObjects<R = unknown>(): R;
      mapTableWithWeakToStrongObjects<R = unknown>(): R;
      mapTableWithStrongToStrongObjects<R = unknown>(): R;
      mapTableWithKeyOptions_valueOptions<R = unknown, P0 = number, P1 = number>(_mapTableWithKeyOptions: P0, _valueOptions: P1): R;
      allocWithZone<R = unknown, P0 = _NSZone>(_allocWithZone: P0): R;
      alloc<R = unknown>(): R;
  
  }
  }
}

declare const NSMapTable: cocoa.NSMapTable.CLASS;
