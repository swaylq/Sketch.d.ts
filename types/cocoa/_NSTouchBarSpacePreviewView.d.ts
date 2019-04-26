/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSTouchBarSpacePreviewView<T0 = void, T1 = void, T2 = void> extends NSView {
    wantsUpdateLayer<R = boolean>(): R;
  }
  namespace _NSTouchBarSpacePreviewView {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSView {
      alloc<R = _NSTouchBarSpacePreviewView>(): R;
      new: <R = _NSTouchBarSpacePreviewView>() => R;
    }
  }
}
