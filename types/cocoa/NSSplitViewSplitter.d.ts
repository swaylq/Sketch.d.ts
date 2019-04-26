/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSSplitViewSplitter<T0 = void, T1 = void, T2 = void> extends NSAccessibilityElement {
    index<R = number>(): R;
    hash<R = number>(): R;
    initWithIndex_parent<R = unknown, P0 = number, P1 = unknown>(_initWithIndex: P0, _parent: P1): R;
    accessibilityHelp<R = unknown>(): R;
    _accessibilityNextContentView<R = unknown>(): R;
    accessibilityNextContents<R = unknown>(): R;
    _accessibilityPreviousContentView<R = unknown>(): R;
    accessibilityPreviousContents<R = unknown>(): R;
    accessibilityOrientation<R = number>(): R;
    accessibilityMaxValue<R = unknown>(): R;
    accessibilityMinValue<R = unknown>(): R;
    setAccessibilityValue<R = void, P0 = unknown>(_setAccessibilityValue: P0): R;
    accessibilityValue<R = unknown>(): R;
    _accessibilityMaxValue<R = number>(): R;
    _accessibilityMinValue<R = number>(): R;
    _accessibilityMinValueWithoutCollapsing<R = number>(): R;
    _accessibilityNextSplitterMinCoordinate<R = number>(): R;
    _accessibilityPreviousSplitterMaxCoordinate<R = number>(): R;
    _accessibilitySplitterMinCoordinate<R = number>(): R;
  }
  namespace NSSplitViewSplitter {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSAccessibilityElement {
      alloc<R = NSSplitViewSplitter>(): R;
      new: <R = NSSplitViewSplitter>() => R;
      splitterWithIndex_parent<R = unknown, P0 = number, P1 = unknown>(_splitterWithIndex: P0, _parent: P1): R;
    }
  }
}

declare const NSSplitViewSplitter: cocoa.NSSplitViewSplitter.CLASS;
