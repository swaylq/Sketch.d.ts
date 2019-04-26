/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSThemeImageViewDelegateProtocol<T0 = void, T1 = void, T2 = void> {
    imageForThemeImageView<R = NSImage, P0 = MSThemeImageView>(_imageForThemeImageView: P0): R;
  }
  namespace MSThemeImageViewDelegateProtocol {
    export interface CLASS<T0 = void, T1 = void, T2 = void> {}
  }
}
