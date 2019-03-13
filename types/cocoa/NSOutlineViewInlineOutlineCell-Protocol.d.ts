/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSOutlineViewInlineOutlineCellProtocol<T = any> extends NSObjectProtocol {
    updateOutlineCellFrame_withCellFrame_inView<R = void, P0 = CGRect, P1 = CGRect, P2 = NSView>(_updateOutlineCellFrame: P0, _withCellFrame: P1, _inView: P2): R;
    outlineCellFrame<R = CGRect>(): R;
    setOutlineCellFrame<R = void, P0 = CGRect>(_v: P0): R;
  }
  namespace classes {
    export interface NSOutlineViewInlineOutlineCellProtocol<T = any> extends NSObjectProtocol {  }
  }
}
