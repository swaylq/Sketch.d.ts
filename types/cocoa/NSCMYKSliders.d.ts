/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSCMYKSliders<T0 = void, T1 = void, T2 = void> extends NSColorSpaceSliders {
    worksWhenModal<R = boolean>(): R;
    viewSizeChanged<R = void, P0 = unknown>(_viewSizeChanged: P0): R;
    cmykView<R = NSView>(): R;
    setCmykView<R = void, P0 = NSView>(_v: P0): R;
  }
  namespace NSCMYKSliders {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSColorSpaceSliders {
      alloc<R = NSCMYKSliders>(): R;
      new: <R = NSCMYKSliders>() => R;
    }
  }
}

declare const NSCMYKSliders: cocoa.NSCMYKSliders.CLASS;
