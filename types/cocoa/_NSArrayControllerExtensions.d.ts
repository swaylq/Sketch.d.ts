/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSArrayControllerExtensions<T0 = void, T1 = void, T2 = void> extends NSObject {
    observeValueForKeyPath_ofObject_change_context<R = void, P0 = unknown, P1 = unknown, P2 = unknown, P3 = void>(_observeValueForKeyPath: P0, _ofObject: P1, _change: P2, _context: P3): R;
    _stopRearrangementObservingForSuppressedContentObjects<R = void>(): R;
    _startRearrangementObservingForSuppressedContentObjects<R = void, P0 = unknown>(__startRearrangementObservingForSuppressedContentObjects: P0): R;
    _filterPredicate<R = unknown>(): R;
    _setFilterPredicate<R = unknown, P0 = unknown>(__setFilterPredicate: P0): R;
    _setFilterPredicateNoCopy<R = void, P0 = unknown>(__setFilterPredicateNoCopy: P0): R;
    _sortDescriptors<R = unknown>(): R;
    _setSortDescriptors<R = unknown, P0 = unknown>(__setSortDescriptors: P0): R;
    _setSortDescriptorsNoCopy<R = void, P0 = unknown>(__setSortDescriptorsNoCopy: P0): R;
    _automaticRearrangementKeyPaths<R = unknown>(): R;
    _setAutomaticRearrangementKeyPaths<R = unknown, P0 = unknown>(__setAutomaticRearrangementKeyPaths: P0): R;
    dealloc<R = void>(): R;
    initWithController<R = unknown, P0 = unknown>(_initWithController: P0): R;
  }
  namespace _NSArrayControllerExtensions {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject {
      alloc<R = _NSArrayControllerExtensions>(): R;
      new: <R = _NSArrayControllerExtensions>() => R;
    }
  }
}
