/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSFilePromiseReceiver<T0 = void, T1 = void, T2 = void> extends NSObject, NSPasteboardReadingProtocol {
    draggingCancelled<R = void, P0 = unknown>(_draggingCancelled: P0): R;
    draggingEnded<R = void, P0 = unknown>(_draggingEnded: P0): R;
    receivePromisedFilesAtDestination_options_operationQueue_reader<R = void, P0 = unknown, P1 = unknown, P2 = unknown, P3 = CDUnknownBlockType>(_receivePromisedFilesAtDestination: P0, _options: P1, _operationQueue: P2, _reader: P3): R;
    registerDestinationLocation_options_operationQueue_reader<R = void, P0 = unknown, P1 = unknown, P2 = unknown, P3 = CDUnknownBlockType>(_registerDestinationLocation: P0, _options: P1, _operationQueue: P2, _reader: P3): R;
    registerDesinationLocation_options_operationQueu_reader<R = void, P0 = unknown, P1 = unknown, P2 = unknown, P3 = CDUnknownBlockType>(_registerDesinationLocation: P0, _options: P1, _operationQueu: P2, _reader: P3): R;
    dealloc<R = void>(): R;
    providerIsUsingFileCoordination<R = boolean>(): R;
    _setPasteboardItem<R = void, P0 = unknown>(__setPasteboardItem: P0): R;
    _setPasteboard<R = void, P0 = unknown>(__setPasteboard: P0): R;
    alternateFileTypes<R = NSArray>(): R;
    fileNames<R = NSArray>(): R;
    fileTypes<R = NSArray>(): R;
    debugDescription<R = NSString>(): R;
    description<R = NSString>(): R;
    hash<R = number>(): R;
    superclass<R = unknown>(): R;
  }
  namespace NSFilePromiseReceiver {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject, NSPasteboardReadingProtocol {
      alloc<R = NSFilePromiseReceiver>(): R;
      new: <R = NSFilePromiseReceiver>() => R;
      acceptableDragTypes<R = unknown>(): R;
      readableDraggedTypes<R = unknown>(): R;
    }
  }
}

declare const NSFilePromiseReceiver: cocoa.NSFilePromiseReceiver.CLASS;
