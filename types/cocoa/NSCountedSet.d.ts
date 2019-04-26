/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSCountedSet<T0 = void, T1 = void, T2 = void> extends NSMutableSet {
    dealloc<R = void>(): R;
    initWithSet<R = unknown, P0 = unknown>(_initWithSet: P0): R;
    initWithArray<R = unknown, P0 = unknown>(_initWithArray: P0): R;
    initWithSet_copyItems<R = unknown, P0 = unknown, P1 = boolean>(_initWithSet: P0, _copyItems: P1): R;
    initWithObjects_count<R = unknown, P0 = unknown, P1 = number>(_initWithObjects: P0, _count: P1): R;
    initWithCapacity<R = unknown, P0 = number>(_initWithCapacity: P0): R;
    init<R = unknown>(): R;
    countForObject<R = number, P0 = unknown>(_countForObject: P0): R;
    classForCoder<R = unknown>(): R;
    descriptionWithLocale<R = unknown, P0 = unknown>(_descriptionWithLocale: P0): R;
    initWithCoder<R = unknown, P0 = unknown>(_initWithCoder: P0): R;
    encodeWithCoder<R = void, P0 = unknown>(_encodeWithCoder: P0): R;
    getObjects_count<R = void, P0 = unknown, P1 = number>(_getObjects: P0, _count: P1): R;
    countByEnumeratingWithState_objects_count<R = number, P0 = unknown, P1 = unknown, P2 = number>(_countByEnumeratingWithState: P0, _objects: P1, _count: P2): R;
    mutableCopyWithZone<R = unknown, P0 = _NSZone>(_mutableCopyWithZone: P0): R;
    copyWithZone<R = unknown, P0 = _NSZone>(_copyWithZone: P0): R;
    removeObject<R = void, P0 = unknown>(_removeObject: P0): R;
    addObject<R = void, P0 = unknown>(_addObject: P0): R;
    objectEnumerator<R = unknown>(): R;
    member<R = unknown, P0 = unknown>(_member: P0): R;
    count<R = number>(): R;
  }
  namespace NSCountedSet {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSMutableSet {
      supportsSecureCoding<R = boolean>(): R;
    }
  }
}

declare const NSCountedSet: cocoa.NSCountedSet.CLASS;
