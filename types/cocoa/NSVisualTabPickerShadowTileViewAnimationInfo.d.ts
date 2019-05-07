/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSVisualTabPickerShadowTileViewAnimationInfo<T0 = void, T1 = void, T2 = void> extends NSObject {
    animationKey<R = NSString>(): R;
  }
  namespace NSVisualTabPickerShadowTileViewAnimationInfo {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject {
      alloc<R = NSVisualTabPickerShadowTileViewAnimationInfo>(): R;
      new: <R = NSVisualTabPickerShadowTileViewAnimationInfo>() => R;
    }
  }
}

declare const NSVisualTabPickerShadowTileViewAnimationInfo: cocoa.NSVisualTabPickerShadowTileViewAnimationInfo.CLASS;
