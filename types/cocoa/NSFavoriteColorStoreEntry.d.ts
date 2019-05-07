/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSFavoriteColorStoreEntry<T0 = void, T1 = void, T2 = void> extends NSObject, NSCopyingProtocol {
    description<R = unknown>(): R;
    hash<R = number>(): R;
    dealloc<R = void>(): R;
    initWithColor_customClassName_customColorData<R = unknown, P0 = unknown, P1 = unknown, P2 = unknown>(_initWithColor: P0, _customClassName: P1, _customColorData: P2): R;
    customColorData<R = NSData>(): R;
    customColorClassName<R = NSString>(): R;
    color<R = NSColor>(): R;
  }
  namespace NSFavoriteColorStoreEntry {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject, NSCopyingProtocol {
      alloc<R = NSFavoriteColorStoreEntry>(): R;
      new: <R = NSFavoriteColorStoreEntry>() => R;
      customEntryWithColorClassName_data_backstopColor<R = unknown, P0 = unknown, P1 = unknown, P2 = unknown>(_customEntryWithColorClassName: P0, _data: P1, _backstopColor: P2): R;
      entryWithColor<R = unknown, P0 = unknown>(_entryWithColor: P0): R;
    }
  }
}

declare const NSFavoriteColorStoreEntry: cocoa.NSFavoriteColorStoreEntry.CLASS;
