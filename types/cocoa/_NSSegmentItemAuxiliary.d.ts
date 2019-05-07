/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSSegmentItemAuxiliary<T0 = void, T1 = void, T2 = void> extends NSObject {
    dealloc<R = void>(): R;
    segmentItemView<R = NSSegmentItemView>(): R;
    setSegmentItemView<R = void, P0 = NSSegmentItemView>(_v: P0): R;
    index<R = number>(): R;
    setIndex<R = void, P0 = number>(_v: P0): R;
  }
  namespace _NSSegmentItemAuxiliary {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject {
      alloc<R = _NSSegmentItemAuxiliary>(): R;
      new: <R = _NSSegmentItemAuxiliary>() => R;
    }
  }
}
