/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSTableViewRowAction<T0 = void, T1 = void, T2 = void> extends NSObject, NSCopyingProtocol {
    dealloc<R = void>(): R;
    _initWithStyle_title_handler<R = unknown, P0 = number, P1 = unknown, P2 = CDUnknownBlockType>(__initWithStyle: P0, _title: P1, _handler: P2): R;
    image<R = NSImage>(): R;
    setImage<R = void, P0 = NSImage>(_v: P0): R;
    handler<R = CDUnknownBlockType>(): R;
    title<R = NSString>(): R;
    setTitle<R = void, P0 = NSString>(_v: P0): R;
    style<R = number>(): R;
    setStyle<R = void, P0 = number>(_v: P0): R;
    backgroundColor<R = NSColor>(): R;
    setBackgroundColor<R = void, P0 = NSColor>(_v: P0): R;
  }
  namespace NSTableViewRowAction {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject, NSCopyingProtocol {
      alloc<R = NSTableViewRowAction>(): R;
      new: <R = NSTableViewRowAction>() => R;
      rowActionWithStyle_title_handler<R = unknown, P0 = number, P1 = unknown, P2 = CDUnknownBlockType>(_rowActionWithStyle: P0, _title: P1, _handler: P2): R;
    }
  }
}

declare const NSTableViewRowAction: cocoa.NSTableViewRowAction.CLASS;
