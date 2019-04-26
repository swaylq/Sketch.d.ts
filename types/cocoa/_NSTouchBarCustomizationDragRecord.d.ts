/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSTouchBarCustomizationDragRecord<T0 = void, T1 = void, T2 = void> extends NSObject {
    postReplacementInsertionIndexPath<R = NSIndexPath>(): R;
    setPostReplacementInsertionIndexPath<R = void, P0 = NSIndexPath>(_v: P0): R;
  }
  namespace _NSTouchBarCustomizationDragRecord {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject {
      alloc<R = _NSTouchBarCustomizationDragRecord>(): R;
      new: <R = _NSTouchBarCustomizationDragRecord>() => R;
    }
  }
}
