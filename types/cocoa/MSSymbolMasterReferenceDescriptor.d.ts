/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSSymbolMasterReferenceDescriptor<T0 = void, T1 = void, T2 = void> extends NSObject, NSPasteboardWritingProtocol, NSPasteboardReadingProtocol {
    cxx_destruct<R = void>(): R;
    symbolID<R = NSString>(): R;
    setSymbolID<R = void, P0 = NSString>(_v: P0): R;
    libraryLocation<R = NSURL>(): R;
    setLibraryLocation<R = void, P0 = NSURL>(_v: P0): R;
    debugDescription<R = NSString>(): R;
    description<R = NSString>(): R;
    hash<R = number>(): R;
    superclass<R = unknown>(): R;
  }
  namespace MSSymbolMasterReferenceDescriptor {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject, NSPasteboardWritingProtocol, NSPasteboardReadingProtocol {
      alloc<R = MSSymbolMasterReferenceDescriptor>(): R;
      new: <R = MSSymbolMasterReferenceDescriptor>() => R;
      pasteboardType<R = unknown>(): R;
    }
  }
}

declare const MSSymbolMasterReferenceDescriptor: cocoa.MSSymbolMasterReferenceDescriptor.CLASS;
