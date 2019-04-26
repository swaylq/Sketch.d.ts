/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSRenderPreparer<T0 = void, T1 = void, T2 = void> extends NSObject {
    cxx_destruct<R = void>(): R;
    prepareDocument<R = void, P0 = unknown>(_prepareDocument: P0): R;
    document<R = MSImmutableDocumentData>(): R;
    setDocument<R = void, P0 = MSImmutableDocumentData>(_v: P0): R;
    layerStack<R = BCAtomicStack>(): R;
    setLayerStack<R = void, P0 = BCAtomicStack>(_v: P0): R;
    operationQueue<R = NSOperationQueue>(): R;
    setOperationQueue<R = void, P0 = NSOperationQueue>(_v: P0): R;
  }
  namespace MSRenderPreparer {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject {
      alloc<R = MSRenderPreparer>(): R;
      new: <R = MSRenderPreparer>() => R;
    }
  }
}

declare const MSRenderPreparer: cocoa.MSRenderPreparer.CLASS;
