/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSTableRowSwipeVelocityFilter<T0 = void, T1 = void, T2 = void> extends _NS1DVelocityFilter {
    filteredVelocity<R = number>(): R;
  }
  namespace _NSTableRowSwipeVelocityFilter {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends _NS1DVelocityFilter {
      alloc<R = _NSTableRowSwipeVelocityFilter>(): R;
      new: <R = _NSTableRowSwipeVelocityFilter>() => R;
    }
  }
}
