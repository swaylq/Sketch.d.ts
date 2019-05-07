/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSDocumentDragButton<T0 = void, T1 = void, T2 = void> extends NSButton, NSDraggingSourceProtocol {
    _draggingItemFromPasteboardItem<R = unknown, P0 = unknown>(__draggingItemFromPasteboardItem: P0): R;
    _filenameWindowDragPoint<R = CGPoint>(): R;
    _textViewForDragging<R = unknown>(): R;
    _autosaveDocumentIfNeeded<R = void>(): R;
    originalWindow<R = unknown>(): R;
    _showDragError_forFilename<R = void, P0 = number, P1 = unknown>(__showDragError: P0, _forFilename: P1): R;
    _dragFile_fromRect_slideBack_event<R = void, P0 = unknown, P1 = CGRect, P2 = boolean, P3 = unknown>(__dragFile: P0, _fromRect: P1, _slideBack: P2, _event: P3): R;
    draggingSourceOperationMaskForLocal<R = number, P0 = boolean>(_draggingSourceOperationMaskForLocal: P0): R;
    representedFilename<R = unknown>(): R;
    setRepresentedFilename<R = void, P0 = unknown>(_setRepresentedFilename: P0): R;
    debugDescription<R = NSString>(): R;
    description<R = NSString>(): R;
    hash<R = number>(): R;
    superclass<R = unknown>(): R;
  }
  namespace NSDocumentDragButton {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSButton, NSDraggingSourceProtocol {
      alloc<R = NSDocumentDragButton>(): R;
      new: <R = NSDocumentDragButton>() => R;
    }
  }
}

declare const NSDocumentDragButton: cocoa.NSDocumentDragButton.CLASS;
