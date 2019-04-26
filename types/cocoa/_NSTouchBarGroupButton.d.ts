/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSTouchBarGroupButton<T0 = void, T1 = void, T2 = void> extends NSButton {
    setTitle<R = void, P0 = unknown>(_setTitle: P0): R;
    _widthForTitle_compressedImage<R = number, P0 = unknown, P1 = boolean>(__widthForTitle: P0, _compressedImage: P1): R;
    updateConstraintConstants<R = void>(): R;
    useShortTitle<R = void>(): R;
    useFullTitle<R = void>(): R;
    fitsShortTitle<R = boolean>(): R;
    fitsFullTitle<R = boolean>(): R;
    compressedImagePosition<R = number>(): R;
    setCompressedImagePosition<R = void, P0 = number>(_v: P0): R;
    defaultImagePosition<R = number>(): R;
    setDefaultImagePosition<R = void, P0 = number>(_v: P0): R;
    isAlertButton<R = boolean>(): R;
    setIsAlertButton<R = void, P0 = boolean>(_v: P0): R;
    preferredWidth<R = number>(): R;
    setPreferredWidth<R = void, P0 = number>(_v: P0): R;
  }
  namespace _NSTouchBarGroupButton {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSButton {
      alloc<R = _NSTouchBarGroupButton>(): R;
      new: <R = _NSTouchBarGroupButton>() => R;
      longTitleForString<R = unknown, P0 = unknown>(_longTitleForString: P0): R;
      shortTitleForString<R = unknown, P0 = unknown>(_shortTitleForString: P0): R;
    }
  }
}
