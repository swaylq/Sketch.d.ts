/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSTouchBarPaletteBarItem<T0 = void, T1 = void, T2 = void> extends NSObject, NSCopyingProtocol {
    maxSize<R = CGSize>(): R;
    preferredSize<R = CGSize>(): R;
    minSize<R = CGSize>(): R;
    _updateMinMaxSizeIfNeeded<R = void>(): R;
    itemSnapshotWithSize<R = unknown, P0 = CGSize>(_itemSnapshotWithSize: P0): R;
    currentItemSnapshot<R = unknown>(): R;
    dealloc<R = void>(): R;
    disabledContainingGroupIdentifier<R = NSString>(): R;
    setDisabledContainingGroupIdentifier<R = void, P0 = NSString>(_v: P0): R;
    customizability<R = number>(): R;
    representedItem<R = NSTouchBarItem>(): R;
    itemIdentifier<R = NSString>(): R;
  }
  namespace _NSTouchBarPaletteBarItem {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject, NSCopyingProtocol {
      alloc<R = _NSTouchBarPaletteBarItem>(): R;
      new: <R = _NSTouchBarPaletteBarItem>() => R;
      paletteItemForBarItem_customizability<R = unknown, P0 = unknown, P1 = number>(_paletteItemForBarItem: P0, _customizability: P1): R;
    }
  }
}
