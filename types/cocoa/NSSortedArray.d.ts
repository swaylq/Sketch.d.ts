/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSSortedArray<T0 = void, T1 = void, T2 = void> extends NSMutableArray {
    sortUsingSelector<R = void, P0 = string>(_sortUsingSelector: P0): R;
    sortUsingFunction_context<R = void, P0 = CDUnknownFunctionPointerType, P1 = void>(_sortUsingFunction: P0, _context: P1): R;
    setArray<R = void, P0 = unknown>(_setArray: P0): R;
    removeObjectAtIndex<R = void, P0 = number>(_removeObjectAtIndex: P0): R;
    insertObject_atIndex<R = void, P0 = unknown, P1 = number>(_insertObject: P0, _atIndex: P1): R;
    removeLastObject<R = void>(): R;
    replaceObjectAtIndex_withObject<R = void, P0 = number, P1 = unknown>(_replaceObjectAtIndex: P0, _withObject: P1): R;
    addObject<R = void, P0 = unknown>(_addObject: P0): R;
    objectAtIndex<R = unknown, P0 = number>(_objectAtIndex: P0): R;
    count<R = number>(): R;
    _insertObjectInSortOrder<R = void, P0 = unknown>(__insertObjectInSortOrder: P0): R;
    dealloc<R = void>(): R;
    conformsToProtocol<R = boolean, P0 = unknown>(_conformsToProtocol: P0): R;
    initWithCoder<R = unknown, P0 = unknown>(_initWithCoder: P0): R;
    encodeWithCoder<R = void, P0 = unknown>(_encodeWithCoder: P0): R;
    mutableCopyWithZone<R = unknown, P0 = _NSZone>(_mutableCopyWithZone: P0): R;
    initWithArray<R = unknown, P0 = unknown>(_initWithArray: P0): R;
    initWithArray_copyItems<R = unknown, P0 = unknown, P1 = boolean>(_initWithArray: P0, _copyItems: P1): R;
    initWithObjects<R = unknown, P0 = unknown>(_initWithObjects: P0): R;
    initWithObjects_count<R = unknown, P0 = unknown, P1 = number>(_initWithObjects: P0, _count: P1): R;
    initWithCapacity<R = unknown, P0 = number>(_initWithCapacity: P0): R;
    init<R = unknown>(): R;
    initWithCompareSelector<R = unknown, P0 = string>(_initWithCompareSelector: P0): R;
    initWithCapacity_compareSelector<R = unknown, P0 = number, P1 = string>(_initWithCapacity: P0, _compareSelector: P1): R;
    compareSelector<R = string>(): R;
    setCompareSelector<R = void, P0 = string>(_v: P0): R;
  }
  namespace NSSortedArray {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSMutableArray {
      initialize<R = void>(): R;
    }
  }
}

declare const NSSortedArray: cocoa.NSSortedArray.CLASS;
