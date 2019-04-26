/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSFileDragSource<T0 = void, T1 = void, T2 = void> extends NSObject {}
  namespace NSFileDragSource {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject {
      alloc<R = NSFileDragSource>(): R;
      new: <R = NSFileDragSource>() => R;
      draggingSourceOperationMaskForLocal<R = number, P0 = boolean>(_draggingSourceOperationMaskForLocal: P0): R;
    }
  }
}

declare const NSFileDragSource: cocoa.NSFileDragSource.CLASS;
