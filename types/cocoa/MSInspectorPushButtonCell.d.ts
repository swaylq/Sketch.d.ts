/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSInspectorPushButtonCell<T0 = void, T1 = void, T2 = void> extends NSButtonCell {
    namedButtonColor<R = unknown>(): R;
    buttonHighlightedColor<R = NSColor>(): R;
    buttonOnColor<R = NSColor>(): R;
  }
  namespace MSInspectorPushButtonCell {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSButtonCell {
      alloc<R = MSInspectorPushButtonCell>(): R;
      new: <R = MSInspectorPushButtonCell>() => R;
    }
  }
}

declare const MSInspectorPushButtonCell: cocoa.MSInspectorPushButtonCell.CLASS;
