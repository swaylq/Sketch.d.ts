/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSTextViewBackingLayer<T = any> extends cocoa._NSViewBackingLayer {
    layerDidBecomeVisible<R = void, P0 = boolean>(_layerDidBecomeVisible: P0): R;
    setBounds<R = void, P0 = cocoa.CGRect>(_setBounds: P0): R;
    setDelegate<R = void, P0 = unknown>(_setDelegate: P0): R;
    _updateTextLayer<R = void>(): R;
    wantsTextLayer<R = boolean>(): R;
    setWantsTextLayer<R = void, P0 = boolean>(_v: P0): R;
  }
  namespace classes {
    export interface _NSTextViewBackingLayer<T = any> extends cocoa.classes._NSViewBackingLayer {  }
  }
}
