/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSCGSDisplay<T0 = void, T1 = void, T2 = void> extends NSObject {
    description<R = unknown>(): R;
    dealloc<R = void>(): R;
    initWithDisplayID_flipOffset<R = unknown, P0 = number, P1 = number>(_initWithDisplayID: P0, _flipOffset: P1): R;
    colorSpace<R = CGColorSpace>(): R;
    UUID<R = NSUUID>(): R;
    maxHDRValue<R = number>(): R;
    devicePixelCounts<R = CGSize>(): R;
    backingPixelsPerPoint<R = number>(): R;
    depth<R = number>(): R;
    frame<R = CGRect>(): R;
    displayID<R = number>(): R;
  }
  namespace NSCGSDisplay {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject {
      alloc<R = NSCGSDisplay>(): R;
      new: <R = NSCGSDisplay>() => R;
      displaysWillChange<R = boolean>(): R;
      updateSeeds<R = boolean>(): R;
      uniqueDisplays<R = unknown>(): R;
      changeSeed<R = number>(): R;
      flipOffset<R = number>(): R;
      addColorSpaceChangedHandler<R = void, P0 = CDUnknownBlockType>(_addColorSpaceChangedHandler: P0): R;
      addMaximumHDRValueChangedHandler<R = void, P0 = CDUnknownBlockType>(_addMaximumHDRValueChangedHandler: P0): R;
      addAcceleratorChangedHandler<R = void, P0 = CDUnknownBlockType>(_addAcceleratorChangedHandler: P0): R;
      addDisplayChangedHandler<R = void, P0 = CDUnknownBlockType>(_addDisplayChangedHandler: P0): R;
    }
  }
}

declare const NSCGSDisplay: cocoa.NSCGSDisplay.CLASS;
