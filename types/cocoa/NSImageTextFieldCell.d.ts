/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSImageTextFieldCell<T0 = void, T1 = void, T2 = void> extends NSTextFieldCell, NSOutlineViewInlineOutlineCellProtocol {
    _spacingFromImageToText<R = number>(): R;
    _currentFontSize<R = number>(): R;
    outlineCellFrame<R = CGRect>(): R;
    setOutlineCellFrame<R = void, P0 = CGRect>(_v: P0): R;
    imageSize<R = number>(): R;
    rowSizeStyle<R = number>(): R;
    setRowSizeStyle<R = void, P0 = number>(_v: P0): R;
    image<R = NSImage>(): R;
    setImage<R = void, P0 = NSImage>(_v: P0): R;
    debugDescription<R = NSString>(): R;
    description<R = NSString>(): R;
    hash<R = number>(): R;
    superclass<R = unknown>(): R;
  }
  namespace NSImageTextFieldCell {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSTextFieldCell, NSOutlineViewInlineOutlineCellProtocol {
      alloc<R = NSImageTextFieldCell>(): R;
      new: <R = NSImageTextFieldCell>() => R;
      _sourceListFont<R = unknown>(): R;
    }
  }
}

declare const NSImageTextFieldCell: cocoa.NSImageTextFieldCell.CLASS;
