/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSPrintThumbnailView<T0 = void, T1 = void, T2 = void> extends NSView {
    _drawBorderOfType_withScaleFactor<R = void, P0 = number, P1 = number>(__drawBorderOfType: P0, _withScaleFactor: P1): R;
    _pageOffsetForRow_column<R = number, P0 = number, P1 = number>(__pageOffsetForRow: P0, _column: P1): R;
    invalidateContents<R = void>(): R;
    heightForWidth<R = number, P0 = number>(_heightForWidth: P0): R;
    widthForHeight<R = number, P0 = number>(_widthForHeight: P0): R;
    _paperAspectRatio<R = number>(): R;
    _paperSize<R = CGSize>(): R;
    _paperShadow<R = unknown>(): R;
    _reversePageOrientation<R = boolean>(): R;
    _mirrorHorizontal<R = boolean>(): R;
    _pagesBorderType<R = number>(): R;
    _hasPagesBorder<R = boolean>(): R;
    _pagesDirection<R = number>(): R;
    _pagesLayout<R = CGSize>(): R;
    basePageNumber<R = number>(): R;
    setBasePageNumber<R = void, P0 = number>(_setBasePageNumber: P0): R;
    setOperation<R = void, P0 = unknown>(_setOperation: P0): R;
  }
  namespace NSPrintThumbnailView {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSView {
      alloc<R = NSPrintThumbnailView>(): R;
      new: <R = NSPrintThumbnailView>() => R;
    }
  }
}

declare const NSPrintThumbnailView: cocoa.NSPrintThumbnailView.CLASS;
