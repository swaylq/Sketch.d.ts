/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSFilePromiseDragSource<T0 = void, T1 = void, T2 = void> extends NSObject, NSDraggingSourceProtocol {
    pasteboard_provideDataForType<R = void, P0 = unknown, P1 = unknown>(_pasteboard: P0, _provideDataForType: P1): R;
    setTypes_onPasteboard<R = void, P0 = unknown, P1 = unknown>(_setTypes: P0, _onPasteboard: P1): R;
    pasteboard_provideDataForType_itemIdentifier<R = void, P0 = unknown, P1 = unknown, P2 = number>(_pasteboard: P0, _provideDataForType: P1, _itemIdentifier: P2): R;
    getFilenamesAndDropLocation<R = void>(): R;
    copyDropDirectory<R = __CFURL>(): R;
    draggedImage_endedAt_operation<R = void, P0 = unknown, P1 = CGPoint, P2 = number>(_draggedImage: P0, _endedAt: P1, _operation: P2): R;
    ignoreModifierKeysWhileDragging<R = boolean>(): R;
    draggedImage_movedTo<R = void, P0 = unknown, P1 = CGPoint>(_draggedImage: P0, _movedTo: P1): R;
    draggedImage_beganAt<R = void, P0 = unknown, P1 = CGPoint>(_draggedImage: P0, _beganAt: P1): R;
    draggingSourceOperationMaskForLocal<R = number, P0 = boolean>(_draggingSourceOperationMaskForLocal: P0): R;
    didEndDrag<R = void>(): R;
    prepareForDrag<R = void>(): R;
    dealloc<R = void>(): R;
    initWithSource<R = unknown, P0 = unknown>(_initWithSource: P0): R;
    debugDescription<R = NSString>(): R;
    description<R = NSString>(): R;
    hash<R = number>(): R;
    superclass<R = unknown>(): R;
  }
  namespace NSFilePromiseDragSource {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject, NSDraggingSourceProtocol {
      alloc<R = NSFilePromiseDragSource>(): R;
      new: <R = NSFilePromiseDragSource>() => R;
    }
  }
}

declare const NSFilePromiseDragSource: cocoa.NSFilePromiseDragSource.CLASS;
