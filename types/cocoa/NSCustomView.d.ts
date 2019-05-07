/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSCustomView<T0 = void, T1 = void, T2 = void> extends NSView {
    setClassName<R = void, P0 = unknown>(_setClassName: P0): R;
    className<R = unknown>(): R;
    nibInstantiateWithObjectInstantiator<R = unknown, P0 = unknown>(_nibInstantiateWithObjectInstantiator: P0): R;
    _descendantIsConstrainedByConstraint<R = boolean, P0 = unknown>(__descendantIsConstrainedByConstraint: P0): R;
    _setAsClipViewDocumentViewIfNeeded<R = void>(): R;
  }
  namespace NSCustomView {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSView {
      alloc<R = NSCustomView>(): R;
      new: <R = NSCustomView>() => R;
    }
  }
}

declare const NSCustomView: cocoa.NSCustomView.CLASS;
