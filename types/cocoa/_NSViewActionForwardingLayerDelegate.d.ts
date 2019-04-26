/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSViewActionForwardingLayerDelegate<T0 = void, T1 = void, T2 = void> extends NSObject, CABackdropLayerDelegateProtocol, CALayerDelegateProtocol {
    view<R = NSView>(): R;
  }
  namespace _NSViewActionForwardingLayerDelegate {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject, CABackdropLayerDelegateProtocol, CALayerDelegateProtocol {
      alloc<R = _NSViewActionForwardingLayerDelegate>(): R;
      new: <R = _NSViewActionForwardingLayerDelegate>() => R;
    }
  }
}
