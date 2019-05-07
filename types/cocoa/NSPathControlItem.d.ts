/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSPathControlItem<T0 = void, T1 = void, T2 = void> extends NSObject {
    setURL<R = void, P0 = unknown>(_setURL: P0): R;
    pathComponentCell<R = unknown>(): R;
    dealloc<R = void>(): R;
    initWithPathComponentCell<R = unknown, P0 = unknown>(_initWithPathComponentCell: P0): R;
    URL<R = NSURL>(): R;
    image<R = NSImage>(): R;
    setImage<R = void, P0 = NSImage>(_v: P0): R;
    attributedTitle<R = NSAttributedString>(): R;
    setAttributedTitle<R = void, P0 = NSAttributedString>(_v: P0): R;
    title<R = NSString>(): R;
    setTitle<R = void, P0 = NSString>(_v: P0): R;
  }
  namespace NSPathControlItem {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject {
      alloc<R = NSPathControlItem>(): R;
      new: <R = NSPathControlItem>() => R;
      itemWithCell<R = unknown, P0 = unknown>(_itemWithCell: P0): R;
    }
  }
}

declare const NSPathControlItem: cocoa.NSPathControlItem.CLASS;
