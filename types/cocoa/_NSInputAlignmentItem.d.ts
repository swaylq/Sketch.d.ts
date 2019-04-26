/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSInputAlignmentItem<T0 = void, T1 = void, T2 = void> extends NSObject {
    _updateRepresentativeGuides<R = void>(): R;
    dealloc<R = void>(): R;
  }
  namespace _NSInputAlignmentItem {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject {
      alloc<R = _NSInputAlignmentItem>(): R;
      new: <R = _NSInputAlignmentItem>() => R;
    }
  }
}
