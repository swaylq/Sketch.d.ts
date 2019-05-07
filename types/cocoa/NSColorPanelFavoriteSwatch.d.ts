/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSColorPanelFavoriteSwatch<T0 = void, T1 = void, T2 = void> extends NSCollectionViewItem, _NSItemFocusingCollectionViewItemProtocol {
    action<R = string>(): R;
    setAction<R = void, P0 = string>(_v: P0): R;
  }
  namespace NSColorPanelFavoriteSwatch {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSCollectionViewItem, _NSItemFocusingCollectionViewItemProtocol {
      alloc<R = NSColorPanelFavoriteSwatch>(): R;
      new: <R = NSColorPanelFavoriteSwatch>() => R;
    }
  }
}

declare const NSColorPanelFavoriteSwatch: cocoa.NSColorPanelFavoriteSwatch.CLASS;
