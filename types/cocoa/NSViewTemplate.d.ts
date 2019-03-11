/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSViewTemplate<T = any> extends cocoa.NSView {
    awakeAfterUsingCoder<R = unknown, P0 = unknown>(_awakeAfterUsingCoder: P0): R;
    createRealObject<R = unknown>(): R;
    setClassName<R = void, P0 = unknown>(_setClassName: P0): R;
    className<R = unknown>(): R;
    initWithView_className<R = unknown, P0 = unknown, P1 = unknown>(_initWithView: P0, _className: P1): R;
  }
  namespace classes {
    export interface NSViewTemplate<T = any> extends cocoa.classes.NSView {
      alloc<R = NSViewTemplate>(): R;
      new: <R = NSViewTemplate>() => R;
    }
  }
}

declare const NSViewTemplate: cocoa.classes.NSViewTemplate;
