/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSGreySliders<T = any> extends cocoa.NSColorSpaceSliders {
    worksWhenModal<R = boolean>(): R;
    jumpSlider<R = void, P0 = unknown>(_jumpSlider: P0): R;
    setGreyButton5<R = void, P0 = unknown>(_setGreyButton5: P0): R;
    _configureGreyButton_index<R = void, P0 = unknown, P1 = number>(__configureGreyButton: P0, _index: P1): R;
    greyView<R = cocoa.NSView>(): R;
    setGreyView<R = void, P0 = cocoa.NSView>(_v: P0): R;
    greyButton4<R = unknown>(): R;
    setGreyButton4<R = void, P0 = unknown>(_v: P0): R;
    greyButton3<R = unknown>(): R;
    setGreyButton3<R = void, P0 = unknown>(_v: P0): R;
    greyButton2<R = unknown>(): R;
    setGreyButton2<R = void, P0 = unknown>(_v: P0): R;
    greyButton1<R = unknown>(): R;
    setGreyButton1<R = void, P0 = unknown>(_v: P0): R;
    greyButton0<R = unknown>(): R;
    setGreyButton0<R = void, P0 = unknown>(_v: P0): R;
  }
  namespace classes {
    export interface NSGreySliders<T = any> extends cocoa.classes.NSColorSpaceSliders {
      alloc<R = NSGreySliders>(): R;
      new: <R = NSGreySliders>() => R;
    }
  }
}

declare const NSGreySliders: cocoa.classes.NSGreySliders;
