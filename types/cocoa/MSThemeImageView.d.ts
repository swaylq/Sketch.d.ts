/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSThemeImageView<T0 = void, T1 = void, T2 = void> extends NSImageView {
    cxx_destruct<R = void>(): R;
    setThemedImage<R = void>(): R;
    imageName<R = NSString>(): R;
    setImageName<R = void, P0 = NSString>(_v: P0): R;
  }
  namespace MSThemeImageView {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSImageView {
      alloc<R = MSThemeImageView>(): R;
      new: <R = MSThemeImageView>() => R;
    }
  }
}

declare const MSThemeImageView: cocoa.MSThemeImageView.CLASS;
