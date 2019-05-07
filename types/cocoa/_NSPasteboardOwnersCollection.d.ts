/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSPasteboardOwnersCollection<T0 = void, T1 = void, T2 = void> extends NSObject {
    cxx_destruct<R = void>(): R;
    handleOwnershipChange<R = void>(): R;
    removeOwnerForTypeIdentifier_atIndex<R = void, P0 = unknown, P1 = number>(_removeOwnerForTypeIdentifier: P0, _atIndex: P1): R;
    setOwner_forTypeIdentifier_atIndex<R = void, P0 = unknown, P1 = unknown, P2 = number>(_setOwner: P0, _forTypeIdentifier: P1, _atIndex: P2): R;
    _incrementCountForOwner<R = void, P0 = unknown>(__incrementCountForOwner: P0): R;
    _decrementCountForOwner<R = void, P0 = unknown>(__decrementCountForOwner: P0): R;
    dealloc<R = void>(): R;
    initWithPasteboard<R = unknown, P0 = unknown>(_initWithPasteboard: P0): R;
  }
  namespace _NSPasteboardOwnersCollection {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject {
      alloc<R = _NSPasteboardOwnersCollection>(): R;
      new: <R = _NSPasteboardOwnersCollection>() => R;
    }
  }
}
