/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSToolbarSeparatorItem<T0 = void, T1 = void, T2 = void> extends NSToolbarItem {
    view<R = unknown>(): R;
    _participatesInDefiningMinimumGridWidthForCustomizationPalette<R = boolean>(): R;
    isSeparatorItem<R = boolean>(): R;
    initWithItemIdentifier<R = unknown, P0 = unknown>(_initWithItemIdentifier: P0): R;
    _separatorFinishInit<R = void>(): R;
    wantsToDrawIconIntoLabelAreaInDisplayMode<R = boolean, P0 = number>(_wantsToDrawIconIntoLabelAreaInDisplayMode: P0): R;
    wantsToDrawLabelInDisplayMode<R = boolean, P0 = number>(_wantsToDrawLabelInDisplayMode: P0): R;
    wantsToDrawIconInDisplayMode<R = boolean, P0 = number>(_wantsToDrawIconInDisplayMode: P0): R;
    configureForDisplayMode_andSizeMode<R = void, P0 = number, P1 = number>(_configureForDisplayMode: P0, _andSizeMode: P1): R;
    maxSize<R = CGSize>(): R;
    minSize<R = CGSize>(): R;
  }
  namespace NSToolbarSeparatorItem {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSToolbarItem {
      alloc<R = NSToolbarSeparatorItem>(): R;
      new: <R = NSToolbarSeparatorItem>() => R;
      itemIdentifier<R = unknown>(): R;
    }
  }
}

declare const NSToolbarSeparatorItem: cocoa.NSToolbarSeparatorItem.CLASS;
