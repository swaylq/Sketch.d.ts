/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSWelcomeCollectionImageView<T0 = void, T1 = void, T2 = void> extends NSImageView {
    imageInterpolation<R = number>(): R;
    setImageInterpolation<R = void, P0 = number>(_v: P0): R;
    doubleClickAction<R = string>(): R;
    setDoubleClickAction<R = void, P0 = string>(_v: P0): R;
    selected<R = boolean>(): R;
    setSelected<R = void, P0 = boolean>(_v: P0): R;
  }
  namespace MSWelcomeCollectionImageView {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSImageView {
      alloc<R = MSWelcomeCollectionImageView>(): R;
      new: <R = MSWelcomeCollectionImageView>() => R;
    }
  }
}

declare const MSWelcomeCollectionImageView: cocoa.MSWelcomeCollectionImageView.CLASS;
