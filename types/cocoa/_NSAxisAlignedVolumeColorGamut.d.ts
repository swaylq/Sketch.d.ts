/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSAxisAlignedVolumeColorGamut<T0 = void, T1 = void, T2 = void> extends NSColorGamut {
    volume<R = number>(): R;
    isInfinite<R = boolean>(): R;
    isEmpty<R = boolean>(): R;
  }
  namespace _NSAxisAlignedVolumeColorGamut {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSColorGamut {
      alloc<R = _NSAxisAlignedVolumeColorGamut>(): R;
      new: <R = _NSAxisAlignedVolumeColorGamut>() => R;
    }
  }
}
