/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSRulerMarker<T = any> extends cocoa.NSObject, cocoa.NSCopyingProtocol, cocoa.NSCodingProtocol {
    cxx_destruct<R = void>(): R;
    _locationOfOriginPoint<R = number, P0 = number>(__locationOfOriginPoint: P0): R;
    trackMouse_adding<R = boolean, P0 = unknown, P1 = boolean>(_trackMouse: P0, _adding: P1): R;
    drawRect<R = void, P0 = cocoa.CGRect>(_drawRect: P0): R;
    _compositePointInRuler<R = cocoa.CGPoint>(): R;
    _originPointInRuler<R = cocoa.CGPoint>(): R;
    dealloc<R = void>(): R;
    initWithRulerView_markerLocation_image_imageOrigin<R = unknown, P0 = unknown, P1 = number, P2 = unknown, P3 = cocoa.CGPoint>(_initWithRulerView: P0, _markerLocation: P1, _image: P2, _imageOrigin: P3): R;
    thicknessRequiredInRuler<R = number>(): R;
    imageRectInRuler<R = cocoa.CGRect>(): R;
    representedObject<R = cocoa.NSCopying>(): R;
    setRepresentedObject<R = void, P0 = cocoa.NSCopying>(_v: P0): R;
    dragging<R = boolean>(): R;
    removable<R = boolean>(): R;
    setRemovable<R = void, P0 = boolean>(_v: P0): R;
    movable<R = boolean>(): R;
    setMovable<R = void, P0 = boolean>(_v: P0): R;
    imageOrigin<R = cocoa.CGPoint>(): R;
    setImageOrigin<R = void, P0 = cocoa.CGPoint>(_v: P0): R;
    image<R = cocoa.NSImage>(): R;
    setImage<R = void, P0 = cocoa.NSImage>(_v: P0): R;
    markerLocation<R = number>(): R;
    setMarkerLocation<R = void, P0 = number>(_v: P0): R;
    ruler<R = cocoa.NSRulerView>(): R;
  }
  namespace classes {
    export interface NSRulerMarker<T = any> extends cocoa.classes.NSObject, cocoa.classes.NSCopyingProtocol, cocoa.classes.NSCodingProtocol {
      alloc<R = NSRulerMarker>(): R;
      new: <R = NSRulerMarker>() => R;
      initialize<R = void>(): R;
      _numericIndicatorFormatter<R = unknown>(): R;
      _numericIndicatorField<R = unknown>(): R;
      tabStopContextMenuForMarker_withCompletionHandler<R = unknown, P0 = unknown, P1 = cocoa.CDUnknownBlockType>(_tabStopContextMenuForMarker: P0, _withCompletionHandler: P1): R;
      _tabStopContextMenuAction<R = void, P0 = unknown>(__tabStopContextMenuAction: P0): R;
      decimalTabMarkerWithRulerView_location<R = unknown, P0 = unknown, P1 = number>(_decimalTabMarkerWithRulerView: P0, _location: P1): R;
      centerTabMarkerWithRulerView_location<R = unknown, P0 = unknown, P1 = number>(_centerTabMarkerWithRulerView: P0, _location: P1): R;
      rightTabMarkerWithRulerView_location<R = unknown, P0 = unknown, P1 = number>(_rightTabMarkerWithRulerView: P0, _location: P1): R;
      leftTabMarkerWithRulerView_location<R = unknown, P0 = unknown, P1 = number>(_leftTabMarkerWithRulerView: P0, _location: P1): R;
      rightIndentMarkerWithRulerView_location<R = unknown, P0 = unknown, P1 = number>(_rightIndentMarkerWithRulerView: P0, _location: P1): R;
      leftIndentMarkerWithRulerView_location<R = unknown, P0 = unknown, P1 = number>(_leftIndentMarkerWithRulerView: P0, _location: P1): R;
      firstIndentMarkerWithRulerView_location<R = unknown, P0 = unknown, P1 = number>(_firstIndentMarkerWithRulerView: P0, _location: P1): R;
      rightMarginMarkerWithRulerView_location<R = unknown, P0 = unknown, P1 = number>(_rightMarginMarkerWithRulerView: P0, _location: P1): R;
      leftMarginMarkerWithRulerView_location<R = unknown, P0 = unknown, P1 = number>(_leftMarginMarkerWithRulerView: P0, _location: P1): R;
    }
  }
}

declare const NSRulerMarker: cocoa.classes.NSRulerMarker;
