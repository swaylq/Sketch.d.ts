/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSSetChanges<T0 = void, T1 = void, T2 = void> extends NSMutableSet, NSCopyingProtocol, NSFastEnumerationProtocol {
    enumerateChanges_usingBlock<R = void, P0 = number, P1 = CDUnknownBlockType>(_enumerateChanges: P0, _usingBlock: P1): R;
    enumerateChangesUsingBlock<R = void, P0 = CDUnknownBlockType>(_enumerateChangesUsingBlock: P0): R;
    addChange<R = void, P0 = unknown>(_addChange: P0): R;
    _toManyPropertyType<R = number>(): R;
    _isToManyChangeInformation<R = boolean>(): R;
    applyChangesToSet<R = void, P0 = unknown>(_applyChangesToSet: P0): R;
    removeObject<R = void, P0 = unknown>(_removeObject: P0): R;
    addObject<R = void, P0 = unknown>(_addObject: P0): R;
    changeCount<R = number>(): R;
  }
  namespace NSSetChanges {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSMutableSet, NSCopyingProtocol, NSFastEnumerationProtocol {
      allocWithZone<R = unknown, P0 = _NSZone>(_allocWithZone: P0): R;
    }
  }
}

declare const NSSetChanges: cocoa.NSSetChanges.CLASS;
