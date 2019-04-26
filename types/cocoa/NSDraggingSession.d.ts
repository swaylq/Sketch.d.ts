/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSDraggingSession<T0 = void, T1 = void, T2 = void> extends NSObject {
    enumerateDraggingItemsWithOptions_forView_classes_searchOptions_usingBlock<R = void, P0 = number, P1 = unknown, P2 = unknown, P3 = unknown, P4 = CDUnknownBlockType>(_enumerateDraggingItemsWithOptions: P0, _forView: P1, _classes: P2, _searchOptions: P3, _usingBlock: P4): R;
    enumerateDraggingItemsForClass_view_usingBlock<R = void, P0 = unknown, P1 = unknown, P2 = CDUnknownBlockType>(_enumerateDraggingItemsForClass: P0, _view: P1, _usingBlock: P2): R;
    setDraggingLocation<R = CGPoint>(): R;
    setLocationForSlideBack<R = void, P0 = CGPoint>(_setLocationForSlideBack: P0): R;
    locationForSlideBack<R = CGPoint>(): R;
    dealloc<R = void>(): R;
    _commonInitWithPasteboard_source<R = unknown, P0 = unknown, P1 = unknown>(__commonInitWithPasteboard: P0, _source: P1): R;
    _compositeImage<R = unknown>(): R;
    _initWithPasteboard_image_offset_source<R = unknown, P0 = unknown, P1 = unknown, P2 = CGPoint, P3 = unknown>(__initWithPasteboard: P0, _image: P1, _offset: P2, _source: P3): R;
    _initWithPasteboard_draggingItems_clippingRect_source<R = unknown, P0 = unknown, P1 = unknown, P2 = CGRect, P3 = unknown>(__initWithPasteboard: P0, _draggingItems: P1, _clippingRect: P2, _source: P3): R;
    filePromiseProviders<R = NSArray>(): R;
    setFilePromiseProviders<R = void, P0 = NSArray>(_v: P0): R;
    filePromiseDragSource<R = NSDraggingSource>(): R;
    alternateDragSource<R = unknown>(): R;
    setAlternateDragSource<R = void, P0 = unknown>(_v: P0): R;
    source<R = NSDraggingSource>(): R;
    draggingImageOffset<R = CGPoint>(): R;
    setDraggingImageOffset<R = void, P0 = CGPoint>(_v: P0): R;
    dragRef<R = OpaqueCoreDrag>(): R;
    setDragRef<R = void, P0 = OpaqueCoreDrag>(_v: P0): R;
    draggingLocation<R = CGPoint>(): R;
    setDraggingLocation<R = void, P0 = CGPoint>(_v: P0): R;
    draggingSequenceNumber<R = number>(): R;
    draggingPasteboard<R = NSPasteboard>(): R;
    draggingLeaderIndex<R = number>(): R;
    setDraggingLeaderIndex<R = void, P0 = number>(_v: P0): R;
    animatesToDraggingFormationOnBeginDrag<R = boolean>(): R;
    setAnimatesToDraggingFormationOnBeginDrag<R = void, P0 = boolean>(_v: P0): R;
    animatesToStartingPositionsOnCancelOrFail<R = boolean>(): R;
    setAnimatesToStartingPositionsOnCancelOrFail<R = void, P0 = boolean>(_v: P0): R;
    draggingFormation<R = number>(): R;
    setDraggingFormation<R = void, P0 = number>(_v: P0): R;
  }
  namespace NSDraggingSession {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject {
      alloc<R = NSDraggingSession>(): R;
      new: <R = NSDraggingSession>() => R;
    }
  }
}

declare const NSDraggingSession: cocoa.NSDraggingSession.CLASS;
