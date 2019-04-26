/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSBaseTransformInspectorItem<T0 = void, T1 = void, T2 = void> extends MSInspectorItem {
    areAllLayersFlippedVertically<R = boolean>(): R;
    areAllLayersFlippedHorizontally<R = boolean>(): R;
    clearFlipSegmentedControl<R = void>(): R;
    updateFlipSegmentedControl<R = void>(): R;
    textFieldAction<R = void, P0 = unknown>(_textFieldAction: P0): R;
    initWithTitle_textFieldLabel<R = unknown, P0 = unknown, P1 = unknown>(_initWithTitle: P0, _textFieldLabel: P1): R;
    textFieldTitle<R = NSString>(): R;
    setTextFieldTitle<R = void, P0 = NSString>(_v: P0): R;
    itemTitle<R = NSString>(): R;
    setItemTitle<R = void, P0 = NSString>(_v: P0): R;
    titleLabel<R = NSTextField>(): R;
    setTitleLabel<R = void, P0 = NSTextField>(_v: P0): R;
    textFieldLabel<R = NSTextField>(): R;
    setTextFieldLabel<R = void, P0 = NSTextField>(_v: P0): R;
    textFieldFormatter<R = MSMathNumberFormatter>(): R;
    setTextFieldFormatter<R = void, P0 = MSMathNumberFormatter>(_v: P0): R;
    flipSegmentedControl<R = NSSegmentedControl>(): R;
    setFlipSegmentedControl<R = void, P0 = NSSegmentedControl>(_v: P0): R;
    textField<R = MSUpDownTextField>(): R;
    setTextField<R = void, P0 = MSUpDownTextField>(_v: P0): R;
  }
  namespace MSBaseTransformInspectorItem {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends MSInspectorItem {
      alloc<R = MSBaseTransformInspectorItem>(): R;
      new: <R = MSBaseTransformInspectorItem>() => R;
    }
  }
}

declare const MSBaseTransformInspectorItem: cocoa.MSBaseTransformInspectorItem.CLASS;
