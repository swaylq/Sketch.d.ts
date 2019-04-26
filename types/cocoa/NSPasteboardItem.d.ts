/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSPasteboardItem<T0 = void, T1 = void, T2 = void> extends NSObject, _NSPasteboardPromiseProviderAgencyProtocol, NSPasteboardWritingProtocol, NSPasteboardReadingProtocol {
    propertyListForType<R = unknown, P0 = unknown>(_propertyListForType: P0): R;
    stringForType<R = unknown, P0 = unknown>(_stringForType: P0): R;
    dataForType<R = unknown, P0 = unknown>(_dataForType: P0): R;
    setPropertyList_forType<R = boolean, P0 = unknown, P1 = unknown>(_setPropertyList: P0, _forType: P1): R;
    setString_forType<R = boolean, P0 = unknown, P1 = unknown>(_setString: P0, _forType: P1): R;
    setData_forType<R = boolean, P0 = unknown, P1 = unknown>(_setData: P0, _forType: P1): R;
    setDataProvider_forTypes<R = boolean, P0 = unknown, P1 = unknown>(_setDataProvider: P0, _forTypes: P1): R;
    _pasteboard<R = unknown>(): R;
    _index<R = number>(): R;
    availableTypeFromArray<R = unknown, P0 = unknown>(_availableTypeFromArray: P0): R;
    _auxObject<R = unknown>(): R;
    _setPasteboard_index_generation<R = void, P0 = unknown, P1 = number, P2 = number>(__setPasteboard: P0, _index: P1, _generation: P2): R;
    dealloc<R = void>(): R;
    types<R = NSArray>(): R;
    debugDescription<R = NSString>(): R;
    description<R = NSString>(): R;
    hash<R = number>(): R;
    superclass<R = unknown>(): R;
  }
  namespace NSPasteboardItem {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject, _NSPasteboardPromiseProviderAgencyProtocol, NSPasteboardWritingProtocol, NSPasteboardReadingProtocol {
      alloc<R = NSPasteboardItem>(): R;
      new: <R = NSPasteboardItem>() => R;
    }
  }
}

declare const NSPasteboardItem: cocoa.NSPasteboardItem.CLASS;
