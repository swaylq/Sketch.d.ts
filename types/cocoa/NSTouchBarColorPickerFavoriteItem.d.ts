/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSTouchBarColorPickerFavoriteItem<T0 = void, T1 = void, T2 = void> extends NSCollectionViewItem, NSGestureRecognizerDelegateProtocol {
    pressItem<R = void, P0 = unknown>(_pressItem: P0): R;
    setHighlighted<R = void, P0 = boolean>(_setHighlighted: P0): R;
    selectionHandler<R = CDUnknownBlockType>(): R;
    setSelectionHandler<R = void, P0 = CDUnknownBlockType>(_v: P0): R;
    displayedColor<R = NSColor>(): R;
    setDisplayedColor<R = void, P0 = NSColor>(_v: P0): R;
    debugDescription<R = NSString>(): R;
    description<R = NSString>(): R;
    hash<R = number>(): R;
    superclass<R = unknown>(): R;
  }
  namespace NSTouchBarColorPickerFavoriteItem {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSCollectionViewItem, NSGestureRecognizerDelegateProtocol {
      alloc<R = NSTouchBarColorPickerFavoriteItem>(): R;
      new: <R = NSTouchBarColorPickerFavoriteItem>() => R;
    }
  }
}

declare const NSTouchBarColorPickerFavoriteItem: cocoa.NSTouchBarColorPickerFavoriteItem.CLASS;
