/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSTintedImages<T0 = void, T1 = void, T2 = void> extends NSObject {
    cxx_destruct<R = void>(): R;
    lockImageWhenNodeIsSelected_active<R = unknown, P0 = boolean, P1 = boolean>(_lockImageWhenNodeIsSelected: P0, _active: P1): R;
    pressedLockImageWhenNodeIsSelected<R = unknown, P0 = boolean>(_pressedLockImageWhenNodeIsSelected: P0): R;
    pressedHideImageWhenNodeIsSelected<R = unknown, P0 = boolean>(_pressedHideImageWhenNodeIsSelected: P0): R;
    hideImageWhenNodeIsSelected_active<R = unknown, P0 = boolean, P1 = boolean>(_hideImageWhenNodeIsSelected: P0, _active: P1): R;
    initWithTheme<R = unknown, P0 = unknown>(_initWithTheme: P0): R;
    flowOtherPageImage<R = NSImage>(): R;
    flowBackImage<R = NSImage>(): R;
    pressedSelectedLockImage<R = NSImage>(): R;
    pressedLockImage<R = NSImage>(): R;
    unselectedLockImage<R = NSImage>(): R;
    selectedInactiveLockImage<R = NSImage>(): R;
    selectedActiveLockImage<R = NSImage>(): R;
    pressedSelectedHideImage<R = NSImage>(): R;
    pressedHideImage<R = NSImage>(): R;
    unselectedHideImage<R = NSImage>(): R;
    selectedInactiveHideImage<R = NSImage>(): R;
    selectedActiveHideImage<R = NSImage>(): R;
    sidebarExpandPageListImage<R = NSImage>(): R;
    sidebarCollapsePageListImage<R = NSImage>(): R;
    sidebarAddPageImage<R = NSImage>(): R;
  }
  namespace MSTintedImages {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject {
      alloc<R = MSTintedImages>(): R;
      new: <R = MSTintedImages>() => R;
    }
  }
}

declare const MSTintedImages: cocoa.MSTintedImages.CLASS;
