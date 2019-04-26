/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSArrayChanges<T0 = void, T1 = void, T2 = void> extends NSMutableArray, NSCopyingProtocol {
    addChange<R = void, P0 = unknown>(_addChange: P0): R;
    enumerateChanges_usingBlock<R = void, P0 = number, P1 = CDUnknownBlockType>(_enumerateChanges: P0, _usingBlock: P1): R;
    enumerateChangesUsingBlock<R = void, P0 = CDUnknownBlockType>(_enumerateChangesUsingBlock: P0): R;
    encodeWithCoder<R = void, P0 = unknown>(_encodeWithCoder: P0): R;
    initWithCoder<R = unknown, P0 = unknown>(_initWithCoder: P0): R;
    _toManyPropertyType<R = number>(): R;
    _isToManyChangeInformation<R = boolean>(): R;
    applyChangesToArray<R = void, P0 = unknown>(_applyChangesToArray: P0): R;
    insertObject_atIndex<R = void, P0 = unknown, P1 = number>(_insertObject: P0, _atIndex: P1): R;
    removeObjectAtIndex<R = void, P0 = number>(_removeObjectAtIndex: P0): R;
    moveObjectAtIndex_toIndex<R = void, P0 = number, P1 = number>(_moveObjectAtIndex: P0, _toIndex: P1): R;
    replaceObjectAtIndex_withObject<R = void, P0 = number, P1 = unknown>(_replaceObjectAtIndex: P0, _withObject: P1): R;
    updateObject_atIndex<R = void, P0 = unknown, P1 = number>(_updateObject: P0, _atIndex: P1): R;
    addChanges<R = void, P0 = unknown>(_addChanges: P0): R;
    exchangeObjectAtIndex_withObjectAtIndex<R = void, P0 = number, P1 = number>(_exchangeObjectAtIndex: P0, _withObjectAtIndex: P1): R;
    moveObjectsAtIndexes_toIndex<R = void, P0 = unknown, P1 = number>(_moveObjectsAtIndexes: P0, _toIndex: P1): R;
    sortUsingSelector<R = void, P0 = string>(_sortUsingSelector: P0): R;
    sortUsingFunction_context<R = void, P0 = CDUnknownFunctionPointerType, P1 = void>(_sortUsingFunction: P0, _context: P1): R;
    removeLastObject<R = void>(): R;
    addObject<R = void, P0 = unknown>(_addObject: P0): R;
    changeCount<R = number>(): R;
  }
  namespace NSArrayChanges {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSMutableArray, NSCopyingProtocol {
      allocWithZone<R = unknown, P0 = _NSZone>(_allocWithZone: P0): R;
    }
  }
}

declare const NSArrayChanges: cocoa.NSArrayChanges.CLASS;
