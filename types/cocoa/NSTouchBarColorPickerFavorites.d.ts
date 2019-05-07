/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSTouchBarColorPickerFavorites<T0 = void, T1 = void, T2 = void> extends NSControl, NSCollectionViewDelegateProtocol, NSCollectionViewDataSourceProtocol, NSTouchBarColorPickerViewProtocol {
    _favoritesDidChange<R = void, P0 = unknown>(__favoritesDidChange: P0): R;
    setSavedColors<R = void, P0 = unknown>(_setSavedColors: P0): R;
    savedColors<R = unknown>(): R;
    allowsAlpha<R = boolean>(): R;
    setAllowsAlpha<R = void, P0 = boolean>(_v: P0): R;
    currentColor<R = NSColor>(): R;
    setCurrentColor<R = void, P0 = NSColor>(_v: P0): R;
    allowedColorSpaces<R = NSArray>(): R;
    setAllowedColorSpaces<R = void, P0 = NSArray>(_v: P0): R;
    presentedColors<R = NSArray>(): R;
    action<R = string>(): R;
    setAction<R = void, P0 = string>(_v: P0): R;
    debugDescription<R = NSString>(): R;
    description<R = NSString>(): R;
    hash<R = number>(): R;
    superclass<R = unknown>(): R;
    target<R = unknown>(): R;
    setTarget<R = void, P0 = unknown>(_v: P0): R;
  }
  namespace NSTouchBarColorPickerFavorites {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSControl, NSCollectionViewDelegateProtocol, NSCollectionViewDataSourceProtocol, NSTouchBarColorPickerViewProtocol {
      alloc<R = NSTouchBarColorPickerFavorites>(): R;
      new: <R = NSTouchBarColorPickerFavorites>() => R;
    }
  }
}

declare const NSTouchBarColorPickerFavorites: cocoa.NSTouchBarColorPickerFavorites.CLASS;
