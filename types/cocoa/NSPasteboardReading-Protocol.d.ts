/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSPasteboardReadingProtocol<T0 = void, T1 = void, T2 = void> {
    initWithPasteboardPropertyList_ofType<R = unknown, P0 = unknown, P1 = NSString>(_initWithPasteboardPropertyList: P0, _ofType: P1): R;
  }
  namespace NSPasteboardReadingProtocol {
    export interface CLASS<T0 = void, T1 = void, T2 = void> {
      readableTypesForPasteboard<R = NSArray, P0 = NSPasteboard>(_readableTypesForPasteboard: P0): R;
      readingOptionsForType_pasteboard<R = number, P0 = NSString, P1 = NSPasteboard>(_readingOptionsForType: P0, _pasteboard: P1): R;
    }
  }
}
