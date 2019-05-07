/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSRuleEditorViewSlice<T0 = void, T1 = void, T2 = void> extends NSView, NSCodingProtocol {
    _animationTargetRect<R = CGRect>(): R;
    _setAnimationTargetRect<R = void, P0 = CGRect>(__setAnimationTargetRect: P0): R;
    _setHideNonPartDrawing<R = void, P0 = boolean>(__setHideNonPartDrawing: P0): R;
    _setLastSelected<R = void, P0 = boolean>(__setLastSelected: P0): R;
    _isLastSelected<R = boolean>(): R;
    _setSelected<R = void, P0 = boolean>(__setSelected: P0): R;
    _isSelected<R = boolean>(): R;
    rowIndex<R = number>(): R;
    setRowIndex<R = void, P0 = number>(_setRowIndex: P0): R;
    indentation<R = number>(): R;
    setIndentation<R = void, P0 = number>(_setIndentation: P0): R;
    _reconfigureSubviews<R = void>(): R;
    _relayoutSubviewsWidthChanged<R = void, P0 = boolean>(__relayoutSubviewsWidthChanged: P0): R;
    containsDisplayValue<R = boolean, P0 = unknown>(_containsDisplayValue: P0): R;
    _curveColorForIndentation<R = unknown, P0 = number>(__curveColorForIndentation: P0): R;
    initWithFrame_ruleEditorView<R = unknown, P0 = CGRect, P1 = unknown>(_initWithFrame: P0, _ruleEditorView: P1): R;
  }
  namespace NSRuleEditorViewSlice {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSView, NSCodingProtocol {
      alloc<R = NSRuleEditorViewSlice>(): R;
      new: <R = NSRuleEditorViewSlice>() => R;
    }
  }
}

declare const NSRuleEditorViewSlice: cocoa.NSRuleEditorViewSlice.CLASS;
