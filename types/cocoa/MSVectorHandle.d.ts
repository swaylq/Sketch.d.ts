/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSVectorHandle<T0 = void, T1 = void, T2 = void> extends NSObject {
    drawingSize<R = CGSize>(): R;
    imageName<R = unknown>(): R;
    drawAtProposedPoint_inView<R = void, P0 = CGPoint, P1 = unknown>(_drawAtProposedPoint: P0, _inView: P1): R;
    state<R = number>(): R;
    setState<R = void, P0 = number>(_v: P0): R;
  }
  namespace MSVectorHandle {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject {
      alloc<R = MSVectorHandle>(): R;
      new: <R = MSVectorHandle>() => R;
    }
  }
}

declare const MSVectorHandle: cocoa.MSVectorHandle.CLASS;
