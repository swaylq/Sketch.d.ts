/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSControllerConfigurationBinder<T0 = void, T1 = void, T2 = void> extends NSBinder {
    controller_didChangeToFilterPredicate<R = void, P0 = unknown, P1 = unknown>(_controller: P0, _didChangeToFilterPredicate: P1): R;
    controller_didChangeToSortDescriptors<R = void, P0 = unknown, P1 = unknown>(_controller: P0, _didChangeToSortDescriptors: P1): R;
    controller_didChangeToSelectionIndexPaths<R = void, P0 = unknown, P1 = unknown>(_controller: P0, _didChangeToSelectionIndexPaths: P1): R;
    controller_didChangeToSelectionIndexes<R = void, P0 = unknown, P1 = unknown>(_controller: P0, _didChangeToSelectionIndexes: P1): R;
    _updateSelectionIndexPaths<R = void, P0 = unknown>(__updateSelectionIndexPaths: P0): R;
    _updateSelectionIndexes<R = void, P0 = unknown>(__updateSelectionIndexes: P0): R;
    _updateSortDescriptors<R = void, P0 = unknown>(__updateSortDescriptors: P0): R;
    _updateFilterPredicate<R = void, P0 = unknown>(__updateFilterPredicate: P0): R;
  }
  namespace NSControllerConfigurationBinder {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSBinder {
      alloc<R = NSControllerConfigurationBinder>(): R;
      new: <R = NSControllerConfigurationBinder>() => R;
    }
  }
}

declare const NSControllerConfigurationBinder: cocoa.NSControllerConfigurationBinder.CLASS;
