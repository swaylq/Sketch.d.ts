/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSPrintPreviewController<T0 = void, T1 = void, T2 = void> extends NSViewController {
    printInfoDidChange<R = void, P0 = unknown>(_printInfoDidChange: P0): R;
    userClickedPageNumberControl<R = void, P0 = unknown>(_userClickedPageNumberControl: P0): R;
    observeValueForKeyPath_ofObject_change_context<R = void, P0 = unknown, P1 = unknown, P2 = unknown, P3 = void>(_observeValueForKeyPath: P0, _ofObject: P1, _change: P2, _context: P3): R;
    stop<R = void>(): R;
    start<R = void>(): R;
    setMaxViewFrameSize<R = void, P0 = CGSize>(_setMaxViewFrameSize: P0): R;
    _checkSizeValidity<R = boolean, P0 = CGSize>(__checkSizeValidity: P0): R;
    _checkOriginValidity<R = boolean, P0 = CGPoint>(__checkOriginValidity: P0): R;
    _tileView<R = void>(): R;
    _updatePageNumberView<R = void>(): R;
    _sheetAlignedPageNumberForRawPageNumber<R = number, P0 = number>(__sheetAlignedPageNumberForRawPageNumber: P0): R;
    _sheetNumberForRawPageNumber<R = number, P0 = number>(__sheetNumberForRawPageNumber: P0): R;
    _lastPageNumber<R = number>(): R;
    _firstPageNumber<R = number>(): R;
    _nUpPages<R = number>(): R;
    setRepresentedObject<R = void, P0 = unknown>(_setRepresentedObject: P0): R;
    initWithOperation<R = unknown, P0 = unknown>(_initWithOperation: P0): R;
  }
  namespace NSPrintPreviewController {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSViewController {
      alloc<R = NSPrintPreviewController>(): R;
      new: <R = NSPrintPreviewController>() => R;
    }
  }
}

declare const NSPrintPreviewController: cocoa.NSPrintPreviewController.CLASS;
