/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSSimpleAttributeDictionary<T0 = void, T1 = void, T2 = void> extends NSDictionary {
    copyWithZone<R = unknown, P0 = _NSZone>(_copyWithZone: P0): R;
    mutableCopyWithZone<R = unknown, P0 = _NSZone>(_mutableCopyWithZone: P0): R;
    dealloc<R = void>(): R;
    keyEnumerator<R = unknown>(): R;
    objectForKey<R = unknown, P0 = unknown>(_objectForKey: P0): R;
    slotForKey<R = number, P0 = unknown>(_slotForKey: P0): R;
    count<R = number>(): R;
    newWithKey_object<R = unknown, P0 = unknown, P1 = unknown>(_newWithKey: P0, _object: P1): R;
  }
  namespace NSSimpleAttributeDictionary {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSDictionary {
      newWithDictionary<R = unknown, P0 = unknown>(_newWithDictionary: P0): R;
      emptyAttributeDictionary<R = unknown>(): R;
    }
  }
}

declare const NSSimpleAttributeDictionary: cocoa.NSSimpleAttributeDictionary.CLASS;
