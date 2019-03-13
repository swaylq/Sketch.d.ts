/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSTableRowSwipeVelocityFilter<T = any> extends _NS1DVelocityFilter {
    filteredVelocity<R = number>(): R;
  }
  namespace classes {
    export interface _NSTableRowSwipeVelocityFilter<T = any> extends _NS1DVelocityFilter {
      alloc<R = _NSTableRowSwipeVelocityFilter>(): R;
      new: <R = _NSTableRowSwipeVelocityFilter>() => R;
    }
  }
}