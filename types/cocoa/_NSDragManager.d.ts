/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSDragManager<T0 = void, T1 = void, T2 = void> extends NSObject {
    _enumerateDraggingItemsForDrag_pasteboard_withOptions_view_classes_searchOptions_isSource_usingBlock<R = void, P0 = void, P1 = unknown, P2 = number, P3 = unknown, P4 = unknown, P5 = unknown, P6 = boolean, P7 = CDUnknownBlockType>(__enumerateDraggingItemsForDrag: P0, _pasteboard: P1, _withOptions: P2, _view: P3, _classes: P4, _searchOptions: P5, _isSource: P6, _usingBlock: P7): R;
    _enumerateDraggingItemsForDrag_pasteboard_class_view_isSource_usingBlock<R = void, P0 = void, P1 = unknown, P2 = unknown, P3 = unknown, P4 = boolean, P5 = CDUnknownBlockType>(__enumerateDraggingItemsForDrag: P0, _pasteboard: P1, _class: P2, _view: P3, _isSource: P4, _usingBlock: P5): R;
    draggingSessionWithSequenceNumber<R = unknown, P0 = number>(_draggingSessionWithSequenceNumber: P0): R;
    _cancelAllFilePromiseDrags<R = void>(): R;
    _registerFilePromiseDraggingEndedTarget<R = void, P0 = unknown>(__registerFilePromiseDraggingEndedTarget: P0): R;
    _resetAutoscrollTimeDelta<R = void>(): R;
    _autoscrollDate<R = unknown>(): R;
    _setAutoscrollDate<R = void, P0 = unknown>(__setAutoscrollDate: P0): R;
    registerForCompletionOfDrag<R = void, P0 = void>(_registerForCompletionOfDrag: P0): R;
    _dragLocalSource<R = unknown>(): R;
    dragImage_fromWindow_at_offset_event_pasteboard_source_slideBack<R = void, P0 = unknown, P1 = unknown, P2 = CGPoint, P3 = CGSize, P4 = unknown, P5 = unknown, P6 = unknown, P7 = boolean>(_dragImage: P0, _fromWindow: P1, _at: P2, _offset: P3, _event: P4, _pasteboard: P5, _source: P6, _slideBack: P7): R;
    beginDraggingSessionWithItems_fromWindow_withClipRect_event_source<R = unknown, P0 = unknown, P1 = unknown, P2 = CGRect, P3 = unknown, P4 = unknown>(_beginDraggingSessionWithItems: P0, _fromWindow: P1, _withClipRect: P2, _event: P3, _source: P4): R;
    slideImage_from_to<R = void, P0 = unknown, P1 = CGPoint, P2 = CGPoint>(_slideImage: P0, _from: P1, _to: P2): R;
    unregisterDragTypesForWindow<R = boolean, P0 = unknown>(_unregisterDragTypesForWindow: P0): R;
    switchWindow_dragRegistrationToRemoteContext<R = boolean, P0 = unknown, P1 = number>(_switchWindow: P0, _dragRegistrationToRemoteContext: P1): R;
    registerDragTypes_forWindow<R = number, P0 = unknown, P1 = unknown>(_registerDragTypes: P0, _forWindow: P1): R;
  }
  namespace _NSDragManager {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject {
      alloc<R = _NSDragManager>(): R;
      new: <R = _NSDragManager>() => R;
      sharedDragManager<R = unknown>(): R;
      _autoscrollDelay<R = number>(): R;
      initialize<R = void>(): R;
    }
  }
}
