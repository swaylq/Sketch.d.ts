/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSPortalView2<T0 = void, T1 = void, T2 = void> extends NSView, NSPortalViewImplementationProtocol {
    absoluteGeometryChanged<R = void, P0 = unknown>(_absoluteGeometryChanged: P0): R;
    sourceViewNeedsDisplayInRect<R = void, P0 = unknown>(_sourceViewNeedsDisplayInRect: P0): R;
    sourceView<R = NSView>(): R;
    setSourceView<R = void, P0 = NSView>(_v: P0): R;
    debugDescription<R = NSString>(): R;
    description<R = NSString>(): R;
    hash<R = number>(): R;
    superclass<R = unknown>(): R;
  }
  namespace _NSPortalView2 {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSView, NSPortalViewImplementationProtocol {
      alloc<R = _NSPortalView2>(): R;
      new: <R = _NSPortalView2>() => R;
    }
  }
}
