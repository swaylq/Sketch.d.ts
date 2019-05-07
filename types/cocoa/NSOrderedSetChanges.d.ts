/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSOrderedSetChanges<T0 = void, T1 = void, T2 = void> extends NSMutableOrderedSet, NSCopyingProtocol {
    addChange<R = void, P0 = unknown>(_addChange: P0): R;
    enumerateChanges_usingBlock<R = void, P0 = number, P1 = CDUnknownBlockType>(_enumerateChanges: P0, _usingBlock: P1): R;
    enumerateChangesUsingBlock<R = void, P0 = CDUnknownBlockType>(_enumerateChangesUsingBlock: P0): R;
    encodeWithCoder<R = void, P0 = unknown>(_encodeWithCoder: P0): R;
    initWithCoder<R = unknown, P0 = unknown>(_initWithCoder: P0): R;
    _toManyPropertyType<R = number>(): R;
    _isToManyChangeInformation<R = boolean>(): R;
    addChanges<R = void, P0 = unknown>(_addChanges: P0): R;
    moveObjectsAtIndexes_toIndex<R = void, P0 = unknown, P1 = number>(_moveObjectsAtIndexes: P0, _toIndex: P1): R;
    exchangeObjectAtIndex_withObjectAtIndex<R = void, P0 = number, P1 = number>(_exchangeObjectAtIndex: P0, _withObjectAtIndex: P1): R;
    applyChangesToOrderedSet<R = void, P0 = unknown>(_applyChangesToOrderedSet: P0): R;
    updateObject_atIndex<R = void, P0 = unknown, P1 = number>(_updateObject: P0, _atIndex: P1): R;
    moveObjectAtIndex_toIndex<R = void, P0 = number, P1 = number>(_moveObjectAtIndex: P0, _toIndex: P1): R;
    replaceObjectAtIndex_withObject<R = void, P0 = number, P1 = unknown>(_replaceObjectAtIndex: P0, _withObject: P1): R;
    removeObjectAtIndex<R = void, P0 = number>(_removeObjectAtIndex: P0): R;
    insertObject_atIndex<R = void, P0 = unknown, P1 = number>(_insertObject: P0, _atIndex: P1): R;
    changeCount<R = number>(): R;
  }
  namespace NSOrderedSetChanges {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSMutableOrderedSet, NSCopyingProtocol {
      allocWithZone<R = unknown, P0 = _NSZone>(_allocWithZone: P0): R;
    }
  }
}

declare const NSOrderedSetChanges: cocoa.NSOrderedSetChanges.CLASS;
