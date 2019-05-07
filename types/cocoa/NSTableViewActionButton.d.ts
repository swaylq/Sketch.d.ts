/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSTableViewActionButton<T0 = void, T1 = void, T2 = void> extends NSControl, NSAccessibilityButtonProtocol {
    isFlipped<R = boolean>(): R;
    layoutStateForBounds<R = unknown, P0 = CGRect>(_layoutStateForBounds: P0): R;
    wantsLayer<R = boolean>(): R;
    requiredSize<R = CGSize>(): R;
    setRequiredSize<R = void, P0 = CGSize>(_v: P0): R;
    rowAction<R = NSTableViewRowAction>(): R;
    setRowAction<R = void, P0 = NSTableViewRowAction>(_v: P0): R;
    alignment<R = number>(): R;
    setAlignment<R = void, P0 = number>(_v: P0): R;
    highlighted<R = boolean>(): R;
    setHighlighted<R = void, P0 = boolean>(_v: P0): R;
    backgroundColor<R = NSColor>(): R;
    setBackgroundColor<R = void, P0 = NSColor>(_v: P0): R;
    image<R = NSImage>(): R;
    setImage<R = void, P0 = NSImage>(_v: P0): R;
    title<R = NSString>(): R;
    setTitle<R = void, P0 = NSString>(_v: P0): R;
    debugDescription<R = NSString>(): R;
    description<R = NSString>(): R;
    hash<R = number>(): R;
    superclass<R = unknown>(): R;
  }
  namespace NSTableViewActionButton {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSControl, NSAccessibilityButtonProtocol {
      alloc<R = NSTableViewActionButton>(): R;
      new: <R = NSTableViewActionButton>() => R;
    }
  }
}

declare const NSTableViewActionButton: cocoa.NSTableViewActionButton.CLASS;
