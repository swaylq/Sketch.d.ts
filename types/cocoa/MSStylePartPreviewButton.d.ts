/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSStylePartPreviewButton<T0 = void, T1 = void, T2 = void> extends MSInspectorButton {
    cxx_destruct<R = void>(): R;
    contentRect<R = CGRect>(): R;
    drawButton<R = void>(): R;
    dragOwner<R = unknown>(): R;
    setDragOwner<R = void, P0 = unknown>(_v: P0): R;
    delegate<R = MSStylePartPreviewButtonDelegate>(): R;
    setDelegate<R = void, P0 = MSStylePartPreviewButtonDelegate>(_v: P0): R;
    color<R = NSColor>(): R;
    setColor<R = void, P0 = NSColor>(_v: P0): R;
    stylePart<R = MSStylePart>(): R;
    setStylePart<R = void, P0 = MSStylePart>(_v: P0): R;
  }
  namespace MSStylePartPreviewButton {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends MSInspectorButton {
      alloc<R = MSStylePartPreviewButton>(): R;
      new: <R = MSStylePartPreviewButton>() => R;
    }
  }
}

declare const MSStylePartPreviewButton: cocoa.MSStylePartPreviewButton.CLASS;
